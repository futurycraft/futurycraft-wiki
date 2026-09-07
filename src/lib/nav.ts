export interface NavItem {
  title: string;
  href: string;
  emBreve?: boolean;
  children?: NavItem[];
}

export interface NavSection {
  label: string;
  items: NavItem[];
}

export const navSections: NavSection[] = [
  {
    label: "Início",
    items: [{ title: "Começando", href: "/comecando" }],
  },
  {
    label: "Servidores",
    items: [
      {
        title: "SkyBlock",
        href: "/skyblock",
        children: [
          { title: "Como Começar", href: "/skyblock/como-comecar" },
          { title: "Ilhas", href: "/skyblock/ilhas" },
          { title: "Minions", href: "/skyblock/minions" },
          { title: "Progressão", href: "/skyblock/progressao" },
          { title: "Missões", href: "/skyblock/missoes" },
          { title: "Economia", href: "/skyblock/economia" },
          { title: "Encantamentos", href: "/skyblock/encantamentos" },
          { title: "Loteria", href: "/skyblock/loteria" },
          { title: "Eventos", href: "/skyblock/eventos" },
          { title: "Comandos", href: "/skyblock/comandos" },
          { title: "Crafting", href: "/skyblock/crafting" },
          { title: "Vote", href: "/skyblock/votar" },
          { title: "Benefícios VIP", href: "/skyblock/beneficios-vip" },
          { title: "Textura", href: "/skyblock/textura-do-servidor" },
        ],
      },
      {
        title: "RankUP",
        href: "/rankup",
        children: [
          { title: "Como Começar", href: "/rankup/como-comecar" },
          { title: "Ranks", href: "/rankup/ranks", emBreve: true },
          { title: "Progressão", href: "/rankup/progressao" },
          { title: "Economia", href: "/rankup/economia" },
          { title: "Prestígio", href: "/rankup/prestigio" },
          { title: "Sistemas", href: "/rankup/sistemas" },
          { title: "Comandos", href: "/rankup/comandos" },
          { title: "Guias", href: "/rankup/guias" },
        ],
      },
    ],
  },
  {
    label: "Sistemas",
    items: [
      { title: "Economia", href: "/sistemas/economia" },
      { title: "Cash", href: "/sistemas/cash" },
      { title: "Loja", href: "/sistemas/loja" },
      { title: "Ranks", href: "/sistemas/ranks" },
      { title: "Encantamentos", href: "/sistemas/encantamentos" },
      { title: "Crates", href: "/sistemas/crates", emBreve: true },
      { title: "Eventos", href: "/sistemas/eventos" },
      { title: "Missões", href: "/sistemas/missoes" },
      { title: "Recompensas", href: "/sistemas/recompensas" },
    ],
  },
  {
    label: "Guias",
    items: [
      { title: "Guias para iniciantes", href: "/guias/para-iniciantes" },
      { title: "Progressão", href: "/guias/progressao" },
      { title: "Farm", href: "/guias/farm" },
      { title: "Economia", href: "/guias/economia" },
      { title: "Dicas", href: "/guias/dicas" },
    ],
  },
  {
    label: "Referência",
    items: [
      { title: "Comandos", href: "/comandos" },
      { title: "Encantamentos", href: "/encantamentos" },
      { title: "Ranks", href: "/ranks" },
      { title: "Itens", href: "/referencia/itens", emBreve: true },
      { title: "Termos", href: "/referencia/termos" },
    ],
  },
  {
    label: "Informações",
    items: [
      { title: "Regras", href: "/regras" },
      { title: "Suporte", href: "/informacoes/suporte" },
      { title: "Status", href: "/informacoes/status" },
      { title: "Equipe", href: "/informacoes/equipe" },
      { title: "Criadores", href: "/informacoes/criadores" },
      { title: "FAQ", href: "/faq" },
    ],
  },
];

export const shortcuts = [
  { title: "Começar a jogar", href: "/comecando" },
  { title: "SkyBlock", href: "/skyblock" },
  { title: "RankUP", href: "/rankup" },
  { title: "Comandos", href: "/comandos" },
  { title: "Economia", href: "/sistemas/economia" },
];