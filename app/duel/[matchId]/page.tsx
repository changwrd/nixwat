"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function DuelInterface() {
  const [timeLeft, setTimeLeft] = useState(60);
  const [userPnL, setUserPnL] = useState(0);
  const [opponentPnL, setOpponentPnL] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [position, setPosition] = useState<"LONG" | "SHORT" | null>(null);
  const [leverage, setLeverage] = useState(10);
  const [positionSize, setPositionSize] = useState(0);
  const [timeframe, setTimeframe] = useState("1m");

  // State for mock order book to prevent hydration errors
  const [orderBook, setOrderBook] = useState<{
    asks: { price: string; size: string; width: string }[];
    bids: { price: string; size: string; width: string }[];
  }>({
    asks: [],
    bids: [],
  });

  // Countdown Timer
  useEffect(() => {
    if (timeLeft <= 0) {
      setIsFinished(true);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Generate mock order book data on client mount

  // Generate and live-update mock order book data
  useEffect(() => {
    const generateOrders = (offset: number) => {
      return Array.from({ length: 12 }).map((_, i) => ({
        price: (2.45 + offset * (i + 1) * 0.001).toFixed(3),
        size: (Math.random() * 500 + 50).toFixed(0),
        width: `${Math.random() * 80 + 10}%`,
      }));
    };

    // Initial set
    setOrderBook({
      asks: generateOrders(1).reverse(),
      bids: generateOrders(-1),
    });

    // Live update simulation (the "chat")
    const interval = setInterval(() => {
      // Randomly update 1-3 orders in the book to simulate trades
      setOrderBook((prev) => {
        const updateOrders = (orders: any[]) => {
          const newOrders = [...orders];
          const numUpdates = Math.floor(Math.random() * 3) + 1;
          for (let i = 0; i < numUpdates; i++) {
            const randomIndex = Math.floor(Math.random() * newOrders.length);
            newOrders[randomIndex] = {
              ...newOrders[randomIndex],
              size: (Math.random() * 500 + 50).toFixed(0),
              width: `${Math.random() * 80 + 10}%`,
            };
          }
          return newOrders;
        };

        return {
          asks: updateOrders(prev.asks),
          bids: updateOrders(prev.bids),
        };
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);
  // Simulate real-time P&L updates (Ephemeral Rollup)
  useEffect(() => {
    if (isFinished) return;
    const interval = setInterval(() => {
      if (position) {
        // Simulate price movement based on position
        const movement = Math.random() * 2 - 0.8;
        setUserPnL((prev) => prev + movement);
        setPositionSize((prev) => prev + Math.random() * 0.05);
      }
      setOpponentPnL((prev) => prev + (Math.random() * 2 - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [position, isFinished]);

  const formatPnL = (val: number) => {
    return (val > 0 ? "+" : "") + val.toFixed(3);
  };

  // --- RESULTS SCREEN ---
  if (isFinished) {
    const isWinner = userPnL > opponentPnL;
    return (
      <main className="min-h-screen bg-nix-void flex items-center justify-center p-6 relative overflow-hidden">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] ${isWinner ? "bg-nix-cyan/10" : "bg-nix-magenta/10"} blur-[150px] rounded-full pointer-events-none`}
        />

        <div className="bg-nix-carbon border border-nix-border rounded-2xl p-12 max-w-lg w-full text-center relative z-10 animate-in zoom-in duration-500">
          <h1
            className={`font-display text-6xl font-bold mb-2 ${isWinner ? "text-nix-cyan" : "text-nix-magenta"}`}
          >
            {isWinner ? "VICTORY" : "DEFEAT"}
          </h1>
          <p className="text-nix-muted font-mono mb-8">
            {isWinner
              ? "You outperformed your opponent."
              : "Your opponent outperformed you."}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-nix-void border border-nix-border p-4 rounded-xl">
              <p className="text-xs font-mono text-nix-muted mb-1">Your P&L</p>
              <p
                className={`text-2xl font-display font-bold ${userPnL >= 0 ? "text-nix-cyan" : "text-nix-magenta"}`}
              >
                {formatPnL(userPnL)} SOL
              </p>
            </div>
            <div className="bg-nix-void border border-nix-border p-4 rounded-xl">
              <p className="text-xs font-mono text-nix-muted mb-1">
                Opponent P&L
              </p>
              <p
                className={`text-2xl font-display font-bold ${opponentPnL >= 0 ? "text-nix-cyan" : "text-nix-magenta"}`}
              >
                {formatPnL(opponentPnL)} SOL
              </p>
            </div>
          </div>

          <div className="bg-nix-void border border-nix-border p-4 rounded-xl mb-8 flex justify-between items-center">
            <span className="font-mono text-nix-muted">Settlement Status</span>
            <span className="font-mono text-nix-cyan text-sm bg-nix-cyan/10 px-3 py-1 rounded border border-nix-cyan/20">
              Settled on Base Layer
            </span>
          </div>

          <Link
            href="/dashboard"
            className="block w-full bg-nix-cyan text-nix-void font-bold font-mono text-lg px-8 py-4 rounded-xl hover:bg-white transition-all duration-300"
          >
            RETURN TO DASHBOARD
          </Link>
        </div>
      </main>
    );
  }

  // --- LIVE DUEL SCREEN ---
  return (
    <main className="min-h-screen bg-nix-void flex flex-col">
      {/* Top Bar: Match Info & Timer */}
      <div className="border-b border-nix-border bg-nix-carbon px-6 py-4 grid grid-cols-3 items-center relative z-10">
        {/* User Stats */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-nix-void border border-nix-cyan flex items-center justify-center font-display font-bold text-nix-cyan">
            T
          </div>
          <div>
            <p className="font-mono text-xs text-nix-muted">You (TraderJoe)</p>
            <p
              className={`text-xl font-display font-bold ${userPnL >= 0 ? "text-nix-cyan" : "text-nix-magenta"}`}
            >
              {formatPnL(userPnL)} SOL
            </p>
          </div>
        </div>

        {/* Timer */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-nix-cyan animate-pulse" />
            <span className="text-xs font-mono text-nix-muted uppercase tracking-widest">
              Live on ER
            </span>
          </div>
          <div
            className={`text-6xl font-display font-bold tabular-nums ${timeLeft <= 10 ? "text-nix-magenta animate-pulse" : "text-nix-text"}`}
          >
            00:{timeLeft.toString().padStart(2, "0")}
          </div>
        </div>

        {/* Opponent Stats (Hidden) */}
        <div className="flex items-center justify-end gap-4">
          <div className="text-right">
            <p className="font-mono text-xs text-nix-muted">Diamond_Hand_77</p>
            <div className="flex items-center gap-2 justify-end">
              <svg
                className="w-4 h-4 text-nix-muted"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <p className="text-xl font-display font-bold text-nix-muted tracking-widest">
                ???.???
              </p>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-nix-void border border-nix-magenta flex items-center justify-center font-display font-bold text-nix-magenta">
            D
          </div>
        </div>
      </div>

      {/* Main Terminal Area */}
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-4 gap-4 p-4">
        {/* Order Book (Left) */}
        <div className="hidden lg:flex flex-col bg-nix-carbon border border-nix-border rounded-xl overflow-hidden h-[calc(100vh-220px)]">
          <div className="p-3 border-b border-nix-border bg-nix-void/50 flex justify-between">
            <h3 className="font-mono text-xs text-nix-muted uppercase">
              Order Book
            </h3>
            <span className="font-mono text-xs text-nix-muted">WIF/USD</span>
          </div>

          <div className="flex-grow flex flex-col overflow-hidden text-xs font-mono">
            {/* Header */}
            <div className="grid grid-cols-3 px-3 py-1 text-nix-muted border-b border-nix-border/30 text-[10px]">
              <span>Price</span>
              <span className="text-right">Size</span>
              <span className="text-right">Total</span>
            </div>

            {/* Asks (Sells) */}
            <div className="flex-grow flex flex-col justify-end overflow-hidden">
              {orderBook.asks.map((order, i) => (
                <div
                  key={`ask-${i}`}
                  className="grid grid-cols-3 px-3 py-[2px] relative hover:bg-nix-void/50 cursor-pointer"
                >
                  <div
                    className="absolute right-0 top-0 h-full bg-nix-magenta/10"
                    style={{ width: order.width }}
                  />
                  <span className="text-nix-magenta relative z-10">
                    {order.price}
                  </span>
                  <span className="text-nix-text text-right relative z-10">
                    {order.size}
                  </span>
                  <span className="text-nix-muted text-right relative z-10">
                    {(parseFloat(order.price) * parseFloat(order.size)).toFixed(
                      0,
                    )}
                  </span>
                </div>
              ))}
            </div>

            {/* Spread / Current Price */}
            <div className="border-y border-nix-border py-2 px-3 flex justify-between items-center bg-nix-void z-10 my-1">
              <span className="text-nix-text font-bold text-lg">2.453</span>
              <span className="text-nix-cyan font-bold">↑ 1.24%</span>
            </div>

            {/* Bids (Buys) */}
            <div className="flex-grow flex flex-col justify-start overflow-hidden">
              {orderBook.bids.map((order, i) => (
                <div
                  key={`bid-${i}`}
                  className="grid grid-cols-3 px-3 py-[2px] relative hover:bg-nix-void/50 cursor-pointer"
                >
                  <div
                    className="absolute right-0 top-0 h-full bg-nix-cyan/10"
                    style={{ width: order.width }}
                  />
                  <span className="text-nix-cyan relative z-10">
                    {order.price}
                  </span>
                  <span className="text-nix-text text-right relative z-10">
                    {order.size}
                  </span>
                  <span className="text-nix-muted text-right relative z-10">
                    {(parseFloat(order.price) * parseFloat(order.size)).toFixed(
                      0,
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center Chart */}
        <div className="lg:col-span-2 flex flex-col bg-nix-carbon border border-nix-border rounded-xl overflow-hidden">
          <div className="p-3 border-b border-nix-border flex justify-between items-center bg-nix-void/50">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#F5A623] flex items-center justify-center text-white text-[10px] font-bold">
                W
              </div>
              <h2 className="font-display text-xl font-bold text-nix-text">
                WIF/USD
              </h2>
            </div>
            <div className="flex gap-2">
              {["1s", "1m", "5m"].map((tf) => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`text-xs font-mono px-2 py-1 rounded transition-colors ${
                    timeframe === tf
                      ? "bg-nix-border text-nix-text"
                      : "bg-nix-void text-nix-muted border border-nix-border hover:text-nix-text"
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-grow relative bg-[#0A0A0B]">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(#2A2A30 1px, transparent 1px), linear-gradient(90deg, #2A2A30 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            ></div>
            <svg
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <defs>
                <linearGradient
                  id="chartGradientDuel"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Dynamically change the chart path based on the selected timeframe */}
              {timeframe === "1s" && (
                <>
                  <path
                    d="M0,90 L10,85 L20,88 L30,70 L40,75 L50,60 L60,65 L70,40 L80,45 L90,20 L100,25 L100,100 L0,100 Z"
                    fill="url(#chartGradientDuel)"
                  />
                  <path
                    d="M0,90 L10,85 L20,88 L30,70 L40,75 L50,60 L60,65 L70,40 L80,45 L90,20 L100,25"
                    fill="none"
                    stroke="#00F0FF"
                    strokeWidth="1.5"
                  />
                </>
              )}

              {timeframe === "1m" && (
                <>
                  <path
                    d="M0,80 Q10,70 20,75 T40,50 T60,60 T80,30 T100,10 L100,100 L0,100 Z"
                    fill="url(#chartGradientDuel)"
                  />
                  <path
                    d="M0,80 Q10,70 20,75 T40,50 T60,60 T80,30 T100,10"
                    fill="none"
                    stroke="#00F0FF"
                    strokeWidth="1.5"
                  />
                </>
              )}

              {timeframe === "5m" && (
                <>
                  <path
                    d="M0,95 L20,90 L40,60 L60,70 L80,40 L100,15 L100,100 L0,100 Z"
                    fill="url(#chartGradientDuel)"
                  />
                  <path
                    d="M0,95 L20,90 L40,60 L60,70 L80,40 L100,15"
                    fill="none"
                    stroke="#00F0FF"
                    strokeWidth="1.5"
                  />
                </>
              )}
            </svg>
          </div>
        </div>

        {/* Position Panel (Right) */}
        <div className="flex flex-col bg-nix-carbon border border-nix-border rounded-xl overflow-hidden">
          <div className="p-3 border-b border-nix-border bg-nix-void/50">
            <h3 className="font-mono text-xs text-nix-muted uppercase">
              Your Position
            </h3>
          </div>
          <div className="p-4 space-y-4">
            <div className="flex justify-between font-mono text-sm">
              <span className="text-nix-muted">Direction</span>
              <span
                className={
                  position
                    ? position === "LONG"
                      ? "text-nix-cyan"
                      : "text-nix-magenta"
                    : "text-nix-muted"
                }
              >
                {position || "NONE"}
              </span>
            </div>
            <div className="flex justify-between font-mono text-sm">
              <span className="text-nix-muted">Leverage</span>
              <span className="text-nix-text">{leverage}x</span>
            </div>
            <div className="flex justify-between font-mono text-sm">
              <span className="text-nix-muted">Size</span>
              <span className="text-nix-text">
                {positionSize.toFixed(3)} WIF
              </span>
            </div>
            <div className="border-t border-nix-border pt-4">
              <div className="flex justify-between font-mono text-sm mb-1">
                <span className="text-nix-muted">Entry Price</span>
                <span className="text-nix-text">2.453</span>
              </div>
              <div className="flex justify-between font-mono text-sm">
                <span className="text-nix-muted">Liq. Price</span>
                <span className="text-nix-magenta">2.200</span>
              </div>
            </div>
          </div>

          {/* Leverage Selector */}
          <div className="mt-auto p-4 border-t border-nix-border bg-nix-void/30">
            <label className="block text-xs font-mono text-nix-muted mb-2">
              Leverage
            </label>
            <input
              type="range"
              min="1"
              max="50"
              value={leverage}
              onChange={(e) => setLeverage(Number(e.target.value))}
              className="w-full accent-nix-cyan"
            />
            <div className="flex justify-between text-xs font-mono text-nix-muted mt-1">
              <span>1x</span>
              <span className="text-nix-cyan font-bold">{leverage}x</span>
              <span>50x</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="border-t border-nix-border bg-nix-carbon p-4 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-4">
          <button
            onClick={() => setPosition("LONG")}
            className={`py-4 rounded-xl font-display text-xl font-bold transition-all duration-200 flex justify-center items-center gap-2 ${
              position === "LONG"
                ? "bg-nix-cyan text-nix-void shadow-[0_0_30px_rgba(0,240,255,0.4)]"
                : "bg-nix-void border border-nix-cyan/30 text-nix-cyan hover:bg-nix-cyan/10"
            }`}
          >
            LONG
            <span className="text-xs font-mono bg-black/20 px-2 py-0.5 rounded">
              / BUY
            </span>
          </button>
          <button
            onClick={() => setPosition("SHORT")}
            className={`py-4 rounded-xl font-display text-xl font-bold transition-all duration-200 flex justify-center items-center gap-2 ${
              position === "SHORT"
                ? "bg-nix-magenta text-nix-text shadow-[0_0_30px_rgba(255,0,85,0.4)]"
                : "bg-nix-void border border-nix-magenta/30 text-nix-magenta hover:bg-nix-magenta/10"
            }`}
          >
            SHORT
            <span className="text-xs font-mono bg-black/20 px-2 py-0.5 rounded">
              / SELL
            </span>
          </button>
        </div>
        <p className="text-center text-xs font-mono text-nix-muted mt-3">
          Positions execute instantly with zero gas fees on the Ephemeral
          Rollup. P&L updates in real-time.
        </p>
      </div>
    </main>
  );
}
