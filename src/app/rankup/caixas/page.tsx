import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { DocLayout } from "@/components/doc-layout";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd, breadcrumbJsonLd } from "@/components/json-ld";
import { Callout } from "@/components/callout";
import { RankupCaixasCatalog } from "@/components/rankup-caixas-catalog";
import { rankupCaixas } from "@/data/rankup-caixas";

export const metadata: Metadata = {
  title: "Caixas",
  description:
    "As 6 caixas do RankUP (Eco, Mítica, Galáctica, VIP, Estelar e Cósmica) com todas as chaves e as recompensas de cada caixa.",
  alternates: { canonical: `${siteConfig.wikiUrl}/rankup/caixas` },
  openGraph: {
    title: "Caixas do RankUP",
    description:
      "Todas as caixas do RankUP com chaves, recompensas e chances de cada prêmio.",
    url: `${siteConfig.wikiUrl}/rankup/caixas`,
  },
};

const passos = [
  {
    passo: "1",
    titulo: "Tenha uma chave",
    desc: "Chaves são itens usáveis que abrem a respectiva caixa.",
  },
  {
    passo: "2",
    titulo: "Abra o menu",
    desc: "Digite /caixas (ou /caixas, /crates, /caixa) para listar as caixas.",
  },
  {
    passo: "3",
    titulo: "Escolha e clique",
    desc: "Clique esquerdo para abrir a caixa e clique direito para ver as recompensas.",
  },
];

export default function RankupCaixasPage() {
  const totalRecompensas = rankupCaixas.reduce((acc, c) => acc + c.recompensas.length, 0);
  const unicas = new Set(
    rankupCaixas.flatMap((c) =>
      c.recompensas.map((r) => `${r.nome}|${r.categoria}|${r.detalhe}`)
    )
  ).size;
  const chavesCombinadas = rankupCaixas.filter((c) =>
    c.recompensas.some((r) => r.categoria === "caixa")
  );

  const resumo: { titulo: string; valor: string; nota?: string }[] = [
    { titulo: "Caixas disponíveis", valor: String(rankupCaixas.length), nota: "com chave própria" },
    { titulo: "Recompensas", valor: String(totalRecompensas), nota: `${unicas} prêmios diferentes` },
    { titulo: "Tipos de prêmio", valor: String(13), nota: "de Blocos a Skins" },
    { titulo: "Comando", valor: "/caixas", nota: "abre o menu" },
  ];

  return (
    <DocLayout>
      <div className="animate-fade-in">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Wiki", href: "/" },
            { name: "RankUP", href: "/rankup" },
            { name: "Caixas" },
          ])}
        />
        <Breadcrumb
          items={[
            { label: "Wiki", href: "/" },
            { label: "RankUP", href: "/rankup" },
            { label: "Caixas" },
          ]}
        />

        <header className="mt-4">
          <h1 className="flex items-center gap-3 text-3xl font-bold tracking-tight text-balance text-text sm:text-4xl">
            <span aria-hidden="true">🎁</span> Caixas
          </h1>
          <p className="mt-2 max-w-2xl text-text-muted">
            As caixas entregam recompensas aleatórias ao gastar a chave da caixa
            de cada uma. Elas soltam de Blocos, Fragmentos e Money até Spawners,
            Máquinas, Bosses, Skins e até chaves de outras caixas.
          </p>
        </header>

        <section className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {resumo.map((r) => (
            <div
              key={r.titulo}
              className="rounded-2xl border border-border bg-bg-card px-4 py-3"
            >
              <span className="block text-[0.625rem] font-semibold uppercase tracking-widest text-text-muted">
                {r.titulo}
              </span>
              <span className="mt-1 block break-words text-base font-bold tracking-tight text-text">
                {r.valor}
              </span>
              {r.nota && (
                <span className="mt-0.5 block text-xs text-text-muted">{r.nota}</span>
              )}
            </div>
          ))}
        </section>

        <section id="como-abrir" className="mt-10 scroll-mt-24">
          <h2 className="border-b border-border pb-2 text-2xl font-semibold text-text">
            Como abrir uma caixa
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {passos.map((p) => (
              <div
                key={p.passo}
                className="rounded-2xl border border-border bg-bg-card p-4"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-accent/40 bg-accent-glow text-xs font-bold text-accent">
                  {p.passo}
                </span>
                <span className="mt-3 block text-sm font-semibold text-text">{p.titulo}</span>
                <span className="mt-1 block text-xs leading-relaxed text-text-muted">
                  {p.desc}
                </span>
              </div>
            ))}
          </div>
          <Callout type="info" title="Chaves entre caixas">
            {chavesCombinadas.length > 0 && (
              <>
                Algumas caixas premiam chaves de outras caixas (
                {chavesCombinadas
                  .map((c) => c.nome)
                  .sort((a, b) => a.localeCompare(b, "pt-BR"))
                  .join(", ")}
                ). Isso significa que vale a pena conferir o que cada caixa pode
                entregar antes de escolher qual abrir.
              </>
            )}
          </Callout>
        </section>

        <section id="todas-as-caixas" className="mt-10 scroll-mt-24">
          <h2 className="border-b border-border pb-2 text-2xl font-semibold text-text">
            Todas as Caixas
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-text-dim">
            As {rankupCaixas.length} caixas e as recompensas de cada chave, com as
            chances exatas de cada prêmio. Use a busca, os filtros por tipo e por
            caixa para encontrar o que procura.
          </p>
          <RankupCaixasCatalog />
        </section>
      </div>
    </DocLayout>
  );
}