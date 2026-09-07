import { CopyButton } from "./copy-button";

interface CommandBlockProps {
  command: string;
  description?: string;
  usage?: string;
  example?: string;
}

export function CommandBlock({ command, description, usage, example }: CommandBlockProps) {
  return (
    <div className="my-4 overflow-hidden rounded-xl border border-border bg-bg-card">
      <div className="flex items-center justify-between gap-3 border-b border-border bg-bg-raised px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent/60" aria-hidden="true" />
          <code className="font-mono text-sm font-semibold text-accent">{command}</code>
        </div>
        <CopyButton text={command} label={`Copiar ${command}`} />
      </div>
      {description && <p className="px-4 py-3 text-sm text-text-dim">{description}</p>}
      {usage && (
        <div className="px-4 pb-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-text-muted">Uso</span>
          <code className="mt-1 block w-fit rounded-lg border border-border bg-bg-raised px-3 py-1.5 font-mono text-xs text-text">
            {usage}
          </code>
        </div>
      )}
      {example && (
        <div className="px-4 pb-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-text-muted">Exemplo</span>
          <code className="mt-1 block w-fit rounded-lg border border-border bg-bg-raised px-3 py-1.5 font-mono text-xs text-text">
            {example}
          </code>
        </div>
      )}
    </div>
  );
}