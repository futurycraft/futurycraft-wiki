export type SpawnerCategoria = "passivo" | "hostil" | "especial";

export interface SpawnerDrop {
  nome: string;
  aliases?: string[];
  chance: number | null;
  min?: number | null;
  max?: number | null;
  desabilitado?: boolean;
}

export interface Spawner {
  id: string;
  nome: string;
  aliases?: string[];
  icone: string;
  preco: number;
  categoria: SpawnerCategoria;
  rank?: string | null;
  indisponivel?: boolean;
  drops: SpawnerDrop[];
}

export const spawnerCategorias: { id: SpawnerCategoria; nome: string }[] = [
  { id: "passivo", nome: "Mobs passivos" },
  { id: "hostil", nome: "Mobs hostis" },
  { id: "especial", nome: "Mobs especiais" },
];

function drop(
  nome: string,
  chance: number | null,
  min: number | null = null,
  max: number | null = null,
  aliases?: string[],
  desabilitado = false,
): SpawnerDrop {
  return desabilitado
    ? { nome, chance, min, max, aliases, desabilitado: true }
    : { nome, chance, min, max, aliases };
}

export const spawners: Spawner[] = [
  {
    id: "pig",
    nome: "Pig",
    aliases: ["Porco"],
    icone: "🐷",
    preco: 65000,
    categoria: "passivo",
    rank: null,
    drops: [drop("Carne de Porco", 100, 1, 1, ["Porkchop"])],
  },
  {
    id: "sheep",
    nome: "Sheep",
    aliases: ["Ovelha"],
    icone: "🐑",
    preco: 125000,
    categoria: "passivo",
    rank: null,
    drops: [
      drop("Lã Branca", 100, 1, 1, ["White Wool"]),
      drop("Carneiro", 100, 1, 3, ["Mutton"]),
    ],
  },
  {
    id: "cow",
    nome: "Cow",
    aliases: ["Vaca"],
    icone: "🐄",
    preco: 125000,
    categoria: "passivo",
    rank: null,
    drops: [
      drop("Couro", 66.7, 1, 2, ["Leather"]),
      drop("Carne", 100, 1, 3, ["Beef"]),
    ],
  },
  {
    id: "chicken",
    nome: "Chicken",
    aliases: ["Galinha"],
    icone: "🐔",
    preco: 125000,
    categoria: "passivo",
    rank: null,
    drops: [
      drop("Pena", 100, 1, 2, ["Feather"]),
      drop("Frango", 100, 1, 1, ["Chicken"]),
      drop("Ovo", 1, 1, 1, ["Egg"]),
    ],
  },
  {
    id: "mushroom-cow",
    nome: "Mushroom Cow",
    aliases: ["Vaca Cogumelo", "Mooshroom"],
    icone: "🐮",
    preco: 125000,
    categoria: "passivo",
    rank: null,
    drops: [
      drop("Couro", 67.7, 1, 2, ["Leather"]),
      drop("Carne", 100, 1, 3, ["Beef"]),
    ],
  },
  {
    id: "ocelot",
    nome: "Ocelot",
    aliases: ["Jaguatirica"],
    icone: "🐆",
    preco: 125000,
    categoria: "passivo",
    rank: null,
    drops: [],
  },
  {
    id: "rabbit",
    nome: "Rabbit",
    aliases: ["Coelho"],
    icone: "🐰",
    preco: 125000,
    categoria: "passivo",
    rank: null,
    drops: [
      drop("Pé de Coelho", 10, null, null, ["Rabbit Foot"]),
      drop("Carne de Coelho", 100, null, null, ["Rabbit"]),
      drop("Pele de Coelho", 50, 1, 1, ["Rabbit Hide"]),
    ],
  },
  {
    id: "axolotl",
    nome: "Axolotl",
    aliases: ["Axolote"],
    icone: "🦎",
    preco: 125000,
    categoria: "passivo",
    rank: null,
    drops: [],
  },
  {
    id: "llama",
    nome: "Llama",
    icone: "🦙",
    preco: 125000,
    categoria: "passivo",
    rank: null,
    drops: [],
  },
  {
    id: "bee",
    nome: "Bee",
    aliases: ["Abelha"],
    icone: "🐝",
    preco: 125000,
    categoria: "passivo",
    rank: null,
    drops: [],
  },
  {
    id: "parrot",
    nome: "Parrot",
    aliases: ["Papagaio"],
    icone: "🦜",
    preco: 125000,
    categoria: "passivo",
    rank: null,
    drops: [],
  },
  {
    id: "dolphin",
    nome: "Dolphin",
    aliases: ["Golfinho"],
    icone: "🐬",
    preco: 200000,
    categoria: "passivo",
    rank: null,
    drops: [],
  },
  {
    id: "cat",
    nome: "Cat",
    aliases: ["Gato"],
    icone: "🐱",
    preco: 200000,
    categoria: "passivo",
    rank: null,
    drops: [],
  },
  {
    id: "panda",
    nome: "Panda",
    icone: "🐼",
    preco: 200000,
    categoria: "passivo",
    rank: null,
    drops: [],
  },
  {
    id: "cod",
    nome: "Cod",
    aliases: ["Bacalhau"],
    icone: "🐟",
    preco: 125000,
    categoria: "passivo",
    rank: null,
    drops: [],
  },
  {
    id: "squid",
    nome: "Squid",
    aliases: ["Lula"],
    icone: "🦑",
    preco: 175000,
    categoria: "passivo",
    rank: null,
    drops: [drop("Bolsa de Tinta", 25, 1, 3, ["Ink Sac"])],
  },
  {
    id: "glow-squid",
    nome: "Glow Squid",
    aliases: ["Lula Brilhante"],
    icone: "🦑",
    preco: 175000,
    categoria: "passivo",
    rank: null,
    drops: [drop("Bolsa de Tinta Brilhante", 25, 1, 3, ["Glow Ink Sac"])],
  },

  {
    id: "creeper",
    nome: "Creeper",
    icone: "💥",
    preco: 250000,
    categoria: "hostil",
    rank: null,
    drops: [drop("Pólvora", 100, 1, 3, ["Gunpowder"])],
  },
  {
    id: "skeleton",
    nome: "Skeleton",
    aliases: ["Esqueleto"],
    icone: "💀",
    preco: 175000,
    categoria: "hostil",
    rank: null,
    drops: [
      drop("Osso", 100, 1, 3, ["Bone"]),
      drop("Flecha", 100, 1, 2, ["Arrow"]),
    ],
  },
  {
    id: "spider",
    nome: "Spider",
    aliases: ["Aranha"],
    icone: "🕸️",
    preco: 175000,
    categoria: "hostil",
    rank: null,
    drops: [drop("Olho de Aranha", 1, 1, 3, ["Spider Eye"])],
  },
  {
    id: "zombie",
    nome: "Zombie",
    aliases: ["Zumbi"],
    icone: "🧟",
    preco: 175000,
    categoria: "hostil",
    rank: null,
    drops: [
      drop("Barra de Ferro", 0.3, 1, 3, ["Iron Ingot"]),
      drop("Carne Podre", 100, 1, 3, ["Rotten Flesh"]),
      drop("Cenoura", 0.8, 1, 1, ["Carrot"]),
      drop("Batata", 0.8, 1, 1, ["Potato"]),
    ],
  },
  {
    id: "slime",
    nome: "Slime",
    icone: "🟢",
    preco: 175000,
    categoria: "hostil",
    rank: null,
    drops: [],
  },
  {
    id: "ghast",
    nome: "Ghast",
    icone: "👻",
    preco: 875000,
    categoria: "hostil",
    rank: null,
    drops: [
      drop("Lágrima de Ghast", 1, 1, 3, ["Ghast Tear"]),
      drop("Pólvora", 50, 0, 1, ["Gunpowder"]),
    ],
  },
  {
    id: "enderman",
    nome: "Enderman",
    aliases: ["Homem do Fim"],
    icone: "🌌",
    preco: 250000,
    categoria: "hostil",
    rank: null,
    drops: [],
  },
  {
    id: "cave-spider",
    nome: "Cave Spider",
    aliases: ["Aranha da Caverna"],
    icone: "🕷️",
    preco: 1750000,
    categoria: "hostil",
    rank: null,
    drops: [
      drop("Olho de Aranha", 0.5, 1, 1, ["Spider Eye"]),
      drop("Linha", 5, 1, 2, ["String"]),
    ],
  },
  {
    id: "blaze",
    nome: "Blaze",
    icone: "🔥",
    preco: 250000,
    categoria: "hostil",
    rank: null,
    drops: [drop("Vara de Blaze", 15, 1, 3, ["Blaze Rod"])],
  },
  {
    id: "magma-cube",
    nome: "Magma Cube",
    aliases: ["Cubo de Magma"],
    icone: "🟠",
    preco: 250000,
    categoria: "hostil",
    rank: null,
    drops: [],
  },
  {
    id: "witch",
    nome: "Witch",
    aliases: ["Bruxa"],
    icone: "🧙",
    preco: 250000,
    categoria: "hostil",
    rank: null,
    drops: [],
  },
  {
    id: "phantom",
    nome: "Phantom",
    aliases: ["Fantasma"],
    icone: "🦇",
    preco: 10000000,
    categoria: "hostil",
    rank: null,
    drops: [drop("Membrana de Phantom", null, null, null, ["Phantom Membrane"])],
  },
  {
    id: "drowned",
    nome: "Drowned",
    aliases: ["Afogado"],
    icone: "🧟‍♂️",
    preco: 100000,
    categoria: "hostil",
    rank: null,
    drops: [
      drop("Barra de Cobre", 11, 1, 3, ["Copper Ingot"]),
      drop("Tridente", 0.01, null, null, ["Trident"]),
      drop("Concha de Náutilo", 3, null, null, ["Nautilus Shell"]),
      drop("Vara de Pesca", null, null, null, ["Fishing Rod"], true),
    ],
  },

  {
    id: "iron-golem",
    nome: "Iron Golem",
    aliases: ["Golem de Ferro"],
    icone: "🤖",
    preco: 1500000,
    categoria: "especial",
    rank: null,
    drops: [
      drop("Papoula", 100, 1, 2, ["Poppy"]),
      drop("Barra de Ferro", 100, 1, 3, ["Iron Ingot"]),
    ],
  },
  {
    id: "guardian",
    nome: "Guardian",
    aliases: ["Guardião"],
    icone: "🐠",
    preco: 750000,
    categoria: "especial",
    rank: null,
    drops: [
      drop("Cristais de Prismarinho", 40, 1, 3, ["Prismarine Crystals"]),
      drop("Fragmento de Prismarinho", 20, 1, 3, ["Prismarine Shard"]),
    ],
  },
  {
    id: "elder-guardian",
    nome: "Elder Guardian",
    aliases: ["Guardião Ancião"],
    icone: "🐡",
    preco: 750000,
    categoria: "especial",
    rank: null,
    drops: [
      drop("Bacalhau", 0.625, 1, 3, ["Cod"]),
      drop("Salmão", 1.5, 1, 3, ["Salmon"]),
      drop("Baiacu", 0.325, 1, 3, ["Pufferfish"]),
      drop("Peixe Tropical", 0.05, 1, 3, ["Tropical Fish"]),
      drop("Esponja Molhada", 0.05, 1, 3, ["Wet Sponge"]),
    ],
  },
  {
    id: "wither-skeleton",
    nome: "Wither Skeleton",
    aliases: ["Esqueleto Wither"],
    icone: "☠️",
    preco: 500000,
    categoria: "especial",
    rank: null,
    drops: [
      drop("Cabeça de Esqueleto Wither", 1, 1, 1, ["Wither Skeleton Skull"]),
      drop("Carvão", 100, 1, 3, ["Coal"]),
      drop("Osso", 100, 1, 3, ["Bone"]),
    ],
  },
  {
    id: "evoker",
    nome: "Evoker",
    aliases: ["Invocador"],
    icone: "🪄",
    preco: 5000,
    categoria: "especial",
    rank: null,
    drops: [
      drop("Esmeralda", 80, 1, 3, ["Emerald"]),
      drop("Totem da Imortalidade", 30, 1, 1, ["Totem of Undying"]),
    ],
  },
  {
    id: "vindicator",
    nome: "Vindicator",
    aliases: ["Vindicador"],
    icone: "🪓",
    preco: 250000,
    categoria: "especial",
    rank: null,
    drops: [drop("Esmeralda", 100, 1, 3, ["Emerald"])],
  },
  {
    id: "pillager",
    nome: "Pillager",
    aliases: ["Saqueador"],
    icone: "🏹",
    preco: 250000,
    categoria: "especial",
    rank: null,
    drops: [drop("Esmeralda", 100, 1, 3, ["Emerald"])],
  },
  {
    id: "piglin",
    nome: "Piglin",
    icone: "🐗",
    preco: 175000,
    categoria: "especial",
    rank: null,
    drops: [],
  },
  {
    id: "zombified-piglin",
    nome: "Zombified Piglin",
    aliases: ["Piglin Zumbificado", "Homem-Porco Zumbi"],
    icone: "🧟‍♂️",
    preco: 200000,
    categoria: "especial",
    rank: null,
    drops: [drop("Barra de Ouro", 2.5, null, null, ["Gold Ingot"])],
  },
  {
    id: "illusioner",
    nome: "Illusioner",
    aliases: ["Ilusionista"],
    icone: "🎭",
    preco: 5000,
    categoria: "especial",
    rank: null,
    indisponivel: true,
    drops: [],
  },
];

export const spawnerRankPendente = "A confirmar";

export function spawnerRank(s: Spawner): string {
  return s.rank ?? spawnerRankPendente;
}

export function formatarPreco(valor: number): string {
  return `$${valor.toLocaleString("pt-BR")}`;
}

export function formatarChance(chance: number | null): string {
  if (chance === null) return "Não especificada";
  const arredondado = Math.round(chance * 1000) / 1000;
  return `${arredondado.toString().replace(".", ",")}%`;
}

export function formatarQuantidade(d: SpawnerDrop): string {
  if (d.min === null || d.min === undefined) return "—";
  if (d.max === null || d.max === undefined) return String(d.min);
  if (d.min === d.max) return String(d.min);
  return `${d.min}–${d.max}`;
}
