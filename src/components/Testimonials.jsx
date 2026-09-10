import Reveal from './Reveal';
import { IconQuote, IconStar } from './Icons';
import { TESTIMONIALS } from '../siteData';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <Reveal as="div" stagger className="testimonials">
      {TESTIMONIALS.map((t) => (
        <div key={t.name} className="testimonial-card">
          <IconQuote className="testimonial-card__quote" />
          <p className="testimonial-card__text">{t.quote}</p>
          <div className="testimonial-card__footer">
            <div className="testimonial-card__avatar">{t.name.charAt(0)}</div>
            <div>
              <div className="testimonial-card__name">{t.name}</div>
              <div className="testimonial-card__place">{t.place}</div>
            </div>
            <div className="testimonial-card__stars">
              {Array.from({ length: 5 }).map((_, i) => <IconStar key={i} />)}
            </div>
          </div>
        </div>
      ))}
    </Reveal>
  );
}
