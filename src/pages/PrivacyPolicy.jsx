import { Link } from 'react-router-dom';
import logo from '../assets/logo-full.png';
import './PrivacyPolicy.css';

export default function PrivacyPolicy() {
  return (
    <main className="privacy-page">

      {/* HERO */}
      <section className="privacy-hero">
        <div className="container privacy-hero__inner">
          <span className="privacy-eyebrow">
            HELLO PACKERS
          </span>

          <h1>
            Privacy <span>Policy</span>
          </h1>

          <p>
            Your privacy matters to us. This Privacy Policy explains
            how Hello Packers collects, uses and protects information
            when you use our website and services.
          </p>

          <div className="privacy-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </section>


      {/* CONTENT */}
      <section className="privacy-content">
        <div className="container privacy-layout">

          {/* SIDEBAR */}
          <aside className="privacy-sidebar">
            <div className="privacy-sidebar__card">
              <div className="privacy-sidebar__logo">
                <img
                  src={logo}
                  alt="Hello Packers"
                />
              </div>

              <strong>
                Privacy Policy
              </strong>

              <span>
                Hello Packers
              </span>

              <div className="privacy-sidebar__line" />

              <a href="#information">
                Information We Collect
              </a>

              <a href="#usage">
                How We Use Information
              </a>

              <a href="#sharing">
                Information Sharing
              </a>

              <a href="#cookies">
                Cookies
              </a>

              <a href="#security">
                Data Security
              </a>

              <a href="#rights">
                Your Rights
              </a>

              <a href="#contact">
                Contact Us
              </a>
            </div>
          </aside>


          {/* MAIN POLICY */}
          <article className="privacy-article">

            <div className="privacy-updated">
              <span>Last Updated</span>
              <strong>September 2026</strong>
            </div>


            <section className="privacy-section">
              <h2>1. Introduction</h2>

              <p>
                Welcome to Hello Packers. We respect your privacy and
                are committed to protecting the information you share
                with us when you use our website or contact us regarding
                packing, moving, relocation, transportation or related
                services.
              </p>

              <p>
                This Privacy Policy describes the types of information
                we may collect, how we may use that information and the
                choices available to you.
              </p>
            </section>


            <section
              id="information"
              className="privacy-section"
            >
              <h2>2. Information We Collect</h2>

              <p>
                When you request a quote, contact us or submit a form
                through our website, we may collect information such as:
              </p>

              <ul>
                <li>Your name</li>
                <li>Phone or mobile number</li>
                <li>Email address</li>
                <li>Moving-from location</li>
                <li>Moving-to location</li>
                <li>Preferred moving date</li>
                <li>Type of relocation or service requested</li>
                <li>Additional information you voluntarily provide</li>
              </ul>

              <p>
                We may also receive basic technical information about
                your interaction with our website, such as browser type,
                device information and pages visited.
              </p>
            </section>


            <section
              id="usage"
              className="privacy-section"
            >
              <h2>3. How We Use Your Information</h2>

              <p>
                Information submitted through our website may be used
                for legitimate business purposes, including:
              </p>

              <ul>
                <li>Responding to quote and service enquiries</li>
                <li>Contacting you about your relocation requirement</li>
                <li>Understanding your moving requirements</li>
                <li>Providing information about relevant services</li>
                <li>Improving our website and customer experience</li>
                <li>Managing enquiries and service requests</li>
                <li>Preventing misuse or fraudulent activity</li>
              </ul>
            </section>


            <section
              id="sharing"
              className="privacy-section"
            >
              <h2>4. Information Sharing</h2>

              <p>
                Hello Packers does not intend to sell your personal
                information to third parties.
              </p>

              <p>
                Where necessary to respond to a moving enquiry, your
                information may be shared with relevant service
                providers or network partners involved in handling
                your request.
              </p>

              <p>
                Information may also be disclosed where required by
                applicable law, legal process or to protect the rights,
                safety and security of our business, customers or
                website.
              </p>
            </section>


            <section
              id="cookies"
              className="privacy-section"
            >
              <h2>5. Cookies &amp; Website Technologies</h2>

              <p>
                Our website may use cookies or similar technologies to
                improve website functionality, understand website usage
                and provide a better user experience.
              </p>

              <p>
                Your browser may allow you to control or disable
                cookies through its settings. Disabling certain cookies
                may affect some website functionality.
              </p>
            </section>


            <section
              id="security"
              className="privacy-section"
            >
              <h2>6. Data Security</h2>

              <p>
                We take reasonable measures to protect information
                submitted through our website against unauthorized
                access, misuse, alteration or disclosure.
              </p>

              <p>
                However, no internet transmission or electronic storage
                system can be guaranteed to be completely secure.
              </p>
            </section>


            <section
              id="retention"
              className="privacy-section"
            >
              <h2>7. Data Retention</h2>

              <p>
                We may retain enquiry and contact information for as
                long as reasonably necessary to handle your request,
                provide services, maintain business records or comply
                with applicable legal requirements.
              </p>
            </section>


            <section
              id="rights"
              className="privacy-section"
            >
              <h2>8. Your Choices &amp; Rights</h2>

              <p>
                Depending on applicable law, you may have rights
                relating to the personal information we hold about you,
                including requesting access, correction or deletion of
                certain information.
              </p>

              <p>
                To make a privacy-related request, please contact us
                using the contact details available on our website.
              </p>
            </section>


            <section className="privacy-section">
              <h2>9. Third-Party Links</h2>

              <p>
                Our website may contain links to third-party websites
                or services, including social media platforms. We are
                not responsible for the privacy practices or content of
                third-party websites.
              </p>

              <p>
                We recommend reviewing the privacy policies of those
                websites before providing them with personal
                information.
              </p>
            </section>


            <section className="privacy-section">
              <h2>10. Children's Privacy</h2>

              <p>
                Our services are intended for general users and are not
                specifically directed toward children. We do not
                knowingly request personal information from children
                for independent use of our services.
              </p>
            </section>


            <section className="privacy-section">
              <h2>11. Changes to This Policy</h2>

              <p>
                We may update this Privacy Policy from time to time to
                reflect changes in our website, services or applicable
                requirements.
              </p>

              <p>
                Any updated version will be published on this page with
                a revised update date.
              </p>
            </section>


            <section
              id="contact"
              className="privacy-section privacy-contact"
            >
              <h2>12. Contact Us</h2>

              <p>
                If you have questions, concerns or requests regarding
                this Privacy Policy or the handling of your information,
                please contact Hello Packers through the contact
                details provided on our website.
              </p>

              <div className="privacy-contact__box">
                <strong>Hello Packers</strong>

                <span>
                  Packers &amp; Movers
                </span>

                <Link to="/contact">
                  Contact Hello Packers
                </Link>
              </div>
            </section>


            <div className="privacy-back">
              <Link to="/">
                ← Back to Hello Packers
              </Link>
            </div>

          </article>

        </div>
      </section>

    </main>
  );
}