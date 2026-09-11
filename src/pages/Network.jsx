import { useEffect, useState } from 'react';

import Reveal from '../components/Reveal';

import {
  IconPhone,
  IconMail,
  IconPin,
  IconArrowRight,
  IconCheck,
  IconTruck,
  IconUsers,
} from '../components/Icons';

import './Network.css';

/* =========================================================
   NETWORK LOGOS
========================================================= */

import aPackersLogo from '../assets/network/a-packers.png';
import firstLogo from '../assets/network/first.png';
import jaiswalLogo from '../assets/network/jaiswal.png';
import libertyLogo from '../assets/network/liberty.png';
import patelLogo from '../assets/network/patel.png';
import rkLogo from '../assets/network/rk.png';
import shiftingHubLogo from '../assets/network/shifting hub.png';
import wellpackLogo from '../assets/network/wellpack.png';


/* =========================================================
   NETWORK PARTNERS DATA
========================================================= */

const NETWORK = [
  {
    id: 'a-packers',
    name: 'AP Packers & Movers',
    logo: aPackersLogo,
    phone: '8207008800',
    phoneAlt: '9773366455',
    email: 'info@apackersmovers.in',
    location: 'Kandivali East, Mumbai',
    services: [
      'Local',
      'Domestic',
      'International',
    ],
  },

  {
    id: 'first-choice',
    name: 'First Choice Packers & Movers',
    logo: firstLogo,
    phone: '9769646467',
    phoneAlt: '8286919181',
    email: '',
    location: 'Majiwada, Thane West',
    services: [
      'Home Shifting',
      'Car Transportation',
      'Bike Transportation',
      'Commercial Shifting',
    ],
  },

  {
    id: 'jaiswal',
    name: 'Jaiswal Packers & Movers',
    logo: jaiswalLogo,
    phone: '9082618076',
    phoneAlt: '8976299758',
    email: 'info@jaiswalpackers.in',
    website: 'jaiswalpackers.in',
    location: 'Andheri East, Mumbai',
    services: [
      'Household Goods',
      'Packing & Moving',
      'Storage',
      'Bike & Car',
    ],
  },

  {
    id: 'liberty',
    name: 'Liberty International Packers & Movers',
    logo: libertyLogo,
    phone: '8108964384',
    phoneAlt: '8369263560',
    email: 'libertyintlpackers@gmail.com',
    location: 'Kandivali East, Mumbai',
    services: [
      'Home Shifting',
      'Office Shifting',
      'Warehousing',
      'Transportation',
    ],
  },

  {
    id: 'patel',
    name: 'Patel Cargo Packers & Movers',
    logo: patelLogo,
    phone: '9320434546',
    phoneAlt: '9322070217',
    email: 'help.patelpackersmovers@gmail.com',
    website: 'patelpackersmover.com',
    location: 'Thane West, Maharashtra',
    services: [
      'Shifting',
      'Transportation',
      'Packing',
      'Moving Accessories',
    ],
  },

  {
    id: 'rk-cargo',
    name: 'R K Cargo',
    logo: rkLogo,
    phone: '9833414143',
    phoneAlt: '9867653676',
    email: 'rkcargorelocationandlogistics@gmail.com',
    website: 'rkcargopackers.com',
    location: 'Balkum Naka, Thane West',
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
    location: 'Mumbai & Maharashtra',
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
    location: 'Mumbai, Maharashtra',
    services: [
      'Home Shifting',
      'Office Shifting',
      'Warehousing',
      'Transportation',
    ],
  },
];


/* =========================================================
   HERO LOGOS
========================================================= */

const NETWORK_LOGOS = [
  {
    logo: wellpackLogo,
    name: 'Well Pack Logistics',
  },
  {
    logo: aPackersLogo,
    name: 'AP Packers & Movers',
  },
  {
    logo: firstLogo,
    name: 'First Choice Packers & Movers',
  },
  {
    logo: jaiswalLogo,
    name: 'Jaiswal Packers & Movers',
  },
  {
    logo: libertyLogo,
    name: 'Liberty International Packers & Movers',
  },
  {
    logo: patelLogo,
    name: 'Patel Cargo Packers & Movers',
  },
  {
    logo: rkLogo,
    name: 'R K Cargo',
  },
  {
    logo: shiftingHubLogo,
    name: 'The Shifting Hub',
  },
];


/* =========================================================
   FORM
========================================================= */

const INITIAL_FORM = {
  name: '',
  phone: '',
  email: '',
  from: '',
  to: '',
  date: '',
  service: '',
  message: '',
};


/* =========================================================
   NETWORK PAGE
========================================================= */

export default function Network() {
  const [activeLogo, setActiveLogo] = useState(0);

  const [selectedPacker, setSelectedPacker] = useState(null);

  const [form, setForm] = useState(INITIAL_FORM);

  const [sending, setSending] = useState(false);

  const [sent, setSent] = useState(false);


  /* =======================================================
     HERO LOGO AUTO ROTATION
  ======================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogo(
        (current) =>
          (current + 1) % NETWORK_LOGOS.length
      );
    }, 2800);

    return () => clearInterval(interval);
  }, []);


  /* =======================================================
     OPEN QUOTE MODAL
  ======================================================= */

  const openQuote = (packer) => {
    setSelectedPacker(packer);
    setSent(false);
    setForm(INITIAL_FORM);

    document.body.classList.add(
      'network-modal-open'
    );
  };


  /* =======================================================
     CLOSE QUOTE MODAL
  ======================================================= */

  const closeQuote = () => {
    setSelectedPacker(null);
    setSent(false);
    setForm(INITIAL_FORM);

    document.body.classList.remove(
      'network-modal-open'
    );
  };


  /* =======================================================
     FORM UPDATE
  ======================================================= */

  const update = (field) => (event) => {
    setForm((current) => ({
      ...current,
      [field]: event.target.value,
    }));
  };


  /* =======================================================
     SUBMIT FORM — WEB3FORMS
  ======================================================= */

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedPacker) {
      return;
    }

    setSending(true);

    const data = new FormData();

    /*
      IMPORTANT:
      Replace this with your actual Web3Forms
      Access Key.
    */

    data.append(
      'access_key',
      'YOUR_WEB3FORMS_ACCESS_KEY'
    );

    data.append(
      'subject',
      `Hello Packers Quote Request — ${selectedPacker.name}`
    );

    data.append(
      'from_name',
      'Hello Packers Website'
    );

    data.append(
      'name',
      form.name
    );

    data.append(
      'phone',
      form.phone
    );

    data.append(
      'email',
      form.email
    );

    data.append(
      'moving_from',
      form.from
    );

    data.append(
      'moving_to',
      form.to
    );

    data.append(
      'moving_date',
      form.date
    );

    data.append(
      'service',
      form.service
    );

    data.append(
      'message',
      form.message
    );

    data.append(
      'selected_packer',
      selectedPacker.name
    );


    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: data,
        }
      );

      const result = await response.json();

      if (result.success) {
        setSent(true);
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
      setSending(false);
    }
  };


  /* =======================================================
     JSX
  ======================================================= */

  return (
    <>
      {/* ===================================================
          HERO
      =================================================== */}

      <section className="network-hero">

        <div className="network-hero__container">

          {/* LEFT */}

          <Reveal className="network-hero__content">

            <div className="network-hero__eyebrow">
              <span>
                OUR NETWORK
              </span>

              <i />
            </div>


            <h1>
              Trusted Packers{' '}
              <span>
                Across
              </span>

              <br />

              <span>
                Mumbai
              </span>
            </h1>


            <p>
              Connect with trusted relocation
              partners from the Hello Packers
              network for home shifting, office
              relocation, transportation, packing
              and storage requirements.
            </p>


            <div className="network-hero__trust">

              <div>
                <IconUsers />
                <span>
                  Verified Network
                </span>
              </div>

              <div>
                <IconCheck />
                <span>
                  Reliable Partners
                </span>
              </div>

              <div>
                <IconTruck />
                <span>
                  Moving Solutions
                </span>
              </div>

              <div>
                <IconCheck />
                <span>
                  Easy Enquiry
                </span>
              </div>

            </div>

          </Reveal>


          {/* RIGHT — ROTATING LOGO */}

          <Reveal
            className="network-hero__visual"
            style={{
              transitionDelay: '0.12s',
            }}
          >

            <div className="network-hero__logo-box">

              <img
                key={NETWORK_LOGOS[activeLogo].name}
                src={
                  NETWORK_LOGOS[activeLogo].logo
                }
                alt={
                  NETWORK_LOGOS[activeLogo].name
                }
                className="network-hero__logo"
              />


              <div className="network-hero__script">
                Your Move
                <br />
                Our Network
              </div>


              <div className="network-hero__dots">

                {NETWORK_LOGOS.map(
                  (item, index) => (
                    <button
                      key={item.name}
                      type="button"
                      aria-label={`Show ${item.name}`}
                      className={
                        index === activeLogo
                          ? 'active'
                          : ''
                      }
                      onClick={() =>
                        setActiveLogo(index)
                      }
                    />
                  )
                )}

              </div>

            </div>

          </Reveal>

        </div>

      </section>


      {/* ===================================================
          NETWORK PARTNERS
      =================================================== */}

      <section className="section network-section">

        <div className="container">

          <div className="network-heading">

            <div>

              <span className="eyebrow">
                HELLO PACKERS NETWORK
              </span>

              <h2>
                Our Trusted Moving Partners
              </h2>

              <p>
                Choose a moving partner based on
                your requirement and send your
                enquiry directly through Hello Packers.
              </p>

            </div>


            <div className="network-heading__badge">

              <span>
                {NETWORK.length}
              </span>

              <small>
                Network Partners
              </small>

            </div>

          </div>


          <Reveal
            as="div"
            stagger
            className="network-grid"
          >

            {NETWORK.map((packer) => (

              <article
                key={packer.id}
                className="network-card"
              >

                {/* LOGO */}

                <div className="network-card__logo">

                  <img
                    src={packer.logo}
                    alt={`${packer.name} logo`}
                    loading="lazy"
                  />

                </div>


                {/* CONTENT */}

                <div className="network-card__content">

                  <h3>
                    {packer.name}
                  </h3>


                  {/* LOCATION */}

                  <div className="network-card__location">

                    <IconPin />

                    <span>
                      {packer.location}
                    </span>

                  </div>


                  {/* PHONE */}

                  {packer.phone && (

                    <a
                      href={`tel:${packer.phone}`}
                      className="network-card__contact"
                    >

                      <IconPhone />

                      <span>
                        {packer.phone}

                        {packer.phoneAlt
                          ? ` / ${packer.phoneAlt}`
                          : ''}
                      </span>

                    </a>

                  )}


                  {/* EMAIL */}

                  {packer.email && (

                    <a
                      href={`mailto:${packer.email}`}
                      className="network-card__contact"
                    >

                      <IconMail />

                      <span>
                        {packer.email}
                      </span>

                    </a>

                  )}


                  {/* WEBSITE */}

                  {packer.website && (

                    <a
                      href={`https://${packer.website}`}
                      target="_blank"
                      rel="noreferrer"
                      className="network-card__website"
                    >
                      {packer.website}
                    </a>

                  )}


                  {/* SERVICES */}

                  <div className="network-card__services">

                    {packer.services.map(
                      (service) => (

                        <span key={service}>
                          {service}
                        </span>

                      )
                    )}

                  </div>


                  {/* QUOTE */}

                  <button
                    type="button"
                    className="network-card__quote"
                    onClick={() =>
                      openQuote(packer)
                    }
                  >

                    Get a Quote

                    <IconArrowRight />

                  </button>

                </div>

              </article>

            ))}

          </Reveal>

        </div>

      </section>


      {/* ===================================================
          QUOTE MODAL
      =================================================== */}

      {selectedPacker && (

        <div
          className="network-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="network-modal-title"
          onMouseDown={(event) => {

            if (
              event.target ===
              event.currentTarget
            ) {
              closeQuote();
            }

          }}
        >

          <div className="network-modal__card">

            {/* CLOSE */}

            <button
              type="button"
              className="network-modal__close"
              onClick={closeQuote}
              aria-label="Close quote form"
            >
              ×
            </button>


            {!sent ? (

              <>

                {/* HEADER */}

                <div className="network-modal__header">

                  <span className="eyebrow">
                    GET A QUOTE
                  </span>

                  <h2 id="network-modal-title">
                    Request a Quote
                  </h2>

                  <p>
                    Your enquiry will be sent
                    regarding:
                  </p>

                  <div className="network-modal__selected">

                    <img
                      src={selectedPacker.logo}
                      alt=""
                    />

                    <strong>
                      {selectedPacker.name}
                    </strong>

                  </div>

                  <div className="network-modal__contact-info">

                    {selectedPacker.phone && (
                      <a
                        href={`tel:${selectedPacker.phone}`}
                      >
                        <IconPhone />
                        {selectedPacker.phone}

                        {selectedPacker.phoneAlt
                          ? ` / ${selectedPacker.phoneAlt}`
                          : ''}
                      </a>
                    )}

                    {selectedPacker.email && (
                      <a
                        href={`mailto:${selectedPacker.email}`}
                      >
                        <IconMail />
                        {selectedPacker.email}
                      </a>
                    )}

                  </div>

                </div>


                {/* FORM */}

                <form
                  className="network-form"
                  onSubmit={handleSubmit}
                >

                  <div className="network-form__row">

                    <label>

                      <span>
                        Full Name *
                      </span>

                      <input
                        type="text"
                        value={form.name}
                        onChange={update('name')}
                        placeholder="Your name"
                        autoComplete="name"
                        required
                      />

                    </label>


                    <label>

                      <span>
                        Phone Number *
                      </span>

                      <input
                        type="tel"
                        value={form.phone}
                        onChange={update('phone')}
                        placeholder="10-digit mobile number"
                        autoComplete="tel"
                        inputMode="numeric"
                        pattern="[0-9]{10}"
                        maxLength="10"
                        required
                      />

                    </label>

                  </div>


                  <label>

                    <span>
                      Email Address *
                    </span>

                    <input
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                    />

                  </label>


                  <div className="network-form__row">

                    <label>

                      <span>
                        Moving From *
                      </span>

                      <input
                        type="text"
                        value={form.from}
                        onChange={update('from')}
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
                        value={form.to}
                        onChange={update('to')}
                        placeholder="Destination"
                        required
                      />

                    </label>

                  </div>


                  <div className="network-form__row">

                    <label>

                      <span>
                        Service Required *
                      </span>

                      <select
                        value={form.service}
                        onChange={update('service')}
                        required
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
                          Packing & Unpacking
                        </option>

                        <option value="Storage & Warehousing">
                          Storage & Warehousing
                        </option>

                        <option value="Other">
                          Other
                        </option>

                      </select>

                    </label>


                    <label>

                      <span>
                        Moving Date *
                      </span>

                      <input
                        type="date"
                        value={form.date}
                        onChange={update('date')}
                        required
                      />

                    </label>

                  </div>


                  <label>

                    <span>
                      Additional Message
                      <small>
                        Optional
                      </small>
                    </span>

                    <textarea
                      rows="4"
                      value={form.message}
                      onChange={update('message')}
                      placeholder="Tell us about your move..."
                    />

                  </label>


                  <button
                    type="submit"
                    className="network-form__submit"
                    disabled={sending}
                  >

                    {sending
                      ? 'Sending...'
                      : 'Send Quote Request'}

                    {!sending && (
                      <IconArrowRight />
                    )}

                  </button>


                  <p className="network-form__privacy">
                    Your details are used only
                    to respond to your enquiry.
                  </p>

                </form>

              </>

            ) : (

              /* =================================================
                 SUCCESS
              ================================================= */

              <div className="network-success">

                <div className="network-success__icon">

                  <IconCheck />

                </div>


                <span className="eyebrow">
                  REQUEST SENT
                </span>


                <h2>
                  Thank You!
                </h2>


                <p>

                  Your quote request for{' '}

                  <strong>
                    {selectedPacker.name}
                  </strong>{' '}

                  has been submitted successfully.
                  Our team will get back to you shortly.

                </p>


                <button
                  type="button"
                  onClick={closeQuote}
                  className="network-success__button"
                >

                  Done

                  <IconArrowRight />

                </button>

              </div>

            )}

          </div>

        </div>

      )}

    </>
  );
}