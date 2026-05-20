import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import {
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";

export default function Testimonials() {

  const comments = [

  "/comment.jpeg",
  "/comment2.jpeg",
  "/comment3.jpeg",
  "/comment4.jpeg",
  "/comment5.jpeg",
  "/comment6.jpeg"

];

  return (

    <section className="testimonials-section">

      <div className="testimonials-top">

        <span className="section-label">
          Student Testimonials
        </span>

        <h2 className="section-title">
          WHAT STUDENTS SAY
        </h2>

      </div>

      {/* ARROWS */}

      <div className="testimonial-nav">

        <button className="testimonial-prev">
          <FaChevronLeft />
        </button>

        <button className="testimonial-next">
          <FaChevronRight />
        </button>

      </div>

      {/* SWIPER */}

      <Swiper

        modules={[Navigation]}

        navigation={{
          prevEl: ".testimonial-prev",
          nextEl: ".testimonial-next"
        }}

        spaceBetween={30}

        loop={true}

        breakpoints={{

          0:{
            slidesPerView:1
          },

          768:{
            slidesPerView:1.3
          },

          1024:{
            slidesPerView:2
          }

        }}

        className="testimonial-swiper"
      >

        {comments.map((comment, index) => (

          <SwiperSlide key={index}>

            <div className="testimonial-card">

              <img
                src={comment}
                alt="Student Comment"
                className="testimonial-image"
              />

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>
  );
}