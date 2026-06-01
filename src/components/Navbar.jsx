import "../styles/navbar.css";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>

      {/* LOGO */}
      <Link to="/" className="nav-logo">
        <img
          src="/logo.png"
          alt="Logo"
          className="nav-logo-img"
        />

        <h1 className="logo-text">
          The Kushwaha Sir
          <span className="logo-dot"></span>
        </h1>
      </Link>

      {/* DESKTOP MENU */}
      <ul className="nav-links">

        <li>
          <Link to="/#work">
            Work
          </Link>
        </li>

        <li>
          <Link to="/#media">
            Media
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant"
              });
            }}
          >
            About
          </Link>
        </li>

        <li>
          <Link to="/#brands">
            Brands
          </Link>
        </li>

        <li>
          <Link
            to="/#inquiry"
            className="nav-cta"
          >
            Work Together
          </Link>
        </li>

      </ul>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>

        <Link
          to="/#work"
          onClick={() => setMenuOpen(false)}
        >
          Work
        </Link>

        <Link
          to="/#media"
          onClick={() => setMenuOpen(false)}
        >
          Media
        </Link>

        <Link
          to="/about"
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "instant"
            });

            setMenuOpen(false);
          }}
        >
          About
        </Link>

        <Link
          to="/#brands"
          onClick={() => setMenuOpen(false)}
        >
          Brands
        </Link>

        <Link
          to="/#inquiry"
          className="mobile-work-btn"
          onClick={() => setMenuOpen(false)}
        >
          Work Together
        </Link>

      </div>

    </nav>
  );
}