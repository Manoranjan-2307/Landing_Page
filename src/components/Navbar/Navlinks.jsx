import React from "react";
import { Link } from "react-router-dom";
import "../../styles/nav.css";

const Navlinks = () => {
  return (
    <nav className="navbar">
      <div className="logo">ZOGO</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        <li><Link to="/features">Features</Link></li>
      </ul>
      <Link to="/sign_in" className="sign-in">Sign In</Link>

    </nav>
  );
};

export default Navlinks;
