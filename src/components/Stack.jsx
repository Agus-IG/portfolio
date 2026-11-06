import { stack } from '../data.js';
import SectionHeader from './SectionHeader.jsx';

export default function Stack() {
  return (
    <section id="stack" className="section">
      <SectionHeader index="02" label="stack" title="Tools I work with" />
      <div className="grid grid-stack">
        {stack.map((s) => (
          <div key={s.group} className="card">
            <h3 className="card-label">{s.group}</h3>
            <div className="chips">
              {s.items.map((i) => <span key={i} className="chip">{i}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
