export default function FooterCTA() {

  return (

    <section id="inquiry" className="footer-cta">

      <div className="footer-glow"></div>

      <span className="section-label">
        Work Together
      </span>

      <h2 className="footer-title">
        LET’S MAKE <br />
        MATHS VIRAL
      </h2>

      <p className="footer-text">
        Collaborations, brand partnerships,
        educational campaigns, speaking events,
        and viral content creation.
      </p>

      <div className="footer-buttons">

        <a
          href="mailto:hello@example.com"
          className="footer-primary-btn"
        >
          Contact Now
        </a>

        <a
          href="#media"
          className="footer-secondary-btn"
        >
          View Content
        </a>

      </div>

      <div className="footer-stats">

        <div className="footer-stat-card">
          <h3>2.4B+</h3>
          <span>Total Views</span>
        </div>

        <div className="footer-stat-card">
          <h3>577K+</h3>
          <span>Followers</span>
        </div>

        <div className="footer-stat-card">
          <h3>140+</h3>
          <span>Viral Videos</span>
        </div>

      </div>

    </section>

  );
}