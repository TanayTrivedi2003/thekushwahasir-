import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaBolt,
  FaHandshake
} from "react-icons/fa";

export default function WorkTogether() {

  return (

    <section
      className="work-section"
      id="work-together"
    >

      <div className="work-container">

        {/* LEFT SIDE */}

        <div className="work-left">

          <span className="section-label">
            Work Together
          </span>

          <h2 className="work-title">

            Let’s Build
            <br />

            Something
            <span> Great</span>

            <br />

            Together

          </h2>

          <p className="work-description">

            Collaborate with The Kushwaha Sir
            for educational campaigns,
            viral learning content,
            mathematics branding,
            and impactful student outreach.

          </p>

          <div className="work-info">

            <div className="work-item">

              <div className="work-icon">
                <FaEnvelope />
              </div>

              <p>
                contact@thekushwahasir.com
              </p>

            </div>

            <div className="work-item">

              <div className="work-icon">
                <FaMapMarkerAlt />
              </div>

              <p>
                Varanasi, India · Available Worldwide
              </p>

            </div>

            <div className="work-item">

              <div className="work-icon">
                <FaBolt />
              </div>

              <p>
                Response within 24 hours
              </p>

            </div>

            <div className="work-item">

              <div className="work-icon">
                <FaHandshake />
              </div>

              <p>
                Open for collaborations & brand partnerships
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="work-form-wrapper">

          <form
            className="work-form"
            onSubmit={(e) => e.preventDefault()}
          >

            <div className="form-row">

              <div className="form-group">

                <label>
                  First Name
                </label>

                <input
                  type="text"
                  placeholder="Rahul"
                />

              </div>

              <div className="form-group">

                <label>
                  Last Name
                </label>

                <input
                  type="text"
                  placeholder="Sharma"
                />

              </div>

            </div>

            <div className="form-group">

              <label>
                Company / Brand
              </label>

              <input
                type="text"
                placeholder="Your company name"
              />

            </div>

            <div className="form-group">

              <label>
                Work Email
              </label>

              <input
                type="email"
                placeholder="brand@email.com"
              />

            </div>

            <div className="form-group">

              <label>
                Partnership Type
              </label>

              <select defaultValue="">

                <option value="" disabled>
                  Select Partnership Type
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

            </div>

            <div className="form-group">

              <label>
                Tell About Your Project
              </label>

              <textarea
                rows="6"
                placeholder="Describe your campaign, goals, and timeline..."
              />

            </div>

            <button
              type="submit"
              className="work-btn"
            >

              Send Inquiry →

            </button>

          </form>

        </div>

      </div>

    </section>
  );
}