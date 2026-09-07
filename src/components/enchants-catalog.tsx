"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { EnchantCard } from "./enchant-card";
import {
  encantCategories,
  encantGrupos,
  type Encantamento,
} from "@/data/encantamentos";
import { encantamentosPadrao } from "@/data/enchants/padrao";
import { encantamentosCosmicos } from "@/data/enchants/cosmicos";
import { encantamentosVanilla } from "@/data/enchants/vanilla";

type Source = "padrao" | "cosmicos" | "vanilla";

const sources: Record<Source, Encantamento[]> = {
  padrao: encantamentosPadrao,
  cosmicos: encantamentosCosmicos,
  vanilla: encantamentosVanilla,
};

export function EnchantsCatalog() {
  const searchParams = useSearchParams();
  const initialCat = (searchParams.get("categoria") as Source) ?? "padrao";
  const initialNome = searchParams.get("nome") ?? "";
  const [source, setSource] = useState<Source>(initialCat);
  const [grupo, setGrupo] = useState<string>("Todos");
  const [query, setQuery] = useState(initialNome);

  const items = sources[source];
  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return items.filter((e) => {
      if (grupo !== "Todos" && e.grupo !== grupo) return false;
      if (q && !`${e.nome} ${e.descricao} ${e.aplicaSe}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [items, grupo, query]);

  return (
    <div>
      <div className="mt-6 flex flex-wrap gap-2" aria-label="Família de encantamentos">
        {encantCategories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/wiki/encantamentos?categoria=${cat.slug}`}
            aria-current={source === cat.slug ? "page" : undefined}
            onClick={() => setSource(cat.slug as Source)}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              source === cat.slug
                ? "border-accent bg-accent-glow text-accent"
                : "border-border bg-bg-card text-text-muted hover:border-border-bright hover:text-text"
            }`}
          >
            {cat.nome}
          </Link>
        ))}
      </div>

      <div
        className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        role="group"
        aria-label="Filtrar por grupo de encantamento"
      >
        {encantGrupos.map((g) => (
          <button
            key={g}
            onClick={() => setGrupo(g)}
            aria-pressed={grupo === g}
            className={`rounded-lg border px-3 py-2.5 text-left text-sm transition-colors ${
              grupo === g
                ? "border-accent bg-accent-glow text-accent"
                : "border-border bg-bg-card text-text-muted hover:border-border-bright hover:text-text"
            }`}
          >
            {g}
            <span className="ml-1 text-xs opacity-70">
              {g === "Todos"
                ? items.length
                : items.filter((e) => e.grupo === g).length}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-5">
        <label htmlFor="encant-search" className="sr-only">
          Pesquisar encantamento
        </label>
        <input
          id="encant-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Pesquisar encantamento…"
          className="w-full rounded-xl border border-border bg-bg-card px-4 py-3 text-sm text-text placeholder:text-text-muted focus:border-accent focus:outline-none"
        />
      </div>

      <p className="mt-4 text-sm text-text-muted">
        {filtered.length} encantamento{filtered.length === 1 ? "" : "s"}
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" id="encantamentos-list">
        {filtered.map((e) => (
          <EnchantCard key={e.slug} e={e} />
        ))}
      </div>
    </div>
  );
}