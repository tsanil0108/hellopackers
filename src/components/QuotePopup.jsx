import { useEffect, useState } from 'react';
import {
  IconCheck,
  IconArrowRight
} from './Icons';

import { CONTACT } from '../siteData';

import './QuotePopup.css';

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

export default function QuotePopup({ isOpen, onClose }) {

  const [form, setForm] = useState(INITIAL_FORM);
  const [sent, setSent] = useState(false);


  useEffect(() => {

    if (!isOpen) {
      document.body.classList.remove('quote-popup-open');
      return;
    }

    document.body.classList.add('quote-popup-open');

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener(
      'keydown',
      handleEscape
    );

    return () => {
      document.body.classList.remove(
        'quote-popup-open'
      );

      document.removeEventListener(
        'keydown',
        handleEscape
      );
    };

  }, [isOpen]);


  const update = (field) => (event) => {

    setForm((current) => ({
      ...current,
      [field]: event.target.value
    }));

  };


  const handleClose = () => {

    setForm(INITIAL_FORM);
    setSent(false);

    onClose();

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


  if (!isOpen) {
    return null;
  }


  return (
    <div
      className="quote-popup"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-popup-title"

      onMouseDown={(event) => {

        if (
          event.target === event.currentTarget
        ) {
          handleClose();
        }

      }}
    >

      <div className="quote-popup__card">


        {/* CLOSE */}

        <button
          type="button"
          className="quote-popup__close"
          onClick={handleClose}
          aria-label="Close quote form"
        >
          <span>×</span>
        </button>


        {!sent ? (

          <>

            {/* HEADER */}

            <div className="quote-popup__header">

              <span className="quote-popup__eyebrow">
                FREE QUOTE
              </span>

              <h2 id="quote-popup-title">
                Let's Plan Your Move
              </h2>

              <p>
                Fill in your moving details and our team
                will get back to you with the best quote.
              </p>

            </div>


            {/* BENEFITS */}

            <div className="quote-popup__benefits">

              <span>
                <IconCheck />
                Free Consultation
              </span>

              <span>
                <IconCheck />
                Transparent Pricing
              </span>

              <span>
                <IconCheck />
                Quick Response
              </span>

            </div>


            {/* FORM */}

            <form
              className="quote-popup__form"
              onSubmit={handleSubmit}
            >

              <div className="quote-popup__row">

                <div className="quote-popup__field">

                  <label htmlFor="quote-name">
                    Full Name *
                  </label>

                  <input
                    id="quote-name"
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />

                </div>


                <div className="quote-popup__field">

                  <label htmlFor="quote-phone">
                    Phone Number *
                  </label>

                  <input
                    id="quote-phone"
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

                </div>

              </div>


              <div className="quote-popup__field">

                <label htmlFor="quote-email">
                  Email Address *
                </label>

                <input
                  id="quote-email"
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />

              </div>


              <div className="quote-popup__row">

                <div className="quote-popup__field">

                  <label htmlFor="quote-from">
                    Moving From *
                  </label>

                  <input
                    id="quote-from"
                    type="text"
                    value={form.from}
                    onChange={update('from')}
                    placeholder="Current location"
                    required
                  />

                </div>


                <div className="quote-popup__field">

                  <label htmlFor="quote-to">
                    Moving To *
                  </label>

                  <input
                    id="quote-to"
                    type="text"
                    value={form.to}
                    onChange={update('to')}
                    placeholder="Destination"
                    required
                  />

                </div>

              </div>


              <div className="quote-popup__row">

                <div className="quote-popup__field">

                  <label htmlFor="quote-service">
                    Service Required *
                  </label>

                  <select
                    id="quote-service"
                    value={form.service}
                    onChange={update('service')}
                    required
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

                    <option value="Other">
                      Other
                    </option>

                  </select>

                </div>


                <div className="quote-popup__field">

                  <label htmlFor="quote-date">
                    Moving Date *
                  </label>

                  <input
                    id="quote-date"
                    type="date"
                    value={form.date}
                    onChange={update('date')}
                    required
                  />

                </div>

              </div>


              <div className="quote-popup__field">

                <label htmlFor="quote-notes">

                  Additional Details

                  <span>
                    Optional
                  </span>

                </label>

                <textarea
                  id="quote-notes"
                  value={form.notes}
                  onChange={update('notes')}
                  rows="3"
                  placeholder="Home size, floor, lift access, vehicle, storage requirements..."
                />

              </div>


              <button
                type="submit"
                className="quote-popup__submit"
              >
                Send Quote Request
                <IconArrowRight />
              </button>


              <p className="quote-popup__privacy">
                Your details are used only to respond
                to your enquiry.
              </p>

            </form>

          </>

        ) : (

          <div className="quote-popup__success">

            <div className="quote-popup__success-icon">
              <IconCheck />
            </div>

            <span className="quote-popup__eyebrow">
              REQUEST RECEIVED
            </span>

            <h2>
              Thank You!
            </h2>

            <p>
              Your email app should now open with your
              quote details filled in. Please press
              Send to complete your enquiry.
            </p>

            <button
              type="button"
              className="quote-popup__success-btn"
              onClick={handleClose}
            >
              Done
              <IconArrowRight />
            </button>

          </div>

        )}

      </div>

    </div>
  );
}