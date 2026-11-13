import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import { LocationCard, CtaBand } from '../components/Ui.jsx';
import { LOCATIONS } from '../data.js';

export default function Locations() {
  return (
    <>
      <PageHero
        title="Our locations" eyebrow="Three places to pull up a chair"
        lead="From the original bakery on Water Orton Lane to a restored countryside barn at Thorpe — find the Silver Tree that suits your day."
        img="/assets/img9708-web.jpg" pos="50% 50%" crumbs={[{ label: 'Locations' }]}
      />
      <section className="section locations">
        <div className="wrap">
          <div className="cards">
            {LOCATIONS.map((l, i) => <LocationCard key={l.slug} loc={l} delay={i * 150} />)}
          </div>
          <Reveal className="coming">
            <img src="/assets/logo-green.png" alt="" />
            <div>
              <h3>Coming soon: Jewellery Quarter</h3>
              <p>Our newest bakery is on its way to Birmingham&apos;s Jewellery Quarter. We&apos;re hiring for the opening team now.</p>
            </div>
            <Link to="/careers" className="btn btn--dark">See roles</Link>
          </Reveal>
        </div>
      </section>
      <CtaBand title="Hosting something special?" text="Book a meeting room at the Arbour Club or ask about catering from our bakery.">
        <Link className="btn btn--light" to="/arbour-club">Arbour Club</Link>
        <Link className="btn btn--ghost" to="/wholesale-enquiries">Wholesale</Link>
      </CtaBand>
    </>
  );
}
