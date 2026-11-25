"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Arena() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "searching" | "found" | "vrf">(
    "idle",
  );
  const [selectedStake, setSelectedStake] = useState(0.1);

  // Simulate the matchmaking -> VRF flow
  useEffect(() => {
    if (status === "searching") {
      const timer = setTimeout(() => setStatus("found"), 3000);
      return () => clearTimeout(timer);
    }
    if (status === "found") {
      const timer = setTimeout(() => setStatus("vrf"), 2000);
      return () => clearTimeout(timer);
    }
    if (status === "vrf") {
      const timer = setTimeout(() => {
        router.push("/duel/demo-match-123");
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [status, router]);

  return (
    <main className="min-h-screen bg-nix-void p-6 md:p-12 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-nix-text mb-2">
            The Arena
          </h1>
          <p className="text-nix-muted font-mono">
            Stake your SOL. Out-trade your opponent. Take the pot.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT COLUMN: Main Matchmaking Terminal */}
          <div className="lg:col-span-2">
            {/* IDLE STATE */}
            {status === "idle" && (
              <div className="bg-nix-carbon border border-nix-border rounded-2xl p-8 md:p-12 animate-in fade-in zoom-in duration-500">
                <h2 className="font-display text-3xl font-bold text-nix-text mb-6">
                  Select Your Stakes
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {[
                    { amount: 0.1, label: "Rookie" },
                    { amount: 0.5, label: "Pro" },
                    { amount: 1.0, label: "High Roller" },
                  ].map((tier) => (
                    <button
                      key={tier.amount}
                      onClick={() => setSelectedStake(tier.amount)}
                      className={`p-6 rounded-xl border transition-all text-left relative overflow-hidden ${
                        selectedStake === tier.amount
                          ? "bg-nix-cyan/10 border-nix-cyan shadow-[0_0_20px_rgba(0,240,255,0.1)]"
                          : "bg-nix-void border-nix-border hover:border-nix-muted"
                      }`}
                    >
                      <p
                        className={`text-xs font-mono uppercase tracking-wider mb-2 ${selectedStake === tier.amount ? "text-nix-cyan" : "text-nix-muted"}`}
                      >
                        {tier.label}
                      </p>
                      <p
                        className={`text-3xl font-display font-bold ${selectedStake === tier.amount ? "text-nix-cyan" : "text-nix-text"}`}
                      >
                        {tier.amount} SOL
                      </p>
                      <p className="text-xs font-mono text-nix-muted mt-2">
                        Win: +{(tier.amount * 1.95).toFixed(2)} SOL
                      </p>
                    </button>
                  ))}
                </div>

                <div className="bg-nix-void border border-nix-border rounded-xl p-4 mb-8 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-nix-cyan"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-mono text-sm text-nix-muted">
                      Protocol Fee (2.5%)
                    </span>
                  </div>
                  <span className="font-mono text-sm text-nix-text">
                    {(selectedStake * 0.025).toFixed(3)} SOL
                  </span>
                </div>

                <button
                  onClick={() => setStatus("searching")}
                  className="w-full bg-nix-cyan text-nix-void font-bold font-mono text-xl py-5 rounded-xl hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                >
                  FIND OPPONENT
                </button>
              </div>
            )}

            {/* SEARCHING STATE */}
            {status === "searching" && (
              <div className="bg-nix-carbon border border-nix-border rounded-2xl p-12 text-center flex flex-col items-center justify-center min-h-[500px]">
                <div className="relative w-32 h-32 mb-8">
                  <div className="absolute inset-0 border-4 border-nix-border rounded-full" />
                  <div className="absolute inset-0 border-4 border-t-nix-cyan rounded-full animate-spin" />
                  <div className="absolute inset-4 border-4 border-t-nix-magenta rounded-full animate-spin-slow" />
                </div>
                <h2 className="font-display text-3xl font-bold text-nix-text mb-2">
                  Scanning Network...
                </h2>
                <p className="text-nix-muted font-mono mb-6">
                  Looking for an opponent at {selectedStake} SOL
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-nix-magenta font-mono text-sm hover:underline"
                >
                  Cancel Search
                </button>
              </div>
            )}

            {/* FOUND STATE */}
            {status === "found" && (
              <div className="bg-nix-carbon border border-nix-cyan/50 rounded-2xl p-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-500 min-h-[500px] flex flex-col justify-center">
                <div className="w-24 h-24 bg-nix-cyan rounded-full mx-auto mb-6 flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.5)]">
                  <svg
                    className="w-12 h-12 text-nix-void"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="font-display text-4xl font-bold text-nix-text mb-2">
                  Opponent Found
                </h2>
                <p className="text-nix-muted font-mono mb-8">
                  Diamond_Hand_77 • Rank: Diamond II
                </p>
                <div className="bg-nix-void border border-nix-border rounded-lg p-4 inline-block mx-auto min-w-[200px]">
                  <p className="text-sm font-mono text-nix-muted mb-1">
                    Locked Stake
                  </p>
                  <p className="text-3xl font-display font-bold text-nix-cyan">
                    {selectedStake} SOL
                  </p>
                </div>
              </div>
            )}

            {/* VRF REVEAL STATE */}
            {status === "vrf" && (
              <div className="bg-nix-carbon border border-nix-magenta/50 rounded-2xl p-12 text-center animate-in zoom-in duration-500 min-h-[500px] flex flex-col justify-center">
                <p className="text-nix-muted font-mono text-sm mb-4 uppercase tracking-widest">
                  MagicBlock VRF Executing
                </p>
                <h2 className="font-display text-5xl font-bold text-nix-text mb-8 animate-pulse">
                  Selecting Asset...
                </h2>

                <div className="h-40 bg-nix-void border border-nix-border rounded-xl overflow-hidden relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-b from-nix-void via-transparent to-nix-void z-10 pointer-events-none" />
                  <h3 className="font-display text-7xl font-bold text-nix-magenta animate-bounce">
                    WIF/USD
                  </h3>
                </div>
                <p className="mt-8 text-nix-cyan font-mono text-sm animate-pulse">
                  Entering Ephemeral Rollup...
                </p>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Sidebar */}
          <div className="space-y-8">
            {/* Top Players in Queue */}
            <div className="bg-nix-carbon border border-nix-border rounded-2xl p-6">
              <h3 className="font-display text-xl font-bold text-nix-text mb-4 flex items-center gap-2">
                In Queue
                <span className="w-2 h-2 rounded-full bg-nix-cyan animate-pulse"></span>
              </h3>
              <div className="space-y-3">
                {[
                  { name: "SolanaWhale", rank: "Master", stake: "1.0" },
                  { name: "NixwatGod", rank: "Diamond I", stake: "0.5" },
                  { name: "DegenTrader", rank: "Platinum", stake: "0.1" },
                  { name: "MoonShot", rank: "Gold", stake: "0.1" },
                ].map((player, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center bg-nix-void border border-nix-border p-3 rounded-lg"
                  >
                    <div>
                      <p className="font-mono text-sm text-nix-text">
                        {player.name}
                      </p>
                      <p className="font-mono text-xs text-nix-muted">
                        {player.rank}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-nix-cyan bg-nix-cyan/10 px-2 py-1 rounded">
                      {player.stake} SOL
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Arena Feed */}
            <div className="bg-nix-carbon border border-nix-border rounded-2xl p-6">
              <h3 className="font-display text-xl font-bold text-nix-text mb-4">
                Live Arena
              </h3>
              <div className="space-y-4">
                {[
                  {
                    p1: "0x4a...f9b2",
                    p2: "0x1c...e4a1",
                    asset: "SOL",
                    stake: "0.5",
                    color: "from-[#9945FF] to-[#14F195]",
                    symbol: "S",
                  },
                  {
                    p1: "0x9f...b3c8",
                    p2: "0x7d...a2f5",
                    asset: "WIF",
                    stake: "0.1",
                    color: "bg-[#F5A623]",
                    symbol: "W",
                  },
                  {
                    p1: "0x3e...c1d9",
                    p2: "0x8b...f4e2",
                    asset: "BONK",
                    stake: "1.0",
                    color: "bg-[#F7931A]",
                    symbol: "B",
                  },
                ].map((match, i) => (
                  <div
                    key={i}
                    className="bg-nix-void border border-nix-border p-3 rounded-lg relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-nix-cyan to-nix-magenta opacity-50" />

                    {/* Header: Players */}
                    <div className="flex justify-between text-xs font-mono mb-3">
                      <span className="text-nix-text">{match.p1}</span>
                      <span className="text-nix-muted text-[10px] uppercase">
                        vs
                      </span>
                      <span className="text-nix-text">{match.p2}</span>
                    </div>

                    {/* Footer: Asset & Stake */}
                    <div className="flex justify-between items-center text-xs font-mono text-nix-muted">
                      <div className="flex items-center gap-2">
                        {/* Coin Icon */}
                        <div
                          className={`w-5 h-5 rounded-full ${match.color.includes("from") ? "bg-gradient-to-tr " + match.color : match.color} flex items-center justify-center text-white text-[10px] font-bold`}
                        >
                          {match.symbol}
                        </div>
                        <span>{match.asset}/USD</span>
                      </div>
                      <span className="bg-nix-border/50 px-2 py-0.5 rounded text-nix-text">
                        {match.stake} SOL
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
