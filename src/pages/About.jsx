import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import PageHero from '../components/PageHero';
import StatBar from '../components/StatBar';
import FinalCTA from '../components/FinalCTA';
import { IconUsers, IconShield, IconClock, IconHandshake, IconHeadset, IconTrend, IconCheck, IconArrowRight } from '../components/Icons';
import photos from '../assets/photos';
import { STATS, VALUES, CONTACT } from '../siteData';
import './About.css';

const STORY_POINTS = [
  { icon: <IconUsers />, label: 'Experienced Professionals' },
  { icon: <IconShield />, label: 'Safe & Secure Handling' },
  { icon: <IconClock />, label: 'On-Time Delivery' },
  { icon: <IconHandshake />, label: 'Customer First Approach' },
];

const TEAM_TAGS = ['Trained Staff', 'Verified', 'Passionate'];

const VALUE_ICONS = [<IconShield />, <IconHandshake />, <IconUsers />, <IconTrend />];

export default function About() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="Get to Know Us"
        titleWhite="About"
        titleCyan="Hello Packers"
        description="Moving is more than just shifting items, it's about moving lives. At Hello Packers, we make every move simple, safe and worry-free."
        image={photos.courierDoor}
        imageAlt="Hello Packers crew member carrying a box"
        script={<>Moving Towards<br />a Better Tomorrow</>}
        primaryCta={<Link to="/contact" className="btn btn-primary">Get a Quote</Link>}
      />

      <section className="section">
        <div className="container about-story">
          <Reveal className="about-story__media">
            <img src={photos.taping} alt="Hello Packers crew member packing a box" />
          </Reveal>
          <Reveal className="about-story__copy" style={{ transitionDelay: '0.1s' }}>
            <span className="eyebrow">Our Story</span>
            <h2>Built on Trust, <span className="text-cyan-dark">Driven by Care</span></h2>
            <p>
              Hello Packers was founded with a simple vision — to make relocation
              stress-free for everyone. What started as a small team with a big
              passion for helping people has now grown into a trusted moving
              partner for hundreds of happy customers across cities.
            </p>
            <ul className="about-story__points">
              {STORY_POINTS.map((p) => (
                <li key={p.label}><span className="icon-badge">{p.icon}</span>{p.label}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="container">
          <StatBar items={STATS} bordered />
        </div>
      </section>

      <section className="section section--raised">
        <div className="container about-team">
          <Reveal className="about-team__copy">
            <span className="eyebrow">Our Team</span>
            <h2>People Behind <span className="text-cyan-dark">Your Smooth Move</span></h2>
            <p>
              Our team is the backbone of Hello Packers. Trained, verified and
              dedicated professionals who handle your belongings with the utmost
              care and responsibility.
            </p>
            <ul className="about-team__tags">
              {TEAM_TAGS.map((t) => <li key={t}><IconCheck /> {t}</li>)}
            </ul>
            <Link to="/contact" className="btn btn-primary">Meet Our Team <IconArrowRight /></Link>
          </Reveal>
          <Reveal className="about-team__media" style={{ transitionDelay: '0.1s' }}>
            <img src={photos.team4} alt="Hello Packers team" />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-head">
            <span className="eyebrow">Our Values</span>
            <h2>What Drives Us</h2>
          </div>
          <Reveal as="div" stagger className="values-grid">
            {VALUES.map((v, i) => (
              <div key={v.title} className="values-grid__card">
                <span className="icon-badge">{VALUE_ICONS[i]}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <FinalCTA
        image={photos.sunsetRoad}
        text="Get in touch today and experience a smoother, safer move."
      />
    </>
  );
}
