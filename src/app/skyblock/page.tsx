import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { season } from "@/data/season";
import { DocLayout } from "@/components/doc-layout";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd, breadcrumbJsonLd } from "@/components/json-ld";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "SkyBlock",
  description:
    "O mapa do SkyBlock do FuturyCraft: onde começar, evoluir sua ilha, dominar os sistemas e ganhar recompensas.",
  alternates: { canonical: `${siteConfig.wikiUrl}/skyblock` },
};

const areas = [
  {
    id: "comecando",
    title: "Começando",
    icon: "🎮",
    desc: "Por onde começar: entre, crie sua ilha e ative a textura.",
    pages: [
      { title: "Como Jogar", icon: "🕹️", href: "/skyblock/comojogar", desc: "Crie sua ilha e dê os primeiros passos." },
      { title: "Textura do Servidor", icon: "🎨", href: "/skyblock/textura-do-servidor", desc: "Ative a textura oficial com /textura." },
      { title: "FAQ", icon: "❓", href: "/skyblock/faq", desc: "Perguntas frequentes do modo." },
    ],
  },
  {
    id: "skyblock",
    title: "SkyBlock",
    icon: "🏝️",
    desc: "O coração da sua jornada: sua ilha, sua grana e sorteios.",
    pages: [
      { title: "Ilha", icon: "🏝️", href: "/skyblock/ilha", desc: "Níveis, equipe, homes, biomas e mais." },
      { title: "Economia", icon: "💰", href: "/skyblock/economia", desc: "Money, cash, banco e lojas." },
      { title: "Loteria", icon: "🎟️", href: "/skyblock/loteria", desc: "Aposte números e concorra a prêmios." },
    ],
  },
  {
    id: "progressao",
    title: "Progressão",
    icon: "📈",
    desc: "Evolua sua ilha, seus encantamentos e seus recursos.",
    pages: [
      { title: "Progressão", icon: "📈", href: "/skyblock/progressao", desc: "Como evoluir sua ilha e suas farms." },
      { title: "Encantamentos", icon: "✨", href: "/skyblock/encantamentos", desc: "284 encantamentos personalizados." },
      { title: "Spawners", icon: "🫧", href: "/skyblock/spawners", desc: "Drops constantes de mobs na ilha." },
      { title: "Minions", icon: "⚙️", href: "/skyblock/minions", desc: "Autômatos que trabalham para você." },
      { title: "Jobs", icon: "🛠️", href: "/skyblock/jobs", desc: "Profissões para ganhar recompensas." },
      { title: "mcMMO", icon: "⛏️", href: "/skyblock/mcmmo", desc: "Habilidades e XP por ações." },
      { title: "Itens", icon: "🧩", href: "/geral/itens", desc: "Itens personalizados do servidor." },
      { title: "Crafting", icon: "🔨", href: "/skyblock/crafting", desc: "Receitas exclusivas do modo." },
      { title: "Dragão", icon: "🐉", href: "/skyblock/dragao", desc: "O boss do servidor." },
      { title: "Shop", icon: "🛒", href: "/skyblock/shop", desc: "Compras dentro do modo." },
      { title: "Kits", icon: "🎁", href: "/skyblock/kits", desc: "Kits disponíveis no SkyBlock." },
      { title: "Mercado Galáctico", icon: "🪐", href: "/skyblock/mercado-galactico", desc: "Mercado entre jogadores." },
    ],
  },
  {
    id: "sistemas",
    title: "Sistemas",
    icon: "✨",
    desc: "Missões, eventos, loja, VIPs e todos os sistemas do modo.",
    pages: [
      { title: "Missões", icon: "📜", href: "/skyblock/missoes", desc: "Desafios da ilha e do servidor." },
      { title: "Passe de Batalha", icon: "🎖️", href: "/skyblock/battlepass", desc: "Missões e recompensas por temporada." },
      { title: "Crates", icon: "📦", href: "/skyblock/crates", desc: "Caixas de recompensas." },
      { title: "Eventos", icon: "🎉", href: "/skyblock/eventos", desc: "Dragão, pinhata e mais." },
      { title: "Airdrops", icon: "🪂", href: "/skyblock/airdrops", desc: "Recompensas que caem do céu." },
      { title: "Relíquias", icon: "⚰️", href: "/skyblock/reliquias", desc: "Itens raros especiais." },
      { title: "Torneios", icon: "🏆", href: "/skyblock/torneios", desc: "Competições com premiações." },
      { title: "Parkour", icon: "🏃", href: "/skyblock/parkour", desc: "Pistas de habilidade." },
      { title: "Loja", icon: "🛒", href: "/geral/loja", desc: "Benefícios e VIPs na loja oficial." },
      { title: "VIPs", icon: "💎", href: "/geral/vips", desc: "Kits, comandos e benefícios de cada VIP." },
      { title: "Textura do Servidor", icon: "🎨", href: "/skyblock/textura-do-servidor", desc: "Ative a textura oficial com /textura." },
    ],
  },
  {
    id: "recompensas",
    title: "Recompensas",
    icon: "🎁",
    desc: "Vote, participe e ganhe recompensas todos os dias.",
    pages: [
      { title: "Recompensas", icon: "🎁", href: "/skyblock/recompensas", desc: "Votações, kits VIP e diárias." },
      { title: "Votação", icon: "🗳️", href: "/skyblock/votacao", desc: "Vote a cada 24h e ganhe recompensas." },
      { title: "Rankings", icon: "📊", href: "/skyblock/rankings", desc: "Tops de ilha, money e cash." },
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