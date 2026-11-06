import { profile } from '../data.js';
import { Mail } from './Icons.jsx';

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <p className="eyebrow">05 / contact</p>
      <h2 className="contact-title">Let's build something together.</h2>
      <p className="lead">
        Open to remote full stack roles with international teams. Based in Neuquén, Argentina ({profile.timezone}).
      </p>
      <a href={`mailto:${profile.email}`} className="btn btn-primary btn-lg"><Mail />{profile.email}</a>
      <div className="socials">
        <a href={profile.github} className="btn btn-ghost btn-sm" target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.linkedin} className="btn btn-ghost btn-sm" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}
