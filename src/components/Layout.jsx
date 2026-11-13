import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Leaves } from './Effects.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

/** Resets scroll on navigation (or jumps to a #hash section if present). */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function Layout() {
  const { pathname } = useLocation();

  // No loader: start the hero text animations straight away.
  useEffect(() => {
    document.body.classList.remove('is-loading');
    document.body.classList.add('loaded');
  }, []);

  // Keep document title in sync per page (pages set data-title on their wrapper).
  useEffect(() => {
    const el = document.querySelector('[data-title]');
    document.title = el ? `${el.dataset.title} | Silver Tree Bakery` : 'Silver Tree Bakery | Artisan Baking in Sutton Coldfield';
  }, [pathname]);

  return (
    <>
      <Leaves />
      <ScrollManager />
      <Header />
      <main id="top" key={pathname} className="page">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
