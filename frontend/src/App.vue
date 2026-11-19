<script setup lang="ts">
import { Fragment, h, type FunctionalComponent } from 'vue'

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

const oauthProvidersAlt: readonly OAuthProvider[] = [
  { id: 'google', name: 'Google', iconId: '#icon-google', badge: 'Instant' },
  { id: 'apple', name: 'Apple', iconId: '#icon-apple' },
  { id: 'spotify', name: 'Spotify', iconId: '#icon-spotify' },
  { id: 'github', name: 'GitHub', iconId: '#icon-github' },
]

interface TicketFormatOption {
  readonly id: 'f-cards' | 'f-stubs' | 'f-table' | 'f-posters'
  readonly label: string
  readonly shortLabel: string
  readonly iconId: string
}

const ticketFormats: readonly TicketFormatOption[] = [
  { id: 'f-cards', label: 'Card Grid', shortLabel: 'Cards', iconId: '#icon-fmt-cards' },
  { id: 'f-stubs', label: 'Ticket Stubs', shortLabel: 'Stubs', iconId: '#icon-fmt-stubs' },
  { id: 'f-table', label: 'Market Table', shortLabel: 'Table', iconId: '#icon-fmt-table' },
  { id: 'f-posters', label: 'Poster Showcase', shortLabel: 'Posters', iconId: '#icon-fmt-posters' },
]

const FormatSwitcherBar: FunctionalComponent<{ prefix: string }> = (props) =>
  h('div', { class: 'fmt-switcher-bar', role: 'group', 'aria-label': 'Ticket display format' }, [
    h('span', { class: 'fmt-switcher-title' }, 'View:'),
    ...ticketFormats.map((fmt) =>
      h('label', { key: `${props.prefix}-${fmt.id}`, class: 'fmt-switch-btn', for: fmt.id }, [
        h('svg', { class: 'fmt-ico', 'aria-hidden': 'true' }, [h('use', { href: fmt.iconId })]),
        h('span', fmt.label),
      ]),
    ),
  ])

const TicketFormatViews: FunctionalComponent<{ prefix: string }> = (props) =>
  h(Fragment, null, [
    h(
      'div',
      { class: 'fmt-view-stubs' },
      lots.map((lot) =>
        h('article', { key: `${props.prefix}-stub-${lot.id}`, class: 'fmt-stub-ticket' }, [
          h('div', { class: 'fmt-stub-main' }, [
            h('div', { class: ['fmt-stub-accent', lot.accentClass], 'aria-hidden': 'true' }),
            h('div', { class: 'fmt-stub-top' }, [
              h('span', { class: ['fmt-cat-badge', lot.accentClass] }, lot.category),
              h('span', { class: 'fmt-lot-code' }, `Lot ${lot.lotCode}`),
              h('span', { class: 'fmt-savings-pill' }, lot.savingsPct),
            ]),
            h('div', { class: 'fmt-stub-headline' }, [h('h3', lot.artist), h('p', lot.tour)]),
            h('div', { class: 'fmt-stub-specs' }, [
              h('div', [h('small', 'Venue & City'), h('span', `${lot.venue} · ${lot.city}`)]),
              h('div', [h('small', 'Date & Showtime'), h('span', lot.date)]),
              h('div', [h('small', 'Seats'), h('span', lot.seats)]),
            ]),
          ]),
          h('div', { class: 'fmt-stub-perf', 'aria-hidden': 'true' }, [
            h('span', { class: 'fmt-notch fmt-notch-top' }),
            h('span', { class: 'fmt-notch fmt-notch-bot' }),
          ]),
          h('div', { class: 'fmt-stub-right' }, [
            h('div', { class: ['fmt-stub-timer', { urgent: lot.urgent }] }, [
              h('span', `⏱ ${lot.timeLeft}`),
              lot.urgent ? h('span', { class: 'fmt-urgent-tag' }, 'Closing Soon') : null,
            ]),
            h('div', { class: 'fmt-stub-price' }, [
              h('small', `Current Bid (${lot.bids} bids)`),
              h('strong', lot.currentBid),
              h('span', { class: 'fmt-stub-sub' }, [
                `Buy ${lot.buyNow} · Face `,
                h('del', lot.faceValue),
              ]),
            ]),
            h('label', { class: 'fmt-action-btn', for: 'p-auth' }, `Bid ${lot.nextBid} →`),
            h('div', { class: 'fmt-barcode', 'aria-hidden': 'true' }),
          ]),
        ]),
      ),
    ),

    h('div', { class: 'fmt-view-table' }, [
      h('div', { class: 'fmt-ledger-wrap' }, [
        h('div', { class: 'fmt-ledger-head', 'aria-hidden': 'true' }, [
          h('span', 'Event & Lot'),
          h('span', 'Venue & Showtime'),
          h('span', 'Seats'),
          h('span', 'Bids & Reserve'),
          h('span', 'Time Left'),
          h('span', 'Current Bid'),
          h('span', 'Buy Now / Face'),
          h('span', 'Action'),
        ]),
        ...lots.map((lot) =>
          h('div', { key: `${props.prefix}-row-${lot.id}`, class: 'fmt-ledger-row' }, [
            h('div', { class: 'fmt-cell fmt-cell-event' }, [
              h('div', { class: 'fmt-cell-badges' }, [
                h('span', { class: 'fmt-lot-code' }, `Lot ${lot.lotCode}`),
                h('span', { class: ['fmt-cat-badge', lot.accentClass] }, lot.category),
              ]),
              h('strong', lot.artist),
              h('span', { class: 'fmt-muted' }, lot.tour),
            ]),
            h('div', { class: 'fmt-cell fmt-cell-venue' }, [
              h('span', { class: 'fmt-cell-label' }, 'Venue & Showtime'),
              h('strong', `${lot.venue}, ${lot.city}`),
              h('span', { class: 'fmt-muted' }, lot.date),
            ]),
            h('div', { class: 'fmt-cell fmt-cell-seats' }, [
              h('span', { class: 'fmt-cell-label' }, 'Seats'),
              h('span', { class: 'fmt-seat-chip' }, lot.seats),
            ]),
            h('div', { class: 'fmt-cell fmt-cell-reserve' }, [
              h('span', { class: 'fmt-cell-label' }, 'Reserve'),
              h('div', { class: 'fmt-reserve-meta' }, [
                h('span', `${lot.bids} bids`),
                h('span', `${lot.reservePct}%`),
              ]),
              h('div', { class: 'fmt-mini-bar' }, [
                h('span', { style: { width: `${lot.reservePct}%` } }),
              ]),
            ]),
            h('div', { class: 'fmt-cell fmt-cell-time' }, [
              h('span', { class: 'fmt-cell-label' }, 'Time Left'),
              h('span', { class: ['fmt-timer-badge', { urgent: lot.urgent }] }, lot.timeLeft),
            ]),
            h('div', { class: 'fmt-cell fmt-cell-bid' }, [
              h('span', { class: 'fmt-cell-label' }, 'Current Bid'),
              h('strong', { class: 'fmt-bid-num' }, lot.currentBid),
              h('span', { class: 'fmt-savings-text' }, lot.savingsPct),
            ]),
            h('div', { class: 'fmt-cell fmt-cell-buy' }, [
              h('span', { class: 'fmt-cell-label' }, 'Buy Now'),
              h('span', { class: 'fmt-buy-num' }, lot.buyNow),
              h('span', { class: 'fmt-muted' }, `Face ${lot.faceValue}`),
            ]),
            h('div', { class: 'fmt-cell fmt-cell-action' }, [
              h('label', { class: 'fmt-action-btn fmt-action-sm', for: 'p-auth' }, `Bid ${lot.nextBid}`),
            ]),
          ]),
        ),
      ]),
    ]),

    h(
      'div',
      { class: 'fmt-view-posters' },
      lots.map((lot) =>
        h('article', { key: `${props.prefix}-poster-${lot.id}`, class: 'fmt-poster-card' }, [
          h('div', { class: ['fmt-poster-stage', lot.accentClass] }, [
            h('div', { class: 'fmt-poster-top' }, [
              h('div', { class: 'fmt-poster-badges' }, [
                h('span', { class: ['fmt-cat-badge', lot.accentClass] }, lot.category),
                h('span', { class: 'fmt-lot-code' }, `Lot ${lot.lotCode}`),
              ]),
              h('div', { class: 'fmt-date-stamp' }, [h('small', lot.city), h('span', lot.date)]),
            ]),
            h('div', { class: 'fmt-poster-center' }, [
              h('span', { class: 'fmt-poster-venue' }, lot.venue),
              h('h3', lot.artist),
              h('p', lot.tour),
            ]),
            h('div', { class: 'fmt-poster-foot' }, [
              h('span', { class: 'fmt-seat-chip' }, lot.seats),
              h('span', { class: 'fmt-savings-pill' }, lot.savingsPct),
            ]),
          ]),
          h('div', { class: 'fmt-poster-cockpit' }, [
            h('div', { class: 'fmt-poster-reserve' }, [
              h('div', { class: 'fmt-poster-reserve-row' }, [
                h('span', `Reserve ${lot.reservePct}% · ${lot.bids} Verified Bids`),
                h('span', { class: ['fmt-timer-badge', { urgent: lot.urgent }] }, `⏱ ${lot.timeLeft}`),
              ]),
              h('div', { class: 'fmt-progress-track' }, [
                h('span', { style: { width: `${lot.reservePct}%` } }),
              ]),
            ]),
            h('div', { class: 'fmt-poster-metrics' }, [
              h('div', { class: 'fmt-poster-metric highlight' }, [
                h('small', 'Current Bid'),
                h('strong', lot.currentBid),
              ]),
              h('div', { class: 'fmt-poster-metric' }, [
                h('small', 'Buy Now'),
                h('strong', lot.buyNow),
              ]),
              h('div', { class: 'fmt-poster-metric' }, [
                h('small', 'Face Value'),
                h('span', { class: 'fmt-strike' }, lot.faceValue),
              ]),
            ]),
            h('div', { class: 'fmt-poster-actions' }, [
              h('label', { class: 'fmt-action-btn', for: 'p-auth' }, `Bid ${lot.nextBid} →`),
              h('label', { class: 'fmt-action-secondary', for: 'p-auth' }, `Buy ${lot.buyNow}`),
            ]),
          ]),
        ]),
      ),
    ),
  ])

interface SwissVariantRule {
  readonly step: string
  readonly title: string
  readonly desc: string
}

interface SwissStubVariant {
  readonly id: string
  readonly prefix: 'd2' | 'd3' | 'd4' | 'd5'
  readonly canvasClass: 'design-2' | 'design-3' | 'design-4' | 'design-5'
  readonly marquee: string
  readonly brandMark: string
  readonly brandName: string
  readonly navLinks: readonly { readonly label: string; readonly anchor: 'lots' | 'rules' }[]
  readonly navCta: string
  readonly heroBadge: string
  readonly heroSeries: string
  readonly heroHeadlineTop: string
  readonly heroHeadlineBottom: string
  readonly heroEventTitle: string
  readonly heroEventMeta: string
  readonly heroPrimaryCta: string
  readonly heroSecondaryCta: string
  readonly heroStubLot: string
  readonly heroStubBids: string
  readonly heroPriceLabel: string
  readonly heroDiscountNote: string
  readonly heroTimerText: string
  readonly heroBidCta: string
  readonly lotsTitle: string
  readonly filterChips: readonly string[]
  readonly cardBidLabel: string
  readonly rules: readonly SwissVariantRule[]
  readonly authBackLabel: string
  readonly authBadge: string
  readonly authTitle: string
  readonly authSubtitle: string
  readonly authNameLabel: string
  readonly authNamePlaceholder: string
  readonly authEmailPlaceholder: string
  readonly authLoginBtn: string
  readonly authSignupBtn: string
  readonly authFooterNote: string
}

const swissVariants: readonly SwissStubVariant[] = [
  {
    id: 'velvet-swiss',
    prefix: 'd2',
    canvasClass: 'design-2',
    marquee:
      'Verified Fan Ticket Exchange · Zero Bot Scalpers · Instant OAuth 2.0 Sign-In · +2 Min Anti-Snipe Protection',
    brandMark: 'TK',
    brandName: 'Ticketomat',
    navLinks: [
      { label: 'Live Auctions', anchor: 'lots' },
      { label: 'Festivals', anchor: 'lots' },
      { label: 'Buyer Guarantee', anchor: 'rules' },
    ],
    navCta: 'Sign In · Fan Pass',
    heroBadge: 'Featured Auction',
    heroSeries: '2026 Arena Tour · 2 Tickets',
    heroHeadlineTop: 'Outbid the scalpers.',
    heroHeadlineBottom: 'Claim the front row.',
    heroEventTitle: 'Radiohead — 25th Anniversary World Tour',
    heroEventMeta: 'The O2 Arena, London · Sat, Nov 28 · Sec 102, Row D (2 Passes)',
    heroPrimaryCta: 'Browse Live Tickets ↓',
    heroSecondaryCta: 'Verify via OAuth 2.0',
    heroStubLot: 'Lot TK-4092',
    heroStubBids: '34 bids',
    heroPriceLabel: 'Highest Bid',
    heroDiscountNote: '29% below $260 face value',
    heroTimerText: 'Ends in 42m 19s',
    heroBidCta: 'Place Bid $195 →',
    lotsTitle: 'Live Ticket Auctions',
    filterChips: ['All Shows', 'Arena Tours', 'Electronic', 'Festivals', 'Ending Soon'],
    cardBidLabel: 'Place Bid',
    rules: [
      {
        step: 'Step 1',
        title: '1-Click Fan Verification',
        desc: 'Sign in once with Google, Apple, Spotify, or GitHub so every auction stays 100% bot-free.',
      },
      {
        step: 'Step 2',
        title: 'Escrow Ticket Guarantee',
        desc: 'Your funds stay protected in escrow until verified mobile tickets land safely in your Ticketomat wallet.',
      },
      {
        step: 'Step 3',
        title: 'Fair Overtime Clock',
        desc: 'Any bid in the final 2 minutes automatically adds +2 minutes so real fans never lose to last-second scripts.',
      },
    ],
    authBackLabel: '← Back to Auctions',
    authBadge: 'Verified Fan Pass · OAuth 2.0',
    authTitle: 'Ticketomat Fan Pass',
    authSubtitle: 'Sign in once with your favorite account to unlock live bidding & instant mobile transfers.',
    authNameLabel: 'Full Name',
    authNamePlaceholder: 'Alex Rivera',
    authEmailPlaceholder: 'alex@example.com',
    authLoginBtn: 'Sign In to Bid →',
    authSignupBtn: 'Create Verified Pass →',
    authFooterNote: 'Admit One · Verified Fan Pass · Ticketomat Exchange 2026',
  },
  {
    id: 'kunsthalle-stub',
    prefix: 'd3',
    canvasClass: 'design-3',
    marquee:
      'Curated Concert & Festival Exchange · Every Fan Verified · Protected Escrow Transfers · Fair Overtime Clock',
    brandMark: 'T',
    brandName: 'Ticketomat',
    navLinks: [
      { label: 'Box Office', anchor: 'lots' },
      { label: 'Symphony & Festivals', anchor: 'lots' },
      { label: 'Guarantee', anchor: 'rules' },
    ],
    navCta: 'Member Sign In',
    heroBadge: 'Tonight’s Spotlight',
    heroSeries: 'Season 2026 · Admit Two',
    heroHeadlineTop: 'Front-row seats,',
    heroHeadlineBottom: 'without the scalpers.',
    heroEventTitle: 'Radiohead — 25th Anniversary World Tour',
    heroEventMeta: 'The O2 Arena, London · Sat, Nov 28 · Sec 102, Row D (2 Passes)',
    heroPrimaryCta: 'Explore Concert Lots ↓',
    heroSecondaryCta: 'Member Verification',
    heroStubLot: 'Lot TK-4092',
    heroStubBids: '34 verified bids',
    heroPriceLabel: 'Current High Bid',
    heroDiscountNote: 'Save 29% vs $260 face value',
    heroTimerText: 'Closes in 42m 19s',
    heroBidCta: 'Place Bid $195 →',
    lotsTitle: 'Concert Hall & Tour Lots',
    filterChips: ['All Performances', 'Arena', 'Symphony', 'Festivals', 'Closing Soon'],
    cardBidLabel: 'Bid',
    rules: [
      {
        step: 'Step 1',
        title: 'Single-Identity Gate',
        desc: 'Quick OAuth 2.0 sign-in through Google, Apple, Spotify, or GitHub ensures real fans hold every seat.',
      },
      {
        step: 'Step 2',
        title: 'Insured Box-Office Escrow',
        desc: 'Payments settle only after official venue barcodes clear cleanly into your verified Ticketomat pass.',
      },
      {
        step: 'Step 3',
        title: 'Graceful Overtime Rule',
        desc: 'Bids placed in the closing two minutes extend the curtain clock by +2 minutes for fair competition.',
      },
    ],
    authBackLabel: '← Return to Box Office',
    authBadge: 'Patron Admission · OAuth 2.0',
    authTitle: 'Concert Patron Pass',
    authSubtitle: 'Authenticate once to place verified bids and receive guaranteed box-office transfers.',
    authNameLabel: 'Patron Name',
    authNamePlaceholder: 'Clara Lindqvist',
    authEmailPlaceholder: 'clara@example.com',
    authLoginBtn: 'Enter Box Office →',
    authSignupBtn: 'Issue Patron Pass →',
    authFooterNote: 'Season 2026 · Protected Admission · Ticketomat Box Office',
  },
  {
    id: 'festival-pop-stub',
    prefix: 'd4',
    canvasClass: 'design-4',
    marquee:
      'Live Music Fan Exchange · Fair Prices Below Face Value · 1-Click OAuth Sign-In · Human-First Bidding',
    brandMark: '★',
    brandName: 'Ticketomat',
    navLinks: [
      { label: 'Live Drops', anchor: 'lots' },
      { label: 'Festival Passes', anchor: 'lots' },
      { label: 'Fair Bidding', anchor: 'rules' },
    ],
    navCta: 'Get Fan Pass',
    heroBadge: 'Hot Auction',
    heroSeries: '2026 Tour · 2 Verified Passes',
    heroHeadlineTop: 'Skip the bots.',
    heroHeadlineBottom: 'Get in the pit.',
    heroEventTitle: 'Radiohead — 25th Anniversary World Tour',
    heroEventMeta: 'The O2 Arena, London · Sat, Nov 28 · Sec 102, Row D (2 Passes)',
    heroPrimaryCta: 'See Live Drops ↓',
    heroSecondaryCta: '1-Click OAuth Sign-In',
    heroStubLot: 'Lot TK-4092',
    heroStubBids: '34 bids',
    heroPriceLabel: 'Leading Bid',
    heroDiscountNote: '29% off $260 face value',
    heroTimerText: '42m 19s left',
    heroBidCta: 'Bid $195 Now →',
    lotsTitle: 'Festival & Arena Drops',
    filterChips: ['All Drops', 'Arena', 'Electronic', 'VIP Festivals', 'Last Hour'],
    cardBidLabel: 'Bid',
    rules: [
      {
        step: 'Step 1',
        title: 'Instant Fan Wristband',
        desc: 'Connect Google, Apple, Spotify, or GitHub in seconds to keep ticket scalpers and bots out.',
      },
      {
        step: 'Step 2',
        title: '100% Transfer Escrow',
        desc: 'Your payment stays safely held until your mobile passes or festival wristbands are confirmed yours.',
      },
      {
        step: 'Step 3',
        title: 'Anti-Snipe Overtime',
        desc: 'Late bids within 2 minutes add +2 minutes to the countdown so fans can respond without stress.',
      },
    ],
    authBackLabel: '← Back to Drops',
    authBadge: 'VIP Fan Wristband · OAuth 2.0',
    authTitle: 'Festival Fan Pass',
    authSubtitle: 'Unlock live drops, instant bid alerts, and verified mobile wristband transfers.',
    authNameLabel: 'Your Name',
    authNamePlaceholder: 'Maya Chen',
    authEmailPlaceholder: 'maya@example.com',
    authLoginBtn: 'Jump Into Auctions →',
    authSignupBtn: 'Claim Fan Pass →',
    authFooterNote: 'Admit Two · Fan-to-Fan Festival Pass · Ticketomat 2026',
  },
  {
    id: 'letterpress-stub',
    prefix: 'd5',
    canvasClass: 'design-5',
    marquee:
      'Box-Office Direct Exchange · Verified Real Fans Only · Escrow Ticket Protection · +2 Min Final Call Rule',
    brandMark: 'TM',
    brandName: 'Ticketomat',
    navLinks: [
      { label: 'All Tickets', anchor: 'lots' },
      { label: 'Festival Passes', anchor: 'lots' },
      { label: 'Escrow Rules', anchor: 'rules' },
    ],
    navCta: 'Sign In',
    heroBadge: 'Headliner Lot',
    heroSeries: 'London 2026 · 2 Seated Passes',
    heroHeadlineTop: 'Real concert tickets.',
    heroHeadlineBottom: 'Honest fan prices.',
    heroEventTitle: 'Radiohead — 25th Anniversary World Tour',
    heroEventMeta: 'The O2 Arena, London · Sat, Nov 28 · Sec 102, Row D (2 Passes)',
    heroPrimaryCta: 'View Active Stubs ↓',
    heroSecondaryCta: 'Verify Fan Account',
    heroStubLot: 'Lot TK-4092',
    heroStubBids: '34 bids',
    heroPriceLabel: 'Current Bid',
    heroDiscountNote: '$260 Face Value · Save 29%',
    heroTimerText: 'Ends in 42m 19s',
    heroBidCta: 'Place Bid $195 →',
    lotsTitle: 'Available Ticket Stubs',
    filterChips: ['All Stubs', 'Arena Shows', 'Club Nights', 'Festivals', 'Final Call'],
    cardBidLabel: 'Place Bid',
    rules: [
      {
        step: 'Step 1',
        title: 'Trusted Fan Sign-In',
        desc: 'One quick OAuth 2.0 check via Google, Apple, Spotify, or GitHub verifies every bidder on the floor.',
      },
      {
        step: 'Step 2',
        title: 'Box-Office Escrow',
        desc: 'We hold funds securely until authentic venue tickets are delivered directly to your Ticketomat pass.',
      },
      {
        step: 'Step 3',
        title: 'Final Call Extension',
        desc: 'Every bid placed in the last 120 seconds resets the timer by +2 minutes so humans beat automated bots.',
      },
    ],
    authBackLabel: '← Back to Tickets',
    authBadge: 'Box-Office Pass · OAuth 2.0',
    authTitle: 'Box-Office Fan Pass',
    authSubtitle: 'Sign in once with a trusted account to bid on verified tickets below face value.',
    authNameLabel: 'Full Name',
    authNamePlaceholder: 'Julian Brooks',
    authEmailPlaceholder: 'julian@example.com',
    authLoginBtn: 'Enter Ticket Exchange →',
    authSignupBtn: 'Activate Fan Pass →',
    authFooterNote: 'Archival Ticket Stock · Verified Fan Exchange · Ticketomat 2026',
  },
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

    <symbol id="icon-fmt-cards" viewBox="0 0 24 24">
      <rect x="3" y="3" width="8" height="8" rx="1.5" fill="none" stroke="currentColor" stroke-width="2" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" fill="none" stroke="currentColor" stroke-width="2" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" fill="none" stroke="currentColor" stroke-width="2" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" fill="none" stroke="currentColor" stroke-width="2" />
    </symbol>

    <symbol id="icon-fmt-stubs" viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2 8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8zm13-2v12"
      />
    </symbol>

    <symbol id="icon-fmt-table" viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        d="M8 6h13M8 12h13M8 18h13M3 6h1M3 12h1M3 18h1"
      />
    </symbol>

    <symbol id="icon-fmt-posters" viewBox="0 0 24 24">
      <rect x="3" y="3" width="8" height="18" rx="1.5" fill="none" stroke="currentColor" stroke-width="2" />
      <rect x="13" y="3" width="8" height="18" rx="1.5" fill="none" stroke="currentColor" stroke-width="2" />
      <path fill="none" stroke="currentColor" stroke-width="2" d="M3 10h8M13 10h8" />
    </symbol>
  </svg>

  <!-- Pure CSS Stateless Controls (Zero JS State Needed) -->
  <input class="sr-control" type="radio" name="design" id="d1" checked />
  <input class="sr-control" type="radio" name="design" id="d2" />
  <input class="sr-control" type="radio" name="design" id="d3" />
  <input class="sr-control" type="radio" name="design" id="d4" />
  <input class="sr-control" type="radio" name="design" id="d5" />

  <input class="sr-control" type="radio" name="page" id="p-home" checked />
  <input class="sr-control" type="radio" name="page" id="p-auth" />

  <input class="sr-control" type="radio" name="auth-mode" id="a-login" checked />
  <input class="sr-control" type="radio" name="auth-mode" id="a-signup" />

  <input class="sr-control" type="radio" name="ticket-format" id="f-cards" checked />
  <input class="sr-control" type="radio" name="ticket-format" id="f-stubs" />
  <input class="sr-control" type="radio" name="ticket-format" id="f-table" />
  <input class="sr-control" type="radio" name="ticket-format" id="f-posters" />

  <input class="sr-control" type="checkbox" id="clean-shot" />

  <!-- Floating Evaluation Bar for Team Screenshot Switching -->
  <nav class="preview-switcher" aria-label="Design Evaluation Switcher">
    <div class="switcher-group">
      <span class="switcher-label">Concept:</span>
      <label class="switcher-pill" for="d1">1. Swiss Stub (Original)</label>
      <label class="switcher-pill" for="d2">2. Velvet Swiss</label>
      <label class="switcher-pill" for="d3">3. Kunsthalle Stub</label>
      <label class="switcher-pill" for="d4">4. Festival Pop Stub</label>
      <label class="switcher-pill" for="d5">5. Letterpress Stub</label>
    </div>

    <div class="switcher-divider" aria-hidden="true"></div>

    <div class="switcher-group">
      <span class="switcher-label">Format:</span>
      <label
        v-for="fmt in ticketFormats"
        :key="'top-' + fmt.id"
        class="switcher-pill switcher-fmt-pill"
        :for="fmt.id"
      >
        <svg class="fmt-ico" aria-hidden="true"><use :href="fmt.iconId" /></svg>
        <span>{{ fmt.shortLabel }}</span>
      </label>
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
       DESIGN 1: SWISS STUB (Original Reference — Neo-Brutalist Perforated Ticket Stub)
       ======================================================================= -->
  <main class="design-canvas design-1">
    <!-- DESIGN 1: HOMEPAGE -->
    <section class="view-home">
      <div class="d1-marquee">
        ★ TICKETOMAT LIVE AUCTION EXCHANGE ★ ZERO BOT SCALPERS ★ OAUTH 2.0 VERIFIED FANS ★ ANTI-SNIPE +2M TIMER ★
      </div>

      <header class="d1-nav">
        <div class="d1-container d1-nav-inner">
          <div class="d1-brand">
            <span class="d1-brand-box">TK</span>
            <span>TICKETOMAT<sup>®</sup></span>
          </div>
          <nav class="d1-links">
            <a href="#d1-lots">[01] LIVE STUBS</a>
            <a href="#d1-lots">[02] FESTIVALS</a>
            <a href="#d1-rules">[03] BID RULES</a>
          </nav>
          <label class="d1-btn-lime" for="p-auth">SIGN IN / OAUTH 2.0 →</label>
        </div>
      </header>

      <section class="d1-hero">
        <div class="d1-container">
          <div class="d1-ticket-hero">
            <div class="d1-ticket-main">
              <div class="d1-ticket-meta">
                <span class="d1-stamp d1-stamp-orange">FEATURED AUCTION</span>
                <span class="d1-mono">SERIES 2026 // ADMIT TWO</span>
              </div>
              <h1>OUTBID THE SCALPERS.<br />CLAIM THE FRONT ROW.</h1>
              <p>
                <strong>RADIOHEAD — 25TH ANNIVERSARY ARENA TOUR</strong><br />
                THE O2 ARENA, LONDON · SAT NOV 28 · SEC 102, ROW D (2X PASSES)
              </p>
              <div class="d1-hero-actions">
                <a class="d1-btn-black" href="#d1-lots">BROWSE ALL STUBS ↓</a>
                <label class="d1-btn-white" for="p-auth">VERIFY VIA OAUTH 2.0</label>
              </div>
            </div>

            <div class="d1-ticket-perf" aria-hidden="true">
              <span class="d1-notch d1-notch-top"></span>
              <span class="d1-notch d1-notch-bot"></span>
            </div>

            <div class="d1-ticket-stub">
              <div class="d1-stub-head">
                <span>LOT #TK-4092</span>
                <span>34 BIDS</span>
              </div>
              <div class="d1-stub-price">
                <small>HIGHEST BID</small>
                <strong>$185</strong>
                <span>FACE VALUE $260 (-29%)</span>
              </div>
              <div class="d1-stub-timer">CLOSES IN 00:42:19</div>
              <label class="d1-btn-lime d1-btn-block" for="p-auth">QUICK BID +$10 →</label>
              <div class="d1-barcode" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="d1-lots" class="d1-section">
        <div class="d1-container">
          <div class="d1-filter-bar">
            <h2>ACTIVE TICKET LOTS [06]</h2>
            <div class="d1-filter-controls">
              <div class="d1-stamps">
                <span class="d1-stamp d1-stamp-dark">ALL LOTS</span>
                <span class="d1-stamp">ARENA</span>
                <span class="d1-stamp">ELECTRONIC</span>
                <span class="d1-stamp">FESTIVAL</span>
                <span class="d1-stamp">LAST 60M</span>
              </div>
              <FormatSwitcherBar prefix="d1" />
            </div>
          </div>

          <div class="d1-grid fmt-view-cards">
            <article v-for="lot in lots" :key="'d1-' + lot.id" class="d1-stub-card">
              <div class="d1-stub-card-top">
                <span class="d1-cat-tag" :class="lot.accentClass">{{ lot.category }}</span>
                <span class="d1-mono">LOT #{{ lot.lotCode }}</span>
              </div>
              <div class="d1-stub-card-body">
                <h3>{{ lot.artist }}</h3>
                <p class="d1-tour">{{ lot.tour }}</p>
                <div class="d1-stub-specs">
                  <div><strong>VENUE:</strong> {{ lot.venue }}, {{ lot.city }}</div>
                  <div><strong>DATE:</strong> {{ lot.date }}</div>
                  <div><strong>SEAT:</strong> {{ lot.seats }}</div>
                </div>
              </div>
              <div class="d1-card-perf" aria-hidden="true">
                <span class="d1-side-notch left"></span>
                <span class="d1-side-notch right"></span>
              </div>
              <div class="d1-stub-card-foot">
                <div class="d1-price-box">
                  <div>
                    <small>BID ({{ lot.bids }})</small>
                    <strong>{{ lot.currentBid }}</strong>
                  </div>
                  <div>
                    <small>CLOSES</small>
                    <span class="d1-mono">{{ lot.timeLeft }}</span>
                  </div>
                  <div>
                    <small>BUY NOW</small>
                    <span>{{ lot.buyNow }}</span>
                  </div>
                </div>
                <label class="d1-btn-black d1-btn-block" for="p-auth">
                  PLACE BID {{ lot.nextBid }} ↗
                </label>
              </div>
            </article>
          </div>

          <TicketFormatViews prefix="d1" />
        </div>
      </section>

      <section id="d1-rules" class="d1-section">
        <div class="d1-container d1-rules-grid">
          <div class="d1-rule-box">
            <span>01 //</span>
            <h3>OAUTH 2.0 GATE</h3>
            <p>Every bidder authenticates through Google, Apple, Spotify, or GitHub before entering a lot.</p>
          </div>
          <div class="d1-rule-box">
            <span>02 //</span>
            <h3>PERFORATED ESCROW</h3>
            <p>Winning bids settle only after verified mobile barcodes clear into your Ticketomat vault.</p>
          </div>
          <div class="d1-rule-box">
            <span>03 //</span>
            <h3>ANTI-SNIPE CLOCK</h3>
            <p>Last-minute bids inside 120 seconds automatically add 2 minutes so human fans never lose to scripts.</p>
          </div>
        </div>
      </section>
    </section>

    <!-- DESIGN 1: LOGIN / SIGNUP WITH OAUTH 2.0 (VIP BACKSTAGE PASS) -->
    <section class="view-auth d1-auth-wrap">
      <div class="d1-pass-card">
        <div class="d1-lanyard-slot" aria-hidden="true"><span></span></div>
        <div class="d1-pass-head">
          <label class="d1-back-chip" for="p-home">← BACK TO LOTS</label>
          <span class="d1-stamp d1-stamp-lime">ADMIT ONE // OAUTH 2.0</span>
        </div>

        <div class="d1-pass-title">
          <h2>TICKETOMAT<sup>®</sup> BACKSTAGE PASS</h2>
          <p>AUTHENTICATE ONCE TO UNLOCK LIVE BIDDING &amp; INSTANT TRANSFERS</p>
        </div>

        <div class="d1-auth-tabs">
          <label class="auth-tab" for="a-login">[ LOG IN ]</label>
          <label class="auth-tab" for="a-signup">[ SIGN UP ]</label>
        </div>

        <div class="d1-oauth-grid">
          <button
            v-for="provider in oauthProvidersAlt"
            :key="'d1-oa-' + provider.id"
            type="button"
            class="d1-oauth-btn"
          >
            <svg class="oauth-svg"><use :href="provider.iconId" /></svg>
            <span>OAUTH // {{ provider.name.toUpperCase() }}</span>
          </button>
        </div>

        <div class="d1-card-perf" aria-hidden="true">
          <span class="d1-side-notch left"></span>
          <span class="d1-side-notch right"></span>
        </div>

        <form class="d1-form" @submit.prevent>
          <label class="d1-field signup-only">
            <span>BIDDER ALIAS</span>
            <input type="text" placeholder="STAGE_RUNNER_99" />
          </label>
          <label class="d1-field">
            <span>EMAIL ADDRESS</span>
            <input type="email" placeholder="fan@ticketomat.io" />
          </label>
          <label class="d1-field">
            <span>PASSWORD</span>
            <input type="password" placeholder="••••••••••••" />
          </label>
          <button type="button" class="d1-btn-lime d1-btn-block login-only">
            ENTER AUCTION FLOOR →
          </button>
          <button type="button" class="d1-btn-lime d1-btn-block signup-only">
            ISSUE VERIFIED PASS →
          </button>
        </form>

        <div class="d1-barcode d1-barcode-wide" aria-hidden="true"></div>
        <div class="d1-pass-serial">SERIAL NO. TM-OAUTH2-PKCE-2026-8841</div>
      </div>
    </section>
  </main>

  <!-- =======================================================================
       DESIGNS 2–5: CONSUMER-FRIENDLY SWISS STUB VARIATIONS
       ======================================================================= -->
  <main
    v-for="v in swissVariants"
    :key="v.id"
    :class="['design-canvas', 'sv-canvas', v.canvasClass]"
  >
    <!-- HOMEPAGE -->
    <section class="view-home">
      <div class="sv-marquee">
        <span>{{ v.marquee }}</span>
      </div>

      <header class="sv-nav">
        <div class="sv-container sv-nav-inner">
          <div class="sv-brand">
            <span class="sv-brand-box">{{ v.brandMark }}</span>
            <span>{{ v.brandName }}<sup>®</sup></span>
          </div>
          <nav class="sv-links">
            <a
              v-for="link in v.navLinks"
              :key="v.prefix + '-' + link.label"
              :href="'#' + v.prefix + '-' + link.anchor"
            >
              {{ link.label }}
            </a>
          </nav>
          <label class="sv-btn-accent" for="p-auth">{{ v.navCta }}</label>
        </div>
      </header>

      <section class="sv-hero">
        <div class="sv-container">
          <div class="sv-ticket-hero">
            <div class="sv-ticket-main">
              <div class="sv-ticket-meta">
                <span class="sv-stamp sv-stamp-feature">{{ v.heroBadge }}</span>
                <span class="sv-series-note">{{ v.heroSeries }}</span>
              </div>
              <h1>
                {{ v.heroHeadlineTop }}<br />
                {{ v.heroHeadlineBottom }}
              </h1>
              <p class="sv-hero-event">
                <strong>{{ v.heroEventTitle }}</strong>
                <span>{{ v.heroEventMeta }}</span>
              </p>
              <div class="sv-hero-actions">
                <a class="sv-btn-primary" :href="'#' + v.prefix + '-lots'">{{ v.heroPrimaryCta }}</a>
                <label class="sv-btn-secondary" for="p-auth">{{ v.heroSecondaryCta }}</label>
              </div>
            </div>

            <div class="sv-ticket-perf" aria-hidden="true">
              <span class="sv-notch sv-notch-top"></span>
              <span class="sv-notch sv-notch-bot"></span>
            </div>

            <div class="sv-ticket-stub">
              <div class="sv-stub-head">
                <span>{{ v.heroStubLot }}</span>
                <span>{{ v.heroStubBids }}</span>
              </div>
              <div class="sv-stub-price">
                <small>{{ v.heroPriceLabel }}</small>
                <strong>$185</strong>
                <span class="sv-discount-note">{{ v.heroDiscountNote }}</span>
              </div>
              <div class="sv-stub-timer">{{ v.heroTimerText }}</div>
              <label class="sv-btn-accent sv-btn-block" for="p-auth">{{ v.heroBidCta }}</label>
              <div class="sv-barcode" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </section>

      <section :id="v.prefix + '-lots'" class="sv-section">
        <div class="sv-container">
          <div class="sv-filter-bar">
            <div class="sv-filter-heading">
              <h2>{{ v.lotsTitle }}</h2>
              <span class="sv-count-badge">6 Live</span>
            </div>
            <div class="sv-filter-controls">
              <div class="sv-stamps">
                <span
                  v-for="(chip, chipIdx) in v.filterChips"
                  :key="v.prefix + '-chip-' + chip"
                  class="sv-stamp"
                  :class="{ 'sv-stamp-active': chipIdx === 0 }"
                >
                  {{ chip }}
                </span>
              </div>
              <FormatSwitcherBar :prefix="v.prefix" />
            </div>
          </div>

          <div class="sv-grid fmt-view-cards">
            <article v-for="lot in lots" :key="v.prefix + '-' + lot.id" class="sv-stub-card">
              <div class="sv-stub-card-top" :class="lot.accentClass">
                <span class="sv-cat-tag" :class="lot.accentClass">{{ lot.category }}</span>
                <span class="sv-lot-ref">Lot {{ lot.lotCode }}</span>
              </div>
              <div class="sv-stub-card-body">
                <h3>{{ lot.artist }}</h3>
                <p class="sv-tour">{{ lot.tour }}</p>
                <div class="sv-stub-specs">
                  <div>
                    <small>Venue</small>
                    <span>{{ lot.venue }}, {{ lot.city }}</span>
                  </div>
                  <div>
                    <small>Date &amp; Time</small>
                    <span>{{ lot.date }}</span>
                  </div>
                  <div>
                    <small>Seats</small>
                    <span>{{ lot.seats }}</span>
                  </div>
                </div>
              </div>
              <div class="sv-card-perf" aria-hidden="true">
                <span class="sv-side-notch left"></span>
                <span class="sv-side-notch right"></span>
              </div>
              <div class="sv-stub-card-foot">
                <div class="sv-price-box">
                  <div>
                    <small>Bid ({{ lot.bids }})</small>
                    <strong>{{ lot.currentBid }}</strong>
                  </div>
                  <div>
                    <small>Time Left</small>
                    <span class="sv-time-num" :class="{ urgent: lot.urgent }">{{ lot.timeLeft }}</span>
                  </div>
                  <div>
                    <small>Buy Now</small>
                    <span class="sv-buy-num">{{ lot.buyNow }}</span>
                  </div>
                </div>
                <label class="sv-btn-primary sv-btn-block" for="p-auth">
                  {{ v.cardBidLabel }} {{ lot.nextBid }} →
                </label>
              </div>
            </article>
          </div>

          <TicketFormatViews :prefix="v.prefix" />
        </div>
      </section>

      <section :id="v.prefix + '-rules'" class="sv-section sv-rules-section">
        <div class="sv-container sv-rules-grid">
          <div v-for="rule in v.rules" :key="v.prefix + '-' + rule.step" class="sv-rule-box">
            <span class="sv-rule-step">{{ rule.step }}</span>
            <h3>{{ rule.title }}</h3>
            <p>{{ rule.desc }}</p>
          </div>
        </div>
      </section>
    </section>

    <!-- LOGIN / SIGNUP WITH OAUTH 2.0 -->
    <section class="view-auth sv-auth-wrap">
      <div class="sv-pass-card">
        <div class="sv-lanyard-slot" aria-hidden="true"><span></span></div>
        <div class="sv-pass-head">
          <label class="sv-back-chip" for="p-home">{{ v.authBackLabel }}</label>
          <span class="sv-stamp sv-stamp-pass">{{ v.authBadge }}</span>
        </div>

        <div class="sv-pass-title">
          <h2>{{ v.authTitle }}</h2>
          <p>{{ v.authSubtitle }}</p>
        </div>

        <div class="sv-auth-tabs">
          <label class="auth-tab" for="a-login">Log In</label>
          <label class="auth-tab" for="a-signup">Sign Up</label>
        </div>

        <div class="sv-oauth-grid">
          <button
            v-for="provider in oauthProvidersAlt"
            :key="v.prefix + '-oa-' + provider.id"
            type="button"
            class="sv-oauth-btn"
          >
            <svg class="oauth-svg" aria-hidden="true"><use :href="provider.iconId" /></svg>
            <span>Continue with {{ provider.name }}</span>
          </button>
        </div>

        <div class="sv-card-perf" aria-hidden="true">
          <span class="sv-side-notch left"></span>
          <span class="sv-side-notch right"></span>
        </div>

        <form class="sv-form" @submit.prevent>
          <label class="sv-field signup-only">
            <span>{{ v.authNameLabel }}</span>
            <input type="text" :placeholder="v.authNamePlaceholder" />
          </label>
          <label class="sv-field">
            <span>Email Address</span>
            <input type="email" :placeholder="v.authEmailPlaceholder" />
          </label>
          <label class="sv-field">
            <span>Password</span>
            <input type="password" placeholder="••••••••••••" />
          </label>
          <button type="button" class="sv-btn-accent sv-btn-block login-only">
            {{ v.authLoginBtn }}
          </button>
          <button type="button" class="sv-btn-accent sv-btn-block signup-only">
            {{ v.authSignupBtn }}
          </button>
        </form>

        <div class="sv-barcode sv-barcode-wide" aria-hidden="true"></div>
        <div class="sv-pass-serial">{{ v.authFooterNote }}</div>
      </div>
    </section>
  </main>
</template>
