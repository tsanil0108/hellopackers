import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import PageHero from '../components/PageHero';
import ProcessSteps from '../components/ProcessSteps';
import FAQAccordion from '../components/FAQAccordion';
import FinalCTA from '../components/FinalCTA';
import { IconShield, IconDoc, IconUsers, IconHeadset, IconArrowRight, IconPhone, IconMail } from '../components/Icons';
import photos from '../assets/photos';
import { FAQS, CONTACT } from '../siteData';
import './Information.css';

const EXPLORE = [
  { title: 'Moving Checklist', text: 'A step-by-step guide to stay organized.', img: 'checklist' },
  { title: 'Packing Tips', text: 'Expert tips to keep your belongings safe.', img: 'vase' },
  { title: 'Moving Guide', text: 'Everything you need to know before you move.', img: 'livingRoom' },
  { title: 'Insurance Information', text: 'Know how your goods stay protected.', img: 'documents' },
  { title: 'Service Areas', text: 'Check the cities we serve.', img: 'indiamap' },
];

const PROCESS = [
  { n: '01', title: 'Get a Quote', text: 'Share your requirements with us.' },
  { n: '02', title: 'Plan Your Move', text: 'We schedule as per your convenience.' },
  { n: '03', title: 'Pack & Move', text: 'Our experts handle everything with care.' },
  { n: '04', title: 'Transport Safely', text: 'Your belongings reach on time.' },
  { n: '05', title: 'Settle In', text: 'Unpack and start your new journey.' },
];

const RESOURCES = [
  { title: 'Before You Move', text: 'Essential things to do before moving day.', img: 'house' },
  { title: 'Packing Essentials', text: 'List of items and materials you\u2019ll need.', img: 'livingRoom2' },
  { title: 'During the Move', text: 'Tips for a smooth moving day.', img: 'truckSunset' },
];

export default function Information() {
  return (
    <>
      <PageHero
        crumb="Information"
        eyebrow="Everything You Need to Know"
        titleWhite="Information"
        description="Everything you need to know for a smooth, safe and stress-free move."
        trustItems={[
          { icon: <IconShield />, label: 'Trusted Guidance' },
          { icon: <IconDoc />, label: 'Helpful Resources' },
          { icon: <IconUsers />, label: 'Moving Made Simple' },
          { icon: <IconHeadset />, label: 'Support At Every Step' },
        ]}
        image={photos.checklist}
        imageAlt="Hello Packers crew member with a moving checklist"
        script={<>Knowledge for<br />a Better Move</>}
      />

      <section className="section">
        <div className="container">
          <div className="services-head" style={{ margin: '0 0 40px' }}>
            <span className="eyebrow">Explore</span>
            <h2>Explore Useful Information</h2>
            <p>Get answers, tips and guidelines to make your relocation hassle-free.</p>
          </div>

          <Reveal as="div" stagger className="explore-grid">
            {EXPLORE.map((e) => (
              <div key={e.title} className="explore-card">
                <div className="explore-card__media">
                  <img src={photos[e.img]} alt={e.title} loading="lazy" />
                </div>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
                <span className="arrow-link explore-card__arrow"><IconArrowRight /></span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--raised">
        <div className="container info-process">
          <div className="info-process__steps">
            <span className="eyebrow">Our Process</span>
            <h2>Our Moving Process</h2>
            <p className="info-process__intro">A simple and transparent process for your peace of mind.</p>
            <ProcessSteps steps={PROCESS} />
          </div>
          <Reveal className="info-process__card" style={{ transitionDelay: '0.15s' }}>
            <img src={photos.courierBoxFront} alt="Hello Packers crew member" />
            <div className="info-process__card-body">
              <h4>Still Have Questions?</h4>
              <p>We're here to help you with any information you need.</p>
              <Link to="/contact" className="btn btn-primary">Contact Us <IconArrowRight /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section info-faq">
        <div className="container info-faq__grid">
          <div>
            <span className="eyebrow">FAQs</span>
            <h2>Frequently Asked Questions</h2>
            <p className="info-faq__intro">Find quick answers to common queries about our services.</p>
            <FAQAccordion items={FAQS} />
          </div>

          <div>
            <span className="eyebrow">Resources</span>
            <h2>Helpful Resources</h2>
            <p className="info-faq__intro">Useful guides for a better moving experience.</p>
            <div className="resource-list">
              {RESOURCES.map((r) => (
                <div key={r.title} className="resource-card">
                  <img src={photos[r.img]} alt={r.title} loading="lazy" />
                  <div>
                    <h4>{r.title}</h4>
                    <p>{r.text}</p>
                    <span className="resource-card__link">Read More <IconArrowRight /></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta final-cta--plain">
        <Reveal className="container final-cta__inner">
          <div>
            <h2>Got More Questions? <span className="text-cyan">We're Just a Call Away!</span></h2>
            <p>Our team is ready to provide you with the right information and support for your move.</p>
          </div>
          <div className="info-cta__actions">
            <a href={`tel:${CONTACT.phone}`} className="btn btn-primary"><IconPhone /> {CONTACT.phoneDisplay}</a>
            <a href={`mailto:${CONTACT.email}`} className="btn btn-outline-dark"><IconMail /> {CONTACT.email}</a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
