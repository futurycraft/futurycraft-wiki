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
    href: "/comecando",
  },
  {
    slug: "skyblock",
    title: "SkyBlock",
    description: "Ilhas, economia, progressão e sistemas do SkyBlock.",
    icon: "☁️",
    href: "/skyblock",
  },
  {
    slug: "geral",
    title: "Geral",
    description: "Comandos, regras, suporte, loja e informações oficiais.",
    icon: "📚",
    href: "/geral",
  },
  {
    slug: "encantamentos",
    title: "Encantamentos",
    description: "Os 284 encantamentos personalizados e seus efeitos.",
    icon: "✨",
    href: "/skyblock/encantamentos",
  },
  {
    slug: "comandos",
    title: "Comandos",
    description: "Comandos do SkyBlock e comandos gerais do servidor.",
    icon: "📖",
    href: "/skyblock/comandos",
  },
  {
    slug: "vips",
    title: "VIPs",
    description: "Kits, comandos e benefícios de cada VIP.",
    icon: "🏆",
    href: "/geral/vips",
  },
  {
    slug: "votacao",
    title: "Votação",
    description: "Vote e ganhe recompensas todos os dias.",
    icon: "🗳️",
    href: "/skyblock/votacao",
  },
  {
    slug: "regras",
    title: "Regras",
    description: "Regras oficiais do servidor.",
    icon: "📜",
    href: "/geral/regras",
  },
];

export const gettingStarted = [
  {
    step: "01",
    title: "Entre no servidor",
    description: "Java: futurycraft.com.br • Bedrock: bedrock.futurycraft.com.br:25654 (versão 1.21.8).",
    href: "/comecando/comojogar",
  },
  {
    step: "02",
    title: "Registre sua conta",
    description: "Primeira vez no servidor? Use /registrar <senha> <senha> para criar sua conta.",
    href: "/comecando/primeiroacesso",
  },
  {
    step: "03",
    title: "Faça login",
    description: "Já cadastrado? Entre com /login <sua senha> logo após conectar.",
    href: "/comecando/primeiroacesso",
  },
  {
    step: "04",
    title: "Conheça o Lobby",
    description: "Use /menu para abrir o menu principal e explore os sistemas disponíveis.",
    href: "/comecando/primeirospassos",
  },
  {
    step: "05",
    title: "Ative a textura",
    description: "Os itens novos só aparecem com a textura oficial: /textura.",
    href: "/comecando/primeirospassos",
  },
  {
    step: "06",
    title: "Crie sua ilha no SkyBlock",
    description: "Use /criarilha e comece sua jornada no céu. Veja como funciona.",
    href: "/skyblock/comojogar",
  },
];