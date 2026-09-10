import { Link } from 'react-router-dom';
import logo from '../assets/logo-full.png';
import { NAV_LINKS, CONTACT } from '../siteData';
import { IconPhone, IconMail } from './Icons';
import './Footer.css';

const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com', d: 'M12 2.2c2.7 0 3 0 4.1.06 1 .05 1.6.2 2 .35.5.2.9.44 1.3.83.4.4.62.79.83 1.3.15.4.3 1 .35 2 .05 1.1.06 1.4.06 4.1s0 3-.06 4.1c-.05 1-.2 1.6-.35 2-.2.5-.44.9-.83 1.3-.4.4-.79.62-1.3.83-.4.15-1 .3-2 .35-1.1.05-1.4.06-4.1.06s-3 0-4.1-.06c-1-.05-1.6-.2-2-.35a3.6 3.6 0 01-1.3-.83 3.6 3.6 0 01-.83-1.3c-.15-.4-.3-1-.35-2C2.2 15 2.2 14.7 2.2 12s0-3 .06-4.1c.05-1 .2-1.6.35-2 .2-.5.44-.9.83-1.3.4-.4.79-.62 1.3-.83.4-.15 1-.3 2-.35C9 2.2 9.3 2.2 12 2.2zm0 3a6.8 6.8 0 100 13.6 6.8 6.8 0 000-13.6zm0 2a4.8 4.8 0 110 9.6 4.8 4.8 0 010-9.6zm6.9-2.4a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z' },
  { label: 'Facebook', href: 'https://facebook.com', d: 'M13.5 21v-7.6h2.6l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46h1.6V4.2C16.3 4.14 15.4 4 14.35 4 12.14 4 10.6 5.34 10.6 7.9v1.5H8v3h2.6V21h2.9z' },
  { label: 'LinkedIn', href: 'https://linkedin.com', d: 'M4.98 3.5a2 2 0 100 4 2 2 0 000-4zM3.5 9h3v11.5h-3zM9.5 9h2.9v1.6h.04c.4-.76 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7v6.8h-3v-6c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3v6.1h-3z' },
  { label: 'YouTube', href: 'https://youtube.com', d: 'M21.6 7.6a2.8 2.8 0 00-2-2C17.9 5.2 12 5.2 12 5.2s-5.9 0-7.6.4a2.8 2.8 0 00-2 2C2 9.3 2 12 2 12s0 2.7.4 4.4a2.8 2.8 0 002 2c1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4a2.8 2.8 0 002-2c.4-1.7.4-4.4.4-4.4s0-2.7-.4-4.4zM10 15.2V8.8l5.2 3.2z' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={logo} alt="Hello Packers" className="footer__logo" />
          <p className="footer__tag">
            Packing, moving and storage across Mumbai and nearby cities —
            planned like a route, not a rush.
          </p>
          <div className="footer__socials">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="footer__social">
                <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d={s.d} /></svg>
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4>Menu</h4>
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul className="footer__contact">
            <li><a href={`tel:${CONTACT.phone}`}><IconPhone /> {CONTACT.phoneDisplay}</a></li>
            <li><a href={`mailto:${CONTACT.email}`}><IconMail /> {CONTACT.email}</a></li>
            <li className="footer__address">
              {CONTACT.addressLines.map((line) => <span key={line}>{line}</span>)}
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {new Date().getFullYear()} Hello Packers. All rights reserved.</span>
          <div className="footer__legal">
            <a href="#terms">Terms &amp; Conditions</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
