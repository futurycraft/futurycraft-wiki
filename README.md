# Wiki FuturyCraft

Central de conhecimento oficial do servidor **FuturyCraft** (SkyBlock, RankUP, economia, encantamentos, regras e comandos).

- **Site:** https://wiki.futurycraft.com.br
- **Tecnologia:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Markdown (`marked`)

---

## Scripts

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Sobe o ambiente de desenvolvimento |
| `npm run build` | Gera o build de produção (SSG de todas as páginas) |
| `npm start` | Serve o build de produção |
| `npm run lint` | Roda o linter (ESLint / Next) |
| `npm run typecheck` | Verifica os tipos com `tsc --noEmit` |

Antes de enviar qualquer alteração de conteúdo ou código: `npm run typecheck` e, se passar, `npm run build`.

---

## Como as páginas funcionam

A Wiki é dividida em **dois tipos de rota**:

### 1. Rotas estáticas (`src/app/**/page.tsx`)

Páginas com layout e componentes próprios: hubs (`/comecando`, `/skyblock`, `/geral`), buscadores de comandos e o catálogo de encantamentos.

### 2. Rotas de conteúdo (`content/*.md` → rota `[...slug]`)

Todo arquivo `.md` dentro de `content/` vira uma página automaticamente:

- `content/skyblock/ilha.md` → `/skyblock/ilha`
- `content/skyblock/ilha/nivel.md` → `/skyblock/ilha/nivel` (subpastas criam sub-rotas)
- `content/geral/regras.md` → `/geral/regras`

**Frontmatter obrigatório por arquivo:**

```yaml
---
title: Nome da página
description: Resumo exibido nos cards e no SEO.
category: SkyBlock        # rótulo da categoria (chip da página)
icon: 🏝️                 # ícone usado nos cards
order: 2                  # posição relativa na categoria (aceita decimais, ex.: 2.1)
featured: true | false    # se aparece em destaque
updatedAt: 2026-01-01
---
```

TOC, breadcrumbs, cards relacionados e navegação anterior/próximo são gerados automaticamente a partir do Markdown.

### Rotas que não podem existir como conteúdo

As seguintes rotas são **reservadas** por páginas estáticas e não podem ser criadas via `content/`:

`/`, `/comecando`, `/skyblock`, `/geral`, `/skyblock/comandos`, `/geral/comandos`, `/geral/vips`, `/skyblock/encantamentos`, `/skyblock/encantamentos/:slug`, `/search-index`, `/robots.txt`, `/sitemap.xml`.

---

## Inventário completo das páginas

### Começando

| Rota | Título | Status |
| --- | --- | --- |
| `/comecando` | Começando (hub: como entrar, Java/Bedrock, loja e Discord) | ✓ |
| `/comecando` | Começando (entrada da categoria, com os 5 conteúdos + dados de conexão) | ✓ |
| `/comecando/bem-vindo-a-wiki` | Bem-vindo à Wiki — como navegar e o que encontrar | ✓ |
| `/comecando/como-fazer-login` | Como Fazer Login — registro, login e verificação anti-bot | ✓ |

> A categoria Começando também navega para as páginas existentes: [Regras do Servidor](/geral/regras), [Entrar para a Equipe](/geral/equipe) e [Programa de Criadores](/geral/criadores) (sem duplicar rotas).

### SkyBlock

#### Itens diretos da categoria

| Rota | Título | Status |
| --- | --- | --- |
| `/skyblock` | SkyBlock — Visão geral (mapa do modo com atalhos por área) | ✓ |
| `/skyblock/comojogar` | Como Jogar — criar ilha, tipos de ilha, painel e missões | ✓ |
| `/skyblock/votacao` | Vote no Servidor | ✓ |
| `/skyblock/economia` | Economia — money, cash e tops | ✓ |
| `/skyblock/progressao` | Progressão — evolução, ilha e farms | ✓ |
| `/skyblock/faq` | FAQ do SkyBlock | ✓ |
| `/skyblock/textura-do-servidor` | Textura do Servidor — Java, Bedrock e armaduras | ✓ |

#### Ilha

| Rota | Título | Status |
| --- | --- | --- |
| `/skyblock/ilha` | Inicio (hub dos sistemas da ilha) | ✓ |
| `/skyblock/ilha/nivel` | Nível da Ilha | ✓ |
| `/skyblock/ilha/warps` | Warps | ✓ |
| `/skyblock/ilha/biomas` | Biomas | ✓ |
| `/skyblock/ilha/challenges` | Challenges (missões da ilha) | ✓ |
| `/skyblock/ilha/gerador` | Gerador | ⏳ aguardando dados |
| `/skyblock/ilha/limits` | Limits | ✓ |
| `/skyblock/ilha/value` | Value | ⏳ aguardando dados |
| `/skyblock/ilha/settings` | Settings | ✓ |
| `/skyblock/ilha/team` | Team (equipe da ilha) | ✓ |

#### Progressão

| Rota | Título | Status |
| --- | --- | --- |
| `/skyblock/missoes` | Missões — desafios, missões do servidor e secundárias | ✓ |
| `/skyblock/spawners` | Spawners — drop, limites por VIP e upgrades | ✓ (parcial) |
| `/skyblock/battlepass` | Passe de Batalha — temporadas | ✓ (parcial) |
| `/skyblock/eventos` | Eventos — horários, Dragão e Pinhata | ✓ (parcial) |
| `/skyblock/dragao` | Dragão | ⏳ em breve |
| `/skyblock/shop` | Shop | ⏳ em breve |
| `/skyblock/kits` | Kits | ⏳ em breve |
| `/skyblock/mercado-galactico` | Mercado Galáctico | ⏳ em breve |

#### Sistemas

| Rota | Título | Status |
| --- | --- | --- |
| `/skyblock/minions` | Minions — limites por VIP | ✓ (parcial) |
| `/skyblock/encantamentos` | Encantamentos — como funciona, como usar e catálogo (284 encantamentos) | ✓ |
| `/skyblock/encantamentos/:slug` | Página individual de cada encantamento (gerada dinamicamente) | ✓ |
| `/skyblock/jobs` | Jobs (profissões) | ✓ (parcial) |
| `/skyblock/mcmmo` | mcMMO — habilidades | ✓ (parcial) |
| `/skyblock/crates` | Crates | ✓ (parcial) |
| `/skyblock/airdrops` | Airdrops | ✓ (parcial) |
| `/skyblock/reliquias` | Relíquias | ✓ (parcial) |
| `/skyblock/torneios` | Torneios | ✓ (parcial) |
| `/skyblock/parkour` | Parkour | ✓ (parcial) |
| `/skyblock/crafting` | Guias de Crafting — vegetais, comidas, sementes e itens principais | ✓ (parcial) |
| `/skyblock/crafting/vegetais` | Receitas de vegetais | ✓ (parcial) |
| `/skyblock/crafting/comidas` | Receitas de comidas | ✓ (parcial) |
| `/skyblock/crafting/sementes` | Receitas de sementes | ✓ (parcial) |
| `/skyblock/crafting/itens-principais` | Receitas de itens principais | ✓ (parcial) |

#### Economia

| Rota | Título | Status |
| --- | --- | --- |
| `/skyblock/loteria` | Loteria — como funciona, apostas e prêmios | ✓ |

#### Recompensas

| Rota | Título | Status |
| --- | --- | --- |
| `/skyblock/recompensas` | Recompensas — votação, kits VIP, diárias e eventos | ✓ (parcial) |
| `/skyblock/rankings` | Rankings — nível de ilha, money e cash | ✓ (parcial) |

#### Referência

| Rota | Título | Status |
| --- | --- | --- |
| `/skyblock/comandos` | Comandos do SkyBlock (busca e filtros por categoria) | ✓ |

### Geral

| Rota | Título | Status |
| --- | --- | --- |
| `/geral` | Geral (hub com 13 atalhos) | ✓ |
| `/geral/comandos` | Comandos Gerais — menu, loja, economia, teleporte e utilidades | ✓ |
| `/geral/regras` | Regras — oficiais e punições | ✓ |
| `/geral/suporte` | Suporte — abrir ticket no Discord | ✓ |
| `/geral/faq` | Perguntas Frequentes (FAQ) | ✓ |
| `/geral/discord` | Discord oficial | ✓ |
| `/geral/contato` | Contato — canais oficiais | ✓ |
| `/geral/loja` | Loja — benefícios, VIPs e compras | ✓ |
| `/geral/vips` | VIPs — kits, comandos e benefícios de cada VIP | ✓ |
| `/geral/equipe` | Entrar para a Equipe (STAFF) | ✓ |
| `/geral/criadores` | Programa de Criadores (YouTubers e streamers) | ✓ |
| `/geral/status` | Status — dados de conexão e status do servidor | ✓ (parcial) |
| `/geral/itens` | Itens — referência de itens personalizados | ✓ (parcial) |
| `/geral/termos` | Termos — glossário de termos e siglas | ✓ (parcial) |

**Legenda:** `✓` documentada · `✓ (parcial)` documentada com algum trecho "em breve" pendente · `⏳ aguardando dados` sistema existe mas ainda não documentado no projeto (não inventar conteúdo).

---

## Parâmetros de URL especiais

- `/skyblock/comandos?cat=Ilha` — abre a lista de comandos já filtrada pela categoria **Ilha**. Também suporta `?comando=/alquimista`, que rola/ancla até o comando informado.
- `/skyblock/encantamentos?raridade=...` — filtros do catálogo de encantamentos (via componentes client).

---

## Infraestrutura e rotas técnicas

| Rota | Tipo | Descrição |
| --- | --- | --- |
| `/robots.txt` | `robots.ts` | Permissões de crawling |
| `/sitemap.xml` | `sitemap.ts` | Gera o sitemap com todas as rotas de conteúdo |
| `/search-index` | `route.ts` | API/JSON com o índice de busca (título, descrição e conteúdo dos artigos) |
| `/[...slug]` | `page.tsx` | Rota catch-all que renderiza os artigos do `content/` |
| `/_not-found` | `not-found.tsx` | Página 404 |

---

## Estrutura de dados auxiliares (`src/data/`)

| Arquivo | Conteúdo |
| --- | --- |
| `comandos.ts` | Lista de comandos com `comando`, `descricao`, `uso`, `categoria`, `permissao`, `aliases` e `exemplo` |
| `season.ts` | Temporada atual (versão, status) usada na home |
| `categories.ts` | Categorias e destaques da home |
| `enchants.ts` | Catalog de encantamentos (284) usado no `/skyblock/encantamentos` |

## Componentes principais (`src/components/`)

- `sidebar.tsx` — accordion de navegação (auto-abre o grupo da página atual, funcional no mobile)
- `commands-browser.tsx` / `command-card.tsx` — buscador de comandos com filtros
- `enchants-catalog.tsx` — catálogo pesquisável/filtrável de encantamentos
- `doc-layout.tsx` / `article-layout.tsx` — layout das artes e dos artigos (TOC, breadcrumbs, prévia/próximo)
- `header.tsx` — header com drawer mobile
- `search-button.tsx` — busca (Ctrl+K)

## Convenções ao editar

- Nunca inventar valores, comandos, limites ou mecânicas: documente apenas o que existir no projeto, na página de comandos ou em conteúdo já publicado.
- Conteúdo novo não confirmado deve ficar marcado como "em breve" no próprio arquivo.
- `npx`/scripts de validação: `npm run typecheck` + `npm run build` antes de finalizar.