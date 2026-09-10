import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo-full.png';
import { NAV_LINKS, CONTACT } from '../siteData';
import { IconPhone } from './Icons';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="Hello Packers" className="navbar__logo" />
          <span className="navbar__wordmark">
            HELLO <em>PACKERS</em>
          </span>
        </Link>

        <nav className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <a href={`tel:${CONTACT.phone}`} className="navbar__phone">
            <IconPhone /> {CONTACT.phoneDisplay}
          </a>
          <Link to="/contact" className="btn btn-primary navbar__cta" onClick={() => setOpen(false)}>
            Get a quote
          </Link>
        </nav>

        <button
          className="navbar__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
