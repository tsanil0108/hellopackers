import { useEffect, useState } from 'react';

import {
  IconCheck,
  IconArrowRight,
} from './Icons';

import './QuotePopup.css';

const WEB3FORMS_ACCESS_KEY =
  '0efe13bf-a643-4c7f-b388-a413f64e3430';

const INITIAL_FORM = {
  name: '',
  phone: '',
  email: '',
  from: '',
  to: '',
  homeSize: '',
  service: '',
  date: '',
};

export default function QuotePopup({
  isOpen,
  onClose,
}) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isOpen) {
      document.body.classList.remove(
        'quote-popup-open'
      );

      return;
    }

    document.body.classList.add(
      'quote-popup-open'
    );

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
      [field]: event.target.value,
    }));

    if (error) {
      setError('');
    }
  };

  const handleClose = () => {
    setForm(INITIAL_FORM);
    setSent(false);
    setSending(false);
    setError('');

    onClose();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (sending) {
      return;
    }

    setSending(true);
    setSent(false);
    setError('');

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key:
              WEB3FORMS_ACCESS_KEY,

            subject: `New Quote Request — ${
              form.name || 'New Enquiry'
            }`,

            from_name:
              'Hello Packers Website',

            replyto: form.email,

            name: form.name,
            phone: form.phone,
            email: form.email,

            'Moving From': form.from,
            'Moving To': form.to,
            'Home Size': form.homeSize,
            'Service Required': form.service,
            'Preferred Moving Date': form.date,

            message:
              `New Hello Packers Quote Request\n\n` +
              `Name: ${form.name}\n` +
              `Phone: ${form.phone}\n` +
              `Email: ${form.email}\n` +
              `Moving From: ${form.from}\n` +
              `Moving To: ${form.to}\n` +
              `Home Size: ${form.homeSize}\n` +
              `Service Required: ${form.service}\n` +
              `Preferred Moving Date: ${form.date}\n\n` +
              `Submitted from Hello Packers website.`,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            'Unable to send your request right now.'
        );
      }

      setSent(true);
      setForm(INITIAL_FORM);
    } catch (submitError) {
      console.error(
        'Web3Forms submission error:',
        submitError
      );

      setError(
        'Sorry, your request could not be sent. Please try again.'
      );
    } finally {
      setSending(false);
    }
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
          event.target ===
          event.currentTarget
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
                Fill in your moving details and our
                team will get back to you with the
                best quote.
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
              {/* NAME + PHONE */}

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

              {/* EMAIL */}

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

              {/* FROM + TO */}

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

              {/* HOME SIZE + SERVICE */}

              <div className="quote-popup__row">
                <div className="quote-popup__field">
                  <label htmlFor="quote-home-size">
                    Home Size (BHK) *
                  </label>

                  <select
                    id="quote-home-size"
                    value={form.homeSize}
                    onChange={update('homeSize')}
                    required
                  >
                    <option
                      value=""
                      disabled
                    >
                      Select home size
                    </option>

                    <option value="1 RK">
                      1 RK
                    </option>

                    <option value="1 BHK">
                      1 BHK
                    </option>

                    <option value="2 BHK">
                      2 BHK
                    </option>

                    <option value="3 BHK">
                      3 BHK
                    </option>

                    <option value="4+ BHK">
                      4+ BHK
                    </option>

                    <option value="Office / Commercial">
                      Office / Commercial
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

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
                </div>
              </div>

              {/* MOVING DATE */}

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

              {/* ERROR */}

              {error && (
                <div
                  className="quote-popup__error"
                  role="alert"
                >
                  {error}
                </div>
              )}

              {/* SUBMIT */}

              <button
                type="submit"
                className="quote-popup__submit"
                disabled={sending}
                aria-busy={sending}
              >
                {sending
                  ? 'Sending Request...'
                  : 'Send Quote Request'}

                {!sending && <IconArrowRight />}
              </button>

              <p className="quote-popup__privacy">
                Your details are used only to respond
                to your enquiry.
              </p>
            </form>
          </>
        ) : (
          /* SUCCESS */

          <div className="quote-popup__success">
            <div className="quote-popup__success-icon">
              <IconCheck />
            </div>

            <span className="quote-popup__eyebrow">
              REQUEST RECEIVED
            </span>

            <h2>
              Thank You! 🎉
            </h2>

            <p>
              Your quote request has been sent
              successfully. Our team will contact
              you shortly.
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