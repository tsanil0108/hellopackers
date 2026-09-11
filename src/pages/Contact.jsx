import { useState } from 'react';

import Reveal from '../components/Reveal';
import PageHero from '../components/PageHero';
import QuotePopup from '../components/QuotePopup';

import {
  IconPhone,
  IconMail,
  IconPin,
  IconClock,
  IconUsers,
  IconShield,
  IconHeadset,
  IconRupee,
  IconArrowRight,
} from '../components/Icons';

import photos from '../assets/photos';
import { CONTACT } from '../siteData';

import './Contact.css';

const INITIAL_FORM = {
  name: '',
  phone: '',
  email: '',
  from: '',
  to: '',
  homeSize: '',
  service: '',
  date: '',
  notes: '',
};

const WHY_US = [
  {
    icon: <IconUsers />,
    title: 'Personalized Solutions',
    text: 'Tailored to your needs',
  },
  {
    icon: <IconRupee />,
    title: 'Transparent Pricing',
    text: 'No hidden charges',
  },
  {
    icon: <IconHeadset />,
    title: 'Expert Guidance',
    text: 'From start to finish',
  },
  {
    icon: <IconShield />,
    title: 'Dedicated Support',
    text: 'Always here for you',
  },
];

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [sent, setSent] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  const update = (field) => (event) => {
    setForm((current) => ({
      ...current,
      [field]: event.target.value,
    }));

    if (sent) {
      setSent(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Quote Request — ${form.name || 'New Enquiry'}`
    );

    const body = encodeURIComponent(
      `HELLO PACKERS — QUOTE REQUEST\n\n` +
        `Name: ${form.name}\n` +
        `Phone: ${form.phone}\n` +
        `Email: ${form.email}\n` +
        `Moving From: ${form.from}\n` +
        `Moving To: ${form.to}\n` +
        `Home Size: ${form.homeSize || 'N/A'}\n` +
        `Service Required: ${form.service}\n` +
        `Preferred Date: ${form.date}\n\n` +
        `Additional Details:\n${form.notes || 'N/A'}\n\n` +
        `Sent from Hello Packers website.`
    );

    window.location.href =
      `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;

    setSent(true);
  };

  return (
    <div className="contact-page">
      {/* =====================================================
          PAGE HERO
      ====================================================== */}

      <PageHero
        crumb="Contact"
        eyebrow="Get In Touch"
        titleWhite="We're Here to Make Your"
        titleCyan="Move Easier"
        description="Have questions? Need a quote? Our team is just a call or message away. We're happy to help you with your moving needs."
        trustItems={[
          {
            icon: <IconPhone />,
            label: 'Quick Response',
          },
          {
            icon: <IconShield />,
            label: 'Reliable Support',
          },
          {
            icon: <IconUsers />,
            label: 'Friendly Team',
          },
          {
            icon: <IconHeadset />,
            label: '24/7 Assistance',
          },
        ]}
        image={photos.courierBoxFront}
        imageAlt="Hello Packers support team"
        script={
          <>
            Your Move
            <br />
            Our Priority
          </>
        }
        primaryCta={
          <button
            type="button"
            onClick={() => setQuoteOpen(true)}
            className="btn btn-primary"
          >
            Get a Quote
          </button>
        }
      />

      {/* =====================================================
          CONTACT SECTION
      ====================================================== */}

      <section className="section contact-section">
        <div className="container contact-layout">
          {/* =================================================
              CONTACT FORM
          ================================================= */}

          <Reveal
            as="form"
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <span className="eyebrow">Send Us a Message</span>

            <h2>
              Request a Free <span className="text-cyan-dark">Quote</span>
            </h2>

            <p className="contact-form__intro">
              Fill in the details below and our team will get back to you
              shortly with the best solution for your move.
            </p>

            {/* NAME + PHONE */}

            <div className="contact-form__row">
              <label>
                <span>Full Name *</span>

                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Your name"
                  autoComplete="name"
                />
              </label>

              <label>
                <span>Phone Number *</span>

                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={update('phone')}
                  placeholder="10-digit mobile number"
                  autoComplete="tel"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  maxLength="10"
                />
              </label>
            </div>

            {/* EMAIL */}

            <label>
              <span>Email Address *</span>

              <input
                type="email"
                required
                value={form.email}
                onChange={update('email')}
                placeholder="Enter your email address"
                autoComplete="email"
              />
            </label>

            {/* HOME SIZE + SERVICE */}

            <div className="contact-form__row">
              <label>
                <span>Home Size (BHK) *</span>

                <select
                  required
                  value={form.homeSize}
                  onChange={update('homeSize')}
                >
                  <option value="" disabled>
                    Select home size
                  </option>

                  <option value="1 RK">1 RK</option>
                  <option value="1 BHK">1 BHK</option>
                  <option value="2 BHK">2 BHK</option>
                  <option value="3 BHK">3 BHK</option>
                  <option value="4+ BHK">4+ BHK</option>
                  <option value="Office / Commercial">
                    Office / Commercial
                  </option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label>
                <span>Service Required *</span>

                <select
                  required
                  value={form.service}
                  onChange={update('service')}
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="Home Relocation">
                    Home Relocation
                  </option>

                  <option value="Office Relocation">
                    Office Relocation
                  </option>

                  <option value="Vehicle Transportation">
                    Vehicle Transportation
                  </option>

                  <option value="Packing & Unpacking">
                    Packing &amp; Unpacking
                  </option>

                  <option value="Storage & Warehousing">
                    Storage &amp; Warehousing
                  </option>

                  <option value="Other">Other</option>
                </select>
              </label>
            </div>

            {/* FROM + TO */}

            <div className="contact-form__row">
              <label>
                <span>Moving From *</span>

                <input
                  type="text"
                  required
                  value={form.from}
                  onChange={update('from')}
                  placeholder="Current address / area"
                />
              </label>

              <label>
                <span>Moving To *</span>

                <input
                  type="text"
                  required
                  value={form.to}
                  onChange={update('to')}
                  placeholder="New address / area"
                />
              </label>
            </div>

            {/* DATE */}

            <label>
              <span>Moving Date *</span>

              <input
                type="date"
                required
                value={form.date}
                onChange={update('date')}
              />
            </label>

            {/* NOTES */}

            <label>
              <span>
                Additional Message
                <small> Optional</small>
              </span>

              <textarea
                rows="4"
                value={form.notes}
                onChange={update('notes')}
                placeholder="Home size, vehicle to move, storage needs, floor and lift access..."
              />
            </label>

            {/* SUBMIT */}

            <button
              type="submit"
              className="btn btn-primary contact-form__submit"
            >
              Send Request
              <IconArrowRight />
            </button>

            {sent && (
              <p className="contact-form__sent">
                Your email app should now open with the details filled in.
                Please press Send to complete your enquiry.
              </p>
            )}
          </Reveal>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <Reveal
            className="contact-side"
            style={{
              transitionDelay: '0.1s',
            }}
          >
            {/* CONTACT INFORMATION */}

            <div className="contact-info-card">
              <div className="contact-info-card__header">
                <span className="eyebrow">Contact Information</span>

                <h3>
                  Let's Talk About Your{' '}
                  <span className="text-cyan-dark">Move</span>
                </h3>

                <p>
                  Our team is ready to answer your questions and help plan
                  your relocation.
                </p>
              </div>

              <ul>
                <li>
                  <span className="contact-info-icon">
                    <IconPhone />
                  </span>

                  <div>
                    <h4>Call Us</h4>

                    <a href={`tel:${CONTACT.phone}`}>
                      {CONTACT.phoneDisplay}
                    </a>
                  </div>
                </li>

                <li>
                  <span className="contact-info-icon">
                    <IconMail />
                  </span>

                  <div>
                    <h4>Email Us</h4>

                    <a href={`mailto:${CONTACT.email}`}>
                      {CONTACT.email}
                    </a>
                  </div>
                </li>

                <li>
                  <span className="contact-info-icon">
                    <IconPin />
                  </span>

                  <div>
                    <h4>Visit Us</h4>

                    <span>
                      Kandivali East, Mumbai
                    </span>
                  </div>
                </li>

                <li>
                  <span className="contact-info-icon">
                    <IconClock />
                  </span>

                  <div>
                    <h4>Working Hours</h4>

                    <span>
                      Mon – Sun | 24/7 Support
                    </span>
                  </div>
                </li>
              </ul>

              <div className="contact-info-card__bottom">
                <span>Need an instant quote?</span>

                <button
                  type="button"
                  onClick={() => setQuoteOpen(true)}
                  className="contact-info-card__link"
                >
                  Get Started
                  <IconArrowRight />
                </button>
              </div>
            </div>

            {/* QUICK ACTION CARD */}

            <div className="contact-action-card">
              <div className="contact-action-card__icon">
                <IconHeadset />
              </div>

              <div className="contact-action-card__content">
                <span className="eyebrow">
                  We're Here For You
                </span>

                <h3>
                  Need Help With Your{' '}
                  <span className="text-cyan-dark">Move?</span>
                </h3>

                <p>
                  Talk to our team and get guidance for your relocation
                  requirements.
                </p>

                <div className="contact-action-card__buttons">
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="btn btn-primary"
                  >
                    <IconPhone />
                    Call Now
                  </a>

                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="btn btn-outline"
                  >
                    <IconMail />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          WHY US
      ====================================================== */}

      <section className="section section--raised contact-why">
        <div className="container">
          <div className="services-head contact-why__head">
            <span className="eyebrow">Why Get in Touch</span>

            <h2>
              Why Get in Touch With <span className="text-cyan-dark">Us?</span>
            </h2>

            <p>
              From your first enquiry to the final delivery, our team is
              focused on making your move simple and stress-free.
            </p>
          </div>

          <Reveal
            as="div"
            stagger
            className="trust-strip"
          >
            {WHY_US.map((item) => (
              <div
                key={item.title}
                className="trust-strip__item"
              >
                <span className="trust-strip__icon">
                  {item.icon}
                </span>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          QUOTE POPUP
      ====================================================== */}

      <QuotePopup
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
      />
    </div>
  );
}