"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { EnchantCard } from "./enchant-card";
import { encantGrupos, type EncantGrupo } from "@/data/encantamentos";
import { getAllEnchants } from "@/lib/enchants";

type SortOrder = "relevancia" | "nome-asc" | "nome-desc" | "nivel-desc";

function strCompare(a: string, b: string) {
  return a.localeCompare(b, "pt-BR", { sensitivity: "base" });
}

export function EnchantsCatalog() {
  const searchParams = useSearchParams();
  const initialGrupo = (searchParams.get("grupo") as EncantGrupo) ?? "Todos";
  const initialNome = searchParams.get("nome") ?? "";
  const [grupo, setGrupo] = useState<EncantGrupo>(initialGrupo);
  const [query, setQuery] = useState(initialNome);
  const [sort, setSort] = useState<SortOrder>("relevancia");

  const items = useMemo(() => getAllEnchants(), []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    const list = items.filter((e) => {
      if (grupo !== "Todos" && e.raridade !== grupo) return false;
      if (
        q &&
        !`${e.nome} ${e.descricao} ${e.aplicaSe} ${e.raridade}`
          .toLowerCase()
          .includes(q)
      )
        return false;
      return true;
    });
    switch (sort) {
      case "nome-asc":
        return [...list].sort((a, b) => strCompare(a.nome, b.nome));
      case "nome-desc":
        return [...list].sort((a, b) => strCompare(b.nome, a.nome));
      case "nivel-desc":
        return [...list].sort((a, b) => b.nivelMaximo - a.nivelMaximo);
      case "relevancia":
      default:
        if (!q && grupo === "Todos") {
          return [...list].sort((a, b) => strCompare(a.nome, b.nome));
        }
        return list;
    }
  }, [items, grupo, query, sort]);

  return (
    <div>
      <div
        className="mt-6 flex flex-wrap gap-2"
        aria-label="Filtrar por raridade de encantamento"
      >
        {encantGrupos.map((g) => (
          <button
            key={g}
            onClick={() => setGrupo(g)}
            aria-pressed={grupo === g}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              grupo === g
                ? "border-accent bg-accent-glow text-accent"
                : "border-border bg-bg-card text-text-muted hover:border-border-bright hover:text-text"
            }`}
          >
            {g}
            <span className="ml-1 text-xs opacity-70">
              {g === "Todos"
                ? items.length
                : items.filter((e) => e.raridade === g).length}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <label htmlFor="encant-search" className="sr-only">
          Pesquisar encantamento
        </label>
        <input
          id="encant-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Pesquisar por nome, efeito, item ou raridade…"
          className="w-full rounded-xl border border-border bg-bg-card px-4 py-3 text-sm text-text placeholder:text-text-muted focus:border-accent focus:outline-none"
        />
        <label htmlFor="encant-sort" className="sr-only">
          Ordenar encantamentos
        </label>
        <select
          id="encant-sort"
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOrder)}
          className="rounded-xl border border-border bg-bg-card px-4 py-3 text-sm text-text focus:border-accent focus:outline-none"
        >
          <option value="relevancia">Relevância</option>
          <option value="nome-asc">Nome (A–Z)</option>
          <option value="nome-desc">Nome (Z–A)</option>
          <option value="nivel-desc">Nível máximo</option>
        </select>
      </div>

      <p className="mt-4 text-sm text-text-muted" aria-live="polite">
        {filtered.length} encantamento{filtered.length === 1 ? "" : "s"}
        {query && (
          <>
            {" "}para &quot;{query}&quot;
          </>
        )}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-4 rounded-xl border border-dashed border-border bg-bg-card p-10 text-center text-sm text-text-muted">
          Nenhum encantamento encontrado. Ajuste os filtros para ver mais resultados.
        </div>
      ) : (
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" id="encantamentos-list">
          {filtered.map((e) => (
            <EnchantCard key={e.path} e={e} />
          ))}
        </div>
      )}
    </div>
  );
}