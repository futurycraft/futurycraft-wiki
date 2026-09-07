import { Suspense } from "react";
import { siteConfig } from "@/config/site";
import { DocLayout } from "@/components/doc-layout";
import { Breadcrumb } from "@/components/breadcrumb";
import { EnchantsCatalog } from "@/components/enchants-catalog";

export const metadata = {
  title: "Encantamentos",
  description:
    "Catálogo completo dos encantamentos personalizados do FuturyCraft: padrão, cósmicos e vanilla.",
  alternates: {
    canonical: `${siteConfig.url}/wiki/encantamentos`,
  },
};

export default function EncantamentosPage() {
  return (
    <DocLayout>
      <div className="animate-fade-in">
        <Breadcrumb
          items={[{ label: "Wiki", href: "/wiki" }, { label: "Encantamentos" }]}
        />
        <header className="mt-4">
          <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Encantamentos
          </h1>
          <p className="mt-2 max-w-2xl text-text-muted">
            Pesquise, filtre e conheça todos os encantamentos do servidor —
            padrão, cósmicos e vanilla personalizados.
          </p>
        </header>
        <Suspense>
          <EnchantsCatalog />
        </Suspense>
      </div>
    </DocLayout>
  );
}