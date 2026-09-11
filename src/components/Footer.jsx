import { Link } from 'react-router-dom';
import logo from '../assets/logo-full.png';
import { NAV_LINKS, CONTACT } from '../siteData';
import {
  IconPhone,
  IconMail,
  IconPin,
  IconArrowRight,
} from './Icons';
import './Footer.css';

const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/hello_packers/',
    d: 'M12 2.2c2.7 0 3 0 4.1.06 1 .05 1.6.2 2 .35.5.2.9.44 1.3.83.4.4.62.79.83 1.3.15.4.3 1 .35 2 .05 1.1.06 1.4.06 4.1s0 3-.06 4.1c-.05 1-.2 1.6-.35 2-.2.5-.44.9-.83 1.3-.4.4-.79.62-1.3.83-.4.15-1 .3-2 .35-1.1.05-1.4.06-4.1.06s-3 0-4.1-.06c-1-.05-1.6-.2-2-.35a3.6 3.6 0 01-1.3-.83 3.6 3.6 0 01-.83-1.3c-.15-.4-.3-1-.35-2C2.2 15 2.2 14.7 2.2 12s0-3 .06-4.1c.05-1 .2-1.6.35-2 .2-.5.44-.9.83-1.3.4-.4.79-.62 1.3-.83.4-.15 1-.3 2-.35C9 2.2 9.3 2.2 12 2.2zm0 3a6.8 6.8 0 100 13.6 6.8 6.8 0 000-13.6zm0 2a4.8 4.8 0 110 9.6 4.8 4.8 0 010-9.6zm6.9-2.4a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61594426313448',
    d: 'M13.5 21v-7.6h2.6l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46h1.6V4.2C16.3 4.14 15.4 4 14.35 4 12.14 4 10.6 5.34 10.6 7.9v1.5H8v3h2.6V21h2.9z',
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      {/* Background decoration */}
      <div className="footer__glow footer__glow--one" />
      <div className="footer__glow footer__glow--two" />

      <div className="container footer__grid">

        {/* =================================================
            BRAND
        ================================================== */}

        <div className="footer__brand">
          <Link to="/" className="footer__brand-link">
            <img
              src={logo}
              alt="Hello Packers"
              className="footer__logo"
            />
          </Link>

          <p className="footer__tag">
            Packing, moving and storage across Mumbai and nearby
            cities — planned like a route, not a rush.
          </p>

          <div className="footer__socials">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="footer__social"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="17"
                  height="17"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d={social.d} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* =================================================
            MENU
        ================================================== */}

        <div className="footer__col">
          <span className="footer__label">
            Explore
          </span>

          <h4>Quick Links</h4>

          <ul className="footer__links">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>
                  <span>{link.label}</span>
                  <IconArrowRight />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* =================================================
            CONTACT
        ================================================== */}

        <div className="footer__col footer__contact-col">
          <span className="footer__label">
            Get In Touch
          </span>

          <h4>Contact Us</h4>

          <ul className="footer__contact">

            {/* PHONE */}
            <li>
              <span className="footer__contact-icon">
                <IconPhone />
              </span>

              <div>
                <small>Call Us</small>

                <a href={`tel:${CONTACT.phone}`}>
                  {CONTACT.phoneDisplay}
                </a>
              </div>
            </li>

            {/* EMAIL */}
            <li>
              <span className="footer__contact-icon">
                <IconMail />
              </span>

              <div>
                <small>Email Us</small>

                <a href={`mailto:${CONTACT.email}`}>
                  {CONTACT.email}
                </a>
              </div>
            </li>

            {/* ADDRESS */}
            <li>
              <span className="footer__contact-icon">
                <IconPin />
              </span>

              <div>
                <small>Visit Us</small>

                <span className="footer__address">
                  {CONTACT.addressLines.map((line) => (
                    <span key={line}>
                      {line}
                    </span>
                  ))}
                </span>
              </div>
            </li>

          </ul>
        </div>
      </div>

      {/* =================================================
          BOTTOM
      ================================================== */}

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">

          <span>
            © {new Date().getFullYear()} Hello Packers.
            All rights reserved.
          </span>

          <div className="footer__legal">
            <a href="#terms">
              Terms &amp; Conditions
            </a>

            <a href="#privacy">
              Privacy Policy
            </a>

            <a href="#sitemap">
              Sitemap
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}