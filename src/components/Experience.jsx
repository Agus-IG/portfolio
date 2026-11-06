import { experience } from '../data.js';
import SectionHeader from './SectionHeader.jsx';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeader index="04" label="experience" title="Where I've worked" />
      <div className="stack-list">
        {experience.map((e) => (
          <div key={e.role} className="card job">
            <div className="job-head">
              <p className="job-period">{e.period}</p>
              <h3 className="job-role">{e.role}</h3>
              <p className="job-company">{e.company}</p>
            </div>
            <div className="job-body">
              {e.details.map((d, i) => <p key={i}>{d}</p>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
