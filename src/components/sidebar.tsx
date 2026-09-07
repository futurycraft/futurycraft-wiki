"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navSections } from "@/lib/nav";

function NavLink({ href, title, emBreve, children }: { href: string; title: string; emBreve?: boolean; children?: { title: string; href: string; emBreve?: boolean }[] }) {
  const pathname = usePathname();
  const active =
    pathname === href || (href !== "/wiki" && pathname.startsWith(href));

  return (
    <li>
      <Link
        href={href}
        className={`sidebar-link ${active ? "active" : ""}`}
        aria-current={active ? "page" : undefined}
      >
        <span>{title}</span>
        {emBreve && (
          <span className="ml-auto shrink-0 rounded-full border border-border bg-bg-raised px-1.5 py-0.5 text-[0.5625rem] font-medium text-text-muted">
            em breve
          </span>
        )}
      </Link>
      {children && children.length > 0 && (
        <ul className="mt-0.5 space-y-0.5 border-l border-border pl-3 ml-2">
          {children.map((child) => {
            const cActive = pathname === child.href || pathname.startsWith(child.href);
            return (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className={`sidebar-link ${cActive ? "active" : ""} !text-[0.8125rem] ${
                    cActive ? "" : "opacity-80"
                  }`}
                  aria-current={cActive ? "page" : undefined}
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
  );
}

export function SidebarNav() {
  return (
    <nav aria-label="Navegação lateral" className="py-6">
      {navSections.map((section) => (
        <div key={section.label} className="mb-6">
          <div className="mb-1.5 px-3 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
            {section.label}
          </div>
          <ul className="space-y-0.5">
            {section.items.map((item) => (
              <NavLink key={item.href} href={item.href} title={item.title} emBreve={item.emBreve}>
                {item.children}
              </NavLink>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}