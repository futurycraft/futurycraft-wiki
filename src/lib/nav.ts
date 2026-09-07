export interface NavItem {
  title: string;
  href: string;
}

export interface NavSection {
  label: string;
  items: NavItem[];
}

export const navSections: NavSection[] = [
  {
    label: "Início",
    items: [{ title: "Começando", href: "/wiki/comecando" }],
  },
  {
    label: "Servidores",
    items: [
      { title: "SkyBlock", href: "/wiki/skyblock" },
      { title: "RankUP", href: "/wiki/rankup" },
    ],
  },
  {
    label: "Sistemas",
    items: [
      { title: "Economia", href: "/wiki/sistemas/economia" },
      { title: "Cash", href: "/wiki/sistemas/cash" },
      { title: "Loja", href: "/wiki/sistemas/loja" },
      { title: "Ranks", href: "/wiki/sistemas/ranks" },
      { title: "Encantamentos", href: "/wiki/sistemas/encantamentos" },
      { title: "Crates", href: "/wiki/sistemas/crates" },
      { title: "Eventos", href: "/wiki/sistemas/eventos" },
      { title: "Missões", href: "/wiki/sistemas/missoes" },
      { title: "Recompensas", href: "/wiki/sistemas/recompensas" },
    ],
  },
  {
    label: "Guias",
    items: [
      { title: "Guias para iniciantes", href: "/wiki/guias/para-iniciantes" },
      { title: "Progressão", href: "/wiki/guias/progressao" },
      { title: "Farm", href: "/wiki/guias/farm" },
      { title: "Economia", href: "/wiki/guias/economia" },
      { title: "Dicas", href: "/wiki/guias/dicas" },
    ],
  },
  {
    label: "Referência",
    items: [
      { title: "Comandos", href: "/wiki/comandos" },
      { title: "Encantamentos", href: "/wiki/encantamentos" },
      { title: "Ranks", href: "/wiki/ranks" },
      { title: "Itens", href: "/wiki/referencia/itens" },
      { title: "Termos", href: "/wiki/referencia/termos" },
    ],
  },
  {
    label: "Informações",
    items: [
      { title: "Regras", href: "/wiki/regras" },
      { title: "Suporte", href: "/wiki/informacoes/suporte" },
      { title: "Status", href: "/wiki/informacoes/status" },
      { title: "Equipe", href: "/wiki/informacoes/equipe" },
      { title: "Criadores", href: "/wiki/informacoes/criadores" },
      { title: "FAQ", href: "/wiki/faq" },
    ],
  },
];

export const shortcuts = [
  { title: "Começar a jogar", href: "/wiki/comecando" },
  { title: "SkyBlock", href: "/wiki/skyblock" },
  { title: "RankUP", href: "/wiki/rankup" },
  { title: "Comandos", href: "/wiki/comandos" },
  { title: "Economia", href: "/wiki/sistemas/economia" },
];