import type { Metadata } from "next";
import { Suspense } from "react";
import { siteConfig } from "@/config/site";
import { DocLayout } from "@/components/doc-layout";
import { Breadcrumb } from "@/components/breadcrumb";
import { RankupCommandsBrowser } from "@/components/rankup-commands-browser";
import { CommandScroller } from "@/components/command-scroller";
import { JsonLd, breadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Comandos",
  description:
    "Comandos liberados para jogadores no modo RankUP: ranks, minas, caixas, máquinas, spawners, economia, dungeons e mais. Pesquise com busca instantânea.",
  alternates: { canonical: `${siteConfig.wikiUrl}/rankup/comandos` },
};

export default function RankupComandosPage() {
  return (
    <DocLayout>
      <div className="animate-fade-in">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Wiki", href: "/" },
            { name: "RankUP", href: "/rankup" },
            { name: "Comandos" },
          ])}
        />
        <Suspense>
          <CommandScroller />
        </Suspense>
        <Breadcrumb
          items={[
            { label: "Wiki", href: "/" },
            { label: "RankUP", href: "/rankup" },
            { label: "Comandos" },
          ]}
        />
        <header className="mt-4">
          <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Comandos do RankUP
          </h1>
          <p className="mt-2 max-w-2xl text-text-muted">
            Comandos liberados para jogadores no RankUP: progressão de ranks,
            minas, caixas, máquinas, spawners, farms, economia e mais. Use a
            busca ou filtre por categoria.
          </p>
        </header>
        <Suspense>
          <RankupCommandsBrowser />
        </Suspense>
      </div>
    </DocLayout>
  );
}