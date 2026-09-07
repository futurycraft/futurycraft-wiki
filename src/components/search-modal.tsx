"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { CloseIcon, SearchIcon } from "./icons";
import type { SearchEntry } from "@/app/search-index/route";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

const typeStyles: Record<string, string> = {
  artigo: "border-blue-500/40 bg-blue-500/10 text-blue-400",
  comando: "border-cyan-500/40 bg-cyan-500/10 text-cyan-400",
  encantamento: "border-purple-500/40 bg-purple-500/10 text-purple-400",
  rank: "border-amber-500/40 bg-amber-500/10 text-amber-400",
  categoria: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
  familia: "border-fuchsia-500/40 bg-fuchsia-500/10 text-fuchsia-400",
  pagina: "border-slate-500/40 bg-slate-500/10 text-slate-400",
};

function TypeBadge({ type, typeSlug }: { type: string; typeSlug: string }) {
  const style = typeStyles[typeSlug] ?? typeStyles.pagina;
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full border px-1.5 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wide ${style}`}
    >
      {type}
    </span>
  );
}

function highlight(text: string, query: string): ReactNode {
  if (!query) return text;
  const q = normalize(query).trim();
  if (!q) return text;
  const lowered = text.toLowerCase();
  const idx = lowered.indexOf(q);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="rounded bg-accent/25 px-0.5 text-accent">{text.slice(idx, idx + q.length)}</mark>
      {text.slice(idx + q.length)}
    </>
  );
}

export function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [entries, setEntries] = useState<SearchEntry[] | null>(null);
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    setActive(0);
    const t = setTimeout(() => inputRef.current?.focus(), 50);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => {
    let cancelled = false;
    if (!entries) {
      fetch("/search-index")
        .then((r) => r.json())
        .then((data) => {
          if (!cancelled) setEntries(data.entries as SearchEntry[]);
        })
        .catch(() => {});
    }
    return () => {
      cancelled = true;
    };
  }, [entries]);

  const results = useMemo(() => {
    if (!entries) return [];
    const q = normalize(query).trim();
    if (!q) return entries.slice(0, 8);
    const scored = entries
      .map((e) => {
        const t = normalize(e.title);
        const s = normalize(e.subtitle);
        const body = normalize(e.text);
        let score = 0;
        if (t === q) score += 100;
        if (t.startsWith(q)) score += 60;
        if (t.includes(q)) score += 35;
        if (s.includes(q)) score += 20;
        if (body.includes(q)) score += 8;
        return { e, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12);
    return scored.map((r) => r.e);
  }, [query, entries]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((a) => Math.min(a + 1, results.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((a) => Math.max(a - 1, 0));
      }
      if (e.key === "Enter" && results[active]) {
        window.location.href = results[active].href;
        onClose();
      }
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, active, results, onClose]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-index="${active}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [active]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 p-4 pt-[12vh] backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Pesquisar na Wiki"
    >
      <div
        className="animate-modal-in w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-bg-card shadow-2xl shadow-black/50"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <SearchIcon className="h-5 w-5 shrink-0 text-accent" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Pesquisar na Wiki..."
            className="w-full bg-transparent text-base text-text placeholder:text-text-muted focus:outline-none"
            aria-label="Buscar conteúdo na wiki"
          />
          <kbd className="shrink-0 rounded-md border border-border bg-bg-raised px-2 py-1 text-xs text-text-muted">
            ESC
          </kbd>
        </div>

        <div ref={listRef} className="max-h-[55vh] overflow-y-auto p-2">
          {!entries ? (
            <div className="px-4 py-8 text-center text-sm text-text-muted">Carregando índice...</div>
          ) : results.length === 0 ? (
            <div className="px-4 py-8 text-center text-sm text-text-muted">
              Nenhum resultado para &quot;{query}&quot;
            </div>
          ) : (
            results.map((r, i) => (
              <Link
                key={r.id}
                href={r.href}
                onClick={onClose}
                data-index={i}
                className={`mb-1 flex flex-col gap-0.5 rounded-lg px-3 py-2.5 transition-colors ${
                  i === active ? "bg-accent-glow" : "hover:bg-bg-hover"
                }`}
              >
                <span className="flex items-center gap-2">
                  <TypeBadge type={r.type} typeSlug={r.typeSlug} />
                  <span className="min-w-0 truncate text-sm font-semibold text-text">
                    {highlight(r.title, query)}
                  </span>
                </span>
                <span className="text-xs text-text-muted">{r.subtitle}</span>
              </Link>
            ))
          )}
        </div>

        <div className="flex items-center justify-between border-t border-border px-4 py-2 text-xs text-text-muted">
          <span>
            <kbd className="rounded border border-border bg-bg-raised px-1.5 py-0.5">↑↓</kbd> navegar
            <span className="mx-2 opacity-40">|</span>
            <kbd className="rounded border border-border bg-bg-raised px-1.5 py-0.5">Enter</kbd> abrir
          </span>
          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-text-muted transition-colors hover:text-text"
            aria-label="Fechar busca"
          >
            <CloseIcon className="h-4 w-4" /> Fechar
          </button>
        </div>
      </div>
    </div>
  );
}