export interface Category {
  slug: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export const categories: Category[] = [
  {
    slug: "comecando",
    title: "Começando",
    description: "Tudo que você precisa saber para começar no FuturyCraft.",
    icon: "🎮",
    href: "/wiki/comecando",
  },
  {
    slug: "skyblock",
    title: "SkyBlock",
    description: "Sistemas, ilhas, economia, progressão e recursos do SkyBlock.",
    icon: "☁️",
    href: "/wiki/skyblock",
  },
  {
    slug: "rankup",
    title: "RankUP",
    description: "Ranks, progressão, comandos e sistemas do RankUP.",
    icon: "⚔️",
    href: "/wiki/rankup",
  },
  {
    slug: "economia",
    title: "Economia",
    description: "Cash, dinheiro, lojas, recompensas e sistemas econômicos.",
    icon: "💰",
    href: "/wiki/sistemas/economia",
  },
  {
    slug: "encantamentos",
    title: "Encantamentos",
    description: "Todos os encantamentos personalizados e seus efeitos.",
    icon: "✨",
    href: "/wiki/encantamentos",
  },
  {
    slug: "comandos",
    title: "Comandos",
    description: "Lista completa de comandos disponíveis para jogadores.",
    icon: "📖",
    href: "/wiki/comandos",
  },
  {
    slug: "ranks",
    title: "Ranks",
    description: "Informações sobre VIPs, ranks e benefícios.",
    icon: "🏆",
    href: "/wiki/ranks",
  },
  {
    slug: "regras",
    title: "Regras",
    description: "Regras oficiais do servidor.",
    icon: "📜",
    href: "/wiki/regras",
  },
];

export const gettingStarted = [
  {
    step: "01",
    title: "Entre no servidor",
    description: "Conecte-se ao IP futurycraft.com.br (Java) ou bedrock.futurycraft.com.br:25654 (Bedrock).",
    href: "/wiki/comecando/entrar",
  },
  {
    step: "02",
    title: "Crie sua conta",
    description: "Primeira vez? Registre-se com /registrar senha senha e faça login com /login.",
    href: "/wiki/comecando/entrar",
  },
  {
    step: "03",
    title: "Conheça o servidor",
    description: "Explore o spawn, use /menu e descubra os sistemas disponíveis.",
    href: "/wiki/comecando/como-jogar",
  },
  {
    step: "04",
    title: "Comece sua progressão",
    description: "Crie sua ilha no SkyBlock ou suba de rank no RankUP.",
    href: "/wiki/skyblock",
  },
];