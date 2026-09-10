import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import photos from '../assets/photos';
import './FinalCTA.css';

export default function FinalCTA({
  titleWhite = 'Ready to Move?',
  titleCyan = "Let's Make It Happen!",
  text = 'Get a free quote today and experience a smoother, safer move.',
  image = photos.truckSunset,
}) {
  return (
    <section className="final-cta" style={{ backgroundImage: `url(${image})` }}>
      <div className="final-cta__scrim" />
      <Reveal as="div" className="container final-cta__inner">
        <div>
          <span className="script-tag final-cta__script">Your Move<br/>Our Priority</span>
          <h2>{titleWhite} <span className="text-cyan">{titleCyan}</span></h2>
          <p>{text}</p>
        </div>
        <Link to="/contact" className="btn btn-primary">Get a Free Quote</Link>
      </Reveal>
    </section>
  );
}
