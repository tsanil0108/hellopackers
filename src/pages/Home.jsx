import { useState } from 'react';
import { Link } from 'react-router-dom';

import Reveal from '../components/Reveal';
import StatBar from '../components/StatBar';
import FinalCTA from '../components/FinalCTA';
import QuotePopup from '../components/QuotePopup';

import {
  IconShield,
  IconClock,
  IconUsers,
  IconArrowRight,
  IconRupee,
  IconHeadset,
  IconTruck,
  IconCheck,
} from '../components/Icons';

import photos from '../assets/photos';

import {
  SERVICES,
  STATS,
  CITIES,
} from '../siteData';

import wellpackLogo from '../assets/network/wellpack.png';
import aPackersLogo from '../assets/network/a-packers.png';

import './Home.css';

const HOME_SERVICES = SERVICES.slice(0, 5);

const ABOUT_POINTS = [
  {
    icon: <IconUsers />,
    label: 'Trained & Verified Staff',
  },
  {
    icon: <IconShield />,
    label: 'Safe & Secure Handling',
  },
  {
    icon: <IconRupee />,
    label: 'Affordable Pricing',
  },
  {
    icon: <IconClock />,
    label: 'On-Time Delivery',
  },
  {
    icon: <IconTruck />,
    label: 'Pan India Service',
  },
  {
    icon: <IconHeadset />,
    label: '24/7 Customer Support',
  },
];

const PROCESS = [
  {
    number: '01',
    title: 'Get a Quote',
    text: 'Share your moving requirements and get a quick quotation.',
  },
  {
    number: '02',
    title: 'Plan Your Move',
    text: 'Our team understands your requirements and plans everything.',
  },
  {
    number: '03',
    title: 'Pack & Move',
    text: 'Your belongings are packed carefully and moved securely.',
  },
  {
    number: '04',
    title: 'Safe Delivery',
    text: 'We deliver your belongings safely to your new destination.',
  },
];

const NETWORK_PARTNERS = [
  {
    id: 'wellpack',
    name: 'WellPack Logistics',
    logo: wellpackLogo,
    location: 'Mumbai',
    description:
      'Reliable relocation, transportation, office shifting and warehousing solutions.',
    services: ['Home Shifting', 'Office Shifting', 'Warehousing'],
  },
  {
    id: 'ap-packers',
    name: 'AP Packers & Movers',
    logo: aPackersLogo,
    location: 'Kandivali East, Mumbai',
    description:
      'Professional packing and moving support for residential and commercial relocation.',
    services: ['Home Relocation', 'Office Relocation', 'Transportation'],
  },
];

export default function Home() {
  const [quoteOpen, setQuoteOpen] = useState(false);

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
        <div className="home-hero__glow home-hero__glow--one" />
        <div className="home-hero__glow home-hero__glow--two" />

        <div className="container home-hero__grid">

          <Reveal className="home-hero__copy">

            <span className="home-hero__eyebrow">
              <span className="home-hero__eyebrow-dot" />
              Packers & Movers in Mumbai
            </span>

            <h1>
              Move Smarter,
              <br />
              <span>Live Better</span>
            </h1>

            <p className="home-hero__tagline">
              Safe. Reliable. Hassle-Free Relocation.
            </p>

            <p className="home-hero__desc">
              At Hello Packers, we make your move simple, secure and
              stress-free. From careful packing to safe delivery, your
              belongings are always handled with care.
            </p>

            <div className="home-hero__actions">

              <button
                type="button"
                className="home-btn home-btn--primary"
                onClick={openQuote}
              >
                Get a Free Quote
                <IconArrowRight />
              </button>

              <Link
                to="/services"
                className="home-btn home-btn--secondary"
              >
                Explore Services
                <IconArrowRight />
              </Link>

            </div>

            <div className="home-hero__trust">

              <div className="home-trust-item">
                <span className="home-trust-item__icon">
                  <IconShield />
                </span>
                <span>
                  <strong>Safe</strong>
                  Secure Handling
                </span>
              </div>

              <div className="home-trust-item">
                <span className="home-trust-item__icon">
                  <IconClock />
                </span>
                <span>
                  <strong>On-Time</strong>
                  Delivery
                </span>
              </div>

              <div className="home-trust-item">
                <span className="home-trust-item__icon">
                  <IconUsers />
                </span>
                <span>
                  <strong>Professional</strong>
                  Team
                </span>
              </div>

            </div>

          </Reveal>

          <Reveal
            className="home-hero__media"
            style={{ transitionDelay: '0.15s' }}
          >

            <div className="home-hero__image-wrap">

              <img
                src={photos.truckBridge}
                alt="Hello Packers truck on the move"
              />

              <div className="home-hero__image-overlay" />

              <div className="home-hero__floating-card home-hero__floating-card--top">
                <span className="floating-card__icon">
                  <IconCheck />
                </span>
                <div>
                  <strong>Trusted Moving</strong>
                  <small>Professional Service</small>
                </div>
              </div>

              <div className="home-hero__floating-card home-hero__floating-card--bottom">
                <span className="floating-card__number">500+</span>
                <div>
                  <strong>Happy Customers</strong>
                  <small>Successful relocations</small>
                </div>
              </div>

            </div>

            <div className="home-hero__stats">
              <StatBar items={STATS.slice(0, 3)} />
            </div>

          </Reveal>

        </div>
      </section>


      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section className="section home-services">

        <div className="container">

          <Reveal className="home-section-heading">

            <div>
              <span className="home-section-eyebrow">
                OUR SERVICES
              </span>

              <h2>
                Complete Moving Solutions
                <span> For Every Need</span>
              </h2>

              <p>
                From household shifting to office relocation, we take care
                of every part of your move with professionalism and care.
              </p>
            </div>

            <Link
              to="/services"
              className="home-view-link"
            >
              View All Services
              <IconArrowRight />
            </Link>

          </Reveal>


          <Reveal
            as="div"
            stagger
            className="home-services__grid"
          >

            {HOME_SERVICES.map((service, index) => (

              <Link
                to="/services"
                className="home-service-card"
                key={service.id}
              >

                <div className="home-service-card__number">
                  0{index + 1}
                </div>

                <div className="home-service-card__media">

                  <img
                    src={photos[service.img]}
                    alt={service.title}
                    loading="lazy"
                  />

                  <div className="home-service-card__media-overlay" />

                </div>

                <div className="home-service-card__body">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.summary}
                  </p>

                  <span className="home-service-card__arrow">
                    <IconArrowRight />
                  </span>

                </div>

              </Link>

            ))}

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE US
      ====================================================== */}

      <section className="section home-about">

        <div className="home-about__background" />

        <div className="container home-about__grid">

          <Reveal className="home-about__media">

            <div className="home-about__image-wrap">

              <img
                src={photos.courierDoor}
                alt="Hello Packers professional moving team"
                loading="lazy"
              />

              <div className="home-about__image-shade" />

            </div>

            <div className="home-about__badge">

              <span className="home-about__badge-icon">
                <IconCheck />
              </span>

              <div>
                <strong>Trusted</strong>
                <small>Moving Partner</small>
              </div>

            </div>

          </Reveal>


          <Reveal
            className="home-about__content"
            style={{ transitionDelay: '0.12s' }}
          >

            <span className="home-section-eyebrow">
              WHY CHOOSE HELLO PACKERS
            </span>

            <h2>
              Your Trusted
              <br />
              <span>Moving Partner</span>
            </h2>

            <p className="home-about__intro">
              At Hello Packers, we believe moving is not just about shifting
              items, but about moving lives with care. With professional
              expertise, modern equipment and a customer-first approach,
              we make your relocation journey smooth and worry-free.
            </p>

            <div className="home-about__points">

              {ABOUT_POINTS.map((point) => (

                <div
                  className="home-about__point"
                  key={point.label}
                >

                  <span className="home-about__point-icon">
                    {point.icon}
                  </span>

                  <span>
                    {point.label}
                  </span>

                </div>

              ))}

            </div>

            <Link
              to="/about"
              className="home-btn home-btn--dark"
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

      <section className="section home-process">

        <div className="container">

          <Reveal className="home-section-heading home-section-heading--center">

            <span className="home-section-eyebrow">
              HOW IT WORKS
            </span>

            <h2>
              Moving Made
              <span> Simple</span>
            </h2>

            <p>
              Four simple steps from your first enquiry to a safe delivery.
            </p>

          </Reveal>


          <Reveal
            as="div"
            stagger
            className="home-process__grid"
          >

            {PROCESS.map((step) => (

              <div
                className="home-process-card"
                key={step.number}
              >

                <div className="home-process-card__top">

                  <span className="home-process-card__number">
                    {step.number}
                  </span>

                  <span className="home-process-card__check">
                    <IconCheck />
                  </span>

                </div>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.text}
                </p>

                <div className="home-process-card__dot" />

              </div>

            ))}

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          NETWORK
      ====================================================== */}

      <section className="section home-network">

        <div className="home-network__glow" />

        <div className="container">

          <Reveal className="home-section-heading">

            <div>

              <span className="home-section-eyebrow">
                HELLO PACKERS NETWORK
              </span>

              <h2>
                Trusted Moving
                <span> Partners</span>
              </h2>

              <p>
                Connect with reliable relocation partners through the
                Hello Packers network.
              </p>

            </div>

            <Link
              to="/network"
              className="home-view-link"
            >
              View Network
              <IconArrowRight />
            </Link>

          </Reveal>


          <Reveal
            as="div"
            stagger
            className="home-network__grid"
          >

            {NETWORK_PARTNERS.map((partner) => (

              <article
                className="home-network-card"
                key={partner.id}
              >

                <div className="home-network-card__logo">

                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                  />

                </div>

                <div className="home-network-card__content">

                  <div className="home-network-card__verified">
                    <IconCheck />
                    Verified Network Partner
                  </div>

                  <h3>
                    {partner.name}
                  </h3>

                  <p className="home-network-card__location">
                    {partner.location}
                  </p>

                  <p className="home-network-card__description">
                    {partner.description}
                  </p>

                  <div className="home-network-card__services">

                    {partner.services.map((service) => (
                      <span key={service}>
                        {service}
                      </span>
                    ))}

                  </div>

                  <Link
                    to="/network"
                    className="home-network-card__button"
                  >
                    Get a Quote
                    <IconArrowRight />
                  </Link>

                </div>

              </article>

            ))}

          </Reveal>


          <Reveal className="home-network__bottom">

            <div className="home-network__bottom-icon">
              <IconUsers />
            </div>

            <div>
              <strong>
                Looking for more moving partners?
              </strong>
              <span>
                Explore the complete Hello Packers Network.
              </span>
            </div>

            <Link to="/network">
              Explore Network
              <IconArrowRight />
            </Link>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          CITIES
      ====================================================== */}

      <section className="section home-cities">

        <div className="container">

          <Reveal className="home-cities__content">

            <div>

              <span className="home-section-eyebrow">
                WHERE WE OPERATE
              </span>

              <h2>
                Serving Mumbai
                <span> & Beyond</span>
              </h2>

              <p>
                Based in Mumbai, Hello Packers provides reliable moving
                solutions across major cities and destinations.
              </p>

            </div>

            <Link
              to="/contact"
              className="home-btn home-btn--primary"
            >
              Plan Your Move
              <IconArrowRight />
            </Link>

          </Reveal>


          <Reveal
            as="div"
            stagger
            className="home-cities__list"
          >

            {CITIES.map((city) => (

              <div
                className="home-city"
                key={city}
              >

                <span className="home-city__icon">
                  <IconCheck />
                </span>

                <span>
                  {city}
                </span>

              </div>

            ))}

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <FinalCTA />


      {/* =====================================================
          QUOTE POPUP
      ====================================================== */}

      <QuotePopup
        isOpen={quoteOpen}
        onClose={closeQuote}
      />

    </>
  );
}