<div align="center">
  <img src="https://via.placeholder.com/150x150/00F0FF/0A0A0B?text=N" alt="Nixwat Logo" width="100" />
  <h1>NIXWAT</h1>
  <p><strong>Real-Time Trading Duels on Solana.</strong></p>
  <p>The world's first 60-second, high-frequency trading esport. Built for the MagicBlock Solana Blitz v10 Hackathon.</p>

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-00F0FF?style=for-the-badge)](https://nixwat.vercel.app)
[![Demo Video](https://img.shields.io/badge/Demo_Video-YouTube-FF0055?style=for-the-badge)](https://youtube.com/placeholder)
[![Track](https://img.shields.io/badge/Track-Entertainment_Finance-white?style=for-the-badge)](#)

</div>

---

## 📖 Table of Contents

1. [The Problem](#-the-problem)
2. [The Nixwat Solution](#-the-nixwat-solution)
3. [MagicBlock Integration (Technical Depth)](#-magicblock-integration-technical-depth)
4. [System Architecture Flow](#-system-architecture-flow)
5. [Features & Tech Stack](#-features--tech-stack)
6. [User Journey Flowchart](#-user-journey-flowchart)
7. [Running Locally](#-running-locally)
8. [Demo Video Script](#-demo-video-script)

---

## 🚨 The Problem

Traditional on-chain trading is slow, expensive, and boring to watch.

- **Latency:** Base-layer Solana transactions take 400ms+, making "scalping" or high-frequency trading impossible.
- **Cost:** Every buy/sell action incurs gas fees, eating into profits during short-term trades.
- **Privacy:** All positions are public. Copy-trading and front-running are rampant.
- **Engagement:** Trading is a solitary experience. There is no "esport" element.

## 💡 The Nixwat Solution

**Nixwat** gamifies trading into a 60-second, head-to-head duel. Two players stake SOL, a random asset is selected, and they battle to achieve the highest P&L within one minute.

It is **Entertainment Finance** at its core—combining the thrill of a video game with the stakes of a trading terminal.

---

## ⚡ MagicBlock Integration (Technical Depth)

Nixwat is not just a UI wrapped around a DEX. It relies entirely on MagicBlock's infrastructure to function as a real-time game.

| MagicBlock Technology                | How Nixwat Uses It                                                                                         | Why It's Critical                                                                                                                               |
| :----------------------------------- | :--------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Ephemeral Rollups (ER)**           | All trades during the 60-second duel are executed on the ER.                                               | Enables **zero gas fees** and **sub-millisecond latency**. Players can click "Long" or "Short" rapidly without waiting for block confirmations. |
| **Private Ephemeral Rollups**        | The opponent's live P&L, position size, and active trades are hidden in the Private ER.                    | Prevents **copy-trading and front-running**. The duel is purely based on skill, not reaction time to the opponent's moves.                      |
| **Verifiable Random Function (VRF)** | At the start of every match, the VRF selects a random asset (e.g., SOL, BONK, WIF) from a predefined pool. | Guarantees **provably fair** asset selection. Neither the players nor the developers can manipulate the outcome.                                |

---

## 🏗 System Architecture Flow

```text
[Player A] & [Player B]
       │
       ▼
[Matchmaking Queue] (Next.js API / Supabase)
       │
       ▼
[MagicBlock VRF] ──► Selects Random Asset (e.g., WIF/USD)
       │
       ▼
[Escrow Contract] ──► Locks Stakes (e.g., 0.1 SOL each)
       │
       ▼
┌─────────────────────────────────────────────────────────┐
│                 EPHEMERAL ROLLUP SESSION                │
│                                                         │
│  [Player A] ──► LONG/SHORT (Zero Fee, 0.02ms latency)   │
│  [Player B] ──► LONG/SHORT (Zero Fee, 0.02ms latency)   │
│                                                         │
│  * Positions & PnL are HIDDEN via Private ER *          │
│                                                         │
└─────────────────────────────────────────────────────────┘
       │
       ▼ (Timer Hits 0)
[Private ER Reveals State]
       │
       ▼
[Settlement Contract] ──► Distributes Winnings on Solana Base Layer
       │
       ▼
[Winner Wallet] (Instant Payout)
```
