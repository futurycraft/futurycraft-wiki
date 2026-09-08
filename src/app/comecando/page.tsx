import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { season } from "@/data/season";
import { DocLayout } from "@/components/doc-layout";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd, breadcrumbJsonLd } from "@/components/json-ld";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Começando",
  description:
    "Como entrar no FuturyCraft, registrar sua conta, se logar e dar os primeiros passos no servidor.",
  alternates: { canonical: `${siteConfig.wikiUrl}/comecando` },
};

const steps = [
  {
    icon: "🕹️",
    title: "Como Jogar",
    href: "/comecando/comojogar",
    desc: "Dados de conexão, entre pelo Java ou pelo Bedrock.",
  },
  {
    icon: "🚪",
    title: "Primeiro Acesso",
    href: "/comecando/primeiroacesso",
    desc: "Registre sua conta, faça login e passe na verificação.",
  },
  {
    icon: "🌱",
    title: "Primeiros Passos",
    href: "/comecando/primeirospassos",
    desc: "Abra o menu, ative a textura e escolha onde começar.",
  },
  {
    icon: "❓",
    title: "FAQ",
    href: "/comecando/faq",
    desc: "Dúvidas frequentes de quem está chegando agora.",
  },
];

export default function ComecandoPage() {
  return (
    <DocLayout>
      <div className="animate-fade-in">
        <JsonLd data={breadcrumbJsonLd([{ name: "Wiki", href: "/" }, { name: "Começando" }])} />
        <Breadcrumb items={[{ label: "Wiki", href: "/" }, { label: "Começando" }]} />

        <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-bg-card p-6 card-glow sm:p-8">
          <h1 className="flex items-center gap-3 text-3xl font-bold tracking-tight text-balance text-text sm:text-4xl">
            <span aria-hidden="true">🎮</span> Começando
          </h1>
          <p className="mt-2 max-w-2xl text-text-muted">
            Tudo o que você precisa para entrar no FuturyCraft e dar os
            primeiros passos. Aceitamos jogadores piratas e originais na versão{" "}
            <strong>{season.versao}</strong>.
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

        <section className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex flex-col gap-2 rounded-2xl border border-border bg-bg-card p-5 transition-colors hover:border-accent/40 hover:bg-bg-hover"
            >
              <span className="text-2xl" aria-hidden="true">{s.icon}</span>
              <span className="text-base font-semibold text-text group-hover:text-accent">{s.title}</span>
              <span className="text-sm text-text-muted">{s.desc}</span>
            </Link>
          ))}
        </section>

        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-bg-card p-6">
            <h2 className="text-lg font-semibold text-text">Links oficiais</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href={siteConfig.loja}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-dim"
              >
                Loja <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href={siteConfig.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg-raised px-4 py-2.5 text-sm font-semibold text-text transition-colors hover:border-accent/50"
              >
                Discord
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-bg-card p-6">
            <h2 className="text-lg font-semibold text-text">Precisando de ajuda?</h2>
            <p className="mt-2 text-sm text-text-muted">
              Veja as <Link href="/geral/faq" className="text-accent hover:underline">Perguntas Frequentes</Link>,
              fale com o <Link href="/geral/suporte" className="text-accent hover:underline">Suporte</Link> ou
              consulte as <Link href="/geral/regras" className="text-accent hover:underline">Regras</Link>.
            </p>
          </div>
        </section>
      </div>
    </DocLayout>
  );
}