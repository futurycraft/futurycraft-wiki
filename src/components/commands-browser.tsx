"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CommandCard } from "./command-card";
import { comandos, type ComandoCategoria } from "@/data/comandos";

export function CommandsBrowser({ categorias = [] }: { categorias?: ComandoCategoria[] }) {
  const searchParams = useSearchParams();
  const allowed = useMemo(
    () => (categorias.length > 0 ? categorias : (["Todos"] as ComandoCategoria[])),
    [categorias]
  );
  const chips = useMemo(
    () => ["Todos", ...allowed.filter((c) => c !== "Todos")] as ComandoCategoria[],
    [allowed]
  );

  const initialCat = (searchParams.get("cat") as ComandoCategoria) ?? "Todos";
  const [categoria, setCategoria] = useState<ComandoCategoria>(
    chips.includes(initialCat) ? initialCat : "Todos"
  );
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return comandos.filter((c) => {
      if (!allowed.includes("Todos") && !allowed.includes(c.categoria as ComandoCategoria)) return false;
      if (categoria !== "Todos" && c.categoria !== categoria) return false;
      if (!q) return true;
      const haystack = `${c.comando} ${c.descricao} ${c.uso ?? ""} ${c.categoria} ${c.aliases?.join(" ") ?? ""}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [categoria, query, allowed]);

  return (
    <div>
      <div className="mt-4">
        <label htmlFor="comando-search" className="sr-only">
          Pesquisar comando
        </label>
        <input
          id="comando-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Pesquisar pelo comando ou descrição…"
          className="w-full rounded-xl border border-border bg-bg-card px-4 py-3 text-sm text-text placeholder:text-text-muted focus:border-accent focus:outline-none"
        />
      </div>

      <nav className="mt-5 flex flex-wrap gap-2" aria-label="Filtrar comandos por categoria">
        {chips.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategoria(c)}
            aria-pressed={categoria === c}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              categoria === c
                ? "border-accent bg-accent-glow text-accent"
                : "border-border bg-bg-card text-text-muted hover:border-border-bright hover:text-text"
            }`}
          >
            {c}
          </button>
        ))}
      </nav>

      <p className="mt-5 text-sm text-text-muted" aria-live="polite">
        {filtered.length} comando{filtered.length === 1 ? "" : "s"}
        {query && (
          <>
            {" "}
            para &quot;{query}&quot;
          </>
        )}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-4 rounded-xl border border-dashed border-border bg-bg-card p-10 text-center text-sm text-text-muted">
          Nenhum comando encontrado para &quot;{query}&quot;. Tente outra busca ou categoria.
        </div>
      ) : (
        <div className="mt-4 grid gap-4 lg:grid-cols-2" id="comandos-list">
          {filtered.map((c) => (
            <CommandCard key={c.comando} id={`cmd-${c.comando}`} comando={c} />
          ))}
        </div>
      )}
    </div>
  );
}