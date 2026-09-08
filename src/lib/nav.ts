export interface NavItem {
  title: string;
  href: string;
  emBreve?: boolean;
  children?: NavItem[];
  group?: string;
}

export interface NavSection {
  label: string;
  items: NavItem[];
}

export const navSections: NavSection[] = [
  {
    label: "Início",
    items: [
      {
        title: "Começando",
        href: "/comecando",
        children: [
          { title: "Bem-vindo à Wiki", href: "/comecando/bem-vindo-a-wiki" },
          { title: "Como Fazer Login", href: "/comecando/como-fazer-login" },
          { title: "Entrar para a Equipe", href: "/geral/equipe" },
          { title: "Programa de Criadores", href: "/geral/criadores" },
          { title: "Regras do Servidor", href: "/geral/regras" },
        ],
      },
    ],
  },
  {
    label: "Servidores",
    items: [
      {
        title: "SkyBlock",
        href: "/skyblock",
        children: [
          { title: "Como Jogar", href: "/skyblock/comojogar", group: "Começando" },
          { title: "FAQ", href: "/skyblock/faq", group: "Começando" },
          { title: "Textura do Servidor", href: "/skyblock/textura-do-servidor", group: "Começando" },
          { title: "Ilha", href: "/skyblock/ilha", group: "Ilha" },
          { title: "Minions", href: "/skyblock/minions", group: "Ilha" },
          { title: "Spawners", href: "/skyblock/spawners", group: "Ilha" },
          { title: "Economia", href: "/skyblock/economia", group: "Economia" },
          { title: "Loteria", href: "/skyblock/loteria", group: "Economia" },
          { title: "MobTraps", href: "/skyblock/mobtraps", group: "Economia" },
          { title: "Missões", href: "/skyblock/missoes", group: "Progressão" },
          { title: "Jobs", href: "/skyblock/jobs", group: "Progressão" },
          { title: "mcMMO", href: "/skyblock/mcmmo", group: "Progressão" },
          { title: "Passe de Batalha", href: "/skyblock/battlepass", group: "Progressão" },
          { title: "Encantamentos", href: "/skyblock/encantamentos", group: "Sistemas" },
          { title: "Eventos", href: "/skyblock/eventos", group: "Sistemas" },
          { title: "Airdrops", href: "/skyblock/airdrops", group: "Sistemas" },
          { title: "Relíquias", href: "/skyblock/reliquias", group: "Sistemas" },
          { title: "Torneios", href: "/skyblock/torneios", group: "Sistemas" },
          { title: "Parkour", href: "/skyblock/parkour", group: "Sistemas" },
          { title: "Crafting", href: "/skyblock/crafting", group: "Sistemas", children: [
            { title: "Vegetais", href: "/skyblock/crafting/vegetais" },
            { title: "Comidas", href: "/skyblock/crafting/comidas" },
            { title: "Sementes", href: "/skyblock/crafting/sementes" },
            { title: "Itens Principais", href: "/skyblock/crafting/itens-principais" },
          ]},
          { title: "Votação", href: "/skyblock/votacao", group: "Início" },
          { title: "Dragão", href: "/skyblock/dragao", group: "Progressão" },
          { title: "Kits", href: "/skyblock/kits", group: "Progressão" },
          { title: "Shop", href: "/skyblock/shop", group: "Progressão" },
          { title: "Mercado Galáctico", href: "/skyblock/mercado-galactico", group: "Progressão" },
          { title: "Rankings", href: "/skyblock/rankings", group: "Referência" },
          { title: "Comandos", href: "/skyblock/comandos", group: "Referência" },
        ],
      },
    ],
  },
  {
    label: "Geral",
    items: [
      { title: "Regras do Servidor", href: "/geral/regras" },
      { title: "Suporte", href: "/geral/suporte" },
      { title: "FAQ", href: "/geral/faq" },
      { title: "Discord", href: "/geral/discord" },
      { title: "Contato", href: "/geral/contato" },
      { title: "Loja", href: "/geral/loja" },
      { title: "VIPs", href: "/geral/vips" },
      { title: "Entrar para a Equipe", href: "/geral/equipe" },
      { title: "Programa de Criadores", href: "/geral/criadores" },
      { title: "Status", href: "/geral/status" },
      { title: "Itens", href: "/geral/itens" },
      { title: "Termos", href: "/geral/termos" },
    ],
  },
];

const labelMap: Record<string, string> = {
  "/comecando": "Começando",
  "/skyblock": "SkyBlock",
  "/geral": "Geral",
  "comecando": "Começando",
  "skyblock": "SkyBlock",
  "geral": "Geral",
  "bem-vindo-a-wiki": "Bem-vindo à Wiki",
  "como-fazer-login": "Como Fazer Login",
  "ilha": "Ilha",
  "nivel": "Nível",
  "warps": "Warps",
  "biomas": "Biomas",
  "challenges": "Challenges",
  "gerador": "Gerador",
  "limits": "Limits",
  "settings": "Settings",
  "team": "Team",
  "/skyblock/ilha/nivel": "Nível",
  "/skyblock/ilha/warps": "Warps",
  "/skyblock/ilha/biomas": "Biomas",
  "/skyblock/ilha/challenges": "Challenges",
  "/skyblock/ilha/gerador": "Gerador",
  "/skyblock/ilha/limits": "Limits",
  "/skyblock/ilha/settings": "Settings",
  "/skyblock/ilha/team": "Team",
};

function collectLabels(items: NavItem[]): Record<string, string> {
  const map: Record<string, string> = {};
  for (const item of items) {
    map[item.href] = item.title;
    if (item.children) {
      Object.assign(map, collectLabels(item.children));
    }
  }
  return map;
}

export const navLabel: Record<string, string> = navSections.reduce(
  (acc, section) => Object.assign(acc, labelMap, collectLabels(section.items)),
  {} as Record<string, string>
);

export const shortcuts = [
  { title: "Começar a jogar", href: "/comecando" },
  { title: "SkyBlock", href: "/skyblock" },
  { title: "Comandos", href: "/skyblock/comandos" },
  { title: "VIPs", href: "/geral/vips" },
];