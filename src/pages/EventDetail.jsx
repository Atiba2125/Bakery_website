import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import { EventCard, SectionHead, ext } from '../components/Ui.jsx';
import { EVENTS } from '../data.js';

export default function EventDetail() {
  const { slug } = useParams();
  const ev = EVENTS.find((e) => e.slug === slug);
  if (!ev) return <Navigate to="/events" replace />;
  const more = EVENTS.filter((e) => e.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={ev.title} eyebrow={`${ev.date}${ev.time ? ` · ${ev.time}` : ''}`} img={ev.img} pos="50% 40%"
        crumbs={[{ label: 'Events', to: '/events' }, { label: ev.date }]}
      />
      <section className="section">
        <div className="wrap split split--event">
          <div>
            <Reveal as="h2">About the evening</Reveal>
            {ev.body.map((p) => <Reveal as="p" key={p} className="lead-p">{p}</Reveal>)}
            <Reveal as="h3" className="mini">Terms &amp; conditions</Reveal>
            <Reveal as="ul" className="terms">
              {ev.terms.map((t) => <li key={t}>{t}</li>)}
            </Reveal>
          </div>
          <Reveal as="aside" className="booking">
            <img src={ev.img} alt="" />
            <div className="booking__body">
              <p className="booking__price">{ev.price}<small> {ev.priceNote}</small></p>
              <dl>
                <div><dt>Date</dt><dd>{ev.date}</dd></div>
                {ev.time && <div><dt>Time</dt><dd>{ev.time}</dd></div>}
                <div><dt>Where</dt><dd>{ev.place}</dd></div>
              </dl>
              {ev.status && <p className="booking__status">{ev.status}</p>}
              <a className="btn btn--dark" href={ev.book} {...ext}>{ev.status ? 'View booking page' : 'Book now'}</a>
              <p className="fine">Opens the Silver Tree Bakery booking page.</p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section locations">
        <div className="wrap">
          <SectionHead eyebrow="More after hours">Other <em>events</em></SectionHead>
          <div className="events">
            {more.map((e, i) => <EventCard key={e.slug} ev={e} delay={i * 120} />)}
          </div>
          <Reveal className="center"><Link className="btn btn--dark" to="/events">All events</Link></Reveal>
        </div>
      </section>
    </>
  );
}
