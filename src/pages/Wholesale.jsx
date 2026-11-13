import React from 'react';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import { useMailtoForm, Text, Area, Choice, Sent } from '../components/Forms.jsx';
import { WHOLESALE_PRODUCTS } from '../data.js';

const LABELS = [
  ['business', 'Business name'], ['type', 'Business type'], ['contact', 'Contact name'], ['email', 'Email'], ['phone', 'Phone number'],
  ['operating', 'Currently operating'], ['supplier', 'Currently uses another bakery supplier'], ['products', 'Products of interest'],
  ['start', 'Looking to start'], ['notes', 'Anything else'],
];

export default function Wholesale() {
  const form = useMailtoForm('Wholesale enquiry', {
    business: '', type: '', contact: '', email: '', phone: '', operating: '', supplier: '', products: [], start: '', notes: '',
  });

  return (
    <>
      <PageHero
        title="Wholesale enquiries" eyebrow="Bakery supply for businesses"
        lead="Supply your café, restaurant, hotel or shop with sourdough, viennoiserie, savoury and sweet bakes made fresh at Water Orton Lane."
        img="/assets/img9696-web.jpg" pos="50% 55%" crumbs={[{ label: 'Wholesale' }]}
      />
      <section className="section">
        <div className="wrap narrow-wrap">
          <Reveal as="h2">Tell us about your business</Reveal>
          {form.sent ? <Sent onReset={form.reset} /> : (
            <Reveal as="form" className="form" onSubmit={form.submit(LABELS)}>
              <Text form={form} name="business" label="Business name" required />
              <Text form={form} name="type" label="Business type" />
              <Text form={form} name="contact" label="Contact name" required />
              <Text form={form} name="email" label="Email" type="email" required />
              <Text form={form} name="phone" label="Phone number" type="tel" />
              <Choice form={form} name="operating" label="Are you currently operating?" options={['Yes', 'Not yet']} />
              <Choice form={form} name="supplier" label="Do you currently use another bakery supplier?" options={['Yes', 'No']} />
              <Choice form={form} name="products" label="Which products are you interested in?" options={WHOLESALE_PRODUCTS} multi />
              <Choice form={form} name="start" label="When are you looking to start?" options={['Within 1 month', 'Within 3 months', 'Just exploring']} />
              <Area form={form} name="notes" label="Anything else we should know?" />
              <button className="btn btn--dark" type="submit">Send enquiry</button>
              <p className="fine">Submitting opens your email app with your answers, addressed to Silver Tree Bakery.</p>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
