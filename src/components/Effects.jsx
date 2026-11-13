import React, { useMemo } from 'react';
import { prefersReducedMotion } from '../hooks/useMotion.js';

const COLORS = ['#5c7152', '#7d9170', '#a3b394', '#c9bd9e'];

/** Falling leaves, echoing the tree in the logo. */
export function Leaves() {
  const leaves = useMemo(() => {
    if (prefersReducedMotion()) return [];
    const n = window.innerWidth < 700 ? 7 : 13;
    return Array.from({ length: n }, (_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        '--s': `${10 + Math.random() * 16}px`,
        '--d': `${14 + Math.random() * 14}s`,
        '--delay': `${-Math.random() * 20}s`,
        '--x': `${Math.random() * 160 - 80}px`,
        '--c': COLORS[Math.floor(Math.random() * COLORS.length)],
      },
    }));
  }, []);

  return (
    <div className="leaves" aria-hidden="true">
      {leaves.map((l) => (
        <div key={l.id} className="leaf" style={l.style}>
          <svg viewBox="0 0 24 24"><path d="M12 1C6 6 3 11 5 17c1.3 3.5 4.7 5 7 6 2.3-1 5.7-2.5 7-6 2-6-1-11-7-16zm0 4v16" /></svg>
        </div>
      ))}
    </div>
  );
}
