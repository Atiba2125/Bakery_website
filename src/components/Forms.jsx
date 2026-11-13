import React, { useState } from 'react';
import { EMAIL } from '../data.js';

/** Controlled form helpers. There is no backend: submitting opens the visitor's email app, addressed to the bakery. */
export function useMailtoForm(subject, initial) {
  const [values, setValues] = useState(initial);
  const [sent, setSent] = useState(false);
  const set = (name, value) => setValues((v) => ({ ...v, [name]: value }));
  const submit = (labels) => (e) => {
    e.preventDefault();
    const body = labels
      .map(([k, label]) => {
        const v = values[k];
        return `${label}: ${Array.isArray(v) ? v.join(', ') : typeof v === 'boolean' ? (v ? 'Yes' : 'No') : v || '-'}`;
      })
      .join('\n');
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  return { values, set, submit, sent, reset: () => { setSent(false); setValues(initial); } };
}

export function Field({ label, children, wide }) {
  return (
    <label className={`field${wide ? ' field--wide' : ''}`}>
      <span>{label}</span>
      {children}
    </label>
  );
}

export function Text({ form, name, label, type = 'text', required, wide }) {
  return (
    <Field label={`${label}${required ? ' *' : ''}`} wide={wide}>
      <input type={type} required={required} value={form.values[name]} onChange={(e) => form.set(name, e.target.value)} />
    </Field>
  );
}

export function Area({ form, name, label, required }) {
  return (
    <Field label={`${label}${required ? ' *' : ''}`} wide>
      <textarea rows="4" required={required} value={form.values[name]} onChange={(e) => form.set(name, e.target.value)} />
    </Field>
  );
}

export function Choice({ form, name, label, options, multi }) {
  const val = form.values[name];
  const toggle = (o) => {
    if (multi) form.set(name, val.includes(o) ? val.filter((x) => x !== o) : [...val, o]);
    else form.set(name, o);
  };
  return (
    <fieldset className="field field--wide choice">
      <legend>{label}</legend>
      <div className="choice__opts">
        {options.map((o) => {
          const on = multi ? val.includes(o) : val === o;
          return (
            <button type="button" key={o} className={`chip${on ? ' on' : ''}`} aria-pressed={on} onClick={() => toggle(o)}>{o}</button>
          );
        })}
      </div>
    </fieldset>
  );
}

export function Sent({ onReset }) {
  return (
    <div className="sent">
      <h3>Thank you</h3>
      <p>Your email app should now be open with your message ready to send to Silver Tree Bakery. If nothing opened, email us directly at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
      <button className="btn btn--dark" onClick={onReset}>Start another</button>
    </div>
  );
}
