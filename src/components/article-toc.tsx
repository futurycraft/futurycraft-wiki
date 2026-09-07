"use client";

import { useEffect, useState } from "react";

interface ArticleTocProps {
  toc: { id: string; title: string; level: number }[];
}

export function ArticleToc({ toc }: ArticleTocProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-80px 0px -70% 0px" }
    );
    for (const item of toc) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [toc]);

  if (toc.length === 0) return null;

  return (
    <nav aria-label="Neste artigo" className="hidden w-60 shrink-0 lg:block">
      <div className="sticky top-24 py-6">
        <div className="mb-2 px-3 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
          Neste artigo
        </div>
        <ul className="space-y-0.5">
          {toc.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`-ml-0.5 block border-l-2 py-1 text-[0.8125rem] transition-colors ${
                  activeId === item.id
                    ? "border-accent text-accent"
                    : "border-transparent text-text-muted hover:border-border-bright hover:text-text"
                }`}
                style={{ paddingLeft: `${0.75 + (item.level - 2) * 0.75}rem` }}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}