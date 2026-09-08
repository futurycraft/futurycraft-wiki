import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { season } from "@/data/season";
import { DocLayout } from "@/components/doc-layout";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd, breadcrumbJsonLd } from "@/components/json-ld";
import { ArrowRightIcon, ChevronRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "SkyBlock",
  description:
    "Central do modo SkyBlock do FuturyCraft: comece, evolua sua ilha, cresça na economia e domine os sistemas.",
  alternates: { canonical: `${siteConfig.wikiUrl}/skyblock` },
};

const areas = [
  {
    id: "comecando",
    title: "Começando",
    icon: "🌱",
    desc: "Crie sua ilha, ative a textura e tire suas dúvidas.",
    pages: [
      { title: "Como Jogar", icon: "🕹️", href: "/skyblock/comojogar", desc: "Crie sua ilha e dê os primeiros passos." },
      { title: "FAQ", icon: "❓", href: "/skyblock/faq", desc: "Perguntas frequentes sobre o modo." },
      { title: "Textura do Servidor", icon: "🎨", href: "/skyblock/textura-do-servidor", desc: "Ative a textura oficial com /textura." },
    ],
  },
  {
    id: "ilha",
    title: "Ilha",
    icon: "🏝️",
    desc: "Gerencie sua ilha, evolua e automatize.",
    pages: [
      { title: "Ilha", icon: "🏝️", href: "/skyblock/ilha", desc: "Níveis, equipe, homes, biomas e mais." },
      { title: "Progressão", icon: "📈", href: "/skyblock/progressao", desc: "Como evoluir sua ilha e suas farms." },
      { title: "Minions", icon: "⚙️", href: "/skyblock/minions", desc: "Autômatos que trabalham para você." },
      { title: "Spawners", icon: "🫧", href: "/skyblock/spawners", desc: "Drops constantes de mobs na ilha." },
    ],
  },
  {
    id: "economia",
    title: "Economia",
    icon: "💰",
    desc: "Money, cash, loteria e crates.",
    pages: [
      { title: "Economia", icon: "💰", href: "/skyblock/economia", desc: "Money, cash, banco e lojas." },
      { title: "Loteria", icon: "🎟️", href: "/skyblock/loteria", desc: "Aposte números e concorra a prêmios." },
      { title: "Crates", icon: "📦", href: "/skyblock/crates", desc: "Caixas de recompensas." },
    ],
  },
  {
    id: "progressao",
    title: "Progressão",
    icon: "📜",
    desc: "Missões, jobs, habilidades e temporadas.",
    pages: [
      { title: "Missões", icon: "📜", href: "/skyblock/missoes", desc: "Desafios da ilha e do servidor." },
      { title: "Jobs", icon: "🛠️", href: "/skyblock/jobs", desc: "Profissões para ganhar recompensas." },
      { title: "mcMMO", icon: "⛏️", href: "/skyblock/mcmmo", desc: "Habilidades e XP por ações." },
      { title: "Battle Pass", icon: "🎖️", href: "/skyblock/battlepass", desc: "Missões e recompensas por temporada." },
    ],
  },
  {
    id: "sistemas",
    title: "Sistemas",
    icon: "✨",
    desc: "Encantamentos, eventos, crafting e mais.",
    pages: [
      { title: "Encantamentos", icon: "✨", href: "/skyblock/encantamentos", desc: "284 encantamentos personalizados." },
      { title: "Pets", icon: "🐾", href: "/skyblock/pets", desc: "Companheiros da sua ilha." },
      { title: "Eventos", icon: "🎉", href: "/skyblock/eventos", desc: "Dragão, pinhata e mais." },
      { title: "Airdrops", icon: "🪂", href: "/skyblock/airdrops", desc: "Recompensas que caem do céu." },
      { title: "Relíquias", icon: "⚰️", href: "/skyblock/reliquias", desc: "Itens raros especiais." },
      { title: "Torneios", icon: "🏆", href: "/skyblock/torneios", desc: "Competições com premiações." },
      { title: "Parkour", icon: "🏃", href: "/skyblock/parkour", desc: "Pistas de habilidade." },
      { title: "Crafting", icon: "🔨", href: "/skyblock/crafting", desc: "Receitas exclusivas do modo." },
    ],
  },
  {
    id: "recompensas",
    title: "Recompensas",
    icon: "🎁",
    desc: "Ganhe votando e participando.",
    pages: [
      { title: "Recompensas", icon: "🎁", href: "/skyblock/recompensas", desc: "Votações, kits VIP e diárias." },
      { title: "Votação", icon: "🗳️", href: "/skyblock/votacao", desc: "Vote a cada 24h e ganhe recompensas." },
      { title: "Vouchers", icon: "🎫", href: "/skyblock/vouchers", desc: "Vales de recompensas." },
      { title: "Rankings", icon: "📊", href: "/skyblock/rankings", desc: "Tops de ilha, money e cash." },
    ],
  },
  {
    id: "referencia",
    title: "Referência",
    icon: "⌨️",
    desc: "Todos os comandos do modo.",
    pages: [
      { title: "Comandos", icon: "⌨️", href: "/skyblock/comandos", desc: "Comandos da ilha, missões e sistemas." },
    ],
  },
];

export default function SkyblockPage() {
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
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/skyblock/comojogar"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-dim"
            >
              Começar no SkyBlock <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/skyblock/comandos"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg-raised px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:border-accent/50"
            >
              Comandos
            </Link>
          </div>
        </div>

        <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a) => (
            <a
              key={a.id}
              href={`#${a.id}`}
              className="group flex flex-col gap-2 rounded-2xl border border-border bg-bg-card p-5 transition-colors hover:border-accent/40 hover:bg-bg-hover"
            >
              <span className="flex items-center justify-between">
                <span className="text-2xl" aria-hidden="true">{a.icon}</span>
                <ChevronRightIcon className="h-4 w-4 text-text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
              </span>
              <span className="text-base font-semibold text-text group-hover:text-accent">{a.title}</span>
              <span className="text-sm text-text-muted">{a.desc}</span>
            </a>
          ))}
        </section>

        {areas.map((a) => (
          <section key={a.id} id={a.id} className="mt-12 scroll-mt-24">
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