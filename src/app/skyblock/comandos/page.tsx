import type { Metadata } from "next";
import { Suspense } from "react";
import { siteConfig } from "@/config/site";
import { DocLayout } from "@/components/doc-layout";
import { Breadcrumb } from "@/components/breadcrumb";
import { CommandsBrowser } from "@/components/commands-browser";
import { CommandScroller } from "@/components/command-scroller";
import { JsonLd, breadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Comandos",
  description:
    "Todos os comandos do servidor: menu, loja, economia, teleporte, ilha, missões, encantamentos e sistemas. Pesquise com busca instantânea e filtros.",
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
            Comandos
          </h1>
          <p className="mt-2 max-w-2xl text-text-muted">
            Todos os comandos do servidor em um só lugar: menu, loja, economia,
            teleporte, ilha, missões, minas e encantamentos do SkyBlock.
          </p>
        </header>
        <Suspense>
          <CommandsBrowser categorias={["Geral", "SkyBlock", "Economia", "Ilha", "Teletransporte", "Mina", "Encantamentos"]} />
        </Suspense>
      </div>
    </DocLayout>
  );
}