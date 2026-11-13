import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import { SectionHead, ParallaxImg, ext, CtaBand } from '../components/Ui.jsx';
import { LOCATIONS, PHONE, EMAIL } from '../data.js';

export default function LocationDetail() {
  const { slug } = useParams();
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) return <Navigate to="/locations" replace />;
  const others = LOCATIONS.filter((l) => l.slug !== slug);

  return (
    <>
      <PageHero
        title={loc.name} eyebrow={loc.tag} lead={loc.sub} img={loc.img}
        crumbs={[{ label: 'Locations', to: '/locations' }, { label: loc.name }]}
      />

      <section className="section">
        <div className="wrap split">
          <div>
            <Reveal as="h2">{loc.heading}</Reveal>
            {loc.story.map((p) => <Reveal as="p" key={p} className="lead-p">{p}</Reveal>)}
            <Reveal as="h3" className="mini">What to expect</Reveal>
            <Reveal as="ul" className="ticks ticks--lg">
              {loc.points.map((p) => <li key={p}>{p}</li>)}
            </Reveal>
          </div>
          <ParallaxImg className="split__img" factor={0.06} src={loc.gallery[0]} alt={loc.alt} />
        </div>
      </section>

      <section className="section info">
        <div className="wrap info__grid">
          <Reveal className="info__card">
            <h3>Find us</h3>
            <address>{loc.address[0]}<br />{loc.address[1]}</address>
            <p><a href="tel:+441217486455">{PHONE}</a><br /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
            <a className="btn btn--dark" href={loc.map} {...ext}>Get directions</a>
          </Reveal>
          <Reveal className="info__card" delay={120}>
            <h3>Opening hours</h3>
            {loc.hours ? (
              <dl>{loc.hours.map(([d, t]) => <div key={d}><dt>{d}</dt><dd>{t}</dd></div>)}</dl>
            ) : null}
            {loc.hoursNote && <p className="fine">{loc.hoursNote}</p>}
          </Reveal>
          {loc.extra && (
            <Reveal className="info__card info__card--accent" delay={240}>
              <h3>{loc.extra.title}</h3>
              <p>{loc.extra.text}</p>
              {loc.extra.to
                ? <Link className="btn btn--light" to={loc.extra.to}>{loc.extra.cta}</Link>
                : <a className="btn btn--light" href={loc.extra.href}>{loc.extra.cta}</a>}
            </Reveal>
          )}
        </div>
      </section>

      <section className="section gallery-sec">
        <div className="wrap">
          <SectionHead eyebrow="Inside & out">A look around</SectionHead>
          <div className="gallery">
            {loc.gallery.map((g, i) => (
              <Reveal key={g} className="gallery__item" delay={i * 120}><img src={g} alt="" loading="lazy" /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section locations">
        <div className="wrap">
          <SectionHead eyebrow="More from Silver Tree">Our other <em>spaces</em></SectionHead>
          <div className="others">
            {others.map((o, i) => (
              <Reveal key={o.slug} className="other" delay={i * 120}>
                <Link to={`/locations/${o.slug}`}>
                  <img src={o.img} alt={o.alt} loading="lazy" />
                  <div><span className="card__tag">{o.tag}</span><h3>{o.name}</h3><span className="link">Explore <span>→</span></span></div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Join the Silver Tree team" text="We’re recruiting across all our locations.">
        <Link className="btn btn--light" to="/careers">See open roles</Link>
      </CtaBand>
    </>
  );
}
