import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { siteConfig } from "@/config/site";
import { DocLayout } from "@/components/doc-layout";
import { Breadcrumb } from "@/components/breadcrumb";
import { CommandsBrowser } from "@/components/commands-browser";
import { CommandScroller } from "@/components/command-scroller";
import { JsonLd, breadcrumbJsonLd } from "@/components/json-ld";
import { Callout } from "@/components/callout";

export const metadata: Metadata = {
  title: "Comandos Gerais",
  description:
    "Comandos gerais do FuturyCraft: ajudar, loja, economia, teleporte e votação. Pesquise com busca instantânea e filtros.",
  alternates: { canonical: `${siteConfig.wikiUrl}/geral/comandos` },
};

export default function GeralComandosPage() {
  return (
    <DocLayout>
      <div className="animate-fade-in">
        <JsonLd data={breadcrumbJsonLd([{ name: "Wiki", href: "/" }, { name: "Geral", href: "/geral" }, { name: "Comandos" }])} />
        <Suspense>
          <CommandScroller />
        </Suspense>
        <Breadcrumb
          items={[
            { label: "Wiki", href: "/" },
            { label: "Geral", href: "/geral" },
            { label: "Comandos" },
          ]}
        />
        <header className="mt-4">
          <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Comandos Gerais
          </h1>
          <p className="mt-2 max-w-2xl text-text-muted">
            Comandos básicos do servidor: menu, loja, economia, votação,
            teleporte e utilidades.
          </p>
        </header>
        <Callout type="info" title="Procurando comandos do SkyBlock?" className="mt-6">
          Comandos da ilha, missões e encantamentos ficam na página de{" "}
          <Link href="/skyblock/comandos" className="text-accent hover:underline">
            Comandos do SkyBlock
          </Link>
          .
        </Callout>
        <Suspense>
          <CommandsBrowser categorias={["Geral", "Economia", "Teletransporte"]} />
        </Suspense>
      </div>
    </DocLayout>
  );
}