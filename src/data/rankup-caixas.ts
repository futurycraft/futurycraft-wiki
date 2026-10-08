export interface RankupCaixaRecompensa {
  nome: string;
  chance: number;
  categoria: string;
  detalhe: string;
}

export interface RankupCaixa {
  id: string;
  ordem: number;
  nome: string;
  chave: string;
  recompensas: RankupCaixaRecompensa[];
}

export const rankupCaixasCategorias: { id: string; nome: string }[] =
  [{"id":"blocos","nome":"Blocos"},{"id":"fragmentos","nome":"Fragmentos"},{"id":"money","nome":"Money"},{"id":"spawner","nome":"Spawners"},{"id":"boss","nome":"Bosses"},{"id":"espada","nome":"Matadoras de Bosses"},{"id":"maquina","nome":"Máquinas"},{"id":"booster","nome":"Boosters"},{"id":"bomba","nome":"Bombas"},{"id":"caixa","nome":"Caixas"},{"id":"skin","nome":"Skins"},{"id":"item","nome":"Itens"},{"id":"outro","nome":"Outros"}];

export const rankupCaixas: RankupCaixa[] = 
[
  {
    "id": "eco",
    "ordem": 1,
    "nome": "Caixa Eco",
    "chave": "Chave Eco",
    "recompensas": [
      {
        "chance": 30,
        "nome": "Blocos",
        "categoria": "blocos",
        "detalhe": "+10"
      },
      {
        "chance": 25,
        "nome": "Blocos",
        "categoria": "blocos",
        "detalhe": "+15"
      },
      {
        "chance": 20,
        "nome": "Blocos",
        "categoria": "blocos",
        "detalhe": "+25"
      },
      {
        "chance": 10,
        "nome": "Blocos",
        "categoria": "blocos",
        "detalhe": "+50"
      },
      {
        "chance": 6.5,
        "nome": "Blocos",
        "categoria": "blocos",
        "detalhe": "+100"
      },
      {
        "chance": 3.5,
        "nome": "Blocos",
        "categoria": "blocos",
        "detalhe": "+250"
      },
      {
        "chance": 3,
        "nome": "Blocos",
        "categoria": "blocos",
        "detalhe": "+500"
      },
      {
        "chance": 2,
        "nome": "Semente de Abóbora",
        "categoria": "item",
        "detalhe": "1x"
      }
    ]
  },
  {
    "id": "mitica",
    "ordem": 2,
    "nome": "Caixa Mítica",
    "chave": "Chave Mítica",
    "recompensas": [
      {
        "chance": 25,
        "nome": "Fragmentos",
        "categoria": "fragmentos",
        "detalhe": "+10"
      },
      {
        "chance": 20,
        "nome": "Fragmentos",
        "categoria": "fragmentos",
        "detalhe": "+15"
      },
      {
        "chance": 15,
        "nome": "Fragmentos",
        "categoria": "fragmentos",
        "detalhe": "+25"
      },
      {
        "chance": 10,
        "nome": "Fragmentos",
        "categoria": "fragmentos",
        "detalhe": "+50"
      },
      {
        "chance": 10,
        "nome": "Fragmentos",
        "categoria": "fragmentos",
        "detalhe": "+75"
      },
      {
        "chance": 5,
        "nome": "Fragmentos",
        "categoria": "fragmentos",
        "detalhe": "+100"
      },
      {
        "chance": 3,
        "nome": "Fragmentos",
        "categoria": "fragmentos",
        "detalhe": "+150"
      },
      {
        "chance": 2,
        "nome": "Fragmentos",
        "categoria": "fragmentos",
        "detalhe": "+200"
      },
      {
        "chance": 7,
        "nome": "Boss Creeper",
        "categoria": "boss",
        "detalhe": "1x"
      },
      {
        "chance": 3,
        "nome": "Boss Zombie",
        "categoria": "boss",
        "detalhe": "1x"
      },
      {
        "chance": 2,
        "nome": "Boss Blaze",
        "categoria": "boss",
        "detalhe": "1x"
      },
      {
        "chance": 1,
        "nome": "Boss Bruxa",
        "categoria": "boss",
        "detalhe": "1x"
      },
      {
        "chance": 0.5,
        "nome": "Boss Enderman",
        "categoria": "boss",
        "detalhe": "1x"
      },
      {
        "chance": 0.1,
        "nome": "Boss Wither",
        "categoria": "boss",
        "detalhe": "1x"
      }
    ]
  },
  {
    "id": "galactica",
    "ordem": 3,
    "nome": "Caixa Galáctica",
    "chave": "Chave Galáctica",
    "recompensas": [
      {
        "chance": 35,
        "nome": "Spawner de Galinha",
        "categoria": "spawner",
        "detalhe": "1x"
      },
      {
        "chance": 15,
        "nome": "Spawner de Porco",
        "categoria": "spawner",
        "detalhe": "1x"
      },
      {
        "chance": 10,
        "nome": "Spawner de Vaca",
        "categoria": "spawner",
        "detalhe": "1x"
      },
      {
        "chance": 10,
        "nome": "Spawner de Ovelha",
        "categoria": "spawner",
        "detalhe": "1x"
      },
      {
        "chance": 5,
        "nome": "Spawner de Esqueleto",
        "categoria": "spawner",
        "detalhe": "1x"
      },
      {
        "chance": 5,
        "nome": "Spawner de Aranha",
        "categoria": "spawner",
        "detalhe": "1x"
      },
      {
        "chance": 5,
        "nome": "Spawner de Bruxa",
        "categoria": "spawner",
        "detalhe": "1x"
      },
      {
        "chance": 5,
        "nome": "Spawner de Zumbi",
        "categoria": "spawner",
        "detalhe": "1x"
      },
      {
        "chance": 4,
        "nome": "Spawner de Creeper",
        "categoria": "spawner",
        "detalhe": "1x"
      },
      {
        "chance": 3,
        "nome": "Spawner de Cubo De Magma",
        "categoria": "spawner",
        "detalhe": "1x"
      },
      {
        "chance": 2,
        "nome": "Spawner de Blaze",
        "categoria": "spawner",
        "detalhe": "1x"
      },
      {
        "chance": 1,
        "nome": "Spawner de Wither",
        "categoria": "spawner",
        "detalhe": "1x"
      }
    ]
  },
  {
    "id": "vip",
    "ordem": 4,
    "nome": "Caixa VIP",
    "chave": "Chave VIP",
    "recompensas": [
      {
        "chance": 15,
        "nome": "Money",
        "categoria": "money",
        "detalhe": "R$ 250"
      },
      {
        "chance": 10,
        "nome": "Money",
        "categoria": "money",
        "detalhe": "R$ 750"
      },
      {
        "chance": 5,
        "nome": "Money",
        "categoria": "money",
        "detalhe": "R$ 5.000"
      },
      {
        "chance": 8,
        "nome": "Booster de Mineração I",
        "categoria": "booster",
        "detalhe": "1x"
      },
      {
        "chance": 8,
        "nome": "Booster de Pesca I",
        "categoria": "booster",
        "detalhe": "1x"
      },
      {
        "chance": 5,
        "nome": "Chave Mítica",
        "categoria": "caixa",
        "detalhe": "1x"
      },
      {
        "chance": 3,
        "nome": "Chave Mítica",
        "categoria": "caixa",
        "detalhe": "3x"
      },
      {
        "chance": 2,
        "nome": "Chave Mítica",
        "categoria": "caixa",
        "detalhe": "5x"
      },
      {
        "chance": 2,
        "nome": "Boss Wither",
        "categoria": "boss",
        "detalhe": "1x"
      },
      {
        "chance": 2,
        "nome": "Extrator de Ferro Quântico",
        "categoria": "maquina",
        "detalhe": "1x"
      },
      {
        "chance": 1,
        "nome": "Extrator de Ferro Quântico",
        "categoria": "maquina",
        "detalhe": "5x"
      },
      {
        "chance": 0.4,
        "nome": "Extrator de Ferro Quântico",
        "categoria": "maquina",
        "detalhe": "10x"
      },
      {
        "chance": 0.8,
        "nome": "Refinador Solar de Ouro",
        "categoria": "maquina",
        "detalhe": "1x"
      },
      {
        "chance": 0.4,
        "nome": "Refinador Solar de Ouro",
        "categoria": "maquina",
        "detalhe": "5x"
      },
      {
        "chance": 0.15,
        "nome": "Refinador Solar de Ouro",
        "categoria": "maquina",
        "detalhe": "10x"
      },
      {
        "chance": 0.3,
        "nome": "Compressor Estelar de Diamantes",
        "categoria": "maquina",
        "detalhe": "1x"
      },
      {
        "chance": 0.15,
        "nome": "Compressor Estelar de Diamantes",
        "categoria": "maquina",
        "detalhe": "5x"
      },
      {
        "chance": 0.1,
        "nome": "Compressor Estelar de Diamantes",
        "categoria": "maquina",
        "detalhe": "10x"
      },
      {
        "chance": 0.14,
        "nome": "Chave Galáctica",
        "categoria": "caixa",
        "detalhe": "1x"
      },
      {
        "chance": 0.12,
        "nome": "Chave Galáctica",
        "categoria": "caixa",
        "detalhe": "3x"
      },
      {
        "chance": 0.1,
        "nome": "Poção InterGalactica",
        "categoria": "item",
        "detalhe": "1x"
      },
      {
        "chance": 0.05,
        "nome": "Armadura VIP · Capacete",
        "categoria": "item",
        "detalhe": "1 peça"
      },
      {
        "chance": 0.05,
        "nome": "Armadura VIP",
        "categoria": "outro",
        "detalhe": "1x"
      },
      {
        "chance": 0.05,
        "nome": "Armadura VIP",
        "categoria": "outro",
        "detalhe": "1x"
      },
      {
        "chance": 0.05,
        "nome": "Armadura VIP",
        "categoria": "outro",
        "detalhe": "1x"
      },
      {
        "chance": 0.001,
        "nome": "Limpa Plot",
        "categoria": "outro",
        "detalhe": "1x"
      },
      {
        "chance": 0.0001,
        "nome": "VIP Ferro 15 dias",
        "categoria": "outro",
        "detalhe": "15 dias"
      },
      {
        "chance": 0.00001,
        "nome": "VIP Ferro 15 dias",
        "categoria": "outro",
        "detalhe": "30 dias"
      }
    ]
  },
  {
    "id": "estelar",
    "ordem": 5,
    "nome": "Caixa Estelar",
    "chave": "Chave Estelar",
    "recompensas": [
      {
        "chance": 25,
        "nome": "Armadura Estelar · Capacete",
        "categoria": "item",
        "detalhe": "1 peça"
      },
      {
        "chance": 20,
        "nome": "Armadura Estelar",
        "categoria": "outro",
        "detalhe": "1x"
      },
      {
        "chance": 15,
        "nome": "Armadura Estelar",
        "categoria": "outro",
        "detalhe": "1x"
      },
      {
        "chance": 10,
        "nome": "Armadura Estelar",
        "categoria": "outro",
        "detalhe": "1x"
      }
    ]
  },
  {
    "id": "cosmica",
    "ordem": 6,
    "nome": "Caixa Cósmica",
    "chave": "Chave Cósmica",
    "recompensas": [
      {
        "chance": 15,
        "nome": "Money",
        "categoria": "money",
        "detalhe": "R$ 10.000"
      },
      {
        "chance": 10,
        "nome": "Money",
        "categoria": "money",
        "detalhe": "R$ 25.000"
      },
      {
        "chance": 5,
        "nome": "Money",
        "categoria": "money",
        "detalhe": "R$ 75.000"
      },
      {
        "chance": 8,
        "nome": "Booster de Mineração I",
        "categoria": "booster",
        "detalhe": "1x"
      },
      {
        "chance": 8,
        "nome": "Booster de Pesca I",
        "categoria": "booster",
        "detalhe": "1x"
      },
      {
        "chance": 5,
        "nome": "Chave Mítica",
        "categoria": "caixa",
        "detalhe": "1x"
      },
      {
        "chance": 5,
        "nome": "Bomba Pequena",
        "categoria": "bomba",
        "detalhe": "1x"
      },
      {
        "chance": 3,
        "nome": "Chave Mítica",
        "categoria": "caixa",
        "detalhe": "3x"
      },
      {
        "chance": 3,
        "nome": "Bomba Pequena",
        "categoria": "bomba",
        "detalhe": "1x"
      },
      {
        "chance": 2,
        "nome": "Chave Mítica",
        "categoria": "caixa",
        "detalhe": "5x"
      },
      {
        "chance": 2,
        "nome": "Bomba Pequena",
        "categoria": "bomba",
        "detalhe": "1x"
      },
      {
        "chance": 1,
        "nome": "Bomba Pequena",
        "categoria": "bomba",
        "detalhe": "1x"
      },
      {
        "chance": 0.8,
        "nome": "Extrator de Ferro Quântico",
        "categoria": "maquina",
        "detalhe": "1x"
      },
      {
        "chance": 0.5,
        "nome": "Bomba Média",
        "categoria": "bomba",
        "detalhe": "1x"
      },
      {
        "chance": 0.5,
        "nome": "Extrator de Ferro Quântico",
        "categoria": "maquina",
        "detalhe": "5x"
      },
      {
        "chance": 0.3,
        "nome": "Bomba Média",
        "categoria": "bomba",
        "detalhe": "1x"
      },
      {
        "chance": 0.25,
        "nome": "Refinador Solar de Ouro",
        "categoria": "maquina",
        "detalhe": "1x"
      },
      {
        "chance": 0.2,
        "nome": "Bomba Média",
        "categoria": "bomba",
        "detalhe": "1x"
      },
      {
        "chance": 0.15,
        "nome": "Refinador Solar de Ouro",
        "categoria": "maquina",
        "detalhe": "5x"
      },
      {
        "chance": 0.1,
        "nome": "Bomba Média",
        "categoria": "bomba",
        "detalhe": "1x"
      },
      {
        "chance": 0.08,
        "nome": "Compressor Estelar de Diamantes",
        "categoria": "maquina",
        "detalhe": "1x"
      },
      {
        "chance": 0.05,
        "nome": "Bomba Grande",
        "categoria": "bomba",
        "detalhe": "1x"
      },
      {
        "chance": 0.03,
        "nome": "Chave Galáctica",
        "categoria": "caixa",
        "detalhe": "1x"
      },
      {
        "chance": 0.02,
        "nome": "Bomba Grande",
        "categoria": "bomba",
        "detalhe": "1x"
      },
      {
        "chance": 0.015,
        "nome": "Chave Galáctica",
        "categoria": "caixa",
        "detalhe": "3x"
      },
      {
        "chance": 0.008,
        "nome": "Matadora de Bosses Lv.02",
        "categoria": "espada",
        "detalhe": "1x"
      },
      {
        "chance": 0.001,
        "nome": "Poção InterGalactica",
        "categoria": "item",
        "detalhe": "1x"
      },
      {
        "chance": 0.0008,
        "nome": "Armadura Cósmica · Capacete",
        "categoria": "item",
        "detalhe": "1 peça"
      },
      {
        "chance": 0.0008,
        "nome": "Armadura Cósmica",
        "categoria": "outro",
        "detalhe": "1x"
      },
      {
        "chance": 0.0008,
        "nome": "Armadura Cósmica",
        "categoria": "outro",
        "detalhe": "1x"
      },
      {
        "chance": 0.0008,
        "nome": "Armadura Cósmica",
        "categoria": "outro",
        "detalhe": "1x"
      },
      {
        "chance": 0.0006,
        "nome": "Skin Picareta de Pedra ",
        "categoria": "skin",
        "detalhe": "1x"
      },
      {
        "chance": 0.0005,
        "nome": "Skin Machado de Pedra ",
        "categoria": "skin",
        "detalhe": "1x"
      },
      {
        "chance": 0.0004,
        "nome": "Skin Picareta de Ferro ",
        "categoria": "skin",
        "detalhe": "1x"
      },
      {
        "chance": 0.0003,
        "nome": "Skin Machado de Ferro ",
        "categoria": "skin",
        "detalhe": "1x"
      },
      {
        "chance": 0.0002,
        "nome": "Skin Picareta de Ouro ",
        "categoria": "skin",
        "detalhe": "1x"
      },
      {
        "chance": 0.00015,
        "nome": "Skin Machado de Ouro ",
        "categoria": "skin",
        "detalhe": "1x"
      },
      {
        "chance": 0.0001,
        "nome": "Limpa Plot",
        "categoria": "outro",
        "detalhe": "1x"
      },
      {
        "chance": 0.00005,
        "nome": "Matadora de Bosses Lv.03",
        "categoria": "espada",
        "detalhe": "1x"
      },
      {
        "chance": 0.00001,
        "nome": "Matadora de Bosses Lv.04",
        "categoria": "espada",
        "detalhe": "1x"
      },
      {
        "chance": 0.000001,
        "nome": "Matadora de Bosses Lv.05",
        "categoria": "espada",
        "detalhe": "1x"
      }
    ]
  }
];
