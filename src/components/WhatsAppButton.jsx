import { CONTACT } from '../siteData';
import { IconWhatsapp, IconPhone } from './Icons';
import './WhatsAppButton.css';

export default function WhatsAppButton() {

  const message = encodeURIComponent(
    `👋 Hi Hello Packers Team!\n\n` +
    `I'm planning a move and would like a free quote. Here are my details:\n\n` +
    `🙍 Name: \n` +
    `📞 Phone: \n` +
    `📧 Email: \n` +
    `📍 Moving From: \n` +
    `📍 Moving To: \n` +
    `🏠 Home Size (BHK): \n` +
    `📦 Service Needed: \n` +
    `📅 Preferred Date: \n\n` +
    `Please share your best quote. Thank you! 🙏`
  );

  const whatsappLink =
    `https://wa.me/${CONTACT.whatsapp}?text=${message}`;

  return (
    <div className="quick-fab">

      <a
        href={`tel:${CONTACT.phone}`}
        className="quick-fab__btn quick-fab__btn--call"
        aria-label="Call us"
      >
        <IconPhone />
        <span className="quick-fab__tooltip">Call Us</span>
      </a>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="quick-fab__btn quick-fab__btn--whatsapp"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="quick-fab__ping" aria-hidden="true" />
        <span className="quick-fab__auto-bubble">
          Need a quote? Chat now! 💬
        </span>
        <IconWhatsapp />
        <span className="quick-fab__tooltip">Chat on WhatsApp</span>
      </a>

    </div>
  );
}