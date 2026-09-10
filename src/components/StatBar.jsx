import Reveal from './Reveal';
import { STATS } from '../siteData';
import './StatBar.css';

export default function StatBar({ items = STATS, bordered = false }) {
  return (
    <Reveal as="div" stagger className={`stat-bar ${bordered ? 'stat-bar--bordered' : ''}`}>
      {items.map((s) => (
        <div key={s.label} className="stat-bar__item">
          <span className="stat-bar__value">{s.value}</span>
          <span className="stat-bar__label">{s.label}</span>
        </div>
      ))}
    </Reveal>
  );
}
