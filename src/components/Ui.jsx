import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';
import { useCountUp, useInView, useParallax, prefersReducedMotion } from '../hooks/useMotion.js';

export const ext = { target: '_blank', rel: 'noopener' };

export function SectionHead({ eyebrow, children, light }) {
  return (
    <div className="section__head">
      <Reveal as="p" className={`eyebrow${light ? ' eyebrow--light' : ''}`}>{eyebrow}</Reveal>
      <Reveal as="h2">{children}</Reveal>
    </div>
  );
}

export function ParallaxImg({ className = '', factor, children, delay, ...imgProps }) {
  const imgRef = useRef(null);
  useParallax(imgRef, factor);
  return (
    <Reveal className={className} delay={delay}>
      <img ref={imgRef} loading="lazy" {...imgProps} />
      {children}
    </Reveal>
  );
}

export function Stat({ end, dec, nocomma, label, delay }) {
  const [ref, seen] = useInView();
  const v = useCountUp(end, seen, { dec });
  const text = nocomma || dec ? v : Number(v).toLocaleString('en-GB');
  return (
    <div ref={ref} className={`reveal stat${seen ? ' in' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      <b>{text}</b>
      <span>{label}</span>
    </div>
  );
}

/** A card that fades in and tilts toward the pointer. */
export function Tilt({ className = '', delay, children }) {
  const ref = useRef(null);
  const [vref, seen] = useInView();
  const canTilt = typeof window !== 'undefined' && !prefersReducedMotion() && window.matchMedia('(hover:hover)').matches;
  const move = (e) => {
    if (!canTilt || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-6px)`;
  };
  const leave = () => { if (ref.current) ref.current.style.transform = ''; };
  return (
    <article
      ref={(n) => { ref.current = n; vref.current = n; }}
      className={`card reveal${seen ? ' in' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      onMouseMove={move}
      onMouseLeave={leave}
    >
      {children}
    </article>
  );
}

export function LocationCard({ loc, delay }) {
  return (
    <Tilt delay={delay}>
      <Link to={`/locations/${loc.slug}`} className="card__img"><img src={loc.img} alt={loc.alt} loading="lazy" /></Link>
      <div className="card__body">
        <span className="card__tag">{loc.tag}</span>
        <h3><Link to={`/locations/${loc.slug}`}>{loc.name}</Link></h3>
        <p className="card__sub">{loc.sub}</p>
        <ul className="ticks">{loc.points.slice(0, 3).map((p) => <li key={p}>{p}</li>)}</ul>
        <address>{loc.address[0]}<br />{loc.address[1]}</address>
        <Link className="link" to={`/locations/${loc.slug}`}>Explore location <span>→</span></Link>
      </div>
    </Tilt>
  );
}

export function EventCard({ ev, delay }) {
  return (
    <Reveal className="event" delay={delay}>
      <Link to={`/events/${ev.slug}`} className="event__img">
        <img src={ev.img} alt="" loading="lazy" />
        {ev.status && <span className="event__badge">{ev.status}</span>}
      </Link>
      <div className="event__body">
        <p className="event__date">{ev.date}{ev.time ? ` · ${ev.time}` : ''}</p>
        <h3><Link to={`/events/${ev.slug}`}>{ev.title.replace('Silver Tree After Hours — ', '')}</Link></h3>
        <p className="event__short">{ev.short}</p>
        <p className="event__meta">{ev.place}</p>
        <div className="event__foot">
          <span className="event__price">{ev.price}<small> {ev.priceNote}</small></span>
          <Link className="link" to={`/events/${ev.slug}`}>Details <span>→</span></Link>
        </div>
      </div>
    </Reveal>
  );
}

export function CtaBand({ title, text, children }) {
  return (
    <section className="ctaband">
      <Reveal className="wrap ctaband__inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="ctaband__actions">{children}</div>
      </Reveal>
    </section>
  );
}
