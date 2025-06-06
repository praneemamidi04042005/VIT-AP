import "./ContactComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactComponent = () => {
  return (
    <>
      <section className="contact-us">
        <div className="row">
          {/* Contact Info */}
          <div className="contact-col">
            <div>
              <FontAwesomeIcon icon={faHome} className="icon" />
              <span>
                <h5>VIT-AP University, Inavolu</h5>
                <p>Beside AP Secretariat, Amaravati, Andhra Pradesh - 522237, IN</p>
              </span>
            </div>

            <div>
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <span>
                <h5>0863 2370444</h5>
                <p>Monday to Friday, 9AM to 5PM</p>
              </span>
            </div>

            <div>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <span>
                <h5>info@vitap.ac.in</h5>
                <p>Email us your queries anytime</p>
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-col">
            <form action="">
              <input type="text" placeholder="Enter your name" required />
              <input type="email" placeholder="Enter email address" required />
              <input type="text" placeholder="Enter your subject" required />
              <textarea rows="8" placeholder="Message" required></textarea>
              <button type="submit" className="hero-btn red-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactComponent;
