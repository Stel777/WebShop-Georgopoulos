// Shared React components for the Georgopoulos webshop
const { useState, useEffect, useRef, useMemo, useCallback } = React;

// ---------- Icons ----------
const Icon = ({ name, ...rest }) => {
  const paths = {
    search: <><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></>,
    cart: <><path d="M2 3h3l2.5 13a2 2 0 0 0 2 1.6h8a2 2 0 0 0 2-1.5L22 7H6"/><circle cx="10" cy="21" r="1"/><circle cx="18" cy="21" r="1"/></>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
    close: <><path d="M18 6 6 18M6 6l18 12"/></>,
    minus: <path d="M5 12h14"/>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    arrow: <><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></>,
    check: <path d="m4 12 5 5L20 6"/>,
    truck: <><path d="M3 7h11v10H3zM14 10h4l3 3v4h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></>,
    wrench: <path d="M21 7a5 5 0 0 1-7 5l-7 7-3-3 7-7a5 5 0 0 1 5-7l-2 4 2 2 4-2z"/>,
    shield: <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6z"/>,
    chat: <path d="M3 5h18v12h-9l-5 4v-4H3z"/>,
    star: <path d="M12 3l2.5 6 6.5.5-5 4.5L17.5 21 12 17.5 6.5 21l1.5-7L3 9.5 9.5 9z"/>,
    grid: <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></>,
    list: <><path d="M3 6h18M3 12h18M3 18h18"/></>,
    eye: <><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></>,
    compare: <><path d="M4 4v16M20 4v16M4 9h6m4 6h6"/><path d="m8 6 2 3-2 3M16 12l2 3-2 3"/></>,
    leaf: <path d="M5 19c8 0 14-6 14-14C11 5 5 11 5 19zM5 19v3"/>,
    bolt: <path d="M13 3 4 14h7l-1 7 9-11h-7z"/>,
  };
  return (
    <svg className="gx-icon" viewBox="0 0 24 24" {...rest}>
      {paths[name]}
    </svg>
  );
};

// ---------- Product imagery (Unsplash placeholders, deterministic per product) ----------
// Curated photo IDs grouped by category — generic stock; user will replace later.
const PHOTO_BANK = {
  espresso: [
    'photo-1572119003128-d110c07af847', // espresso machine
    'photo-1525088553748-01d6e210e00b',
    'photo-1511920170033-f8396924c348',
    'photo-1495474472287-4d71bcdd2085',
    'photo-1497935586351-b67a49e012bf',
    'photo-1523942839745-7848c839b661',
    'photo-1520695625556-c2a7bfe87a5b',
    'photo-1521017432531-fbd92d768814',
    'photo-1529892485617-25f63cd7b1e9',
    'photo-1559496417-e7f25cb247f3',
  ],
  brew: ['photo-1559925393-8be0ec4767c8', 'photo-1518057111178-44a106bad636', 'photo-1497636577773-f1231844b336'],
  grinder: [
    'photo-1606937295547-bc0f668300c1',
    'photo-1611854779393-1b2da9d400fe',
    'photo-1611854779394-3b69b0b3a8df',
    'photo-1556761175-129418cb2dfe',
    'photo-1545665225-b23b99e4d45e',
    'photo-1554118811-1e0d58224f24',
  ],
  water: ['photo-1548839140-29a749e1cf4d', 'photo-1553530666-ba11a7da3888'],
  barista: [
    'photo-1495474472287-4d71bcdd2085',
    'photo-1518057111178-44a106bad636',
    'photo-1497636577773-f1231844b336',
    'photo-1521017432531-fbd92d768814',
    'photo-1559496417-e7f25cb247f3',
  ],
  supplementary: ['photo-1578933200400-0a2bd2c46a9a', 'photo-1546549032-9571cd6b27df'],
};

const _placeholderFor = (product, idx = 0) => {
  const bank = PHOTO_BANK[product.category] || PHOTO_BANK.espresso;
  let h = 0;
  for (const c of (product.id + ':' + idx)) h = (h * 31 + c.charCodeAt(0)) | 0;
  const photoId = bank[Math.abs(h) % bank.length];
  return `https://images.unsplash.com/${photoId}?w=900&q=80&auto=format&fit=crop`;
};

const photoFor = (product, idx = 0) => {
  if (product.images && product.images.length > 0)
    return product.images[Math.min(idx, product.images.length - 1)];
  return _placeholderFor(product, idx);
};

const photosFor = (product) => {
  if (product.images && product.images.length > 0) return product.images;
  return [0, 1, 2, 3].map(i => _placeholderFor(product, i));
};

const ProductImage = ({ product, idx = 0, dark = false, label = false, useReal = true }) => {
  const [errored, setErrored] = useState(false);
  if (useReal && !errored) {
    return (
      <div className="gx-card-media" style={{ background: dark ? '#0d0d0d' : '#f5f5f5' }}>
        <img src={photoFor(product, idx)} alt={product.name}
          onError={() => setErrored(true)}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    );
  }
  return (
    <div className={`gx-machine ${dark ? 'dark' : ''}`}>
      <div className="gx-machine-stripe" />
      <SvgMachine category={product.category} dark={dark} />
      {label && <div className="gx-machine-label">→ {product.brand} {product.name} — drop final shot</div>}
    </div>
  );
};

// Abstract geometric "machine" SVG — generic by category
const SvgMachine = ({ category, dark }) => {
  const stroke = dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.65)';
  const fill = dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)';
  if (category === 'grinder') {
    return (
      <svg className="gx-machine-svg" viewBox="0 0 200 150" fill="none" stroke={stroke} strokeWidth="1.4">
        <rect x="60" y="20" width="80" height="50" fill={fill}/>
        <rect x="70" y="70" width="60" height="50" fill={fill}/>
        <rect x="80" y="120" width="40" height="14" fill={fill}/>
        <circle cx="100" cy="45" r="10"/>
        <line x1="80" y1="85" x2="120" y2="85"/>
      </svg>
    );
  }
  if (category === 'water') {
    return (
      <svg className="gx-machine-svg" viewBox="0 0 200 150" fill="none" stroke={stroke} strokeWidth="1.4">
        <path d="M100 25c14 26 26 40 26 60a26 26 0 1 1-52 0c0-20 12-34 26-60z" fill={fill}/>
      </svg>
    );
  }
  if (category === 'barista') {
    return (
      <svg className="gx-machine-svg" viewBox="0 0 200 150" fill="none" stroke={stroke} strokeWidth="1.4">
        <rect x="60" y="60" width="80" height="40" fill={fill}/>
        <line x1="100" y1="60" x2="100" y2="40"/>
        <circle cx="100" cy="35" r="8"/>
      </svg>
    );
  }
  // espresso default
  return (
    <svg className="gx-machine-svg" viewBox="0 0 200 150" fill="none" stroke={stroke} strokeWidth="1.4">
      <rect x="40" y="30" width="120" height="70" fill={fill}/>
      <rect x="50" y="100" width="100" height="20" fill={fill}/>
      <circle cx="80" cy="65" r="10"/>
      <circle cx="120" cy="65" r="10"/>
      <line x1="60" y1="100" x2="60" y2="120"/>
      <line x1="140" y1="100" x2="140" y2="120"/>
      <rect x="90" y="40" width="20" height="6"/>
    </svg>
  );
};

// ---------- Header ----------
const Header = ({ route, navigate, cartCount, openCart, lang }) => {
  const navItems = lang === 'gr' ? [
    { id: 'home', label: 'Αρχική' },
    { id: 'shop', label: 'Προϊόντα' },
    { id: 'service', label: 'Service' },
    { id: 'company', label: 'Η εταιρεία' },
  ] : [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Products' },
    { id: 'service', label: 'Service' },
    { id: 'company', label: 'Company' },
  ];

  const isActive = (id) => {
    if (id === 'home') return route.page === 'home';
    if (id.startsWith('shop:')) return route.page === 'shop' && route.category === id.split(':')[1];
    return route.page === id;
  };

  return (
    <header className="gx-header">
      <div className="gx-header-inner">
        <div className="gx-logo" onClick={() => navigate({ page: 'home' })} title="Georgopoulos">
          <img src="assets/logo-wordmark.avif" alt="Georgopoulos" className="gx-logo-wordmark" />
        </div>
        <nav className="gx-nav">
          {navItems.map(item => (
            <a key={item.id}
              className={isActive(item.id) ? 'active' : ''}
              onClick={() => {
                if (item.id === 'home') navigate({ page: 'home' });
                else if (item.id.startsWith('shop:')) navigate({ page: 'shop', category: item.id.split(':')[1] });
                else navigate({ page: item.id });
              }}>{item.label}</a>
          ))}
        </nav>
        <div className="gx-utility">
          <div className="gx-search-bar">
            <Icon name="search" />
            <input placeholder={lang === 'gr' ? 'Αναζήτηση…' : 'Search…'} />
          </div>
          <button className="gx-icon-btn" title="Account"><Icon name="user" /></button>
          <button className="gx-icon-btn" title="Cart" onClick={openCart}>
            <Icon name="cart" />
            {cartCount > 0 && <span className="gx-cart-count">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
};

// ---------- Footer ----------
const Footer = ({ lang }) => (
  <footer className="gx-footer">
    <div className="gx-container">
      <div className="gx-footer-grid">
        <div>
          <div className="gx-footer-logo">
            <img src="assets/logo-wordmark.avif" alt="Georgopoulos" className="gx-footer-logo-wordmark" />
          </div>
          <p className="gx-footer-tagline">
            {lang === 'gr'
              ? 'Από το 1970 δίπλα στον επαγγελματία της καφεστίασης. Ποιότητα. Αξιοπιστία. Καινοτομία.'
              : 'By the side of the coffee professional since 1970. Quality. Reliability. Innovation.'}
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <a className="gx-icon-btn" style={{ background: 'rgba(255,255,255,0.06)' }}>IG</a>
            <a className="gx-icon-btn" style={{ background: 'rgba(255,255,255,0.06)' }}>in</a>
          </div>
        </div>
        <div>
          <h4>{lang === 'gr' ? 'Κατάστημα' : 'Shop'}</h4>
          <ul>
            <li><a>Espresso Machines</a></li>
            <li><a>Brew & Nitro</a></li>
            <li><a>Grinders</a></li>
            <li><a>Water Filtration</a></li>
            <li><a>Barista Tools</a></li>
            <li><a>Cleaning & Care</a></li>
          </ul>
        </div>
        <div>
          <h4>{lang === 'gr' ? 'Υπηρεσίες' : 'Services'}</h4>
          <ul>
            <li><a>Installation</a></li>
            <li><a>Service Contracts</a></li>
            <li><a>Spare Parts</a></li>
            <li><a>Remote Monitoring</a></li>
            <li><a>Barista Training</a></li>
            <li><a>Lease & Finance</a></li>
          </ul>
        </div>
        <div>
          <h4>{lang === 'gr' ? 'Επικοινωνία' : 'Contact'}</h4>
          <ul>
            <li>Σουλίου 44</li>
            <li>Άγιος Δημήτριος 17342</li>
            <li>Αττική, Ελλάδα</li>
            <li style={{ marginTop: 12 }}>+30 210 9966026</li>
            <li><a>info@georgopoulos.com.gr</a></li>
            <li><a>service@georgopoulos.com.gr</a></li>
          </ul>
        </div>
      </div>
      <div className="gx-footer-bottom">
        <span>© 2026 Ν. Γεωργόπουλος ΙΚΕ — Επίσημος Αντιπρόσωπος La Cimbali · Slayer · Fiorenzato · Brita</span>
        <span>
          <a>Privacy</a>
          <a>Terms</a>
          <a>Cookies</a>
        </span>
      </div>
    </div>
  </footer>
);

// ---------- Product Card ----------
const ProductCard = ({ product, navigate, density = 'comfortable', useReal = true }) => {
  const fmtPrice = (n) => n == null ? null : '€ ' + n.toLocaleString('en-US');
  return (
    <div className="gx-product-card" onClick={() => navigate({ page: 'product', id: product.id })}>
      <div style={{ position: 'relative' }}>
        {product.badge && <div className="gx-card-badge">{product.badge}</div>}
        <ProductImage product={product} useReal={useReal} />
        <div className="gx-card-quick">{density === 'dense' ? '+' : 'View product →'}</div>
      </div>
      <div className="gx-card-body" style={{ padding: density === 'dense' ? '14px 4px 4px' : '20px 4px 4px' }}>
        <div className="gx-card-brand">{product.brand}{product.country ? ` · ${product.country}` : ''}</div>
        <div className="gx-card-name">{product.name}</div>
        {density !== 'dense' && <div className="gx-card-tagline">{product.tagline}</div>}
        <div className="gx-card-foot">
          <div className="gx-card-price">
            {product.price != null
              ? <>{fmtPrice(product.price)} <small>net</small></>
              : <small style={{ textTransform: 'uppercase', letterSpacing: '0.08em' }}>Τιμή κατόπιν αιτήματος</small>}
          </div>
          <div className="gx-card-cta">View →</div>
        </div>
      </div>
    </div>
  );
};

// ---------- Cart Drawer ----------
const CartDrawer = ({ open, onClose, items, setItems, navigate, lang }) => {
  const total = items.reduce((s, i) => s + (i.price || 0) * i.qty, 0);
  const fmt = (n) => n == null ? '—' : '€ ' + n.toLocaleString('en-US');

  const updateQty = (id, delta) => {
    setItems(items.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i));
  };
  const remove = (id) => setItems(items.filter(i => i.id !== id));

  return (
    <>
      <div className={`gx-cart-overlay ${open ? 'open' : ''}`} onClick={onClose} />
      <aside className={`gx-cart-drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="gx-cart-head">
          <h3>{lang === 'gr' ? 'Καλάθι' : 'Cart'} ({items.reduce((s, i) => s + i.qty, 0)})</h3>
          <button className="gx-icon-btn" onClick={onClose}><Icon name="close" /></button>
        </div>
        <div className="gx-cart-body">
          {items.length === 0 ? (
            <div className="gx-cart-empty">
              <div className="label-xs">{lang === 'gr' ? 'ΑΔΕΙΟ ΚΑΛΑΘΙ' : 'EMPTY CART'}</div>
              <p>{lang === 'gr' ? 'Προσθέστε ένα προϊόν για να ξεκινήσετε.' : 'Add a product to get started.'}</p>
            </div>
          ) : items.map(item => (
            <div key={item.id} className="gx-cart-item">
              <div className="gx-cart-item-img">
                <img src={photoFor(item, 0)} alt={item.name} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
              </div>
              <div>
                <div className="gx-cart-item-brand">{item.brand}</div>
                <div className="gx-cart-item-name">{item.name}</div>
                <div className="gx-cart-item-qty">
                  <button onClick={() => updateQty(item.id, -1)}>−</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, +1)}>+</button>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="gx-cart-item-price">{fmt(item.price * item.qty)}</div>
                <div className="gx-cart-item-remove" onClick={() => remove(item.id)}>
                  {lang === 'gr' ? 'Αφαίρεση' : 'Remove'}
                </div>
              </div>
            </div>
          ))}
        </div>
        {items.length > 0 && (
          <div className="gx-cart-foot">
            <div className="gx-cart-totals"><span>{lang === 'gr' ? 'Υποσύνολο' : 'Subtotal'}</span><span>{fmt(total)}</span></div>
            <div className="gx-cart-totals"><span>{lang === 'gr' ? 'Παράδοση' : 'Delivery'}</span><span>{lang === 'gr' ? 'Υπολογίζεται' : 'Calculated at checkout'}</span></div>
            <div className="gx-cart-totals grand"><span>{lang === 'gr' ? 'Σύνολο (καθαρό)' : 'Total (net)'}</span><span className="val">{fmt(total)}</span></div>
            <button className="btn btn-primary btn-arrow" onClick={() => { onClose(); navigate({ page: 'checkout' }); }}>
              {lang === 'gr' ? 'Ολοκλήρωση παραγγελίας' : 'Proceed to checkout'}
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

// ---------- Toast ----------
const Toast = ({ message, show }) => (
  <div className={`gx-toast ${show ? 'show' : ''}`}>{message}</div>
);

Object.assign(window, { Icon, Header, Footer, ProductCard, CartDrawer, Toast, ProductImage, photoFor, photosFor, SvgMachine });
