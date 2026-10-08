import { getArticles } from "@/lib/content";
import { comandos } from "@/data/comandos";
import { getAllEnchants } from "@/lib/enchants";
import { vips } from "@/data/ranks";
import { vipVantagens, vipsSkyblock, vipTotalComandos } from "@/data/vips";
import { formatarPreco, spawners, spawnerRank } from "@/data/spawners";
import { categories } from "@/data/categories";
import { rankupRanks, rankupTotal } from "@/data/rankup-ranks";
import { rankupCaixas } from "@/data/rankup-caixas";
import { rankupComandos } from "@/data/rankup-comandos";
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

  const comandosHref = "/skyblock/comandos";

  for (const c of comandos) {
    entries.push({
      id: `comando:${c.comando}`,
      type: "Comando",
      typeSlug: "comando",
      title: c.comando,
      subtitle: c.categoria,
      text: `${c.comando} ${c.descricao} ${c.uso ?? ""} ${c.categoria} ${c.permissao}`,
      href: `${comandosHref}?comando=${encodeURIComponent(c.comando)}`,
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

  for (const v of vipsSkyblock) {
    const comandos = vipVantagens.filter((a) => a.grupo === "comandos");
    const kits = vipVantagens.filter((a) => a.grupo === "exclusivos");
    const progressao = vipVantagens.filter((a) => a.grupo === "progressao");
    const texts = [
      ...comandos,
      ...kits,
      ...progressao,
    ]
      .filter((a) => {
        const c = a.celulas[v.id];
        return c !== false;
      })
      .map((a) => `${a.rotulo} ${a.dica ?? ""}`);
    entries.push({
      id: `vip-skyblock:${v.id}`,
      type: "VIP",
      typeSlug: "rank",
      title: `${v.icone} ${v.nomeCompleto}`,
      subtitle: "VIP · SkyBlock",
      text: `${v.nomeCompleto} ${v.kit} ${v.tag} ${v.spawners} spawners ${v.minions} minions ${texts.join(" ")} ${vipTotalComandos} comandos`,
      href: "/skyblock/vips",
    });
  }

  for (const s of spawners) {
    const drops = s.drops.flatMap((d) => [d.nome, ...(d.aliases ?? [])]);
    entries.push({
      id: `spawner:${s.id}`,
      type: "Spawner",
      typeSlug: "spawner",
      title: `${s.icone} ${s.nome}`,
      subtitle: `Spawner · ${formatarPreco(s.preco)}`,
      text: `${s.nome} ${(s.aliases ?? []).join(" ")} spawner preco ${formatarPreco(s.preco)} rank ${spawnerRank(s)} ${drops.join(" ")}`,
      href: `/skyblock/spawners#mob-${s.id}`,
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
    id: "rankup:ranks",
    type: "RankUP",
    typeSlug: "pagina",
    title: "🏆 Ranks do RankUP",
    subtitle: "RankUP",
    text: `Ranks RankUP ${rankupTotal} ranks progressão Money Blocos Fragmentos Hyperion ${rankupRanks
      .map((r) => `${r.posicao} ${r.nome}`)
      .join(" ")}`,
    href: "/rankup/ranks",
  });

  entries.push({
    id: "rankup:caixas",
    type: "RankUP",
    typeSlug: "pagina",
    title: "🎁 Caixas do RankUP",
    subtitle: "RankUP",
    text: `Caixas RankUP chaves recompensas ${rankupCaixas
      .flatMap((c) => [
        c.nome,
        c.chave,
        ...c.recompensas.map((r) => `${r.nome} ${r.detalhe} ${r.chance}%`),
      ])
      .join(" ")}`,
    href: "/rankup/caixas",
  });

  entries.push({
    id: "rankup:comandos",
    type: "RankUP",
    typeSlug: "pagina",
    title: "💻 Comandos do RankUP",
    subtitle: "RankUP",
    text: `Comandos RankUP liberados jogadores ${rankupComandos
      .map((c) => `${c.comando} ${c.descricao} ${c.categoria}`)
      .join(" ")}`,
    href: "/rankup/comandos",
  });

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