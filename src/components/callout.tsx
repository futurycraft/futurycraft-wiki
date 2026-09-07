import type { ReactNode } from "react";

const styles = {
  info: {
    border: "border-accent/40",
    bg: "bg-accent-glow",
    label: "text-accent",
    labelText: "Informação",
    icon: "✦",
  },
  warning: {
    border: "border-yellow-500/40",
    bg: "bg-yellow-500/5",
    label: "text-yellow-400",
    labelText: "Atenção",
    icon: "⚠",
  },
  danger: {
    border: "border-red-500/40",
    bg: "bg-red-500/5",
    label: "text-red-400",
    labelText: "Importante",
    icon: "✕",
  },
  success: {
    border: "border-emerald-500/40",
    bg: "bg-emerald-500/5",
    label: "text-emerald-400",
    labelText: "Dica",
    icon: "✓",
  },
} as const;

export type CalloutType = keyof typeof styles;

export function Callout({
  type = "info",
  title,
  className = "",
  children,
}: {
  type?: CalloutType;
  title?: string;
  className?: string;
  children: ReactNode;
}) {
  const s = styles[type];
  return (
    <div className={`my-5 rounded-xl border ${s.border} ${s.bg} p-4 ${className}`} role="note">
      <div className={`mb-1 flex items-center gap-2 text-sm font-semibold ${s.label}`}>
        <span aria-hidden="true">{s.icon}</span>
        {title ?? s.labelText}
      </div>
      <div className="text-sm text-text-dim">{children}</div>
    </div>
  );
}