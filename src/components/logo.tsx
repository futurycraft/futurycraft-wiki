import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`group flex items-center gap-2.5 no-underline ${className}`} aria-label="FuturyCraft Wiki - Início">
      <span className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-gradient-to-br from-accent to-cyan-700 text-base font-bold text-white shadow-[0_0_20px_rgba(6,182,212,0.25)]">
        FC
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-sans text-lg font-bold tracking-tight text-white transition-colors group-hover:text-accent">
          Futury<span className="text-accent">Craft</span>
        </span>
        <span className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-text-muted">
          Wiki
        </span>
      </span>
    </Link>
  );
}