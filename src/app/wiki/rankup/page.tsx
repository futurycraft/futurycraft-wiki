import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getArticlesByGroup } from "@/lib/content";
import { DocLayout } from "@/components/doc-layout";
import { WikiCard } from "@/components/wiki-card";
import { Breadcrumb } from "@/components/breadcrumb";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "RankUP",
  description:
    "Subir de rank, prestígio, sistemas e comandos do modo RankUP do FuturyCraft.",
  alternates: { canonical: `${siteConfig.wikiUrl}/rankup` },
};

const highlights = [
  { icon: "⚔️", title: "Ranks", desc: "A linha de ranks e requisitos de progressão.", href: "/wiki/rankup/ranks" },
  { icon: "📈", title: "Progressão", desc: "Como evoluir no RankUP passo a passo.", href: "/wiki/rankup/progressao" },
  { icon: "💰", title: "Economia", desc: "Dinheiro, farm e investimentos no RankUP.", href: "/wiki/rankup/economia" },
  { icon: "✨", title: "Prestígio", desc: "Como o prestígio impacta sua jornada.", href: "/wiki/rankup/prestigio" },
  { icon: "🧰", title: "Sistemas", desc: "Sistemas exclusivos do modo RankUP.", href: "/wiki/rankup/sistemas" },
  { icon: "📖", title: "Comandos", desc: "Todos os comandos do RankUP.", href: "/wiki/rankup/comandos" },
];

export default function RankupPage() {
  const guides = getArticlesByGroup("rankup").filter((a) => a.slug !== "home");
  return (
    <DocLayout>
      <div className="animate-fade-in">
        <Breadcrumb items={[{ label: "Wiki", href: "/wiki" }, { label: "RankUP" }]} />

        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-bg-card p-6 card-glow sm:p-8">
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
        </div>

        <section className="mt-10">
          <h2 className="mb-4 text-lg font-semibold text-text">Principais sistemas</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h) => (
              <WikiCard key={h.title} icon={h.icon} title={h.title} description={h.desc} href={h.href} />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-lg font-semibold text-text">Guias do RankUP</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {guides.map((g) => (
              <Link
                key={g.path}
                href={`/wiki/${g.path}`}
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
      </div>
    </DocLayout>
  );
}