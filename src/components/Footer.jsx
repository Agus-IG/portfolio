import { profile } from '../data.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with React + Vite</span>
      </div>
    </footer>
  );
}
