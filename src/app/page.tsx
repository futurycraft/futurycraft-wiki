import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { categories, gettingStarted } from "@/data/categories";
import { shortcuts } from "@/lib/nav";
import { season } from "@/data/season";
import { WikiCard } from "@/components/wiki-card";
import { SearchButton } from "@/components/search-button";
import { DiscordIcon, SearchIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Início",
};

export default function WikiHomePage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[460px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(6,182,212,0.14),transparent)]" />

      <section className="relative mx-auto w-full max-w-7xl px-4 pt-20 pb-16 sm:px-6 sm:pt-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent-glow px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {season.statusLabel} · {season.versao}
          </span>
          <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight text-text sm:text-6xl">
            WIKI <span className="text-accent">FUTURYCRAFT</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-text-dim sm:text-lg">
            A central de conhecimento oficial do servidor. Aprenda a jogar,
            explore os sistemas, descubra encantamentos, comandos e regras —
            tudo em um só lugar.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <SearchButton className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-bg-card px-6 py-3.5 text-sm font-semibold text-text shadow-lg shadow-black/20 transition-colors hover:border-accent/50 hover:bg-bg-hover sm:w-auto">
              <SearchIcon className="h-4 w-4 text-accent" />
              Pesquisar na Wiki
              <kbd className="ml-1 rounded-md border border-border bg-bg-raised px-1.5 py-0.5 font-mono text-xs text-text-muted">
                Ctrl K
              </kbd>
            </SearchButton>
            <Link
              href="/comecando"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-bg shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dim sm:w-auto"
            >
              Começar a jogar →
            </Link>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-text-muted">
          Atalhos
        </h2>
        <div className="flex flex-wrap gap-2">
          {shortcuts.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="rounded-full border border-border bg-bg-card px-4 py-2 text-sm text-text-muted transition-colors hover:border-accent/50 hover:text-text"
            >
              {s.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-text-muted">
          Explore a Wiki
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <WikiCard
              key={c.title}
              icon={c.icon}
              title={c.title}
              description={c.description}
              href={c.href}
            />
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-bg-card p-6 card-glow sm:p-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-text-muted">
            Comece por aqui
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {gettingStarted.map((step) => (
              <Link key={step.step} href={step.href} className="group">
                <div className="flex h-full flex-col rounded-xl border border-border bg-bg-raised p-5 transition-colors group-hover:border-accent/40">
                  <span className="bg-gradient-to-br from-accent to-cyan-700 bg-clip-text text-2xl font-black text-transparent">
                    {step.step}
                  </span>
                  <h3 className="mt-2 font-semibold text-text transition-colors group-hover:text-accent">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-text-muted">{step.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-bg-card p-6 sm:p-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-text">
              Precisa de ajuda?
            </h2>
            <p className="mt-2 max-w-xl text-text-muted">
              Não encontrou o que procurava? Fale com a nossa equipe no Discord,
              verifique o status do servidor ou acesse o suporte oficial.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={siteConfig.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg-raised px-5 py-3 text-sm font-semibold text-text transition-colors hover:border-accent/50 hover:text-accent"
            >
              <DiscordIcon className="h-4 w-4" />
              Discord
            </Link>
            <Link
              href="/geral/suporte"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg-raised px-5 py-3 text-sm font-semibold text-text transition-colors hover:border-accent/50 hover:text-accent"
            >
              Suporte
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}