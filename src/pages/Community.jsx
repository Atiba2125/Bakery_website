import React from 'react';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import { useMailtoForm, Text, Area, Choice, Sent, Field } from '../components/Forms.jsx';
import { COMMUNITY_TYPES } from '../data.js';

const LABELS = [
  ['name', 'Name'], ['email', 'Email'], ['phone', 'Phone number'], ['type', 'Type of event'], ['about', 'About the event or cause'],
  ['contribution', 'Requested contribution'], ['promo', 'How Silver Tree will be recognised or promoted'], ['optin', 'Opted in to marketing'],
];

export default function Community() {
  const form = useMailtoForm('Community request', {
    name: '', email: '', phone: '', type: '', about: '', contribution: '', promo: '', optin: false,
  });

  return (
    <>
      <PageHero
        title="Community requests" eyebrow="Supporting local causes"
        lead="We appreciate you thinking of Silver Tree Bakery to support your event or cause."
        img="/assets/img9707-web.jpg" pos="50% 50%" crumbs={[{ label: 'Community requests' }]}
      />
      <section className="section">
        <div className="wrap narrow-wrap">
          <Reveal as="p" className="lead-p">Due to the high volume of requests we receive, we’re unable to support everything. Please complete the form below for consideration, and our team will be in touch if your request aligns with what we’re able to offer.</Reveal>
          {form.sent ? <Sent onReset={form.reset} /> : (
            <Reveal as="form" className="form" onSubmit={form.submit(LABELS)}>
              <Text form={form} name="name" label="Your name" required />
              <Text form={form} name="email" label="Email" type="email" required />
              <Text form={form} name="phone" label="Phone number" type="tel" />
              <Choice form={form} name="type" label="Type of event" options={COMMUNITY_TYPES} />
              <Area form={form} name="about" label="Tell us about your event or cause" required />
              <Text form={form} name="contribution" label="Requested contribution" wide />
              <Area form={form} name="promo" label="How will Silver Tree be recognised or promoted?" />
              <Field label="" wide>
                <span className="check">
                  <input type="checkbox" checked={form.values.optin} onChange={(e) => form.set('optin', e.target.checked)} />
                  I opt-in to receive marketing and promotional materials
                </span>
              </Field>
              <button className="btn btn--dark" type="submit">Submit request</button>
              <p className="fine">Submitting opens your email app with your answers, addressed to Silver Tree Bakery.</p>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
