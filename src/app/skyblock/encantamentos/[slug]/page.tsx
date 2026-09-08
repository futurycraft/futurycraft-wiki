import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getEnchantByPath, getAllEnchants } from "@/lib/enchants";
import { DocLayout } from "@/components/doc-layout";
import { Breadcrumb } from "@/components/breadcrumb";
import { ArrowLeftIcon } from "@/components/icons";
import { JsonLd, articleJsonLd, breadcrumbJsonLd } from "@/components/json-ld";

const rarityColor: Record<string, string> = {
  Simples: "text-slate-300 border-slate-500/40",
  Único: "text-purple-400 border-purple-500/40",
  Elite: "text-emerald-400 border-emerald-500/40",
  Supremo: "text-fuchsia-400 border-fuchsia-500/40",
  Lendário: "text-amber-400 border-amber-500/40",
  Heróico: "text-orange-400 border-orange-500/40",
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const e = getEnchantByPath(slug);
  if (!e) return {};
  return {
    title: e.nome,
    description: e.descricao,
    alternates: { canonical: `${siteConfig.wikiUrl}/skyblock/encantamentos/${e.path}` },
    openGraph: {
      type: "article",
      title: `${e.nome} — Encantamento ${e.raridade}`,
      description: e.descricao,
      url: `${siteConfig.wikiUrl}/skyblock/encantamentos/${e.path}`,
    },
  };
}

export function generateStaticParams() {
  return getAllEnchants().map((e) => ({ slug: e.path }));
}

export default async function EnchantPage({ params }: PageProps) {
  const { slug } = await params;
  const e = getEnchantByPath(slug);
  if (!e) notFound();

  const suggestion = (() => {
    const docs = [
      { title: "Catálogo de encantamentos", icon: "✨", description: "Pesquise todos os encantamentos do servidor com filtros.", href: "/skyblock/encantamentos" },
      { title: "Como funciona o sistema", icon: "🔮", description: "Aprenda como obter, combinar e usar encantamentos.", href: "/skyblock/encantamentos#como-funciona" },
      { title: "Alquimista", icon: "⚗️", description: "Combine ou melhore seus encantamentos com /alquimista.", href: "/skyblock/comandos?comando=/alquimista" },
    ];
    return docs;
  })();

  const color = rarityColor[e.raridade] ?? "text-text-muted border-border-bright";

  return (
    <DocLayout>
      <article className="animate-fade-in">
        <JsonLd
          data={[
            articleJsonLd({
              title: e.nome,
              description: e.descricao,
              url: `${siteConfig.url}/skyblock/encantamentos/${e.path}`,
              datePublished: "2026-01-01",
              section: `Encantamentos ${e.raridade}`,
            }),
            breadcrumbJsonLd([
              { name: "Wiki", href: "/" },
              { name: "SkyBlock", href: "/skyblock" },
              { name: "Encantamentos", href: "/skyblock/encantamentos" },
              { name: e.nome },
            ]),
          ]}
        />
        <Breadcrumb
          items={[
            { label: "Wiki", href: "/" },
            { label: "SkyBlock", href: "/skyblock" },
            { label: "Encantamentos", href: "/skyblock/encantamentos" },
            { label: e.nome },
          ]}
        />

        <Link
          href="/skyblock/encantamentos"
          className="mt-2 inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-accent"
        >
          <ArrowLeftIcon className="h-4 w-4" /> Voltar ao catálogo
        </Link>

        <header className="mt-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${color}`}>
              {e.raridade}
            </span>
            {e.aplicaSe && (
              <span className="rounded-full border border-border bg-bg-card px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-accent-dim">
                {e.aplicaSe}
              </span>
            )}
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
            ✨ {e.nome}
          </h1>
          <p className="mt-2 max-w-2xl text-lg text-text-dim">{e.descricao}</p>
        </header>

        <dl className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-bg-card p-4">
            <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
              Nível máximo
            </dt>
            <dd className="mt-1.5 font-mono text-lg font-semibold text-text">{e.nivelMaximo}</dd>
          </div>
          <div className="rounded-xl border border-border bg-bg-card p-4">
            <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
              Aplica-se a
            </dt>
            <dd className="mt-1.5 text-sm font-medium text-text">{e.aplicaSe || "—"}</dd>
          </div>
          <div className="rounded-xl border border-border bg-bg-card p-4">
            <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
              Grupo de raridade
            </dt>
            <dd className="mt-1.5 text-sm font-medium text-text">{e.grupo}</dd>
          </div>
        </dl>

        <section className="mt-10 border-t border-border pt-6" aria-label="Recomendados">
          <h2 className="mb-4 text-lg font-semibold text-text">Você também pode gostar</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {suggestion.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex items-start gap-3 rounded-xl border border-border bg-bg-card p-4 transition-colors hover:border-accent/40 hover:bg-bg-hover"
              >
                <span className="text-xl" aria-hidden="true">
                  {s.icon}
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-text group-hover:text-accent">{s.title}</span>
                  <span className="text-xs text-text-muted">{s.description}</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </DocLayout>
  );
}