export default function Testimonials() {

  return (

    <section
      className="testimonials-section"
      id="media"
    >

      <div className="testimonials-top">

        <span className="section-label">
          Student Testimonials
        </span>

        <h2 className="section-title">
          WHAT STUDENTS SAY
        </h2>

      </div>

      <div className="testimonials-wrapper">

        {/* LEFT COLUMN */}

        <div className="testimonial-column">

          <div className="testimonial-card">
            <img
              src="/comment2.jpeg"
              alt="Comment"
              className="testimonial-image"
            />
          </div>

          <div className="testimonial-card">
            <img
              src="/comment3.jpeg"
              alt="Comment"
              className="testimonial-image"
            />
          </div>

        </div>

        {/* RIGHT COLUMN */}

        <div className="testimonial-column">

          <div className="testimonial-card">
            <img
              src="/comment.jpeg"
              alt="Comment"
              className="testimonial-image"
            />
          </div>

        </div>

      </div>

    </section>
  );
}