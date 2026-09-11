import { useState, useEffect } from 'react';
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
  IconCheck,
  IconPin,
} from '../components/Icons';

import heroVideo from '../assets/photos/herovideo.mp4';

import {
  STATS,
} from '../siteData';

import aPackersLogo from '../assets/network/a-packers.png';
import firstLogo from '../assets/network/first.png';
import jaiswalLogo from '../assets/network/jaiswal.png';
import libertyLogo from '../assets/network/liberty.png';
import patelLogo from '../assets/network/patel.png';
import rkLogo from '../assets/network/rk.png';
import shiftingHubLogo from '../assets/network/shifting hub.png';
import wellpackLogo from '../assets/network/wellpack.png';
import eagleInternationalLogo from '../assets/network/eagle.png';

import './Home.css';


/* =========================================================
   NETWORK PARTNERS
========================================================= */

const NETWORK_PARTNERS = [

  {
    id: 'a-packers',

    name: 'AP Packers & Movers',

    logo: aPackersLogo,

    phone: '8207008800',

    phoneAlt: '9773366455',

    email:
      'info@apackersmovers.in',

    location:
      'Kandivali East, Mumbai',

    description:
      'Professional packing and moving support for residential and commercial relocation.',

    services: [
      'Local',
      'Domestic',
      'International',
    ],
  },


  {
    id: 'first-choice',

    name:
      'First Choice Packers & Movers',

    logo: firstLogo,

    phone: '9769646467',

    phoneAlt: '8286919181',

    email: '',

    location:
      'Majiwada, Thane West',

    description:
      'Reliable shifting and transportation support for homes, vehicles and commercial moves.',

    services: [
      'Home Shifting',
      'Car Transportation',
      'Bike Transportation',
      'Commercial Shifting',
    ],
  },


  {
    id: 'jaiswal',

    name:
      'Jaiswal Packers & Movers',

    logo: jaiswalLogo,

    phone: '9082618076',

    phoneAlt: '8976299758',

    email:
      'info@jaiswalpackers.in',

    website:
      'jaiswalpackers.in',

    location:
      'Andheri East, Mumbai',

    description:
      'Complete relocation support with packing, moving, storage and vehicle transportation.',

    services: [
      'Household Goods',
      'Packing & Moving',
      'Storage',
      'Bike & Car',
    ],
  },


  {
    id: 'liberty',

    name:
      'Liberty International Packers & Movers',

    logo: libertyLogo,

    phone: '8108964384',

    phoneAlt: '8369263560',

    email:
      'libertyintlpackers@gmail.com',

    location:
      'Kandivali East, Mumbai',

    description:
      'Professional relocation, warehousing and transportation solutions for smooth moves.',

    services: [
      'Home Shifting',
      'Office Shifting',
      'Warehousing',
      'Transportation',
    ],
  },


  {
    id: 'patel',

    name:
      'Patel Cargo Packers & Movers',

    logo: patelLogo,

    phone: '9320434546',

    phoneAlt: '9322070217',

    email:
      'help.patelpackersmovers@gmail.com',

    website:
      'patelpackersmover.com',

    location:
      'Thane West, Maharashtra',

    description:
      'Reliable packing, shifting and transportation support for different relocation needs.',

    services: [
      'Shifting',
      'Transportation',
      'Packing',
      'Moving',
    ],
  },


  {
    id: 'rk-cargo',

    name: 'R K Cargo',

    logo: rkLogo,

    phone: '9833414143',

    phoneAlt: '9867653676',

    email:
      'rkcargorelocationandlogistics@gmail.com',

    website:
      'rkcargopackers.com',

    location:
      'Balkum Naka, Thane West',

    description:
      'Relocation and logistics support for moving requirements across India.',

    services: [
      'Relocation',
      'Logistics',
      'All India Moving',
    ],
  },


  {
    id: 'shifting-hub',

    name: 'The Shifting Hub',

    logo: shiftingHubLogo,

    phone: '',

    phoneAlt: '',

    email: '',

    location:
      'Mumbai & Maharashtra',

    description:
      'Complete moving support including packing, storage and vehicle transportation.',

    services: [
      'Home Shifting',
      'Office Shifting',
      'Packing & Moving',
      'Storage',
      'Vehicle Transportation',
    ],
  },


  {
    id: 'wellpack',

    name: 'Well Pack Logistics',

    logo: wellpackLogo,

    phone: '9867416009',

    phoneAlt: '',

    email: '',

    location:
      'Mumbai, Maharashtra',

    description:
      'Reliable logistics and relocation support for homes, offices and warehousing needs.',

    services: [
      'Home Shifting',
      'Office Shifting',
      'Warehousing',
      'Transportation',
    ],
  },

  {
  id: 'eagle-international',

  name: 'Eagle International Packers & Movers',

  logo: eagleInternationalLogo,

  phone: '',

  phoneAlt: '',

  email: '',

  location:
    'Mumbai & Maharashtra',

  description:
    'Professional packing and moving support for safe, reliable and hassle-free relocation across Mumbai and Maharashtra.',

  services: [
    'Home Shifting',
    'Office Shifting',
    'Packing & Moving',
    'Storage',
    'Vehicle Transportation',
  ],
},

];


const INITIAL_PARTNER_FORM = {
  name: '',
  phone: '',
  email: '',
  from: '',
  to: '',
  date: '',
  service: '',
  message: '',
};


export default function Home() {

  const [quoteOpen, setQuoteOpen] =
    useState(false);

  const [selectedPartner, setSelectedPartner] =
    useState(null);

  const [partnerForm, setPartnerForm] =
    useState(INITIAL_PARTNER_FORM);

  const [partnerSending, setPartnerSending] =
    useState(false);

  const [partnerSent, setPartnerSent] =
    useState(false);


  const openQuote = () => {
    setQuoteOpen(true);
  };


  useEffect(() => {

    const alreadyShown = sessionStorage.getItem(
      'hp_quote_auto_shown'
    );

    if (alreadyShown) {
      return;
    }

    const timer = setTimeout(() => {

      setQuoteOpen(true);

      sessionStorage.setItem(
        'hp_quote_auto_shown',
        'true'
      );

    }, 3000);

    return () => clearTimeout(timer);

  }, []);


  const closeQuote = () => {
    setQuoteOpen(false);
  };


  const openPartnerQuote = (partner) => {

    setSelectedPartner(partner);

    setPartnerSent(false);

    setPartnerForm({
      ...INITIAL_PARTNER_FORM,

      service:
        partner.services?.[0] || '',
    });

    document.body.classList.add(
      'network-modal-open'
    );
  };


  const closePartnerQuote = () => {

    setSelectedPartner(null);

    setPartnerSent(false);

    setPartnerForm(
      INITIAL_PARTNER_FORM
    );

    document.body.classList.remove(
      'network-modal-open'
    );
  };


  const updatePartnerForm =
    (field) =>
    (event) => {

      setPartnerForm(
        (current) => ({
          ...current,

          [field]:
            event.target.value,
        })
      );

    };


  const submitPartnerQuote =
    async (event) => {

      event.preventDefault();

      if (!selectedPartner) {
        return;
      }

      setPartnerSending(true);


      const data =
        new FormData();


      /*
        IMPORTANT:
        Replace this with your
        real Web3Forms access key.
      */

      data.append(
        'access_key',
        'YOUR_WEB3FORMS_ACCESS_KEY'
      );


      data.append(
        'subject',
        `Quote Request - ${selectedPartner.name}`
      );


      data.append(
        'from_name',
        'Hello Packers Website'
      );


      data.append(
        'name',
        partnerForm.name
      );


      data.append(
        'phone',
        partnerForm.phone
      );


      data.append(
        'email',
        partnerForm.email
      );


      data.append(
        'moving_from',
        partnerForm.from
      );


      data.append(
        'moving_to',
        partnerForm.to
      );


      data.append(
        'moving_date',
        partnerForm.date
      );


      data.append(
        'service',
        partnerForm.service
      );


      data.append(
        'message',
        partnerForm.message
      );


      data.append(
        'selected_partner',
        selectedPartner.name
      );


      try {

        const response =
          await fetch(
            'https://api.web3forms.com/submit',
            {
              method: 'POST',
              body: data,
            }
          );


        const result =
          await response.json();


        if (result.success) {

          setPartnerSent(true);

        } else {

          alert(
            'Something went wrong. Please try again.'
          );

        }

      } catch (error) {

        console.error(error);

        alert(
          'Unable to send your request. Please try again.'
        );

      } finally {

        setPartnerSending(false);

      }

    };


  return (
    <>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="home-hero">

        <div
          className="
            home-hero__glow
            home-hero__glow--one
          "
        />

        <div
          className="
            home-hero__glow
            home-hero__glow--two
          "
        />


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
              At Hello Packers, we make your move
              simple, secure and stress-free. From
              careful packing to safe delivery, your
              belongings are always handled with care.
            </p>


            <div className="home-hero__actions">

              <button
                type="button"
                className="
                  home-btn
                  home-btn--primary
                "
                onClick={openQuote}
              >
                Get a Free Quote

                <IconArrowRight />

              </button>


              <Link
                to="/services"
                className="
                  home-btn
                  home-btn--secondary
                "
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
            style={{
              transitionDelay:
                '0.15s',
            }}
          >

            <div className="home-hero__image-wrap">

              <video
                className="home-hero__video"
                src={heroVideo}
                autoPlay
                muted
                loop
                playsInline
                aria-label="Hello Packers moving truck on the move"
              />

              <div className="home-hero__image-overlay" />


              <div
                className="
                  home-hero__floating-card
                  home-hero__floating-card--top
                "
              >

                <span className="floating-card__icon">
                  <IconCheck />
                </span>

                <div>

                  <strong>
                    Trusted Moving
                  </strong>

                  <small>
                    Professional Service
                  </small>

                </div>

              </div>

            </div>


            <div className="home-hero__stats">

              <StatBar
                items={STATS.slice(0, 3)}
              />

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          NETWORK — ALL 8 PARTNERS
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
                Connect with reliable relocation
                partners through the Hello Packers
                network for your moving requirements.
              </p>

            </div>


            <div className="home-network__count">

              <strong>
                {NETWORK_PARTNERS.length}
              </strong>

              <span>
                Network Partners
              </span>

            </div>

          </Reveal>


          <Reveal
            as="div"
            stagger
            className="home-network__grid"
          >

            {NETWORK_PARTNERS.map(
              (partner) => (

                <article
                  className="home-network-card"
                  key={partner.id}
                >

                  <div className="home-network-card__logo">

                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      loading="lazy"
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

                      <IconPin />

                      {partner.location}

                    </p>


                    <p className="home-network-card__description">
                      {partner.description}
                    </p>


                    <div className="home-network-card__services">

                      {partner.services.map(
                        (service) => (

                          <span
                            key={service}
                          >
                            {service}
                          </span>

                        )
                      )}

                    </div>


                    <button
                      type="button"
                      className="home-network-card__button"
                      onClick={() =>
                        openPartnerQuote(
                          partner
                        )
                      }
                    >

                      Get a Quote

                      <IconArrowRight />

                    </button>

                  </div>

                </article>

              )
            )}

          </Reveal>


          <Reveal className="home-network__bottom">

            <div className="home-network__bottom-icon">
              <IconUsers />
            </div>


            <div>

              <strong>
                Looking for a reliable moving partner?
              </strong>

              <span>
                Send your requirement through Hello Packers.
              </span>

            </div>


            <button
              type="button"
              onClick={openQuote}
            >
              Get a Free Quote

              <IconArrowRight />

            </button>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <FinalCTA />


      {/* =====================================================
          NORMAL QUOTE POPUP
      ====================================================== */}

      <QuotePopup
        isOpen={quoteOpen}
        onClose={closeQuote}
      />


      {/* =====================================================
          PARTNER QUOTE MODAL
      ====================================================== */}

      {selectedPartner && (

        <div
          className="home-network-modal"
          role="dialog"
          aria-modal="true"
          onMouseDown={(event) => {

            if (
              event.target ===
              event.currentTarget
            ) {
              closePartnerQuote();
            }

          }}
        >

          <div className="home-network-modal__card">

            <button
              type="button"
              className="home-network-modal__close"
              onClick={closePartnerQuote}
              aria-label="Close"
            >
              ×
            </button>


            {!partnerSent ? (

              <>

                <div className="home-network-modal__header">

                  <span className="home-section-eyebrow">
                    GET A QUOTE
                  </span>

                  <h2>
                    Request a Quote
                  </h2>

                  <p>
                    Send your moving requirement
                    to Hello Packers.
                  </p>

                </div>


                {/* PARTNER */}

                <div className="home-network-modal__partner">

                  <div className="home-network-modal__partner-logo">

                    <img
                      src={selectedPartner.logo}
                      alt=""
                    />

                  </div>


                  <div>

                    <strong>
                      {selectedPartner.name}
                    </strong>

                    <span>
                      {selectedPartner.location}
                    </span>

                  </div>

                </div>


                {/* FORM */}

                <form
                  className="home-network-form"
                  onSubmit={
                    submitPartnerQuote
                  }
                >

                  <div className="home-network-form__grid">


                    <label>

                      <span>
                        Full Name *
                      </span>

                      <input
                        type="text"
                        value={
                          partnerForm.name
                        }
                        onChange={
                          updatePartnerForm(
                            'name'
                          )
                        }
                        placeholder="Your name"
                        required
                      />

                    </label>


                    <label>

                      <span>
                        Phone *
                      </span>

                      <input
                        type="tel"
                        value={
                          partnerForm.phone
                        }
                        onChange={
                          updatePartnerForm(
                            'phone'
                          )
                        }
                        placeholder="Your phone number"
                        required
                      />

                    </label>


                    <label>

                      <span>
                        Email
                      </span>

                      <input
                        type="email"
                        value={
                          partnerForm.email
                        }
                        onChange={
                          updatePartnerForm(
                            'email'
                          )
                        }
                        placeholder="Your email"
                      />

                    </label>


                    <label>

                      <span>
                        Moving Date
                      </span>

                      <input
                        type="date"
                        value={
                          partnerForm.date
                        }
                        onChange={
                          updatePartnerForm(
                            'date'
                          )
                        }
                      />

                    </label>


                    <label>

                      <span>
                        Moving From *
                      </span>

                      <input
                        type="text"
                        value={
                          partnerForm.from
                        }
                        onChange={
                          updatePartnerForm(
                            'from'
                          )
                        }
                        placeholder="Current location"
                        required
                      />

                    </label>


                    <label>

                      <span>
                        Moving To *
                      </span>

                      <input
                        type="text"
                        value={
                          partnerForm.to
                        }
                        onChange={
                          updatePartnerForm(
                            'to'
                          )
                        }
                        placeholder="Destination"
                        required
                      />

                    </label>


                    <label className="home-network-form__full">

                      <span>
                        Service
                      </span>

                      <select
                        value={
                          partnerForm.service
                        }
                        onChange={
                          updatePartnerForm(
                            'service'
                          )
                        }
                      >

                        {selectedPartner.services.map(
                          (service) => (

                            <option
                              key={service}
                              value={service}
                            >
                              {service}
                            </option>

                          )
                        )}

                      </select>

                    </label>


                    <label className="home-network-form__full">

                      <span>
                        Message
                      </span>

                      <textarea
                        rows="3"
                        value={
                          partnerForm.message
                        }
                        onChange={
                          updatePartnerForm(
                            'message'
                          )
                        }
                        placeholder="Tell us about your move..."
                      />

                    </label>

                  </div>


                  <button
                    type="submit"
                    className="home-network-form__submit"
                    disabled={
                      partnerSending
                    }
                  >

                    {partnerSending
                      ? 'Sending...'
                      : 'Send Quote Request'}

                    {!partnerSending && (
                      <IconArrowRight />
                    )}

                  </button>

                </form>

              </>

            ) : (

              <div className="home-network-modal__success">

                <span>
                  <IconCheck />
                </span>

                <h2>
                  Request Sent!
                </h2>

                <p>
                  Thank you. Your quote request
                  has been submitted successfully.
                </p>

                <button
                  type="button"
                  onClick={closePartnerQuote}
                >
                  Done
                </button>

              </div>

            )}

          </div>

        </div>

      )}

    </>
  );
}