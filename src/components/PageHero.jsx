import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import './PageHero.css';

export default function PageHero({
  crumb,
  eyebrow,
  titleWhite,
  titleCyan,
  description,
  trustItems,
  image,
  imageAlt,
  script,
  primaryCta,
  align = 'left',
}) {
  return (
    <section className="page-hero">
      <div className="container page-hero__grid">
        <Reveal className="page-hero__copy">
          {crumb && (
            <div className="page-hero__crumb">
              <Link to="/">Home</Link> <span>/</span> <span>{crumb}</span>
            </div>
          )}
          <span className="eyebrow eyebrow--light">{eyebrow}</span>
          <h1 className="page-hero__title">
            {titleWhite} {titleCyan && <span className="text-cyan">{titleCyan}</span>}
          </h1>
          <p className="page-hero__desc">{description}</p>

          {trustItems && (
            <ul className="page-hero__trust">
              {trustItems.map((t) => (
                <li key={t.label}>
                  <span className="page-hero__trust-icon">{t.icon}</span>
                  {t.label}
                </li>
              ))}
            </ul>
          )}

          {primaryCta}
        </Reveal>

        {image && (
          <Reveal className="page-hero__media" style={{ transitionDelay: '0.12s' }}>
            <img src={image} alt={imageAlt || ''} />
            {script && <span className="script-tag page-hero__script">{script}</span>}
          </Reveal>
        )}
      </div>
    </section>
  );
}
