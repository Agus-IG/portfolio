import { about } from '../data.js';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="about-head">
        <p className="eyebrow">01 / about</p>
        <h2 className="section-title">From the database up.</h2>
      </div>
      <div className="about-body">
        {about.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </section>
  );
}
