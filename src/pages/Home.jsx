import { useState } from 'react';
import { Link } from 'react-router-dom';

import Reveal from '../components/Reveal';
import StatBar from '../components/StatBar';
import ProcessSteps from '../components/ProcessSteps';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';
import QuotePopup from '../components/QuotePopup';

import {
  IconShield,
  IconClock,
  IconUsers,
  IconArrowRight,
  IconChevronLeft,
  IconChevronRight,
  IconRupee,
  IconHeadset,
  IconTruck,
  IconCheck
} from '../components/Icons';

import photos from '../assets/photos';

import {
  SERVICES,
  HOW_IT_WORKS,
  STATS,
  CITIES
} from '../siteData';

import './Home.css';

const HOME_SERVICES = SERVICES.slice(0, 5);

const ABOUT_POINTS = [
  {
    icon: <IconUsers />,
    label: 'Trained & Verified Staff'
  },
  {
    icon: <IconShield />,
    label: 'Safe & Secure Handling'
  },
  {
    icon: <IconRupee />,
    label: 'Affordable Pricing'
  },
  {
    icon: <IconClock />,
    label: 'On-Time Delivery'
  },
  {
    icon: <IconTruck />,
    label: 'Pan India Service'
  },
  {
    icon: <IconHeadset />,
    label: '24/7 Customer Support'
  }
];

export default function Home() {
  /*
   * TRUE = popup automatically opens on Home page load
   */
  const [quoteOpen, setQuoteOpen] = useState(true);

  const openQuote = () => {
    setQuoteOpen(true);
  };

  const closeQuote = () => {
    setQuoteOpen(false);
  };

  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="home-hero">
        <div className="container home-hero__grid">

          <Reveal className="home-hero__copy">

            <span className="eyebrow eyebrow--light">
              Packers and Movers in Mumbai
            </span>

            <h1>
              Move Smarter,
              <br />
              <span className="text-cyan">
                Live Better
              </span>
            </h1>

            <p className="home-hero__tagline">
              Safe. Reliable. Hassle-Free Relocation.
            </p>

            <p className="home-hero__desc">
              At Hello Packers, we make your move simple, secure and stress-free.
              Your belongings, our responsibility.
            </p>

            <div className="home-hero__actions">

              <button
                type="button"
                className="btn btn-primary home-quote-btn"
                onClick={openQuote}
              >
                Get a Free Quote
                <IconArrowRight />
              </button>

              <Link
                to="/services"
                className="btn btn-ghost"
              >
                Our Services
              </Link>

            </div>

            <ul className="home-hero__trust">

              <li>
                <IconShield />
                Safe &amp; Secure Handling
              </li>

              <li>
                <IconClock />
                On-Time Delivery
              </li>

              <li>
                <IconUsers />
                Trained Professionals
              </li>

            </ul>

          </Reveal>


          <Reveal
            className="home-hero__media"
            style={{ transitionDelay: '0.12s' }}
          >

            <img
              src={photos.truckBridge}
              alt="Hello Packers truck on the move in Mumbai"
            />

            <span className="script-tag home-hero__script">
              Your Move
              <br />
              Our Priority
            </span>

            <div className="home-hero__stats">
              <StatBar items={STATS.slice(0, 3)} />
            </div>

          </Reveal>

        </div>
      </section>


      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section className="section services-preview">
        <div className="container">

          <div className="section-head">

            <div>
              <span className="eyebrow">
                Our Services
              </span>

              <h2>
                Complete Moving Solutions for Every Need
              </h2>
            </div>

            <Link
              to="/services"
              className="section-head__link"
            >
              View All Services
              <IconArrowRight />
            </Link>

          </div>


          <Reveal
            as="div"
            stagger
            className="services-preview__grid"
          >

            {HOME_SERVICES.map((s) => (
              <div
                key={s.id}
                className="service-card"
              >

                <div className="service-card__media">
                  <img
                    src={photos[s.img]}
                    alt={s.title}
                    loading="lazy"
                  />
                </div>

                <div className="service-card__body">

                  <h3>
                    {s.title}
                  </h3>

                  <p>
                    {s.summary}
                  </p>

                  <Link
                    to="/services"
                    className="arrow-link service-card__arrow"
                    aria-label={`View ${s.title}`}
                  >
                    <IconArrowRight />
                  </Link>

                </div>

              </div>
            ))}

          </Reveal>

        </div>
      </section>


      {/* =====================================================
          ABOUT
      ====================================================== */}

      <section className="section section--dark about-preview">
        <div className="container about-preview__grid">

          <Reveal className="about-preview__media">

            <img
              src={photos.courierDoor}
              alt="Hello Packers crew member carrying a box"
            />

            <span className="script-tag about-preview__script">
              We Move
              <br />
              With Care
            </span>

          </Reveal>


          <Reveal
            className="about-preview__copy"
            style={{ transitionDelay: '0.1s' }}
          >

            <span className="eyebrow eyebrow--light">
              About Hello Packers
            </span>

            <h2>
              Your Trusted Moving Partner
            </h2>

            <p>
              At Hello Packers, we believe moving is not just about shifting
              items, but about moving lives with care. With professional
              expertise, modern equipment and a customer-first approach,
              we make your relocation journey smooth and worry-free.
            </p>

            <ul className="about-preview__points">

              {ABOUT_POINTS.map((p) => (
                <li key={p.label}>

                  <span className="icon-badge">
                    {p.icon}
                  </span>

                  {p.label}

                </li>
              ))}

            </ul>

            <Link
              to="/about"
              className="btn btn-primary"
            >
              Know More About Us
              <IconArrowRight />
            </Link>

          </Reveal>

        </div>
      </section>


      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}

      <section className="section how-it-works">
        <div className="container">

          <div className="section-head">

            <div>

              <span className="eyebrow">
                How It Works
              </span>

              <h2>
                Simple Steps to a Hassle-Free Move
              </h2>

            </div>

            <div className="section-head__nav">

              <button
                type="button"
                className="nav-arrow"
                aria-label="Previous"
              >
                <IconChevronLeft />
              </button>

              <button
                type="button"
                className="nav-arrow"
                aria-label="Next"
              >
                <IconChevronRight />
              </button>

            </div>

          </div>

          <ProcessSteps steps={HOW_IT_WORKS} />

        </div>
      </section>


      {/* =====================================================
          TESTIMONIALS
      ====================================================== */}

      <section className="section section--raised testimonials-section">
        <div className="container">

          <div className="section-head">

            <div>

              <span className="eyebrow">
                What Our Customers Say
              </span>

              <h2>
                Trusted by Hundreds of Families
              </h2>

            </div>

            <div className="section-head__nav">

              <button
                type="button"
                className="nav-arrow"
                aria-label="Previous"
              >
                <IconChevronLeft />
              </button>

              <button
                type="button"
                className="nav-arrow"
                aria-label="Next"
              >
                <IconChevronRight />
              </button>

            </div>

          </div>

          <Testimonials />

        </div>
      </section>


      {/* =====================================================
          CITIES
      ====================================================== */}

      <section className="section cities">
        <div className="container">

          <span className="eyebrow">
            Where We Operate
          </span>

          <h2>
            Serving Mumbai and Beyond
          </h2>

          <p className="cities__intro">
            Based in Kandivali East, running moves across the Mumbai
            metropolitan region and beyond.
          </p>

          <Reveal
            as="ul"
            stagger
            className="cities__list"
          >

            {CITIES.map((c) => (
              <li key={c}>
                <IconCheck />
                {c}
              </li>
            ))}

          </Reveal>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <FinalCTA />


      {/* =====================================================
          AUTOMATIC QUOTE POPUP
      ====================================================== */}

      <QuotePopup
        isOpen={quoteOpen}
        onClose={closeQuote}
      />

    </>
  );
}