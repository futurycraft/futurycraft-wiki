---
title: Team
description: Gerencie a equipe da sua ilha: convites, cargos, membros e acesso.
category: SkyBlock
icon: 👥
order: 4.8
featured: false
updatedAt: 2026-01-01
---

O **time** da ilha define quem participa dela e qual acesso cada jogador possui.

## Cargos

Os cargos disponíveis na equipe da ilha são:

- **Dono** — controla a ilha e gerencia a equipe
- **Membro** — integra a ilha normalmente
- **Contribuidor** — jogador com cargo de contribuidor (via `trust`)
- **Cooperativo** — jogador convidado para o modo cooperativo (via `coop`)

## Comandos do Time

### Principal

```
/island team
```

### Convites

- `/island team invite <jogador>` — convida um jogador para membro da ilha (Dono)
- `/island team accept` — aceita um convite de ilha (Jogador)
- `/island team reject` — rejeita um convite (Jogador)

### Gerenciar Membros

- `/island team kick <jogador>` — remove um jogador da equipe (Dono)
- `/island team promote <jogador>` — promove um jogador a cargo superior (Dono)
- `/island team demote <jogador>` — diminui o cargo de um jogador (Dono)
- `/island team setowner <jogador>` — define um novo dono (Dono)
- `/island team leave` — sai da equipe da ilha (Jogador)

### Cargos

- `/island team trust <jogador>` — dá o cargo de contribuidor (Dono)
- `/island team untrust <jogador>` — remove o cargo de contribuidor (Dono)

### Cooperativo

- `/island team coop <jogador>` — convida um jogador para cooperativo (Dono)
- `/island team uncoop <jogador>` — remove um jogador do cooperativo (Dono)

## Bloqueio de Acesso

Controle quem pode acessar sua ilha:

- `/island ban <jogador>` — bane um jogador da sua ilha (Dono)
- `/island unban <jogador>` — desbane um jogador (Dono)
- `/island banlist` — lista os jogadores banidos (Dono)

> Todos os comandos do time podem ser usados com o atalho `/is team ...`, por exemplo `/is team invite <jogador>`.