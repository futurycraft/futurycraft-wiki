import { getArticles } from "@/lib/content";
import { comandos } from "@/data/comandos";
import { encantamentosPadrao } from "@/data/enchants/padrao";
import { encantamentosCosmicos } from "@/data/enchants/cosmicos";
import { encantamentosVanilla } from "@/data/enchants/vanilla";
import { vips } from "@/data/ranks";
import { categories } from "@/data/categories";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

export interface SearchEntry {
  id: string;
  type: string;
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
      title: a.meta.icon ? `${a.meta.icon} ${a.meta.title}` : a.meta.title,
      subtitle: a.meta.category,
      text: `${a.meta.title} ${a.meta.description} ${a.contentText}`,
      href: `/wiki/${a.path}`,
    });
  }

  for (const c of comandos) {
    entries.push({
      id: `comando:${c.comando}`,
      type: "Comando",
      title: c.comando,
      subtitle: c.categoria,
      text: `${c.comando} ${c.descricao} ${c.uso ?? ""} ${c.categoria}`,
      href: `/wiki/comandos?comando=${encodeURIComponent(c.comando)}`,
    });
  }

  const enchants = [
    ...encantamentosPadrao.map((e) => ({ ...e, grupoExtra: "Padrão" })),
    ...encantamentosCosmicos.map((e) => ({ ...e, grupoExtra: "Cósmico" })),
    ...encantamentosVanilla.map((e) => ({ ...e, grupoExtra: "Vanilla" })),
  ];
  for (const e of enchants) {
    entries.push({
      id: `encantamento:${e.grupoExtra}:${e.slug}`,
      type: "Encantamento",
      title: `✨ ${e.nome}`,
      subtitle: `${e.grupoExtra} • ${e.raridade}`,
      text: `${e.nome} ${e.descricao} ${e.aplicaSe} ${e.raridade} ${e.grupoExtra}`,
      href: `/wiki/encantamentos?nome=${encodeURIComponent(e.nome.toLowerCase())}`,
    });
  }

  for (const v of vips) {
    entries.push({
      id: `vip:${v.slug}`,
      type: "Rank",
      title: `🏆 ${v.nome}`,
      subtitle: "VIP",
      text: `${v.nome} ${v.kits} ${v.comandos.join(" ")} ${v.extras.join(" ")}`,
      href: `/wiki/ranks#${v.slug}`,
    });
  }

  for (const c of categories) {
    entries.push({
      id: `categoria:${c.slug}`,
      type: "Categoria",
      title: `${c.icon} ${c.title}`,
      subtitle: "Categoria",
      text: `${c.title} ${c.description}`,
      href: c.href,
    });
  }

  entries.push({
    id: "home",
    type: "Página",
    title: "🏠 Início",
    subtitle: "Wiki",
    text: `${siteConfig.name} ${siteConfig.description}`,
    href: "/wiki",
  });

  return entries;
}

export function GET() {
  return Response.json({ entries: buildIndex() });
}