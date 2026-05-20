import { useState } from "react";

export default function FooterCTA() {

  const [openForm, setOpenForm] = useState(false);

  return (

    <>

      {/* =========================
      CTA SECTION
      ========================= */}

      <section
        id="inquiry"
        className="footer-cta"
      >

        <div className="footer-glow"></div>

        <span className="section-label">
          Work Together
        </span>

        <h2 className="footer-title">

          LET’S MAKE
          <br />

          MATHS VIRAL

        </h2>

        <p className="footer-text">

          Collaborations, brand partnerships,
          educational campaigns,
          speaking events,
          and viral content creation.

        </p>

        {/* BUTTONS */}

        <div className="footer-buttons">

          <button
            className="footer-primary-btn"
            onClick={() => setOpenForm(true)}
          >

            Contact Now

          </button>

          <a
            href="#media"
            className="footer-secondary-btn"
          >

            View Content

          </a>

        </div>

        {/* STATS */}

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

      {/* =========================
      POPUP FORM
      ========================= */}

      {openForm && (

        <div
          className="popup-overlay"
          onClick={() => setOpenForm(false)}
        >

          <div
            className="popup-container"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}

            <button
              className="popup-close"
              onClick={() => setOpenForm(false)}
            >

              ×

            </button>

            {/* LEFT */}

            <div className="popup-left">

              <span className="section-label">
                Work Together
              </span>

              <h2 className="popup-title">

                Let’s Build
                <br />

                Something
                <span> Great</span>

                <br />

                Together

              </h2>

              <p className="popup-description">

                Collaborate with The Kushwaha Sir
                for educational campaigns,
                viral learning content,
                mathematics branding,
                and impactful student outreach.

              </p>

            </div>

            {/* RIGHT */}

            <div className="popup-right">

              <form
                className="popup-form"
                onSubmit={(e) => e.preventDefault()}
              >

                <div className="popup-row">

                  <input
                    type="text"
                    placeholder="First Name"
                  />

                  <input
                    type="text"
                    placeholder="Last Name"
                  />

                </div>

                <input
                  type="text"
                  placeholder="Company / Brand"
                />

                <input
                  type="email"
                  placeholder="Work Email"
                />

                <select defaultValue="">

                  <option value="" disabled>
                    Partnership Type
                  </option>

                  <option>
                    Brand Promotion
                  </option>

                  <option>
                    Educational Campaign
                  </option>

                  <option>
                    Sponsorship
                  </option>

                  <option>
                    Social Media Collaboration
                  </option>

                </select>

                <textarea
                  rows="6"
                  placeholder="Tell about your project..."
                ></textarea>

                <button
                  type="submit"
                  className="popup-send-btn"
                >

                  Send Inquiry →

                </button>

              </form>

            </div>

          </div>

        </div>

      )}

    </>

  );
}