import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-nix-void p-6 md:p-12 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h1 className="font-display text-4xl font-bold text-nix-text">
              Command Center
            </h1>
            <p className="text-nix-muted font-mono mt-2">
              Welcome back, Trader.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-nix-carbon border border-nix-border px-6 py-3 rounded-lg">
            <div className="flex flex-col">
              <span className="text-xs font-mono text-nix-muted uppercase">
                Wallet Balance
              </span>
              <span className="text-xl font-display font-bold text-nix-cyan">
                12.45 SOL
              </span>
            </div>
            <button className="bg-nix-void border border-nix-border hover:border-nix-cyan text-nix-text text-xs font-mono px-3 py-1.5 rounded transition-colors ml-4">
              Deposit
            </button>
          </div>
        </div>

        {/* Top Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Rank Card */}
          <div className="bg-gradient-to-br from-nix-carbon to-nix-void border border-nix-border p-6 rounded-xl">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-nix-muted font-mono text-sm">Current Rank</p>
                <h3 className="font-display text-3xl font-bold text-nix-text mt-1">
                  Diamond II
                </h3>
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-nix-cyan flex items-center justify-center text-nix-cyan font-bold font-display text-lg shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                D2
              </div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between text-xs font-mono text-nix-muted mb-2">
                <span>Progress to Master</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-nix-void rounded-full h-2">
                <div
                  className="bg-nix-cyan h-2 rounded-full shadow-[0_0_10px_rgba(0,240,255,0.5)]"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Win Rate Card */}
          <div className="bg-nix-carbon border border-nix-border p-6 rounded-xl flex flex-col justify-between">
            <p className="text-nix-muted font-mono text-sm">Win Rate</p>
            <div className="flex items-end gap-2 mt-4">
              <h3 className="font-display text-5xl font-bold text-nix-text">
                68<span className="text-2xl text-nix-muted">%</span>
              </h3>
              <span className="text-nix-cyan font-mono text-sm mb-2">
                +4.2% this week
              </span>
            </div>
            {/* Mini Sparkline Chart Mockup */}
            <div className="flex items-end gap-1 h-8 mt-4">
              {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-nix-cyan/20 rounded-t-sm"
                  style={{ height: `${h}%` }}
                ></div>
              ))}
            </div>
          </div>

          {/* Total P&L Card */}
          <div className="bg-nix-carbon border border-nix-border p-6 rounded-xl flex flex-col justify-between">
            <p className="text-nix-muted font-mono text-sm">Total P&L</p>
            <div className="flex items-end gap-2 mt-4">
              <h3 className="font-display text-5xl font-bold text-nix-cyan">
                +42.5<span className="text-2xl text-nix-muted"> SOL</span>
              </h3>
            </div>
            <p className="text-nix-muted font-mono text-xs mt-2">
              Across 142 duels
            </p>
          </div>
        </div>

        {/* Middle Section: Chart & Quests */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Performance Chart */}
          <div className="lg:col-span-2 bg-nix-carbon border border-nix-border rounded-xl p-6 relative overflow-hidden">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-display text-xl font-bold text-nix-text">
                Performance History
              </h2>
              <select className="bg-nix-void border border-nix-border text-nix-muted font-mono text-xs rounded px-3 py-1 focus:outline-none">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>

            {/* Mock Chart Area */}
            <div className="h-48 w-full relative">
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
                    id="chartGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,80 Q10,70 20,75 T40,50 T60,60 T80,30 T100,10 L100,100 L0,100 Z"
                  fill="url(#chartGradient)"
                />
                <path
                  d="M0,80 Q10,70 20,75 T40,50 T60,60 T80,30 T100,10"
                  fill="none"
                  stroke="#00F0FF"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="flex justify-between text-xs font-mono text-nix-muted mt-2">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>

          {/* Daily Quests */}
          <div className="bg-nix-carbon border border-nix-border rounded-xl p-6">
            <h2 className="font-display text-xl font-bold text-nix-text mb-6 flex items-center gap-2">
              Daily Quests
              <span className="bg-nix-magenta/20 text-nix-magenta text-xs px-2 py-0.5 rounded font-mono border border-nix-magenta/30">
                RESETS IN 12H
              </span>
            </h2>
            <div className="space-y-4">
              <div className="bg-nix-void border border-nix-border p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono text-sm text-nix-text">
                    Win 3 Duels
                  </span>
                  <span className="font-mono text-xs text-nix-cyan">1/3</span>
                </div>
                <div className="w-full bg-nix-carbon rounded-full h-1.5">
                  <div
                    className="bg-nix-cyan h-1.5 rounded-full"
                    style={{ width: "33%" }}
                  ></div>
                </div>
                <p className="text-xs font-mono text-nix-muted mt-2">
                  Reward: 50 XP + 0.01 SOL
                </p>
              </div>
              <div className="bg-nix-void border border-nix-border p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono text-sm text-nix-text">
                    Trade WIF
                  </span>
                  <span className="font-mono text-xs text-nix-cyan">0/1</span>
                </div>
                <div className="w-full bg-nix-carbon rounded-full h-1.5">
                  <div
                    className="bg-nix-cyan h-1.5 rounded-full"
                    style={{ width: "0%" }}
                  ></div>
                </div>
                <p className="text-xs font-mono text-nix-muted mt-2">
                  Reward: 20 XP
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Play CTA */}
        <div className="bg-nix-carbon border border-nix-cyan/30 p-1 rounded-2xl mb-12 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-nix-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="bg-nix-void/80 backdrop-blur-sm p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div>
              <h2 className="font-display text-2xl font-bold text-nix-text">
                Ready for the next duel?
              </h2>
              <p className="text-nix-muted font-mono text-sm mt-1">
                Standard Stakes: 0.1 SOL • 60 Seconds • Random Asset
              </p>
            </div>
            <Link
              href="/arena"
              className="w-full md:w-auto bg-nix-cyan text-nix-void font-bold font-mono text-lg px-8 py-3 rounded hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] whitespace-nowrap text-center"
            >
              FIND MATCH
            </Link>
          </div>
        </div>

        {/* Bottom Section: Recent Matches & Live Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Matches Table */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-nix-text mb-6">
              Recent Matches
            </h2>
            <div className="bg-nix-carbon border border-nix-border rounded-xl overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-nix-border bg-nix-void/50">
                    <th className="p-4 font-mono text-xs text-nix-muted uppercase">
                      Asset
                    </th>
                    <th className="p-4 font-mono text-xs text-nix-muted uppercase">
                      Stake
                    </th>
                    <th className="p-4 font-mono text-xs text-nix-muted uppercase">
                      P&L
                    </th>
                    <th className="p-4 font-mono text-xs text-nix-muted uppercase">
                      Result
                    </th>
                    <th className="p-4 font-mono text-xs text-nix-muted uppercase text-right">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="font-mono text-sm">
                  {/* Row 1: SOL */}
                  <tr className="border-b border-nix-border/50 hover:bg-nix-void/30 transition-colors">
                    <td className="p-4 font-bold text-nix-text">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#9945FF] to-[#14F195] flex items-center justify-center text-white text-xs font-bold shadow-lg">
                          S
                        </div>
                        SOL/USD
                      </div>
                    </td>
                    <td className="p-4 text-nix-muted">0.1 SOL</td>
                    <td className="p-4 text-nix-cyan">+0.045 SOL</td>
                    <td className="p-4">
                      <span className="bg-nix-cyan/10 text-nix-cyan px-2 py-1 rounded text-xs border border-nix-cyan/20">
                        WIN
                      </span>
                    </td>
                    <td className="p-4 text-nix-muted text-right">
                      2 hours ago
                    </td>
                  </tr>

                  {/* Row 2: BONK */}
                  <tr className="border-b border-nix-border/50 hover:bg-nix-void/30 transition-colors">
                    <td className="p-4 font-bold text-nix-text">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#F7931A] flex items-center justify-center text-white text-xs font-bold shadow-lg">
                          B
                        </div>
                        BONK/USD
                      </div>
                    </td>
                    <td className="p-4 text-nix-muted">0.5 SOL</td>
                    <td className="p-4 text-nix-magenta">-0.5 SOL</td>
                    <td className="p-4">
                      <span className="bg-nix-magenta/10 text-nix-magenta px-2 py-1 rounded text-xs border border-nix-magenta/20">
                        LOSS
                      </span>
                    </td>
                    <td className="p-4 text-nix-muted text-right">Yesterday</td>
                  </tr>

                  {/* Row 3: WIF */}
                  <tr className="hover:bg-nix-void/30 transition-colors">
                    <td className="p-4 font-bold text-nix-text">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#F5A623] flex items-center justify-center text-white text-xs font-bold shadow-lg">
                          W
                        </div>
                        WIF/USD
                      </div>
                    </td>
                    <td className="p-4 text-nix-muted">0.1 SOL</td>
                    <td className="p-4 text-nix-cyan">+0.095 SOL</td>
                    <td className="p-4">
                      <span className="bg-nix-cyan/10 text-nix-cyan px-2 py-1 rounded text-xs border border-nix-cyan/20">
                        WIN
                      </span>
                    </td>
                    <td className="p-4 text-nix-muted text-right">
                      2 days ago
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Live Network Feed */}
          <div>
            <h2 className="font-display text-2xl font-bold text-nix-text mb-6 flex items-center gap-2">
              Live Network
              <span className="w-2 h-2 rounded-full bg-nix-cyan animate-pulse"></span>
            </h2>
            <div className="bg-nix-carbon border border-nix-border rounded-xl p-4 space-y-4">
              {[
                {
                  user: "0x4a...f9b2",
                  action: "won",
                  amount: "+0.19 SOL",
                  asset: "WIF",
                },
                {
                  user: "0x1c...e4a1",
                  action: "lost",
                  amount: "-0.50 SOL",
                  asset: "BONK",
                },
                {
                  user: "0x9f...b3c8",
                  action: "won",
                  amount: "+0.09 SOL",
                  asset: "SOL",
                },
                {
                  user: "0x7d...a2f5",
                  action: "won",
                  amount: "+0.45 SOL",
                  asset: "JUP",
                },
                {
                  user: "0x3e...c1d9",
                  action: "lost",
                  amount: "-0.10 SOL",
                  asset: "WIF",
                },
              ].map((tx, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center text-xs font-mono border-b border-nix-border/30 pb-2 last:border-0 last:pb-0"
                >
                  <div>
                    <span className="text-nix-muted">{tx.user}</span>
                    <span className="text-nix-text mx-1">{tx.action}</span>
                    <span className="text-nix-text">{tx.asset}</span>
                  </div>
                  <span
                    className={
                      tx.amount.startsWith("+")
                        ? "text-nix-cyan"
                        : "text-nix-magenta"
                    }
                  >
                    {tx.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
