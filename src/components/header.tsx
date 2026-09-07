"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Logo } from "./logo";
import { SearchModal } from "./search-modal";
import { DiscordIcon, MenuIcon, SearchIcon } from "./icons";
import { navSections } from "@/lib/nav";

const links = [
  { label: "Wiki", href: "/wiki" },
  { label: "SkyBlock", href: "/wiki/skyblock" },
  { label: "RankUP", href: "/wiki/rankup" },
  { label: "Comandos", href: "/wiki/comandos" },
  { label: "Encantamentos", href: "/wiki/encantamentos" },
];

export function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpenSearch(true);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

  useEffect(() => {
    if (!openMenu) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenMenu(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openMenu]);

  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openMenu]);

  function activeClass(href: string) {
    return pathname === href || (href !== "/wiki" && pathname.startsWith(href)) ? "active" : "";
  }

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-screen-2xl items-center gap-4 px-4 sm:px-6">
          <button
            className="-ml-1 inline-flex h-9 w-9 items-center justify-center rounded-lg text-text-dim transition-colors hover:bg-bg-hover hover:text-text lg:hidden"
            onClick={() => setOpenMenu((v) => !v)}
            aria-label={openMenu ? "Fechar menu" : "Abrir menu"}
            aria-expanded={openMenu}
          >
            <MenuIcon />
          </button>

          <Logo />

          <nav className="ml-4 hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
            {links.map((l) => {
              const active = pathname === l.href || (l.href !== "/wiki" && pathname.startsWith(l.href));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    active ? "text-accent" : "text-text-dim hover:text-text"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={() => setOpenSearch(true)}
              className="flex items-center gap-2 rounded-lg border border-border bg-bg-raised px-3 py-2 text-sm text-text-muted transition-colors hover:border-accent/40 hover:text-text"
              aria-label="Pesquisar na Wiki (Ctrl+K)"
            >
              <SearchIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Pesquisar...</span>
              <kbd className="ml-1 hidden rounded border border-border bg-bg px-1.5 py-0.5 text-[0.625rem] text-text-muted md:inline">
                Ctrl K
              </kbd>
            </button>
            <a
              href="https://discord.futurycraft.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#5865F2] px-3 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <DiscordIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Discord</span>
            </a>
          </div>
        </div>
      </header>

      {openMenu && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpenMenu(false)}
            aria-hidden="true"
          />
          <nav
            className="animate-slide-in-left absolute inset-y-0 left-0 flex w-72 flex-col gap-1 overflow-y-auto border-r border-border bg-bg-card p-4"
            aria-label="Menu de navegação"
          >
            <div className="mb-2 flex items-center justify-between">
              <Logo />
            </div>
            <div className="mb-3 flex flex-wrap gap-1.5 border-b border-border pb-3">
              {links.map((l) => {
                const active = pathname === l.href || (l.href !== "/wiki" && pathname.startsWith(l.href));
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpenMenu(false)}
                    className={`rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors ${
                      active ? "bg-accent-glow text-accent" : "text-text-muted hover:bg-bg-hover hover:text-text"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>
            {navSections.map((section) => (
              <div key={section.label} className="mb-4">
                <div className="mb-1 px-3 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
                  {section.label}
                </div>
                <ul className="space-y-0.5">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpenMenu(false)}
                        className={`sidebar-link ${activeClass(item.href)} ${item.children?.some((c) => pathname.startsWith(c.href)) ? "active" : ""}`}
                        aria-current={activeClass(item.href) === "active" ? "page" : undefined}
                      >
                        <span>{item.title}</span>
                        {item.emBreve && (
                          <span className="ml-auto shrink-0 rounded-full border border-border bg-bg-raised px-1.5 py-0.5 text-[0.5625rem] font-medium text-text-muted">
                            em breve
                          </span>
                        )}
                      </Link>
                      {item.children && item.children.length > 0 && (
                        <ul className="mt-0.5 space-y-0.5 border-l border-border pl-3 ml-2">
                          {item.children.map((child) => {
                            const childActive = pathname === child.href || pathname.startsWith(child.href);
                            return (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={() => setOpenMenu(false)}
                                  className={`sidebar-link !text-[0.8125rem] ${childActive ? "active" : ""} ${childActive ? "" : "opacity-80"}`}
                                  aria-current={childActive ? "page" : undefined}
                                >
                                  <span>{child.title}</span>
                                  {child.emBreve && (
                                    <span className="ml-auto shrink-0 rounded-full border border-border bg-bg-raised px-1.5 py-0.5 text-[0.5625rem] font-medium text-text-muted">
                                      em breve
                                    </span>
                                  )}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="mt-2 flex items-center gap-2 border-t border-border pt-3">
              <a
                href="https://discord.futurycraft.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#5865F2] px-3 py-2 text-sm font-semibold text-white"
              >
                <DiscordIcon className="h-4 w-4" />
                Discord
              </a>
            </div>
          </nav>
        </div>
      )}

      <SearchModal open={openSearch} onClose={() => setOpenSearch(false)} />
    </>
  );
}