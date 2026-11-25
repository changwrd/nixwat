"use client";

import { useState } from "react";
import Link from "next/link";

// Mock Data
// Mock Data for different timeframes
const dataAllTime = [
  {
    rank: 1,
    address: "0x4a...f9b2",
    name: "Diamond_Hand_77",
    wins: 342,
    pnl: "+124.5",
    isYou: false,
  },
  {
    rank: 2,
    address: "0x1c...e4a1",
    name: "SolanaWhale",
    wins: 298,
    pnl: "+98.2",
    isYou: false,
  },
  {
    rank: 3,
    address: "0x9f...b3c8",
    name: "NixwatGod",
    wins: 276,
    pnl: "+87.1",
    isYou: false,
  },
  {
    rank: 4,
    address: "0x7d...a2f5",
    name: "TraderJoe",
    wins: 210,
    pnl: "+54.3",
    isYou: true,
  },
  {
    rank: 5,
    address: "0x3e...c1d9",
    name: "CryptoKing",
    wins: 198,
    pnl: "+42.8",
    isYou: false,
  },
  {
    rank: 6,
    address: "0x8b...f4e2",
    name: "MoonShot",
    wins: 156,
    pnl: "+31.5",
    isYou: false,
  },
  {
    rank: 7,
    address: "0x2a...d7c3",
    name: "DegenTrader",
    wins: 142,
    pnl: "+22.1",
    isYou: false,
  },
];

const dataThisWeek = [
  {
    rank: 1,
    address: "0x9f...b3c8",
    name: "NixwatGod",
    wins: 42,
    pnl: "+28.5",
    isYou: false,
  },
  {
    rank: 2,
    address: "0x4a...f9b2",
    name: "Diamond_Hand_77",
    wins: 38,
    pnl: "+22.1",
    isYou: false,
  },
  {
    rank: 3,
    address: "0x7d...a2f5",
    name: "TraderJoe",
    wins: 31,
    pnl: "+18.4",
    isYou: true,
  }, // You are Top 3 this week!
  {
    rank: 4,
    address: "0x1c...e4a1",
    name: "SolanaWhale",
    wins: 29,
    pnl: "+12.9",
    isYou: false,
  },
  {
    rank: 5,
    address: "0x3e...c1d9",
    name: "CryptoKing",
    wins: 24,
    pnl: "+8.2",
    isYou: false,
  },
  {
    rank: 6,
    address: "0x8b...f4e2",
    name: "MoonShot",
    wins: 18,
    pnl: "+4.5",
    isYou: false,
  },
  {
    rank: 7,
    address: "0x2a...d7c3",
    name: "DegenTrader",
    wins: 12,
    pnl: "+2.1",
    isYou: false,
  },
];

const dataToday = [
  {
    rank: 1,
    address: "0x3e...c1d9",
    name: "CryptoKing",
    wins: 8,
    pnl: "+5.2",
    isYou: false,
  },
  {
    rank: 2,
    address: "0x7d...a2f5",
    name: "TraderJoe",
    wins: 7,
    pnl: "+4.8",
    isYou: true,
  },
  {
    rank: 3,
    address: "0x8b...f4e2",
    name: "MoonShot",
    wins: 6,
    pnl: "+3.1",
    isYou: false,
  },
  {
    rank: 4,
    address: "0x9f...b3c8",
    name: "NixwatGod",
    wins: 5,
    pnl: "+2.5",
    isYou: false,
  },
  {
    rank: 5,
    address: "0x4a...f9b2",
    name: "Diamond_Hand_77",
    wins: 4,
    pnl: "+1.9",
    isYou: false,
  },
  {
    rank: 6,
    address: "0x1c...e4a1",
    name: "SolanaWhale",
    wins: 3,
    pnl: "+1.2",
    isYou: false,
  },
  {
    rank: 7,
    address: "0x2a...d7c3",
    name: "DegenTrader",
    wins: 2,
    pnl: "+0.5",
    isYou: false,
  },
];

export default function Leaderboard() {
  const [timeFilter, setTimeFilter] = useState("all");

  // Dynamic Data based on filter
  // Select dataset based on filter
  const getData = () => {
    if (timeFilter === "week") return dataThisWeek;
    if (timeFilter === "today") return dataToday;
    return dataAllTime;
  };

  const currentData = getData();
  const topThree = currentData.slice(0, 3);
  const restOfList = currentData.slice(3);

  return (
    <main className="min-h-screen bg-nix-void p-6 md:p-12 relative pb-32 mb-21">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 relative z-10">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-nix-text mb-4 tracking-tighter">
            HALL OF FAME
          </h1>
          <p className="text-nix-muted font-mono max-w-2xl mx-auto">
            The most ruthless traders on the Nixwat network. Ranked by total
            P&L. Only the top 100 make the cut.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-16 relative z-10">
          {[
            { id: "all", label: "All Time" },
            { id: "week", label: "This Week" },
            { id: "today", label: "Today" },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setTimeFilter(filter.id)}
              className={`font-mono text-sm px-6 py-2 rounded-full transition-all ${
                timeFilter === filter.id
                  ? "bg-nix-cyan text-nix-void font-bold"
                  : "bg-nix-carbon text-nix-muted border border-nix-border hover:text-nix-text"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* --- PODIUM (TOP 3) --- */}
        <div className="flex flex-col md:flex-row justify-center items-end gap-6 mb-16 relative z-10">
          {/* Rank 2 - Silver */}
          <div className="w-full md:w-64 order-2 md:order-1">
            <div className="bg-nix-carbon border border-gray-400/30 rounded-t-xl p-6 text-center relative mt-8">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-nix-void border-2 border-gray-400 flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(156,163,175,0.2)]">
                🥈
              </div>
              <div className="mt-6">
                <h3 className="font-display text-xl font-bold text-nix-text">
                  {topThree[1].name}
                </h3>
                <p className="text-xs font-mono text-nix-muted mb-4">
                  {topThree[1].address}
                </p>
                <div className="bg-nix-void p-3 rounded-lg border border-nix-border">
                  <p className="text-xs font-mono text-nix-muted">Total P&L</p>
                  <p className="font-display font-bold text-gray-300 text-xl">
                    {topThree[1].pnl} SOL
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rank 1 - Gold */}
          <div className="w-full md:w-72 order-1 md:order-2">
            <div className="bg-gradient-to-b from-nix-carbon to-nix-void border border-yellow-500/50 rounded-t-xl p-8 text-center relative mt-12 shadow-[0_0_40px_rgba(234,179,8,0.1)]">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-nix-void border-2 border-yellow-500 flex items-center justify-center text-3xl shadow-[0_0_30px_rgba(234,179,8,0.4)]">
                🥇
              </div>
              <div className="mt-8">
                <h3 className="font-display text-2xl font-bold text-yellow-500">
                  {topThree[0].name}
                </h3>
                <p className="text-xs font-mono text-nix-muted mb-4">
                  {topThree[0].address}
                </p>
                <div className="bg-nix-void p-4 rounded-lg border border-yellow-500/30">
                  <p className="text-xs font-mono text-nix-muted">Total P&L</p>
                  <p className="font-display font-bold text-yellow-500 text-2xl">
                    {topThree[0].pnl} SOL
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rank 3 - Bronze */}
          <div className="w-full md:w-64 order-3 md:order-3">
            <div className="bg-nix-carbon border border-amber-700/30 rounded-t-xl p-6 text-center relative mt-8">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-nix-void border-2 border-amber-700 flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(180,83,9,0.2)]">
                🥉
              </div>
              <div className="mt-6">
                <h3 className="font-display text-xl font-bold text-nix-text">
                  {topThree[2].name}
                </h3>
                <p className="text-xs font-mono text-nix-muted mb-4">
                  {topThree[2].address}
                </p>
                <div className="bg-nix-void p-3 rounded-lg border border-nix-border">
                  <p className="text-xs font-mono text-nix-muted">Total P&L</p>
                  <p className="font-display font-bold text-amber-600 text-xl">
                    {topThree[2].pnl} SOL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- MAIN TABLE (RANK 4-10) --- */}
        <div className="bg-nix-carbon border border-nix-border rounded-2xl overflow-hidden shadow-2xl relative z-10">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-nix-border bg-nix-void/50">
                <th className="p-4 font-mono text-xs text-nix-muted uppercase w-16 text-center">
                  Rank
                </th>
                <th className="p-4 font-mono text-xs text-nix-muted uppercase">
                  Trader
                </th>
                <th className="p-4 font-mono text-xs text-nix-muted uppercase text-center">
                  Wins
                </th>
                <th className="p-4 font-mono text-xs text-nix-muted uppercase text-right">
                  Total P&L
                </th>
              </tr>
            </thead>
            <tbody className="font-mono text-sm">
              {restOfList.map((user) => (
                <tr
                  key={user.rank}
                  className={`border-b border-nix-border/50 transition-colors ${
                    user.isYou
                      ? "bg-nix-cyan/5 hover:bg-nix-cyan/10 border-l-2 border-l-nix-cyan"
                      : "hover:bg-nix-void/30"
                  }`}
                >
                  <td className="p-4 text-center font-bold text-nix-muted">
                    {user.rank}
                  </td>

                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                          user.isYou
                            ? "bg-nix-cyan text-nix-void"
                            : "bg-nix-border text-nix-text"
                        }`}
                      >
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div
                          className={`font-bold ${user.isYou ? "text-nix-cyan" : "text-nix-text"}`}
                        >
                          {user.name}{" "}
                          {user.isYou && (
                            <span className="text-[10px] ml-2 bg-nix-cyan text-nix-void px-1.5 py-0.5 rounded">
                              YOU
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-nix-muted">
                          {user.address}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="p-4 text-center text-nix-text">{user.wins}</td>

                  <td className="p-4 text-right font-bold text-nix-cyan flex justify-end items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#9945FF] to-[#14F195] flex items-center justify-center text-white text-[10px] font-bold">
                      S
                    </span>
                    {user.pnl}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="mt-12 mb-32 text-center relative z-10">
          <p className="text-nix-muted font-mono mb-4">
            Think you can climb higher?
          </p>
          <Link
            href="/arena"
            className="inline-block bg-nix-cyan text-nix-void font-bold font-mono text-lg px-8 py-3 rounded hover:bg-white transition-all duration-300"
          >
            ENTER THE ARENA
          </Link>
        </div>
      </div>

      {/* --- STICKY "YOUR RANK" BAR --- */}
      <div className="fixed bottom-0 left-0 w-full bg-nix-carbon border-t border-nix-cyan/30 p-4 z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-nix-cyan text-nix-void flex items-center justify-center font-bold font-display">
              4
            </div>
            <div>
              <p className="font-mono text-sm text-nix-cyan font-bold">
                Your Rank
              </p>
              <p className="font-mono text-xs text-nix-muted">
                Top 4% of all traders
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 font-mono text-sm">
            <div>
              <p className="text-nix-muted text-xs">Your P&L</p>
              <p className="text-nix-cyan font-bold">+54.3 SOL</p>
            </div>
            <div>
              <p className="text-nix-muted text-xs">Next Rank</p>
              <p className="text-nix-text font-bold">
                -33.8 SOL to catch NixwatGod
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
