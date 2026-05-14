// Page components for the Georgopoulos webshop
const { useState: useStateP, useEffect: useEffectP, useMemo: useMemoP, useRef: useRefP } = React;

const fmt = (n) => n == null ? null : '€ ' + n.toLocaleString('en-US');

// ---------- HOME PAGE ----------
const HomePage = ({ navigate, addToCart, lang, heroVariant, heroVideo }) => {
  const featured = window.PRODUCTS.filter(p => ['lc-m200', 'sl-steamlp', 'fz-f64xgi', 'lc-m40', 'fa-e71touch', 'tn-toneswiss', 'bw-v63', 'pt-pietro'].includes(p.id));
  const cats = [
    { id: 'espresso', num: '01', en: 'Espresso Machines', gr: 'Μηχανές Espresso', desc_en: 'La Cimbali. Slayer. Faema. Casadio. The benchmark of professional espresso.', desc_gr: 'Το σημείο αναφοράς για τον επαγγελματικό espresso.' },
    { id: 'grinder', num: '02', en: 'Coffee Grinders', gr: 'Μύλοι Άλεσης', desc_en: 'Fiorenzato XGi · Bentwood · Pietro. Precision dosing for specialty bars.', desc_gr: 'Ακρίβεια δοσομέτρησης για κάθε ανάγκη.' },
    { id: 'brew', num: '03', en: 'Brew & Nitro', gr: 'Brew & Nitro', desc_en: 'Tone Swiss boilerless brewing. Cold Brew Towers. Filter precision.', desc_gr: 'Ακριβής εκχύλιση χωρίς boiler.' },
    { id: 'water', num: '04', en: 'Water Filtration', gr: 'Νερό', desc_en: 'Brita ProGuard, Purity C. Reverse osmosis and ion-exchange.', desc_gr: 'Επίσημος αντιπρόσωπος Brita.' },
    { id: 'barista', num: '05', en: 'Barista Tools', gr: 'Barista', desc_en: 'Motta · Sipresso. Pitchers, tampers, kits, automation.', desc_gr: 'Pitchers, tampers, automation.' },
    { id: 'supplementary', num: '06', en: 'Supplementary', gr: 'Συμπληρωματικά', desc_en: 'Citrocasa juicers · Biepi chocolate machines.', desc_gr: 'Στίφτες · Σοκολάτα.' },
  ];

  return (
    <main>
      {/* HERO */}
      <section className={`gx-hero${heroVideo ? ' has-video' : ''}`}>
        <div className="gx-hero-bg" />
        {heroVideo && (
          <video className="gx-hero-video" src={heroVideo} autoPlay muted loop playsInline
                 key={heroVideo} />
        )}
        {heroVariant === 'imageRight' && (
          <div className="gx-hero-inner" style={{ gridTemplateColumns: '1fr' }}>
            <div>
              <div className="gx-hero-eyebrow">{lang === 'gr' ? 'Νέο για το 2026' : 'New for 2026'}</div>
              <h1>{lang === 'gr' ? <>Επαγγελματική<br/>καφεστίαση<br/><em>από το 1970.</em></> : <>Professional<br/>coffee equipment<br/><em>since 1970.</em></>}</h1>
              <p className="lead">
                {lang === 'gr'
                  ? 'Επίσημος αντιπρόσωπος La Cimbali, Slayer, Fiorenzato και Brita στην Ελλάδα. Πωλήσεις, εγκατάσταση και τεχνική υποστήριξη από εργοστασιακά εκπαιδευμένους τεχνικούς.'
                  : 'Official Greek distributor for La Cimbali, Slayer, Fiorenzato and Brita. Sales, installation, and technical service by factory-trained engineers.'}
              </p>
              <div className="gx-hero-actions">
                <button className="btn btn-primary btn-arrow" onClick={() => navigate({ page: 'shop', category: 'espresso' })}>
                  {lang === 'gr' ? 'Δείτε τις μηχανές' : 'Shop espresso'}
                </button>
                <button className="btn btn-outline-light" onClick={() => navigate({ page: 'service' })}>
                  {lang === 'gr' ? 'Service & Συντήρηση' : 'Service & support'}
                </button>
              </div>
            </div>
          </div>
        )}
        {heroVariant === 'centered' && (
          <div className="gx-hero-inner" style={{ gridTemplateColumns: '1fr', textAlign: 'center', justifyItems: 'center' }}>
            <div style={{ maxWidth: 880 }}>
              <div className="gx-hero-eyebrow" style={{ justifyContent: 'center' }}>{lang === 'gr' ? 'Από το 1970' : 'Since 1970'}</div>
              <h1 style={{ fontSize: 'clamp(56px, 9vw, 132px)' }}>
                {lang === 'gr' ? <>Επαγγελματική<br/><em>καφεστίαση.</em></> : <>Professional<br/><em>coffee.</em></>}
              </h1>
              <p className="lead" style={{ margin: '0 auto 36px' }}>
                {lang === 'gr'
                  ? 'Επίσημος αντιπρόσωπος των κορυφαίων κατασκευαστών παγκοσμίως. Πωλήσεις, εγκατάσταση, εργοστασιακό service.'
                  : 'Official distributor for the world\u2019s leading manufacturers. Sales, installation, factory service.'}
              </p>
              <div className="gx-hero-actions" style={{ justifyContent: 'center' }}>
                <button className="btn btn-primary btn-arrow" onClick={() => navigate({ page: 'shop', category: 'espresso' })}>
                  {lang === 'gr' ? 'Όλα τα προϊόντα' : 'Browse all'}
                </button>
                <button className="btn btn-outline-light" onClick={() => navigate({ page: 'service' })}>
                  {lang === 'gr' ? 'Υποστήριξη' : 'Support'}
                </button>
              </div>
            </div>
          </div>
        )}
        {heroVariant === 'editorial' && (
          <div className="gx-hero-inner" style={{ gridTemplateColumns: '1fr 1.4fr' }}>
            <div>
              <div className="gx-hero-eyebrow">{lang === 'gr' ? 'Φετινό λανσάρισμα' : 'This season'}</div>
              <h1 style={{ fontSize: 'clamp(40px, 5.5vw, 76px)' }}>
                {lang === 'gr' ? <>Slayer Steam LP.<br/><em>Δοκιμή στο showroom.</em></> : <>Slayer Steam LP.<br/><em>Try it at the showroom.</em></>}
              </h1>
              <p className="lead">
                {lang === 'gr'
                  ? 'Πλήρες pressure profiling, κατασκευή με ξύλο walnut. Διαθέσιμη για demo στο κατάστημά μας στον Άγιο Δημήτριο.'
                  : 'Full pressure profiling, hand-built with walnut accents. Demo unit available at our Athens showroom.'}
              </p>
              <div className="gx-hero-actions">
                <button className="btn btn-primary btn-arrow" onClick={() => navigate({ page: 'product', id: 'sl-steamlp' })}>
                  {lang === 'gr' ? 'Δείτε το προϊόν' : 'View product'}
                </button>
                <button className="btn btn-outline-light">{lang === 'gr' ? 'Κλείστε demo' : 'Book a demo'}</button>
              </div>
            </div>
            <div className="gx-hero-image" style={{ alignItems: 'stretch' }}>
              <img src="https://images.unsplash.com/photo-1572119003128-d110c07af847?w=1400&q=80&auto=format&fit=crop"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
            </div>
          </div>
        )}
      </section>

      {/* SERVICE BAND */}
      <section className="gx-section tight">
        <div className="gx-container">
          <div className="gx-service">
            <div className="gx-service-item">
              <Icon name="truck" />
              <h4>{lang === 'gr' ? 'Παράδοση & Εγκατάσταση' : 'Delivery & Install'}</h4>
              <p>{lang === 'gr' ? 'Πανελλαδικά. Δωρεάν για Αττική.' : 'Nationwide. Free in Attica.'}</p>
            </div>
            <div className="gx-service-item">
              <Icon name="wrench" />
              <h4>{lang === 'gr' ? 'Εργοστασιακό Service' : 'Factory Service'}</h4>
              <p>{lang === 'gr' ? 'Πιστοποιημένοι τεχνικοί. Γνήσια ανταλλακτικά.' : 'Certified technicians. Genuine parts.'}</p>
            </div>
            <div className="gx-service-item">
              <Icon name="shield" />
              <h4>{lang === 'gr' ? 'Εγγύηση 24μ.' : '24-month Warranty'}</h4>
              <p>{lang === 'gr' ? 'Σε όλη την επαγγελματική γκάμα.' : 'On all professional models.'}</p>
            </div>
            <div className="gx-service-item">
              <Icon name="chat" />
              <h4>{lang === 'gr' ? 'Συμβουλευτική' : 'Consultation'}</h4>
              <p>{lang === 'gr' ? 'Επιλογή εξοπλισμού για το concept σας.' : 'Equipment selection tailored to your concept.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="gx-section" style={{ paddingTop: 32 }}>
        <div className="gx-container">
          <div className="gx-section-header">
            <div>
              <span className="label-xs">{lang === 'gr' ? '— Κατηγορίες' : '— Categories'}</span>
              <h2>{lang === 'gr' ? 'Κάθε εξοπλισμός που χρειάζεστε.' : 'Every piece of kit you need.'}</h2>
            </div>
            <div className="gx-section-aside">
              {lang === 'gr'
                ? '16 κατασκευαστές. Πάνω από 75 μοντέλα. Επιλεγμένα από εμάς για τη Ελληνική αγορά καφεστίασης.'
                : '16 manufacturers. Over 75 models. Curated for the Greek café market.'}
            </div>
          </div>
          <div className="gx-cat-grid">
            {cats.map(c => (
              <div key={c.id} className="gx-cat-card" onClick={() => navigate({ page: 'shop', category: c.id })}>
                <div className="gx-cat-num">{c.num}</div>
                <div>
                  <h3>{lang === 'gr' ? c.gr : c.en}</h3>
                  <p>{lang === 'gr' ? c.desc_gr : c.desc_en}</p>
                </div>
                <div className="gx-cat-arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="gx-section warm">
        <div className="gx-container">
          <div className="gx-section-header">
            <div>
              <span className="label-xs">{lang === 'gr' ? '— Προτεινόμενα' : '— Featured'}</span>
              <h2>{lang === 'gr' ? 'Επιλεγμένα από την ομάδα μας.' : 'Hand-picked by our team.'}</h2>
            </div>
            <button className="btn btn-outline btn-arrow" onClick={() => navigate({ page: 'shop', category: 'all' })}>
              {lang === 'gr' ? 'Όλα τα προϊόντα' : 'All products'}
            </button>
          </div>
          <div className="gx-grid-4">
            {featured.slice(0, 8).map(p => <ProductCard key={p.id} product={p} navigate={navigate} />)}
          </div>
        </div>
      </section>

      {/* HERITAGE */}
      <section className="gx-heritage">
        <div className="gx-container">
          <div className="gx-heritage-grid">
            <div>
              <span className="label-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>— {lang === 'gr' ? 'Η εταιρεία' : 'About us'}</span>
              <h2 style={{ marginTop: 16 }}>
                {lang === 'gr' ? <>Ποιότητα.<br/>Αξιοπιστία.<br/><em>Καινοτομία.</em></> : <>Quality.<br/>Reliability.<br/><em>Innovation.</em></>}
              </h2>
            </div>
            <div>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: 'rgba(255,255,255,0.85)' }}>
                {lang === 'gr'
                  ? 'Πενήντα πέντε χρόνια στην ίδια αγορά. Ξεκινήσαμε ως οικογενειακή επιχείρηση το 1970 και σήμερα είμαστε ο επίσημος συνεργάτης των κορυφαίων κατασκευαστών παγκοσμίως. Δεν πουλάμε απλά εξοπλισμό — χτίζουμε σχέσεις εμπιστοσύνης δεκαετιών με τους επαγγελματίες της καφεστίασης.'
                  : 'Fifty-five years in the same market. We started as a family business in 1970 and today we are the official partner of the world\u2019s leading manufacturers. We don\u2019t just sell equipment — we build trusted relationships with coffee professionals that span decades.'}
              </p>
              <div className="gx-heritage-stats">
                <div><div className="gx-stat-num">55+</div><div className="gx-stat-label">{lang === 'gr' ? 'Χρόνια' : 'Years'}</div></div>
                <div><div className="gx-stat-num">16</div><div className="gx-stat-label">{lang === 'gr' ? 'Κατασκευαστές' : 'Brands'}</div></div>
                <div><div className="gx-stat-num">2.4k</div><div className="gx-stat-label">{lang === 'gr' ? 'Εγκαταστάσεις' : 'Installations'}</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="gx-section">
        <div className="gx-container">
          <div className="gx-section-header">
            <div>
              <span className="label-xs">{lang === 'gr' ? '— Συνεργάτες' : '— Partners'}</span>
              <h2>{lang === 'gr' ? 'Επίσημος αντιπρόσωπος.' : 'Authorised distributor.'}</h2>
            </div>
          </div>
          <div className="gx-brands">
            {[
              ['La Cimbali', 'IT', '1912'],
              ['Slayer', 'US', '2007'],
              ['Faema', 'IT', '1945'],
              ['Casadio', 'IT', '1948'],
              ['Fiorenzato', 'IT', '1985'],
              ['Bentwood', 'AU', '2018'],
              ['Brita', 'DE', '1966'],
              ['Tone Swiss', 'CH', '2019'],
              ['Pietro', 'GR', '2020'],
              ['Motta', 'IT', '1947'],
              ['Citrocasa', 'AT', '1991'],
              ['Biepi', 'IT', '1969'],
            ].map(([name, country, year]) => (
              <div key={name} className="gx-brand-tile">
                <div className="gx-brand-name">
                  {name}
                  <small>{country} · EST {year}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE EDITORIAL */}
      <section className="gx-section" style={{ paddingTop: 0 }}>
        <div className="gx-container">
          <div className="gx-feature">
            <div className="gx-feature-media">
              <img src="https://images.unsplash.com/photo-1497636577773-f1231844b336?w=1200&q=80&auto=format&fit=crop"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
            </div>
            <div className="gx-feature-body">
              <span className="label-xs">— {lang === 'gr' ? 'Service' : 'Service Plans'}</span>
              <h3>{lang === 'gr' ? 'Συντήρηση χωρίς εκπλήξεις.' : 'Servicing without surprises.'}</h3>
              <p>
                {lang === 'gr'
                  ? 'Ετήσια συμβόλαια συντήρησης με προγραμματισμένες επισκέψεις, προτεραιότητα κλήσης και απομακρυσμένη παρακολούθηση. Διατηρούμε τη μηχανή σας στην πρώτη μέρα κάθε μέρα.'
                  : 'Annual service contracts with scheduled visits, priority call-outs, and remote monitoring. We keep your machine performing like day one — every day.'}
              </p>
              <button className="btn btn-primary btn-arrow" style={{ alignSelf: 'flex-start' }} onClick={() => navigate({ page: 'service' })}>
                {lang === 'gr' ? 'Πακέτα service' : 'Service plans'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
};

// ---------- SHOP / LISTING PAGE (WMF-style) ----------
const ShopPage = ({ navigate, addToCart, lang, route, density, compareIds, toggleCompare }) => {
  const allProducts = window.PRODUCTS;
  const initCat = route.category && route.category !== 'all' ? route.category : null;
  const [filterCats, setFilterCats] = useStateP(initCat ? [initCat] : []);
  const [filterBrands, setFilterBrands] = useStateP([]);
  const [sort, setSort] = useStateP('featured');
  const [view, setView] = useStateP('grid');
  const [priceMax, setPriceMax] = useStateP(20000);
  const [filterTags, setFilterTags] = useStateP([]);

  const ALL_TAGS = ['Specialty', 'HoReCa', 'Single dose', 'On demand', 'Smart', 'Made in Greece'];

  useEffectP(() => {
    if (route.category && route.category !== 'all') setFilterCats([route.category]);
    else if (route.category === 'all') setFilterCats([]);
  }, [route.category]);

  const filtered = useMemoP(() => {
    let r = allProducts.filter(p => {
      if (filterCats.length && !filterCats.includes(p.category)) return false;
      if (filterBrands.length && !filterBrands.includes(p.brand)) return false;
      if (p.price > priceMax) return false;
      if (filterTags.length && !filterTags.some(t => p.tags && p.tags.includes(t))) return false;
      return true;
    });
    if (sort === 'price-asc') r = [...r].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') r = [...r].sort((a, b) => b.price - a.price);
    if (sort === 'name') r = [...r].sort((a, b) => a.name.localeCompare(b.name));
    return r;
  }, [filterCats, filterBrands, priceMax, filterTags, sort]);

  const toggleArr = (arr, v, setter) => setter(arr.includes(v) ? arr.filter(x => x !== v) : [...arr, v]);

  const availableBrands = useMemoP(() => {
    const base = filterCats.length
      ? allProducts.filter(p => filterCats.includes(p.category))
      : allProducts;
    return [...new Set(base.map(p => p.brand))];
  }, [filterCats]);

  const showBrandPills = availableBrands.length > 1;

  return (
    <main>

      {/* ── INTRO BAND ── */}
      <div className="wmf-intro-band">
        <div className="wmf-intro-inner">
          <div className="wmf-intro-left">
            <span className="wmf-intro-eyebrow">
              {lang === 'gr' ? '— Επαγγελματικός Εξοπλισμός' : '— Professional Equipment'}
            </span>
            <h1 className="wmf-intro-title">
              {lang === 'gr' ? 'Κατάλογος Προϊόντων' : 'Product Catalogue'}
            </h1>
          </div>
          <div className="wmf-intro-right">
            <span className="wmf-count-label">
              {filtered.length} {lang === 'gr' ? 'προϊόντα' : 'products'}
            </span>
            <div className="wmf-sort-wrap">
              <span className="wmf-sort-label">{lang === 'gr' ? 'Ταξινόμηση' : 'Sort'}</span>
              <select className="wmf-sort-select" value={sort} onChange={e => setSort(e.target.value)}>
                <option value="featured">{lang === 'gr' ? 'Προτεινόμενα' : 'Featured'}</option>
                <option value="price-asc">{lang === 'gr' ? 'Τιμή ↑' : 'Price ↑'}</option>
                <option value="price-desc">{lang === 'gr' ? 'Τιμή ↓' : 'Price ↓'}</option>
                <option value="name">{lang === 'gr' ? 'Όνομα' : 'Name'}</option>
              </select>
            </div>
            <div className="wmf-view-toggle">
              <button className={`wmf-view-btn${view === 'grid' ? ' active' : ''}`} onClick={() => setView('grid')} title="Grid">
                <Icon name="grid" />
              </button>
              <button className={`wmf-view-btn${view === 'list' ? ' active' : ''}`} onClick={() => setView('list')} title="List">
                <Icon name="list" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── CATEGORY TABS ── */}
      <div className="wmf-cat-nav">
        <div className="wmf-cat-nav-inner">
          <button
            className={`wmf-cat-tab${filterCats.length === 0 ? ' active' : ''}`}
            onClick={() => { setFilterCats([]); setFilterBrands([]); }}
          >
            {lang === 'gr' ? 'Όλα' : 'All'}
          </button>
          {window.CATEGORIES.map(c => (
            <button
              key={c.id}
              className={`wmf-cat-tab${filterCats.length === 1 && filterCats[0] === c.id ? ' active' : ''}`}
              onClick={() => { setFilterCats([c.id]); setFilterBrands([]); }}
            >
              {lang === 'gr' ? c.label_gr : c.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── BRAND PILLS ── */}
      {showBrandPills && (
        <div className="wmf-brand-strip">
          <div className="wmf-brand-pills">
            {availableBrands.map(b => (
              <button
                key={b}
                className={`wmf-brand-pill${filterBrands.includes(b) ? ' active' : ''}`}
                onClick={() => toggleArr(filterBrands, b, setFilterBrands)}
              >
                {b}
              </button>
            ))}
            {filterBrands.length > 0 && (
              <button className="wmf-brand-pill wmf-clear-pill" onClick={() => setFilterBrands([])}>
                ✕ {lang === 'gr' ? 'Καθαρισμός' : 'Clear'}
              </button>
            )}
          </div>
        </div>
      )}

      {/* ── DEEP FILTERS ROW ── */}
      <div className="wmf-filter-row">
        <div className="wmf-filter-row-inner">
          {/* Price slider */}
          <div className="wmf-price-filter">
            <span className="wmf-filter-label">{lang === 'gr' ? 'Τιμή' : 'Price'}</span>
            <div className="wmf-price-track">
              <input
                type="range" min="100" max="20000" step="100" value={priceMax}
                className="wmf-price-slider"
                onChange={e => setPriceMax(parseInt(e.target.value))}
              />
            </div>
            <span className="wmf-price-val-display">
              {lang === 'gr' ? 'έως' : 'up to'} <strong>{fmt(priceMax)}</strong>
            </span>
            {priceMax < 20000 && (
              <button className="wmf-filter-clear-x" onClick={() => setPriceMax(20000)} title="Reset price">✕</button>
            )}
          </div>

          <div className="wmf-filter-divider" />

          {/* Feature tags */}
          <div className="wmf-tag-filters">
            <span className="wmf-filter-label">{lang === 'gr' ? 'Χαρακτηριστικά' : 'Features'}</span>
            <div className="wmf-tag-pills">
              {ALL_TAGS.map(tag => (
                <button
                  key={tag}
                  className={`wmf-tag-pill${filterTags.includes(tag) ? ' active' : ''}`}
                  onClick={() => toggleArr(filterTags, tag, setFilterTags)}
                >
                  {tag}
                </button>
              ))}
            </div>
            {filterTags.length > 0 && (
              <button className="wmf-filter-clear-x" onClick={() => setFilterTags([])} title="Clear features">✕</button>
            )}
          </div>
        </div>
      </div>

      {/* ── PRODUCT AREA ── */}
      <div className="wmf-product-area">
        <div className="wmf-grid-wrap">

          {/* Grid view */}
          {view === 'grid' && filtered.length > 0 && (
            <div className={`wmf-product-grid${density === 'dense' ? ' dense' : ''}`}>
              {filtered.map(p => (
                <div key={p.id} className="wmf-card" onClick={() => navigate({ page: 'product', id: p.id })}>
                  <div className="wmf-card-media">
                    <img src={photoFor(p, 0)} alt={p.name} />
                    {p.badge && <span className="wmf-card-badge">{p.badge}</span>}
                    <button
                      className={`wmf-compare-btn${compareIds.includes(p.id) ? ' active' : ''}`}
                      onClick={e => { e.stopPropagation(); toggleCompare(p.id); }}
                      title="Compare"
                    >⇄</button>
                    <div className="wmf-card-hover-cta">
                      {lang === 'gr' ? 'Δείτε το προϊόν' : 'View product'} →
                    </div>
                  </div>
                  <div className="wmf-card-body">
                    <div className="wmf-card-brand">{p.brand}</div>
                    <div className="wmf-card-name">{p.name}</div>
                    <div className="wmf-card-tagline">{p.tagline}</div>
                    <div className="wmf-card-price-row">
                      {p.price != null
                        ? <><span className="wmf-price-from">{lang === 'gr' ? 'Από' : 'From'}</span><span className="wmf-price-val">{fmt(p.price)}</span></>
                        : <span className="wmf-price-on-request">{lang === 'gr' ? 'Τιμή κατόπιν αιτήματος' : 'Price on request'}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* List view */}
          {view === 'list' && filtered.length > 0 && (
            <div className="wmf-list-view">
              {filtered.map(p => (
                <div key={p.id} className="wmf-list-row" onClick={() => navigate({ page: 'product', id: p.id })}>
                  <div className="wmf-list-img">
                    <img src={photoFor(p, 0)} alt={p.name} />
                  </div>
                  <div className="wmf-list-info">
                    <div className="wmf-card-brand">{p.brand}</div>
                    <div className="wmf-list-name">{p.name}</div>
                    <div className="wmf-card-tagline">{p.tagline} · {p.subcategory}</div>
                  </div>
                  <div className="wmf-list-price">
                    {p.price != null ? fmt(p.price) : (lang === 'gr' ? 'Τιμή κατόπιν αιτήματος' : 'Price on request')}
                  </div>
                  <button className="btn btn-outline" onClick={e => { e.stopPropagation(); navigate({ page: 'product', id: p.id }); }}>
                    {lang === 'gr' ? 'Λεπτομέρειες' : 'Details'}
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="wmf-empty">
              <div className="wmf-empty-icon">◎</div>
              <div className="label-xs">{lang === 'gr' ? 'ΚΑΝΕΝΑ ΑΠΟΤΕΛΕΣΜΑ' : 'NO RESULTS'}</div>
              <p>{lang === 'gr' ? 'Δοκιμάστε άλλες επιλογές.' : 'Try different filters.'}</p>
              <button className="btn btn-outline" style={{ marginTop: 24 }} onClick={() => { setFilterCats([]); setFilterBrands([]); }}>
                {lang === 'gr' ? 'Καθαρισμός φίλτρων' : 'Clear filters'}
              </button>
            </div>
          )}

        </div>
      </div>

      {compareIds.length > 0 && (
        <CompareBar ids={compareIds} navigate={navigate} toggleCompare={toggleCompare} lang={lang} />
      )}

      <Footer lang={lang} />
    </main>
  );
};

const CompareBar = ({ ids, navigate, toggleCompare, lang }) => {
  const products = ids.map(id => window.PRODUCTS.find(p => p.id === id)).filter(Boolean);
  return (
    <div style={{
      position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)',
      background: 'var(--c-action)', color: 'var(--c-white)', padding: '16px 24px',
      display: 'flex', gap: 24, alignItems: 'center', zIndex: 50,
      boxShadow: '0 12px 40px rgba(0,0,0,0.25)', minWidth: 480,
    }}>
      <div className="label-xs" style={{ color: 'var(--c-crema)' }}>{lang === 'gr' ? 'Σύγκριση' : 'Compare'} ({products.length}/3)</div>
      <div style={{ display: 'flex', gap: 12, flex: 1 }}>
        {products.map(p => (
          <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontFamily: 'var(--font-display)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            {p.name}
            <button onClick={() => toggleCompare(p.id)} style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>✕</button>
          </div>
        ))}
      </div>
      <button className="btn btn-primary" style={{ background: 'var(--c-crema)', color: 'var(--c-action)' }}
        disabled={products.length < 2}
        onClick={() => navigate({ page: 'compare' })}>
        {lang === 'gr' ? 'Σύγκριση →' : 'Compare →'}
      </button>
    </div>
  );
};

// ---------- PRODUCT DETAIL PAGE ----------
const ProductPage = ({ id, navigate, addToCart, lang }) => {
  const product = window.PRODUCTS.find(p => p.id === id);
  const [activeImg, setActiveImg] = useStateP(0);
  const [qty, setQty] = useStateP(1);
  const [tab, setTab] = useStateP('overview');
  const [variant, setVariant] = useStateP('2 group');
  const [showStickyBar, setShowStickyBar] = useStateP(false);
  const buyRef = useRefP(null);

  useEffectP(() => {
    const onScroll = () => {
      if (!buyRef.current) return;
      const rect = buyRef.current.getBoundingClientRect();
      setShowStickyBar(rect.bottom < 100);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!product) return <div className="gx-container" style={{ padding: 80 }}>Not found</div>;
  const photos = photosFor(product);
  const variantOptions = product.groups ? product.groups.split('-').map(s => s.trim()).filter(Boolean) : null;
  const groupVariants = product.groups && product.groups.includes('-')
    ? ['2 group', '3 group']
    : (product.groups ? [product.groups] : null);

  return (
    <main>
      <div className="gx-container gx-pdp">
        <div className="gx-pdp-crumbs">
          <a onClick={() => navigate({ page: 'home' })}>{lang === 'gr' ? 'Αρχική' : 'Home'}</a>
          {' / '}
          <a onClick={() => navigate({ page: 'shop', category: product.category })}>
            {window.CATEGORIES.find(c => c.id === product.category)?.[lang === 'gr' ? 'label_gr' : 'label']}
          </a>
          {' / '}
          <span>{product.brand} {product.name}</span>
        </div>

        <div className="gx-pdp-grid">
          <div className="gx-pdp-gallery">
            <div className="gx-pdp-main-img">
              <img src={photos[activeImg]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={product.name} />
            </div>
            <div className="gx-pdp-thumbs">
              {photos.map((src, i) => (
                <div key={i} className={`gx-pdp-thumb ${i === activeImg ? 'active' : ''}`} onClick={() => setActiveImg(i)}>
                  <img src={src} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>

          <div className="gx-pdp-info" ref={buyRef}>
            {product.badge && <div className="gx-card-badge" style={{ position: 'static', display: 'inline-block', marginBottom: 16 }}>{product.badge}</div>}
            <div className="gx-card-brand">{product.brand} · {product.country}</div>
            <h1 className="gx-pdp-title">{product.name}</h1>
            <div className="gx-pdp-tagline">{product.tagline}</div>

            <div className="gx-pdp-price">
              {product.price != null
                ? <><div className="gx-pdp-price-num">{fmt(product.price)}</div><div className="gx-pdp-price-tax">{lang === 'gr' ? 'καθαρή τιμή · ΦΠΑ ΧΩΡΙΣΤΑ' : 'net price · VAT excl.'}</div></>
                : <div className="gx-pdp-price-num" style={{ fontSize: 'clamp(18px, 2.5vw, 26px)' }}>{lang === 'gr' ? 'Τιμή κατόπιν αιτήματος' : 'Price on request'}</div>}
            </div>

            <p className="gx-pdp-desc">{product.description}</p>

            {groupVariants && groupVariants.length > 1 && (
              <div style={{ marginBottom: 28 }}>
                <div className="label-xs" style={{ marginBottom: 12 }}>{lang === 'gr' ? 'Διαμόρφωση' : 'Configuration'}</div>
                <div style={{ display: 'flex', gap: 8 }}>
                  {groupVariants.map(v => (
                    <button key={v}
                      onClick={() => setVariant(v)}
                      className={variant === v ? 'btn btn-primary' : 'btn btn-outline'}
                      style={{ flex: 1 }}>
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="gx-pdp-buy">
              <div className="gx-qty">
                <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                <input value={qty} onChange={e => setQty(Math.max(1, parseInt(e.target.value) || 1))} />
                <button onClick={() => setQty(qty + 1)}>+</button>
              </div>
              <button className="btn btn-primary btn-arrow" onClick={() => addToCart(product, qty)}>
                {lang === 'gr' ? 'Προσθήκη στο καλάθι' : 'Add to cart'}
              </button>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <button className="btn btn-outline" style={{ flex: 1 }}>
                {lang === 'gr' ? 'Κλείστε demo' : 'Book a demo'}
              </button>
              <button className="btn btn-outline" style={{ flex: 1 }}>
                {lang === 'gr' ? 'Ζήτηση προσφοράς' : 'Request quote'}
              </button>
            </div>

            <div className="gx-pdp-meta">
              <div className="gx-pdp-meta-item"><Icon name="truck" /> {lang === 'gr' ? 'Παράδοση 5-7 ημ.' : 'Delivery 5-7 days'}</div>
              <div className="gx-pdp-meta-item"><Icon name="shield" /> {lang === 'gr' ? 'Εγγύηση 24μ.' : '24-month warranty'}</div>
              <div className="gx-pdp-meta-item"><Icon name="wrench" /> {lang === 'gr' ? 'Service περιλαμβάνεται' : 'Service included'}</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="gx-pdp-tabs">
          <div className="gx-tab-bar">
            {[['overview', lang === 'gr' ? 'Επισκόπηση' : 'Overview'],
              ['specs', lang === 'gr' ? 'Τεχνικά χαρακτηριστικά' : 'Specifications'],
              ['service', lang === 'gr' ? 'Service & Εγγύηση' : 'Service & Warranty'],
              ['shipping', lang === 'gr' ? 'Παράδοση' : 'Shipping']].map(([id, label]) => (
              <button key={id} className={`gx-tab ${tab === id ? 'active' : ''}`} onClick={() => setTab(id)}>{label}</button>
            ))}
          </div>
          {tab === 'overview' && (
            <div style={{ maxWidth: 760, fontSize: 15, lineHeight: 1.8, color: 'var(--c-charcoal)' }}>
              <p style={{ marginBottom: 16 }}>{product.description}</p>
              <p>
                {lang === 'gr'
                  ? `Η ${product.name} του οίκου ${product.brand} είναι μια από τις προτάσεις που εκπροσωπούμε επίσημα στην Ελλάδα από το 1970. Η εγκατάσταση και η εκπαίδευση πραγματοποιούνται δωρεάν από εργοστασιακά εκπαιδευμένους τεχνικούς.`
                  : `The ${product.brand} ${product.name} is one of the models we have officially distributed in Greece since 1970. Installation and training are performed at no extra cost by factory-trained engineers.`}
              </p>
              <ul style={{ marginTop: 16, paddingLeft: 20 }}>
                {(product.tags || []).map(t => <li key={t}>{t}</li>)}
              </ul>
            </div>
          )}
          {tab === 'specs' && (
            <table className="gx-spec-table">
              <tbody>
                {Object.entries(product.specs || {}).map(([k, v]) => (
                  <tr key={k}><td>{k}</td><td>{v}</td></tr>
                ))}
                <tr><td>{lang === 'gr' ? 'Διαμόρφωση' : 'Configuration'}</td><td>{variant}</td></tr>
                <tr><td>{lang === 'gr' ? 'Κατασκευαστής' : 'Manufacturer'}</td><td>{product.brand} · {product.country}</td></tr>
              </tbody>
            </table>
          )}
          {tab === 'service' && (
            <div style={{ maxWidth: 760, fontSize: 15, lineHeight: 1.8 }}>
              <p>{lang === 'gr' ? 'Όλα τα επαγγελματικά μηχανήματα συνοδεύονται από εγγύηση 24 μηνών και πρόσβαση σε εργοστασιακά γνήσια ανταλλακτικά. Διαθέσιμες επιλογές service:' : 'All professional machines come with a 24-month warranty and access to factory genuine spare parts. Available service plans:'}</p>
              <ul style={{ marginTop: 16, paddingLeft: 20 }}>
                <li>{lang === 'gr' ? 'Βασικό συμβόλαιο — 2 επισκέψεις/έτος' : 'Standard contract — 2 visits per year'}</li>
                <li>{lang === 'gr' ? 'Premium — 4 επισκέψεις, προτεραιότητα' : 'Premium — 4 visits, priority response'}</li>
                <li>{lang === 'gr' ? 'Remote monitoring — απομακρυσμένη παρακολούθηση 24/7' : 'Remote monitoring — 24/7 telemetry'}</li>
              </ul>
            </div>
          )}
          {tab === 'shipping' && (
            <div style={{ maxWidth: 760, fontSize: 15, lineHeight: 1.8 }}>
              <p>{lang === 'gr' ? 'Δωρεάν παράδοση και εγκατάσταση εντός Αττικής. Πανελλαδικές αποστολές μέσω εξειδικευμένης μεταφοράς ευαίσθητου εξοπλισμού. Συνήθης χρόνος παράδοσης 5-7 εργάσιμες ημέρες.' : 'Free delivery and installation within Attica. Nationwide shipping via specialised couriers for sensitive equipment. Typical delivery 5–7 business days.'}</p>
            </div>
          )}
        </div>

        {/* Related */}
        <div style={{ marginTop: 96 }}>
          <div className="gx-section-header">
            <div>
              <span className="label-xs">— {lang === 'gr' ? 'Σχετικά' : 'You may also like'}</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 36, textTransform: 'uppercase', letterSpacing: '0.02em', marginTop: 12 }}>
                {lang === 'gr' ? 'Από την ίδια κατηγορία' : 'More from this category'}
              </h2>
            </div>
          </div>
          <div className="gx-grid-4">
            {window.PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)
              .map(p => <ProductCard key={p.id} product={p} navigate={navigate} />)}
          </div>
        </div>
      </div>

      {/* Sticky add-to-cart bar */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, background: 'var(--c-white)',
        borderTop: '1px solid var(--c-light-grey)', padding: '16px 32px', zIndex: 40,
        transform: showStickyBar ? 'translateY(0)' : 'translateY(100%)', transition: 'transform 240ms ease',
        boxShadow: '0 -10px 30px rgba(0,0,0,0.06)',
      }}>
        <div className="gx-container" style={{ display: 'flex', alignItems: 'center', gap: 24, padding: 0 }}>
          <div style={{ width: 56, height: 56, background: 'var(--c-off-white)' }}>
            <img src={photos[0]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ flex: 1 }}>
            <div className="gx-card-brand">{product.brand}</div>
            <div className="gx-card-name" style={{ fontSize: 18 }}>{product.name}</div>
          </div>
          <div className="gx-card-price" style={{ fontSize: 22 }}>
            {product.price != null ? fmt(product.price * qty) : (lang === 'gr' ? 'Τιμή κατόπιν αιτήματος' : 'Price on request')}
          </div>
          <div className="gx-qty" style={{ height: 44 }}>
            <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
            <input value={qty} onChange={e => setQty(Math.max(1, parseInt(e.target.value) || 1))} />
            <button onClick={() => setQty(qty + 1)}>+</button>
          </div>
          <button className="btn btn-primary" onClick={() => addToCart(product, qty)}>
            {lang === 'gr' ? 'Προσθήκη στο καλάθι' : 'Add to cart'}
          </button>
        </div>
      </div>

      <Footer lang={lang} />
    </main>
  );
};

// ---------- COMPARE PAGE ----------
const ComparePage = ({ ids, navigate, addToCart, lang, toggleCompare }) => {
  const products = ids.map(id => window.PRODUCTS.find(p => p.id === id)).filter(Boolean);
  if (products.length === 0) {
    return (
      <main>
        <div className="gx-container" style={{ padding: '120px 0', textAlign: 'center' }}>
          <div className="label-xs">— {lang === 'gr' ? 'Σύγκριση' : 'Compare'}</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 56, textTransform: 'uppercase', margin: '20px 0' }}>
            {lang === 'gr' ? 'Δεν επιλέξατε προϊόντα' : 'Nothing to compare yet'}
          </h1>
          <button className="btn btn-primary" onClick={() => navigate({ page: 'shop', category: 'all' })}>
            {lang === 'gr' ? 'Επιλέξτε προϊόντα' : 'Browse products'}
          </button>
        </div>
        <Footer lang={lang} />
      </main>
    );
  }
  // Build all spec keys
  const allSpecs = Array.from(new Set(products.flatMap(p => Object.keys(p.specs || {}))));
  return (
    <main>
      <div className="gx-container" style={{ padding: '48px 0 96px' }}>
        <div className="gx-pdp-crumbs"><a onClick={() => navigate({ page: 'home' })}>{lang === 'gr' ? 'Αρχική' : 'Home'}</a> / <span>{lang === 'gr' ? 'Σύγκριση' : 'Compare'}</span></div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 56, textTransform: 'uppercase', letterSpacing: '0.02em', margin: '8px 0 48px' }}>
          {lang === 'gr' ? 'Σύγκριση' : 'Compare'} ({products.length})
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: `200px repeat(${products.length}, 1fr)`, gap: 0, borderTop: '1px solid var(--c-light-grey)' }}>
          <div style={{ padding: 20, fontFamily: 'var(--font-display)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--c-mid-grey)' }}></div>
          {products.map(p => (
            <div key={p.id} style={{ padding: 20, borderLeft: '1px solid var(--c-light-grey)' }}>
              <div style={{ aspectRatio: '1/1', background: 'var(--c-off-white)', marginBottom: 16 }}>
                <img src={photoFor(p, 0)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="gx-card-brand">{p.brand}</div>
              <div className="gx-card-name" style={{ fontSize: 22, marginTop: 4 }}>{p.name}</div>
              <div className="gx-card-tagline" style={{ marginTop: 8 }}>{p.tagline}</div>
            </div>
          ))}

          <div style={{ padding: 20, borderTop: '1px solid var(--c-light-grey)', fontFamily: 'var(--font-display)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--c-mid-grey)' }}>{lang === 'gr' ? 'Τιμή' : 'Price'}</div>
          {products.map(p => (
            <div key={p.id+'-price'} style={{ padding: 20, borderTop: '1px solid var(--c-light-grey)', borderLeft: '1px solid var(--c-light-grey)', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: p.price != null ? 22 : 14 }}>
              {p.price != null ? fmt(p.price) : (lang === 'gr' ? 'Τιμή κατόπιν αιτήματος' : 'Price on request')}
            </div>
          ))}

          <div style={{ padding: 20, borderTop: '1px solid var(--c-light-grey)', fontFamily: 'var(--font-display)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--c-mid-grey)' }}>{lang === 'gr' ? 'Κατηγορία' : 'Category'}</div>
          {products.map(p => (
            <div key={p.id+'-cat'} style={{ padding: 20, borderTop: '1px solid var(--c-light-grey)', borderLeft: '1px solid var(--c-light-grey)', fontSize: 14 }}>{p.subcategory}</div>
          ))}

          {allSpecs.map(spec => (
            <React.Fragment key={spec}>
              <div style={{ padding: 20, borderTop: '1px solid var(--c-off-white)', fontFamily: 'var(--font-display)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--c-mid-grey)' }}>{spec}</div>
              {products.map(p => (
                <div key={p.id+'-'+spec} style={{ padding: 20, borderTop: '1px solid var(--c-off-white)', borderLeft: '1px solid var(--c-light-grey)', fontSize: 14 }}>{p.specs?.[spec] || '—'}</div>
              ))}
            </React.Fragment>
          ))}

          <div style={{ padding: 20, borderTop: '1px solid var(--c-light-grey)' }}></div>
          {products.map(p => (
            <div key={p.id+'-actions'} style={{ padding: 20, borderTop: '1px solid var(--c-light-grey)', borderLeft: '1px solid var(--c-light-grey)', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <button className="btn btn-primary" onClick={() => addToCart(p, 1)}>{lang === 'gr' ? 'Στο καλάθι' : 'Add to cart'}</button>
              <button className="btn btn-outline" onClick={() => navigate({ page: 'product', id: p.id })}>{lang === 'gr' ? 'Λεπτομέρειες' : 'Details'}</button>
              <button style={{ fontSize: 11, color: 'var(--c-mid-grey)', textDecoration: 'underline', marginTop: 8 }} onClick={() => toggleCompare(p.id)}>
                {lang === 'gr' ? 'Αφαίρεση' : 'Remove'}
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer lang={lang} />
    </main>
  );
};

// ---------- SERVICE PAGE ----------
const ServicePage = ({ navigate, lang }) => (
  <main>
    <section className="gx-section dark" style={{ padding: '96px 0 64px' }}>
      <div className="gx-container">
        <span className="label-xs" style={{ color: 'var(--c-crema)' }}>— Service & Support</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 7vw, 96px)', textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1, marginTop: 16, maxWidth: 1100 }}>
          {lang === 'gr' ? <>Service από εργοστασιακά<br/>εκπαιδευμένους τεχνικούς.</> : <>Service by factory-<br/>trained engineers.</>}
        </h1>
        <p style={{ marginTop: 28, maxWidth: 640, fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,0.7)' }}>
          {lang === 'gr'
            ? 'Δεν τελειώνει με την παράδοση. Συνεχίζουμε να φροντίζουμε τη μηχανή σας με εργοστασιακές προδιαγραφές, σε όλη τη διάρκεια ζωής της.'
            : 'It doesn\u2019t end at delivery. We keep your machine running to factory spec for its entire lifetime.'}
        </p>
      </div>
    </section>
    <section className="gx-section">
      <div className="gx-container">
        <div className="gx-grid-3" style={{ gap: 0, borderTop: '1px solid var(--c-light-grey)', borderLeft: '1px solid var(--c-light-grey)' }}>
          {[
            { tier: 'STANDARD', price: '€ 480 / yr', features: ['2 visits per year', 'Genuine parts at cost', '24h response time', 'Annual descaling included'] },
            { tier: 'PREMIUM', price: '€ 1.090 / yr', features: ['4 visits per year', '15% off all parts', 'Priority 4h response', 'Loaner machine if downtime > 24h', 'Quarterly water analysis'] },
            { tier: 'ENTERPRISE', price: 'Custom', features: ['Multi-site coverage', 'Remote 24/7 monitoring', 'Dedicated account engineer', 'On-site barista training', 'Per-quarter performance report'] },
          ].map((tier, idx) => (
            <div key={tier.tier} style={{ padding: 40, borderRight: '1px solid var(--c-light-grey)', borderBottom: '1px solid var(--c-light-grey)', background: idx === 1 ? 'var(--c-action)' : 'var(--c-white)', color: idx === 1 ? 'var(--c-white)' : 'var(--c-charcoal)' }}>
              <div className="label-xs" style={{ color: idx === 1 ? 'var(--c-crema)' : 'var(--c-mid-grey)' }}>{tier.tier}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 600, marginTop: 16, textTransform: 'uppercase' }}>{tier.price}</div>
              <ul style={{ listStyle: 'none', marginTop: 32, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {tier.features.map(f => (
                  <li key={f} style={{ display: 'flex', gap: 12, fontSize: 14, lineHeight: 1.5 }}>
                    <Icon name="check" /> <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={idx === 1 ? 'btn btn-outline-light' : 'btn btn-primary'} style={{ marginTop: 32, width: '100%' }}
                onClick={() => navigate({ page: 'contact', subject: 'service', topic: tier.tier })}>
                {lang === 'gr' ? 'Επικοινωνήστε' : 'Get in touch'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer lang={lang} />
  </main>
);

// ---------- COMPANY PAGE ----------
const CompanyPage = ({ navigate, lang }) => (
  <main>
    <section className="gx-section warm" style={{ padding: '96px 0' }}>
      <div className="gx-container">
        <span className="label-xs">— {lang === 'gr' ? 'Η εταιρεία' : 'About us'}</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(56px, 8vw, 120px)', textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 0.95, marginTop: 16 }}>
          {lang === 'gr' ? 'Από το 1970.' : 'Since 1970.'}
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, marginTop: 64 }}>
          <p style={{ fontSize: 17, lineHeight: 1.8 }}>
            {lang === 'gr'
              ? 'Πενήντα πέντε χρόνια από την ημέρα που ο Νίκος Γεωργόπουλος ξεκίνησε να βάζει τη δική του προσωπική σφραγίδα στην ελληνική αγορά καφεστίασης. Μία σφραγίδα υψηλής ποιότητας και καινοτομίας. Ένα αποτύπωμα αξιοπιστίας, μία υπογραφή συνέπειας.'
              : 'Fifty-five years since Nikos Georgopoulos started leaving his personal mark on the Greek coffee industry. A mark of high quality and innovation. A footprint of reliability, a signature of consistency.'}
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--c-mid-grey)' }}>
            {lang === 'gr'
              ? 'Σήμερα, η δεύτερη γενιά — Μαίρη και Κατερίνα Γεωργοπούλου — συνεχίζει την αποστολή. Από το showroom μας στον Άγιο Δημήτριο εξοπλίζουμε τα πιο απαιτητικά specialty bars, ξενοδοχεία και HoReCa concepts σε όλη την Ελλάδα.'
              : 'Today, the second generation — Mary and Katerina Georgopoulou — carries the mission forward. From our showroom in Athens we equip the most demanding specialty bars, hotels and HoReCa concepts across Greece.'}
          </p>
        </div>
      </div>
    </section>
    <Footer lang={lang} />
  </main>
);

// ---------- CHECKOUT PAGE ----------
const CheckoutPage = ({ navigate, items, lang }) => {
  const [step, setStep] = useStateP(1);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const vat = total * 0.24;
  return (
    <main>
      <div className="gx-container" style={{ padding: '48px 0 96px', maxWidth: 1200 }}>
        <div className="gx-pdp-crumbs"><a onClick={() => navigate({ page: 'home' })}>Home</a> / <span>Checkout</span></div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 48, textTransform: 'uppercase', letterSpacing: '0.02em', margin: '16px 0 48px' }}>
          {lang === 'gr' ? 'Ολοκλήρωση' : 'Checkout'}
        </h1>

        {/* Stepper */}
        <div style={{ display: 'flex', borderBottom: '1px solid var(--c-light-grey)', marginBottom: 48 }}>
          {[[1, lang === 'gr' ? 'Στοιχεία' : 'Details'], [2, lang === 'gr' ? 'Παράδοση' : 'Delivery'], [3, lang === 'gr' ? 'Πληρωμή' : 'Payment']].map(([n, label]) => (
            <button key={n} onClick={() => setStep(n)}
              className="gx-tab"
              style={{
                padding: '20px 32px',
                color: step === n ? 'var(--c-action)' : 'var(--c-mid-grey)',
                borderBottom: step === n ? '2px solid var(--c-action)' : '2px solid transparent',
                marginBottom: -1
              }}>
              {String(n).padStart(2, '0')} — {label}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64 }}>
          <div>
            {step === 1 && (
              <div style={{ display: 'grid', gap: 20 }}>
                <CheckoutInput label={lang === 'gr' ? 'Επωνυμία επιχείρησης' : 'Business name'} placeholder="Café Bonjour ΟΕ" />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                  <CheckoutInput label="ΑΦΜ / VAT" placeholder="EL999999999" />
                  <CheckoutInput label={lang === 'gr' ? 'ΔΟΥ' : 'Tax office'} placeholder="ΦΑΕ Αθηνών" />
                </div>
                <CheckoutInput label="Email" placeholder="orders@bonjour.gr" />
                <CheckoutInput label={lang === 'gr' ? 'Τηλέφωνο' : 'Phone'} placeholder="+30 210 000 0000" />
              </div>
            )}
            {step === 2 && (
              <div style={{ display: 'grid', gap: 20 }}>
                <CheckoutInput label={lang === 'gr' ? 'Διεύθυνση' : 'Address'} placeholder="Σταδίου 12" />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
                  <CheckoutInput label="ΤΚ" placeholder="10564" />
                  <CheckoutInput label={lang === 'gr' ? 'Πόλη' : 'City'} placeholder="Athens" />
                  <CheckoutInput label={lang === 'gr' ? 'Νομός' : 'Region'} placeholder="Attica" />
                </div>
                <div style={{ marginTop: 24 }}>
                  <div className="label-xs" style={{ marginBottom: 12 }}>{lang === 'gr' ? 'Τρόπος παράδοσης' : 'Delivery method'}</div>
                  {[
                    [lang === 'gr' ? 'Δωρεάν εγκατάσταση Αττικής' : 'Free delivery & install (Attica)', '3-5 days', 'FREE'],
                    [lang === 'gr' ? 'Ειδικευμένη μεταφορά Πανελλαδικά' : 'Specialised nationwide shipping', '5-7 days', '€ 180'],
                    [lang === 'gr' ? 'Express εγκατάσταση' : 'Express install', '24-48h', '€ 380'],
                  ].map(([n, d, p], idx) => (
                    <label key={n} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 16, border: '1px solid var(--c-light-grey)', marginBottom: 8, cursor: 'pointer' }}>
                      <input type="radio" name="delivery" defaultChecked={idx === 0} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, textTransform: 'uppercase' }}>{n}</div>
                        <div style={{ fontSize: 13, color: 'var(--c-mid-grey)' }}>{d}</div>
                      </div>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>{p}</div>
                    </label>
                  ))}
                </div>
              </div>
            )}
            {step === 3 && (
              <div>
                <div className="label-xs" style={{ marginBottom: 12 }}>{lang === 'gr' ? 'Τρόπος πληρωμής' : 'Payment method'}</div>
                {['Bank transfer', 'Credit card (Visa / Mastercard)', 'Lease & finance (24-60 months)'].map((m, idx) => (
                  <label key={m} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 16, border: '1px solid var(--c-light-grey)', marginBottom: 8, cursor: 'pointer' }}>
                    <input type="radio" name="pay" defaultChecked={idx === 0} />
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, textTransform: 'uppercase' }}>{m}</div>
                  </label>
                ))}
              </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 48 }}>
              <button className="btn btn-outline" onClick={() => setStep(Math.max(1, step - 1))} disabled={step === 1}>← {lang === 'gr' ? 'Πίσω' : 'Back'}</button>
              {step < 3 ? (
                <button className="btn btn-primary btn-arrow" onClick={() => setStep(step + 1)}>{lang === 'gr' ? 'Επόμενο' : 'Continue'}</button>
              ) : (
                <button className="btn btn-primary btn-arrow" onClick={() => navigate({ page: 'home' })}>{lang === 'gr' ? 'Πληρωμή' : 'Place order'}</button>
              )}
            </div>
          </div>

          <aside style={{ background: 'var(--c-warm-white)', padding: 32 }}>
            <div className="label-xs" style={{ marginBottom: 16 }}>{lang === 'gr' ? 'Σύνοψη παραγγελίας' : 'Order summary'}</div>
            {items.length === 0 ? <p style={{ color: 'var(--c-mid-grey)' }}>{lang === 'gr' ? 'Άδειο καλάθι.' : 'Empty cart.'}</p> :
              items.map(i => (
                <div key={i.id} style={{ display: 'grid', gridTemplateColumns: '60px 1fr auto', gap: 12, marginBottom: 16 }}>
                  <div style={{ aspectRatio: '1/1', background: 'var(--c-off-white)' }}>
                    <img src={photoFor(i, 0)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--c-mid-grey)' }}>{i.brand}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, textTransform: 'uppercase' }}>{i.name} × {i.qty}</div>
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>{fmt(i.price * i.qty)}</div>
                </div>
              ))}
            <div style={{ borderTop: '1px solid var(--c-light-grey)', marginTop: 24, paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}><span>{lang === 'gr' ? 'Υποσύνολο' : 'Subtotal'}</span><span>{fmt(total)}</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}><span>{lang === 'gr' ? 'ΦΠΑ 24%' : 'VAT 24%'}</span><span>{fmt(vat)}</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}><span>{lang === 'gr' ? 'Παράδοση' : 'Delivery'}</span><span>{lang === 'gr' ? 'Δωρεάν' : 'Free'}</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 12, paddingTop: 12, borderTop: '1px solid var(--c-light-grey)' }}>
                <span style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{lang === 'gr' ? 'Σύνολο' : 'Total'}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 24 }}>{fmt(total + vat)}</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <Footer lang={lang} />
    </main>
  );
};

const CheckoutInput = ({ label, placeholder }) => (
  <div>
    <div className="label-xs" style={{ marginBottom: 8 }}>{label}</div>
    <input placeholder={placeholder} style={{ width: '100%', padding: '14px 16px', border: '1px solid var(--c-light-grey)', fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none', background: 'var(--c-white)' }} />
  </div>
);

// ---------- CONTACT PAGE ----------
const ContactPage = ({ navigate, lang, route }) => {
  const initialSubject = route && route.subject ? route.subject : '';
  const initialTopic = route && route.topic ? route.topic : '';

  const [form, setForm] = useStateP({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    subject: initialSubject,
    topic: initialTopic,
    message: '',
    region: '',
    preferredContact: 'email',
    consent: false,
  });
  const [files, setFiles] = useStateP([]);
  const [submitted, setSubmitted] = useStateP(false);

  const subjectOptions = lang === 'gr'
    ? [
        { v: '', l: '— Επιλέξτε —' },
        { v: 'product', l: 'Προϊόν / αγορά' },
        { v: 'service', l: 'Service / συντήρηση' },
        { v: 'question', l: 'Ερώτηση / πληροφορίες' },
        { v: 'complaint', l: 'Παράπονο' },
        { v: 'other', l: 'Άλλο' },
      ]
    : [
        { v: '', l: '— Select —' },
        { v: 'product', l: 'Product / purchase' },
        { v: 'service', l: 'Service / maintenance' },
        { v: 'question', l: 'Question / info' },
        { v: 'complaint', l: 'Complaint' },
        { v: 'other', l: 'Other' },
      ];

  const set = (k, v) => setForm(prev => ({ ...prev, [k]: v }));
  const onFiles = (fl) => {
    const arr = Array.from(fl || []);
    setFiles(prev => [...prev, ...arr]);
  };
  const removeFile = (idx) => setFiles(prev => prev.filter((_, i) => i !== idx));

  const inputStyle = { width: '100%', padding: '14px 16px', border: '1px solid var(--c-light-grey)', fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none', background: 'var(--c-white)', color: 'var(--c-charcoal)' };

  if (submitted) {
    return (
      <main>
        <section className="gx-section warm" style={{ padding: '120px 0', minHeight: '60vh' }}>
          <div className="gx-container" style={{ maxWidth: 720, textAlign: 'center' }}>
            <span className="label-xs">— {lang === 'gr' ? 'Ευχαριστούμε' : 'Thank you'}</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 6vw, 72px)', textTransform: 'uppercase', lineHeight: 1, marginTop: 16 }}>
              {lang === 'gr' ? 'Λάβαμε το μήνυμά σας.' : 'Message received.'}
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--c-mid-grey)', marginTop: 24 }}>
              {lang === 'gr'
                ? 'Ένας εκπρόσωπός μας θα επικοινωνήσει εντός 24 εργάσιμων ωρών.'
                : 'A representative will be in touch within 24 business hours.'}
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 40 }}>
              <button className="btn btn-primary" onClick={() => navigate({ page: 'home' })}>
                {lang === 'gr' ? 'Επιστροφή στην αρχική' : 'Back to home'}
              </button>
              <button className="btn btn-outline" onClick={() => { setSubmitted(false); setForm({ companyName: '', contactName: '', email: '', phone: '', subject: '', topic: '', message: '', region: '', preferredContact: 'email', consent: false }); setFiles([]); }}>
                {lang === 'gr' ? 'Νέο μήνυμα' : 'Send another'}
              </button>
            </div>
          </div>
        </section>
        <Footer lang={lang} />
      </main>
    );
  }

  return (
    <main>
      <section className="gx-section warm" style={{ padding: '96px 0 48px' }}>
        <div className="gx-container" style={{ maxWidth: 980 }}>
          <span className="label-xs">— {lang === 'gr' ? 'Επικοινωνία' : 'Contact'}</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 7vw, 96px)', textTransform: 'uppercase', letterSpacing: '0.01em', lineHeight: 0.95, marginTop: 16 }}>
            {lang === 'gr' ? 'Πείτε μας πώς μπορούμε να βοηθήσουμε.' : 'Tell us how we can help.'}
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--c-mid-grey)', marginTop: 24, maxWidth: 680 }}>
            {lang === 'gr'
              ? 'Συμπληρώστε τη φόρμα και ένας εκπρόσωπός μας θα απαντήσει εντός 24 εργάσιμων ωρών. Επισυνάψτε φωτογραφίες αν αφορούν συγκεκριμένη μηχανή ή χώρο εγκατάστασης.'
              : 'Fill in the form and a representative will respond within 24 business hours. Attach photos if relevant — equipment, installation site, or anything visual.'}
          </p>
        </div>
      </section>

      <section className="gx-section" style={{ padding: '0 0 96px' }}>
        <div className="gx-container" style={{ maxWidth: 980 }}>
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                style={{ display: 'grid', gap: 24, background: 'var(--c-white)', padding: 48, border: '1px solid var(--c-light-grey)' }}>

            {/* Subject */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div>
                <div className="label-xs" style={{ marginBottom: 8 }}>{lang === 'gr' ? 'Θέμα *' : 'Subject *'}</div>
                <select required value={form.subject} onChange={e => set('subject', e.target.value)} style={inputStyle}>
                  {subjectOptions.map(o => <option key={o.v} value={o.v}>{o.l}</option>)}
                </select>
              </div>
              <div>
                <div className="label-xs" style={{ marginBottom: 8 }}>{lang === 'gr' ? 'Σχετικό προϊόν / μηχανή' : 'Related product / machine'}</div>
                <input value={form.topic} onChange={e => set('topic', e.target.value)} placeholder={lang === 'gr' ? 'π.χ. La Cimbali M200, S/N…' : 'e.g. La Cimbali M200, S/N…'} style={inputStyle} />
              </div>
            </div>

            {/* Company / contact name */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div>
                <div className="label-xs" style={{ marginBottom: 8 }}>{lang === 'gr' ? 'Επωνυμία επιχείρησης *' : 'Company name *'}</div>
                <input required value={form.companyName} onChange={e => set('companyName', e.target.value)} placeholder={lang === 'gr' ? 'Café Bonjour ΟΕ' : 'Café Bonjour Ltd'} style={inputStyle} />
              </div>
              <div>
                <div className="label-xs" style={{ marginBottom: 8 }}>{lang === 'gr' ? 'Όνομα επικοινωνίας *' : 'Contact name *'}</div>
                <input required value={form.contactName} onChange={e => set('contactName', e.target.value)} placeholder={lang === 'gr' ? 'Μαρία Παπαδοπούλου' : 'Maria Papadopoulou'} style={inputStyle} />
              </div>
            </div>

            {/* Email / phone */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div>
                <div className="label-xs" style={{ marginBottom: 8 }}>Email *</div>
                <input required type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="contact@bonjour.gr" style={inputStyle} />
              </div>
              <div>
                <div className="label-xs" style={{ marginBottom: 8 }}>{lang === 'gr' ? 'Τηλέφωνο *' : 'Phone *'}</div>
                <input required type="tel" value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="+30 210 000 0000" style={inputStyle} />
              </div>
            </div>

            {/* Region / preferred contact */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div>
                <div className="label-xs" style={{ marginBottom: 8 }}>{lang === 'gr' ? 'Πόλη / νομός' : 'City / region'}</div>
                <input value={form.region} onChange={e => set('region', e.target.value)} placeholder={lang === 'gr' ? 'Αθήνα, Αττική' : 'Athens, Attica'} style={inputStyle} />
              </div>
              <div>
                <div className="label-xs" style={{ marginBottom: 8 }}>{lang === 'gr' ? 'Προτιμώμενη επικοινωνία' : 'Preferred contact'}</div>
                <div style={{ display: 'flex', gap: 16, paddingTop: 12 }}>
                  {[
                    { v: 'email', l: 'Email' },
                    { v: 'phone', l: lang === 'gr' ? 'Τηλέφωνο' : 'Phone' },
                    { v: 'either', l: lang === 'gr' ? 'Όποιο' : 'Either' },
                  ].map(o => (
                    <label key={o.v} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, cursor: 'pointer' }}>
                      <input type="radio" name="preferredContact" checked={form.preferredContact === o.v} onChange={() => set('preferredContact', o.v)} />
                      {o.l}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <div className="label-xs" style={{ marginBottom: 8 }}>{lang === 'gr' ? 'Μήνυμα *' : 'Message *'}</div>
              <textarea required rows="6" value={form.message} onChange={e => set('message', e.target.value)}
                placeholder={lang === 'gr' ? 'Πείτε μας περισσότερα για το αίτημά σας…' : 'Tell us more about your request…'}
                style={{ ...inputStyle, resize: 'vertical', fontFamily: 'var(--font-body)' }} />
            </div>

            {/* File upload */}
            <div>
              <div className="label-xs" style={{ marginBottom: 8 }}>{lang === 'gr' ? 'Επισυνάψεις (φωτογραφίες, σχέδια, PDF)' : 'Attachments (photos, drawings, PDFs)'}</div>
              <label htmlFor="contact-files" style={{ display: 'block', padding: '32px 24px', border: '2px dashed var(--c-light-grey)', textAlign: 'center', cursor: 'pointer', background: 'var(--c-warm-white)', transition: 'var(--t)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {lang === 'gr' ? '+ Προσθήκη αρχείων' : '+ Add files'}
                </div>
                <div style={{ fontSize: 12, color: 'var(--c-mid-grey)', marginTop: 6 }}>
                  {lang === 'gr' ? 'JPG · PNG · PDF · έως 10MB ανά αρχείο' : 'JPG · PNG · PDF · up to 10MB each'}
                </div>
              </label>
              <input id="contact-files" type="file" multiple
                accept="image/*,application/pdf,.dwg,.dxf"
                onChange={(e) => onFiles(e.target.files)}
                style={{ display: 'none' }} />
              {files.length > 0 && (
                <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {files.map((f, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', border: '1px solid var(--c-light-grey)', background: 'var(--c-warm-white)' }}>
                      <Icon name="check" />
                      <div style={{ flex: 1, fontSize: 13, fontFamily: 'var(--font-mono, monospace)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.name}</div>
                      <div style={{ fontSize: 12, color: 'var(--c-mid-grey)' }}>{(f.size / 1024).toFixed(0)} KB</div>
                      <button type="button" onClick={() => removeFile(idx)} style={{ fontSize: 12, color: 'var(--c-mid-grey)', textDecoration: 'underline' }}>
                        {lang === 'gr' ? 'Αφαίρεση' : 'Remove'}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Consent */}
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 13, lineHeight: 1.5, color: 'var(--c-mid-grey)' }}>
              <input type="checkbox" required checked={form.consent} onChange={e => set('consent', e.target.checked)} style={{ marginTop: 3 }} />
              <span>
                {lang === 'gr'
                  ? 'Συμφωνώ με την επεξεργασία των δεδομένων μου σύμφωνα με την Πολιτική Απορρήτου της Georgopoulos Α.Ε.'
                  : 'I agree to the processing of my data under the Georgopoulos S.A. Privacy Policy.'}
              </span>
            </label>

            {/* Submit */}
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginTop: 8 }}>
              <button type="submit" className="btn btn-primary btn-arrow">
                {lang === 'gr' ? 'Αποστολή μηνύματος' : 'Send message'}
              </button>
              <span style={{ fontSize: 12, color: 'var(--c-mid-grey)' }}>
                {lang === 'gr' ? '* Υποχρεωτικά πεδία' : '* Required fields'}
              </span>
            </div>
          </form>

          {/* Direct contact channels */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 32 }}>
            {[
              { l: lang === 'gr' ? 'Πωλήσεις' : 'Sales', v: 'sales@georgopoulos.gr', sub: '+30 210 555 0100' },
              { l: 'Service', v: 'service@georgopoulos.gr', sub: '+30 210 555 0150' },
              { l: lang === 'gr' ? 'Showroom Αθήνας' : 'Athens showroom', v: lang === 'gr' ? 'Λ. Κηφισίας 220, 14562' : '220 Kifisias Ave, 14562', sub: lang === 'gr' ? 'Δευ–Παρ 09:00–18:00' : 'Mon–Fri 9:00–18:00' },
            ].map(c => (
              <div key={c.l} style={{ padding: 24, border: '1px solid var(--c-light-grey)', background: 'var(--c-white)' }}>
                <div className="label-xs" style={{ marginBottom: 8 }}>{c.l}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 600 }}>{c.v}</div>
                <div style={{ fontSize: 13, color: 'var(--c-mid-grey)', marginTop: 4 }}>{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer lang={lang} />
    </main>
  );
};

Object.assign(window, { HomePage, ShopPage, ProductPage, ComparePage, ServicePage, CompanyPage, ContactPage, CheckoutPage });
