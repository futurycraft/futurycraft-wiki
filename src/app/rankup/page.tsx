import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getArticlesByGroup } from "@/lib/content";
import { comandos } from "@/data/comandos";
import { DocLayout } from "@/components/doc-layout";
import { WikiCard } from "@/components/wiki-card";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd, breadcrumbJsonLd } from "@/components/json-ld";
import { ArrowRightIcon, SparkIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "RankUP",
  description:
    "Central do modo RankUP do FuturyCraft: como começar, ranks, progressão, economia, prestígio, sistemas e comandos.",
  alternates: { canonical: `${siteConfig.wikiUrl}/rankup` },
};

const highlights = [
  { icon: "🚀", title: "Como Começar", desc: "Os primeiros passos no modo RankUP.", href: "/rankup/como-comecar" },
  { icon: "⚔️", title: "Ranks", desc: "A linha de ranks e requisitos de progressão.", href: "/rankup/ranks" },
  { icon: "📈", title: "Progressão", desc: "Como evoluir no RankUP passo a passo.", href: "/rankup/progressao" },
  { icon: "💰", title: "Economia", desc: "Dinheiro, farm e investimentos no RankUP.", href: "/rankup/economia" },
  { icon: "✨", title: "Prestígio", desc: "Como o prestígio impacta sua jornada.", href: "/rankup/prestigio" },
  { icon: "🧰", title: "Sistemas", desc: "Sistemas exclusivos do modo RankUP.", href: "/rankup/sistemas" },
  { icon: "📖", title: "Comandos", desc: "Todos os comandos do RankUP.", href: "/rankup/comandos" },
  { icon: "📚", title: "Guias", desc: "Guias práticos para evoluir no modo.", href: "/rankup/guias" },
];

export default function RankupPage() {
  const guides = getArticlesByGroup("rankup").filter((a) => a.slug !== "home");
  const cmdList = comandos
    .filter((c) => c.categoria === "Mina" || c.categoria === "RankUP")
    .slice(0, 8);

  return (
    <DocLayout>
      <div className="animate-fade-in">
        <JsonLd data={breadcrumbJsonLd([{ name: "Wiki", href: "/" }, { name: "RankUP" }])} />
        <Breadcrumb items={[{ label: "Wiki", href: "/" }, { label: "RankUP" }]} />

        <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-bg-card p-6 card-glow sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-accent/30 bg-accent-glow px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
              Modo de jogo
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Online
            </span>
          </div>
          <h1 className="mt-4 flex items-center gap-3 text-3xl font-bold tracking-tight text-balance text-text sm:text-4xl">
            <span aria-hidden="true">⚔️</span> RankUP
          </h1>
          <p className="mt-2 max-w-2xl text-text-muted">
            No RankUP, o foco é evoluir: suba de rank com dinheiro e habilidades,
            conquiste prestígio e demonstre sua força no chat e nas partidas.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-raised px-3 py-1.5 font-mono text-text-muted">
              Java: <span className="text-text">{siteConfig.ipJava}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-raised px-3 py-1.5 font-mono text-text-muted">
              Bedrock: <span className="text-text">{siteConfig.ipBedrock}:{siteConfig.bedrockPort}</span>
            </span>
            <span className="rounded-full border border-border bg-bg-raised px-3 py-1.5 text-text-muted">
              Versão: <span className="text-text">{siteConfig.version}</span>
            </span>
          </div>
          <div className="mt-5">
            <Link
              href="/rankup/como-comecar"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-dim"
            >
              Começar no RankUP <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <section className="mt-10">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-text">
            <SparkIcon className="h-4 w-4 text-accent" />
            Principais sistemas
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => (
              <WikiCard key={h.title} icon={h.icon} title={h.title} description={h.desc} href={h.href} />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-lg font-semibold text-text">Documentação do RankUP</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((g) => (
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
              href="/comandos?cat=Mina"
              className="rounded-full border border-dashed border-border bg-transparent px-4 py-2 text-xs text-text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              Ver todos →
            </Link>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-lg font-semibold text-text">Guia relacionado</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/guias/progressao"
              className="group flex items-start gap-3 rounded-xl border border-border bg-bg-card p-4 transition-colors hover:border-accent/40 hover:bg-bg-hover"
            >
              <span className="text-xl" aria-hidden="true">📈</span>
              <span className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold text-text group-hover:text-accent">Guia de Progressão</span>
                <span className="text-xs text-text-muted">Dicas gerais para evoluir em qualquer modo do servidor.</span>
              </span>
            </Link>
            <Link
              href="/sistemas/economia"
              className="group flex items-start gap-3 rounded-xl border border-border bg-bg-card p-4 transition-colors hover:border-accent/40 hover:bg-bg-hover"
            >
              <span className="text-xl" aria-hidden="true">💰</span>
              <span className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold text-text group-hover:text-accent">Economia do servidor</span>
                <span className="text-xs text-text-muted">Money, cash, loja e recompensas.</span>
              </span>
            </Link>
          </div>
        </section>
      </div>
    </DocLayout>
  );
}