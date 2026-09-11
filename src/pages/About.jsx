import { Link } from 'react-router-dom';

import Reveal from '../components/Reveal';
import PageHero from '../components/PageHero';
import StatBar from '../components/StatBar';
import FinalCTA from '../components/FinalCTA';

import {
  IconUsers,
  IconShield,
  IconClock,
  IconHandshake,
  IconTrend,
  IconCheck,
  IconArrowRight,
} from '../components/Icons';

import photos from '../assets/photos';

import { STATS, VALUES } from '../siteData';

import './About.css';


const STORY_POINTS = [
  {
    icon: <IconUsers />,
    label: 'Experienced Professionals',
  },
  {
    icon: <IconShield />,
    label: 'Safe & Secure Handling',
  },
  {
    icon: <IconClock />,
    label: 'On-Time Delivery',
  },
  {
    icon: <IconHandshake />,
    label: 'Customer First Approach',
  },
];


const TEAM_TAGS = [
  'Trained Staff',
  'Verified',
  'Passionate',
];


const VALUE_ICONS = [
  <IconShield />,
  <IconHandshake />,
  <IconUsers />,
  <IconTrend />,
];


export default function About() {
  return (
    <div className="about-page">

      {/* =====================================================
          HERO
      ====================================================== */}

      <PageHero
        crumb="About"
        eyebrow="GET TO KNOW US"
        titleWhite="About"
        titleCyan="Hello Packers"
        description="Moving is more than just shifting items, it's about moving lives. At Hello Packers, we make every move simple, safe and worry-free."
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
        image={photos.courierDoor}
        imageAlt="Hello Packers crew member carrying a box"
        script={
          <>
            Moving Towards
            <br />
            a Better Tomorrow
          </>
        }
        primaryCta={
          <Link
            to="/contact"
            className="about-hero-btn"
          >
            Get a Quote
            <IconArrowRight />
          </Link>
        }
      />


      {/* =====================================================
          OUR STORY
      ====================================================== */}

      <section className="about-story-section">

        <div className="about-bg-orb about-bg-orb--one" />
        <div className="about-bg-orb about-bg-orb--two" />

        <div className="container">

          <div className="about-story">

            <Reveal className="about-story__media">

              <div className="about-image-card">

                <img
                  src={photos.taping}
                  alt="Hello Packers crew member packing a box"
                  loading="lazy"
                />

                <div className="about-image-card__overlay" />

                <div className="about-image-card__badge">

                  <strong>
                    500+
                  </strong>

                  <span>
                    Happy Customers
                  </span>

                </div>

              </div>

            </Reveal>


            <Reveal
              className="about-story__copy"
              style={{ transitionDelay: '0.12s' }}
            >

              <span className="about-eyebrow">
                <span className="about-eyebrow__dot" />
                OUR STORY
              </span>

              <h2>
                Built on Trust,
                <span> Driven by Care</span>
              </h2>

              <p>
                Hello Packers was founded with a simple vision —
                to make relocation stress-free for everyone.
                What started as a small team with a big passion
                for helping people has now grown into a trusted
                moving partner for hundreds of happy customers
                across cities.
              </p>


              <div className="about-story__points">

                {STORY_POINTS.map((point) => (

                  <div
                    className="about-story__point"
                    key={point.label}
                  >

                    <span className="about-story__point-icon">
                      {point.icon}
                    </span>

                    <span>
                      {point.label}
                    </span>

                  </div>

                ))}

              </div>

            </Reveal>

          </div>


          {/* =================================================
              STATS
          ================================================== */}

          <Reveal className="about-stats">

            <StatBar
              items={STATS}
              bordered={false}
            />

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          TEAM
      ====================================================== */}

      <section className="about-team-section">

        <div className="about-team-bg" />

        <div className="container">

          <div className="about-team">

            <Reveal className="about-team__copy">

              <span className="about-eyebrow">
                <span className="about-eyebrow__dot" />
                OUR TEAM
              </span>

              <h2>
                People Behind
                <span> Your Smooth Move</span>
              </h2>

              <p>
                Our team is the backbone of Hello Packers.
                Trained, verified and dedicated professionals
                who handle your belongings with the utmost care
                and responsibility.
              </p>


              <ul className="about-team__tags">

                {TEAM_TAGS.map((tag) => (

                  <li key={tag}>
                    <IconCheck />
                    {tag}
                  </li>

                ))}

              </ul>


              <Link
                to="/contact"
                className="about-team__button"
              >
                Talk to Our Team
                <IconArrowRight />
              </Link>

            </Reveal>


            <Reveal
              className="about-team__media"
              style={{ transitionDelay: '0.12s' }}
            >

              <div className="about-team-image">

                <img
                  src={photos.team4}
                  alt="Hello Packers team"
                  loading="lazy"
                />

                <div className="about-team-image__glow" />

                <div className="about-team-image__badge">

                  <span className="about-team-image__badge-dot" />

                  <div>
                    <strong>
                      Professional Team
                    </strong>

                    <small>
                      Trained & Verified
                    </small>
                  </div>

                </div>

              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          VALUES
      ====================================================== */}

      <section className="about-values-section">

        <div className="container">

          <Reveal className="about-values-head">

            <span className="about-eyebrow">
              <span className="about-eyebrow__dot" />
              OUR VALUES
            </span>

            <h2>
              What <span>Drives Us</span>
            </h2>

            <p>
              The principles that guide every move we make
              and every customer we serve.
            </p>

          </Reveal>


          <Reveal
            as="div"
            stagger
            className="values-grid"
          >

            {VALUES.map((value, index) => (

              <article
                key={value.title}
                className="values-card"
              >

                <div className="values-card__top">

                  <span className="values-card__icon">
                    {VALUE_ICONS[index]}
                  </span>

                  <span className="values-card__number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                </div>

                <h3>
                  {value.title}
                </h3>

                <p>
                  {value.text}
                </p>

                <span className="values-card__arrow">
                  <IconArrowRight />
                </span>

              </article>

            ))}

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <FinalCTA
        image={photos.sunsetRoad}
        text="Get in touch today and experience a smoother, safer move."
      />

    </div>
  );
}