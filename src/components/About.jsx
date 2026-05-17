export default function About() {

  return (

    <section id="about" className="about-section">

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

        <div className="about-stats">

          <div className="about-stat">

            <h3>710.6+</h3>

            <span>Followers</span>

          </div>

          <div className="about-stat">

            <h3>2.4B</h3>

            <span>Total Views</span>

          </div>

          <div className="about-stat">

            <h3>140+</h3>

            <span>Viral Videos</span>

          </div>

        </div>

      </div>

    </section>
  );
}