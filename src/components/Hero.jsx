import { profile } from '../data.js';
import { ArrowRight, Download } from './Icons.jsx';

const S = ({ children }) => <span className="code-string">{children}</span>;

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <div className="badge"><span className="dot" />Open to remote roles · USD</div>
        <h1 className="hero-title">
          Full stack developer building <span className="accent">solid backends</span> and clean interfaces.
        </h1>
        <p className="lead">
          I'm {profile.name}, a developer from Neuquén, Argentina. I work across .NET, Oracle and modern
          frontends — from stored procedures to the last pixel of the UI.
        </p>
        <div className="actions">
          <a href="#projects" className="btn btn-primary">View projects <ArrowRight /></a>
          <a href={profile.cv} className="btn btn-ghost">Download CV <Download /></a>
        </div>
      </div>

      <div className="code-card">
        <div className="code-card-bar">
          <span /><span /><span />
          <p className="code-card-file">AboutMe.cs</p>
        </div>
        <pre className="code">
<span className="code-kw">var</span> me = <span className="code-kw">new</span> <span className="code-type">Developer</span>{'\n'}
{'{\n'}
{'    '}Name     = <S>"{profile.name}"</S>,{'\n'}
{'    '}Role     = <S>"{profile.role}"</S>,{'\n'}
{'    '}Location = <S>"{profile.location}"</S>,{'\n'}
{'    '}Backend  = [<S>"C#"</S>, <S>".NET"</S>, <S>"Oracle PL/SQL"</S>],{'\n'}
{'    '}Frontend = [<S>"Angular"</S>, <S>"React"</S>],{'\n'}
{'    '}OpenTo   = <S>"Remote · International"</S>{'\n'}
{'};\n\n'}
<span className="code-comment">// await me.JoinYourTeamAsync();</span>
        </pre>
      </div>
    </section>
  );
}
