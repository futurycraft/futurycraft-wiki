import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { DocLayout } from "@/components/doc-layout";
import { Breadcrumb } from "@/components/breadcrumb";
import { vips, type Vip } from "@/data/ranks";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "VIPs",
  description:
    "VIPs, kits, comandos e benefícios exclusivos para jogadores do FuturyCraft.",
  alternates: { canonical: `${siteConfig.wikiUrl}/geral/vips` },
};

function VipCard({ vip }: { vip: Vip }) {
  return (
    <article
      id={vip.slug}
      className="flex flex-col rounded-2xl border border-border bg-bg-card p-6 card-glow"
    >
      <header className="mb-4 border-b border-border pb-4">
        <span className={`text-2xl font-bold ${vip.cor.split(" ")[0]}`}>
          {vip.nome}
        </span>
        <p className="mt-1 text-sm text-text-muted">
          Kits {vip.kits} + acesso a sistemas exclusivos.
        </p>
      </header>
      <div className="flex flex-1 flex-col gap-6 text-sm">
        <div>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-text-muted">
            Comandos
          </h3>
          <ul className="space-y-1.5">
            {vip.comandos.map((c) => (
              <li key={c} className="flex items-start gap-2 text-text-dim">
                <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                <code className="font-mono text-xs">{c}</code>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-text-muted">
            Extras
          </h3>
          <ul className="space-y-1.5">
            {vip.extras.map((e) => (
              <li key={e} className="flex items-start gap-2 text-text-dim">
                <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                {e}
              </li>
            ))}
          </ul>
        </div>
        {(vip.spawners || vip.minions) && (
          <div className="mt-auto flex flex-wrap gap-2 pt-2 text-xs">
            {vip.spawners && (
              <span className="rounded-full border border-border bg-bg-raised px-2.5 py-1 text-text-muted">
                {vip.spawners}
              </span>
            )}
            {vip.minions && (
              <span className="rounded-full border border-border bg-bg-raised px-2.5 py-1 text-text-muted">
                {vip.minions}
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function VipsPage() {
  return (
    <DocLayout>
      <div className="animate-fade-in">
        <Breadcrumb items={[{ label: "Wiki", href: "/" }, { label: "Geral", href: "/geral" }, { label: "VIPs" }]} />
        <header className="mt-4">
          <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Ranks & VIPs
          </h1>
          <p className="mt-2 max-w-2xl text-text-muted">
            Nossos VIPs oferecem kits, comandos e benefícios exclusivos. Saiba
            mais sobre cada um abaixo ou na loja.
          </p>
          <div className="mt-4 flex gap-3">
            <Link
              href={siteConfig.loja}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-bg transition-colors hover:bg-accent-dim"
            >
              Ver na loja
            </Link>
          </div>
        </header>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {vips.map((vip) => (
            <VipCard key={vip.slug} vip={vip} />
          ))}
        </div>

        <p className="mt-8 text-sm text-text-muted">
          Os limites de spawners e minions por VIP estão nas páginas{" "}
          <Link href="/skyblock/spawners" className="text-accent hover:underline">
            Spawners
          </Link>{" "}
          e{" "}
          <Link href="/skyblock/minions" className="text-accent hover:underline">
            Minions
          </Link>
          .
        </p>
      </div>
    </DocLayout>
  );
}