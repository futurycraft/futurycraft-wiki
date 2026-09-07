import type { Comando } from "@/data/comandos";
import { CopyButton } from "./copy-button";

export function CommandCard({ comando, id }: { comando: Comando; id?: string }) {
  return (
    <div
      id={id}
      className="flex flex-col gap-2 rounded-xl border border-border bg-bg-card p-4 transition-colors hover:border-accent/40"
    >
      <div className="flex items-start justify-between gap-3">
        <code className="min-w-0 break-all font-mono text-sm font-semibold text-accent">
          {comando.comando}
        </code>
        <span className="shrink-0 rounded-full border border-border bg-bg-raised px-2 py-0.5 text-[0.6875rem] font-medium text-text-muted">
          {comando.categoria}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-text-dim">{comando.descricao}</p>
      <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
        {comando.uso && (
          <code className="rounded-md border border-border bg-bg-raised px-2 py-1 font-mono text-[0.6875rem] text-text-muted">
            {comando.uso}
          </code>
        )}
        {comando.permissao && (
          <span className="rounded-md border border-border bg-bg-raised px-2 py-1 text-[0.6875rem] text-text-muted">
            Permissão: {comando.permissao}
          </span>
        )}
      </div>
      {comando.exemplo && (
        <code className="rounded-md border border-border bg-bg-raised px-2 py-1 font-mono text-[0.6875rem] text-text-muted">
          Exemplo: {comando.exemplo}
        </code>
      )}
      <div className="flex justify-end pt-1">
        <CopyButton text={comando.comando} label={`Copiar ${comando.comando}`} />
      </div>
    </div>
  );
}