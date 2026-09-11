import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { IconArrowRight, IconShield, IconClock, IconUsers } from './Icons';
import photos from '../assets/photos';
import './FinalCTA.css';

export default function FinalCTA({
  titleWhite = 'Ready to Move?',
  titleCyan = "Let's Make It Happen!",
  text = 'Get a free quote today and experience a smoother, safer move.',
  image = photos.truckSunset,
}) {
  return (
    <section
      className="final-cta"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="final-cta__overlay" />

      <div className="final-cta__glow final-cta__glow--one" />
      <div className="final-cta__glow final-cta__glow--two" />

      <Reveal as="div" className="container final-cta__inner">
        <div className="final-cta__content">
          <div className="final-cta__eyebrow">
            <span className="final-cta__eyebrow-dot" />
            <span>HELLO PACKERS</span>
          </div>

          <span className="script-tag final-cta__script">
            Your Move
            <br />
            Our Priority
          </span>

          <h2>
            {titleWhite}{' '}
            <span className="text-cyan">{titleCyan}</span>
          </h2>

          <p>{text}</p>

          <div className="final-cta__trust">
            <div className="final-cta__trust-item">
              <span>
                <IconShield />
              </span>
              <strong>Safe & Secure</strong>
            </div>

            <div className="final-cta__trust-item">
              <span>
                <IconClock />
              </span>
              <strong>On-Time Service</strong>
            </div>

            <div className="final-cta__trust-item">
              <span>
                <IconUsers />
              </span>
              <strong>Expert Team</strong>
            </div>
          </div>
        </div>

        <div className="final-cta__action">
          <div className="final-cta__action-card">
            <span className="final-cta__action-label">
              Start Your Move
            </span>

            <h3>Get Your Free Quote</h3>

            <p>
              Tell us what you need and we'll help you plan your move.
            </p>

            <Link to="/contact" className="btn btn-primary final-cta__button">
              Get a Free Quote
              <IconArrowRight />
            </Link>

            <span className="final-cta__note">
              Quick response • No obligation
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}