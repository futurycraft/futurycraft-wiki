export interface RankTier {
  slug: string;
  name: string;
  accent: string;
  tag: string;
  price: string | null;
  duration: string | null;
  benefits: string[];
  spawners: number;
  minions: number;
}

export interface Rank {
  slug: string;
  name: string;
  emoji: string;
  tiers: RankTier[];
}

export interface BeneficioVip{
  comando: string;
  descricao: string;
}

export interface Vip {
  slug: string;
  nome: string;
  cor: string;
  kits: string;
  comandos: string[];
  extras: string[];
  spawners?: string;
  minions?: string;
  tags?: string[];
}

export const vips: Vip[] = [
  {
    slug: "ferro",
    nome: "VIP Ferro",
    cor: "text-slate-300 border-slate-400/40",
    kits: "diários, semanais e mensais",
    comandos: ["/feed", "/cores", "/nick", "/fix (item na mão)", "/fly na ilha"],
    extras: ["Tag VIP Ferro no chat", "Acesso à Mina VIP", "Acesso ao chat SkyBlock no Discord"],
    spawners: "Até 6 Spawners com upgrade",
    minions: "Até 3 Minions ativos",
  },
  {
    slug: "ouro",
    nome: "VIP Ouro",
    cor: "text-yellow-400 border-yellow-500/40",
    kits: "diários, semanais e mensais",
    comandos: ["/feed", "/fix (item na mão)", "/heal", "/anvil", "/cores", "/nick", "/fly na ilha"],
    extras: ["Tag VIP Ouro no chat", "Acesso à Mina VIP", "Acesso ao chat SkyBlock no Discord"],
    spawners: "Até 8 Spawners com upgrade",
    minions: "Até 5 Minions ativos",
  },
  {
    slug: "diamante",
    nome: "VIP Diamante",
    cor: "text-cyan-400 border-cyan-500/40",
    kits: "diários, semanais e mensais",
    comandos: ["/feed", "/fix (item na mão)", "/fixall", "/heal", "/anvil", "/cores", "/nick", "/chatcolor", "/fly na ilha"],
    extras: ["Tag VIP Diamante no chat", "Acesso à Mina VIP", "Abas extras no /ec", "Acesso ao chat SkyBlock no Discord"],
    spawners: "Até 10 Spawners com upgrade",
    minions: "Até 7 Minions ativos",
  },
  {
    slug: "esmeralda",
    nome: "VIP Esmeralda",
    cor: "text-emerald-400 border-emerald-500/40",
    kits: "diários, semanais e mensais",
    comandos: ["/feed", "/fix (item na mão)", "/fixall", "/heal", "/anvil", "/cores", "/nick", "/chatcolor", "/fly na ilha", "/back", "/hat"],
    extras: ["Tag VIP Esmeralda no chat", "Acesso à Mina VIP", "Abas extras no /ec", "Bônus de XP no mcMMO", "Acesso ao chat SkyBlock no Discord"],
    spawners: "Até 12 Spawners com upgrade",
    minions: "Até 10 Minions ativos",
  },
  {
    slug: "supremo",
    nome: "VIP Supremo",
    cor: "text-fuchsia-400 border-fuchsia-500/40",
    kits: "diários, semanais e mensais",
    comandos: ["/feed", "/fix (item na mão)", "/fixall", "/heal", "/anvil", "/cores", "/nick", "/chatcolor", "/fly na ilha", "/back", "/hat", "/glow"],
    extras: ["Tag VIP Supremo exclusiva", "Acesso à Mina VIP", "Abas extras no /ec", "Bônus de XP no mcMMO", "Bônus extra de XP e drops", "Fila prioritária", "Acesso antecipado a novidades", "Acesso ao chat SkyBlock no Discord"],
    spawners: "Até 14 Spawners com upgrade",
    minions: "Até 10 Minions ativos",
  },
];