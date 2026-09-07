export interface Encantamento {
  nome: string;
  descricao: string;
  aplicaSe: string;
  raridade: string;
  nivelMaximo: number;
  grupo: string;
  slug: string;
}

export type EncantGrupo = "Todos" | "Simples" | "Elite" | "Lendário" | "Supremo" | "Único" | "Fabuloso" | "Heróico" | "Alma" | "Maestria";

export const encantGrupos: EncantGrupo[] = [
  "Todos",
  "Simples",
  "Elite",
  "Lendário",
  "Supremo",
  "Único",
  "Fabuloso",
  "Heróico",
  "Alma",
  "Maestria",
];

export type EncantRaridade =
  | "Todos"
  | "Simples"
  | "Elite"
  | "Lendário"
  | "Supremo"
  | "Único"
  | "Fabuloso"
  | "Heróico";

export const encantRaridades: EncantRaridade[] = encantGrupos.filter(
  (g) => g !== "Alma" && g !== "Maestria"
) as EncantRaridade[];

export interface EncantCategory {
  slug: string;
  nome: string;
  descricao: string;
  cor: string;
}

export const encantCategories: EncantCategory[] = [
  {
    slug: "padrao",
    nome: "Encantamentos Padrão",
    descricao: "250+ encantamentos personalizados de uso geral no servidor.",
    cor: "from-cyan-500 to-blue-500",
  },
  {
    slug: "cosmicos",
    nome: "Encantamentos Cósmicos",
    descricao: "200+ encantamentos cósmicos com efeitos poderosos e raros.",
    cor: "from-purple-500 to-fuchsia-500",
  },
  {
    slug: "vanilla",
    nome: "Encantamentos Vanilla",
    descricao: "60+ encantamentos vanilla personalizados com efeitos novos.",
    cor: "from-emerald-500 to-green-500",
  },
];