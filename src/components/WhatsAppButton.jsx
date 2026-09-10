import { CONTACT } from '../siteData';
import { IconWhatsapp } from './Icons';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi Hello Packers, I'd like a quote for my move."
  );

  return (
    <a
      href={`https://wa.me/${CONTACT.whatsapp}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-fab"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="whatsapp-fab__ping" aria-hidden="true" />
      <IconWhatsapp />
    </a>
  );
}
