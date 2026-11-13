import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HERO_SLIDES, MARQUEE } from '../data.js';
import { prefersReducedMotion } from '../hooks/useMotion.js';

export function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % HERO_SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero">
      <div className="hero__slides">
        {HERO_SLIDES.map((s, i) => (
          <div
            key={s.src}
            className={`hero__slide${i === idx ? ' is-active' : ''}`}
            style={{ backgroundImage: `url('${s.src}')`, backgroundPosition: s.pos }}
          />
        ))}
      </div>
      <div className="hero__shade" />
      <div className="hero__inner">
        <p className="eyebrow reveal-hero">Est. 2020 · Sutton Coldfield &amp; Tamworth</p>
        <h1 className="hero__title">
          <span className="line"><span>Artisan baking.</span></span>
          <span className="line"><span>Elevated spaces.</span></span>
          <span className="line"><span><em>Designed for experiences.</em></span></span>
        </h1>
        <p className="hero__lead reveal-hero">
          More than a bakery — Silver Tree is a collection of thoughtfully designed spaces where quality food and atmosphere come together.
        </p>
        <div className="hero__actions reveal-hero">
          <Link className="btn btn--light" to="/locations">Find your Silver Tree</Link>
          <Link className="btn btn--ghost" to="/menu">See what&apos;s baking</Link>
        </div>
      </div>
      <div className="hero__dots" aria-hidden="true">
        {HERO_SLIDES.map((s, i) => <i key={s.src} className={i === idx ? 'on' : ''} />)}
      </div>
      <a href="#about" className="hero__scroll" aria-label="Scroll down"><span /></a>
    </section>
  );
}

export function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((m, i) => (
          <React.Fragment key={i}><span>{m}</span><i>✦</i></React.Fragment>
        ))}
      </div>
    </div>
  );
}
