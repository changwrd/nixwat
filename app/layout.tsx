import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import { WalletProvider } from "../components/WalletProvider";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Nixwat | Real-Time Trading Duels",
  description:
    "The world's first real-time trading duel on Solana. Powered by MagicBlock.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} antialiased selection:bg-nix-cyan selection:text-nix-void`}
      >
        <WalletProvider>
          <Navbar />
          <div className="pt-20">{children}</div>
        </WalletProvider>
      </body>
    </html>
  );
}
