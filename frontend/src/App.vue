<script setup lang="ts">
interface AuctionLot {
  readonly id: string
  readonly lotCode: string
  readonly category: string
  readonly artist: string
  readonly tour: string
  readonly venue: string
  readonly city: string
  readonly date: string
  readonly seats: string
  readonly currentBid: string
  readonly nextBid: string
  readonly buyNow: string
  readonly faceValue: string
  readonly savingsPct: string
  readonly bids: number
  readonly timeLeft: string
  readonly reservePct: number
  readonly accentClass: string
  readonly urgent?: boolean
}

const lots: readonly AuctionLot[] = [
  {
    id: 'lot-1',
    lotCode: 'TK-4092',
    category: 'ARENA TOUR',
    artist: 'Radiohead',
    tour: '25th Anniversary World Tour',
    venue: 'The O2 Arena',
    city: 'London',
    date: 'Sat, Nov 28 · 20:00',
    seats: 'Sec 102 · Row D · 2 Tickets',
    currentBid: '$185',
    nextBid: '$195',
    buyNow: '$290',
    faceValue: '$260',
    savingsPct: '29% Below Face',
    bids: 34,
    timeLeft: '00:42:19',
    reservePct: 100,
    accentClass: 'tone-violet',
    urgent: true,
  },
  {
    id: 'lot-2',
    lotCode: 'TK-5118',
    category: 'ELECTRONIC',
    artist: 'Fred again..',
    tour: 'USB Live Warehouse Residency',
    venue: 'Alexandra Palace',
    city: 'London',
    date: 'Fri, Dec 04 · 21:30',
    seats: 'Floor Standing GA · 2 Tickets',
    currentBid: '$128',
    nextBid: '$138',
    buyNow: '$195',
    faceValue: '$175',
    savingsPct: '27% Below Face',
    bids: 47,
    timeLeft: '01:15:08',
    reservePct: 100,
    accentClass: 'tone-pink',
    urgent: true,
  },
  {
    id: 'lot-3',
    lotCode: 'TK-6204',
    category: 'FESTIVAL VIP',
    artist: 'Coachella Valley 2027',
    tour: 'Weekend 1 VIP Wristband Pair',
    venue: 'Empire Polo Club',
    city: 'Indio, CA',
    date: 'Apr 16–18 · 3-Day Pass',
    seats: 'VIP Rose Garden · 2 Passes',
    currentBid: '$940',
    nextBid: '$960',
    buyNow: '$1,290',
    faceValue: '$1,260',
    savingsPct: '25% Below Face',
    bids: 22,
    timeLeft: '05:40:12',
    reservePct: 92,
    accentClass: 'tone-cyan',
  },
  {
    id: 'lot-4',
    lotCode: 'TK-7310',
    category: 'SYMPHONY',
    artist: 'Hans Zimmer Live',
    tour: 'Europe Symphony & Choir Tour',
    venue: 'Royal Albert Hall',
    city: 'London',
    date: 'Sun, Dec 13 · 19:30',
    seats: 'Grand Tier Box 14 · 2 Seats',
    currentBid: '$310',
    nextBid: '$325',
    buyNow: '$440',
    faceValue: '$410',
    savingsPct: '24% Below Face',
    bids: 19,
    timeLeft: '02:14:55',
    reservePct: 100,
    accentClass: 'tone-amber',
  },
  {
    id: 'lot-5',
    lotCode: 'TK-8419',
    category: 'STADIUM POP',
    artist: 'Billie Eilish',
    tour: 'Hit Me Hard & Soft Arena',
    venue: 'Madison Square Garden',
    city: 'New York',
    date: 'Wed, Dec 09 · 19:45',
    seats: 'Lower Bowl 108 · Row 6 · 2 Tix',
    currentBid: '$178',
    nextBid: '$188',
    buyNow: '$250',
    faceValue: '$225',
    savingsPct: '21% Below Face',
    bids: 53,
    timeLeft: '03:08:41',
    reservePct: 100,
    accentClass: 'tone-emerald',
  },
  {
    id: 'lot-6',
    lotCode: 'TK-9055',
    category: 'ROCK REUNION',
    artist: 'Oasis Live ’26',
    tour: 'UK & Ireland Homecoming',
    venue: 'Heaton Park',
    city: 'Manchester',
    date: 'Sat, Jul 11 · 17:00',
    seats: 'Front Pitch Circle · 2 Passes',
    currentBid: '$215',
    nextBid: '$225',
    buyNow: '$340',
    faceValue: '$295',
    savingsPct: '27% Below Face',
    bids: 61,
    timeLeft: '00:29:04',
    reservePct: 100,
    accentClass: 'tone-indigo',
    urgent: true,
  },
]

interface OAuthProvider {
  readonly id: string
  readonly name: string
  readonly iconId: string
  readonly badge?: string
}

const oauthProviders: readonly OAuthProvider[] = [
  { id: 'google', name: 'Continue with Google', iconId: '#icon-google', badge: 'Fastest' },
  { id: 'apple', name: 'Continue with Apple', iconId: '#icon-apple' },
  { id: 'spotify', name: 'Continue with Spotify', iconId: '#icon-spotify' },
  { id: 'discord', name: 'Continue with Discord', iconId: '#icon-discord' },
]

const oauthProvidersAlt: readonly OAuthProvider[] = [
  { id: 'google', name: 'Google', iconId: '#icon-google', badge: 'Instant' },
  { id: 'apple', name: 'Apple', iconId: '#icon-apple' },
  { id: 'spotify', name: 'Spotify', iconId: '#icon-spotify' },
  { id: 'github', name: 'GitHub', iconId: '#icon-github' },
]
</script>

<template>
  <!-- Shared OAuth 2.0 & UI SVG Sprite (zero duplication, crisp vector logos) -->
  <svg aria-hidden="true" class="svg-sprite">
    <symbol id="icon-google" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
      />
    </symbol>

    <symbol id="icon-apple" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M16.36 1.64c0 1.14-.47 2.24-1.24 3.04-.8.84-2.04 1.47-3.22 1.38-.15-1.1.41-2.26 1.19-3.07.82-.85 2.15-1.44 3.27-1.35zm4.55 15.66c-.45 1.03-.67 1.49-1.25 2.4-.81 1.24-1.95 2.78-3.37 2.79-1.26.01-1.59-.82-3.31-.81-1.72.01-2.08.82-3.34.81-1.42-.01-2.5-1.41-3.31-2.65-2.27-3.48-2.51-7.56-1.11-9.73.99-1.53 2.57-2.43 4.05-2.43 1.51 0 2.46.83 3.71.83 1.21 0 1.95-.83 3.7-.83 1.32 0 2.72.72 3.71 1.96-3.26 1.79-2.73 6.45.52 7.66z"
      />
    </symbol>

    <symbol id="icon-spotify" viewBox="0 0 24 24">
      <path
        fill="#1DB954"
        d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"
      />
    </symbol>

    <symbol id="icon-discord" viewBox="0 0 24 24">
      <path
        fill="#5865F2"
        d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
      />
    </symbol>

    <symbol id="icon-github" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55 0-.27-.01-1.18-.02-2.13-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11.03 11.03 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.26 5.68.42.36.79 1.07.79 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.79.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"
      />
    </symbol>

    <symbol id="icon-shield" viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 2l7 4v6c0 5.25-3.4 9.74-7 11-3.6-1.26-7-5.75-7-11V6l7-4zm-2.5 10.5l1.8 1.8 3.7-4.1"
      />
    </symbol>

    <symbol id="icon-ticket" viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3 9V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a3 3 0 0 0 0 6v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a3 3 0 0 0 0-6zm10-4v14"
      />
    </symbol>
  </svg>

  <!-- Pure CSS Stateless Controls (Zero JS State Needed) -->
  <input class="sr-control" type="radio" name="design" id="d1" checked />
  <input class="sr-control" type="radio" name="design" id="d2" />
  <input class="sr-control" type="radio" name="design" id="d3" />
  <input class="sr-control" type="radio" name="design" id="d4" />

  <input class="sr-control" type="radio" name="page" id="p-home" checked />
  <input class="sr-control" type="radio" name="page" id="p-auth" />

  <input class="sr-control" type="radio" name="auth-mode" id="a-login" checked />
  <input class="sr-control" type="radio" name="auth-mode" id="a-signup" />

  <input class="sr-control" type="checkbox" id="clean-shot" />

  <!-- Floating Evaluation Bar for Team Screenshot Switching -->
  <nav class="preview-switcher" aria-label="Design Evaluation Switcher">
    <div class="switcher-group">
      <span class="switcher-label">Concept:</span>
      <label class="switcher-pill" for="d1">1. Neon Encore</label>
      <label class="switcher-pill" for="d2">2. Swiss Stub</label>
      <label class="switcher-pill" for="d3">3. Velvet &amp; Gold</label>
      <label class="switcher-pill" for="d4">4. Daylight Arena</label>
    </div>

    <div class="switcher-divider" aria-hidden="true"></div>

    <div class="switcher-group">
      <span class="switcher-label">Screen:</span>
      <label class="switcher-pill" for="p-home">Homepage</label>
      <label class="switcher-pill" for="p-auth">Login / Sign Up (OAuth 2.0)</label>
    </div>

    <label class="switcher-shot" for="clean-shot" title="Collapse bar to take clean screenshots">
      <span class="shot-hide-text">Screenshot Mode</span>
      <span class="shot-show-text">Show Controls</span>
    </label>
  </nav>

  <!-- =======================================================================
       DESIGN 1: NEON ENCORE (Dark Concert & Nightlife Pulse)
       ======================================================================= -->
  <main class="design-canvas design-1">
    <!-- DESIGN 1: HOMEPAGE -->
    <section class="view-home">
      <div class="d1-topbar">
        <span class="d1-live-dot"></span>
        LIVE ENCORE DROP: 142 Verified Arena &amp; Festival Auctions Closing Tonight · Zero Scalper Bots
      </div>

      <header class="d1-nav">
        <div class="d1-container d1-nav-inner">
          <div class="d1-brand">
            <svg class="d1-brand-icon"><use href="#icon-ticket" /></svg>
            <span>TICKET<strong>OMAT</strong></span>
          </div>
          <nav class="d1-links">
            <a href="#d1-lots">Live Bids</a>
            <a href="#d1-lots">Arena Tours</a>
            <a href="#d1-lots">Festivals</a>
            <a href="#d1-how">How It Works</a>
          </nav>
          <div class="d1-nav-actions">
            <label class="d1-btn-ghost" for="p-auth">Log In</label>
            <label class="d1-btn-neon" for="p-auth">Connect OAuth 2.0</label>
          </div>
        </div>
      </header>

      <section class="d1-hero">
        <div class="d1-glow d1-glow-1" aria-hidden="true"></div>
        <div class="d1-glow d1-glow-2" aria-hidden="true"></div>

        <div class="d1-container d1-hero-grid">
          <div class="d1-hero-copy">
            <span class="d1-eyebrow">VERIFIED FAN AUCTIONS · ESCROW PROTECTED</span>
            <h1 class="d1-h1">Bid Live on Sold-Out Concerts.</h1>
            <p class="d1-lead">
              Real-time ticket auctions without automated scalper markups. Authenticate via OAuth 2.0,
              place transparent bids, and receive instant mobile transfer.
            </p>
            <div class="d1-hero-cta">
              <a class="d1-btn-neon d1-btn-lg" href="#d1-lots">Explore Live Lots</a>
              <label class="d1-btn-ghost d1-btn-lg" for="p-auth">Sign Up to Bid</label>
            </div>
            <div class="d1-hero-stats">
              <div><strong>$48 avg</strong><span>Saved vs Resale</span></div>
              <div><strong>99.8%</strong><span>Instant NFC Delivery</span></div>
              <div><strong>OAuth 2.0</strong><span>Anti-Bot Bidder Lock</span></div>
            </div>
          </div>

          <article class="d1-spotlight">
            <div class="d1-spotlight-head">
              <span class="d1-badge-live">● SPOTLIGHT LOT · 28 BIDS</span>
              <span class="d1-mono-tag">LOT #SP-901</span>
            </div>
            <div class="d1-spotlight-stage">
              <span class="d1-stage-genre">ELECTRONIC · LAS VEGAS</span>
              <h2>Daft Punk Tribute: One More Time</h2>
              <p>Sphere Las Vegas · Sat, Dec 19 · Floor GA Pit (2 Tickets)</p>
            </div>
            <div class="d1-spotlight-metrics">
              <div>
                <span class="d1-metric-label">Current High Bid</span>
                <strong class="d1-metric-val">$240</strong>
                <span class="d1-metric-sub">Face Value $420</span>
              </div>
              <div>
                <span class="d1-metric-label">Closes In</span>
                <strong class="d1-timer">01h : 18m : 42s</strong>
                <span class="d1-metric-sub">Auto-extends +2m on snipe</span>
              </div>
            </div>
            <div class="d1-spotlight-actions">
              <label class="d1-btn-neon d1-btn-full" for="p-auth">Bid $250 Now</label>
              <label class="d1-btn-glass" for="p-auth">Buy Now $360</label>
            </div>
          </article>
        </div>
      </section>

      <section id="d1-lots" class="d1-section">
        <div class="d1-container">
          <div class="d1-section-head">
            <div>
              <span class="d1-eyebrow">CLOSING TONIGHT</span>
              <h2 class="d1-h2">Live Concert Auctions</h2>
            </div>
            <div class="d1-pills">
              <span class="d1-pill active">All Stages</span>
              <span class="d1-pill">Arena Tours</span>
              <span class="d1-pill">Electronic</span>
              <span class="d1-pill">Festivals</span>
              <span class="d1-pill">VIP Soundcheck</span>
            </div>
          </div>

          <div class="d1-grid">
            <article v-for="lot in lots" :key="'d1-' + lot.id" class="d1-card">
              <div class="d1-card-banner" :class="lot.accentClass">
                <div class="d1-card-top">
                  <span class="d1-chip">{{ lot.category }}</span>
                  <span class="d1-chip-time" :class="{ urgent: lot.urgent }">
                    ⏱ {{ lot.timeLeft }}
                  </span>
                </div>
                <div class="d1-card-artist">
                  <h3>{{ lot.artist }}</h3>
                  <p>{{ lot.tour }}</p>
                </div>
              </div>
              <div class="d1-card-body">
                <div class="d1-card-meta">
                  <span>{{ lot.venue }} · {{ lot.city }}</span>
                  <span>{{ lot.date }}</span>
                </div>
                <div class="d1-seat-pill">{{ lot.seats }}</div>
                <div class="d1-bid-row">
                  <div>
                    <small>Current Bid ({{ lot.bids }} bids)</small>
                    <strong>{{ lot.currentBid }}</strong>
                  </div>
                  <div class="d1-bid-right">
                    <small>Buy Now</small>
                    <span>{{ lot.buyNow }}</span>
                  </div>
                </div>
                <label class="d1-btn-neon d1-btn-full" for="p-auth">
                  Place Bid ({{ lot.nextBid }})
                </label>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="d1-how" class="d1-section d1-how-section">
        <div class="d1-container">
          <div class="d1-how-grid">
            <div class="d1-how-card">
              <span class="d1-step">01</span>
              <h3>OAuth 2.0 Identity Lock</h3>
              <p>Sign in with Google, Apple, Spotify, or Discord. One verified fan per account stops scalper bots cold.</p>
            </div>
            <div class="d1-how-card">
              <span class="d1-step">02</span>
              <h3>Transparent Live Bidding</h3>
              <p>Watch real-time bid depth against retail face value. Two-minute anti-snipe extensions keep closing fair.</p>
            </div>
            <div class="d1-how-card">
              <span class="d1-step">03</span>
              <h3>Escrow &amp; Instant Transfer</h3>
              <p>Funds stay locked in escrow until verified barcodes or NFC passes land in your Ticketomat wallet.</p>
            </div>
          </div>
        </div>
      </section>
    </section>

    <!-- DESIGN 1: LOGIN / SIGNUP WITH OAUTH 2.0 -->
    <section class="view-auth d1-auth-wrap">
      <div class="d1-glow d1-glow-1" aria-hidden="true"></div>
      <div class="d1-glow d1-glow-2" aria-hidden="true"></div>

      <div class="d1-auth-card">
        <div class="d1-auth-visual">
          <label class="d1-back-link" for="p-home">← Back to Live Auctions</label>
          <div class="d1-auth-brand">
            <svg class="d1-brand-icon"><use href="#icon-ticket" /></svg>
            <span>TICKET<strong>OMAT</strong></span>
          </div>
          <div class="d1-auth-quote">
            <span class="d1-badge-live">● OAUTH 2.0 VERIFIED BIDDING</span>
            <h2>Front-row access without the bot war.</h2>
            <p>
              “Scored two Radiohead floor tickets 29% below face value in the final 40 seconds.
              Signed in with Spotify and the NFC passes arrived instantly.”
            </p>
            <div class="d1-auth-trust">
              <span><svg class="inline-ico"><use href="#icon-shield" /></svg> PKCE OAuth 2.0 Escrow</span>
              <span>100% Real-Fan Marketplace</span>
            </div>
          </div>
        </div>

        <div class="d1-auth-form-pane">
          <div class="d1-auth-tabs">
            <label class="auth-tab" for="a-login">Log In</label>
            <label class="auth-tab" for="a-signup">Sign Up</label>
          </div>

          <h3 class="login-only">Welcome back to the pit</h3>
          <h3 class="signup-only">Create your bidder pass</h3>
          <p class="d1-auth-sub">Connect an OAuth 2.0 provider for instant verified bidding.</p>

          <div class="d1-oauth-stack">
            <button
              v-for="provider in oauthProviders"
              :key="'d1-oa-' + provider.id"
              type="button"
              class="d1-oauth-btn"
            >
              <svg class="oauth-svg"><use :href="provider.iconId" /></svg>
              <span>{{ provider.name }}</span>
              <span v-if="provider.badge" class="d1-oauth-badge">OAuth 2.0</span>
            </button>
          </div>

          <div class="d1-divider"><span>or continue with email</span></div>

          <form class="d1-form" @submit.prevent>
            <label class="d1-field signup-only">
              <span>Full Name / Bidder Handle</span>
              <input type="text" placeholder="Alex Mercer (@frontrow_alex)" />
            </label>
            <label class="d1-field">
              <span>Email Address</span>
              <input type="email" placeholder="alex@concertfan.io" />
            </label>
            <label class="d1-field">
              <span>Password</span>
              <input type="password" placeholder="••••••••••••" />
            </label>
            <div class="d1-form-row login-only">
              <label class="d1-check"><input type="checkbox" checked /> Keep me logged in</label>
              <a href="#forgot" @click.prevent>Forgot password?</a>
            </div>
            <button type="button" class="d1-btn-neon d1-btn-full d1-btn-lg login-only">
              Sign In &amp; Enter Auctions
            </button>
            <button type="button" class="d1-btn-neon d1-btn-full d1-btn-lg signup-only">
              Create Verified Account
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>

  <!-- =======================================================================
       DESIGN 2: SWISS STUB (Neo-Brutalist Perforated Physical Ticket Stub)
       ======================================================================= -->
  <main class="design-canvas design-2">
    <!-- DESIGN 2: HOMEPAGE -->
    <section class="view-home">
      <div class="d2-marquee">
        ★ TICKETOMAT LIVE AUCTION EXCHANGE ★ ZERO BOT SCALPERS ★ OAUTH 2.0 VERIFIED FANS ★ ANTI-SNIPE +2M TIMER ★
      </div>

      <header class="d2-nav">
        <div class="d2-container d2-nav-inner">
          <div class="d2-brand">
            <span class="d2-brand-box">TK</span>
            <span>TICKETOMAT<sup>®</sup></span>
          </div>
          <nav class="d2-links">
            <a href="#d2-lots">[01] LIVE STUBS</a>
            <a href="#d2-lots">[02] FESTIVALS</a>
            <a href="#d2-rules">[03] BID RULES</a>
          </nav>
          <label class="d2-btn-lime" for="p-auth">SIGN IN / OAUTH 2.0 →</label>
        </div>
      </header>

      <section class="d2-hero">
        <div class="d2-container">
          <div class="d2-ticket-hero">
            <div class="d2-ticket-main">
              <div class="d2-ticket-meta">
                <span class="d2-stamp d2-stamp-orange">FEATURED AUCTION</span>
                <span class="d2-mono">SERIES 2026 // ADMIT TWO</span>
              </div>
              <h1>OUTBID THE SCALPERS.<br />CLAIM THE FRONT ROW.</h1>
              <p>
                <strong>RADIOHEAD — 25TH ANNIVERSARY ARENA TOUR</strong><br />
                THE O2 ARENA, LONDON · SAT NOV 28 · SEC 102, ROW D (2X PASSES)
              </p>
              <div class="d2-hero-actions">
                <a class="d2-btn-black" href="#d2-lots">BROWSE ALL STUBS ↓</a>
                <label class="d2-btn-white" for="p-auth">VERIFY VIA OAUTH 2.0</label>
              </div>
            </div>

            <div class="d2-ticket-perf" aria-hidden="true">
              <span class="d2-notch d2-notch-top"></span>
              <span class="d2-notch d2-notch-bot"></span>
            </div>

            <div class="d2-ticket-stub">
              <div class="d2-stub-head">
                <span>LOT #TK-4092</span>
                <span>34 BIDS</span>
              </div>
              <div class="d2-stub-price">
                <small>HIGHEST BID</small>
                <strong>$185</strong>
                <span>FACE VALUE $260 (-29%)</span>
              </div>
              <div class="d2-stub-timer">CLOSES IN 00:42:19</div>
              <label class="d2-btn-lime d2-btn-block" for="p-auth">QUICK BID +$10 →</label>
              <div class="d2-barcode" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="d2-lots" class="d2-section">
        <div class="d2-container">
          <div class="d2-filter-bar">
            <h2>ACTIVE TICKET LOTS [06]</h2>
            <div class="d2-stamps">
              <span class="d2-stamp d2-stamp-dark">ALL LOTS</span>
              <span class="d2-stamp">ARENA</span>
              <span class="d2-stamp">ELECTRONIC</span>
              <span class="d2-stamp">FESTIVAL</span>
              <span class="d2-stamp">LAST 60M</span>
            </div>
          </div>

          <div class="d2-grid">
            <article v-for="lot in lots" :key="'d2-' + lot.id" class="d2-stub-card">
              <div class="d2-stub-card-top">
                <span class="d2-cat-tag" :class="lot.accentClass">{{ lot.category }}</span>
                <span class="d2-mono">LOT #{{ lot.lotCode }}</span>
              </div>
              <div class="d2-stub-card-body">
                <h3>{{ lot.artist }}</h3>
                <p class="d2-tour">{{ lot.tour }}</p>
                <div class="d2-stub-specs">
                  <div><strong>VENUE:</strong> {{ lot.venue }}, {{ lot.city }}</div>
                  <div><strong>DATE:</strong> {{ lot.date }}</div>
                  <div><strong>SEAT:</strong> {{ lot.seats }}</div>
                </div>
              </div>
              <div class="d2-card-perf" aria-hidden="true">
                <span class="d2-side-notch left"></span>
                <span class="d2-side-notch right"></span>
              </div>
              <div class="d2-stub-card-foot">
                <div class="d2-price-box">
                  <div>
                    <small>BID ({{ lot.bids }})</small>
                    <strong>{{ lot.currentBid }}</strong>
                  </div>
                  <div>
                    <small>CLOSES</small>
                    <span class="d2-mono">{{ lot.timeLeft }}</span>
                  </div>
                  <div>
                    <small>BUY NOW</small>
                    <span>{{ lot.buyNow }}</span>
                  </div>
                </div>
                <label class="d2-btn-black d2-btn-block" for="p-auth">
                  PLACE BID {{ lot.nextBid }} ↗
                </label>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="d2-rules" class="d2-section">
        <div class="d2-container d2-rules-grid">
          <div class="d2-rule-box">
            <span>01 //</span>
            <h3>OAUTH 2.0 GATE</h3>
            <p>Every bidder authenticates through Google, Apple, Spotify, or GitHub before entering a lot.</p>
          </div>
          <div class="d2-rule-box">
            <span>02 //</span>
            <h3>PERFORATED ESCROW</h3>
            <p>Winning bids settle only after verified mobile barcodes clear into your Ticketomat vault.</p>
          </div>
          <div class="d2-rule-box">
            <span>03 //</span>
            <h3>ANTI-SNIPE CLOCK</h3>
            <p>Last-minute bids inside 120 seconds automatically add 2 minutes so human fans never lose to scripts.</p>
          </div>
        </div>
      </section>
    </section>

    <!-- DESIGN 2: LOGIN / SIGNUP WITH OAUTH 2.0 (VIP BACKSTAGE PASS) -->
    <section class="view-auth d2-auth-wrap">
      <div class="d2-pass-card">
        <div class="d2-lanyard-slot" aria-hidden="true"><span></span></div>
        <div class="d2-pass-head">
          <label class="d2-back-chip" for="p-home">← BACK TO LOTS</label>
          <span class="d2-stamp d2-stamp-lime">ADMIT ONE // OAUTH 2.0</span>
        </div>

        <div class="d2-pass-title">
          <h2>TICKETOMAT<sup>®</sup> BACKSTAGE PASS</h2>
          <p>AUTHENTICATE ONCE TO UNLOCK LIVE BIDDING &amp; INSTANT TRANSFERS</p>
        </div>

        <div class="d2-auth-tabs">
          <label class="auth-tab" for="a-login">[ LOG IN ]</label>
          <label class="auth-tab" for="a-signup">[ SIGN UP ]</label>
        </div>

        <div class="d2-oauth-grid">
          <button
            v-for="provider in oauthProvidersAlt"
            :key="'d2-oa-' + provider.id"
            type="button"
            class="d2-oauth-btn"
          >
            <svg class="oauth-svg"><use :href="provider.iconId" /></svg>
            <span>OAUTH // {{ provider.name.toUpperCase() }}</span>
          </button>
        </div>

        <div class="d2-card-perf" aria-hidden="true">
          <span class="d2-side-notch left"></span>
          <span class="d2-side-notch right"></span>
        </div>

        <form class="d2-form" @submit.prevent>
          <label class="d2-field signup-only">
            <span>BIDDER ALIAS</span>
            <input type="text" placeholder="STAGE_RUNNER_99" />
          </label>
          <label class="d2-field">
            <span>EMAIL ADDRESS</span>
            <input type="email" placeholder="fan@ticketomat.io" />
          </label>
          <label class="d2-field">
            <span>PASSWORD</span>
            <input type="password" placeholder="••••••••••••" />
          </label>
          <button type="button" class="d2-btn-lime d2-btn-block login-only">
            ENTER AUCTION FLOOR →
          </button>
          <button type="button" class="d2-btn-lime d2-btn-block signup-only">
            ISSUE VERIFIED PASS →
          </button>
        </form>

        <div class="d2-barcode d2-barcode-wide" aria-hidden="true"></div>
        <div class="d2-pass-serial">SERIAL NO. TM-OAUTH2-PKCE-2026-8841</div>
      </div>
    </section>
  </main>

  <!-- =======================================================================
       DESIGN 3: VELVET & GOLD (Prestige Venue & Editorial Box Office)
       ======================================================================= -->
  <main class="design-canvas design-3">
    <!-- DESIGN 3: HOMEPAGE -->
    <section class="view-home">
      <header class="d3-nav">
        <div class="d3-container d3-nav-inner">
          <div class="d3-nav-left">
            <a href="#d3-lots">Evening Lots</a>
            <a href="#d3-lots">Symphony &amp; Opera</a>
            <a href="#d3-concierge">Provenance</a>
          </div>
          <div class="d3-brand">
            <span class="d3-brand-main">TICKETOMAT</span>
            <span class="d3-brand-sub">PRIVATE BOX OFFICE · EST. 2026</span>
          </div>
          <div class="d3-nav-right">
            <label class="d3-btn-outline" for="p-auth">Member Sign In</label>
            <label class="d3-btn-gold" for="p-auth">OAuth Concierge</label>
          </div>
        </div>
      </header>

      <section class="d3-hero">
        <div class="d3-container d3-hero-grid">
          <div class="d3-hero-copy">
            <span class="d3-eyebrow">Season 2026 · Curated Allocation</span>
            <h1 class="d3-serif-h1">
              Front-Row &amp; <em>Box Seats</em>,<br />Priced by Demand.
            </h1>
            <p class="d3-lead">
              An auction house for iconic concert halls, stadium residencies, and private hospitality suites.
              Authenticated via OAuth 2.0 with insured mobile escrow.
            </p>
            <div class="d3-hero-cta">
              <a class="d3-btn-gold d3-btn-lg" href="#d3-lots">View Evening Catalogue</a>
              <label class="d3-btn-outline d3-btn-lg" for="p-auth">Join Private Floor</label>
            </div>
          </div>

          <article class="d3-marquee-frame">
            <div class="d3-marquee-inner">
              <div class="d3-lot-head">
                <span>LOT NO. 001 · MARQUEE</span>
                <span>RESERVE MET</span>
              </div>
              <h2 class="d3-serif-h2">Hans Zimmer &amp; Symphony Orchestra</h2>
              <p class="d3-lot-venue">Royal Albert Hall, London · Grand Tier Box 14 (4 Seats)</p>

              <div class="d3-reserve-wrap">
                <div class="d3-reserve-labels">
                  <span>Current High Bid</span>
                  <span>Estimate $620 – $950</span>
                </div>
                <div class="d3-bid-figure">$680</div>
                <div class="d3-progress"><span style="width: 88%"></span></div>
                <div class="d3-reserve-foot">
                  <span>19 Verified Bids</span>
                  <span>Closes in 02h 14m</span>
                </div>
              </div>

              <label class="d3-btn-gold d3-btn-full" for="p-auth">Enter Bid Room ($700 Next)</label>
            </div>
          </article>
        </div>
      </section>

      <section id="d3-lots" class="d3-section">
        <div class="d3-container">
          <div class="d3-cat-bar">
            <span class="d3-cat active">All Curated Lots</span>
            <span class="d3-cat">Symphony &amp; Hall</span>
            <span class="d3-cat">World Tours</span>
            <span class="d3-cat">Festival Suites</span>
            <span class="d3-cat">Closing Tonight</span>
          </div>

          <div class="d3-grid">
            <article v-for="(lot, idx) in lots" :key="'d3-' + lot.id" class="d3-lot-card">
              <div class="d3-lot-top">
                <span>LOT 00{{ idx + 2 }}</span>
                <span>{{ lot.category }}</span>
              </div>
              <h3 class="d3-serif-h3">{{ lot.artist }}</h3>
              <p class="d3-lot-tour">{{ lot.tour }}</p>
              <p class="d3-lot-meta">{{ lot.venue }} · {{ lot.city }}</p>
              <p class="d3-lot-seat">{{ lot.seats }}</p>

              <div class="d3-hairline"></div>

              <div class="d3-lot-prices">
                <div>
                  <small>HIGH BID</small>
                  <strong>{{ lot.currentBid }}</strong>
                </div>
                <div>
                  <small>CLOSES</small>
                  <span>{{ lot.timeLeft }}</span>
                </div>
                <div>
                  <small>DIRECT BUY</small>
                  <span>{{ lot.buyNow }}</span>
                </div>
              </div>

              <label class="d3-lot-link" for="p-auth">Submit Bid ({{ lot.nextBid }}) →</label>
            </article>
          </div>
        </div>
      </section>

      <section id="d3-concierge" class="d3-section d3-concierge">
        <div class="d3-container d3-concierge-grid">
          <div>
            <h4>01 · Provenance Guaranteed</h4>
            <p>Every seat location and barcode is cryptographically verified prior to listing.</p>
          </div>
          <div>
            <h4>02 · OAuth 2.0 Patron Identity</h4>
            <p>Seamless concierge login through Google, Apple, or Spotify prevents automated bidding.</p>
          </div>
          <div>
            <h4>03 · White-Glove Escrow</h4>
            <p>Settlement executes only once tickets are securely transferred to your device.</p>
          </div>
        </div>
      </section>
    </section>

    <!-- DESIGN 3: LOGIN / SIGNUP WITH OAUTH 2.0 (PRIVATE BOX OFFICE LEDGER) -->
    <section class="view-auth d3-auth-wrap">
      <div class="d3-ledger-card">
        <div class="d3-ledger-left">
          <label class="d3-back-gold" for="p-home">← Return to Catalogue</label>
          <span class="d3-eyebrow">OAuth 2.0 Concierge</span>
          <h2 class="d3-serif-h2">Instant Patron Authentication</h2>
          <p class="d3-ledger-copy">
            Authenticate via your trusted OAuth 2.0 provider to receive immediate bidding privileges
            across all Reserve and Marquee lots.
          </p>

          <div class="d3-oauth-stack">
            <button
              v-for="provider in oauthProviders"
              :key="'d3-oa-' + provider.id"
              type="button"
              class="d3-oauth-btn"
            >
              <svg class="oauth-svg"><use :href="provider.iconId" /></svg>
              <span>{{ provider.name }}</span>
              <span class="d3-oa-arrow">→</span>
            </button>
          </div>

          <div class="d3-seal">
            <svg class="inline-ico"><use href="#icon-shield" /></svg>
            <span>RFC 6749 PKCE · Insured Box Office Escrow</span>
          </div>
        </div>

        <div class="d3-ledger-right">
          <div class="d3-auth-tabs">
            <label class="auth-tab" for="a-login">Member Sign In</label>
            <label class="auth-tab" for="a-signup">New Patron</label>
          </div>

          <h3 class="d3-serif-dark login-only">Access Your Box Office Account</h3>
          <h3 class="d3-serif-dark signup-only">Register as a Verified Patron</h3>

          <form class="d3-form" @submit.prevent>
            <label class="d3-field signup-only">
              <span>Patron Full Name</span>
              <input type="text" placeholder="Clara Vance" />
            </label>
            <label class="d3-field">
              <span>Email Address</span>
              <input type="email" placeholder="clara.vance@domain.com" />
            </label>
            <label class="d3-field">
              <span>Passphrase</span>
              <input type="password" placeholder="••••••••••••" />
            </label>
            <div class="d3-form-meta login-only">
              <label><input type="checkbox" checked /> Remember device</label>
              <a href="#recover" @click.prevent>Recover passphrase</a>
            </div>
            <button type="button" class="d3-btn-obsidian d3-btn-full login-only">
              Enter Bidding Room
            </button>
            <button type="button" class="d3-btn-obsidian d3-btn-full signup-only">
              Complete Patron Registration
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>

  <!-- =======================================================================
       DESIGN 4: DAYLIGHT ARENA (Clean Consumer Bid Exchange — StockX / Stripe)
       ======================================================================= -->
  <main class="design-canvas design-4">
    <!-- DESIGN 4: HOMEPAGE -->
    <section class="view-home">
      <div class="d4-ticker">
        <div class="d4-container d4-ticker-inner">
          <span><strong>CLEARED:</strong> Coldplay Wembley · $142 (-32% vs face)</span>
          <span><strong>CLEARED:</strong> Billie Eilish MSG · $178 (-21% vs face)</span>
          <span><strong>CLEARED:</strong> Oasis Manchester · $215 (-27% vs face)</span>
        </div>
      </div>

      <header class="d4-nav">
        <div class="d4-container d4-nav-inner">
          <div class="d4-brand">
            <span class="d4-logo-badge"><svg><use href="#icon-ticket" /></svg></span>
            <span>Ticketomat</span>
          </div>

          <div class="d4-search">
            <input type="search" placeholder="Search concerts, artists, venues, or cities..." />
          </div>

          <div class="d4-nav-actions">
            <a class="d4-nav-link" href="#d4-lots">Live Market</a>
            <label class="d4-btn-ghost" for="p-auth">Log in</label>
            <label class="d4-btn-cobalt" for="p-auth">Sign up</label>
          </div>
        </div>
      </header>

      <section class="d4-hero">
        <div class="d4-container d4-hero-grid">
          <div class="d4-hero-copy">
            <span class="d4-trust-pill">
              <svg class="inline-ico"><use href="#icon-shield" /></svg>
              OAuth 2.0 Verified · 100% Buyer Escrow Guarantee
            </span>
            <h1 class="d4-h1">The Live Exchange for Event Tickets.</h1>
            <p class="d4-lead">
              Compare live bids against retail face value in real time. Bid what a seat is worth to you,
              or lock it instantly below box-office resale prices.
            </p>
            <div class="d4-city-tags">
              <span>Popular Cities:</span>
              <a href="#d4-lots">London</a>
              <a href="#d4-lots">New York</a>
              <a href="#d4-lots">Las Vegas</a>
              <a href="#d4-lots">Manchester</a>
            </div>
          </div>

          <article class="d4-market-card">
            <div class="d4-market-top">
              <div>
                <span class="d4-market-badge">HOT MARKET · 41 BIDS</span>
                <h2>Coldplay: Music of the Spheres</h2>
                <p>Wembley Stadium, London · Sec 114, Row 8 (2 Tickets)</p>
              </div>
              <span class="d4-save-pill">32% Below Face</span>
            </div>

            <div class="d4-market-metrics">
              <div class="d4-metric-box highlight">
                <small>Highest Bid</small>
                <strong>$142</strong>
              </div>
              <div class="d4-metric-box">
                <small>Lowest Buy-Now</small>
                <strong>$195</strong>
              </div>
              <div class="d4-metric-box">
                <small>Face Value</small>
                <span class="strike">$210</span>
              </div>
            </div>

            <div class="d4-spark-row">
              <span>Recent 6h Bid Activity</span>
              <div class="d4-bars" aria-hidden="true">
                <i style="height: 35%"></i><i style="height: 55%"></i><i style="height: 45%"></i>
                <i style="height: 75%"></i><i style="height: 65%"></i><i style="height: 92%"></i>
                <i style="height: 100%"></i>
              </div>
              <span class="d4-countdown">54m left</span>
            </div>

            <div class="d4-market-actions">
              <label class="d4-btn-cobalt d4-btn-full" for="p-auth">Place Bid ($150)</label>
              <label class="d4-btn-outline d4-btn-full" for="p-auth">Buy Now ($195)</label>
            </div>
          </article>
        </div>
      </section>

      <section id="d4-lots" class="d4-section">
        <div class="d4-container">
          <div class="d4-toolbar">
            <div class="d4-chips">
              <span class="d4-chip active">All Events</span>
              <span class="d4-chip">Concerts</span>
              <span class="d4-chip">Festivals</span>
              <span class="d4-chip">Electronic</span>
              <span class="d4-chip">Under $200</span>
            </div>
            <details class="d4-sort-dropdown">
              <summary>Sort: Ending Soonest ▾</summary>
              <ul>
                <li>Ending Soonest</li>
                <li>Biggest % Below Face</li>
                <li>Most Active Bids</li>
                <li>Lowest Current Bid</li>
              </ul>
            </details>
          </div>

          <div class="d4-grid">
            <article v-for="lot in lots" :key="'d4-' + lot.id" class="d4-card">
              <div class="d4-card-head" :class="lot.accentClass">
                <span class="d4-card-cat">{{ lot.category }}</span>
                <span class="d4-save-pill">{{ lot.savingsPct }}</span>
              </div>
              <div class="d4-card-body">
                <h3>{{ lot.artist }}</h3>
                <p class="d4-card-sub">{{ lot.venue }}, {{ lot.city }} · {{ lot.date }}</p>
                <div class="d4-seat-tag">{{ lot.seats }}</div>

                <div class="d4-card-prices">
                  <div>
                    <small>Current Bid ({{ lot.bids }})</small>
                    <strong>{{ lot.currentBid }}</strong>
                  </div>
                  <div>
                    <small>Buy Now</small>
                    <span>{{ lot.buyNow }}</span>
                  </div>
                  <div>
                    <small>Time Left</small>
                    <span class="d4-time-pill" :class="{ urgent: lot.urgent }">{{ lot.timeLeft }}</span>
                  </div>
                </div>

                <div class="d4-card-btns">
                  <label class="d4-btn-cobalt d4-btn-full" for="p-auth">Bid {{ lot.nextBid }}</label>
                  <label class="d4-btn-outline" for="p-auth">Buy</label>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="d4-section d4-trust-band">
        <div class="d4-container d4-trust-grid">
          <div class="d4-trust-tile">
            <strong>OAuth 2.0 Identity</strong>
            <p>Verified bidder logins prevent bots and multi-account sniping.</p>
          </div>
          <div class="d4-trust-tile">
            <strong>Live Market Pricing</strong>
            <p>Clear comparison between current bid, instant buyout, and face value.</p>
          </div>
          <div class="d4-trust-tile">
            <strong>100% Escrow Hold</strong>
            <p>Your payment stays protected until ticket barcode transfer confirms.</p>
          </div>
          <div class="d4-trust-tile">
            <strong>Instant Transfer</strong>
            <p>Receive Apple Wallet &amp; NFC passes directly after winning.</p>
          </div>
        </div>
      </section>
    </section>

    <!-- DESIGN 4: LOGIN / SIGNUP WITH OAUTH 2.0 -->
    <section class="view-auth d4-auth-wrap">
      <div class="d4-auth-shell">
        <div class="d4-auth-top-bar">
          <div class="d4-brand">
            <span class="d4-logo-badge"><svg><use href="#icon-ticket" /></svg></span>
            <span>Ticketomat</span>
          </div>
          <label class="d4-back-link" for="p-home">← Back to Exchange</label>
        </div>

        <div class="d4-auth-card">
          <div class="d4-trust-pill d4-trust-center">
            <svg class="inline-ico"><use href="#icon-shield" /></svg>
            OAuth 2.0 Secured · Escrow Protected
          </div>

          <div class="d4-auth-tabs">
            <label class="auth-tab" for="a-login">Log in</label>
            <label class="auth-tab" for="a-signup">Create account</label>
          </div>

          <h2 class="login-only">Sign in to start bidding</h2>
          <h2 class="signup-only">Create your Ticketomat account</h2>
          <p class="d4-auth-sub">One-click OAuth 2.0 verification unlocks instant live bids.</p>

          <div class="d4-oauth-stack">
            <button
              v-for="provider in oauthProvidersAlt"
              :key="'d4-oa-' + provider.id"
              type="button"
              class="d4-oauth-btn"
            >
              <svg class="oauth-svg"><use :href="provider.iconId" /></svg>
              <span>Continue with {{ provider.name }}</span>
              <span v-if="provider.badge" class="d4-rec-pill">{{ provider.badge }}</span>
            </button>
          </div>

          <div class="d4-divider"><span>OR USE EMAIL</span></div>

          <form class="d4-form" @submit.prevent>
            <label class="d4-field signup-only">
              <span>Full Name</span>
              <input type="text" placeholder="Jordan Taylor" />
            </label>
            <label class="d4-field">
              <span>Email address</span>
              <input type="email" placeholder="jordan@example.com" />
            </label>
            <label class="d4-field">
              <span>Password</span>
              <input type="password" placeholder="Enter your password" />
            </label>
            <div class="d4-form-meta login-only">
              <label><input type="checkbox" checked /> Remember me</label>
              <a href="#reset" @click.prevent>Forgot password?</a>
            </div>
            <button type="button" class="d4-btn-cobalt d4-btn-full d4-btn-lg login-only">
              Log in to Ticketomat
            </button>
            <button type="button" class="d4-btn-cobalt d4-btn-full d4-btn-lg signup-only">
              Create Verified Account
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>
