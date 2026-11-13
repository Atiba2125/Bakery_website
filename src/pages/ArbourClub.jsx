import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import { SectionHead, ParallaxImg, CtaBand } from '../components/Ui.jsx';
import { PLANS, PERKS, ROOMS, ROOM_CATERING, ARBOUR_GALLERY, EMAIL } from '../data.js';

export default function ArbourClub() {
  return (
    <>
      <PageHero
        title="The Arbour Club" eyebrow="Coworking & event space above Silver Tree Gracechurch"
        lead="“Arbour” — a shady garden retreat formed by trees, evoking a restful, cosy and organic aesthetic."
        img="/assets/arbour-5.jpg" pos="50% 40%" crumbs={[{ label: 'Arbour Club' }]}
      >
        <div className="phero__actions">
          <a className="btn btn--light" href={`mailto:${EMAIL}?subject=Arbour%20Club%20tour`}>Book a tour</a>
          <a className="btn btn--ghost" href="#rooms">Hire a meeting room</a>
        </div>
      </PageHero>

      <section className="section arbour">
        <div className="wrap">
          <div className="arbour__top">
            <div>
              <Reveal as="p" className="eyebrow eyebrow--light">Membership benefits</Reveal>
              <Reveal as="h2">Work somewhere that <em>feels good</em></Reveal>
              <Reveal as="ul" className="perk-list">
                {PERKS.map((p) => <li key={p}>{p}</li>)}
              </Reveal>
            </div>
            <ParallaxImg className="arbour__img" factor={0.06} src="/assets/arbour-3.jpg" alt="The Arbour Club boardroom table with wishbone chairs" />
          </div>

          <Reveal as="h3" className="sub">Membership</Reveal>
          <div className="plans">
            {PLANS.map((p, i) => (
              <Reveal key={p.name} className={`plan${p.feat ? ' plan--feat' : ''}`} delay={i * 120}>
                {p.feat && <span className="plan__badge">Most flexible</span>}
                <h4>{p.name}</h4>
                <p className="price">{p.price}<small> per month</small></p>
                <p><b>{p.perks[0]}</b></p>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="center"><Link className="btn btn--light" to="/arbour-club/memberships">Join now</Link></Reveal>
        </div>
      </section>

      <section className="section" id="rooms">
        <div className="wrap">
          <SectionHead eyebrow="Meeting rooms &amp; corporate events">Space for <em>client meetings, workshops &amp; events</em></SectionHead>
          <Reveal as="p" className="center narrow">Whether you’re hosting a client meeting, team workshop, networking event or training session, the Arbour Club offers flexible meeting spaces alongside catering from Silver Tree Bakery. All room bookings include complimentary tea, coffee, water and high-speed WiFi.</Reveal>
          <div className="rooms rooms--cards">
            {ROOMS.map((r, i) => (
              <Reveal key={r.name} className="roomcard" delay={i * 150}>
                <img src={r.img} alt="" loading="lazy" />
                <div className="roomcard__body">
                  <h3>{r.name}</h3>
                  <p>{r.text}</p>
                  <ul className="ticks">{r.feats.map((f) => <li key={f}>{f}</li>)}</ul>
                  <p className="roomcard__price"><b>{r.half}</b> half day · <b>{r.full}</b> full day</p>
                  <a className="btn btn--dark" href={`mailto:${EMAIL}?subject=Arbour%20Club%20${encodeURIComponent(r.name)}%20booking`}>Book now</a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section locations">
        <div className="wrap split">
          <div>
            <Reveal as="p" className="eyebrow">Catering available</Reveal>
            <Reveal as="h2">Enhance your meeting with <em>Silver Tree</em></Reveal>
            <Reveal as="p" className="lead-p">Catering can be arranged to suit meetings, training sessions and larger business events.</Reveal>
            <Reveal as="ul" className="ticks ticks--lg">{ROOM_CATERING.map((c) => <li key={c}>{c}</li>)}</Reveal>
          </div>
          <ParallaxImg className="split__img" factor={0.06} src="/assets/arbour-1.jpg" alt="A pastry and coffee served at the Arbour Club" />
        </div>
      </section>

      <section className="section gallery-sec">
        <div className="wrap">
          <SectionHead eyebrow="Inside the club">A look around</SectionHead>
          <div className="gallery gallery--six">
            {ARBOUR_GALLERY.map((g, i) => (
              <Reveal key={g} className="gallery__item" delay={(i % 3) * 120}><img src={g} alt="" loading="lazy" /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Come and see the space" text="Book a tour and we’ll show you around — with coffee and a pastry on us.">
        <a className="btn btn--light" href={`mailto:${EMAIL}?subject=Arbour%20Club%20tour`}>Book a tour</a>
        <Link className="btn btn--ghost" to="/arbour-club/memberships">Become a member</Link>
      </CtaBand>
    </>
  );
}
