---
title: Team
description: Gerencie a equipe da sua ilha: convites, cargos, membros e acesso.
category: SkyBlock
icon: ðŸ‘¥
order: 4.9
featured: false
updatedAt: 2026-01-01
---

O **time** da ilha define quem participa dela e qual acesso cada jogador possui.

## Cargos

Os cargos disponÃ­veis na equipe da ilha sÃ£o:

- **Dono** â€” controla a ilha e gerencia a equipe
- **Membro** â€” integra a ilha normalmente
- **Contribuidor** â€” jogador com cargo de contribuidor (via `trust`)
- **Cooperativo** â€” jogador convidado para o modo cooperativo (via `coop`)

## Comandos do Time

### Principal

```
/island team
```

### Convites

- `/island team invite <jogador>` â€” convida um jogador para membro da ilha (Dono)
- `/island team accept` â€” aceita um convite de ilha (Jogador)
- `/island team reject` â€” rejeita um convite (Jogador)

### Gerenciar Membros

- `/island team kick <jogador>` â€” remove um jogador da equipe (Dono)
- `/island team promote <jogador>` â€” promove um jogador a cargo superior (Dono)
- `/island team demote <jogador>` â€” diminui o cargo de um jogador (Dono)
- `/island team setowner <jogador>` â€” define um novo dono (Dono)
- `/island team leave` â€” sai da equipe da ilha (Jogador)

### Cargos

- `/island team trust <jogador>` â€” dÃ¡ o cargo de contribuidor (Dono)
- `/island team untrust <jogador>` â€” remove o cargo de contribuidor (Dono)

### Cooperativo

- `/island team coop <jogador>` â€” convida um jogador para cooperativo (Dono)
- `/island team uncoop <jogador>` â€” remove um jogador do cooperativo (Dono)

## Bloqueio de Acesso

Controle quem pode acessar sua ilha:

- `/island ban <jogador>` â€” bane um jogador da sua ilha (Dono)
- `/island unban <jogador>` â€” desbane um jogador (Dono)
- `/island banlist` â€” lista os jogadores banidos (Dono)

> Todos os comandos do time podem ser usados com o atalho `/is team ...`, por exemplo `/is team invite <jogador>`.