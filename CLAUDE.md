# Georgopoulos Webshop — Project Instructions

## Project Context

Static HTML/React 18 webshop for **Ν. Γεωργόπουλος ΙΚΕ**, a Greek professional coffee equipment distributor.

**Tech stack:**
- React 18 via CDN (unpkg), Babel Standalone — no build step, no npm
- Single-page app with client-side routing (route state in App)
- Files: `index.html`, `app.jsx`, `pages.jsx`, `data.js`, `styles.css`, `contact.jsx`, `tweaks.jsx`
- Served locally via Python HTTP server on port 8080
- GitHub: https://github.com/Stel777/WebShop-Georgopoulos

**Key conventions:**
- All hooks destructured at top of each file: `const { useState: useStateX, ... } = React;`
- CSS classes prefixed `.gx-` (original) or `.wmf-` (new shop redesign)
- `price: null` for products pending pricing — UI must handle this gracefully
- Lang toggle: `lang === 'gr'` shows Greek, otherwise English
- `window.PRODUCTS`, `window.CATEGORIES`, `window.BRANDS` are global from `data.js`
- `photoFor(product, idx)` returns placeholder image URLs

**Current state (as of 2026-05-08):**
- 73 real products across 8 categories, all with `price: null`
- WMF-style ShopPage redesign complete (intro band, sticky category tabs, brand pills, filter row)
- Hero video permanently set to `assets/clip_for_site.mp4`
- Tweaks panel accessible via fixed "⚙ Tweaks" button (bottom-right)
- Push to GitHub pending

**Pending work:**
- Add product images, descriptions, and prices (Step 2)
- Handle `price: null` gracefully in UI ("Τιμή κατόπιν αιτήματος" / "Price on request")
- Update homepage categories grid (currently shows 6, should show 8)

## Superpowers Skills

@~/.claude/skills/superpowers/skills/using-superpowers/SKILL.md
