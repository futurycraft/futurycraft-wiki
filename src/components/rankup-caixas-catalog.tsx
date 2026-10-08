"use client";

import { useMemo, useState } from "react";
import {
  rankupCaixas,
  rankupCaixasCategorias,
  type RankupCaixa,
  type RankupCaixaRecompensa,
} from "@/data/rankup-caixas";

function normalizar(texto: string): string {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function formatarChance(chance: number): string {
  return `${chance.toLocaleString("pt-BR", { maximumFractionDigits: 6 })}%`;
}

function Raridade({ chance }: { chance: number }) {
  let label = "Comum";
  let cls = "border-border bg-bg-raised text-text-muted";
  if (chance < 1) {
    label = "Lendária";
    cls = "border-accent/40 bg-accent-glow text-accent";
  } else if (chance < 5) {
    label = "Rara";
    cls = "border-border-bright bg-bg-card text-text";
  } else if (chance < 15) {
    label = "Incomum";
    cls = "border-border bg-bg-raised text-text-muted";
  }
  return (
    <span
      className={`rounded-full border px-2 py-0.5 text-[0.5625rem] font-semibold uppercase tracking-widest ${cls}`}
    >
      {label}
    </span>
  );
}

function LinhaRecompensa({ r }: { r: RankupCaixaRecompensa }) {
  const cat = rankupCaixasCategorias.find((c) => c.id === r.categoria);
  return (
    <tr className="border-t border-border/60">
      <td className="px-3 py-2.5 sm:px-4">
        <span className="text-xs font-semibold text-text sm:text-sm">{r.nome}</span>
        <span className="mt-0.5 block text-[0.625rem] text-text-muted">
          {cat?.nome ?? r.categoria}
          {r.detalhe && <span className="text-text-dim"> · {r.detalhe}</span>}
        </span>
      </td>
      <td className="whitespace-nowrap px-3 py-2.5 text-right text-xs tabular-nums text-text sm:px-4 sm:text-sm">
        {formatarChance(r.chance)}
      </td>
      <td className="whitespace-nowrap px-3 py-2.5 text-right sm:px-4">
        <Raridade chance={r.chance} />
      </td>
    </tr>
  );
}

function CartaoCaixa({ caixa, recompensas }: { caixa: RankupCaixa; recompensas: RankupCaixaRecompensa[] }) {
  const total = caixa.recompensas.length;
  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-bg-card">
      <header className="flex flex-wrap items-center gap-2 border-b border-border bg-bg-raised/50 px-4 py-3">
        <span className="text-base font-semibold text-text">{caixa.nome}</span>
        <span className="rounded-full border border-border bg-bg-raised px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-widest text-text-muted">
          {caixa.chave}
        </span>
        <span className="ml-auto text-xs text-text-muted">
          {recompensas.length === total ? "" : `${recompensas.length} de `}
          {total} recompensas
        </span>
      </header>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-bg-raised text-[0.625rem] uppercase tracking-widest text-text-muted">
              <th scope="col" className="px-3 py-2 font-semibold sm:px-4">
                Recompensa
              </th>
              <th scope="col" className="px-3 py-2 text-right font-semibold sm:px-4">
                Chance
              </th>
              <th scope="col" className="px-3 py-2 text-right font-semibold sm:px-4">
                Raridade
              </th>
            </tr>
          </thead>
          <tbody>
            {recompensas.map((r, i) => (
              <LinhaRecompensa key={r.nome + i} r={r} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function RankupCaixasCatalog() {
  const [query, setQuery] = useState("");
  const [categoria, setCategoria] = useState<string>("todas");
  const [caixaSel, setCaixaSel] = useState<string>("todas");

  const filtros = useMemo(() => {
    const q = normalizar(query.trim());
    return rankupCaixas
      .filter((c) => caixaSel === "todas" || c.id === caixaSel)
      .map((c) => ({
        caixa: c,
        recompensas: c.recompensas.filter((r) => {
          if (categoria !== "todas" && r.categoria !== categoria) return false;
          if (!q) return true;
          return (
            normalizar(r.nome).includes(q) ||
            normalizar(r.detalhe).includes(q) ||
            normalizar(c.nome).includes(q) ||
            normalizar(c.chave).includes(q)
          );
        }),
      }))
      .filter((g) => g.recompensas.length > 0);
  }, [query, categoria, caixaSel]);

  const totalRecompensas = rankupCaixas.reduce((acc, c) => acc + c.recompensas.length, 0);
  const exibidas = filtros.reduce((acc, g) => acc + g.recompensas.length, 0);

  return (
    <div>
      <div className="mt-4">
        <label htmlFor="caixas-search" className="sr-only">
          Pesquisar recompensa por nome ou quantidade
        </label>
        <input
          id="caixas-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Pesquisar recompensa (ex.: Spawner de Vaca, +100 Blocos, R$ 5.000)…"
          className="w-full rounded-xl border border-border bg-bg-card px-4 py-3 text-sm text-text placeholder:text-text-muted focus:border-accent focus:outline-none"
        />
      </div>

      <div className="mt-5 flex flex-col gap-4">
        <div>
          <span className="text-[0.625rem] font-semibold uppercase tracking-widest text-text-muted">
            Tipo de recompensa
          </span>
          <div className="mt-2 flex flex-wrap gap-2">
            <button
              key="todas"
              type="button"
              onClick={() => setCategoria("todas")}
              aria-pressed={categoria === "todas"}
              className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                categoria === "todas"
                  ? "border-accent bg-accent-glow text-accent"
                  : "border-border bg-bg-card text-text-muted hover:border-border-bright hover:text-text"
              }`}
            >
              Todas
            </button>
            {rankupCaixasCategorias.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setCategoria(c.id)}
                aria-pressed={categoria === c.id}
                className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                  categoria === c.id
                    ? "border-accent bg-accent-glow text-accent"
                    : "border-border bg-bg-card text-text-muted hover:border-border-bright hover:text-text"
                }`}
              >
                {c.nome}
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="text-[0.625rem] font-semibold uppercase tracking-widest text-text-muted">
            Caixa
          </span>
          <div className="mt-2 flex flex-wrap gap-2">
            <button
              key="todas"
              type="button"
              onClick={() => setCaixaSel("todas")}
              aria-pressed={caixaSel === "todas"}
              className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                caixaSel === "todas"
                  ? "border-accent bg-accent-glow text-accent"
                  : "border-border bg-bg-card text-text-muted hover:border-border-bright hover:text-text"
              }`}
            >
              Todas
            </button>
            {rankupCaixas.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setCaixaSel(c.id)}
                aria-pressed={caixaSel === c.id}
                className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                  caixaSel === c.id
                    ? "border-accent bg-accent-glow text-accent"
                    : "border-border bg-bg-card text-text-muted hover:border-border-bright hover:text-text"
                }`}
              >
                {c.nome}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-5 text-sm text-text-muted" aria-live="polite">
        {exibidas} recompensa{exibidas === 1 ? "" : "s"} de {totalRecompensas}
        {categoria !== "todas" && (
          <>
            {" "}
            em &quot;{rankupCaixasCategorias.find((c) => c.id === categoria)?.nome ?? categoria}&quot;
          </>
        )}
        {caixaSel !== "todas" && (
          <>
            {" "}
            em &quot;{rankupCaixas.find((c) => c.id === caixaSel)?.nome ?? caixaSel}&quot;
          </>
        )}
        {query && (
          <>
            {" "}
            para &quot;{query}&quot;
          </>
        )}
      </p>

      {filtros.length === 0 ? (
        <div className="mt-4 rounded-xl border border-dashed border-border bg-bg-card p-10 text-center text-sm text-text-muted">
          Nenhuma recompensa encontrada para &quot;{query}&quot;. Tente outro nome
          ou libere os filtros.
        </div>
      ) : (
        <div className="mt-5 grid gap-4">
          {filtros.map((g) => (
            <CartaoCaixa key={g.caixa.id} caixa={g.caixa} recompensas={g.recompensas} />
          ))}
        </div>
      )}
    </div>
  );
}