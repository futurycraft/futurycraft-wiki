import type { Encantamento } from "@/data/encantamentos";
import { encantamentosPadrao } from "@/data/enchants/padrao";
import { encantamentosCosmicos } from "@/data/enchants/cosmicos";
import { encantamentosVanilla } from "@/data/enchants/vanilla";

export interface CatalogEnchant extends Encantamento {
  familia: string;
  familiaSlug: string;
  path: string;
}

export interface EnchantFamily {
  familia: string;
  familiaSlug: string;
  items: Encantamento[];
}

export const enchantFamilies: EnchantFamily[] = [
  { familia: "Padrão", familiaSlug: "padrao", items: encantamentosPadrao },
  { familia: "Cósmico", familiaSlug: "cosmicos", items: encantamentosCosmicos },
  { familia: "Vanilla", familiaSlug: "vanilla", items: encantamentosVanilla },
];

export function getAllEnchants(): CatalogEnchant[] {
  const flat = enchantFamilies.flatMap((f) =>
    f.items.map((e) => ({ ...e, familia: f.familia, familiaSlug: f.familiaSlug }))
  );
  const counts = new Map<string, number>();
  for (const e of flat) counts.set(e.slug, (counts.get(e.slug) ?? 0) + 1);
  return flat.map((e) => ({
    ...e,
    path: (counts.get(e.slug) ?? 0) > 1 ? `${e.slug}-${e.familiaSlug}` : e.slug,
  }));
}

export function getEnchantByPath(path: string): CatalogEnchant | undefined {
  return getAllEnchants().find((e) => e.path === path);
}

export function getEnchantsByFamily(familiaSlug: string): CatalogEnchant[] {
  return getAllEnchants().filter((e) => e.familiaSlug === familiaSlug);
}