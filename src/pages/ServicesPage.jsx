import { Link } from 'react-router-dom';

import Reveal from '../components/Reveal';
import PageHero from '../components/PageHero';
import FinalCTA from '../components/FinalCTA';

import {
  IconShield,
  IconClock,
  IconUsers,
  IconRupee,
  IconArrowRight,
  IconBox,
  IconTruck,
  IconCheck,
} from '../components/Icons';

import photos from '../assets/photos';
import { SERVICES } from '../siteData';

import './ServicesPage.css';


const TRUST_STRIP = [
  {
    icon: <IconShield />,
    title: 'Insured Services',
    text: 'Your goods are protected',
  },
  {
    icon: <IconRupee />,
    title: 'Transparent Pricing',
    text: 'No hidden charges',
  },
  {
    icon: <IconUsers />,
    title: 'Experienced Team',
    text: 'Trained and verified staff',
  },
  {
    icon: <IconClock />,
    title: 'On-Time Delivery',
    text: 'We value your time',
  },
];


const SERVICE_ICONS = {
  home: <IconShield />,
  office: <IconUsers />,
  vehicle: <IconTruck />,
  packing: <IconBox />,
  storage: <IconBox />,
  furniture: <IconShield />,
  fragile: <IconBox />,
  interstate: <IconTruck />,
};


export default function ServicesPage() {
  return (
    <div className="services-page">

      {/* HERO */}

      <PageHero
        crumb="Services"
        eyebrow="WHAT WE OFFER"
        titleWhite="Our"
        titleCyan="Services"
        description="From homes to businesses, local to long-distance — Hello Packers makes every move simple, safe and stress-free."
        trustItems={[
          {
            icon: <IconShield />,
            label: 'Safe & Secure Handling',
          },
          {
            icon: <IconClock />,
            label: 'On-Time Delivery',
          },
          {
            icon: <IconUsers />,
            label: 'Trained Professionals',
          },
        ]}
        image={photos.loading}
        imageAlt="Hello Packers crew loading a truck"
        script={
          <>
            Move Smart
            <br />
            Live Better
          </>
        }
        primaryCta={
          <Link
            to="/contact"
            className="services-hero-btn"
          >
            Get a Quote
            <IconArrowRight />
          </Link>
        }
      />


      {/* SERVICES */}

      <section className="services-main">

        <div className="services-bg-orb services-bg-orb--one" />
        <div className="services-bg-orb services-bg-orb--two" />

        <div className="services-bg-dot services-bg-dot--one" />
        <div className="services-bg-dot services-bg-dot--two" />

        <div className="container">

          <Reveal className="services-head">

            <span className="services-eyebrow">
              <span className="services-eyebrow__dot" />
              OUR MOVING SOLUTIONS
            </span>

            <h2>
              Everything You Need
              <br />
              <span>For a Smooth Move</span>
            </h2>

            <p>
              Whether you're shifting your home, office, vehicle or
              valuable belongings, our professional team takes care
              of every step with attention and care.
            </p>

          </Reveal>


          <Reveal
            as="div"
            stagger
            className="services-grid"
          >

            {SERVICES.map((service, index) => (

              <article
                key={service.id}
                className="services-card"
              >

                <div className="services-card__image">

                  <img
                    src={photos[service.img]}
                    alt={service.title}
                    loading="lazy"
                  />

                  <div className="services-card__image-overlay" />

                  <span className="services-card__number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                </div>


                <div className="services-card__body">

                  <div className="services-card__top">

                    <span className="services-card__mini-icon">
                      {SERVICE_ICONS[service.id]}
                    </span>

                    <span className="services-card__category">
                      HELLO PACKERS
                    </span>

                  </div>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.summary}
                  </p>

                  <Link
                    to="/contact"
                    className="services-card__link"
                  >
                    <span>Get a Quote</span>

                    <span className="services-card__link-icon">
                      <IconArrowRight />
                    </span>
                  </Link>

                </div>

              </article>

            ))}

          </Reveal>


          {/* TRUST */}

          <Reveal
            as="div"
            stagger
            className="services-trust"
          >

            {TRUST_STRIP.map((item) => (

              <div
                className="services-trust__item"
                key={item.title}
              >

                <span className="services-trust__icon">
                  {item.icon}
                </span>

                <div className="services-trust__content">

                  <h4>
                    {item.title}
                  </h4>

                  <p>
                    {item.text}
                  </p>

                </div>

                <span className="services-trust__check">
                  <IconCheck />
                </span>

              </div>

            ))}

          </Reveal>


          {/* HELP CTA */}

          <Reveal className="services-bottom">

            <div className="services-bottom__content">

              <span className="services-bottom__eyebrow">
                NEED HELP CHOOSING?
              </span>

              <h3>
                Not sure which service
                <span> you need?</span>
              </h3>

              <p>
                Tell us about your move and our team will help you
                choose the right solution for your requirements.
              </p>

            </div>

            <Link
              to="/contact"
              className="services-bottom__button"
            >
              Talk to Our Team
              <IconArrowRight />
            </Link>

          </Reveal>

        </div>

      </section>


      <FinalCTA
        titleWhite="Ready to Move?"
        titleCyan="Get a Free Quote Today!"
        text="Tell us your requirements and our team will get back to you shortly."
        image={photos.truckBridge}
      />

    </div>
  );
}