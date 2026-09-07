import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-2xl flex-col items-center justify-center px-4 py-20 text-center">
      <p className="bg-gradient-to-br from-accent to-cyan-700 bg-clip-text text-7xl font-black text-transparent">
        404
      </p>
      <h1 className="mt-4 text-2xl font-bold text-text">Página não encontrada</h1>
      <p className="mt-2 max-w-md text-text-muted">
        O conteúdo que você procura não existe ou foi movido. Tente pesquisar na
        Wiki ou voltar ao início.
      </p>
      <div className="mt-6 flex gap-3">
        <Link
          href="/"
          className="rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-dim"
        >
          Voltar ao início
        </Link>
        <Link
          href="/comandos"
          className="rounded-xl border border-border bg-bg-card px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:border-accent/50"
        >
          Ver comandos
        </Link>
      </div>
    </div>
  );
}