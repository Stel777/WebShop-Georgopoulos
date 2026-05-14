// App shell: routing, cart state, tweaks
const { useState: useStateA, useEffect: useEffectA, useMemo: useMemoA } = React;

function App() {
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "palette": "monoEspresso",
    "typography": "oswald",
    "heroVariant": "imageRight",
    "density": "comfortable",
    "darkMode": false,
    "lang": "gr",
    "heroVideoUrl": "assets/clip_for_site.mp4"
  }/*EDITMODE-END*/;

  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);

  // Hero video — session-only blob URL from file picker (not persisted; for persistence, drop file in /assets and paste path)
  const [heroVideoBlobUrl, setHeroVideoBlobUrl] = useStateA(null);
  const effectiveHeroVideo = heroVideoBlobUrl || t.heroVideoUrl || '';
  const onHeroVideoFile = (file) => {
    if (heroVideoBlobUrl) URL.revokeObjectURL(heroVideoBlobUrl);
    setHeroVideoBlobUrl(file ? URL.createObjectURL(file) : null);
  };

  // Routing
  const [route, setRoute] = useStateA({ page: 'home' });
  const navigate = (next) => {
    setRoute(next);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Cart
  const [cart, setCart] = useStateA([]);
  const [cartOpen, setCartOpen] = useStateA(false);
  const [toast, setToast] = useStateA({ show: false, msg: '' });

  const addToCart = (product, qty = 1) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) return prev.map(p => p.id === product.id ? { ...p, qty: p.qty + qty } : p);
      return [...prev, { ...product, qty }];
    });
    setToast({ show: true, msg: (t.lang === 'gr' ? 'Προστέθηκε στο καλάθι' : 'Added to cart') + ' — ' + product.name });
    setTimeout(() => setToast({ show: false, msg: '' }), 2200);
    setCartOpen(true);
  };

  // Compare
  const [compareIds, setCompareIds] = useStateA([]);
  const toggleCompare = (id) => {
    setCompareIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : (prev.length >= 3 ? prev : [...prev, id]));
  };

  // Apply palette + typography tweaks via CSS vars on root
  useEffectA(() => {
    const root = document.documentElement;
    const palettes = {
      monoEspresso: { '--c-action': '#111111', '--c-espresso': '#3B1F0A', '--c-crema': '#F0E4D0', '--c-warm-white': '#FAFAF8' },
      stainlessCool: { '--c-action': '#0e1418', '--c-espresso': '#2a3942', '--c-crema': '#cfd8dc', '--c-warm-white': '#f4f6f7' },
      walnutWarm: { '--c-action': '#1a0f08', '--c-espresso': '#5b3920', '--c-crema': '#e8c896', '--c-warm-white': '#f7efe2' },
      ristretto: { '--c-action': '#1a0d0d', '--c-espresso': '#6e1a1a', '--c-crema': '#f0d8b0', '--c-warm-white': '#faf5ee' },
    };
    const typo = {
      oswald: { '--font-display': "'Oswald', 'Barlow Condensed', sans-serif", '--font-body': "'Inter', 'Helvetica Neue', sans-serif" },
      bebas: { '--font-display': "'Bebas Neue', 'Oswald', sans-serif", '--font-body': "'Inter', 'Helvetica Neue', sans-serif" },
      barlow: { '--font-display': "'Barlow Condensed', 'Oswald', sans-serif", '--font-body': "'IBM Plex Sans', 'Inter', sans-serif" },
      anton: { '--font-display': "'Anton', 'Oswald', sans-serif", '--font-body': "'DM Sans', 'Inter', sans-serif" },
    };
    const apply = (obj) => Object.entries(obj).forEach(([k, v]) => root.style.setProperty(k, v));
    apply(palettes[t.palette] || palettes.monoEspresso);
    apply(typo[t.typography] || typo.oswald);

    // Dark mode for the body bg
    if (t.darkMode) {
      root.style.setProperty('--c-white', '#0a0a0a');
      root.style.setProperty('--c-off-white', '#141414');
      root.style.setProperty('--c-warm-white', '#171411');
      root.style.setProperty('--c-charcoal', '#e4e4e4');
      root.style.setProperty('--c-light-grey', '#262626');
      root.style.setProperty('--c-mid-grey', '#888888');
    } else {
      root.style.setProperty('--c-white', '#FFFFFF');
      root.style.setProperty('--c-off-white', '#F5F5F5');
      root.style.setProperty('--c-warm-white', '#FAFAF8');
      root.style.setProperty('--c-charcoal', '#1A1A1A');
      root.style.setProperty('--c-light-grey', '#CCCCCC');
      root.style.setProperty('--c-mid-grey', '#888888');
    }
  }, [t.palette, t.typography, t.darkMode]);

  // Render correct page
  let page;
  if (route.page === 'home') page = <HomePage navigate={navigate} addToCart={addToCart} lang={t.lang} heroVariant={t.heroVariant} heroVideo={effectiveHeroVideo} />;
  else if (route.page === 'shop') page = <ShopPage navigate={navigate} addToCart={addToCart} lang={t.lang} route={route} density={t.density} compareIds={compareIds} toggleCompare={toggleCompare} />;
  else if (route.page === 'product') page = <ProductPage id={route.id} navigate={navigate} addToCart={addToCart} lang={t.lang} />;
  else if (route.page === 'compare') page = <ComparePage ids={compareIds} navigate={navigate} addToCart={addToCart} lang={t.lang} toggleCompare={toggleCompare} />;
  else if (route.page === 'service') page = <ServicePage navigate={navigate} lang={t.lang} />;
  else if (route.page === 'contact') page = <window.ContactPage navigate={navigate} lang={t.lang} route={route} />;
  else if (route.page === 'company') page = <CompanyPage navigate={navigate} lang={t.lang} />;
  else if (route.page === 'checkout') page = <CheckoutPage navigate={navigate} items={cart} lang={t.lang} />;
  else page = <HomePage navigate={navigate} addToCart={addToCart} lang={t.lang} heroVariant={t.heroVariant} heroVideo={effectiveHeroVideo} />;

  return (
    <div data-screen-label={'01 ' + (route.page || 'home')}>
      <Header
        route={route}
        navigate={navigate}
        cartCount={cart.reduce((s, i) => s + i.qty, 0)}
        openCart={() => setCartOpen(true)}
        lang={t.lang} />
      {page}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} items={cart} setItems={setCart} navigate={navigate} lang={t.lang} />
      <Toast show={toast.show} message={toast.msg} />

      {/* Standalone tweaks trigger */}
      <button
        onClick={() => window.postMessage({ type: '__activate_edit_mode' }, '*')}
        style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 2147483644,
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '10px 18px',
          background: '#fff', color: '#111',
          border: '1.5px solid #111',
          boxShadow: '0 4px 20px rgba(0,0,0,0.18)',
          fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 600,
          textTransform: 'uppercase', letterSpacing: '0.12em',
          cursor: 'pointer',
        }}
      >⚙ Tweaks</button>

      <window.TweaksPanel title="Tweaks">
        <window.TweakSection title={t.lang === 'gr' ? 'Γλώσσα' : 'Language'}>
          <window.TweakRadio label={t.lang === 'gr' ? 'Γλώσσα' : 'Language'} value={t.lang}
            onChange={v => setTweak('lang', v)}
            options={[{ value: 'gr', label: 'EL' }, { value: 'en', label: 'EN' }]} />
        </window.TweakSection>

        <window.TweakSection title={t.lang === 'gr' ? 'Παλέτα' : 'Palette'}>
          <window.TweakColor label={t.lang === 'gr' ? 'Χρώμα παλέτας' : 'Color palette'} value={t.palette}
            onChange={v => setTweak('palette', v)}
            options={[
              { value: 'monoEspresso', label: 'Mono Espresso', colors: ['#111111', '#3B1F0A', '#F0E4D0'] },
              { value: 'stainlessCool', label: 'Stainless Cool', colors: ['#0e1418', '#2a3942', '#cfd8dc'] },
              { value: 'walnutWarm', label: 'Walnut Warm', colors: ['#1a0f08', '#5b3920', '#e8c896'] },
              { value: 'ristretto', label: 'Ristretto', colors: ['#1a0d0d', '#6e1a1a', '#f0d8b0'] },
            ]} />
          <window.TweakToggle label={t.lang === 'gr' ? 'Σκούρο φόντο' : 'Dark mode'} value={t.darkMode}
            onChange={v => setTweak('darkMode', v)} />
        </window.TweakSection>

        <window.TweakSection title={t.lang === 'gr' ? 'Τυπογραφία' : 'Typography'}>
          <window.TweakSelect label={t.lang === 'gr' ? 'Display font' : 'Display font'} value={t.typography}
            onChange={v => setTweak('typography', v)}
            options={[
              { value: 'oswald', label: 'Oswald + Inter' },
              { value: 'bebas', label: 'Bebas + Inter' },
              { value: 'barlow', label: 'Barlow + IBM Plex' },
              { value: 'anton', label: 'Anton + DM Sans' },
            ]} />
        </window.TweakSection>

        <window.TweakSection title={t.lang === 'gr' ? 'Διάταξη' : 'Layout'}>
          <window.TweakRadio label="Hero" value={t.heroVariant}
            onChange={v => setTweak('heroVariant', v)}
            options={[
              { value: 'imageRight', label: 'Split' },
              { value: 'centered', label: 'Centered' },
              { value: 'editorial', label: 'Editorial' },
            ]} />
          <window.TweakRadio label={t.lang === 'gr' ? 'Πυκνότητα κάρτας' : 'Card density'} value={t.density}
            onChange={v => setTweak('density', v)}
            options={[
              { value: 'comfortable', label: 'Comfortable' },
              { value: 'dense', label: 'Dense' },
            ]} />
        </window.TweakSection>

        <window.TweakSection title={t.lang === 'gr' ? 'Hero βίντεο' : 'Hero video'}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <label style={{ fontSize: 11, opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {t.lang === 'gr' ? 'Ανέβασε mp4 (προεπισκόπηση)' : 'Upload mp4 (session preview)'}
            </label>
            <input type="file" accept="video/mp4,video/webm,video/quicktime"
              onChange={(e) => onHeroVideoFile(e.target.files && e.target.files[0])}
              style={{ fontSize: 12, color: 'inherit' }} />
            <window.TweakText label={t.lang === 'gr' ? 'Ή URL/διαδρομή (μόνιμο)' : 'Or URL / path (persistent)'}
              value={t.heroVideoUrl}
              onChange={v => setTweak('heroVideoUrl', v)}
              placeholder="assets/hero.mp4" />
            <window.TweakButton secondary onClick={() => { onHeroVideoFile(null); setTweak('heroVideoUrl', ''); }}
              label={t.lang === 'gr' ? 'Αφαίρεση βίντεο' : 'Clear video'} />
            <div style={{ fontSize: 10, opacity: 0.55, lineHeight: 1.5, marginTop: 4 }}>
              {t.lang === 'gr'
                ? 'Για μόνιμη χρήση, τοποθέτησε το mp4 στον φάκελο assets/ και βάλε τη διαδρομή π.χ. assets/hero.mp4'
                : 'For persistence, drop the mp4 into the assets/ folder and reference it (e.g. assets/hero.mp4).'}
            </div>
          </div>
        </window.TweakSection>
      </window.TweaksPanel>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
