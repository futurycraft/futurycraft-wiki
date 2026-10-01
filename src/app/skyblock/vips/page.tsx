import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { DocLayout } from "@/components/doc-layout";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd, breadcrumbJsonLd } from "@/components/json-ld";
import { SparkIcon } from "@/components/icons";
import { VipsComparison } from "@/components/vips-comparison";
import { vipsSkyblock } from "@/data/vips";

export const metadata: Metadata = {
  title: "VIPs",
  description:
    "Compare os benefícios de cada categoria de VIP do SkyBlock: kits, comandos, limites de spawners e minions.",
  alternates: { canonical: `${siteConfig.wikiUrl}/skyblock/vips` },
  openGraph: {
    title: "VIPs do SkyBlock",
    description:
      "Compare os benefícios de cada categoria e encontre o VIP ideal para sua jornada.",
    url: `${siteConfig.wikiUrl}/skyblock/vips`,
  },
};

function Progressao({
  titulo,
  valores,
}: {
  titulo: string;
  valores: { nome: string; icone: string; texto: string; valor: number }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted">
        {titulo}
      </h3>
      <ol className="mt-3 flex flex-wrap items-center gap-2">
        {valores.map((v, i) => (
          <li key={v.nome} className="flex items-center gap-2">
            {i > 0 && (
              <span aria-hidden="true" className="text-text-muted">
                <SparkIcon className="h-3 w-3" />
              </span>
            )}
            <span
              className={`inline-flex items-center gap-2 rounded-full border bg-bg-raised px-3 py-1.5 text-sm ${v.texto}`}
            >
              <span aria-hidden="true">{v.icone}</span>
              <span className="sr-only">{v.nome}: </span>
              <span className="font-mono font-semibold">{v.valor}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function VipsSkyblockPage() {
  return (
    <DocLayout>
      <div className="animate-fade-in">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Wiki", href: "/" },
            { name: "SkyBlock", href: "/skyblock" },
            { name: "VIPs" },
          ])}
        />
        <Breadcrumb
          items={[
            { label: "Wiki", href: "/" },
            { label: "SkyBlock", href: "/skyblock" },
            { label: "VIPs" },
          ]}
        />

        <header className="mt-4 overflow-hidden rounded-2xl border border-border bg-bg-card p-6 card-glow sm:p-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-glow px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
            <span aria-hidden="true">💎</span> VIPs do SkyBlock
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-balance text-text sm:text-4xl">
            Escolha o VIP ideal para sua jornada
          </h1>
          <p className="mt-2 max-w-2xl text-text-dim">
            Compare os benefícios de cada categoria e encontre o VIP ideal para
            sua jornada.
          </p>
          <p className="mt-3 max-w-2xl text-sm text-text-muted">
            Todos os VIPs incluem acesso à Mina VIP e ao chat SkyBlock no Discord.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={siteConfig.loja}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-bg transition-colors hover:bg-accent-dim"
            >
              Ver na Loja
            </a>
            <Link
              href="#comparacao"
              className="inline-flex items-center rounded-xl border border-border bg-bg-raised px-5 py-2 text-sm font-semibold text-text transition-colors hover:border-accent/50"
            >
              Ver comparação
            </Link>
          </div>
        </header>

        <VipsComparison />

        <section id="progressao" className="mt-14 scroll-mt-24">
          <h2 className="text-lg font-semibold text-text">
            Quanto maior o VIP, maiores os limites
          </h2>
          <p className="mt-1 text-sm text-text-muted">
            Progressão dos limites em cada categoria de VIP.
          </p>
          <div className="mt-6 space-y-6 rounded-2xl border border-border bg-bg-card p-5 sm:p-6">
            <Progressao
              titulo="Spawners"
              valores={vipsSkyblock.map((v) => ({
                nome: v.nome,
                icone: v.icone,
                texto: v.texto,
                valor: v.spawners,
              }))}
            />
            <Progressao
              titulo="Minions"
              valores={vipsSkyblock.map((v) => ({
                nome: v.nome,
                icone: v.icone,
                texto: v.texto,
                valor: v.minions,
              }))}
            />
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-lg font-semibold text-text">Onde esses benefícios aparecem</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            <li className="rounded-xl border border-border bg-bg-card p-4 transition-colors hover:border-accent/40 hover:bg-bg-hover">
              <Link href="/skyblock/spawners" className="text-sm font-semibold text-accent hover:underline">
                Spawners
              </Link>
              <p className="mt-1 text-xs text-text-muted">
                Como obter, usar e fazer upgrade nos spawners da ilha.
              </p>
            </li>
            <li className="rounded-xl border border-border bg-bg-card p-4 transition-colors hover:border-accent/40 hover:bg-bg-hover">
              <Link href="/skyblock/minions" className="text-sm font-semibold text-accent hover:underline">
                Minions
              </Link>
              <p className="mt-1 text-xs text-text-muted">
                Como colocar minions na ilha e configurar suas tarefas.
              </p>
            </li>
            <li className="rounded-xl border border-border bg-bg-card p-4 transition-colors hover:border-accent/40 hover:bg-bg-hover">
              <Link href="/skyblock/mcmmo" className="text-sm font-semibold text-accent hover:underline">
                mcMMO
              </Link>
              <p className="mt-1 text-xs text-text-muted">
                Habilidades e XP por ações, com bônus para Esmeralda e Supremo.
              </p>
            </li>
            <li className="rounded-xl border border-border bg-bg-card p-4 transition-colors hover:border-accent/40 hover:bg-bg-hover">
              <Link href="/skyblock/comandos" className="text-sm font-semibold text-accent hover:underline">
                Comandos
              </Link>
              <p className="mt-1 text-xs text-text-muted">
                Lista completa de comandos do servidor, com busca e filtros.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </DocLayout>
  );
}