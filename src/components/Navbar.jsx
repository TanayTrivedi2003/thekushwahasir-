import { useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav>

      {/* LOGO */}

      <a href="/" className="nav-logo">

        <img
          src="/logo.png"
          alt="Logo"
          className="nav-logo-img"
        />

        <h1 className="logo-text">
          The Kushwaha Sir
          <span className="logo-dot"></span>
        </h1>

      </a>

      {/* DESKTOP MENU */}

      <ul className="nav-links">

        <li>
          <a href="#work">
            Work
          </a>
        </li>

        <li>
          <a href="#media">
            Media
          </a>
        </li>

        <li>
          <a href="#about">
            About
          </a>
        </li>

        <li>
          <a href="#brands">
            Brands
          </a>
        </li>

        <li>
          <a
            href="#inquiry"
            className="nav-cta"
          >
            Work Together
          </a>
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

        <a
          href="#work"
          onClick={() => setMenuOpen(false)}
        >
          Work
        </a>

        <a
          href="#media"
          onClick={() => setMenuOpen(false)}
        >
          Media
        </a>

        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>

        <a
          href="#brands"
          onClick={() => setMenuOpen(false)}
        >
          Brands
        </a>

        <a
          href="#inquiry"
          className="mobile-work-btn"
          onClick={() => setMenuOpen(false)}
        >
          Work Together
        </a>

      </div>

    </nav>
  );
}