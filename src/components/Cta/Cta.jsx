import { Link } from "react-router-dom";
import "./Cta.css";
const Cta = () => {
  return (
    <section className="cta">
      <h1>
        Join VIT-AP’s Future-Ready Programs
        <br />
        Apply Online From Anywhere in the World
      </h1>
      <Link to="/contact" className="hero-btn">
        CONTACT ADMISSIONS
      </Link>
    </section>
  );
};
export default Cta;
