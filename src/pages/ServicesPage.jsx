import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import PageHero from '../components/PageHero';
import FinalCTA from '../components/FinalCTA';
import { IconShield, IconClock, IconUsers, IconRupee, IconArrowRight, IconBox, IconTruck } from '../components/Icons';
import photos from '../assets/photos';
import { SERVICES } from '../siteData';
import './ServicesPage.css';

const TRUST_STRIP = [
  { icon: <IconShield />, title: 'Insured Services', text: 'Your goods are protected' },
  { icon: <IconRupee />, title: 'Transparent Pricing', text: 'No hidden charges' },
  { icon: <IconUsers />, title: 'Experienced Team', text: 'Trained and verified staff' },
  { icon: <IconClock />, title: 'On-Time Delivery', text: 'We value your time' },
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
    <>
      <PageHero
        crumb="Services"
        eyebrow="What We Offer"
        titleWhite="Our"
        titleCyan="Services"
        description="From homes to businesses, local to long-distance — Hello Packers makes every move simple, safe and stress-free."
        trustItems={[
          { icon: <IconShield />, label: 'Safe & Secure Handling' },
          { icon: <IconClock />, label: 'On-Time Delivery' },
          { icon: <IconUsers />, label: 'Trained Professionals' },
        ]}
        image={photos.loading}
        imageAlt="Hello Packers crew loading a truck"
        script={<>Move Smart<br />Live Better</>}
        primaryCta={<Link to="/contact" className="btn btn-primary">Get a Quote</Link>}
      />

      <section className="section">
        <div className="container">
          <div className="services-head">
            <span className="eyebrow">What We Offer</span>
            <h2>Our Moving Services</h2>
            <p>Reliable. Flexible. Affordable. Tailored for you.</p>
          </div>

          <Reveal as="div" stagger className="services-grid">
            {SERVICES.map((s) => (
              <div key={s.id} className="services-grid__card">
                <div className="services-grid__media">
                  <img src={photos[s.img]} alt={s.title} loading="lazy" />
                  <span className="icon-badge services-grid__icon">{SERVICE_ICONS[s.id]}</span>
                </div>
                <div className="services-grid__body">
                  <h3>{s.title}</h3>
                  <p>{s.summary}</p>
                  <Link to="/contact" className="services-grid__link">
                    Learn More <IconArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal as="div" stagger className="trust-strip">
            {TRUST_STRIP.map((t) => (
              <div key={t.title} className="trust-strip__item">
                <span className="icon-badge">{t.icon}</span>
                <div>
                  <h4>{t.title}</h4>
                  <p>{t.text}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <FinalCTA
        titleWhite="Ready to Move?"
        titleCyan="Get a Free Quote Today!"
        text="Tell us your requirements and our team will get back to you shortly."
        image={photos.truckBridge}
      />
    </>
  );
}
