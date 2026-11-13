import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import { CtaBand } from '../components/Ui.jsx';
import { MENU, MENU_NOTE, GIFT_CARD } from '../data.js';

export default function Menu() {
  return (
    <>
      <PageHero
        title="The menu" eyebrow="Baked on site, every day"
        lead="Sourdough and laminated pastries, toasties, breakfast muffins, cakes and seasonal specials — all made fresh at our bakery."
        img="/assets/menu-toasties.jpg" pos="50% 60%" crumbs={[{ label: 'Menu' }]}
      />
      <section className="section">
        <div className="wrap menu">
          {MENU.map((cat, i) => (
            <div key={cat.title} className={`menu__cat${i % 2 ? ' menu__cat--flip' : ''}`}>
              <Reveal className="menu__img"><img src={cat.img} alt="" loading="lazy" /></Reveal>
              <div>
                <Reveal as="h2">{cat.title}</Reveal>
                <ul className="menu__list">
                  {cat.items.map(([name, desc], j) => (
                    <Reveal as="li" key={name} delay={j * 70}><b>{name}</b><span>{desc}</span></Reveal>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <Reveal as="p" className="fine menu__note">{MENU_NOTE}</Reveal>
        </div>
      </section>
      <CtaBand title="Order for a crowd" text="Platters, breakfast boxes and bespoke catering for meetings, events and stays at Thorpe.">
        <Link className="btn btn--light" to="/arbour-club">Meeting room catering</Link>
        <a className="btn btn--ghost" href={GIFT_CARD} target="_blank" rel="noopener">Gift card</a>
      </CtaBand>
    </>
  );
}
