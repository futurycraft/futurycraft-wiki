import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticlesByGroup, getArticleBySlug, getArticles } from "@/lib/content";
import { siteConfig } from "@/config/site";
import { ArticleLayout } from "@/components/article-layout";
import { ArticleToc } from "@/components/article-toc";
import { WikiCard } from "@/components/wiki-card";
import { DocLayout } from "@/components/doc-layout";
import { JsonLd, articleJsonLd, breadcrumbJsonLd } from "@/components/json-ld";
import { navSections } from "@/lib/nav";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

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

function toTitle(s: string): string {
  return s
    .split("/")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" » ");
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const path = slug.join("/");
  const article = getArticleBySlug(path);
  if (!article) return {};
  return {
    title: article.meta.title,
    description: article.meta.description,
    alternates: { canonical: `${siteConfig.wikiUrl}/${path}` },
    openGraph: {
      type: "article",
      title: article.meta.title,
      description: article.meta.description,
      url: `${siteConfig.wikiUrl}/${path}`,
    },
  };
}

const RESERVED_PATHS = new Set(["skyblock", "rankup"]);

export function generateStaticParams(): { slug: string[] }[] {
  return getArticles()
    .filter((a) => !RESERVED_PATHS.has(a.path))
    .map((a) => ({ slug: a.path.split("/") }));
}

export default async function WikiSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const path = slug.join("/");

  const group = slug[0] ?? "";
  const groupArticles = getArticlesByGroup(group);
  const article = getArticleBySlug(path);

  if (article) {
    const related = groupArticles
      .filter((a) => a.path !== article.path)
      .slice(0, 4)
      .map((a) => ({
        title: a.meta.title,
        icon: a.meta.icon,
        description: a.meta.description,
        href: `/${a.path}`,
      }));

    const index = groupArticles.findIndex((a) => a.path === article.path);
    const prev = index > 0 ? groupArticles[index - 1] : undefined;
    const next = index >= 0 && index < groupArticles.length - 1 ? groupArticles[index + 1] : undefined;

    const crumbs = ["Wiki", ...article.path.split("/")];
    const bcItems = crumbs.map((c, i) => ({
      name: i === 0 ? c : crumbLabel(c),
      href: i === 0 ? "/" : `/${crumbs.slice(1, i + 1).join("/")}`,
    }));

    return (
      <DocLayout>
        <JsonLd
          data={[
            articleJsonLd({
              title: article.meta.title,
              description: article.meta.description,
              url: `${siteConfig.url}/${article.path}`,
              datePublished: article.meta.updatedAt,
              section: article.meta.category,
            }),
            breadcrumbJsonLd(bcItems),
          ]}
        />
        <div className="flex gap-10">
          <div className="min-w-0 flex-1">
            <ArticleLayout
              article={article}
              related={related}
              prev={prev ? { title: prev.meta.title, icon: prev.meta.icon, href: `/${prev.path}` } : undefined}
              next={next ? { title: next.meta.title, icon: next.meta.icon, href: `/${next.path}` } : undefined}
            />
          </div>
          <ArticleToc toc={article.toc} />
        </div>
      </DocLayout>
    );
  }

  if (groupArticles.length > 0) {
    return (
      <DocLayout>
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Wiki", href: "/" },
            { name: groupArticles[0].meta.category },
          ])}
        />
        <div className="animate-fade-in">
          <header className="mb-8">
            <p className="text-sm text-text-muted">{toTitle(group)}</p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-text sm:text-4xl">
              {groupArticles[0].meta.category}
            </h1>
          </header>
          <div className="grid gap-4 sm:grid-cols-2">
            {groupArticles.map((a) => (
              <WikiCard
                key={a.path}
                icon={a.meta.icon}
                title={a.meta.title}
                description={a.meta.description}
                href={`/${a.path}`}
              />
            ))}
          </div>
        </div>
      </DocLayout>
    );
  }

  notFound();
}