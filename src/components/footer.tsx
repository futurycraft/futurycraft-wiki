import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Logo } from "./logo";

const footerColumns = [
  {
    title: "Wiki",
    links: [
      { title: "Começando", href: "/comecando" },
      { title: "Como Jogar", href: "/skyblock/comojogar" },
      { title: "SkyBlock", href: "/skyblock" },
      { title: "Comandos do SkyBlock", href: "/skyblock/comandos" },
      { title: "Encantamentos", href: "/skyblock/encantamentos" },
      { title: "Comandos Gerais", href: "/geral/comandos" },
      { title: "VIPs", href: "/geral/vips" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { title: "Regras", href: "/geral/regras" },
      { title: "FAQ", href: "/geral/faq" },
      { title: "Suporte", href: "/geral/suporte" },
      { title: "Status", href: "/geral/status" },
      { title: "Loja", href: siteConfig.loja },
      { title: "Site", href: siteConfig.site },
    ],
  },
  {
    title: "Comunidade",
    links: [
      { title: "Discord", href: siteConfig.discord },
      { title: "Equipe", href: "/geral/equipe" },
      { title: "Criadores", href: "/geral/criadores" },
      { title: "Votação", href: "/skyblock/votacao" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-raised">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Logo className="h-9 w-9" />
              <span className="flex flex-col">
                <span className="text-base font-bold leading-tight text-text">
                  Wiki FuturyCraft
                </span>
                <span className="text-xs text-text-muted">futurycraft.com.br</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-muted">
              Central de conhecimento do servidor FuturyCraft. Tudo sobre
              SkyBlock, economia, encantamentos, vips e eventos.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-full border border-border bg-bg-card px-2.5 py-1 font-mono text-text-muted">
                Java: {siteConfig.ipJava}
              </span>
              <span className="rounded-full border border-border bg-bg-card px-2.5 py-1 font-mono text-text-muted">
                Bedrock: {siteConfig.ipBedrock}:{siteConfig.bedrockPort}
              </span>
            </div>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                {col.title}
              </h2>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-muted transition-colors hover:text-accent"
                      {...(link.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} FuturyCraft. Não afiliado à Mojang AB
            ou Microsoft.
          </p>
          <p>
            Feito com carinho para a comunidade.
          </p>
        </div>
      </div>
    </footer>
  );
}