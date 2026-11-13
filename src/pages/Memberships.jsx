import React, { useState } from 'react';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import { ext } from '../components/Ui.jsx';
import { PLANS, PERKS, MEMBERSHIP_URL } from '../data.js';

export default function Memberships() {
  const [sel, setSel] = useState(PLANS[0].option);
  const plan = PLANS.find((p) => p.option === sel);

  return (
    <>
      <PageHero
        title="Arbour Club memberships" eyebrow="£80 – £200 per month"
        lead="Choose the plan that fits your week. Every membership includes a daily coffee and pastry from the bakery downstairs."
        img="/assets/arbour-memberships.jpg" pos="50% 50%"
        crumbs={[{ label: 'Arbour Club', to: '/arbour-club' }, { label: 'Memberships' }]}
      />
      <section className="section">
        <div className="wrap split split--event">
          <div>
            <Reveal as="h2">Select your plan</Reveal>
            <div className="options" role="radiogroup" aria-label="Membership plan">
              {PLANS.map((p) => (
                <button
                  key={p.option} role="radio" aria-checked={sel === p.option}
                  className={`option${sel === p.option ? ' on' : ''}`} onClick={() => setSel(p.option)}
                >
                  <span className="option__name">{p.option}</span>
                  <span className="option__price">{p.price}<small>/month</small></span>
                  <span className="option__desc">{p.perks[0]} — {p.text}</span>
                </button>
              ))}
            </div>
            <Reveal as="h3" className="mini">Every membership includes</Reveal>
            <Reveal as="ul" className="ticks ticks--lg">{PERKS.map((p) => <li key={p}>{p}</li>)}</Reveal>
          </div>
          <Reveal as="aside" className="booking">
            <img src="/assets/arbour-memberships.jpg" alt="Laptop, coffee and croissant on a timber desk" />
            <div className="booking__body">
              <p className="booking__price">{plan.price}<small> per month</small></p>
              <p><b>{plan.option}</b></p>
              <p>{plan.perks[0]}</p>
              <a className="btn btn--dark" href={MEMBERSHIP_URL} {...ext}>Buy now</a>
              <p className="fine">Opens the secure Silver Tree Bakery checkout, where you choose “{plan.option}”.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
