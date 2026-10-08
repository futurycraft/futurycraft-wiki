"use client";

import { useMemo, useState } from "react";
import {
  formatarMoney,
  formatarValor,
  rankupFaixas,
  rankupRanks,
  rankupTotal,
  type RankupRank,
} from "@/data/rankup-ranks";

type FaixaFiltro = "todas" | string;
type Ordem = "progressao" | "nome" | "money";

const opcoesOrdem: { id: Ordem; nome: string }[] = [
  { id: "progressao", nome: "Progressão" },
  { id: "nome", nome: "Nome (A–Z)" },
  { id: "money", nome: "Maior Money" },
];

function normalizar(texto: string): string {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function buscaTexto(r: RankupRank): string {
  return normalizar(`${r.nome} ${r.faixa} ${r.posicao} rank ${r.posicao}`);
}

function LinhaRank({ r }: { r: RankupRank }) {
  const final = r.posicao === rankupTotal;
  return (
    <tr
      className={`border-t border-border/60 ${final ? "bg-accent-glow/40" : ""}`}
    >
      <td className="px-2 py-2.5 text-[0.6875rem] leading-tight text-text-muted sm:px-4 sm:text-xs">
        Rank {r.posicao} de {rankupTotal}
      </td>
      <td className="px-2 py-2.5 sm:px-4">
        <span className="flex flex-wrap items-center gap-1.5">
          <span
            className={`text-xs font-semibold sm:text-sm ${
              final ? "text-accent" : "text-text"
            }`}
          >
            {r.nome}
          </span>
          {final && (
            <span className="rounded-full border border-accent/40 bg-accent-glow px-1.5 py-0.5 text-[0.5625rem] font-semibold uppercase tracking-widest text-accent">
              Final
            </span>
          )}
        </span>
        <span className="mt-0.5 block text-[0.625rem] text-text-muted">
          {rankupFaixas.find((f) => f.key === r.faixa)?.nome ?? r.faixa}
        </span>
      </td>
      <td className="whitespace-nowrap px-2 py-2.5 text-right font-mono text-xs tabular-nums text-text sm:px-4 sm:text-sm">
        {formatarMoney(r.money)}
      </td>
      <td className="whitespace-nowrap px-2 py-2.5 text-right font-mono text-xs tabular-nums text-text-dim sm:px-4 sm:text-sm">
        {formatarValor(r.blocos)}
      </td>
      <td className="whitespace-nowrap px-2 py-2.5 text-right font-mono text-xs tabular-nums text-text-dim sm:px-4 sm:text-sm">
        {formatarValor(r.fragmentos)}
      </td>
    </tr>
  );
}

export function RankupRanksCatalog() {
  const [query, setQuery] = useState("");
  const [faixa, setFaixa] = useState<FaixaFiltro>("todas");
  const [ordem, setOrdem] = useState<Ordem>("progressao");

  const filtrados = useMemo(() => {
    const q = normalizar(query.trim());
    const lista = rankupRanks.filter((r) => {
      if (faixa !== "todas" && r.faixa !== faixa) return false;
      if (!q) return true;
      return buscaTexto(r).includes(q);
    });
    if (ordem === "nome") {
      return [...lista].sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
    }
    if (ordem === "money") {
      return [...lista].sort((a, b) => b.money - a.money);
    }
    return lista;
  }, [query, faixa, ordem]);

  const agrupado = useMemo(() => {
    if (ordem !== "progressao") return null;
    return rankupFaixas
      .map((f) => ({
        faixa: f,
        ranks: filtrados.filter((r) => r.faixa === f.key),
      }))
      .filter((g) => g.ranks.length > 0);
  }, [filtrados, ordem]);

  const cabecalho = (
    <thead>
      <tr className="bg-bg-raised text-[0.625rem] uppercase tracking-widest text-text-muted">
        <th scope="col" className="px-2 py-2.5 text-left font-semibold sm:px-4">
          Posição
        </th>
        <th scope="col" className="px-2 py-2.5 text-left font-semibold sm:px-4">
          Rank
        </th>
        <th scope="col" className="px-2 py-2.5 text-right font-semibold sm:px-4">
          Money
        </th>
        <th scope="col" className="px-2 py-2.5 text-right font-semibold sm:px-4">
          Blocos
        </th>
        <th scope="col" className="px-2 py-2.5 text-right font-semibold sm:px-4">
          Fragmentos
        </th>
      </tr>
    </thead>
  );

  return (
    <div>
      <div className="mt-4">
        <label htmlFor="rankup-search" className="sr-only">
          Pesquisar rank por nome ou posição
        </label>
        <input
          id="rankup-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Pesquisar rank por nome ou posição (ex.: Titã VI ou 42)…"
          className="w-full rounded-xl border border-border bg-bg-card px-4 py-3 text-sm text-text placeholder:text-text-muted focus:border-accent focus:outline-none"
        />
      </div>

      <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="text-[0.625rem] font-semibold uppercase tracking-widest text-text-muted">
            Faixa de progressão
          </span>
          <div className="mt-2 flex flex-wrap gap-2">
            <button
              key="todas"
              type="button"
              onClick={() => setFaixa("todas")}
              aria-pressed={faixa === "todas"}
              className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                faixa === "todas"
                  ? "border-accent bg-accent-glow text-accent"
                  : "border-border bg-bg-card text-text-muted hover:border-border-bright hover:text-text"
              }`}
            >
              Todas
            </button>
            {rankupFaixas.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFaixa(f.key)}
                aria-pressed={faixa === f.key}
                className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                  faixa === f.key
                    ? "border-accent bg-accent-glow text-accent"
                    : "border-border bg-bg-card text-text-muted hover:border-border-bright hover:text-text"
                }`}
              >
                {f.nome}
              </button>
            ))}
          </div>
        </div>

        <div className="shrink-0">
          <label
            htmlFor="rankup-ordem"
            className="text-[0.625rem] font-semibold uppercase tracking-widest text-text-muted"
          >
            Ordenar por
          </label>
          <select
            id="rankup-ordem"
            value={ordem}
            onChange={(e) => setOrdem(e.target.value as Ordem)}
            className="mt-2 block w-full rounded-xl border border-border bg-bg-card px-3 py-2 text-sm text-text focus:border-accent focus:outline-none lg:w-56"
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
        {filtrados.length} rank{filtrados.length === 1 ? "" : "s"}
        {faixa !== "todas" && (
          <>
            {" "}
            em &quot;
            {rankupFaixas.find((f) => f.key === faixa)?.nome ?? faixa}&quot;
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
          Nenhum rank encontrado para &quot;{query}&quot;. Tente outro nome ou
          posição.
        </div>
      ) : (
        <div className="mt-4 overflow-x-auto rounded-xl border border-border">
          <table className="w-full border-collapse text-left">
            {cabecalho}
            {agrupado ? (
              agrupado.map((g) => (
                <tbody key={g.faixa.key}>
                  <tr className="bg-bg-raised/60">
                    <th
                      scope="colgroup"
                      colSpan={5}
                      className="border-t border-border px-2 py-2 text-left text-[0.625rem] font-semibold uppercase tracking-widest text-accent sm:px-4"
                    >
                      {g.faixa.nome}{" "}
                      <span className="font-medium normal-case tracking-normal text-text-muted">
                        ({g.ranks.length} rank
                        {g.ranks.length === 1 ? "" : "s"} · posições{" "}
                        {g.faixa.de}–{g.faixa.ate})
                      </span>
                    </th>
                  </tr>
                  {g.ranks.map((r) => (
                    <LinhaRank key={r.posicao} r={r} />
                  ))}
                </tbody>
              ))
            ) : (
              <tbody>
                {filtrados.map((r) => (
                  <LinhaRank key={r.posicao} r={r} />
                ))}
              </tbody>
            )}
          </table>
        </div>
      )}
    </div>
  );
}
