import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import logo from '../assets/logo-full.png';

import {
  NAV_LINKS,
  CONTACT,
} from '../siteData';

import { IconPhone } from './Icons';

import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { pathname } = useLocation();


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener(
      'scroll',
      handleScroll
    );

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      );
    };
  }, []);


  useEffect(() => {
    setOpen(false);
  }, [pathname]);


  return (
    <header
      className={`navbar ${
        scrolled
          ? 'navbar--scrolled'
          : ''
      }`}
    >

      <div className="navbar__glow" />

      <div className="container navbar__inner">


        {/* LOGO */}

        <Link
          to="/"
          className="navbar__brand"
          onClick={() => setOpen(false)}
        >

          <img
            src={logo}
            alt="Hello Packers"
            className="navbar__logo"
          />

          <span className="navbar__wordmark">
            HELLO <em>PACKERS</em>
          </span>

        </Link>


        {/* NAVIGATION */}

        <nav
          className={`navbar__links ${
            open
              ? 'navbar__links--open'
              : ''
          }`}
        >

          <div className="navbar__menu">

            {NAV_LINKS.map(
              (link, index) => (

                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  style={{
                    '--i': index,
                  }}
                  className={({
                    isActive,
                  }) =>
                    isActive
                      ? 'navbar__link navbar__link--active'
                      : 'navbar__link'
                  }
                  onClick={() =>
                    setOpen(false)
                  }
                >
                  {link.label}
                </NavLink>

              )
            )}

          </div>


          {/* ACTIONS */}

          <div className="navbar__actions">

            <a
              href={`tel:${CONTACT.phone}`}
              className="navbar__phone"
            >

              <span className="navbar__phone-ring">
                <IconPhone />
              </span>

              <span>
                {CONTACT.phoneDisplay}
              </span>

            </a>


            <Link
              to="/contact"
              className="btn btn-primary navbar__cta"
              onClick={() =>
                setOpen(false)
              }
            >
              Get a quote
            </Link>

          </div>

        </nav>


        {/* MOBILE MENU */}

        <button
          type="button"
          className={`navbar__toggle ${
            open
              ? 'navbar__toggle--open'
              : ''
          }`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() =>
            setOpen((value) => !value)
          }
        >

          <span />
          <span />
          <span />

        </button>

      </div>

    </header>
  );
}