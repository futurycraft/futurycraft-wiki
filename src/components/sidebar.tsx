"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRightIcon } from "./icons";

export type SidebarNavEntry =
  | { kind: "link"; title: string; href: string }
  | { kind: "placeholder"; title: string }
  | { kind: "group"; key: string; title: string; children: SidebarNavEntry[] };

export interface SidebarNode {
  key: string;
  title: string;
  root: string;
  children: SidebarNavEntry[];
}

export const sidebarNodes: SidebarNode[] = [
  {
    key: "comecando",
    title: "Começando",
    root: "/comecando",
    children: [
      { kind: "link", title: "💚 Bem-vindo à Wiki", href: "/comecando/bem-vindo-a-wiki" },
      { kind: "link", title: "🔑 Como Fazer Login", href: "/comecando/como-fazer-login" },
      { kind: "link", title: "🛡️ Entrar para a Equipe", href: "/geral/equipe" },
      { kind: "link", title: "🎬 Programa de Criadores", href: "/geral/criadores" },
      { kind: "link", title: "📕 Regras do Servidor", href: "/geral/regras" },
    ],
  },
  {
    key: "skyblock",
    title: "SkyBlock",
    root: "/skyblock",
    children: [
      { kind: "link", title: "Visão geral", href: "/skyblock" },
      { kind: "link", title: "Como Jogar", href: "/skyblock/comojogar" },
      { kind: "link", title: "Votação", href: "/skyblock/votacao" },
      { kind: "link", title: "Economia", href: "/skyblock/economia" },
      {
        kind: "group",
        key: "ilha",
        title: "Ilha",
        children: [
          { kind: "link", title: "Inicio", href: "/skyblock/ilha" },
          { kind: "link", title: "Nível", href: "/skyblock/ilha/nivel" },
          { kind: "link", title: "Warps", href: "/skyblock/ilha/warps" },
          { kind: "link", title: "Biomas", href: "/skyblock/ilha/biomas" },
          { kind: "link", title: "Challenges", href: "/skyblock/ilha/challenges" },
          { kind: "link", title: "Gerador", href: "/skyblock/ilha/gerador" },
          { kind: "link", title: "Limits", href: "/skyblock/ilha/limits" },
          { kind: "link", title: "Settings", href: "/skyblock/ilha/settings" },
          { kind: "link", title: "Team", href: "/skyblock/ilha/team" },
          { kind: "link", title: "Comandos", href: "/skyblock/comandos?cat=Ilha" },
        ],
      },
      {
        kind: "group",
        key: "progressao",
        title: "Progressão",
        children: [
          { kind: "link", title: "Missões", href: "/skyblock/missoes" },
          { kind: "link", title: "Spawners", href: "/skyblock/spawners" },
          { kind: "link", title: "Passe de Batalha", href: "/skyblock/battlepass" },
          { kind: "link", title: "Eventos", href: "/skyblock/eventos" },
          { kind: "link", title: "Dragão", href: "/skyblock/dragao" },
          { kind: "link", title: "Shop", href: "/skyblock/shop" },
          { kind: "link", title: "Kits", href: "/skyblock/kits" },
          { kind: "link", title: "Mercado Galáctico", href: "/skyblock/mercado-galactico" },
        ],
      },
      {
        kind: "group",
        key: "sistemas",
        title: "Sistemas",
        children: [
          { kind: "link", title: "Jobs", href: "/skyblock/jobs" },
          { kind: "link", title: "mcMMO", href: "/skyblock/mcmmo" },
          { kind: "link", title: "Minions", href: "/skyblock/minions" },
          { kind: "link", title: "Encantamentos", href: "/skyblock/encantamentos" },
          { kind: "link", title: "Crates", href: "/skyblock/crates" },
          { kind: "link", title: "Airdrops", href: "/skyblock/airdrops" },
          { kind: "link", title: "Relíquias", href: "/skyblock/reliquias" },
          { kind: "link", title: "Torneios", href: "/skyblock/torneios" },
          { kind: "link", title: "Parkour", href: "/skyblock/parkour" },
        ],
      },
      {
        kind: "group",
        key: "referencia",
        title: "Referência",
        children: [
          { kind: "link", title: "Comandos", href: "/skyblock/comandos" },
          { kind: "link", title: "Rankings", href: "/skyblock/rankings" },
          { kind: "link", title: "FAQ", href: "/skyblock/faq" },
        ],
      },
    ],
  },
  {
    key: "geral",
    title: "Geral",
    root: "/geral",
    children: [
      { kind: "link", title: "Suporte", href: "/geral/suporte" },
      { kind: "link", title: "Discord", href: "/geral/discord" },
      { kind: "link", title: "Contato", href: "/geral/contato" },
    ],
  },
];

function pathOf(href: string) {
  return href.split("?")[0];
}

function matchesPath(pathname: string, href: string) {
  const path = pathOf(href);
  return pathname === path || (path !== "/" && pathname.startsWith(path));
}

interface SidebarLink {
  title: string;
  href: string;
}

function collectLinkEntries(entry: SidebarNavEntry): SidebarLink[] {
  if (entry.kind === "link") return [{ title: entry.title, href: entry.href }];
  if (entry.kind === "group") return entry.children.flatMap(collectLinkEntries);
  return [];
}

function collectLinks(nodes: SidebarNode[]): SidebarLink[] {
  return nodes.flatMap((n) => n.children.flatMap(collectLinkEntries));
}

function bestLinkFor(pathname: string, links: SidebarLink[]): SidebarLink | null {
  let best: { link: SidebarLink; full: boolean; len: number } | null = null;
  for (const link of links) {
    const path = pathOf(link.href);
    if (pathname !== path) continue;
    const full = link.href === pathname;
    if (!best) {
      best = { link, full, len: path.length };
      continue;
    }
    if (full && !best.full) {
      best = { link, full, len: path.length };
      continue;
    }
    if (full === best.full && path.length > best.len) {
      best = { link, full, len: path.length };
    }
  }
  return best?.link ?? null;
}

function linkChain(entry: SidebarNavEntry, href: string, ancestors: string[]): string[] | null {
  if (entry.kind === "link") return entry.href === href ? ancestors : null;
  if (entry.kind === "placeholder") return null;
  const path = [...ancestors, `${ancestors[ancestors.length - 1]}:${entry.key}`];
  for (const child of entry.children) {
    const res = linkChain(child, href, path);
    if (res) return res;
  }
  return null;
}

function keysForPath(pathname: string): Set<string> | null {
  for (const node of sidebarNodes) {
    if (!matchesPath(pathname, node.root)) continue;
    const keys = new Set([node.key]);
    const active = bestLinkFor(pathname, collectLinks(sidebarNodes));
    if (active) {
      for (const child of node.children) {
        const chain = linkChain(child, active.href, [node.key]);
        if (chain) for (const key of chain) keys.add(key);
      }
    }
    return keys;
  }
  // Links entre categorias (ex.: /geral/equipe agrupado em Começando)
  for (const node of sidebarNodes) {
    const active = bestLinkFor(pathname, collectLinks([node]));
    if (!active) continue;
    const keys = new Set([node.key]);
    for (const child of node.children) {
      const chain = linkChain(child, active.href, [node.key]);
      if (chain) for (const key of chain) keys.add(key);
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

  const activeLink = bestLinkFor(pathname, collectLinks(sidebarNodes));
  const activeKeys = keysForPath(pathname) ?? new Set<string>();

  function toggle(key: string) {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  function collapseClasses(isOpen: boolean) {
    return `grid transition-[grid-template-rows] duration-300 ease-out ${
      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
    }`;
  }

  function renderChildren(children: SidebarNavEntry[], parentKey: string, indent: boolean) {
    return (
      <div className="min-h-0 overflow-hidden">
        <div
          className={`flex flex-col gap-1 border-l border-border py-1 ${
            indent ? "ml-1.5 pl-1.5" : "ml-2 pl-2"
          }`}
        >
          {children.map((entry) => {
            if (entry.kind === "link") {
              const active = activeLink?.href === entry.href;
              return (
                <Link
                  key={entry.href}
                  href={entry.href}
                  onClick={onNavigate}
                  className={`sidebar-item ${active ? "active" : ""}`}
                  aria-current={active ? "page" : undefined}
                >
                  <span>{entry.title}</span>
                </Link>
              );
            }
            if (entry.kind === "placeholder") {
              return (
                <div
                  key={entry.title}
                  className="flex cursor-default items-center gap-2 rounded-lg px-2 py-1.5 text-[0.8125rem] text-text-muted/60"
                  aria-disabled="true"
                >
                  <span>{entry.title}</span>
                  <span className="ml-auto shrink-0 rounded-full border border-border bg-bg-raised px-1.5 py-0.5 text-[0.5625rem] font-medium text-text-muted">
                    em breve
                  </span>
                </div>
              );
            }
            const key = `${parentKey}:${entry.key}`;
            const isOpen = open.has(key);
            const isActive = activeKeys.has(key);
            return (
              <div key={key} className="overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggle(key)}
                  aria-expanded={isOpen}
                  aria-controls={`acc-${key}`}
                  className={`flex w-full items-center justify-between gap-2 rounded-lg px-2 py-1.5 text-left text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
                    isActive
                      ? "text-accent"
                      : "text-text-muted/90 hover:bg-bg-hover hover:text-text"
                  }`}
                >
                  <span>{entry.title}</span>
                  <span
                    aria-hidden="true"
                    className={`flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? "rotate-90 text-accent" : "text-text-muted/40"
                    }`}
                  >
                    <ChevronRightIcon className="h-3 w-3" />
                  </span>
                </button>
                <div
                  id={`acc-${key}`}
                  role="region"
                  aria-label={entry.title}
                  className={`${collapseClasses(isOpen)}`}
                >
                  {renderChildren(entry.children, key, true)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <nav aria-label="Navegação lateral" className="flex flex-col gap-1.5 px-2 py-6">
      {sidebarNodes.map((node) => {
        const isOpen = open.has(node.key);
        const isActive = matchesPath(pathname, node.root);
        return (
          <div key={node.key} className="overflow-hidden">
            <button
              type="button"
              onClick={() => toggle(node.key)}
              aria-expanded={isOpen}
              aria-controls={`acc-${node.key}`}
              className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition-colors ${
                isActive
                  ? "text-accent"
                  : "text-text-muted hover:bg-bg-hover hover:text-text"
              }`}
            >
              <span>{node.title}</span>
              <span
                aria-hidden="true"
                className={`flex items-center justify-center transition-transform duration-300 ${
                  isOpen ? "rotate-90 text-accent" : "text-text-muted/50"
                }`}
              >
                <ChevronRightIcon className="h-3.5 w-3.5" />
              </span>
            </button>
            <div
              id={`acc-${node.key}`}
              role="region"
              aria-label={node.title}
              className={`${collapseClasses(isOpen)}`}
            >
              {renderChildren(node.children, node.key, false)}
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