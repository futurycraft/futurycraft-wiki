import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { season, skyblockHighlights } from "@/data/season";
import { getArticlesByGroup } from "@/lib/content";
import { comandos } from "@/data/comandos";
import { DocLayout } from "@/components/doc-layout";
import { WikiCard } from "@/components/wiki-card";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd, breadcrumbJsonLd } from "@/components/json-ld";
import { ArrowRightIcon, ChevronRightIcon, ServerIcon, SparkIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "SkyBlock",
  description:
    "Central do modo SkyBlock do FuturyCraft: como começar, ilhas, minions, missões, economia, encantamentos, loteria, eventos e comandos.",
  alternates: { canonical: `${siteConfig.wikiUrl}/skyblock` },
};

const popular = [
  { icon: "🎫", title: "Vote no servidor", desc: "Vote e ganhe recompensas diárias.", href: "/skyblock/votar" },
  { icon: "🎰", title: "Loteria", desc: "Participe dos sorteios e concorra a prêmios.", href: "/skyblock/loteria" },
  { icon: "⚗️", title: "Alquimista", desc: "Combine e melhore encantamentos.", href: "/comandos?comando=/alquimista" },
];

export default function SkyblockPage() {
  const group = getArticlesByGroup("skyblock");
  const cmdList = comandos
    .filter((c) => c.categoria === "Ilha" || c.categoria === "SkyBlock")
    .slice(0, 10);

  return (
    <DocLayout>
      <div className="animate-fade-in">
        <JsonLd data={breadcrumbJsonLd([{ name: "Wiki", href: "/" }, { name: "SkyBlock" }])} />
        <Breadcrumb items={[{ label: "Wiki", href: "/" }, { label: "SkyBlock" }]} />
        <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-bg-card p-6 card-glow sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-accent/30 bg-accent-glow px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
              {season.tag}
            </span>
            <span
              className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${
                season.status === "online"
                  ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                  : "border-yellow-500/40 bg-yellow-500/10 text-yellow-400"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              {season.statusLabel}
            </span>
          </div>
          <h1 className="mt-4 flex items-center gap-3 text-3xl font-bold tracking-tight text-balance text-text sm:text-4xl">
            <span aria-hidden="true">☁️</span> SkyBlock
          </h1>
          <p className="mt-2 max-w-2xl text-text-muted">{season.descricao}</p>
          <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-raised px-3 py-1.5 font-mono text-text-muted">
              Java: <span className="text-text">{season.ipJava}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-raised px-3 py-1.5 font-mono text-text-muted">
              Bedrock: <span className="text-text">{season.ipBedrock}:{siteConfig.bedrockPort}</span>
            </span>
            <span className="rounded-full border border-border bg-bg-raised px-3 py-1.5 text-text-muted">
              Versão: <span className="text-text">{season.versao}</span>
            </span>
          </div>
          <div className="mt-5">
            <Link
              href="/skyblock/como-comecar"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-dim"
            >
              Começar no SkyBlock <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <section className="mt-10">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-text">
            <SparkIcon className="h-4 w-4 text-accent" />
            Comece por aqui
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/skyblock/como-comecar"
              className="group rounded-xl border border-border bg-bg-card p-4 transition-colors hover:border-accent/40"
            >
              <span className="text-xl" aria-hidden="true">🌱</span>
              <span className="mt-2 block text-sm font-semibold text-text group-hover:text-accent">Como Começar</span>
              <span className="mt-0.5 block text-xs text-text-muted">Crie sua ilha e dê os primeiros passos.</span>
            </Link>
            <Link
              href="/skyblock/progressao"
              className="group rounded-xl border border-border bg-bg-card p-4 transition-colors hover:border-accent/40"
            >
              <span className="text-xl" aria-hidden="true">📈</span>
              <span className="mt-2 block text-sm font-semibold text-text group-hover:text-accent">Progressão</span>
              <span className="mt-0.5 block text-xs text-text-muted">Evolua sua ilha e seus recursos.</span>
            </Link>
            <Link
              href="/skyblock/comandos"
              className="group rounded-xl border border-border bg-bg-card p-4 transition-colors hover:border-accent/40"
            >
              <span className="text-xl" aria-hidden="true">⌨️</span>
              <span className="mt-2 block text-sm font-semibold text-text group-hover:text-accent">Comandos</span>
              <span className="mt-0.5 block text-xs text-text-muted">Todos os comandos do SkyBlock.</span>
            </Link>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-text">
            <ServerIcon className="h-4 w-4 text-accent" />
            Sistemas disponíveis
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skyblockHighlights.map((h) => (
              <WikiCard
                key={h.title}
                icon={h.icon}
                title={h.title}
                description={h.desc}
                href={h.href}
              />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-lg font-semibold text-text">Documentação do SkyBlock</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {group
              .filter((a) => a.slug !== "home" && a.slug !== "crafting")
              .map((g) => (
                <Link
                  key={g.path}
                  href={`/${g.path}`}
                  className="group flex items-start gap-3 rounded-xl border border-border bg-bg-card p-4 transition-colors hover:border-accent/40 hover:bg-bg-hover"
                >
                  <span className="text-xl" aria-hidden="true">{g.meta.icon}</span>
                  <span className="flex flex-col gap-0.5">
                    <span className="flex items-center gap-1 text-sm font-semibold text-text group-hover:text-accent">
                      {g.meta.title}
                      <ArrowRightIcon className="h-3 w-3 opacity-60 transition-transform group-hover:translate-x-0.5" />
                    </span>
                    <span className="text-xs text-text-muted">{g.meta.description}</span>
                  </span>
                </Link>
              ))}
          </div>
          <Link
            href="/skyblock/crafting"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-dim"
          >
            Guias de crafting <ChevronRightIcon className="h-4 w-4" />
          </Link>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-lg font-semibold text-text">Comandos essenciais</h2>
          <div className="flex flex-wrap gap-2">
            {cmdList.map((c) => (
              <Link
                key={c.comando}
                href={`/comandos?comando=${encodeURIComponent(c.comando)}`}
                className="rounded-full border border-border bg-bg-card px-4 py-2 font-mono text-xs text-text-muted transition-colors hover:border-accent/50 hover:text-accent"
              >
                {c.comando}
              </Link>
            ))}
            <Link
              href="/comandos?cat=SkyBlock"
              className="rounded-full border border-dashed border-border bg-transparent px-4 py-2 text-xs text-text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              Ver todos →
            </Link>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-lg font-semibold text-text">Conteúdos populares</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {popular.map((p) => (
              <WikiCard key={p.title} icon={p.icon} title={p.title} description={p.desc} href={p.href} />
            ))}
          </div>
        </section>
      </div>
    </DocLayout>
  );
}