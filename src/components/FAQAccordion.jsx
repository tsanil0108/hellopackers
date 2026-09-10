import { useState } from 'react';
import Reveal from './Reveal';
import { IconPlus } from './Icons';
import './FAQAccordion.css';

export default function FAQAccordion({ items }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <Reveal as="div" className="faq">
      {items.map((f, i) => {
        const isOpen = openIdx === i;
        return (
          <div key={f.q} className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
            <button
              className="faq__question"
              onClick={() => setOpenIdx(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              {f.q}
              <IconPlus className="faq__icon" />
            </button>
            <div className="faq__answer" style={{ maxHeight: isOpen ? '200px' : '0px' }}>
              <p>{f.a}</p>
            </div>
          </div>
        );
      })}
    </Reveal>
  );
}
