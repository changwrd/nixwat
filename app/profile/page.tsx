"use client";

import { useState } from "react";
import Link from "next/link";

export default function Profile() {
  // State for profile data
  const [name, setName] = useState("TraderJoe");
  const [bio, setBio] = useState(
    "Professional degen. I only trade WIF and SOL. If you see me in the Arena, you're probably going to lose. Not financial advice.",
  );

  // State for modal
  const [isEditOpen, setIsEditOpen] = useState(false);

  // Temporary state for the form
  const [tempName, setTempName] = useState(name);
  const [tempBio, setTempBio] = useState(bio);
  const [nftStatus, setNftStatus] = useState<"idle" | "listing" | "listed">(
    "idle",
  );

  const handleSave = () => {
    setName(tempName);
    setBio(tempBio);
    setIsEditOpen(false);
  };
  const handleListNFT = () => {
    setNftStatus("listing");
    // Simulate transaction time
    setTimeout(() => {
      setNftStatus("listed");
    }, 1500);
  };
  return (
    <main className="min-h-screen bg-nix-void p-6 md:p-12 relative pb-24">
      <div className="max-w-6xl mx-auto">
        {/* Profile Header Card */}
        <div className="bg-nix-carbon border border-nix-border rounded-2xl overflow-hidden mb-8 relative">
          {/* Banner Background */}
          <div className="h-48 w-full bg-gradient-to-r from-nix-cyan/20 via-nix-void to-nix-magenta/20 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #FFFFFF 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>

          <div className="px-8 pb-8 relative">
            {/* Avatar (Overlapping Banner) */}
            <div className="absolute -top-16 left-8">
              <div className="w-32 h-32 rounded-full bg-nix-void border-4 border-nix-cyan flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                <span className="font-display text-5xl font-bold text-nix-cyan">
                  T
                </span>
              </div>
              {/* Online Status Indicator */}
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-nix-cyan rounded-full border-4 border-nix-carbon shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
            </div>

            {/* Edit Button */}
            <div className="flex justify-end pt-4">
              <button
                onClick={() => {
                  setTempName(name);
                  setTempBio(bio);
                  setIsEditOpen(true);
                }}
                className="bg-nix-void border border-nix-border hover:border-nix-cyan text-nix-text font-mono text-sm px-6 py-2 rounded transition-colors"
              >
                Edit Profile
              </button>
            </div>

            {/* User Info */}
            <div className="mt-8">
              <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                <h1 className="font-display text-4xl font-bold text-nix-text">
                  {name}
                </h1>
                <span className="bg-nix-cyan/10 text-nix-cyan border border-nix-cyan/30 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider flex items-center gap-1 w-fit">
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Verified Trader
                </span>
              </div>
              <p className="text-nix-muted font-mono text-sm mb-4">
                0x7d...a2f5 • Joined Nov 2026
              </p>

              {/* Bio */}
              <p className="font-mono text-sm text-nix-text max-w-2xl leading-relaxed">
                {bio}
              </p>
            </div>

            {/* Socials & Stats Row */}
            <div className="flex flex-wrap gap-8 mt-8 border-t border-nix-border pt-6">
              <div>
                <p className="text-xs font-mono text-nix-muted uppercase mb-1">
                  Total Volume
                </p>
                <p className="text-xl font-display font-bold text-nix-text">
                  142.5 SOL
                </p>
              </div>
              <div>
                <p className="text-xs font-mono text-nix-muted uppercase mb-1">
                  Total Duels
                </p>
                <p className="text-xl font-display font-bold text-nix-text">
                  142
                </p>
              </div>
              <div>
                <p className="text-xs font-mono text-nix-muted uppercase mb-1">
                  Win Rate
                </p>
                <p className="text-xl font-display font-bold text-nix-cyan">
                  68%
                </p>
              </div>
              <div className="flex items-center gap-4 ml-auto">
                <a
                  href="#"
                  className="text-nix-muted hover:text-nix-cyan transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-nix-muted hover:text-nix-cyan transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Deep Stats & Heatmap */}
          <div className="lg:col-span-2 space-y-8">
            {/* Trading Heatmap */}
            <div className="bg-nix-carbon border border-nix-border rounded-2xl p-6">
              <h2 className="font-display text-xl font-bold text-nix-text mb-6">
                Activity Heatmap
              </h2>

              {/* Mock Heatmap Grid */}
              {/* Deterministic Heatmap Grid (No Math.random) */}
              <div className="flex gap-1 overflow-hidden">
                {Array.from({ length: 26 }).map((_, weekIdx) => (
                  <div key={weekIdx} className="flex flex-col gap-1">
                    {Array.from({ length: 7 }).map((_, dayIdx) => {
                      // Deterministic pattern based on index
                      const score = (weekIdx * 7 + dayIdx) % 10;
                      let colorClass = "bg-nix-border/30"; // Empty
                      if (score > 8) colorClass = "bg-nix-cyan";
                      else if (score > 6) colorClass = "bg-nix-cyan/70";
                      else if (score > 3) colorClass = "bg-nix-cyan/40";

                      return (
                        <div
                          key={dayIdx}
                          className={`w-3 h-3 rounded-sm ${colorClass}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
              <div className="flex justify-end items-center gap-2 mt-4 text-xs font-mono text-nix-muted">
                <span>Less</span>
                <div className="w-3 h-3 rounded-sm bg-nix-border/30" />
                <div className="w-3 h-3 rounded-sm bg-nix-cyan/40" />
                <div className="w-3 h-3 rounded-sm bg-nix-cyan/70" />
                <div className="w-3 h-3 rounded-sm bg-nix-cyan" />
                <span>More</span>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-nix-carbon border border-nix-border rounded-2xl p-6">
              <h2 className="font-display text-xl font-bold text-nix-text mb-6">
                Recent Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 bg-nix-void p-4 rounded-xl border border-nix-border">
                  <div className="w-12 h-12 bg-nix-cyan/20 rounded-full flex items-center justify-center text-2xl">
                    🏆
                  </div>
                  <div>
                    <h3 className="font-bold text-nix-text font-mono text-sm">
                      First Blood
                    </h3>
                    <p className="text-xs text-nix-muted font-mono">
                      Won your first duel.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-nix-void p-4 rounded-xl border border-nix-border">
                  <div className="w-12 h-12 bg-nix-magenta/20 rounded-full flex items-center justify-center text-2xl">
                    🔥
                  </div>
                  <div>
                    <h3 className="font-bold text-nix-text font-mono text-sm">
                      On Fire
                    </h3>
                    <p className="text-xs text-nix-muted font-mono">
                      Won 10 duels in a row.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-nix-void p-4 rounded-xl border border-nix-border opacity-50">
                  <div className="w-12 h-12 bg-nix-border rounded-full flex items-center justify-center text-2xl grayscale">
                    🐋
                  </div>
                  <div>
                    <h3 className="font-bold text-nix-text font-mono text-sm">
                      Whale Status
                    </h3>
                    <p className="text-xs text-nix-muted font-mono">
                      Win 100 SOL total. (42/100)
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-nix-void p-4 rounded-xl border border-nix-border opacity-50">
                  <div className="w-12 h-12 bg-nix-border rounded-full flex items-center justify-center text-2xl grayscale">
                    💎
                  </div>
                  <div>
                    <h3 className="font-bold text-nix-text font-mono text-sm">
                      Diamond Hands
                    </h3>
                    <p className="text-xs text-nix-muted font-mono">
                      Hold a position for 60s. (0/1)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Badges & Assets */}
          <div className="space-y-8">
            {/* Favorite Assets */}
            <div className="bg-nix-carbon border border-nix-border rounded-2xl p-6">
              <h2 className="font-display text-xl font-bold text-nix-text mb-4">
                Favorite Assets
              </h2>
              <div className="space-y-4">
                {[
                  {
                    asset: "WIF",
                    winRate: "72%",
                    color: "bg-[#F5A623]",
                    symbol: "W",
                  },
                  {
                    asset: "SOL",
                    winRate: "65%",
                    color: "bg-gradient-to-tr from-[#9945FF] to-[#14F195]",
                    symbol: "S",
                  },
                  {
                    asset: "BONK",
                    winRate: "58%",
                    color: "bg-[#F7931A]",
                    symbol: "B",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center text-white text-xs font-bold`}
                      >
                        {item.symbol}
                      </div>
                      <span className="font-mono text-sm text-nix-text">
                        {item.asset}/USD
                      </span>
                    </div>
                    <span className="font-mono text-sm text-nix-cyan">
                      {item.winRate} WR
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipped Badges */}
            <div className="bg-nix-carbon border border-nix-border rounded-2xl p-6">
              <h2 className="font-display text-xl font-bold text-nix-text mb-4">
                Equipped Badges
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="bg-nix-void border border-nix-border px-3 py-1.5 rounded font-mono text-xs text-nix-muted">
                  BETA_TESTER
                </span>
                <span className="bg-nix-void border border-nix-cyan/50 px-3 py-1.5 rounded font-mono text-xs text-nix-cyan">
                  TOP_100
                </span>
                <span className="bg-nix-void border border-nix-border px-3 py-1.5 rounded font-mono text-xs text-nix-muted">
                  VRF_HUNTER
                </span>
                <span className="bg-nix-void border border-nix-magenta/30 px-3 py-1.5 rounded font-mono text-xs text-nix-magenta">
                  WIF_MAXI
                </span>
              </div>
            </div>

            {/* Genesis NFT */}
            {/* Genesis NFT */}
            <div className="bg-nix-carbon border border-nix-border rounded-2xl p-6 text-center relative overflow-hidden group">
              {/* Background Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-nix-cyan/20 blur-[50px] rounded-full pointer-events-none" />

              <h2 className="font-display text-xl font-bold text-nix-text mb-1 relative z-10">
                Nixwat Genesis
              </h2>
              <p className="text-xs text-nix-muted font-mono mb-6 relative z-10">
                Pass #042 • Early Adopter
              </p>

              {/* Custom CSS NFT Artwork */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 border border-nix-border shadow-[0_0_30px_rgba(0,240,255,0.1)] group-hover:border-nix-cyan/50 transition-colors cursor-pointer">
                {/* Base Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-nix-void via-nix-carbon to-nix-void" />

                {/* Animated Grid */}
                <div
                  className="absolute inset-0 opacity-30 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage:
                      "linear-gradient(#00F0FF 1px, transparent 1px), linear-gradient(90deg, #00F0FF 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                {/* Center Geometric Shape (SVG) */}
                <svg
                  className="absolute inset-0 w-full h-full p-8"
                  viewBox="0 0 100 100"
                >
                  <defs>
                    <linearGradient
                      id="nftGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.8" />
                      <stop
                        offset="100%"
                        stopColor="#FF0055"
                        stopOpacity="0.8"
                      />
                    </linearGradient>
                  </defs>
                  {/* Rotating Hexagon */}
                  <polygon
                    points="50,10 90,30 90,70 50,90 10,70 10,30"
                    fill="none"
                    stroke="url(#nftGrad)"
                    strokeWidth="1.5"
                    className="origin-center animate-[spin_20s_linear_infinite]"
                  />
                  {/* Inner Triangle */}
                  <polygon
                    points="50,25 75,65 25,65"
                    fill="none"
                    stroke="#00F0FF"
                    strokeWidth="0.5"
                    opacity="0.5"
                    className="origin-center animate-[spin_10s_linear_infinite_reverse]"
                  />
                </svg>

                {/* Center Logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-nix-void border border-nix-cyan rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.4)] rotate-45">
                    <span className="font-display text-2xl font-bold text-nix-cyan -rotate-45">
                      N
                    </span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20 backdrop-blur-sm">
                  <span className="font-mono text-sm text-nix-cyan border border-nix-cyan/50 px-4 py-2 rounded-full">
                    VIEW ON MAGIC EDEN
                  </span>
                </div>
              </div>

              <button
                onClick={handleListNFT}
                disabled={nftStatus !== "idle"}
                className={`w-full font-mono text-sm px-4 py-2 rounded transition-colors relative z-10 border ${
                  nftStatus === "listed"
                    ? "bg-nix-cyan/10 border-nix-cyan/50 text-nix-cyan cursor-default"
                    : nftStatus === "listing"
                      ? "bg-nix-void border-nix-border text-nix-muted cursor-wait"
                      : "bg-nix-void border-nix-border hover:border-nix-cyan text-nix-text"
                }`}
              >
                {nftStatus === "idle" && "List for Sale"}
                {nftStatus === "listing" && "Signing Transaction..."}
                {nftStatus === "listed" && "Listed for 5.0 SOL ✓"}
              </button>
            </div>
          </div>
        </div>

        {/* Back to Dashboard */}
        <div className="mt-12 text-center">
          <Link
            href="/dashboard"
            className="text-nix-muted hover:text-nix-cyan font-mono text-sm transition-colors"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </div>
      {/* --- EDIT PROFILE MODAL --- */}
      {isEditOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-nix-carbon border border-nix-border rounded-2xl w-full max-w-md overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-6 border-b border-nix-border bg-nix-void/50">
              <h3 className="font-display text-xl font-bold text-nix-text">
                Edit Profile
              </h3>
              <button
                onClick={() => setIsEditOpen(false)}
                className="text-nix-muted hover:text-nix-text transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-mono text-nix-muted uppercase mb-2">
                  Display Name
                </label>
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  className="w-full bg-nix-void border border-nix-border rounded-lg px-4 py-2 text-nix-text font-mono text-sm focus:outline-none focus:border-nix-cyan"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-nix-muted uppercase mb-2">
                  Bio
                </label>
                <textarea
                  value={tempBio}
                  onChange={(e) => setTempBio(e.target.value)}
                  rows={4}
                  className="w-full bg-nix-void border border-nix-border rounded-lg px-4 py-2 text-nix-text font-mono text-sm focus:outline-none focus:border-nix-cyan resize-none"
                />
              </div>
            </div>

            <div className="p-6 border-t border-nix-border flex gap-4">
              <button
                onClick={() => setIsEditOpen(false)}
                className="flex-1 bg-nix-void border border-nix-border text-nix-text font-mono text-sm py-2 rounded hover:bg-nix-border transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex-1 bg-nix-cyan text-nix-void font-bold font-mono text-sm py-2 rounded hover:bg-white transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
