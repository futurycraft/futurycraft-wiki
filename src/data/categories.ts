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
    description: "Java: futurycraft.com.br • Bedrock: bedrock.futurycraft.com.br:25654 (versão 1.21.8).",
    href: "/wiki/comecando/entrar",
  },
  {
    step: "02",
    title: "Registre sua conta",
    description: "Primeira vez no servidor? Use /registrar <senha> <senha> para criar sua conta.",
    href: "/wiki/comecando/entrar",
  },
  {
    step: "03",
    title: "Faça login",
    description: "Já cadastrado? Entre com /login <sua senha> logo após conectar.",
    href: "/wiki/comecando/entrar",
  },
  {
    step: "04",
    title: "Conheça o Lobby",
    description: "Use /menu para abrir o menu principal e explore os sistemas disponíveis.",
    href: "/wiki/comecando/como-jogar",
  },
  {
    step: "05",
    title: "Escolha SkyBlock ou RankUP",
    description: "Crie sua ilha no céu ou evolua por ranks minerando. Veja como funciona cada modo.",
    href: "/wiki/comecando/como-jogar",
  },
  {
    step: "06",
    title: "Comece sua progressão",
    description: "Siga o guia de Como Começar e evolua no modo que escolheu.",
    href: "/wiki/skyblock/como-comecar",
  },
];