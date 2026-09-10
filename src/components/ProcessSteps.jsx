import Reveal from './Reveal';
import { IconArrowRight } from './Icons';
import './ProcessSteps.css';

export default function ProcessSteps({ steps, dark = false }) {
  return (
    <Reveal as="div" stagger className={`process ${dark ? 'process--dark' : ''}`}>
      {steps.map((s, i) => (
        <div className="process__step-wrap" key={s.n}>
          <div className="process__step">
            <span className="process__num">{s.n}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
          {i < steps.length - 1 && (
            <span className="process__arrow" aria-hidden="true"><IconArrowRight /></span>
          )}
        </div>
      ))}
    </Reveal>
  );
}
