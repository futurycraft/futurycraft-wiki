import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { DocLayout } from "@/components/doc-layout";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd, breadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Geral",
  description:
    "Comandos gerais, regras, suporte, FAQ, Discord, contato, loja, VIPs e informações oficiais do FuturyCraft.",
  alternates: { canonical: `${siteConfig.wikiUrl}/geral` },
};

const secaoGeral = [
  { title: "Regras", icon: "📜", href: "/geral/regras", desc: "As regras oficiais e punições do servidor." },
  { title: "Suporte", icon: "🎫", href: "/geral/suporte", desc: "Abra um ticket no Discord e receba ajuda." },
  { title: "FAQ", icon: "❓", href: "/geral/faq", desc: "Perguntas frequentes sobre o servidor." },
  { title: "Discord", icon: "💬", href: "/geral/discord", desc: "Entre na comunidade oficial no Discord." },
  { title: "Contato", icon: "📧", href: "/geral/contato", desc: "Canais oficiais para falar com a equipe." },
  { title: "Loja", icon: "🛒", href: "/geral/loja", desc: "Benefícios, VIPs e kits na loja oficial." },
  { title: "VIPs", icon: "🏆", href: "/geral/vips", desc: "Kits, comandos e benefícios de cada VIP." },
  { title: "Equipe", icon: "🛡️", href: "/geral/equipe", desc: "Cargos, benefícios e como se candidatar." },
  { title: "Criadores", icon: "🎬", href: "/geral/criadores", desc: "Programa de YouTubers e streamers." },
  { title: "Status", icon: "📡", href: "/geral/status", desc: "Dados de conexão e status do servidor." },
  { title: "Itens", icon: "🧩", href: "/geral/itens", desc: "Referência de itens personalizados." },
  { title: "Termos", icon: "📚", href: "/geral/termos", desc: "Glossário de termos do servidor." },
];

export default function GeralPage() {
  return (
    <DocLayout>
      <div className="animate-fade-in">
        <JsonLd data={breadcrumbJsonLd([{ name: "Wiki", href: "/" }, { name: "Geral" }])} />
        <Breadcrumb items={[{ label: "Wiki", href: "/" }, { label: "Geral" }]} />

        <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-bg-card p-6 card-glow sm:p-8">
          <h1 className="flex items-center gap-3 text-3xl font-bold tracking-tight text-balance text-text sm:text-4xl">
            <span aria-hidden="true">📚</span> Geral
          </h1>
          <p className="mt-2 max-w-2xl text-text-muted">
            Informações e referências que valem para todo o servidor: comandos,
            regras, suporte, comunidade, loja e VIPs.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {secaoGeral.map((p) => (
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
      </div>
    </DocLayout>
  );
}