import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';

export default function NotFound() {
  return (
    <>
      <PageHero
        title="Page not found" eyebrow="404"
        lead="Looks like this page has wandered off. Let’s get you back to something fresh from the oven."
        img="/assets/img9700-web.jpg" pos="50% 38%"
      >
        <div className="phero__actions">
          <Link className="btn btn--light" to="/">Back home</Link>
          <Link className="btn btn--ghost" to="/menu">See the menu</Link>
        </div>
      </PageHero>
    </>
  );
}
