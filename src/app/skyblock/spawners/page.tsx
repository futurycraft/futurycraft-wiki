import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";
import { siteConfig } from "@/config/site";
import { DocLayout } from "@/components/doc-layout";
import { Breadcrumb } from "@/components/breadcrumb";
import { Callout } from "@/components/callout";
import { JsonLd, breadcrumbJsonLd } from "@/components/json-ld";
import { SpawnersCatalog } from "@/components/spawners-catalog";
import { formatarPreco, spawners } from "@/data/spawners";

export const metadata: Metadata = {
  title: "Spawners",
  description:
    "Referência completa dos spawners do SkyBlock: como usar, upgrades, troca de mobs, limites por VIP e todos os mobs com preço, rank e drops.",
  alternates: { canonical: `${siteConfig.wikiUrl}/skyblock/spawners` },
  openGraph: {
    title: "Spawners do SkyBlock",
    description:
      "Todos os spawners: preço, rank necessário e drops de cada mob.",
    url: `${siteConfig.wikiUrl}/skyblock/spawners`,
  },
};

function Secao({
  id,
  titulo,
  children,
}: {
  id: string;
  titulo: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mt-14 scroll-mt-24">
      <h2 className="border-b border-border pb-2 text-2xl font-semibold text-text">
        {titulo}
      </h2>
      {children}
    </section>
  );
}

const upgrades = [
  {
    nome: "Intervalo de Spawn",
    desc: "de quanto em quanto tempo o spawner tenta spawnar. Menor é melhor.",
  },
  {
    nome: "Mobs por Spawn",
    desc: "quantos mobs o spawner tenta gerar a cada vez que roda.",
  },
  {
    nome: "Spawns por Período",
    desc: "quantos mobs o spawner pode gerar dentro do período configurado. Ao atingir o limite, ele pausa até o período resetar.",
  },
  {
    nome: "Distância do Jogador",
    desc: "a que distância um jogador pode estar para o spawner continuar ativo.",
  },
  {
    nome: "Mobs Próximos",
    desc: "quantos mobs do mesmo tipo podem ficar perto antes do spawner pausar.",
  },
];

const limitesVip: { vip: string; limite: string }[] = [
  { vip: "Jogador comum", limite: "1" },
  { vip: "VIP Ferro", limite: "6" },
  { vip: "VIP Ouro", limite: "8" },
  { vip: "VIP Diamante", limite: "10" },
  { vip: "VIP Esmeralda", limite: "12" },
  { vip: "VIP Supremo", limite: "14" },
];

export default function SpawnersPage() {
  const total = spawners.length;
  const disponiveis = spawners.filter((s) => !s.indisponivel).length;
  const precos = spawners.map((s) => s.preco);
  const menor = Math.min(...precos);
  const maior = Math.max(...precos);

  const resumo: { titulo: string; valor: string; nota?: string }[] = [
    { titulo: "Spawners disponíveis", valor: String(disponiveis), nota: `de ${total} mobs configurados` },
    { titulo: "Faixa de preço", valor: `${formatarPreco(menor)} → ${formatarPreco(maior)}` },
    { titulo: "Como desbloquear", valor: "Por rank", nota: "desafios do /c" },
  ];

  return (
    <DocLayout>
      <div className="animate-fade-in">
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Wiki", href: "/" },
            { name: "SkyBlock", href: "/skyblock" },
            { name: "Spawners" },
          ])}
        />
        <Breadcrumb
          items={[
            { label: "Wiki", href: "/" },
            { label: "SkyBlock", href: "/skyblock" },
            { label: "Spawners" },
          ]}
        />

        <header className="mt-4">
          <h1 className="flex items-center gap-3 text-3xl font-bold tracking-tight text-balance text-text sm:text-4xl">
            <span aria-hidden="true">🫧</span> Spawners
          </h1>
          <p className="mt-2 max-w-2xl text-text-muted">
            Os spawners garantem drops constantes de mobs e são essenciais para
            farms eficientes no SkyBlock.
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

        <Secao id="como-usar" titulo="Como Usar">
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-text-dim">
            <p>
              Spawners podem ser movidos e posicionados dentro da sua ilha para
              gerar mobs automaticamente. Com recursos, é possível aumentar o
              nível deles para melhorar os drops.
            </p>
            <p>
              Para abrir o menu de um spawner,{" "}
              <strong className="font-semibold text-text">
                clique com o botão direito
              </strong>{" "}
              nele.
            </p>
          </div>
        </Secao>

        <Secao id="upgrades" titulo="Upgrades">
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-text-dim">
            <p>
              Cada spawner tem{" "}
              <strong className="font-semibold text-text">
                cinco upgrades independentes
              </strong>
              . Cada upgrade muda{" "}
              <strong className="font-semibold text-text">uma coisa só</strong> e
              tem{" "}
              <strong className="font-semibold text-text">o seu próprio custo</strong>
              — subir um deles não leva os outros junto.
            </p>
            <p>
              O item de upgrade dentro do menu mostra o nível atual de cada
              atributo, para onde ele vai no próximo nível e o valor da compra.
              Basta clicar nele para comprar.
            </p>
          </div>

          <figure className="mt-4">
            <Image
              src="/spawners-upgrades.png"
              alt="Menu de upgrades do spawner"
              width={455}
              height={329}
              className="h-auto w-full max-w-xl rounded-xl border border-border"
            />
            <figcaption className="mt-2 text-xs italic text-text-muted">
              Menu de upgrades — nível atual, próximo nível e custo de cada
              upgrade.
            </figcaption>
          </figure>

          <p className="mt-4 text-sm text-text-dim">
            Estes são os cinco upgrades, cada um responsável por um atributo:
          </p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-text-dim">
            {upgrades.map((a) => (
              <li key={a.nome}>
                <strong className="font-semibold text-text">{a.nome}</strong> —{" "}
                {a.desc}
              </li>
            ))}
          </ul>

          <Callout type="success" title="Dica">
            o item de status dentro do menu do spawner mostra o motivo pelo qual
            ele está pausado.
          </Callout>
        </Secao>

        <Secao id="trocar-de-mob" titulo="Trocar de Mob">
          <p className="mt-4 text-sm leading-relaxed text-text-dim">
            O spawner não fica preso a um tipo de mob.{" "}
            <strong className="font-semibold text-text">
              Clique com o botão direito
            </strong>{" "}
            no spawner,{" "}
            <strong className="font-semibold text-text">
              clique no item do tipo de entidade
            </strong>{" "}
            e{" "}
            <strong className="font-semibold text-text">
              escolha qual mob ele vai gerar
            </strong>
            .
          </p>

          <figure className="mt-4">
            <Image
              src="/spawners-mobs.png"
              alt="Menu de troca de mobs do spawner"
              width={481}
              height={318}
              className="h-auto w-full max-w-xl rounded-xl border border-border"
            />
            <figcaption className="mt-2 text-xs italic text-text-muted">
              Menu de entidades — troque o mob do spawner direto por aqui.
            </figcaption>
          </figure>

          <p className="mt-4 text-sm leading-relaxed text-text-dim">
            Nem todo mob está liberado de cara: alguns são desbloqueados por{" "}
            <strong className="font-semibold text-text">rank</strong>. Os ranks
            são conquistados completando os desafios do{" "}
            <code className="rounded-md border border-border bg-bg-raised px-1.5 py-0.5 font-mono text-xs text-accent">
              /c
            </code>{" "}
            — quanto maior o seu rank, mais mobs ficam disponíveis para usar nos
            spawners. Veja{" "}
            <Link href="/skyblock/missoes" className="text-accent hover:underline">
              Missões
            </Link>
            .
          </p>

          <Callout type="info" title="VIPs">
            Todos os spawners são liberados com VIPs, então qualquer VIP já dá
            acesso a todos os mobs listados no catálogo.
          </Callout>
        </Secao>

        <Secao id="limites" titulo="Limites por VIP">
          <p className="mt-4 text-sm leading-relaxed text-text-dim">
            O número máximo de spawners com upgrade que você pode ter na ilha
            depende do seu VIP:
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-border">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="border-b border-border bg-bg-raised px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-text-muted"
                  >
                    VIP
                  </th>
                  <th
                    scope="col"
                    className="border-b border-border bg-bg-raised px-4 py-2.5 text-right text-xs font-semibold uppercase tracking-widest text-text-muted"
                  >
                    Spawners (com upgrade)
                  </th>
                </tr>
              </thead>
              <tbody>
                {limitesVip.map((l) => (
                  <tr key={l.vip} className="border-b border-border/60 last:border-b-0">
                    <th
                      scope="row"
                      className="px-4 py-2.5 text-left font-normal text-text-dim"
                    >
                      {l.vip}
                    </th>
                    <td className="px-4 py-2.5 text-right font-mono font-semibold text-text">
                      {l.limite}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-text-dim">
            Quer turbinar sua ilha? Veja os{" "}
            <Link href="/geral/vips" className="text-accent hover:underline">
              VIPs
            </Link>{" "}
            e os limites de{" "}
            <Link href="/skyblock/minions" className="text-accent hover:underline">
              Minions
            </Link>
            .
          </p>
        </Secao>

        <Secao id="todos-os-spawners" titulo="Todos os Spawners">
          <p className="mt-4 text-sm leading-relaxed text-text-dim">
            Consulte todos os mobs configurados nos spawners: preço, rank
            necessário e a tabela de drops de cada um (item, chance e
            quantidade). Use a busca e os filtros para encontrar rapidamente por
            mob, drop, item ou rank.
          </p>
          <SpawnersCatalog />
        </Secao>
      </div>
    </DocLayout>
  );
}
