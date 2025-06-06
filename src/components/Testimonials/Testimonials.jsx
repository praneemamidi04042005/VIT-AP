import "./Testimonials.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h1>What Our Students Say</h1>
      <p>
        Hear from our students about their enriching experiences at VIT-AP University.
      </p>
      <div className="row">
        <div className="testimonial-col">
          <img src="/images/user1.jpg" alt="Student testimonial" />
          <div>
            <p>
              &quot;VIT-AP has been a game-changer in my academic journey. The blend
              of quality education, modern infrastructure, and supportive faculty
              truly sets it apart.&quot;
            </p>
            <h3>Priya Reddy</h3>
            <div className="stars">
              {[...Array(4)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="filled-star" />
              ))}
              <FontAwesomeIcon icon={faStar} className="empty-star" />
            </div>
          </div>
        </div>

        <div className="testimonial-col">
          <img src="/images/user2.jpg" alt="Student testimonial" />
          <div>
            <p>
              &quot;At VIT-AP, learning goes beyond classrooms. The vibrant
              campus life and focus on research and innovation have shaped me into
              a confident professional.&quot;
            </p>
            <h3>Rahul Varma</h3>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="filled-star" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
