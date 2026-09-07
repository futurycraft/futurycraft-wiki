import Link from "next/link";
import type { CatalogEnchant } from "@/lib/enchants";

const rarityColor: Record<string, string> = {
  Simples: "text-slate-300 border-slate-500/40",
  Elite: "text-emerald-400 border-emerald-500/40",
  "Lendário": "text-amber-400 border-amber-500/40",
  Supremo: "text-fuchsia-400 border-fuchsia-500/40",
  Único: "text-purple-400 border-purple-500/40",
  Fabuloso: "text-rose-400 border-rose-500/40",
  Heróico: "text-orange-400 border-orange-500/40",
  Alma: "text-cyan-400 border-cyan-500/40",
  Maestria: "text-yellow-400 border-yellow-500/40",
};

export function EnchantCard({ e }: { e: CatalogEnchant }) {
  const color = rarityColor[e.raridade] ?? "text-text-muted border-border-bright";
  return (
    <Link
      href={`/wiki/encantamentos/${e.path}`}
      className="flex h-full flex-col gap-1 rounded-xl border border-border bg-bg-card p-4 transition-colors hover:border-accent/40 hover:bg-bg-hover"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-text transition-colors group-hover:text-accent hover:text-accent">
          {e.nome}
        </h3>
        <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[0.6875rem] font-medium ${color}`}>
          {e.raridade}
        </span>
      </div>
      {e.aplicaSe && (
        <span className="text-xs font-medium uppercase tracking-wide text-accent-dim">
          {e.aplicaSe}
        </span>
      )}
      <p className="text-sm leading-relaxed text-text-muted">{e.descricao}</p>
      <div className="mt-auto flex items-center gap-2 pt-2 text-[0.6875rem] text-text-muted">
        {e.nivelMaximo > 1 && (
          <span className="rounded-full border border-border bg-bg-raised px-2 py-0.5">
            Nível máx. {e.nivelMaximo}
          </span>
        )}
      </div>
    </Link>
  );
}