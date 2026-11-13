import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import { EventCard, CtaBand } from '../components/Ui.jsx';
import { EVENTS } from '../data.js';

export default function Events() {
  return (
    <>
      <PageHero
        title="Silver Tree After Hours" eyebrow="Events"
        lead="Wine and cheese evenings, festive workshops and more — when the bakery closes, the fun begins."
        img="/assets/event-afterhours.jpg" pos="50% 45%" crumbs={[{ label: 'Events' }]}
      />
      <section className="section">
        <div className="wrap">
          <div className="events events--grid">
            {EVENTS.map((ev, i) => <EventCard key={ev.slug} ev={ev} delay={(i % 3) * 120} />)}
          </div>
          <Reveal as="p" className="fine center">Booking and payment are handled securely on the Silver Tree Bakery shop. Arbour Club members receive 10% off purchases at events.</Reveal>
        </div>
      </section>
      <CtaBand title="Hosting your own event?" text="Hire an Arbour Club meeting room with catering from Silver Tree.">
        <Link className="btn btn--light" to="/arbour-club">Arbour Club</Link>
      </CtaBand>
    </>
  );
}
