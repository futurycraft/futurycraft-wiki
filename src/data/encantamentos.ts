export interface Encantamento {
  nome: string;
  descricao: string;
  aplicaSe: string;
  raridade: string;
  nivelMaximo: number;
  grupo: string;
  slug: string;
}

export type EncantGrupo =
  | "Todos"
  | "Simples"
  | "Único"
  | "Elite"
  | "Supremo"
  | "Lendário"
  | "Heróico";

export const encantGrupos: EncantGrupo[] = [
  "Todos",
  "Simples",
  "Único",
  "Elite",
  "Supremo",
  "Lendário",
  "Heróico",
];

export type EncantRaridade =
  | "Simples"
  | "Único"
  | "Elite"
  | "Supremo"
  | "Lendário"
  | "Heróico";

export const encantRaridades: EncantRaridade[] = [
  "Simples",
  "Único",
  "Elite",
  "Supremo",
  "Lendário",
  "Heróico",
];

export const grupoToRaridade: Record<string, string> = {
  SIMPLE: "Simples",
  UNIQUE: "Único",
  ELITE: "Elite",
  ULTIMATE: "Supremo",
  LEGENDARY: "Lendário",
  HEROIC: "Heróico",
};

export const raridadeToGrupo: Record<string, string> = {
  Simples: "SIMPLE",
  Único: "UNIQUE",
  Elite: "ELITE",
  Supremo: "ULTIMATE",
  Lendário: "LEGENDARY",
  Heróico: "HEROIC",
};