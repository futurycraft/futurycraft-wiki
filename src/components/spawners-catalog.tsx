"use client";

import { useMemo, useState } from "react";
import {
  formatarChance,
  formatarPreco,
  formatarQuantidade,
  spawnerCategorias,
  spawnerRank,
  spawners,
  type Spawner,
  type SpawnerCategoria,
  type SpawnerDrop,
} from "@/data/spawners";

type CategoriaFiltro = "todos" | SpawnerCategoria;
type Ordem = "nome" | "menor-preco" | "maior-preco";

const opcoesOrdem: { id: Ordem; nome: string }[] = [
  { id: "nome", nome: "Nome (A–Z)" },
  { id: "menor-preco", nome: "Menor preço" },
  { id: "maior-preco", nome: "Maior preço" },
];

const categoriaBadge: Record<SpawnerCategoria, string> = {
  passivo: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
  hostil: "border-red-500/40 bg-red-500/10 text-red-400",
  especial: "border-accent/40 bg-accent-glow text-accent",
};

const categoriaNome: Record<SpawnerCategoria, string> = {
  passivo: "Passivo",
  hostil: "Hostil",
  especial: "Especial",
};

function normalizar(texto: string): string {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function buscaTexto(s: Spawner): string {
  return normalizar(
    [
      s.nome,
      ...(s.aliases ?? []),
      categoriaNome[s.categoria],
      spawnerRank(s),
      ...s.drops.flatMap((d) => [d.nome, ...(d.aliases ?? [])]),
    ].join(" "),
  );
}

function LinhaDrop({ d }: { d: SpawnerDrop }) {
  return (
    <tr className="border-t border-border/60 align-top">
      <td
        className={`py-1.5 pr-2 ${
          d.desabilitado ? "text-text-muted line-through" : "text-text-dim"
        }`}
      >
        {d.nome}
        {d.desabilitado && (
          <span className="ml-1.5 rounded border border-border bg-bg-raised px-1.5 py-0.5 text-[0.625rem] font-medium text-text-muted no-underline">
            Desabilitado
          </span>
        )}
      </td>
      <td className="whitespace-nowrap py-1.5 text-right font-mono text-text-dim tabular-nums">
        {d.desabilitado ? "—" : formatarChance(d.chance)}
      </td>
      <td className="whitespace-nowrap py-1.5 text-right font-mono text-text-dim tabular-nums">
        {d.desabilitado ? "—" : formatarQuantidade(d)}
      </td>
    </tr>
  );
}

function CartaoSpawner({ s }: { s: Spawner }) {
  return (
    <article
      id={`mob-${s.id}`}
      className="flex scroll-mt-24 flex-col rounded-2xl border border-border bg-bg-card p-4 transition-colors hover:border-accent/40"
    >
      <header className="flex items-start gap-3">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-bg-raised text-2xl"
          aria-hidden="true"
        >
          {s.icone}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-semibold text-text">{s.nome}</h3>
          <div className="mt-1 flex flex-wrap items-center gap-1.5">
            <span
              className={`rounded-full border px-2 py-0.5 text-[0.6875rem] font-medium ${categoriaBadge[s.categoria]}`}
            >
              {categoriaNome[s.categoria]}
            </span>
            {s.indisponivel && (
              <span className="rounded-full border border-red-500/40 bg-red-500/10 px-2 py-0.5 text-[0.6875rem] font-medium text-red-400">
                Indisponível
              </span>
            )}
          </div>
        </div>
      </header>

      <dl className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-border bg-bg-raised px-3 py-2">
          <dt className="text-[0.625rem] uppercase tracking-widest text-text-muted">
            Preço
          </dt>
          <dd className="font-mono text-sm font-semibold text-text">
            {formatarPreco(s.preco)}
          </dd>
        </div>
        <div className="rounded-lg border border-border bg-bg-raised px-3 py-2">
          <dt className="text-[0.625rem] uppercase tracking-widest text-text-muted">
            Rank necessário
          </dt>
          <dd className="truncate text-sm font-medium text-text-muted">
            {spawnerRank(s)}
          </dd>
        </div>
      </dl>

      <div className="mt-3 flex-1">
        <h4 className="text-[0.625rem] font-semibold uppercase tracking-widest text-text-muted">
          Drops
        </h4>
        {s.drops.length === 0 ? (
          <p className="mt-2 text-xs text-text-muted">
            {s.indisponivel
              ? "Drops não configurados"
              : "Nenhum drop personalizado configurado"}
          </p>
        ) : (
          <table className="mt-1.5 w-full border-collapse text-left text-xs">
            <thead>
              <tr className="text-[0.625rem] uppercase tracking-wider text-text-muted">
                <th scope="col" className="pb-1 font-medium">
                  Item
                </th>
                <th scope="col" className="pb-1 text-right font-medium">
                  Chance
                </th>
                <th scope="col" className="pb-1 text-right font-medium">
                  Qtd
                </th>
              </tr>
            </thead>
            <tbody>
              {s.drops.map((d) => (
                <LinhaDrop key={d.nome} d={d} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </article>
  );
}

export function SpawnersCatalog() {
  const [categoria, setCategoria] = useState<CategoriaFiltro>("todos");
  const [query, setQuery] = useState("");
  const [ordem, setOrdem] = useState<Ordem>("nome");

  const ranks = useMemo(
    () => Array.from(new Set(spawners.map((s) => spawnerRank(s)))),
    [],
  );

  const filtrados = useMemo(() => {
    const q = normalizar(query.trim());
    const lista = spawners.filter((s) => {
      if (categoria !== "todos" && s.categoria !== categoria) return false;
      if (!q) return true;
      return buscaTexto(s).includes(q);
    });
    return lista.sort((a, b) => {
      if (ordem === "nome") return a.nome.localeCompare(b.nome, "en");
      if (ordem === "menor-preco") return a.preco - b.preco;
      return b.preco - a.preco;
    });
  }, [categoria, query, ordem]);

  const chips: { id: CategoriaFiltro; nome: string }[] = [
    { id: "todos", nome: "Todos" },
    ...spawnerCategorias.map((c) => ({ id: c.id as CategoriaFiltro, nome: c.nome })),
  ];

  return (
    <div>
      <div className="mt-4">
        <label htmlFor="spawner-search" className="sr-only">
          Pesquisar mob ou drop
        </label>
        <input
          id="spawner-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Pesquisar mob ou drop…"
          className="w-full rounded-xl border border-border bg-bg-card px-4 py-3 text-sm text-text placeholder:text-text-muted focus:border-accent focus:outline-none"
        />
      </div>

      <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="text-[0.625rem] font-semibold uppercase tracking-widest text-text-muted">
            Categoria
          </span>
          <div className="mt-2 flex flex-wrap gap-2">
            {chips.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setCategoria(c.id)}
                aria-pressed={categoria === c.id}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
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

        <div className="shrink-0">
          <label
            htmlFor="spawner-ordem"
            className="text-[0.625rem] font-semibold uppercase tracking-widest text-text-muted"
          >
            Ordenar por
          </label>
          <select
            id="spawner-ordem"
            value={ordem}
            onChange={(e) => setOrdem(e.target.value as Ordem)}
            className="mt-2 block w-full rounded-xl border border-border bg-bg-card px-3 py-2 text-sm text-text focus:border-accent focus:outline-none lg:w-48"
          >
            {opcoesOrdem.map((o) => (
              <option key={o.id} value={o.id}>
                {o.nome}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mt-5 text-sm text-text-muted" aria-live="polite">
        {filtrados.length} spawner{filtrados.length === 1 ? "" : "s"}
        {categoria !== "todos" && (
          <>
            {" "}
            em &quot;{chips.find((c) => c.id === categoria)?.nome}&quot;
          </>
        )}
        {query && (
          <>
            {" "}
            para &quot;{query}&quot;
          </>
        )}
      </p>

      {filtrados.length === 0 ? (
        <div className="mt-4 rounded-xl border border-dashed border-border bg-bg-card p-10 text-center text-sm text-text-muted">
          Nenhum spawner encontrado para &quot;{query}&quot;. Tente outro mob,
          drop ou categoria.
        </div>
      ) : (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filtrados.map((s) => (
            <CartaoSpawner key={s.id} s={s} />
          ))}
        </div>
      )}

      {ranks.length < 2 && (
        <p className="mt-5 text-xs text-text-muted">
          A informação de rank por mob ainda está sendo levantada e aparece
          marcada como &quot;A confirmar&quot; até a confirmação oficial.
        </p>
      )}
    </div>
  );
}
