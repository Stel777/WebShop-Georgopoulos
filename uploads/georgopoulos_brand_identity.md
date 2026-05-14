# Georgopoulos Brand Identity Guide
## For Webshop Development Reference

> **Source:** Extracted from www.georgopoulos.com.gr, social media presence, press coverage, and site asset analysis.  
> **Purpose:** Faithfully replicate the Georgopoulos brand in a new webshop so it feels authentic and continuous with the existing brand.

---

## 1. Brand Overview

| Attribute | Value |
|-----------|-------|
| **Full Legal Name** | Ν. Γεωργόπουλος ΙΚΕ |
| **Brand Name (Display)** | GEORGOPOULOS |
| **Tagline / Descriptor** | Επαγγελματικός Εξοπλισμός Καφεστίασης & Τεχνική Υποστήριξη |
| **English Equivalent** | Professional Coffee Equipment & Technical Support |
| **Founded** | 1970 (by Νίκος Γεωργόπουλος) |
| **Age** | ~55 years in the market (as of 2025) |
| **Location** | Άγιος Δημήτριος, Athens, Greece |
| **Current Leadership** | Μαίρη Γεωργοπούλου & Κατερίνα Γεωργοπούλου (second generation) |
| **Website Builder** | Wix.com |
| **Social Handle** | @georgopoulosgreece (Instagram) |
| **OG Site Name** | ngeorgopoulos |

---

## 2. Brand Personality & Positioning

### Core Identity
Georgopoulos is a **heritage, family-run B2B specialist** in professional café equipment. They are the trusted bridge between world-class manufacturers (La Cimbali, Slayer, Fiorenzato, etc.) and the Greek HoReCa market. They do not sell commodities — they sell **precision, expertise, and long-term partnership**.

### Brand Pillars
1. **Heritage & Reliability** — 55 years in the same market. Founded by a single person, now run by his daughters. The brand communicates institutional trust.
2. **Quality First** — They represent only the top tier of global coffee equipment brands. No budget/mass-market products.
3. **Expertise** — Technical service department, factory-trained technicians, exclusive use of genuine spare parts, remote monitoring software.
4. **Partnership** — Their language is relational: "friends and partners", "trust", "side by side with professionals since 1970". Not transactional.
5. **Innovation** — They actively participate in events like HoReCa expo, Barista Blast competitions, Vienna Coffee Festival. They champion specialty coffee culture in Greece.

### Tone of Voice
- **Formal but warm** — Greek business culture blends professionalism with personal warmth.
- **Understated confidence** — They don't shout about being the best; they let their portfolio (La Cimbali, Slayer) speak for them.
- **Respectful** — Copy uses "σας" (formal 'you'), never casual.
- **Knowledgeable** — Technical descriptions are detailed and accurate, written for professionals.
- **Grateful** — The company letter on the About page thanks customers "from the heart."

### Brand Archetype
**The Expert / The Caretaker** — Deeply knowledgeable, loyal, relationship-driven, institutional.

---

## 3. Color Palette

> **Note:** The site uses a dark/monochromatic primary palette with white space. Derived from logo assets, CSS inline styles (`fill: #000000`, `fill: #FFFFFF`), page background observations, and overall site aesthetic.

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| **Black** | `#000000` | Logo primary, icon fills, headings, nav text |
| **White** | `#FFFFFF` | Logo reverse, backgrounds, overlay text |
| **Off-White / Light Grey** | `#F5F5F5` | Page backgrounds, card fills |

### Secondary / Accent Colors
| Name | Hex | Usage |
|------|-----|-------|
| **Dark Charcoal** | `#1A1A1A` | Body text, secondary elements |
| **Mid Grey** | `#888888` | Subtext, metadata, footer text |
| **Light Grey** | `#CCCCCC` | Dividers, borders |
| **Warm White** | `#FAFAF8` | Sections with slight warmth (coffee-adjacent) |

### Derived Accent (Brand-Consistent Suggestion)
The site currently has **no strong accent color** — it is intentionally monochromatic and restrained. For webshop CTAs and interactive elements, the most brand-consistent approach is:
| Name | Hex | Rationale |
|------|-----|-----------|
| **Espresso Brown** | `#3B1F0A` | Deep coffee tone — natural, premium, on-brand |
| **Cream / Crema** | `#F0E4D0` | Espresso crema reference — warm neutral |
| **Action Black** | `#111111` | CTA buttons, hover states |

### Color Philosophy
- The brand deliberately avoids bright/colorful branding — it positions itself as **premium and serious**.
- Inspiration comes from the machines they sell: stainless steel, matte black, brushed chrome.
- Photography on the site leans into **dark backgrounds with dramatically lit machines** — the visual language of high-end coffee equipment catalogs.

---

## 4. Typography

> Wix sites load fonts via Google Fonts or Wix's own font CDN. Based on the visual aesthetic observed across the site, the following fonts are in use or strongly implied.

### Identified / Likely Fonts

| Role | Font | Style | Notes |
|------|------|-------|-------|
| **Primary Logo Font** | Custom / Display | All-caps, condensed, geometric | The logo "GEORGOPOULOS" appears in a bold, geometric all-caps sans-serif. Closest Google Font matches: **Oswald Bold**, **Barlow Condensed Bold**, or **Bebas Neue** |
| **Heading Font** | Sans-serif | Bold, clean | Consistent with Wix default premium themes — likely **Helvetica Neue**, **Raleway**, or **Playfair Display** for section headers |
| **Body / Navigation Font** | Sans-serif | Regular weight | Clean, readable. Likely **Helvetica Neue**, **Open Sans**, or **Lato** |
| **Accent / Label Text** | Sans-serif | Light/Thin uppercase tracking | Used for category labels, product sub-titles |

### Wix Font Stack (Observed Patterns)
Wix sites commonly use these combinations for premium B2B themes:
```css
/* Headings */
font-family: 'Oswald', 'Barlow Condensed', Arial Narrow, sans-serif;

/* Body */
font-family: 'Helvetica Neue', 'Lato', 'Open Sans', sans-serif;

/* Logo recreation */
font-family: 'Bebas Neue', 'Oswald', Impact, sans-serif;
letter-spacing: 0.05em;
text-transform: uppercase;
```

### Typography Rules Observed
- **ALL CAPS** used extensively for headings, section titles, navigation items, and CTAs.
- **Letter-spacing** appears applied to section headers (tracked out).
- **No decorative or serif fonts** in the main interface — purely functional sans-serif.
- **Text weight contrast** is heavy: bold headings vs. light body copy.

---

## 5. Logo

### Description
- The logo is a **horizontal wordmark**: "GEORGOPOULOS" in bold all-caps, followed or preceded by a simplified icon element.
- Versions observed:
  - **Dark logo** (dark text on white/light bg) — used in header
  - **Light logo** (white text on dark bg) — used in footer
- The logo filename `GEORGOPOULOS LOGO_3x.png` suggests it is a raster PNG (not SVG), served at 3x resolution for retina screens.
- Approximate dimensions: ~310px × 57px (wide, horizontal)

### Logo Asset URLs (from site)
```
Header Logo:
https://static.wixstatic.com/media/fae23e_5582064999c3441d954d3fdd1d191a39~mv2.png
[w_310, h_57]

Footer Logo:
https://static.wixstatic.com/media/fae23e_5a4f2692196b40bdb5b13c960880b999~mv2.png
[w_262, h_48]
```

### Logo Usage Notes
- Logo appears top-left in the sticky header navigation.
- Footer uses a slightly smaller version of the same logo.
- No animated logo or variations with tagline visible.
- High contrast ratio — works on both white and dark backgrounds.

---

## 6. Visual Design Language

### Overall Aesthetic
**Dark, industrial, premium** — reminiscent of high-end espresso machine catalogs. The site feels like a digital showroom, not a shop. Pages are spacious, image-led, with minimal text clutter.

### Layout Patterns
- **Full-width hero images** on category pages — dramatic product photography.
- **Two-column layouts** for product listings (image left/right + text).
- **Centered section headings** with all-caps typography.
- **Generous whitespace** — breathing room between sections.
- **Sticky navigation bar** (top) — transparent or white depending on scroll position.
- **Footer** is dark with white text — clear contrast.

### Image Style
- Products photographed on **white or very light grey backgrounds** for product shots.
- **Ambient/lifestyle** photography used for hero images — barista environments, café settings, trade show booths (HoReCa 2022 & 2023).
- Trade fair imagery: booth setups with branded equipment on display.
- Technical/cutaway diagrams used for complex products (machine internals).

### Photography Tone
- **High contrast**, often dramatic lighting on machines.
- **Warm coffee tones** (browns, creams) in lifestyle shots.
- **Cool steel/chrome** tones in product shots.
- The visual mood is: sophisticated, professional, craft-focused.

### Iconography
- Minimal — arrow icons for navigation (breadcrumbs), social icons (Instagram).
- Icons are flat, SVG-based, monochromatic (black or white fill).
- No emoji or decorative icons in the UI.

---

## 7. Navigation & UX Patterns

### Header
- Sticky top navigation bar.
- Logo left-aligned.
- Navigation items: horizontal list, dropdown on hover for sub-categories.
- No search bar visible in current site (key gap for webshop).
- No cart icon (current site is not a transactional e-commerce site).

### Navigation Structure
```
Αρχική (Home)
Εταιρεία (Company) ↓
  └── Καριέρα (Career)
Μηχανές Καφέ (Coffee Machines) ↓
  ├── Μηχανές Espresso
  ├── Μηχανές Brew - Nitro
  ├── Μηχανές Ελληνικού
  └── Home - Office
Μύλοι Άλεσης Καφέ (Grinders) ↓
  ├── Μύλοι Fiorenzato
  ├── Μύλοι Bentwood
  ├── Μύλοι La Cimbali
  └── Pietro Grinders
Νερό (Water) ↓
  └── Φίλτρα Νερού Brita
Barista ↓
  ├── Αξεσουάρ
  ├── Καθαριστικά
  ├── Cold Brew Tower
  └── Αυτόματο Πατητήρι Sipresso
Συμπληρωματικός Εξοπλισμός ↓
  ├── Μηχανές Σοκολάτας
  └── Στίφτες Πορτοκαλιού
Service
```

### Footer
- Dark background (near-black).
- White text / white logo.
- Four columns: Address | Phones | Email contacts | Contact form.
- Contact form embedded directly in footer.
- Credit line: "2017 ants in the pants creations" (original web design agency).
- Social link: Instagram (SVG icon with fill `#FFFFFF`).

---

## 8. Language & Copy Style

### Language
- **Primary:** Greek (Modern Greek — formal register)
- **Secondary:** English used for:
  - Brand/product names (e.g., "Espresso", "Brew", "Barista")
  - Technical terminology (e.g., "On Demand", "XGi", "PRO series")
  - Navigation mixed: some items in English ("Home - Office", "Service", "Pietro Grinders")
- Greek copy uses the **formal second person** ("σας", "σας ευχαριστούμε") throughout.

### Key Phrases / Brand Voice Examples
> *"Σχεδόν πενήντα χρόνια... τόσα πέρασαν από την ημέρα που ο Νίκος Γεωργόπουλος ξεκίνησε να βάζει τη δική του προσωπική σφραγίδα στην Ελληνική αγορά"*  
("Nearly fifty years... since the day Nikos Georgopoulos began leaving his personal mark on the Greek market")

> *"Μία σφραγίδα υψηλής ποιότητας και καινοτομίας. Ένα αποτύπωμα αξιοπιστίας, μία υπογραφή συνέπειας."*  
("A mark of high quality and innovation. A footprint of reliability, a signature of consistency.")

> *"Από το 1970 δίπλα στον επαγγελματία της καφεστίασης"*  
("By the side of the coffee professional since 1970")

> *"Καλωσήρθατε στο ψηφιακό μας περίπτερο!"*  
("Welcome to our digital pavilion!" — referring to the website as a virtual trade stand)

### Meta Description Style
The site SEO meta uses a structured list format:
> "Επίσημος Αντιπρόσωπος: La Cimbali - Slayer Espresso - Casadio (Gruppo Cimbali) - Tone Swiss - Stone Espresso - Fiorenzato - Bentwood - BRITA - Cafelier - Citrocasa"

---

## 9. Social Media Presence

| Platform | Handle | Status |
|----------|--------|--------|
| Instagram | @georgopoulosgreece | Active |
| LinkedIn | Georgopoulos N.P.C | Active (confirmed via search) |
| Facebook | Not confirmed / not prominently linked |

### Instagram Signals
- Handle: `@georgopoulosgreece`
- Content likely includes: trade fair coverage (HoReCa), product showcases, barista events, partner brand content.
- The homepage embeds an Instagram feed section titled "Στιγμιότυπα Horeca 2023" (HoReCa 2023 snapshots).

### LinkedIn Signals
- Listed as: "Official distributor of La Cimbali, Fiorenzato, Casadio, Slayer, Tone, Bentwood, Pietro grinders"
- Active, posts about industry events including Vienna Coffee Festival attendance.

### Community Involvement
- Co-hosted **Barista Blast** competition (Nov 2024) at Noctua Brewery, Athens — alongside Samba Coffee Roasters and Oatly.
- Participated in **Vienna Coffee Festival** (Sept 2024).
- Regular exhibitor at **HoReCa** (Athens international hospitality & catering expo).

---

## 10. Technical / Platform Notes

| Attribute | Value |
|-----------|-------|
| **Current CMS** | Wix.com |
| **Wix Theme Style** | Premium / Business — dark headers, wide layout |
| **Font Delivery** | Wix font CDN or Google Fonts |
| **Images CDN** | `static.wixstatic.com` |
| **Image Format** | AVIF (via Wix auto-conversion), original likely PNG/JPG |
| **Responsive** | Yes (Wix handles mobile) |
| **Analytics** | Google Site Verification tag present |
| **Twitter Card** | `summary_large_image` type |

---

## 11. Webshop Brand Implementation Guide

### CSS Custom Properties (Recommended)
```css
:root {
  /* Core Colors */
  --color-black:        #000000;
  --color-white:        #FFFFFF;
  --color-charcoal:     #1A1A1A;
  --color-off-white:    #F5F5F5;
  --color-warm-white:   #FAFAF8;
  --color-mid-grey:     #888888;
  --color-light-grey:   #CCCCCC;

  /* Brand Accents */
  --color-espresso:     #3B1F0A;
  --color-crema:        #F0E4D0;
  --color-action:       #111111;

  /* Typography */
  --font-display:       'Oswald', 'Barlow Condensed', Arial Narrow, sans-serif;
  --font-body:          'Helvetica Neue', 'Lato', 'Open Sans', sans-serif;

  /* Spacing (generous whitespace) */
  --spacing-section:    80px;
  --spacing-element:    24px;

  /* Border */
  --border-radius:      2px;  /* Very minimal — near-square corners = premium */
  --border-color:       #CCCCCC;

  /* Transitions */
  --transition-default: 200ms ease;
}
```

### Typography Scale
```css
/* Display / Hero */
h1 {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--color-black);
}

/* Section Headings */
h2 {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 3vw, 2.4rem);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

/* Product Names */
h3 {
  font-family: var(--font-body);
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

/* Body */
p {
  font-family: var(--font-body);
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--color-charcoal);
}

/* Labels / Tags */
.label {
  font-family: var(--font-display);
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
```

### Key UI Component Guidelines

**Navigation Bar**
- Dark (near-black `#111111`) background for header.
- White logo + white nav text.
- Thin bottom border `1px solid rgba(255,255,255,0.1)` for definition.
- Dropdown menus: white background, dark text.

**Product Cards**
- White background.
- No border-radius (or max 2–4px).
- Product name in all-caps or mixed with brand name above.
- Hover: subtle elevation shadow or image zoom effect.
- Brand logo or badge top-left of card.

**Buttons (CTAs)**
- Primary: `background: #111111; color: #FFFFFF;` — solid black, no border-radius.
- Secondary: `background: transparent; border: 1px solid #111111; color: #111111;`
- Hover: slight opacity shift or inverse.
- Text: all-caps, tracked (`letter-spacing: 0.08em`).
- No rounded buttons — squared edges convey precision.

**Hero Sections**
- Full-bleed dark photography (machine on dark background).
- Overlay: white text, large display font.
- Optional: very subtle gradient overlay (`rgba(0,0,0,0.3)` to `rgba(0,0,0,0.6)`).

**Footer**
- Background: `#111111` or `#0D0D0D`.
- Text: `#FFFFFF` primary, `#888888` secondary.
- Four-column layout: Address | Phone | Emails | Contact form.

---

## 12. Brand Do's and Don'ts

### ✅ Do
- Use **all-caps** for headings and category labels — it's core to their identity.
- Keep the palette **monochromatic** — add colour sparingly and purposefully (e.g., only for CTAs or alerts).
- Use **high-resolution product photography** — the machines are beautiful, let them lead.
- Communicate **expertise and trust** before price — this is a B2B audience of professionals.
- Include **brand logos** prominently on product pages (La Cimbali, Slayer, etc.) — co-branding is key.
- Use **generous whitespace** — premium positioning requires breathing room.
- Include **"Από το 1970"** ("Since 1970") where appropriate — heritage is a key differentiator.

### ❌ Don't
- Use **bright accent colors** (red, orange, teal) — incompatible with the brand's restrained aesthetic.
- Use **rounded, bubbly UI elements** — too casual for this market.
- Use **playful or informal copy** — the audience is professional baristas, café owners, and HoReCa operators.
- Use **generic stock photography** of coffees or cafés — use the actual product photography from the brands.
- Over-crowd pages — less is more.
- Use a **serif font for headings** — the brand is modern-industrial, not rustic or artisan.

---

## 13. Competitive Positioning Context

Georgopoulos operates in the **professional B2B coffee equipment segment** in Greece. Their competitors would be other distributors of professional espresso equipment in the Greek market. Their edge:

- **Exclusive distributorship** of marquee brands (La Cimbali, Slayer).
- **Full-service offering**: sales + installation + ongoing service + spare parts.
- **55 years of market presence** — institutional memory and relationships.
- **Specialty coffee culture involvement** — not just equipment dealers but active community members.

The webshop should feel like an extension of a **premium trade showroom**, not a mass-market retail site.

---

## 14. Assets Checklist for Webshop

Before development, the following assets should be sourced directly from Georgopoulos:

- [ ] Logo in SVG format (vector — both dark and light versions)
- [ ] Logo usage guidelines (minimum sizes, clear space)
- [ ] Exact font names used in their Wix theme
- [ ] Exact hex color codes from their design files
- [ ] High-res product photography for all ~75 SKUs
- [ ] Brand logos for all 16 supplier brands (SVG preferred)
- [ ] About page imagery (team photos, showroom photos)
- [ ] HoReCa / event photography for lifestyle sections
- [ ] Favicon / app icon

---

*Document compiled by AI analysis of www.georgopoulos.com.gr, public social media, press coverage, and site metadata.*  
*Last updated: May 2026*
