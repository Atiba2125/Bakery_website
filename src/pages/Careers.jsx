import React, { useState } from 'react';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import { CtaBand } from '../components/Ui.jsx';
import { JOBS, CAREERS_EMAIL } from '../data.js';

function Job({ job, delay }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal className={`job${open ? ' open' : ''}`} delay={delay}>
      <button className="job__head" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <span>
          <b>{job.title}</b>
          <small>{job.where} · {job.type}</small>
        </span>
        <i aria-hidden="true">+</i>
      </button>
      <div className="job__panel">
        <div className="job__inner">
          <p>{job.intro}</p>
          <div className="job__cols">
            <div><h4>What we’re looking for</h4><ul className="ticks">{job.want.map((w) => <li key={w}>{w}</li>)}</ul></div>
            <div><h4>What you’ll get</h4><ul className="ticks">{job.get.map((w) => <li key={w}>{w}</li>)}</ul></div>
          </div>
          <a className="btn btn--dark" href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent('Application: ' + job.title)}`}>Apply — send your CV</a>
        </div>
      </div>
    </Reveal>
  );
}

export default function Careers() {
  return (
    <>
      <PageHero
        title="Come and work with us" eyebrow="Job vacancies"
        lead="Silver Tree is growing. We’re looking for skilled bakers, pastry laminators, front-of-house team members and drivers across all our locations."
        img="/assets/img1869-web.jpg" pos="50% 62%" crumbs={[{ label: 'Careers' }]}
      />
      <section className="section">
        <div className="wrap narrow-wrap">
          <Reveal as="h2">Open roles</Reveal>
          <Reveal as="p" className="lead-p">No evening shifts, two team outings a year and a friendly, ambitious team — with room to grow as we expand. Tap a role to read more.</Reveal>
          <div className="jobs-list">
            {JOBS.map((j, i) => <Job key={j.id} job={j} delay={i * 80} />)}
          </div>
          <Reveal as="p" className="fine">Please send your CV to <a href={`mailto:${CAREERS_EMAIL}`}>{CAREERS_EMAIL}</a>.</Reveal>
        </div>
      </section>
      <CtaBand title="Don’t see your role?" text="We’re always keen to meet talented people. Send your CV and tell us how you’d like to grow with Silver Tree.">
        <a className="btn btn--light" href={`mailto:${CAREERS_EMAIL}?subject=Speculative%20application`}>Send your CV</a>
      </CtaBand>
    </>
  );
}
