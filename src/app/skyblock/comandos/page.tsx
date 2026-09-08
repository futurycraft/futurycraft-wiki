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
  title: "Comandos do SkyBlock",
  description:
    "Comandos do SkyBlock: ilha, missões, encantamentos, economia e sistemas. Pesquise com busca instantânea e filtros.",
  alternates: { canonical: `${siteConfig.wikiUrl}/skyblock/comandos` },
};

export default function SkyBlockComandosPage() {
  return (
    <DocLayout>
      <div className="animate-fade-in">
        <JsonLd data={breadcrumbJsonLd([{ name: "Wiki", href: "/" }, { name: "SkyBlock", href: "/skyblock" }, { name: "Comandos" }])} />
        <Suspense>
          <CommandScroller />
        </Suspense>
        <Breadcrumb
          items={[
            { label: "Wiki", href: "/" },
            { label: "SkyBlock", href: "/skyblock" },
            { label: "Comandos" },
          ]}
        />
        <header className="mt-4">
          <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Comandos do SkyBlock
          </h1>
          <p className="mt-2 max-w-2xl text-text-muted">
            Pesquise comandos da sua ilha, do sistema de missões, encantamentos
            e demais sistemas do SkyBlock.
          </p>
        </header>
        <Callout type="info" title="Procurando comandos gerais?" className="mt-6">
          Comandos como teleporte, loja e votação ficam na página de{" "}
          <Link href="/geral/comandos" className="text-accent hover:underline">
            Comandos Gerais
          </Link>
          .
        </Callout>
        <Suspense>
          <CommandsBrowser categorias={["SkyBlock", "Ilha", "Encantamentos"]} />
        </Suspense>
      </div>
    </DocLayout>
  );
}