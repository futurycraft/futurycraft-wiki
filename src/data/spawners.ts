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
    drops: [drop("Carne de Porco", 100, 1, 1, ["Porkchop"])],
  },
  {
    id: "sheep",
    nome: "Sheep",
    aliases: ["Ovelha"],
    icone: "🐑",
    preco: 125000,
    categoria: "passivo",
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
    drops: [],
  },
  {
    id: "rabbit",
    nome: "Rabbit",
    aliases: ["Coelho"],
    icone: "🐰",
    preco: 125000,
    categoria: "passivo",
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
    drops: [],
  },
  {
    id: "llama",
    nome: "Llama",
    icone: "🦙",
    preco: 125000,
    categoria: "passivo",
    drops: [],
  },
  {
    id: "bee",
    nome: "Bee",
    aliases: ["Abelha"],
    icone: "🐝",
    preco: 125000,
    categoria: "passivo",
    drops: [],
  },
  {
    id: "parrot",
    nome: "Parrot",
    aliases: ["Papagaio"],
    icone: "🦜",
    preco: 125000,
    categoria: "passivo",
    drops: [],
  },
  {
    id: "dolphin",
    nome: "Dolphin",
    aliases: ["Golfinho"],
    icone: "🐬",
    preco: 200000,
    categoria: "passivo",
    drops: [],
  },
  {
    id: "cat",
    nome: "Cat",
    aliases: ["Gato"],
    icone: "🐱",
    preco: 200000,
    categoria: "passivo",
    drops: [],
  },
  {
    id: "panda",
    nome: "Panda",
    icone: "🐼",
    preco: 200000,
    categoria: "passivo",
    drops: [],
  },
  {
    id: "cod",
    nome: "Cod",
    aliases: ["Bacalhau"],
    icone: "🐟",
    preco: 125000,
    categoria: "passivo",
    drops: [],
  },
  {
    id: "squid",
    nome: "Squid",
    aliases: ["Lula"],
    icone: "🦑",
    preco: 175000,
    categoria: "passivo",
    drops: [drop("Bolsa de Tinta", 25, 1, 3, ["Ink Sac"])],
  },
  {
    id: "glow-squid",
    nome: "Glow Squid",
    aliases: ["Lula Brilhante"],
    icone: "🦑",
    preco: 175000,
    categoria: "passivo",
    drops: [drop("Bolsa de Tinta Brilhante", 25, 1, 3, ["Glow Ink Sac"])],
  },

  {
    id: "creeper",
    nome: "Creeper",
    icone: "💥",
    preco: 250000,
    categoria: "hostil",
    drops: [drop("Pólvora", 100, 1, 3, ["Gunpowder"])],
  },
  {
    id: "skeleton",
    nome: "Skeleton",
    aliases: ["Esqueleto"],
    icone: "💀",
    preco: 175000,
    categoria: "hostil",
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
    drops: [drop("Olho de Aranha", 1, 1, 3, ["Spider Eye"])],
  },
  {
    id: "zombie",
    nome: "Zombie",
    aliases: ["Zumbi"],
    icone: "🧟",
    preco: 175000,
    categoria: "hostil",
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
    drops: [],
  },
  {
    id: "ghast",
    nome: "Ghast",
    icone: "👻",
    preco: 875000,
    categoria: "hostil",
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
    drops: [],
  },
  {
    id: "cave-spider",
    nome: "Cave Spider",
    aliases: ["Aranha da Caverna"],
    icone: "🕷️",
    preco: 1750000,
    categoria: "hostil",
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
    drops: [drop("Vara de Blaze", 15, 1, 3, ["Blaze Rod"])],
  },
  {
    id: "magma-cube",
    nome: "Magma Cube",
    aliases: ["Cubo de Magma"],
    icone: "🟠",
    preco: 250000,
    categoria: "hostil",
    drops: [],
  },
  {
    id: "witch",
    nome: "Witch",
    aliases: ["Bruxa"],
    icone: "🧙",
    preco: 250000,
    categoria: "hostil",
    drops: [],
  },
  {
    id: "phantom",
    nome: "Phantom",
    aliases: ["Fantasma"],
    icone: "🦇",
    preco: 10000000,
    categoria: "hostil",
    drops: [drop("Membrana de Phantom", null, null, null, ["Phantom Membrane"])],
  },
  {
    id: "drowned",
    nome: "Drowned",
    aliases: ["Afogado"],
    icone: "🧟‍♂️",
    preco: 100000,
    categoria: "hostil",
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
    drops: [drop("Esmeralda", 100, 1, 3, ["Emerald"])],
  },
  {
    id: "pillager",
    nome: "Pillager",
    aliases: ["Saqueador"],
    icone: "🏹",
    preco: 250000,
    categoria: "especial",
    drops: [drop("Esmeralda", 100, 1, 3, ["Emerald"])],
  },
  {
    id: "piglin",
    nome: "Piglin",
    icone: "🐗",
    preco: 175000,
    categoria: "especial",
    drops: [],
  },
  {
    id: "zombified-piglin",
    nome: "Zombified Piglin",
    aliases: ["Piglin Zumbificado", "Homem-Porco Zumbi"],
    icone: "🧟‍♂️",
    preco: 200000,
    categoria: "especial",
    drops: [drop("Barra de Ouro", 2.5, null, null, ["Gold Ingot"])],
  },
  {
    id: "illusioner",
    nome: "Illusioner",
    aliases: ["Ilusionista"],
    icone: "🎭",
    preco: 5000,
    categoria: "especial",
    indisponivel: true,
    drops: [],
  },
];

export const hierarquiaRanks: { slug: string; nome: string }[] = [
  { slug: "membro", nome: "Membro" },
  { slug: "aprendiz", nome: "Aprendiz" },
  { slug: "aventureiro", nome: "Aventureiro" },
  { slug: "explorador", nome: "Explorador" },
  { slug: "veterano", nome: "Veterano" },
  { slug: "elite", nome: "Elite" },
  { slug: "mestre", nome: "Mestre" },
  { slug: "lendario", nome: "Lendário" },
  { slug: "rankz", nome: "NeoSky" },
];

export const hierarquiaVips: string[] = [
  "VIP Ferro",
  "VIP Ouro",
  "VIP Diamante",
  "VIP Esmeralda",
  "VIP Supremo",
  "VIP Magnata",
];

const permissoesRank: Record<string, string[]> = {
  membro: [
    "bee", "cat", "chicken", "cod", "cow", "dolphin", "llama", "ocelot",
    "panda", "parrot", "pig", "rabbit", "sheep", "skeleton", "spider",
    "witch", "zombie",
  ],
  aprendiz: [
    "axolotl", "bee", "cat", "chicken", "cod", "cow", "dolphin", "llama",
    "ocelot", "panda", "parrot", "pig", "rabbit", "sheep", "skeleton",
    "spider", "witch", "zombie",
  ],
  aventureiro: [
    "axolotl", "cave_spider", "ghast", "iron_golem", "llama", "mooshroom",
    "ocelot", "panda", "parrot", "pig", "rabbit", "sheep", "skeleton", "slime",
    "spider", "witch", "wither_skeleton", "zombie",
  ],
  explorador: [
    "axolotl", "cave_spider", "creeper", "ghast", "glow_squid", "iron_golem",
    "llama", "mooshroom", "ocelot", "panda", "parrot", "pig", "piglin",
    "pillager", "rabbit", "sheep", "skeleton", "spider", "witch",
    "wither_skeleton", "zombie",
  ],
  veterano: [
    "axolotl", "cave_spider", "creeper", "ghast", "glow_squid", "iron_golem",
    "llama", "magma_cube", "mooshroom", "ocelot", "panda", "parrot", "pig",
    "piglin", "pillager", "rabbit", "sheep", "skeleton", "spider", "witch",
    "wither_skeleton", "zombie",
  ],
  elite: [
    "axolotl", "cave_spider", "creeper", "ghast", "glow_squid", "iron_golem",
    "llama", "magma_cube", "mooshroom", "ocelot", "panda", "parrot", "pig",
    "piglin", "pillager", "rabbit", "sheep", "skeleton", "spider", "witch",
    "wither_skeleton", "zombie",
  ],
  mestre: [
    "axolotl", "blaze", "cave_spider", "creeper", "ghast", "glow_squid",
    "iron_golem", "llama", "magma_cube", "mooshroom", "ocelot", "panda",
    "parrot", "pig", "piglin", "pillager", "rabbit", "sheep", "skeleton",
    "spider", "witch", "wither_skeleton", "zombie",
  ],
  lendario: [
    "axolotl", "blaze", "cave_spider", "creeper", "drowned", "enderman",
    "evoker", "ghast", "glow_squid", "iron_golem", "llama", "magma_cube",
    "mooshroom", "ocelot", "panda", "parrot", "phantom", "pig", "piglin",
    "pillager", "rabbit", "sheep", "skeleton", "spider", "witch",
    "wither_skeleton", "zombie",
  ],
  rankz: [
    "axolotl", "blaze", "cave_spider", "creeper", "drowned", "elder_guardian",
    "enderman", "evoker", "ghast", "glow_squid", "guardian", "iron_golem",
    "llama", "magma_cube", "mooshroom", "ocelot", "panda", "parrot", "phantom",
    "pig", "piglin", "pillager", "rabbit", "sheep", "skeleton", "spider",
    "vindicator", "witch", "wither_skeleton", "zombie", "zombified_piglin",
  ],
};

const mobsLiberadosPorVip = [
  "drowned", "evoker", "iron_golem", "piglin", "pillager", "vindicator",
  "witch", "wither_skeleton",
];

const permissoesVip: Record<string, string[]> = Object.fromEntries(
  hierarquiaVips.map((vip) => [vip, mobsLiberadosPorVip]),
);

const permissaoPorMob: Record<string, string> = {
  "mushroom-cow": "mooshroom",
};

export function permissaoMob(s: Spawner): string {
  return permissaoPorMob[s.id] ?? s.id.replace(/-/g, "_");
}

export const spawnerRankPendente = "A confirmar";

export function spawnerRank(s: Spawner): string {
  const perm = permissaoMob(s);
  for (const r of hierarquiaRanks) {
    if (permissoesRank[r.slug].includes(perm)) return r.nome;
  }
  return spawnerRankPendente;
}

export function spawnerVips(s: Spawner): string[] {
  const perm = permissaoMob(s);
  return hierarquiaVips.filter((vip) => permissoesVip[vip].includes(perm));
}

export const spawnersRankPendente: Spawner[] = spawners.filter(
  (s) => spawnerRank(s) === spawnerRankPendente,
);

export const ordemImportancia: string[] = [
  "cow",
  "mushroom-cow",
  "iron-golem",
  "zombie",
  "creeper",
  "skeleton",
  "spider",
  "sheep",
  "pig",
  "chicken",
  "rabbit",

  "enderman",
  "blaze",
  "slime",
  "magma-cube",
  "drowned",
  "ghast",
  "wither-skeleton",
  "evoker",
  "guardian",
  "elder-guardian",
  "squid",
  "glow-squid",
  "piglin",
  "zombified-piglin",
  "vindicator",
  "pillager",
  "phantom",
  "witch",
  "cave-spider",

  "cod",
  "axolotl",
  "ocelot",
  "bee",
  "llama",
  "parrot",
  "dolphin",
  "cat",
  "panda",

  "illusioner",
];

export function importanciaSpawner(s: Spawner): number {
  const i = ordemImportancia.indexOf(s.id);
  return i === -1 ? ordemImportancia.length : i;
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
