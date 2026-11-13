import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV, GIFT_CARD } from '../data.js';

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close the mobile menu after every navigation
  useEffect(() => { setOpen(false); setSub(false); }, [pathname]);

  return (
    <header className={`nav${solid ? ' is-solid' : ''}`}>
      <Link to="/" className="nav__brand" aria-label="Silver Tree Bakery home">
        <img src="/assets/logo-white.png" alt="Silver Tree Bakery — Est. 2020" />
      </Link>
      <nav className={`nav__links${open ? ' open' : ''}`} aria-label="Main">
        {NAV.map((item) =>
          item.children ? (
            <div key={item.to} className={`nav__drop${sub ? ' is-open' : ''}`}>
              <NavLink to={item.to} end>{item.label}</NavLink>
              <button className="nav__caret" aria-label="Show locations" onClick={() => setSub((s) => !s)}>▾</button>
              <div className="nav__menu">
                {item.children.map((c) => <NavLink key={c.to} to={c.to}>{c.label}</NavLink>)}
              </div>
            </div>
          ) : (
            <NavLink key={item.to} to={item.to} end={item.to === '/'}>{item.label}</NavLink>
          ),
        )}
        <a href={GIFT_CARD} className="nav__cta" target="_blank" rel="noopener">Gift card</a>
      </nav>
      <button className="nav__toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <span /><span />
      </button>
    </header>
  );
}
