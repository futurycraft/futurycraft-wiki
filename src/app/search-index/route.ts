import { getArticles } from "@/lib/content";
import { comandos } from "@/data/comandos";
import { getAllEnchants } from "@/lib/enchants";
import { vips } from "@/data/ranks";
import { categories } from "@/data/categories";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

export interface SearchEntry {
  id: string;
  type: string;
  typeSlug: string;
  title: string;
  subtitle: string;
  text: string;
  href: string;
}

function buildIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  for (const a of getArticles()) {
    entries.push({
      id: `article:${a.path}`,
      type: a.meta.category,
      typeSlug: "artigo",
      title: a.meta.icon ? `${a.meta.icon} ${a.meta.title}` : a.meta.title,
      subtitle: a.meta.category,
      text: `${a.meta.title} ${a.meta.description} ${a.contentText}`,
      href: `/${a.path}`,
    });
  }

  const commandPage = (categoria: string) =>
    ["SkyBlock", "Ilha", "Encantamentos"].includes(categoria)
      ? "/skyblock/comandos"
      : "/geral/comandos";

  for (const c of comandos) {
    entries.push({
      id: `comando:${c.comando}`,
      type: "Comando",
      typeSlug: "comando",
      title: c.comando,
      subtitle: c.categoria,
      text: `${c.comando} ${c.descricao} ${c.uso ?? ""} ${c.categoria} ${c.permissao}`,
      href: `${commandPage(c.categoria)}?comando=${encodeURIComponent(c.comando)}`,
    });
  }

  for (const e of getAllEnchants()) {
    entries.push({
      id: `encantamento:${e.path}`,
      type: "Encantamento",
      typeSlug: "encantamento",
      title: `✨ ${e.nome}`,
      subtitle: e.raridade,
      text: `${e.nome} ${e.descricao} ${e.aplicaSe} ${e.raridade} ${e.grupo}`,
      href: `/skyblock/encantamentos/${e.path}`,
    });
  }

  for (const v of vips) {
    entries.push({
      id: `vip:${v.slug}`,
      type: "Rank",
      typeSlug: "rank",
      title: `🏆 ${v.nome}`,
      subtitle: "VIP",
      text: `${v.nome} ${v.kits} ${v.comandos.join(" ")} ${v.extras.join(" ")}`,
      href: `/geral/vips#${v.slug}`,
    });
  }

  for (const c of categories) {
    entries.push({
      id: `categoria:${c.slug}`,
      type: "Categoria",
      typeSlug: "categoria",
      title: `${c.icon} ${c.title}`,
      subtitle: "Categoria",
      text: `${c.title} ${c.description}`,
      href: c.href,
    });
  }

  entries.push({
    id: "home",
    type: "Página",
    typeSlug: "pagina",
    title: "🏠 Início",
    subtitle: "Wiki",
    text: `${siteConfig.name} ${siteConfig.description}`,
    href: "/",
  });

  return entries;
}

export function GET() {
  return Response.json({ entries: buildIndex() });
}