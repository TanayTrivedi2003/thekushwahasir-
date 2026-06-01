import "../styles/about.css";

import { Link } from "react-router-dom";

export default function About() {

  return (

    <section id="about" className="about-section">

      {/* LEFT */}

      <div className="about-left">

        <div className="about-image-wrap">

          <div className="about-glow"></div>

          <img
            src="/profile.png"
            alt="About"
            className="about-image"
          />

        </div>

      </div>

      {/* RIGHT */}

      <div className="about-right">

        <span className="section-label">
          About The Creator
        </span>

        <h2 className="about-title">
          Turning Mathematics
          Into Internet
          Culture.
        </h2>

        <p className="about-text">

          The Kushwaha Sir is redefining how students
          experience mathematics through cinematic
          explanations, viral content, and high-energy
          storytelling.

          By combining education with modern creator
          culture, millions of students now see mathematics
          as exciting, visual, and deeply engaging.

        </p>

        {/* BUTTON */}

        <Link
  to="/about"
  className="about-btn"
  onClick={() => window.scrollTo(0, 0)}
>
  Know More
</Link>

        {/* STATS */}

        <div className="about-stats">

          <div className="about-stat">

            <h3>757K+</h3>

            <span>Total Followers</span>

          </div>

          <div className="about-stat">

            <h3>180M+</h3>

            <span>Total Views</span>

          </div>

          <div className="about-stat">

            <h3>150+</h3>

            <span>Viral Videos</span>

          </div>

        </div>

      </div>

    </section>
  );
}