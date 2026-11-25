"use client";

import { useState } from "react";
import Link from "next/link";

export default function Whitelist() {
  const [submitted, setSubmitted] = useState(false);
  const [wallet, setWallet] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (wallet.trim().length > 0) {
      setSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen bg-nix-void p-6 md:p-12 relative flex items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-nix-cyan/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-2xl w-full relative z-10">
        {!submitted ? (
          <div className="bg-nix-carbon border border-nix-border rounded-2xl p-8 md:p-12 animate-in fade-in zoom-in duration-500">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-nix-cyan/30 bg-nix-cyan/5 mb-6">
                <span className="w-2 h-2 rounded-full bg-nix-cyan animate-pulse" />
                <span className="text-xs font-mono text-nix-cyan uppercase tracking-widest">
                  Genesis Access
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-nix-text mb-4">
                SECURE YOUR{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-nix-cyan to-nix-magenta">
                  SPOT
                </span>
              </h1>
              <p className="text-nix-muted font-mono text-sm leading-relaxed max-w-md mx-auto">
                The Nixwat Genesis Whitelist grants early access to the Arena,
                exclusive NFT drops, and zero protocol fees for your first 50
                duels.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-mono text-nix-muted uppercase mb-2">
                  Solana Wallet Address
                </label>
                <input
                  type="text"
                  placeholder="e.g. 7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj"
                  value={wallet}
                  onChange={(e) => setWallet(e.target.value)}
                  className="w-full bg-nix-void border border-nix-border rounded-lg px-4 py-3 text-nix-text font-mono text-sm focus:outline-none focus:border-nix-cyan focus:ring-1 focus:ring-nix-cyan transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-nix-muted uppercase mb-2">
                  Twitter / X Handle (Optional)
                </label>
                <input
                  type="text"
                  placeholder="@yourhandle"
                  className="w-full bg-nix-void border border-nix-border rounded-lg px-4 py-3 text-nix-text font-mono text-sm focus:outline-none focus:border-nix-cyan focus:ring-1 focus:ring-nix-cyan transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-nix-cyan text-nix-void font-bold font-mono text-lg py-4 rounded-lg hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
              >
                REQUEST ACCESS
              </button>
            </form>

            <p className="text-center text-xs font-mono text-nix-muted mt-6">
              By registering, you agree to the Nixwat Terms of Service.
            </p>
          </div>
        ) : (
          /* Success State */
          <div className="bg-nix-carbon border border-nix-cyan/30 rounded-2xl p-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="w-24 h-24 bg-nix-cyan/10 border-2 border-nix-cyan rounded-full mx-auto mb-8 flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.3)]">
              <svg
                className="w-12 h-12 text-nix-cyan"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="font-display text-4xl font-bold text-nix-text mb-4">
              You're on the list.
            </h2>
            <p className="text-nix-muted font-mono mb-8 max-w-md mx-auto">
              Your wallet has been registered for the Genesis Whitelist. Keep an
              eye on your inbox and our Twitter for the official launch date.
            </p>
            <div className="bg-nix-void border border-nix-border p-4 rounded-lg mb-8 inline-block">
              <p className="text-xs font-mono text-nix-muted mb-1">
                Registered Address
              </p>
              <p className="text-sm font-mono text-nix-cyan">{wallet}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-nix-cyan text-nix-void font-bold font-mono px-8 py-3 rounded hover:bg-white transition-all duration-300"
              >
                RETURN HOME
              </Link>
              <Link
                href="/leaderboard"
                className="bg-nix-void border border-nix-border text-nix-text font-bold font-mono px-8 py-3 rounded hover:border-nix-cyan transition-all duration-300"
              >
                VIEW LEADERBOARD
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
