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
  IconArrowRight
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
  service: '',
  date: '',
  notes: ''
};


const WHY_US = [
  {
    icon: <IconUsers />,
    title: 'Personalized Solutions',
    text: 'Tailored to your needs'
  },
  {
    icon: <IconRupee />,
    title: 'Transparent Pricing',
    text: 'No hidden charges'
  },
  {
    icon: <IconHeadset />,
    title: 'Expert Guidance',
    text: 'From start to finish'
  },
  {
    icon: <IconShield />,
    title: 'Dedicated Support',
    text: 'Always here for you'
  }
];


export default function Contact() {

  const [form, setForm] = useState(INITIAL_FORM);

  const [sent, setSent] = useState(false);

  const [quoteOpen, setQuoteOpen] = useState(false);


  const update = (field) => (event) => {

    setForm((current) => ({
      ...current,
      [field]: event.target.value
    }));

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
    <>
      {/* =====================================================
          PAGE HERO
      ====================================================== */}

      <PageHero
        eyebrow="Get In Touch"
        titleWhite="We're Here to Make Your"
        titleCyan="Move Easier"
        description="Have questions? Need a quote? Our team is just a call or message away. We're happy to help you with your moving needs."
        trustItems={[
          {
            icon: <IconPhone />,
            label: 'Quick Response'
          },
          {
            icon: <IconShield />,
            label: 'Reliable Support'
          },
          {
            icon: <IconUsers />,
            label: 'Friendly Team'
          },
          {
            icon: <IconHeadset />,
            label: '24/7 Assistance'
          }
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
      />


      {/* =====================================================
          CONTACT SECTION
      ====================================================== */}

      <section className="section">

        <div className="container contact-layout">


          {/* =================================================
              CONTACT FORM
          ================================================= */}

          <Reveal
            as="form"
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <span className="eyebrow">
              Send Us a Message
            </span>

            <h2>
              Request a Free Quote
            </h2>

            <p className="contact-form__intro">
              Fill in the details below and our team will
              get back to you shortly with the best solution
              for your move.
            </p>


            {/* NAME + PHONE */}

            <div className="contact-form__row">

              <label>
                <span>
                  Full Name *
                </span>

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
                <span>
                  Phone Number *
                </span>

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
              <span>
                Email Address *
              </span>

              <input
                type="email"
                required
                value={form.email}
                onChange={update('email')}
                placeholder="you@example.com"
                autoComplete="email"
              />
            </label>


            {/* SERVICE */}

            <label>
              <span>
                Service Required *
              </span>

              <select
                required
                value={form.service}
                onChange={update('service')}
              >

                <option
                  value=""
                  disabled
                >
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

                <option value="Other">
                  Other
                </option>

              </select>
            </label>


            {/* FROM + TO */}

            <div className="contact-form__row">

              <label>
                <span>
                  Moving From *
                </span>

                <input
                  type="text"
                  required
                  value={form.from}
                  onChange={update('from')}
                  placeholder="Current address / area"
                />
              </label>


              <label>
                <span>
                  Moving To *
                </span>

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
              <span>
                Moving Date *
              </span>

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
                <small>
                  {' '}Optional
                </small>
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
                Your email app should now open with the
                details filled in. Please press Send to
                complete your enquiry.
              </p>
            )}

          </Reveal>


          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <Reveal
            className="contact-side"
            style={{
              transitionDelay: '0.1s'
            }}
          >

            <div className="contact-info-card">

              <span className="eyebrow eyebrow--light">
                Contact Information
              </span>


              <ul>

                <li>

                  <span className="icon-badge">
                    <IconPhone />
                  </span>

                  <div>
                    <h4>
                      Call Us
                    </h4>

                    <a
                      href={`tel:${CONTACT.phone}`}
                    >
                      {CONTACT.phoneDisplay}
                    </a>
                  </div>

                </li>


                <li>

                  <span className="icon-badge">
                    <IconMail />
                  </span>

                  <div>
                    <h4>
                      Email Us
                    </h4>

                    <a
                      href={`mailto:${CONTACT.email}`}
                    >
                      {CONTACT.email}
                    </a>
                  </div>

                </li>


                <li>

                  <span className="icon-badge">
                    <IconPin />
                  </span>

                  <div>
                    <h4>
                      Visit Us
                    </h4>

                    <span>
                      Mumbai, Maharashtra
                    </span>
                  </div>

                </li>


                <li>

                  <span className="icon-badge">
                    <IconClock />
                  </span>

                  <div>
                    <h4>
                      Working Hours
                    </h4>

                    <span>
                      Mon – Sun | 24/7 Support
                    </span>
                  </div>

                </li>

              </ul>


              <img
                src={photos.courierDoor}
                alt="Hello Packers office"
                className="contact-info-card__photo"
              />

            </div>


            {/* MAP */}

            <div className="map-card">

              <span className="eyebrow">
                Our Location
              </span>

              <div className="map-card__box">

                <svg
                  viewBox="0 0 400 220"
                  className="map-card__svg"
                  preserveAspectRatio="none"
                >

                  <rect
                    width="400"
                    height="220"
                    fill="#0f2451"
                  />

                  <path
                    d="M0 40 H400 M0 90 H400 M0 140 H400 M0 190 H400"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="1"
                  />

                  <path
                    d="M40 0 V220 M120 0 V220 M200 0 V220 M280 0 V220 M360 0 V220"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="1"
                  />

                  <path
                    d="M0 60 C 120 20, 200 160, 400 100"
                    stroke="var(--cyan-500)"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.5"
                  />

                </svg>


                <span className="map-card__pin">
                  <IconPin />
                </span>


                <span className="map-card__label">
                  Mumbai
                </span>

              </div>


              <div className="map-card__footer">

                <div>

                  <span className="icon-badge">
                    <IconPin />
                  </span>

                  <div>

                    <strong>
                      Mumbai
                    </strong>

                    <span>
                      Maharashtra, India
                    </span>

                  </div>

                </div>


                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    CONTACT.addressFull
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Get Directions
                  <IconArrowRight />
                </a>

              </div>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          WHY US
      ====================================================== */}

      <section className="section section--raised">

        <div className="container">

          <div
            className="services-head"
            style={{
              margin: '0 0 36px'
            }}
          >

            <span className="eyebrow">
              Why Get in Touch
            </span>

            <h2>
              Why Get in Touch With Us?
            </h2>

          </div>


          <Reveal
            as="div"
            stagger
            className="trust-strip"
          >

            {WHY_US.map((t) => (

              <div
                key={t.title}
                className="trust-strip__item"
              >

                <span className="icon-badge">
                  {t.icon}
                </span>

                <div>

                  <h4>
                    {t.title}
                  </h4>

                  <p>
                    {t.text}
                  </p>

                </div>

              </div>

            ))}

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          OPTIONAL SAME POPUP
      ====================================================== */}

      <QuotePopup
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
      />

    </>
  );
}