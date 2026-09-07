import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

export interface ArticleMeta {
  title: string;
  description: string;
  category: string;
  icon: string;
  order: number;
  featured: boolean;
  updatedAt: string;
}

export interface Article {
  slug: string;
  group: string;
  path: string;
  meta: ArticleMeta;
  contentMarkdown: string;
  contentHtml: string;
  contentText: string;
  toc: { id: string; title: string; level: number }[];
}

const CONTENT_DIR = path.join(process.cwd(), "content");

const defaultMeta: ArticleMeta = {
  title: "",
  description: "",
  category: "Geral",
  icon: "📄",
  order: 0,
  featured: false,
  updatedAt: "2026-01-01",
};

function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function parseFrontmatter(raw: string): { meta: Partial<ArticleMeta>; body: string } {
  const meta: Partial<ArticleMeta> = {};
  let body = raw;
  if (raw.startsWith("---")) {
    const end = raw.indexOf("\n---", 4);
    if (end !== -1) {
      const fm = raw.slice(4, end).trim();
      body = raw.slice(end + 5);
      for (const line of fm.split("\n")) {
        const idx = line.indexOf(":");
        if (idx === -1) continue;
        const key = line.slice(0, idx).trim() as keyof ArticleMeta;
        let value: string | number | boolean = line.slice(idx + 1).trim();
        value = value.replace(/^["']|["']$/g, "");
        if (key === "order") value = Number(value);
        if (key === "featured") value = value === "true";
        // @ts-expect-error dynamic assignment
        meta[key] = value;
      }
    }
  }
  return { meta, body };
}

function buildToc(md: string): { id: string; title: string; level: number }[] {
  const toc: { id: string; title: string; level: number }[] = [];
  for (const line of md.split("\n")) {
    const m = line.match(/^(#{2,3})\s+(.*)$/);
    if (m) {
      const title = m[2].replace(/[#*`]/g, "").trim();
      toc.push({ id: slugify(title), title, level: m[1].length });
    }
  }
  return toc;
}

function stripMarkdown(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[.*?\]\(.*?\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_`~-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const renderer = new marked.Renderer();
renderer.heading = ({ tokens, depth }) => {
  const raw = tokens.map((t) => t.raw).join("");
  const id = slugify(raw);
  return `<h${depth} id="${id}"><a href="#${id}" class="anchor" aria-hidden="true">#</a>${raw}</h${depth}>\n`;
};
renderer.codespan = (token) =>
  `<code class="inline-code">${token.text}</code>`;
renderer.code = (token) => {
  const cls = `language-${token.lang || "text"}`;
  const code = token.text.replace(/\n$/, "");
  return `<div class="code-block"><button type="button" class="code-copy" data-copy="${escapeHtml(code)}" aria-label="Copiar"><svg ...></svg></button><pre><code class="${cls}">${escapeHtml(code)}</code></pre></div>\n`;
};

marked.setOptions({ gfm: true, breaks: false, renderer });

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderMarkdown(md: string): string {
  return marked.parse(md, { async: false }) as string;
}

function collect(): Article[] {
  const articles: Article[] = [];

  function walk(dir: string, group: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => {
      return a.name.localeCompare(b.name, "pt-BR");
    });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full, group || entry.name);
      } else if (entry.name.endsWith(".md") || entry.name.endsWith(".mdx")) {
        const raw = fs.readFileSync(full, "utf-8");
        const { meta, body } = parseFrontmatter(raw);
        const base = path.basename(entry.name, path.extname(entry.name));
        const rel = path
          .relative(CONTENT_DIR, full)
          .replace(/\\/g, "/")
          .replace(/\.(md|mdx)$/, "");
        const isIndex = base === "home" || base.toLowerCase() === "index";
        const cleanRel = isIndex
          ? rel.split("/").slice(0, -1).join("/") || "/"
          : rel;
        const slug = isIndex ? path.basename(path.dirname(full)) : base;
        articles.push({
          slug,
          group,
          path: cleanRel,
          meta: { ...defaultMeta, ...meta, title: meta.title || rel },
          contentMarkdown: body,
          contentHtml: renderMarkdown(body),
          contentText: stripMarkdown(body),
          toc: buildToc(body),
        });
      }
    }
  }

  walk(CONTENT_DIR, "");
  return articles;
}

export function getArticles(): Article[] {
  return collect();
}

export function getArticleBySlug(slug: string): Article | undefined {
  return collect().find((a) => a.path === slug);
}

export function getArticlesByGroup(group: string): Article[] {
  return collect()
    .filter((a) => a.group === group)
    .sort((a, b) => a.meta.order - b.meta.order);
}

export function getFeaturedArticles(): Article[] {
  return collect()
    .filter((a) => a.meta.featured)
    .sort((a, b) => a.meta.order - b.meta.order);
}

export function slugifyStr(s: string): string {
  return slugify(s);
}