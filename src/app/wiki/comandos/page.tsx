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
    "Lista completa de comandos disponíveis para jogadores no FuturyCraft, com busca instantânea e filtros por categoria.",
  alternates: { canonical: `${siteConfig.wikiUrl}/comandos` },
};

export default function ComandosPage() {
  return (
    <DocLayout>
      <div className="animate-fade-in">
        <JsonLd data={breadcrumbJsonLd([{ name: "Wiki", href: "/wiki" }, { name: "Comandos" }])} />
        <Suspense>
          <CommandScroller />
        </Suspense>
        <Breadcrumb items={[{ label: "Wiki", href: "/wiki" }, { label: "Comandos" }]} />
        <header className="mt-4">
          <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">Comandos</h1>
          <p className="mt-2 max-w-2xl text-text-muted">
            Pesquise qualquer comando do servidor por nome, descrição ou categoria.
          </p>
        </header>
        <Suspense>
          <CommandsBrowser />
        </Suspense>
      </div>
    </DocLayout>
  );
}