import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-nix-void relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-nix-cyan/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-nix-magenta/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-nix-border bg-nix-carbon/50 mb-8">
          <span className="w-2 h-2 rounded-full bg-nix-cyan animate-pulse" />
          <span className="text-xs font-mono text-nix-muted uppercase tracking-widest">
            Powered by MagicBlock Ephemeral Rollups
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tighter text-nix-text max-w-5xl leading-[0.95]">
          TRADE FAST. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-nix-cyan to-nix-magenta">
            WIN BIG.
          </span>{" "}
          <br />
          NO MERCY.
        </h1>

        {/* Subheadline */}
        <p className="mt-8 text-lg md:text-xl text-nix-muted font-mono max-w-2xl leading-relaxed">
          The world's first real-time, 60-second trading duel. Stake SOL, get a
          random asset via VRF, and out-trade your opponent. Zero gas fees.
          Hidden positions. Instant payouts.
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/arena"
            className="bg-nix-cyan text-nix-void font-bold font-mono text-lg px-10 py-4 rounded hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)]"
          >
            ENTER THE ARENA
          </Link>
          <Link
            href="/leaderboard"
            className="bg-nix-carbon border border-nix-border text-nix-text font-bold font-mono text-lg px-10 py-4 rounded hover:border-nix-cyan transition-all duration-300"
          >
            VIEW LEADERBOARD
          </Link>
        </div>

        {/* Stats Bar */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl border-t border-nix-border pt-8">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-display font-bold text-nix-text">
              11.6M+
            </span>
            <span className="text-sm font-mono text-nix-muted mt-1 uppercase tracking-wider">
              ER Sessions
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-display font-bold text-nix-text">
              $1,000
            </span>
            <span className="text-sm font-mono text-nix-muted mt-1 uppercase tracking-wider">
              Prize Pool
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-display font-bold text-nix-cyan">
              0.00s
            </span>
            <span className="text-sm font-mono text-nix-muted mt-1 uppercase tracking-wider">
              Execution Latency
            </span>
          </div>
        </div>
      </div>

      {/* --- HOW IT WORKS SECTION --- */}
      <div className="w-full max-w-7xl mx-auto px-6 py-24 relative z-10 border-t border-nix-border/50 mt-12">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-nix-text mb-4">
            THE NIXWAT PROTOCOL
          </h2>
          <p className="text-nix-muted font-mono max-w-2xl mx-auto">
            Three steps. Sixty seconds. Built entirely on MagicBlock's
            high-performance infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-nix-carbon border border-nix-border p-8 rounded-xl relative group hover:border-nix-cyan/50 transition-colors">
            <div className="absolute top-0 left-8 transform -translate-y-1/2 bg-nix-cyan text-nix-void font-bold font-mono px-3 py-1 rounded text-sm">
              01
            </div>
            <h3 className="font-display text-2xl font-bold text-nix-text mt-4 mb-3">
              Connect & Stake
            </h3>
            <p className="text-nix-muted font-mono text-sm leading-relaxed mb-4">
              Connect your Phantom or Solflare wallet. Choose your stake amount
              (e.g., 0.1 SOL) and enter the matchmaking queue.
            </p>
            <div className="text-xs font-mono text-nix-cyan/70 bg-nix-cyan/5 p-2 rounded border border-nix-cyan/10">
              Standard Solana Base Layer
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-nix-carbon border border-nix-border p-8 rounded-xl relative group hover:border-nix-magenta/50 transition-colors">
            <div className="absolute top-0 left-8 transform -translate-y-1/2 bg-nix-magenta text-nix-text font-bold font-mono px-3 py-1 rounded text-sm">
              02
            </div>
            <h3 className="font-display text-2xl font-bold text-nix-text mt-4 mb-3">
              The VRF Reveal
            </h3>
            <p className="text-nix-muted font-mono text-sm leading-relaxed mb-4">
              Once matched, MagicBlock's VRF selects a random tradable asset
              from our pool. The 60-second countdown begins.
            </p>
            <div className="text-xs font-mono text-nix-magenta/70 bg-nix-magenta/5 p-2 rounded border border-nix-magenta/10">
              MagicBlock VRF
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-nix-carbon border border-nix-border p-8 rounded-xl relative group hover:border-nix-cyan/50 transition-colors">
            <div className="absolute top-0 left-8 transform -translate-y-1/2 bg-nix-text text-nix-void font-bold font-mono px-3 py-1 rounded text-sm">
              03
            </div>
            <h3 className="font-display text-2xl font-bold text-nix-text mt-4 mb-3">
              The Duel & Payout
            </h3>
            <p className="text-nix-muted font-mono text-sm leading-relaxed mb-4">
              Trade with zero fees and instant execution. Opponent positions are
              hidden. Winner takes the pot instantly.
            </p>
            <div className="flex flex-col gap-2">
              <div className="text-xs font-mono text-nix-text/70 bg-nix-text/5 p-2 rounded border border-nix-text/10">
                Ephemeral Rollups (ER)
              </div>
              <div className="text-xs font-mono text-nix-text/70 bg-nix-text/5 p-2 rounded border border-nix-text/10">
                Private ER (Hidden State)
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --- WHY MAGICBLOCK SECTION --- */}
      <div className="w-full max-w-7xl mx-auto px-6 py-24 relative z-10 border-t border-nix-border/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-nix-text mb-6 leading-tight">
              Built for Speed. <br />
              <span className="text-nix-cyan">Secured by Solana.</span>
            </h2>
            <p className="text-nix-muted font-mono text-sm leading-relaxed mb-8">
              Traditional on-chain trading is too slow for real-time duels.
              That's why Nixwat leverages MagicBlock's cutting-edge
              infrastructure to give you a console-like trading experience
              directly in your browser.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-nix-cyan/10 border border-nix-cyan/20 flex items-center justify-center flex-shrink-0">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold text-nix-text mb-1">
                    Ephemeral Rollups
                  </h4>
                  <p className="text-nix-muted font-mono text-xs">
                    Zero gas fees and sub-millisecond execution for every trade
                    during the 60-second duel.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-nix-magenta/10 border border-nix-magenta/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-nix-magenta"
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
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold text-nix-text mb-1">
                    Private ER
                  </h4>
                  <p className="text-nix-muted font-mono text-xs">
                    Your opponent can't see your live positions or P&L. Pure
                    skill, zero copy-trading.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-nix-text/10 border border-nix-text/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-nix-text"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold text-nix-text mb-1">
                    Verifiable Randomness
                  </h4>
                  <p className="text-nix-muted font-mono text-xs">
                    MagicBlock VRF ensures every asset selection is provably
                    fair and unmanipulable.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual Terminal Mockup */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-nix-cyan/20 to-nix-magenta/20 blur-2xl rounded-3xl" />
            <div className="relative bg-nix-carbon border border-nix-border rounded-2xl p-6 shadow-2xl">
              <div className="flex justify-between items-center border-b border-nix-border pb-4 mb-4">
                <span className="font-mono text-xs text-nix-muted">
                  NIXWAT_TERMINAL_v1.0
                </span>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-nix-border" />
                  <div className="w-3 h-3 rounded-full bg-nix-border" />
                  <div className="w-3 h-3 rounded-full bg-nix-cyan" />
                </div>
              </div>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between text-nix-muted">
                  <span>[MATCH_FOUND]</span>
                  <span className="text-nix-cyan">0.1 SOL</span>
                </div>
                <div className="flex justify-between text-nix-muted">
                  <span>[VRF_SELECT]</span>
                  <span className="text-nix-text">WIF/USD</span>
                </div>
                <div className="flex justify-between text-nix-cyan">
                  <span>[ER_SESSION_START]</span>
                  <span>LATENCY: 0.02ms</span>
                </div>
                <div className="pl-4 border-l-2 border-nix-cyan/30 py-1">
                  <div className="flex justify-between text-nix-text">
                    <span>USER_POSITION</span>
                    <span className="text-nix-cyan">LONG 10x</span>
                  </div>
                </div>
                <div className="pl-4 border-l-2 border-nix-magenta/30 py-1">
                  <div className="flex justify-between text-nix-muted">
                    <span>OPP_POSITION</span>
                    <span className="tracking-widest">???</span>
                  </div>
                </div>
                <div className="flex justify-between text-nix-cyan pt-2 border-t border-nix-border">
                  <span>[ER_SESSION_END]</span>
                  <span>SETTLING...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- FEATURES GRID SECTION --- */}
      <div className="w-full max-w-7xl mx-auto px-6 py-24 relative z-10 border-t border-nix-border/50">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-nix-text mb-4">
            ENGINEERED FOR DEGENS
          </h2>
          <p className="text-nix-muted font-mono max-w-2xl mx-auto">
            Nixwat isn't just a game. It's a full-stack trading terminal built
            for the next generation of on-chain competitors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-nix-carbon border border-nix-border p-8 rounded-2xl hover:border-nix-cyan/50 transition-all group">
            <div className="w-12 h-12 bg-nix-void rounded-xl flex items-center justify-center mb-6 border border-nix-border group-hover:border-nix-cyan/30 transition-colors">
              <svg
                className="w-6 h-6 text-nix-cyan"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-nix-text mb-3">
              Up to 50x Leverage
            </h3>
            <p className="text-nix-muted font-mono text-sm leading-relaxed">
              Amplify your trades with up to 50x leverage. High risk, high
              reward. Only for the fearless.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-nix-carbon border border-nix-border p-8 rounded-2xl hover:border-nix-cyan/50 transition-all group">
            <div className="w-12 h-12 bg-nix-void rounded-xl flex items-center justify-center mb-6 border border-nix-border group-hover:border-nix-cyan/30 transition-colors">
              <svg
                className="w-6 h-6 text-nix-cyan"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-nix-text mb-3">
              Instant Payouts
            </h3>
            <p className="text-nix-muted font-mono text-sm leading-relaxed">
              No waiting for epoch settlements. The moment the timer hits zero,
              the winner's SOL is in their wallet.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-nix-carbon border border-nix-border p-8 rounded-2xl hover:border-nix-cyan/50 transition-all group">
            <div className="w-12 h-12 bg-nix-void rounded-xl flex items-center justify-center mb-6 border border-nix-border group-hover:border-nix-cyan/30 transition-colors">
              <svg
                className="w-6 h-6 text-nix-cyan"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-nix-text mb-3">
              Anti-Cheat VRF
            </h3>
            <p className="text-nix-muted font-mono text-sm leading-relaxed">
              Assets are chosen by verifiable randomness. No front-running, no
              bot manipulation, just pure skill.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-nix-carbon border border-nix-border p-8 rounded-2xl hover:border-nix-magenta/50 transition-all group">
            <div className="w-12 h-12 bg-nix-void rounded-xl flex items-center justify-center mb-6 border border-nix-border group-hover:border-nix-magenta/30 transition-colors">
              <svg
                className="w-6 h-6 text-nix-magenta"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-nix-text mb-3">
              ELO Matchmaking
            </h3>
            <p className="text-nix-muted font-mono text-sm leading-relaxed">
              Our MMR system ensures you're always matched against traders of
              similar skill. Climb from Bronze to Master.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-nix-carbon border border-nix-border p-8 rounded-2xl hover:border-nix-magenta/50 transition-all group">
            <div className="w-12 h-12 bg-nix-void rounded-xl flex items-center justify-center mb-6 border border-nix-border group-hover:border-nix-magenta/30 transition-colors">
              <svg
                className="w-6 h-6 text-nix-magenta"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-nix-text mb-3">
              Spectator Mode
            </h3>
            <p className="text-nix-muted font-mono text-sm leading-relaxed">
              Watch top-ranked traders battle it out live. Soon, you'll be able
              to bet on the outcome.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-nix-carbon border border-nix-border p-8 rounded-2xl hover:border-nix-magenta/50 transition-all group">
            <div className="w-12 h-12 bg-nix-void rounded-xl flex items-center justify-center mb-6 border border-nix-border group-hover:border-nix-magenta/30 transition-colors">
              <svg
                className="w-6 h-6 text-nix-magenta"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-nix-text mb-3">
              On-Chain History
            </h3>
            <p className="text-nix-muted font-mono text-sm leading-relaxed">
              Every duel is permanently recorded on Solana. Build your
              reputation and flex your P&L.
            </p>
          </div>
        </div>
      </div>

      {/* --- COMMUNITY / SOCIAL PROOF SECTION --- */}
      <div className="w-full max-w-7xl mx-auto px-6 py-24 relative z-10 border-t border-nix-border/50">
        <div className="bg-nix-carbon border border-nix-border rounded-3xl p-12 text-center relative overflow-hidden flex flex-col items-center">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, #00F0FF 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          ></div>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-nix-text mb-4 relative z-10">
            Join the Nixwat Army
          </h2>
          <p className="text-nix-muted font-mono mb-8 max-w-xl mx-auto relative z-10">
            Over 5,000 traders are already on the waitlist. Join our community
            to get alpha, participate in beta tests, and win exclusive NFTs.
          </p>

          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <a
              href="#"
              className="flex items-center gap-2 bg-nix-void border border-nix-border hover:border-nix-cyan text-nix-text px-6 py-3 rounded-lg font-mono text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Follow on X
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-nix-void border border-nix-border hover:border-nix-cyan text-nix-text px-6 py-3 rounded-lg font-mono text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
              Join Discord
            </a>
          </div>
        </div>
      </div>

      {/* --- ROADMAP SECTION --- */}
      <div className="w-full max-w-7xl mx-auto px-6 py-24 relative z-10 border-t border-nix-border/50">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-nix-text mb-4">
            THE ROADMAP
          </h2>
          <p className="text-nix-muted font-mono max-w-2xl mx-auto">
            From hackathon MVP to the premier trading esport on Solana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Phase 1 */}
          <div className="bg-nix-carbon border border-nix-cyan p-6 rounded-xl relative">
            <span className="text-xs font-mono text-nix-cyan bg-nix-cyan/10 px-2 py-1 rounded absolute -top-3 left-6">
              CURRENT
            </span>
            <h3 className="font-display text-xl font-bold text-nix-text mt-2 mb-2">
              Phase 1: Blitz
            </h3>
            <p className="text-nix-muted font-mono text-xs leading-relaxed">
              Launch the MVP on Devnet. Integrate ER, Private ER, and VRF. Build
              the core duel loop.
            </p>
          </div>
          {/* Phase 2 */}
          <div className="bg-nix-carbon border border-nix-border p-6 rounded-xl">
            <h3 className="font-display text-xl font-bold text-nix-text mb-2">
              Phase 2: Mainnet
            </h3>
            <p className="text-nix-muted font-mono text-xs leading-relaxed">
              Deploy to Solana Mainnet. Launch the Genesis Whitelist and $NIX
              token.
            </p>
          </div>
          {/* Phase 3 */}
          <div className="bg-nix-carbon border border-nix-border p-6 rounded-xl">
            <h3 className="font-display text-xl font-bold text-nix-text mb-2">
              Phase 3: Tournaments
            </h3>
            <p className="text-nix-muted font-mono text-xs leading-relaxed">
              Host weekly high-stakes tournaments with sponsored prize pools and
              live streaming.
            </p>
          </div>
          {/* Phase 4 */}
          <div className="bg-nix-carbon border border-nix-border p-6 rounded-xl">
            <h3 className="font-display text-xl font-bold text-nix-text mb-2">
              Phase 4: Expansion
            </h3>
            <p className="text-nix-muted font-mono text-xs leading-relaxed">
              Introduce team duels, spectator betting, and cross-chain asset
              support.
            </p>
          </div>
        </div>
      </div>

      {/* --- FINAL CTA SECTION --- */}
      <div className="w-full max-w-5xl mx-auto px-6 py-24 relative z-10">
        <div className="bg-gradient-to-r from-nix-carbon to-nix-void border border-nix-border rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-nix-cyan to-nix-magenta" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-nix-text mb-4">
            Ready to prove your skill?
          </h2>
          <p className="text-nix-muted font-mono mb-8 max-w-xl mx-auto">
            Join the waitlist for Genesis access, or jump straight into the
            Arena on Devnet today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/whitelist"
              className="bg-nix-cyan text-nix-void font-bold font-mono text-lg px-8 py-4 rounded hover:bg-white transition-all duration-300"
            >
              JOIN WHITELIST
            </Link>
            <Link
              href="/arena"
              className="bg-nix-void border border-nix-border text-nix-text font-bold font-mono text-lg px-8 py-4 rounded hover:border-nix-cyan transition-all duration-300"
            >
              PLAY NOW
            </Link>
          </div>
        </div>
      </div>
      {/* --- FOOTER --- */}
      <footer className="w-full border-t border-nix-border bg-nix-void relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-nix-cyan rounded flex items-center justify-center">
              <span className="text-nix-void font-display font-bold text-xs">
                N
              </span>
            </div>
            <span className="font-display font-bold text-xl tracking-tighter text-nix-text">
              NIXWAT
            </span>
            <span className="text-nix-muted font-mono text-xs ml-2 border-l border-nix-border pl-3">
              © 2026. All rights reserved.
            </span>
          </div>

          {/* Links */}
          <div className="flex gap-6 font-mono text-sm text-nix-muted">
            <a href="#" className="hover:text-nix-cyan transition-colors">
              Twitter / X
            </a>
            <a href="#" className="hover:text-nix-cyan transition-colors">
              Discord
            </a>
            <a href="#" className="hover:text-nix-cyan transition-colors">
              Docs
            </a>
            <a href="#" className="hover:text-nix-cyan transition-colors">
              MagicBlock
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
