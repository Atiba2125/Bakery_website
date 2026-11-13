import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';
import { SectionHead, ParallaxImg, Stat, LocationCard, EventCard, ext } from './Ui.jsx';
import { useParallax } from '../hooks/useMotion.js';
import { STATS, LOCATIONS, BAKES, PLANS, EVENTS, JOBS, CONTACT, GIFT_CARD } from '../data.js';

/* Sections used on the Home page. Each links through to its full page. */

export function About() {
  return (
    <section className="section about" id="about">
      <div className="wrap about__grid">
        <div className="about__media">
          <ParallaxImg
            className="about__img" factor={0.08}
            src="/assets/img9696-web.jpg" alt="A Silver Tree baker at work, tray of dough in the background"
          />
          <Reveal className="about__badge" delay={200}>
            <img src="/assets/logo-circle.jpg" alt="Silver Tree Bakery seal" />
          </Reveal>
        </div>
        <div className="about__text">
          <Reveal as="p" className="eyebrow">Our story</Reveal>
          <Reveal as="h2">Rooted in quality,<br /><em>grown with care.</em></Reveal>
          <Reveal as="p">
            Silver Tree began in 2020 at Water Orton Lane, Minworth — built on a commitment to quality, consistency and doing things properly. From early mornings to daily production, that bakery is still the working heart of everything we do.
          </Reveal>
          <Reveal as="p">
            Today our family of spaces stretches from a restored countryside barn to a high-street bakery with a coworking club upstairs. Everything is baked on site, from sourdough and laminated pastries to toasties, cakes and seasonal specials — and dogs are always welcome outside.
          </Reveal>
          <div className="stats">
            {STATS.map((s, i) => <Stat key={s.label} {...s} delay={i * 100} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

export function LocationsPreview() {
  return (
    <section className="section locations" id="locations">
      <div className="wrap">
        <SectionHead eyebrow="Our spaces">Three places to <em>pull up a chair</em></SectionHead>
        <div className="cards">
          {LOCATIONS.map((l, i) => <LocationCard key={l.slug} loc={l} delay={i * 150} />)}
        </div>
        <Reveal className="coming">
          <img src="/assets/logo-green.png" alt="" />
          <div>
            <h3>Coming soon: Jewellery Quarter</h3>
            <p>Silver Tree is growing — our newest bakery is on its way to Birmingham&apos;s Jewellery Quarter.</p>
          </div>
          <Link to="/careers" className="btn btn--dark">Join the team</Link>
        </Reveal>
      </div>
    </section>
  );
}

export function Bakes() {
  return (
    <section className="section bakes" id="bakes">
      <div className="wrap">
        <SectionHead eyebrow="Baked on site, every day">Crowd-pleasers &amp; <em>quiet favourites</em></SectionHead>
        <div className="bake-grid">
          {BAKES.map(([title, text], i) => (
            <Reveal key={title} className="bake" delay={i * 80}>
              <span className="bake__n">{String(i + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="center"><Link className="btn btn--dark" to="/menu">See the full menu</Link></Reveal>
      </div>
    </section>
  );
}

export function Band() {
  const bg = useRef(null);
  useParallax(bg, 0.18, { scale: 1 });
  return (
    <section className="band">
      <div className="band__bg" ref={bg} style={{ backgroundImage: "url('/assets/img8712-web.jpg')" }} />
      <Reveal className="band__inner">
        <img src="/assets/logo-white.png" alt="" />
        <p>“Quality food, all cooked and baked on site, friendly staff and dog friendly.”</p>
        <span>— Google review · 4.7 ★ from 728 reviews</span>
      </Reveal>
    </section>
  );
}

export function ArbourTeaser() {
  return (
    <section className="section arbour">
      <div className="wrap">
        <div className="arbour__top" style={{ marginBottom: 0 }}>
          <div>
            <Reveal as="p" className="eyebrow eyebrow--light">Above Silver Tree Gracechurch</Reveal>
            <Reveal as="h2">The Arbour Club</Reveal>
            <Reveal as="p" className="arbour__def"><em>“Arbour”</em> — a shady garden retreat formed by trees, evoking a restful, cosy and organic aesthetic.</Reveal>
            <Reveal as="p">Exclusive coworking and event space in the heart of Sutton Coldfield — memberships from {PLANS[2].price} a month, plus meeting rooms and catering from the bakery downstairs.</Reveal>
            <Reveal className="arbour__ctas">
              <Link className="btn btn--light" to="/arbour-club">Explore the club</Link>
              <Link className="btn btn--ghost" to="/arbour-club/memberships">Memberships</Link>
            </Reveal>
          </div>
          <ParallaxImg
            className="arbour__img" factor={0.06}
            src="/assets/arbour-5.jpg" alt="Arbour Club long timber table with crystal chandeliers"
          />
        </div>
      </div>
    </section>
  );
}

export function EventsTeaser() {
  return (
    <section className="section events-teaser">
      <div className="wrap">
        <SectionHead eyebrow="Silver Tree After Hours">Evenings <em>worth booking</em></SectionHead>
        <div className="events">
          {EVENTS.slice(0, 3).map((ev, i) => <EventCard key={ev.slug} ev={ev} delay={i * 120} />)}
        </div>
        <Reveal className="center"><Link className="btn btn--dark" to="/events">All events</Link></Reveal>
      </div>
    </section>
  );
}

export function Pathways() {
  const tiles = [
    { title: 'Wholesale', text: 'Supply your café, restaurant or hotel with sourdough, viennoiserie, savoury and sweet bakes made fresh at Water Orton Lane.', to: '/wholesale-enquiries', cta: 'Wholesale enquiry' },
    { title: 'Community', text: 'We love supporting local causes. Tell us about your charity, school or community event and we’ll see how we can help.', to: '/community-requests', cta: 'Make a request' },
    { title: 'Gift cards', text: 'Give someone the gift of fresh pastries, great coffee and a seat in one of our spaces.', href: GIFT_CARD, cta: 'Buy a gift card' },
  ];
  return (
    <section className="section catering">
      <div className="wrap">
        <SectionHead eyebrow="Beyond the counter">Wholesale, community &amp; <em>gifts</em></SectionHead>
        <div className="trio">
          {tiles.map((t, i) => (
            <Reveal key={t.title} className="tile" delay={i * 120}>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
              {t.to ? <Link className="link" to={t.to}>{t.cta} <span>→</span></Link>
                : <a className="link" href={t.href} {...ext}>{t.cta} <span>→</span></a>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CareersTeaser() {
  return (
    <section className="section careers">
      <div className="wrap careers__grid">
        <div>
          <Reveal as="p" className="eyebrow eyebrow--light">We&apos;re growing</Reveal>
          <Reveal as="h2">Come and <em>work with us</em></Reveal>
          <Reveal as="p">
            We&apos;re recruiting across all our locations — skilled bakers, pastry laminators, front-of-house team members and delivery drivers. No evening shifts, two team outings a year, and room to grow as we expand.
          </Reveal>
          <Reveal as="div"><Link className="btn btn--light" to="/careers">See open roles</Link></Reveal>
        </div>
        <Reveal as="ul" className="jobs">
          {JOBS.slice(0, 3).map((j) => (
            <li key={j.id}><b>{j.title}</b><span>{j.where} · {j.type}</span></li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function Visit() {
  return (
    <section className="section visit" id="visit">
      <div className="wrap visit__grid">
        <div>
          <Reveal as="p" className="eyebrow">Say hello</Reveal>
          <Reveal as="h2">Visit us, <em>or get in touch</em></Reveal>
          <Reveal as="ul" className="contact">
            {CONTACT.map(([label, text, href, external]) => (
              <li key={label}><span>{label}</span><a href={href} {...(external ? ext : {})}>{text}</a></li>
            ))}
          </Reveal>
        </div>
        <Reveal className="hours">
          <h3>Thorpe Estate hours</h3>
          <dl>
            <div><dt>Monday – Saturday</dt><dd>08:30 – 14:30</dd></div>
            <div><dt>Sunday</dt><dd>09:00 – 14:00</dd></div>
          </dl>
          <p className="fine">Hours vary by site and season. See each <Link to="/locations">location page</Link> or check Google before you travel.</p>
        </Reveal>
      </div>
    </section>
  );
}
