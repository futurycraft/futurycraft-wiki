import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { DocLayout } from "@/components/doc-layout";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd, breadcrumbJsonLd } from "@/components/json-ld";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "RankUP",
  description:
    "O RankUP do FuturyCraft: modo de progressão com 257 ranks até o Hyperion, minas, economia, sistemas e recompensas.",
  alternates: { canonical: `${siteConfig.wikiUrl}/rankup` },
};

const areas = [
  {
    id: "comecando",
    title: "Começando",
    icon: "🎮",
    desc: "Por onde começar: entenda o modo e dê os primeiros passos.",
    pages: [
      { title: "Visão Geral", icon: "🚀", href: "/rankup/visao-geral", desc: "O que é o RankUP e como a progressão funciona." },
      { title: "Começando", icon: "🎮", href: "/rankup/comecando", desc: "Primeiros passos no modo." },
    ],
  },
  {
    id: "progressao",
    title: "Progressão",
    icon: "📈",
    desc: "Suba de rank, minere e conquiste recompensas.",
    pages: [
      { title: "Ranks", icon: "🏆", href: "/rankup/ranks", desc: "257 ranks, do primeiro até o Hyperion." },
      { title: "Minas", icon: "⛏️", href: "/rankup/minas", desc: "Minas e coleta conforme a progressão." },
      { title: "Caixas", icon: "🎁", href: "/rankup/caixas", desc: "Caixas, chaves e recompensas de cada uma." },
      { title: "Recompensas", icon: "🎁", href: "/rankup/recompensas", desc: "O que você ganha a cada subida de rank." },
    ],
  },
  {
    id: "economia",
    title: "Economia",
    icon: "💰",
    desc: "Moedas, lojas e circulação de recursos do modo.",
    pages: [
      { title: "Economia", icon: "💰", href: "/rankup/economia", desc: "Moedas, fontes de renda e lojas." },
    ],
  },
  {
    id: "sistemas",
    title: "Sistemas",
    icon: "⚙️",
    desc: "Máquinas, Spawners, Farms, Pesca, Bosses e Dungeons.",
    pages: [
      { title: "Sistemas", icon: "⚙️", href: "/rankup/sistemas", desc: "Visão geral dos sistemas do modo." },
      { title: "Máquinas", icon: "🏭", href: "/rankup/sistemas/maquinas", desc: "Máquinas, upgrade e produção." },
      { title: "Spawners", icon: "🫧", href: "/rankup/sistemas/spawners", desc: "Spawners e seus drops." },
      { title: "Farms", icon: "🌾", href: "/rankup/sistemas/farms", desc: "Farms e rendimento." },
      { title: "Pesca", icon: "🎣", href: "/rankup/sistemas/pesca", desc: "Sistema de pesca do modo." },
      { title: "Bosses", icon: "👹", href: "/rankup/sistemas/bosses", desc: "Bosses e seus drops." },
      { title: "Dungeons", icon: "🗡️", href: "/rankup/sistemas/dungeons", desc: "Masmorras e suas recompensas." },
    ],
  },
  {
    id: "referencia",
    title: "Referência",
    icon: "📚",
    desc: "Comandos e perguntas frequentes do modo.",
    pages: [
      { title: "Comandos", icon: "💻", href: "/rankup/comandos", desc: "Comandos do modo RankUP." },
      { title: "FAQ", icon: "❓", href: "/rankup/faq", desc: "Perguntas frequentes do modo." },
    ],
  },
];

export default function RankupPage() {
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
            <span className="rounded-full border border-border bg-bg-raised px-3 py-1 text-xs font-medium text-text-muted">
              257 ranks
            </span>
            <span className="rounded-full border border-border bg-bg-raised px-3 py-1 text-xs font-medium text-text-muted">
              Rank final: Hyperion
            </span>
          </div>
          <h1 className="mt-4 flex items-center gap-3 text-3xl font-bold tracking-tight text-balance text-text sm:text-4xl">
            <span aria-hidden="true">🚀</span> RankUP
          </h1>
          <p className="mt-2 max-w-2xl text-text-muted">
            O modo de progressão por ranks do FuturyCraft: soba de rank até o
            Hyperion, desbloqueie minas, sistemas e recompensas e evolua no seu
            próprio ritmo.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/rankup/comecando"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-dim"
            >
              Começar no RankUP <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/rankup/ranks"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg-raised px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:border-accent/50"
            >
              Ver os Ranks
            </Link>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-dashed border-border bg-bg-card p-4 text-sm text-text-muted">
          Use a navegação abaixo ou as áreas desta página para encontrar cada assunto.
        </div>

        <section className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <a
              key={a.id}
              href={`#${a.id}`}
              className="group flex flex-col gap-1.5 rounded-2xl border border-border bg-bg-card p-5 transition-colors hover:border-accent/40 hover:bg-bg-hover"
            >
              <span className="flex items-center justify-between">
                <span className="text-2xl" aria-hidden="true">{a.icon}</span>
                <span className="rounded-full border border-border bg-bg-raised px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-widest text-text-muted">
                  {a.pages.length}
                </span>
              </span>
              <span className="text-base font-semibold text-text group-hover:text-accent">{a.title}</span>
              <span className="text-sm text-text-muted">{a.desc}</span>
            </a>
          ))}
        </section>

        {areas.map((a) => (
          <section key={a.id} id={a.id} className="mt-14 scroll-mt-24">
            <h2 className="mb-1 flex items-center gap-2 text-lg font-semibold text-text">
              <span aria-hidden="true">{a.icon}</span> {a.title}
            </h2>
            <p className="mb-4 text-sm text-text-muted">{a.desc}</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {a.pages.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="group flex items-start gap-3 rounded-xl border border-border bg-bg-card p-4 transition-colors hover:border-accent/40 hover:bg-bg-hover"
                >
                  <span className="text-xl" aria-hidden="true">{p.icon}</span>
                  <span className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold text-text group-hover:text-accent">{p.title}</span>
                    <span className="text-xs text-text-muted">{p.desc}</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </DocLayout>
  );
}
