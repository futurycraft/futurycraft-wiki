import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { DocLayout } from "@/components/doc-layout";
import { Breadcrumb } from "@/components/breadcrumb";
import { CommandCard } from "@/components/command-card";
import { CommandScroller } from "@/components/command-scroller";
import { comandos, comandoCategorias, type ComandoCategoria } from "@/data/comandos";

export const metadata: Metadata = {
  title: "Comandos",
  description:
    "Lista completa de comandos disponíveis para jogadores no FuturyCraft.",
  alternates: { canonical: `${siteConfig.wikiUrl}/comandos` },
};

export default async function ComandosPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>;
}) {
  const { cat } = await searchParams;
  const categoria: ComandoCategoria = (cat as ComandoCategoria) ?? "Todos";
  const filtered =
    categoria === "Todos"
      ? comandos
      : comandos.filter((c) => c.categoria === categoria);

  return (
    <DocLayout>
      <div className="animate-fade-in">
        <CommandScroller />
        <Breadcrumb items={[{ label: "Wiki", href: "/wiki" }, { label: "Comandos" }]} />
        <header className="mt-4">
          <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">Comandos</h1>
          <p className="mt-2 max-w-2xl text-text-muted">
            Todos os comandos do servidor. Escolha uma categoria para filtrar.
          </p>
        </header>

        <nav className="mt-6 flex flex-wrap gap-2" aria-label="Filtrar comandos">
          {comandoCategorias.map((c) => (
            <Link
              key={c}
              href={c === "Todos" ? "/wiki/comandos" : `/wiki/comandos?cat=${encodeURIComponent(c)}`}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                categoria === c
                  ? "border-accent bg-accent-glow text-accent"
                  : "border-border bg-bg-card text-text-muted hover:border-border-bright hover:text-text"
              }`}
            >
              {c}
            </Link>
          ))}
        </nav>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {filtered.map((c) => (
            <CommandCard key={c.comando} id={`cmd-${c.comando}`} comando={c} />
          ))}
        </div>
      </div>
    </DocLayout>
  );
}