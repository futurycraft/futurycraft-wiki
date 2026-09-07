import type { Article } from "@/lib/content";
import { Breadcrumb } from "./breadcrumb";
import { Callout } from "./callout";
import { RelatedArticles } from "./related-articles";
import { CodeCopy } from "./code-copy";

export function ArticleLayout({
  article,
  related,
}: {
  article: Article;
  related: { title: string; icon: string; description: string; href: string }[];
}) {
  const crumbs = article.path.split("/");
  return (
    <article className="animate-fade-in">
      <CodeCopy />
      <Breadcrumb
        items={[{ label: "Wiki", href: "/wiki" }, ...crumbs.map((c, i) => ({
          label: c === "home" ? article.meta.category : c.replace(/-/g, " "),
          href: `/wiki/${crumbs.slice(0, i + 1).join("/")}`,
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
      <RelatedArticles articles={related} />
    </article>
  );
}