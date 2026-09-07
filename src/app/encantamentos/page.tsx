import { Suspense } from "react";
import { siteConfig } from "@/config/site";
import { DocLayout } from "@/components/doc-layout";
import { Breadcrumb } from "@/components/breadcrumb";
import { EnchantsCatalog } from "@/components/enchants-catalog";
import { JsonLd, breadcrumbJsonLd } from "@/components/json-ld";

export const metadata = {
  title: "Encantamentos",
  description:
    "Catálogo completo dos 284 encantamentos personalizados do FuturyCraft, com filtro por raridade.",
  alternates: {
    canonical: `${siteConfig.url}/encantamentos`,
  },
};

export default function EncantamentosPage() {
  return (
    <DocLayout>
      <div className="animate-fade-in">
        <JsonLd data={breadcrumbJsonLd([{ name: "Wiki", href: "/" }, { name: "Encantamentos" }])} />
        <Breadcrumb
          items={[{ label: "Wiki", href: "/" }, { label: "Encantamentos" }]}
        />
        <header className="mt-4">
          <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Encantamentos
          </h1>
          <p className="mt-2 max-w-2xl text-text-muted">
            Pesquise, filtre e conheça os encantamentos do servidor,
            organizados por raridade — Simples, Único, Elite, Supremo,
            Lendário e Heróico.
          </p>
        </header>
        <Suspense>
          <EnchantsCatalog />
        </Suspense>
      </div>
    </DocLayout>
  );
}