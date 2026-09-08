"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navSections } from "@/lib/nav";
import type { NavItem } from "@/lib/nav";

function isActive(pathname: string, href: string) {
  return pathname === href || (href !== "/" && pathname.startsWith(href));
}

function ChildList({ items, pathname, onNavigate }: { items: NavItem[]; pathname: string; onNavigate?: () => void }) {
  let lastGroup: string | undefined;
  return (
    <ul className="mt-0.5 space-y-0.5 border-l border-border pl-2 ml-2">
      {items.map((child) => {
        const showHeader = child.group !== undefined && child.group !== lastGroup;
        lastGroup = child.group;
        const cActive = isActive(pathname, child.href);
        return (
          <div key={child.href}>
            {showHeader && (
              <div className="mb-1 ml-2 mt-2 text-[0.625rem] font-semibold uppercase tracking-[0.15em] text-text-muted/80 first:mt-0">
                {child.group}
              </div>
            )}
            <li>
              <Link
                href={child.href}
                onClick={onNavigate}
                className={`sidebar-link !text-[0.8125rem] ${cActive ? "active" : ""} ${cActive ? "" : "opacity-80"}`}
                aria-current={cActive ? "page" : undefined}
              >
                <span>{child.title}</span>
                {child.emBreve && (
                  <span className="ml-auto shrink-0 rounded-full border border-border bg-bg-raised px-1.5 py-0.5 text-[0.5625rem] font-medium text-text-muted">
                    em breve
                  </span>
                )}
              </Link>
              {child.children && child.children.length > 0 && (
                <ChildList items={child.children} pathname={pathname} onNavigate={onNavigate} />
              )}
            </li>
          </div>
        );
      })}
    </ul>
  );
}

export function SidebarNav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Navegação lateral" className="py-6">
      {navSections.map((section) => (
        <div key={section.label} className="mb-6">
          <div className="mb-1.5 px-3 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
            {section.label}
          </div>
          <ul className="space-y-0.5">
            {section.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`sidebar-link ${isActive(pathname, item.href) ? "active" : ""}`}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                >
                  <span>{item.title}</span>
                  {item.emBreve && (
                    <span className="ml-auto shrink-0 rounded-full border border-border bg-bg-raised px-1.5 py-0.5 text-[0.5625rem] font-medium text-text-muted">
                      em breve
                    </span>
                  )}
                </Link>
                {item.children && item.children.length > 0 && (
                  <ChildList items={item.children} pathname={pathname} />
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}