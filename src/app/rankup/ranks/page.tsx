import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { DocLayout } from "@/components/doc-layout";
import { Breadcrumb } from "@/components/breadcrumb";
import { Callout } from "@/components/callout";
import { JsonLd, breadcrumbJsonLd } from "@/components/json-ld";
import { RankupRanksCatalog } from "@/components/rankup-ranks-catalog";
import {
  formatarMoney,
  formatarValor,
  rankupFaixas,
  rankupRanks,
  rankupTotal,
} from "@/data/rankup-ranks";

export const metadata: Metadata = {
  title: "Ranks",
  description:
    "Todos os 257 ranks do RankUP: posição na progressão e custos em Money, Blocos e Fragmentos de cada rank, do Noob ao Hyperion.",
  alternates: { canonical: `${siteConfig.wikiUrl}/rankup/ranks` },
  openGraph: {
    title: "Ranks do RankUP",
    description:
      "Os 257 ranks do RankUP com Money, Blocos e Fragmentos exigidos em cada evolução.",
    url: `${siteConfig.wikiUrl}/rankup/ranks`,
  },
};

const custos = [
  {
    titulo: "Money",
    campo: "price1",
    provider: "money",
    nota: "Moeda do servidor. Exibido com o prefixo R$.",
  },
  {
    titulo: "Blocos",
    campo: "price2",
    provider: "yminas",
    nota: "Blocos minerados na mina do RankUP.",
  },
  {
    titulo: "Fragmentos",
    campo: "price3",
    provider: "yrankup",
    nota: "Fragmentos obtidos jogando o RankUP.",
  },
];

export default function RankupRanksPage() {
  const primeiro = rankupRanks[0];
  const ultimo = rankupRanks[rankupRanks.length - 1];
  const exemplo = rankupRanks.find((r) => r.nome === "Titã VI") ?? rankupRanks[0];

  const resumo: { titulo: string; valor: string; nota?: string }[] = [
    { titulo: "Total de ranks", valor: String(rankupTotal), nota: "progressão completa" },
    { titulo: "Primeiro rank", valor: primeiro.nome, nota: `Rank ${primeiro.posicao} de ${rankupTotal}` },
    { titulo: "Último rank", valor: ultimo.nome, nota: `Rank ${ultimo.posicao} de ${rankupTotal}` },
    { titulo: "Faixas", valor: String(rankupFaixas.length), nota: "grupos de progressão" },
  ];

  return (
    <DocLayout>
      <div className="animate-fade-in">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Wiki", href: "/" },
            { name: "RankUP", href: "/rankup" },
            { name: "Ranks" },
          ])}
        />
        <Breadcrumb
          items={[
            { label: "Wiki", href: "/" },
            { label: "RankUP", href: "/rankup" },
            { label: "Ranks" },
          ]}
        />

        <header className="mt-4">
          <h1 className="flex items-center gap-3 text-3xl font-bold tracking-tight text-balance text-text sm:text-4xl">
            <span aria-hidden="true">🏆</span> Ranks
          </h1>
          <p className="mt-2 max-w-2xl text-text-muted">
            Os Ranks representam a progressão do jogador dentro do RankUP. A
            cada evolução, novos custos são exigidos em Money, Blocos e
            Fragmentos. Consulte abaixo todos os {rankupTotal} Ranks e os
            requisitos necessários para avançar.
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
                <span className="mt-0.5 block text-xs text-text-muted">
                  {r.nota}
                </span>
              )}
            </div>
          ))}
        </section>

        <section id="custos" className="mt-10 scroll-mt-24">
          <h2 className="border-b border-border pb-2 text-2xl font-semibold text-text">
            Custos para evoluir
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-text-dim">
            Cada rank exige três custos. Os valores abaixo vêm direto da
            configuração do RankUP e são exibidos com separador de milhar
            brasileiro (ponto):
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {custos.map((c) => (
              <div
                key={c.titulo}
                className="rounded-2xl border border-border bg-bg-card p-4"
              >
                <span className="block text-sm font-semibold text-text">
                  {c.titulo}
                </span>
                <span className="mt-1 block font-mono text-xs text-accent">
                  {c.campo} · provider {c.provider}
                </span>
                <span className="mt-1 block text-xs text-text-muted">
                  {c.nota}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-border bg-bg-card p-4 font-mono text-xs leading-relaxed text-text-dim sm:text-sm">
            <span className="text-text-muted">
              Exemplo — {exemplo.nome} · Rank {exemplo.posicao} de {rankupTotal}
            </span>
            <br />
            <span className="text-text-muted">Money</span>
            <br />
            {formatarMoney(exemplo.money)}
            <br />
            <span className="text-text-muted">Blocos</span>
            <br />
            {formatarValor(exemplo.blocos)}
            <br />
            <span className="text-text-muted">Fragmentos</span>
            <br />
            {formatarValor(exemplo.fragmentos)}
          </div>
          <Callout type="info" title="Rank inicial">
            O primeiro rank (<strong>Noob</strong>) exige apenas Money — a
            configuração não define custos de Blocos nem de Fragmentos para ele,
            por isso aparecem como 0. Os três custos valem a partir do Rank 2
            (Novato I).
          </Callout>
        </section>

        <section id="todos-os-ranks" className="mt-10 scroll-mt-24">
          <h2 className="border-b border-border pb-2 text-2xl font-semibold text-text">
            Todos os Ranks
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-text-dim">
            Os {rankupTotal} ranks na exata ordem de progressão configurada,
            terminando no <strong className="text-accent">Hyperion</strong> no
            Rank {rankupTotal} de {rankupTotal}. Use a busca, os filtros por
            faixa e a ordenação para encontrar qualquer rank rápido.
          </p>
          <RankupRanksCatalog />
        </section>
      </div>
    </DocLayout>
  );
}
