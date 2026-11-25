"use client";

import { useState } from "react";
import Link from "next/link";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Dashboard", href: "/dashboard", highlight: false },
    { name: "Arena", href: "/arena", highlight: false },
    { name: "Leaderboard", href: "/leaderboard", highlight: false },
    { name: "Profile", href: "/profile", highlight: false },
    { name: "Whitelist", href: "/whitelist", highlight: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-nix-border bg-nix-void/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-nix-cyan rounded flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
            <span className="text-nix-void font-display font-bold text-xl">
              N
            </span>
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter text-nix-text">
            NIXWAT
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 font-mono text-sm text-nix-muted">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={
                link.highlight
                  ? "text-nix-cyan border border-nix-cyan/30 bg-nix-cyan/5 hover:bg-nix-cyan/10 px-3 py-1.5 rounded transition-all"
                  : "hover:text-nix-cyan transition-colors"
              }
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side: Wallet & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="nixwat-wallet-btn hidden sm:block">
            <WalletMultiButton />
          </div>

          {/* Hamburger Button (Mobile Only) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-nix-text p-2 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-nix-carbon border-b border-nix-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-mono text-sm py-2 ${
                link.highlight ? "text-nix-cyan font-bold" : "text-nix-muted"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Wallet button on mobile inside menu */}
          <div className="nixwat-wallet-btn pt-2 border-t border-nix-border sm:hidden">
            <WalletMultiButton />
          </div>
        </div>
      )}
    </nav>
  );
}
