import "../styles/aboutpage.css";

import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

export default function AboutPage() {

  return (

    <>
      {/* NAVBAR */}
      <Navbar />

      <section className="about-page">

        

        <div className="about-page-container">

          {/* LEFT CONTENT */}

          <div className="about-page-content">

            <span className="about-page-label">
              ABOUT THE KUSHWAHA SIR
            </span>

            <h1>
              Making Mathematics
              Simple, Viral &
              Powerful.
            </h1>

            <p>

              At The Kushwaha Sir, we believe that Mathematics
              is not just a subject — it is a way of thinking,
              solving, and growing.

              Founded by passionate educator Ankit Singh,
              our mission is to make learning simple,
              practical, and enjoyable for every student.

              With years of teaching experience and a strong
              digital presence, we have helped thousands
              of students build confidence in Mathematics
              for CBSE, JEE, NDA, and other competitive
              examinations.

              Our teaching approach focuses on concept
              clarity, smart problem-solving techniques,
              and real understanding instead of rote learning.

              Through interactive classes, shortcut methods,
              and student-friendly explanations, we aim
              to remove the fear of Maths and turn it into
              a strength for every learner.

            </p>

            {/* CARDS */}

           {/* VISION & MISSION */}

<div className="about-page-text-section">

  <div className="about-page-text-block">

    <h2>
      Our Vision
    </h2>

    <p>
      Our vision is to create a new generation of
      confident and independent learners by making
      quality education accessible, engaging, and
      result-oriented. We aim to inspire students
      to develop logical thinking, problem-solving
      abilities, and a strong foundation in Mathematics
      that helps them succeed not only in academics
      but also in life.
    </p>

  </div>

  <div className="about-page-text-block">

    <h2>
      Our Mission
    </h2>

    <p>
      Our mission is to simplify Mathematics for
      every student through modern, practical, and
      impactful teaching methods. We strive to make
      learning easy, interactive, and enjoyable while
      helping students prepare for CBSE, JEE, NDA,
      and other competitive examinations with
      confidence and clarity.
    </p>

  </div>

</div>
          </div>

          {/* RIGHT IMAGE */}

          <div className="about-page-image-wrap">

            <img
              src="/about.jpeg"
              alt="About"
              className="about-page-image"
            />

          </div>

        </div>

      </section>
    </>
  );
}