import Link from "next/link";
import type { Article } from "@/lib/content";
import { Breadcrumb } from "./breadcrumb";
import { Callout } from "./callout";
import { RelatedArticles } from "./related-articles";
import { CodeCopy } from "./code-copy";
import { navSections } from "@/lib/nav";
import { ArrowLeftIcon, ArrowRightIcon } from "./icons";

function crumbLabel(path: string): string {
  const href = `/${path}`;
  for (const section of navSections) {
    const found = section.items.find((item) => item.href === href);
    if (found) return found.title;
  }
  return path
    .split("/")
    .map((seg) => seg.charAt(0).toUpperCase() + seg.slice(1))
    .join(" ");
}

interface ArticleNav {
  title: string;
  icon: string;
  href: string;
}

export function ArticleLayout({
  article,
  related,
  prev,
  next,
}: {
  article: Article;
  related: { title: string; icon: string; description: string; href: string }[];
  prev?: ArticleNav;
  next?: ArticleNav;
}) {
  const crumbs = article.path.split("/");
  return (
    <article className="animate-fade-in">
      <CodeCopy />
      <Breadcrumb
        items={[{ label: "Wiki", href: "/" }, ...crumbs.map((c, i) => ({
          label: c === "home" ? article.meta.category : crumbLabel(c),
          href: `/${crumbs.slice(0, i + 1).join("/")}`,
        }))]}
      />
      <header className="mt-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl" aria-hidden="true">
            {article.meta.icon}
          </span>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-balance text-text sm:text-4xl">
              {article.meta.title}
            </h1>
            {article.meta.description && (
              <p className="mt-2 max-w-2xl text-text-muted">
                {article.meta.description}
              </p>
            )}
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-text-muted">
          <span className="rounded-full border border-border bg-bg-card px-2.5 py-1">
            {article.meta.category}
          </span>
          {article.meta.updatedAt && (
            <span className="rounded-full border border-border bg-bg-card px-2.5 py-1">
              Atualizado em {article.meta.updatedAt}
            </span>
          )}
        </div>
      </header>
      {article.meta.description && (
        <Callout type="info" title="Resumo" className="mt-6">
          {article.meta.description}
        </Callout>
      )}
      <div
        className="prose mt-6"
        dangerouslySetInnerHTML={{ __html: article.contentHtml }}
      />
      {(prev || next) && (
        <nav className="mt-10 grid gap-3 border-t border-border pt-6 sm:grid-cols-2" aria-label="Navegação entre artigos">
          {prev ? (
            <Link
              href={prev.href}
              className="group flex flex-col gap-1 rounded-xl border border-border bg-bg-card p-4 transition-colors hover:border-accent/40 hover:bg-bg-hover"
            >
              <span className="flex items-center gap-1.5 text-[0.6875rem] text-text-muted">
                <ArrowLeftIcon className="h-3.5 w-3.5" /> Anterior
              </span>
              <span className="flex items-center gap-1.5 text-sm font-semibold text-text group-hover:text-accent">
                <span aria-hidden="true">{prev.icon}</span> {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={next.href}
              className="group flex flex-col gap-1 rounded-xl border border-border bg-bg-card p-4 text-right transition-colors hover:border-accent/40 hover:bg-bg-hover"
            >
              <span className="flex justify-end items-center gap-1.5 text-[0.6875rem] text-text-muted">
                Próximo <ArrowRightIcon className="h-3.5 w-3.5" />
              </span>
              <span className="flex items-center justify-end gap-1.5 text-sm font-semibold text-text group-hover:text-accent">
                {next.title} <span aria-hidden="true">{next.icon}</span>
              </span>
            </Link>
          )}
        </nav>
      )}
      <RelatedArticles articles={related} />
    </article>
  );
}