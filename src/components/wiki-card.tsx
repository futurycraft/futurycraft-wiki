import Link from "next/link";
import { ArrowRightIcon } from "./icons";

export interface WikiCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export function WikiCard({ icon, title, description, href }: WikiCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-xl border border-border bg-bg-card p-5 transition-all hover:border-accent/40 hover:bg-bg-hover"
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg-raised text-lg">
        <span aria-hidden="true">{icon}</span>
      </div>
      <h3 className="mb-1 flex items-center gap-1.5 text-base font-semibold text-text transition-colors group-hover:text-accent">
        {title}
        <ArrowRightIcon className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
      </h3>
      <p className="text-sm leading-relaxed text-text-muted">{description}</p>
    </Link>
  );
}