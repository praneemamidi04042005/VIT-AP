import { Link } from "react-router-dom";

import "./TextBox.css";

const TextBox = () => {
  return (
    <div className="text-box">
      <h1>VIT-AP University: A Hub of Innovation and Excellence</h1>
      <p>
        Join one of India&apos;s leading universities where education meets
        innovation. Discover a vibrant campus life, cutting-edge research,
        and world-class faculty committed to your success.
      </p>
      <Link to="/" className="hero-btn">
        Visit Us To Know More
      </Link>
    </div>
  );
};

export default TextBox;
