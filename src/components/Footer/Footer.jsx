import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <section className="footer">
      <h4>About Us</h4>
      <p>
        At VIT-AP University, we are committed to academic excellence,
        innovation, and the holistic development of our students. Our mission is
        to empower individuals with knowledge, foster creativity, and build a
        future-ready learning community. With world-class faculty and modern
        infrastructure, we strive to shape tomorrow’s leaders and changemakers.
      </p>

      <div className="icons">
        <FontAwesomeIcon icon={faFacebookF} className="fab" />
        <FontAwesomeIcon icon={faTwitter} className="fab" />
        <FontAwesomeIcon icon={faInstagram} className="fab" />
        <FontAwesomeIcon icon={faLinkedinIn} className="fab" />
      </div>
    </section>
  );
};

export default Footer;
