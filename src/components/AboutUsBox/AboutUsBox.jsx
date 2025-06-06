import { Link } from "react-router-dom";

import "./AboutUsBox.css";

const AboutUsBox = () => {
  return (
    <section className="about-us">
      <div className="row">
        <div className="about-col">
          <h1>Welcome to VIT-AP University
            APPLY KNOWLEDGE, IMPROVE LIFE® </h1>
          <p>
            VIT has been a forerunner in delivering quality education. Consistently ranked among the top educational institutes in the country, the VIT group of institutions have had a proud tradition of pursuing knowledge and excellence. In keeping with this tradition, the leadership at VIT-AP resonates a dynamic blend of academic initiative and industry partnership with a vision of creating one of the finest academic destinations in the world.
          </p>
          <Link to="#" className="hero-btn red-btn">
            EXPLORE NOW
          </Link>
        </div>
        <div className="about-col">
          <img src="images/about.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutUsBox;
