"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRightIcon } from "./icons";

interface SidebarItem {
  title: string;
  href: string;
}

interface SidebarGroup {
  key: string;
  title: string;
  items: SidebarItem[];
}

export const sidebarGroups: SidebarGroup[] = [
  {
    key: "comecando",
    title: "Começando",
    items: [
      { title: "Como Jogar", href: "/comecando/comojogar" },
      { title: "Primeiro Acesso", href: "/comecando/primeiroacesso" },
      { title: "Primeiros Passos", href: "/comecando/primeirospassos" },
      { title: "FAQ", href: "/comecando/faq" },
    ],
  },
  {
    key: "skyblock",
    title: "SkyBlock",
    items: [
      { title: "Visão geral", href: "/skyblock" },
      { title: "Como Jogar", href: "/skyblock/comojogar" },
      { title: "Ilha", href: "/skyblock/ilha" },
      { title: "Economia", href: "/skyblock/economia" },
    ],
  },
  {
    key: "progressao",
    title: "Progressão",
    items: [
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
    items: [
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
    items: [
      { title: "Recompensas", href: "/skyblock/recompensas" },
      { title: "Votação", href: "/skyblock/votacao" },
      { title: "Vouchers", href: "/skyblock/vouchers" },
    ],
  },
  {
    key: "referencia",
    title: "Referência",
    items: [
      { title: "Comandos", href: "/skyblock/comandos" },
      { title: "Rankings", href: "/skyblock/rankings" },
      { title: "FAQ", href: "/skyblock/faq" },
    ],
  },
  {
    key: "geral",
    title: "Geral",
    items: [
      { title: "Comandos", href: "/geral/comandos" },
      { title: "Regras", href: "/geral/regras" },
      { title: "Suporte", href: "/geral/suporte" },
      { title: "Discord", href: "/geral/discord" },
      { title: "Contato", href: "/geral/contato" },
    ],
  },
];

function matchesHref(pathname: string, href: string) {
  return pathname === href || (href !== "/" && pathname.startsWith(href));
}

function groupKeyForPath(pathname: string): string | null {
  let best: { group: string; length: number } | null = null;
  for (const group of sidebarGroups) {
    for (const item of group.items) {
      if (matchesHref(pathname, item.href) && (!best || item.href.length > best.length)) {
        best = { group: group.key, length: item.href.length };
      }
    }
  }
  return best?.group ?? null;
}

export function AccordionNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  const [openGroups, setOpenGroups] = useState<Set<string>>(() => {
    const initial = groupKeyForPath(pathname);
    return initial ? new Set([initial]) : new Set();
  });

  useEffect(() => {
    const related = groupKeyForPath(pathname);
    if (!related) return;
    setOpenGroups((prev) => (prev.has(related) ? prev : new Set(prev).add(related)));
  }, [pathname]);

  const activeGroup = groupKeyForPath(pathname);

  function toggle(key: string) {
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  return (
    <nav aria-label="Navegação lateral" className="flex flex-col gap-1.5 px-2 py-6">
      {sidebarGroups.map((group) => {
        const isOpen = openGroups.has(group.key);
        const isGroupActive = activeGroup === group.key;
        return (
          <div key={group.key} className="overflow-hidden">
            <button
              type="button"
              onClick={() => toggle(group.key)}
              aria-expanded={isOpen}
              aria-controls={`accordion-${group.key}`}
              className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition-colors ${
                isGroupActive
                  ? "text-accent"
                  : "text-text-muted hover:bg-bg-hover hover:text-text"
              }`}
            >
              <span>{group.title}</span>
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
              id={`accordion-${group.key}`}
              role="region"
              aria-label={group.title}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <ul className="space-y-0.5 pb-1.5">
                  {group.items.map((item) => {
                    const active = matchesHref(pathname, item.href);
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={onNavigate}
                          className={`sidebar-item ${active ? "active" : ""}`}
                          aria-current={active ? "page" : undefined}
                        >
                          <span>{item.title}</span>
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
    </nav>
  );
}

export function SidebarNav() {
  return <AccordionNav />;
}