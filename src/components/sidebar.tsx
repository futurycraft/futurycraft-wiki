"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navSections } from "@/lib/nav";

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
            {section.items.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/wiki" && pathname.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`sidebar-link ${active ? "active" : ""}`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}