import React from 'react';
import { Hero, Marquee } from '../components/Hero.jsx';
import { About, LocationsPreview, Bakes, Band, ArbourTeaser, EventsTeaser, Pathways, CareersTeaser, Visit } from '../components/Sections.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <LocationsPreview />
      <Bakes />
      <Band />
      <ArbourTeaser />
      <EventsTeaser />
      <Pathways />
      <CareersTeaser />
      <Visit />
    </>
  );
}
