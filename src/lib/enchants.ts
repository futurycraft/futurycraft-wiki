import type { Encantamento } from "@/data/encantamentos";
import { encantamentos } from "@/data/enchants";

export interface CatalogEnchant extends Encantamento {
  path: string;
}

export function getAllEnchants(): CatalogEnchant[] {
  return encantamentos.map((e) => ({ ...e, path: e.slug }));
}

export function getEnchantByPath(path: string): CatalogEnchant | undefined {
  return getAllEnchants().find((e) => e.path === path);
}

export function getEnchantsByRaridade(raridade: string): CatalogEnchant[] {
  const list = getAllEnchants();
  if (raridade === "Todos") return list;
  return list.filter((e) => e.raridade === raridade || e.grupo === raridade);
}