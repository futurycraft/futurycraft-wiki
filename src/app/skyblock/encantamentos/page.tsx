import { Suspense } from "react";
import { siteConfig } from "@/config/site";
import { DocLayout } from "@/components/doc-layout";
import { Breadcrumb } from "@/components/breadcrumb";
import { EnchantsCatalog } from "@/components/enchants-catalog";
import { Callout } from "@/components/callout";
import { JsonLd, breadcrumbJsonLd } from "@/components/json-ld";

export const metadata = {
  title: "Encantamentos",
  description:
    "Sistema de encantamentos personalizados do SkyBlock: como funciona, como conseguir, como utilizar e os 284 encantamentos do catálogo.",
  alternates: {
    canonical: `${siteConfig.wikiUrl}/skyblock/encantamentos`,
  },
};

const raridades = [
  { nome: "Simples", total: 22 },
  { nome: "Único", total: 26 },
  { nome: "Elite", total: 54 },
  { nome: "Supremo", total: 75 },
  { nome: "Lendário", total: 55 },
  { nome: "Heróico", total: 52 },
];

export default function EncantamentosPage() {
  return (
    <DocLayout>
      <div className="animate-fade-in">
        <JsonLd data={breadcrumbJsonLd([{ name: "Wiki", href: "/" }, { name: "SkyBlock", href: "/skyblock" }, { name: "Encantamentos" }])} />
        <Breadcrumb
          items={[
            { label: "Wiki", href: "/" },
            { label: "SkyBlock", href: "/skyblock" },
            { label: "Encantamentos" },
          ]}
        />
        <header className="mt-4">
          <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Encantamentos
          </h1>
          <p className="mt-2 max-w-2xl text-text-muted">
            O SkyBlock possui um sistema de <strong>284 encantamentos personalizados</strong>,
            organizados por raridade. Domine a ferramenta do alquimista para
            combinar, melhorar e desmontar encantamentos nos seus itens.
          </p>
        </header>

        <section id="como-funciona" className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-bg-card p-6">
            <h2 className="text-lg font-semibold text-text">Como Funciona</h2>
            <p className="mt-2 text-sm leading-relaxed text-text-dim">
              Cada encantamento possui um <strong>efeito</strong>, uma lista de itens em que
              se aplica (<strong>aplica-se a</strong>), uma <strong>raridade / grupo</strong> e um{" "}
              <strong>nível máximo</strong>. O catálogo abaixo permite pesquisar e filtrar
              por raridade para encontrar o encantamento ideal para cada situação.
            </p>
            <div className="mt-4 flow-root">
              <ul className="-mx-2 grid gap-1.5 sm:grid-cols-2">
                {raridades.map((r) => (
                  <li key={r.nome} className="flex items-center justify-between rounded-lg bg-bg-raised px-3 py-2 text-sm">
                    <span className="text-text-dim">{r.nome}</span>
                    <span className="font-mono text-xs text-text-muted">{r.total}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border bg-bg-card p-6">
              <h2 className="text-lg font-semibold text-text">Como Utilizar</h2>
              <p className="mt-2 text-sm leading-relaxed text-text-dim">
                Os principais comandos do sistema são:
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <code className="font-mono text-accent">/alquimista</code>{" "}
                  <span className="text-text-dim">— abre o menu do alquimista para combinar ou melhorar encantamentos</span>
                </li>
                <li>
                  <code className="font-mono text-accent">/encantamentos</code>{" "}
                  <span className="text-text-dim">— lista os encantamentos disponíveis</span>
                </li>
                <li>
                  <code className="font-mono text-accent">/desmontar</code>{" "}
                  <span className="text-text-dim">— desmonta encantamentos de um item</span>
                </li>
              </ul>
            </div>
            <Callout type="info" title="Onde conseguir" className="my-0">
              Consulte os encantamentos disponíveis no próprio jogo pelo menu{" "}
              <code>/encantamentos</code> e combine os que tiver usando o{" "}
              <code>/alquimista</code>. Encantamentos que não quiser podem ser
              desmontados com <code>/desmontar</code>.
            </Callout>
          </div>
        </section>

        <section className="mt-12" id="catalogo">
          <h2 className="text-lg font-semibold text-text">Catálogo</h2>
          <Suspense>
            <EnchantsCatalog />
          </Suspense>
        </section>
      </div>
    </DocLayout>
  );
}