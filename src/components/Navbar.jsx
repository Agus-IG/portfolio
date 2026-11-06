const links = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-inner container">
        <a href="#top" className="logo">
          &lt;agustin<span className="accent">.dev</span> /&gt;
        </a>
        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
          <a href="#contact" className="btn btn-primary btn-sm">Contact</a>
        </div>
      </nav>
    </header>
  );
}
