import { projects } from '../data.js';
import SectionHeader from './SectionHeader.jsx';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeader index="03" label="projects" title="Selected work" />
      <div className="grid grid-projects">
        {projects.map((p) => (
          <article key={p.title} className="card project">
            {p.image ? (
              <img src={p.image} alt={`${p.title} screenshot`} className="project-media" />
            ) : (
              <div className="project-media placeholder">[{p.placeholder}]</div>
            )}
            <p className="project-kind">{p.kind}</p>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.description}</p>
            <p className="project-tech">{p.tech.join(' · ')}</p>
            <div className="project-links">
              {p.links.map((l) => (
                <a key={l.label} href={l.href} className={l.primary ? 'link-primary' : 'link-muted'}>
                  {l.label}{l.primary ? ' →' : ''}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
