import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_LINKS, LOCATIONS, PHONE, EMAIL } from '../data.js';

export default function Footer() {
  return (
    <footer className="footer">
      <img src="/assets/logo-white.png" alt="Silver Tree Bakery — Est. 2020" className="footer__logo" />
      <p>Artisan baking · Elevated spaces · Designed for experiences</p>
      <div className="footer__cols">
        <div>
          <h4>Visit</h4>
          {LOCATIONS.map((l) => <Link key={l.slug} to={`/locations/${l.slug}`}>{l.name}</Link>)}
        </div>
        <div>
          <h4>Explore</h4>
          {FOOTER_LINKS.map((l) =>
            l.to ? <Link key={l.label} to={l.to}>{l.label}</Link>
              : <a key={l.label} href={l.href} target="_blank" rel="noopener">{l.label}</a>,
          )}
        </div>
        <div>
          <h4>Say hello</h4>
          <a href="tel:+441217486455">{PHONE}</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href="https://www.instagram.com/silver_tree_catering" target="_blank" rel="noopener">Instagram</a>
          <a href="https://www.facebook.com/silvertreecatering" target="_blank" rel="noopener">Facebook</a>
        </div>
      </div>
      <small>© {new Date().getFullYear()} Silver Tree Bakery. Concept redesign — imagery and content from the original Silver Tree Bakery website.</small>
    </footer>
  );
}
