export type VipId =
  | "redstone"
  | "ferro"
  | "ouro"
  | "diamante"
  | "esmeralda"
  | "supremo";

export interface Vip {
  id: VipId;
  nome: string;
  nomeCompleto: string;
  icone: string;
  texto: string;
  borda: string;
  kit: string;
  tag: string;
  spawners: number;
  minions: number;
}

export interface VipGrupo {
  id: string;
  titulo: string;
  descricao: string;
}

export type VipCelula = boolean | number | string;

export interface VipVantagem {
  id: string;
  rotulo: string;
  grupo: string;
  dica?: string;
  celulas: Record<VipId, VipCelula>;
}

export const vipIds: VipId[] = [
  "redstone",
  "ferro",
  "ouro",
  "diamante",
  "esmeralda",
  "supremo",
];

export const vipGrupos: VipGrupo[] = [
  {
    id: "comandos",
    titulo: "Comandos",
    descricao: "Comandos liberados para cada categoria de VIP.",
  },
  {
    id: "progressao",
    titulo: "Progressão",
    descricao: "Limites e bônus que afetam o desenvolvimento da ilha.",
  },
  {
    id: "exclusivos",
    titulo: "Benefícios Exclusivos",
    descricao: "Kits, tags e vantagens exclusivas do VIP.",
  },
];

export const vipsSkyblock: Vip[] = [
  {
    id: "redstone",
    nome: "Redstone",
    nomeCompleto: "VIP Nitro/Redstone",
    icone: "🔴",
    texto: "text-red-400",
    borda: "border-red-500/40",
    kit: "Kit Redstone",
    tag: "Tag VIP Redstone no chat",
    spawners: 6,
    minions: 3,
  },
  {
    id: "ferro",
    nome: "Ferro",
    nomeCompleto: "VIP Ferro",
    icone: "🪨",
    texto: "text-slate-300",
    borda: "border-slate-400/40",
    kit: "Kit Ferro",
    tag: "Tag VIP Ferro no chat",
    spawners: 6,
    minions: 3,
  },
  {
    id: "ouro",
    nome: "Ouro",
    nomeCompleto: "VIP Ouro",
    icone: "🥇",
    texto: "text-yellow-400",
    borda: "border-yellow-500/40",
    kit: "Kit Ouro",
    tag: "Tag VIP Ouro no chat",
    spawners: 8,
    minions: 5,
  },
  {
    id: "diamante",
    nome: "Diamante",
    nomeCompleto: "VIP Diamante",
    icone: "💠",
    texto: "text-cyan-400",
    borda: "border-cyan-500/40",
    kit: "Kit Diamante",
    tag: "Tag VIP Diamante no chat",
    spawners: 10,
    minions: 7,
  },
  {
    id: "esmeralda",
    nome: "Esmeralda",
    nomeCompleto: "VIP Esmeralda",
    icone: "🟢",
    texto: "text-emerald-400",
    borda: "border-emerald-500/40",
    kit: "Kit Esmeralda",
    tag: "Tag VIP Esmeralda no chat",
    spawners: 12,
    minions: 10,
  },
  {
    id: "supremo",
    nome: "Supremo",
    nomeCompleto: "VIP Supremo",
    icone: "👑",
    texto: "text-fuchsia-400",
    borda: "border-fuchsia-500/40",
    kit: "Kit Supremo",
    tag: "Tag VIP Supremo exclusiva",
    spawners: 14,
    minions: 10,
  },
];

const vipIdsOrdenados = vipIds;

function linha(
  id: string,
  rotulo: string,
  grupo: string,
  celulas: VipCelula[],
  dica?: string,
): VipVantagem {
  const mapa = {} as Record<VipId, VipCelula>;
  vipIdsOrdenados.forEach((vipId, i) => {
    mapa[vipId] = celulas[i];
  });
  return dica ? { id, rotulo, grupo, dica, celulas: mapa } : { id, rotulo, grupo, celulas: mapa };
}

function linhaTexto(
  id: string,
  rotulo: string,
  grupo: string,
  textos: string[],
  dica?: string,
): VipVantagem {
  const mapa = {} as Record<VipId, VipCelula>;
  vipIdsOrdenados.forEach((vipId, i) => {
    mapa[vipId] = textos[i];
  });
  return dica ? { id, rotulo, grupo, dica, celulas: mapa } : { id, rotulo, grupo, celulas: mapa };
}

export const vipVantagens: VipVantagem[] = [
  // Comandos
  linha("feed", "/feed", "comandos", [true, true, true, true, true, true]),
  linha("fix", "/fix", "comandos", [true, true, true, true, true, true], "Repara o item que está na sua mão."),
  linha("fixall", "/fixall", "comandos", [false, false, false, true, true, true], "Repara todos os itens da sua ilha de uma vez."),
  linha("heal", "/heal", "comandos", [true, false, true, true, true, true]),
  linha("anvil", "/anvil", "comandos", [true, false, true, true, true, true]),
  linha("nick", "/nick", "comandos", [false, false, true, true, true, true], "Altera o seu nome de exibição no servidor."),
  linha("cores", "/cores", "comandos", [true, true, true, true, true, true]),
  linha("chatcolor", "/chatcolor", "comandos", [false, false, false, true, true, true], "Libera cores adicionais no chat."),
  linha("fly", "/fly", "comandos", [true, false, true, true, true, true], "Permite voar na sua ilha."),
  linha("back", "/back", "comandos", [false, false, false, false, true, true], "Retorna ao ponto anterior do seu teleport."),
  linha("hat", "/hat", "comandos", [false, false, false, false, true, true], "Coloca um item na sua cabeça."),
  linha("glow", "/glow", "comandos", [false, false, false, false, false, true], "Aplica um efeito de brilho no seu personagem."),

  // Progressão
  linha("spawners", "Spawners", "progressao", [6, 6, 8, 10, 12, 14], "Quantidade máxima de spawners com upgrade na ilha."),
  linha("minions", "Minions", "progressao", [3, 3, 5, 7, 10, 10], "Quantidade máxima de minions ativos."),
  linha("ec", "Abas extras no /ec", "progressao", [false, false, false, true, true, "Todas"], "Espaços adicionais disponíveis no seu Ender Chest."),
  linha("mcmmo", "Bônus de XP no mcMMO", "progressao", [false, false, false, false, true, true], "Mais XP por ações de habilidade no mcMMO."),
  linha("drops", "Bônus extra de XP e drops", "progressao", [false, false, false, false, false, true], "Aumento adicional na experiência recebida e nas chances de drop."),

  // Benefícios exclusivos
  linhaTexto(
    "kit",
    "Kit",
    "exclusivos",
    [
      "Kit Redstone",
      "Kit Ferro",
      "Kit Ouro",
      "Kit Diamante",
      "Kit Esmeralda",
      "Kit Supremo",
    ],
    "Kits diário, semanal e mensal do seu VIP.",
  ),
  linhaTexto(
    "tag",
    "Tag VIP",
    "exclusivos",
    [
      "Tag VIP Redstone",
      "Tag VIP Ferro",
      "Tag VIP Ouro",
      "Tag VIP Diamante",
      "Tag VIP Esmeralda",
      "Tag VIP Supremo",
    ],
    "Identificação do seu VIP exibida no chat.",
  ),
  linha("tags", "Tags exclusivas", "exclusivos", [false, false, false, false, true, true], "Tags adicionais além da tag principal do VIP."),
  linha("mina", "Mina VIP", "exclusivos", [true, true, true, true, true, true]),
  linha("discord", "Chat SkyBlock no Discord", "exclusivos", [true, true, true, true, true, true]),
  linha("fila", "Fila prioritária", "exclusivos", [false, false, false, false, false, true], "Prioridade de entrada quando o servidor estiver com capacidade máxima."),
  linha("antecipado", "Acesso antecipado a novidades", "exclusivos", [false, false, false, false, false, true], "Acesso antecipado a determinadas novidades quando disponibilizado pela equipe."),
];

export function vipPorId(id: VipId): Vip {
  return vipsSkyblock.find((v) => v.id === id) ?? vipsSkyblock[0];
}

export function vipVantagensDoGrupo(grupo: string): VipVantagem[] {
  return vipVantagens.filter((v) => v.grupo === grupo);
}

export function vipCelula(vantagem: VipVantagem, id: VipId): VipCelula {
  return vantagem.celulas[id];
}

export const vipTotalComandos = vipVantagens.filter((v) => v.grupo === "comandos").length;