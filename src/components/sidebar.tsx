"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRightIcon } from "./icons";

interface SidebarLink {
  title: string;
  href: string;
}

interface SidebarAccordion {
  key: string;
  title: string;
  links: SidebarLink[];
}

interface SidebarNode {
  key: string;
  title: string;
  root: string;
  accordions?: SidebarAccordion[];
  links?: SidebarLink[];
}

export const sidebarNodes: SidebarNode[] = [
  {
    key: "comecando",
    title: "Começando",
    root: "/comecando",
    links: [
      { title: "Como Jogar", href: "/comecando/comojogar" },
      { title: "Primeiro Acesso", href: "/comecando/primeiroacesso" },
      { title: "Primeiros Passos", href: "/comecando/primeirospassos" },
      { title: "FAQ", href: "/comecando/faq" },
    ],
  },
  {
    key: "skyblock",
    title: "SkyBlock",
    root: "/skyblock",
    accordions: [
      {
        key: "visao-geral",
        title: "Visão Geral",
        links: [
          { title: "Visão geral", href: "/skyblock" },
          { title: "Como Jogar", href: "/skyblock/comojogar" },
          { title: "Ilha", href: "/skyblock/ilha" },
          { title: "Economia", href: "/skyblock/economia" },
        ],
      },
      {
        key: "progressao",
        title: "Progressão",
        links: [
          { title: "Minions", href: "/skyblock/minions" },
          { title: "Spawners", href: "/skyblock/spawners" },
          { title: "Encantamentos", href: "/skyblock/encantamentos" },
          { title: "Jobs", href: "/skyblock/jobs" },
          { title: "mcMMO", href: "/skyblock/mcmmo" },
        ],
      },
      {
        key: "sistemas",
        title: "Sistemas",
        links: [
          { title: "Missões", href: "/skyblock/missoes" },
          { title: "Battle Pass", href: "/skyblock/battlepass" },
          { title: "Pets", href: "/skyblock/pets" },
          { title: "Crates", href: "/skyblock/crates" },
          { title: "Eventos", href: "/skyblock/eventos" },
          { title: "Airdrops", href: "/skyblock/airdrops" },
          { title: "Relíquias", href: "/skyblock/reliquias" },
          { title: "Torneios", href: "/skyblock/torneios" },
          { title: "Parkour", href: "/skyblock/parkour" },
        ],
      },
      {
        key: "recompensas",
        title: "Recompensas",
        links: [
          { title: "Recompensas", href: "/skyblock/recompensas" },
          { title: "Votação", href: "/skyblock/votacao" },
          { title: "Vouchers", href: "/skyblock/vouchers" },
        ],
      },
      {
        key: "referencia",
        title: "Referência",
        links: [
          { title: "Comandos", href: "/skyblock/comandos" },
          { title: "Rankings", href: "/skyblock/rankings" },
          { title: "FAQ", href: "/skyblock/faq" },
        ],
      },
    ],
  },
  {
    key: "geral",
    title: "Geral",
    root: "/geral",
    links: [
      { title: "Comandos", href: "/geral/comandos" },
      { title: "Regras", href: "/geral/regras" },
      { title: "Suporte", href: "/geral/suporte" },
      { title: "Discord", href: "/geral/discord" },
      { title: "Contato", href: "/geral/contato" },
    ],
  },
];

function matchesPath(pathname: string, href: string) {
  return pathname === href || (href !== "/" && pathname.startsWith(href));
}

function nodeLinks(node: SidebarNode): SidebarLink[] {
  if (node.links) return node.links;
  return (node.accordions ?? []).flatMap((a) => a.links);
}

function bestLinkFor(pathname: string, links: SidebarLink[]): SidebarLink | null {
  let best: SidebarLink | null = null;
  for (const link of links) {
    if (matchesPath(pathname, link.href) && (!best || link.href.length > best.href.length)) {
      best = link;
    }
  }
  return best;
}

function keysForPath(pathname: string): Set<string> | null {
  for (const node of sidebarNodes) {
    if (!matchesPath(pathname, node.root)) continue;
    const keys = new Set([node.key]);
    if (node.accordions) {
      const active = bestLinkFor(pathname, nodeLinks(node));
      if (active) {
        for (const accordion of node.accordions) {
          if (accordion.links.some((l) => l.href === active.href)) {
            keys.add(`${node.key}:${accordion.key}`);
            break;
          }
        }
      }
    }
    return keys;
  }
  return null;
}

export function AccordionNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  const [open, setOpen] = useState<Set<string>>(() => keysForPath(pathname) ?? new Set());

  useEffect(() => {
    const target = keysForPath(pathname);
    if (!target || target.size === 0) return;
    setOpen((prev) => {
      let changed = false;
      for (const key of target) {
        if (!prev.has(key)) {
          changed = true;
          break;
        }
      }
      if (!changed) return prev;
      const next = new Set(prev);
      for (const key of target) next.add(key);
      return next;
    });
  }, [pathname]);

  const activeLink = bestLinkFor(pathname, sidebarNodes.flatMap(nodeLinks));

  function toggle(key: string) {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  return (
    <nav aria-label="Navegação lateral" className="flex flex-col gap-1.5 px-2 py-6">
      {sidebarNodes.map((node) => {
        const nodeOpen = open.has(node.key);
        const nodeActive = matchesPath(pathname, node.root);
        return (
          <div key={node.key} className="overflow-hidden">
            <button
              type="button"
              onClick={() => toggle(node.key)}
              aria-expanded={nodeOpen}
              aria-controls={`nav-${node.key}`}
              className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition-colors ${
                nodeActive
                  ? "text-accent"
                  : "text-text-muted hover:bg-bg-hover hover:text-text"
              }`}
            >
              <span>{node.title}</span>
              <span
                aria-hidden="true"
                className={`flex items-center justify-center transition-transform duration-300 ${
                  nodeOpen ? "rotate-90 text-accent" : "text-text-muted/50"
                }`}
              >
                <ChevronRightIcon className="h-3.5 w-3.5" />
              </span>
            </button>

            <div
              id={`nav-${node.key}`}
              role="region"
              aria-label={node.title}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                nodeOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                {node.accordions ? (
                  <div className="ml-2 flex flex-col gap-1 border-l border-border py-1 pl-2">
                    {node.accordions.map((accordion) => {
                      const subOpen = open.has(`${node.key}:${accordion.key}`);
                      const subActive = accordion.links.some((l) => l.href === activeLink?.href);
                      return (
                        <div key={accordion.key} className="overflow-hidden">
                          <button
                            type="button"
                            onClick={() => toggle(`${node.key}:${accordion.key}`)}
                            aria-expanded={subOpen}
                            aria-controls={`${node.key}-${accordion.key}`}
                            className={`flex w-full items-center justify-between gap-2 rounded-lg px-2 py-1.5 text-left text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
                              subActive
                                ? "text-accent"
                                : "text-text-muted/90 hover:bg-bg-hover hover:text-text"
                            }`}
                          >
                            <span>{accordion.title}</span>
                            <span
                              aria-hidden="true"
                              className={`flex items-center justify-center transition-transform duration-300 ${
                                subOpen ? "rotate-90 text-accent" : "text-text-muted/40"
                              }`}
                            >
                              <ChevronRightIcon className="h-3 w-3" />
                            </span>
                          </button>
                          <div
                            id={`${node.key}-${accordion.key}`}
                            role="region"
                            aria-label={accordion.title}
                            className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                              subOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                            }`}
                          >
                            <div className="min-h-0 overflow-hidden">
                              <ul className="space-y-0.5 pb-1.5 pl-3">
                                {accordion.links.map((link) => {
                                  const active = activeLink?.href === link.href;
                                  return (
                                    <li key={link.href}>
                                      <Link
                                        href={link.href}
                                        onClick={onNavigate}
                                        className={`sidebar-item ${active ? "active" : ""}`}
                                        aria-current={active ? "page" : undefined}
                                      >
                                        <span>{link.title}</span>
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="min-h-0 overflow-hidden pb-1">
                    <ul className="space-y-0.5 pb-1">
                      {node.links!.map((link) => {
                        const active = activeLink?.href === link.href;
                        return (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              onClick={onNavigate}
                              className={`sidebar-item ${active ? "active" : ""}`}
                              aria-current={active ? "page" : undefined}
                            >
                              <span>{link.title}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </nav>
  );
}

export function SidebarNav() {
  return <AccordionNav />;
}