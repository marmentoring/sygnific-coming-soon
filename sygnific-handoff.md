# Sygnific Site — Handoff Document
**Date:** 2026-07-13  
**Project root:** `/Users/ale/progetti/SYGNIFIC/sygnific-site/`

---

## Project Overview

Static HTML5 + CSS3 + vanilla JS site for **Sygnific.Global** — international executive growth & execution partner (APAC, Middle East, EMEA). Deploy target: Vercel with `cleanUrls`. No frameworks, no build step.

**Key files:**
- `index.html` — home page
- `about.html` — about page (fully built)
- `contact.html` — contact page with Web3Forms
- `solutions.html` — solutions page (fully built)
- `industries.html` — industries page (fully built)
- `css/style.css` — shared styles
- `css/variables.css` — design tokens (spacing, colors, typography)
- `js/main.js` — shared JS (sticky header, mobile nav, scroll fade, form)
- `assets/images/favicon.svg` — gold "S" on navy square
- `assets/images/enrico-ferri.jpg` — leadership photo

**Design system:**
- Colors: Navy `#0B1B2B`, Gold `#B08D57`, Ivory `#F7F5F1`
- Fonts: Cormorant Garamond (headings) + Manrope (body)
- Valid spacing tokens: `--space-1/2/3/4/5/6/8/10/12/16/20/24/32/40/48` — **`--space-7`, `--space-9`, `--space-11` do NOT exist**

---

## Pages Status

| Page | Status | Notes |
|---|---|---|
| `index.html` | Built | Mobile-responsive, back-to-top added |
| `about.html` | Built | Full page, all sections |
| `contact.html` | Built | Needs real Web3Forms key |
| `solutions.html` | Built | White→navy scroll reveal effect |
| `industries.html` | Built | Flip card sector layout |
| `leadership.html` | Placeholder | Not built |
| `insights.html` | Placeholder | Not built |

---

## Session 1 Work (2026-07-12)

### about.html
- Full page: Hero → Purpose → Vision → Mission → Philosophy → Different → Engagement Model → Core Values → Commitment → Looking Ahead → CTA
- Hero: centered, "Building Growth *Beyond Borders.*", staggered fade-in
- Mission list: editorial 2×3 grid with oversized italic Cormorant numerals (01–06), gold accent bar on hover
- All em-dashes removed; no `About Sygnific` eyebrow on hero

### Photo backgrounds (about.html)
Unsplash `::before` pseudo-elements at very low opacity:
- Purpose → `photo-1486406146926` at 0.07
- Vision (navy) → `photo-1451187580459` at 0.09
- Philosophy (navy) → `photo-1481627834876` at 0.08
- Different → `photo-1529158062015` at 0.05
- Engagement → `photo-1450101499163` at 0.07
- Commitment → `photo-1558494949` at 0.03
- Mission, Core Values, Looking Ahead, CTA → no background

### index.html mobile fixes
- Comparison table: ≤768px converts to stacked cards with `::before` labels
- Geo-strip: collapses to 1 column, `overflow: visible`, panels `height: 200px`
- Singapore photo: `object-position: center 30%`
- 480px: geo-strip `height: auto`, hero CTAs full-width

### css/style.css
- Hamburger default color → `var(--color-navy)` (was ivory)
- When open: hamburger `position: fixed; z-index: calc(--z-overlay + 50)`, lines ivory
- `.mobile-nav-close`: 44×44px circle, white X SVG, gold border on hover
- Back-to-top: mobile only (≤768px), 36×36px navy/gold, fade+translateY

### js/main.js
- `.mobile-nav-close` click → `closeMobileNav()`
- Back-to-top: scroll listener + click to top

---

## Session 2 Work (2026-07-13)

### solutions.html — Built from scratch

**Layout:** 6 solution blocks in zig-zag (CSS Grid 1fr 1fr), alternating image/text sides.

**Key feature — white→navy scroll reveal effect:**
All 6 `.sol-text` panels start white, transition to navy when scrolled into view. Text is always ivory (white-on-white = invisible, then readable as bg turns navy). Implementation:
```css
.sol-text.fade-in {
  opacity: 1 !important;
  transform: none !important;
  transition: background-color 800ms var(--ease-out);
}
.sol-text {
  background: var(--color-white);
}
.sol-text.is-visible {
  background-color: var(--color-navy);
}
@media (max-width: 768px) {
  .sol-text.fade-in {
    transition: background-color 1400ms var(--ease-out);
  }
}
```

**js/main.js — separate IntersectionObserver for `.sol-text`:**
```javascript
const isMobile = window.matchMedia('(max-width: 768px)').matches;
const solObserver = new IntersectionObserver(fn, {
  threshold: isMobile ? 0.35 : 0.1,
  rootMargin: isMobile ? '0px 0px -80px 0px' : '0px 0px -48px 0px'
});
fadeEls.forEach(el => {
  el.classList.contains('sol-text') ? solObserver.observe(el) : observer.observe(el);
});
```

**Watermark numbers** (`.sol-num`): positioned `bottom: var(--space-6); right: var(--space-8)` — NOT top, to avoid clashing with headlines.

**Sections:**
- 6 zig-zag solution blocks (Executive Advisory, Market Expansion, Commercial Growth, Strategic Representation, Interim Executive, Infrastructure)
- Engagement Models: 4 cards grid on ivory bg
- Industries Supported: navy bg, pill tags linking to `industries.html`
- Why Clients: 2-col grid with SVG checkmarks
- CTA: "Begin a Partnership" + "Schedule a Strategy Call"

**Intro h2:** `white-space:nowrap; font-size:clamp(var(--text-2xl),4vw,var(--text-5xl))` — single line.

---

### industries.html — Built from scratch, then redesigned as flip cards

**Final layout:** 5 flip cards in a 3-2 pyramid grid.

**Grid technique (6 virtual columns):**
```css
.ind-cards-grid { grid-template-columns: repeat(6, 1fr); }
.ind-card { grid-column: span 2; }          /* 3 per row */
.ind-card:nth-child(4) { grid-column: 2 / span 2; }  /* centered left */
.ind-card:nth-child(5) { grid-column: 4 / span 2; }  /* centered right */
```

**Card design:**
- **Front:** navy bg + sector photo at ~38% opacity + linear-gradient veil (transparent top → navy bottom), ivory title, gold rule + sector number, animated "Explore" arrow hint
- **Back:** white bg, navy text, gold rule, ghosted watermark number (`bottom: var(--space-4); right: var(--space-5)`), thin gold gradient border on left edge

**Explore animation:**
```css
@keyframes ind-hint-nudge {
  0%, 100% { transform: translateX(0); }
  50%       { transform: translateX(5px); }
}
.ind-card-hint-icon { animation: ind-hint-nudge 1.6s ease-in-out infinite; }
.ind-card:hover:not(.is-flipped) .ind-card-hint-icon {
  animation: none;
  transform: rotate(90deg);
}
```

**Flip JS** (inline `<script>` at bottom of industries.html):
- Click to toggle `.is-flipped` class
- Keyboard: Enter/Space flip, Escape closes
- Click outside any card → closes all open cards

**Sector images (Unsplash):**
1. Data Centres → `photo-1558494949-ef010cbdcc31`
2. Building Technologies → `photo-1486325212027-8081e485255e` (position: center 60%)
3. Engineering & Manufacturing → `photo-1565043589221-1a6fd9ae45c7`
4. Infrastructure & Construction → `photo-1504307651254-35680f356dfd` (position: center 40%)
5. Smart Buildings → `photo-1497366216548-37526070297c` (position: center 30%)

**Other sections:** Executive Advisory (navy, left-border blockquote) → How We Create Value (ivory, 2-col numbered list) → Geographic Reach (navy, 3-col grid) → Looking Beyond Today (white, centered italic quote) → CTA.

**Hero:** centered (h1 + subtitle). Three separate lines:
```
Industry Knowledge.
Executive Perspective.   ← gold
Commercial Results.
```

**Em-dash fix:** `Africa — EMEA` → `Africa (EMEA)` in geographic reach section.

**Card height:** 580px desktop / 540px tablet / 420px mobile / 380px at 480px.

---

## Pending / Known Issues

### Critical
- **`href="/"` → `href="index.html"`**: All HTML files use `href="/"` for Home nav links and logo links. Works on Vercel but breaks when opening locally. Affects all pages. Do with find-and-replace across all files.

### Pages Not Yet Built
- `leadership.html` — placeholder only
- `insights.html` — placeholder only

### contact.html
- `YOUR_WEB3FORMS_ACCESS_KEY` placeholder — user needs key from web3forms.com

### Misc
- Hero background on `index.html` — still static navy gradient, user undecided
- Back-to-top button already present in `solutions.html`, `industries.html` — not yet added to `contact.html`

---

## Shared Patterns Across Pages

**Header:** `.site-header.site-header--light` (navy text on scroll), logo-pair (UAE + SG), desktop nav, hamburger for mobile.

**Mobile nav:** `<nav class="mobile-nav">` with `.mobile-nav-close` button inside.

**Footer:** 4-col grid (brand + company links + legal + contact address), `.footer-year` auto-filled by JS.

**Back-to-top:** `<button class="back-to-top">` before `</body>`, handled by `js/main.js`.

**Fade-in:** Add class `.fade-in` to any element. For staggered groups use `.fade-in-group` on parent; children animate with sequential delay. IntersectionObserver adds `.is-visible` on scroll.

**Eyebrow:** `<span class="eyebrow">` — small gold uppercase label above headings.

**Gold rule:** `<div class="gold-rule">` — 40px wide 1px gold horizontal rule.

---

## DO NOT
- Push to GitHub or deploy until user explicitly says so
- Use `--space-9`, `--space-7`, `--space-11` (undefined tokens)
- Add em-dashes to any copy
- Use Dubai or Singapore photos as section backgrounds in `about.html`
- Add LinkedIn to any footer

---

## Suggested Skills for Next Session

- `/frontend-design:frontend-design` — when building `leadership.html` or `insights.html`
- `/ui-ux-pro-max:ui-ux-pro-max` — when making layout or component decisions
- `/stop-slop` — before writing or reviewing any copy/prose
