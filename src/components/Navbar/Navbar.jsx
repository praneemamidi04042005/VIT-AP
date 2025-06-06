import "./Navbar.css";

import { Link } from "react-router-dom";



import logo from "/images/logo.png";

const Navbar = () => {

  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <div className="nav-links" id="navLinks">

        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/course">COURSE</Link>
          </li>
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
