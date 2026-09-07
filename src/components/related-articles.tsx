import Link from "next/link";
import { ArrowRightIcon } from "./icons";

export interface RelatedArticle {
  title: string;
  icon: string;
  description: string;
  href: string;
}

export function RelatedArticles({ articles, label = "Artigos relacionados" }: { articles: RelatedArticle[]; label?: string }) {
  if (articles.length === 0) return null;
  return (
    <section className="mt-10 border-t border-border pt-6" aria-label={label}>
      <h2 className="mb-4 text-lg font-semibold text-text">{label}</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {articles.map((a) => (
          <Link
            key={a.href}
            href={a.href}
            className="group flex items-start gap-3 rounded-xl border border-border bg-bg-card p-4 transition-colors hover:border-accent/40 hover:bg-bg-hover"
          >
            <span className="text-xl" aria-hidden="true">
              {a.icon}
            </span>
            <span className="flex flex-col gap-0.5">
              <span className="flex items-center gap-1 text-sm font-semibold text-text group-hover:text-accent">
                {a.title}
                <ArrowRightIcon className="h-3 w-3 opacity-60 transition-transform group-hover:translate-x-0.5" />
              </span>
              <span className="text-xs text-text-muted">{a.description}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}