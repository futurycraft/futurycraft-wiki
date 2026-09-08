export interface SeasonConfig {
  nome: string;
  tag: string;
  status: "online" | "manutencao" | "em-breve";
  statusLabel: string;
  descricao: string;
  ipJava: string;
  ipBedrock: string;
  versao: string;
  atualizadoEm: string;
}

export const season: SeasonConfig = {
  nome: "SkyBlock",
  tag: "Temporada atual",
  status: "online",
  statusLabel: "Servidor online",
  descricao:
    "O servidor SkyBlock do FuturyCraft está no ar com a 1.21.8. Crie sua ilha, evolua seus minions, domine os encantamentos e concorra na Loteria.",
  ipJava: "futurycraft.com.br",
  ipBedrock: "bedrock.futurycraft.com.br",
  versao: "1.21.8",
  atualizadoEm: "2026-01-01",
};

export const skyblockHighlights = [
  { icon: "🌋", title: "Ilha inicial", desc: "Comece com uma ilha básica e expanda aos poucos.", href: "/skyblock/comojogar" },
  { icon: "🏝️", title: "Tipos de ilha", desc: "Ilha padrão, dupla ou em L — escolha a sua.", href: "/skyblock/ilha" },
  { icon: "⛏️", title: "Minions", desc: "Automáticos de mineração, plantas, mobs e mais.", href: "/skyblock/minions" },
  { icon: "💰", title: "Economia", desc: "Venda itens, faça quests e participe da economia.", href: "/skyblock/economia" },
  { icon: "🎯", title: "Missões", desc: "Complete com /c, /d e /q e ganhe recompensas.", href: "/skyblock/missoes" },
  { icon: "✨", title: "Encantamentos", desc: "284 encantamentos personalizados para dominar.", href: "/skyblock/encantamentos" },
  { icon: "🧙", title: "Textura", desc: "Ative a textura oficial com /textura.", href: "/skyblock/textura-do-servidor" },
  { icon: "🎫", title: "Votação", desc: "Vote e ganhe recompensas todos os dias.", href: "/skyblock/votacao" },
];