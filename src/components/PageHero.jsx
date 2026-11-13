import React from 'react';
import { Link } from 'react-router-dom';

/** Smaller hero used at the top of inner pages. */
export default function PageHero({ title, eyebrow, lead, img, pos = '50% 50%', crumbs = [], children }) {
  return (
    <section className="phero" data-title={title.replace(/<[^>]+>/g, '')}>
      <div className="phero__bg" style={{ backgroundImage: `url('${img}')`, backgroundPosition: pos }} />
      <div className="phero__shade" />
      <div className="phero__inner">
        {crumbs.length > 0 && (
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {crumbs.map((c) => (c.to ? <React.Fragment key={c.label}><i>/</i><Link to={c.to}>{c.label}</Link></React.Fragment>
              : <React.Fragment key={c.label}><i>/</i><span>{c.label}</span></React.Fragment>))}
          </nav>
        )}
        {eyebrow && <p className="eyebrow eyebrow--light">{eyebrow}</p>}
        <h1>{title}</h1>
        {lead && <p className="phero__lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
