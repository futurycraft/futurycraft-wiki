---
title: Spawners
description: Os spawners do RankUP: a loja (ySpawnersShop), os limites de compra e como funcionam os geradores (ySpawners).
category: RankUP
icon: 🫧
order: 2
featured: false
updatedAt: 2026-10-08
---

## Spawners do RankUP

Os spawners do RankUP funcionam em dois plugins: a **loja** onde você compra os geradores (com **Money** + **Limites**) e o sistema de **geradores** que entrega os itens por você.

## Como comprar um spawner

Loja: `/sshop` (aliases `/spawnersshop`, `/spawners`, `/shopspawners`, `/spawnershop`, `/shopspawner`).

Cada spawner exige o seu **rank** e o pagamento em **Money** + **1 Limite**. Na loja:

- **Botão direito** → comprar 1.
- **Botão Q** → comprar o máximo (há um delay de 10s entre compras).
- **Botão esquerdo** → escolher a quantia (também dá para digitar no chat).

O **multiplicador** de compra pode chegar até **3x**.

### Os 11 spawners da loja

| Spawner | Libera no rank | Preço (Money) | Valor por drop |
| --- | --- | --- | --- |
| 🐔 Galinha | [Membro](/rankup/ranks) | **R$285.000** | R$40 |
| 🐖 Porco | [Navegador](/rankup/ranks) | **R$500.000** | R$75 |
| 🐄 Vaca | [Capitão](/rankup/ranks) | **R$850.000** | R$95 |
| 🐑 Ovelha | [Coronel](/rankup/ranks) | **R$1.400.000** | R$125 |
| ☠️ Esqueleto | [Marechal](/rankup/ranks) | **R$2.300.000** | R$150 |
| 🕷️ Aranha | [Lorde](/rankup/ranks) | **R$4.000.000** | R$200 |
| 🧙 Bruxa | [Titã](/rankup/ranks) | **R$7.000.000** | R$225 |
| 🧟 Zumbi | [Galáctico](/rankup/ranks) | **R$12.000.000** | R$250 |
| 💥 Creeper | [Celestial](/rankup/ranks) | **R$20.000.000** | R$275 |
| 🔥 Cubo de Magma | [Divino](/rankup/ranks) | **R$35.000.000** | R$300 |
| 👹 Blaze | [Eclipse](/rankup/ranks) | **R$60.000.000** | R$400 |

## Limites de compra

Cada **spawner comprado** gasta **1 Limite**. Você começa com **1 Limite** ao se registrar, e pode ganhar mais de várias formas:

- **Pesca**: a [Pesca](/rankup/sistemas/pesca) é a **melhor fonte de limites** do modo (Limites +1 a +50 nas varas maiores).
- **Caixas**: os [Limites](/rankup/caixas) também saem nas caixas do RankUP.

Os Limites chegam como item *Limite de compra* (bolinha azul com brilho). Para usar:

- **Botão direito** → ativa os limites (+{quantia}).
- **Shift + botão direito** → compacta todos os limites do inventário em 1 só.

> **Comando:** `/limite` (aliases `/limites`).
> `/limite set`, `/limite add`, `/limite remove`, `/limite send`, `/limite top`, `/limite help` e `/limite [player]` para ver o limite de outro jogador.

## Onde colocar os spawners

Os spawners são de **uso exclusivo nos plots** (abas do RankUP). Eles surgem como um **vidro animado com a cabeça do mob** e um **holograma** informando o dono, o stack e o status.

### Como os geradores funcionam (ySpawners)

- **Geração**: cada gerador gera o mob conforme a velocidade dele (a cada X ticks).
- **Estoque de drops**: os drops ficam **armazenados no spawner**. No menu:
  - **Botão esquerdo** → vende os drops por **Money** (valor da tabela acima).
  - **Botão direito** → recolhe os drops no inventário.
- **Stack de spawners**: os geradores **empilham** (padrão até **5.000** por stack) e os mobs empilham em até **5.000.000** de unidades, tudo em um só.
- **Dano**: os mobs de spawner em stack **não atacam** o jogador.
- **Upgrades**: dá para melhorar o gerador — **drops por mob** (+1 por nível, custo em Money) e **velocidade de geração** (reduz o tempo entre mobs, até nível 10).

### Mais limites (stack)

Além do Limite de compra existe o **Limite de stack** (para aumentar o máximo de geradores empilhados) — comprado no menu do próprio spawner (+100 por nível). Ele tem o mesmo comportamento dos outros itens de limite: clique com o botão direito para ativar e **shift + botão direito** para compactar.

## Bônus de venda

- **Bônus de rank**: quanto maior seu [rank](/rankup/ranks), maior o bônus na venda dos drops (de 0,2% no rank 2 até **7%** no rank 30).
- **Bônus VIP**: Fero 2,6% · Ouro 2,7% · Diamante 2,8% · Esmeralda 2,9% · Supremo 3%.
- **Boosters de venda**: booster `+30%` nos drops por 3h, 12h e 24h — comando `/spawnerbooster`.

> **Comando admin:** `/spawner` ou `/spawneradmin`.

Veja [Sistemas](/rankup/sistemas) para os demais sistemas do modo.