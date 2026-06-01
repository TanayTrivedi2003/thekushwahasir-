import "../styles/testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  EffectCoverflow,
  Autoplay
} from "swiper/modules";

import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-coverflow";

export default function Testimonials() {

  const comments = [

    "/comment.jpeg",
    "/comment2.jpeg",
    "/comment3.jpeg",
    "/comment4.jpeg",
    "/comment5.jpeg",
    "/comment6.jpeg",
    "/comment7.jpeg",
    "/comment8.jpeg",
    "/comment9.jpeg",


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

      <Swiper

        effect={"coverflow"}

        grabCursor={true}

        centeredSlides={true}

        loop={true}

        slidesPerView={"auto"}

        autoplay={{
          delay:2500,
          disableOnInteraction:false
        }}

        coverflowEffect={{
          rotate:0,
          stretch:0,
          depth:180,
          modifier:2,
          scale:0.9,
          slideShadows:false
        }}

        modules={[
          EffectCoverflow,
          Autoplay
        ]}

        className="testimonial-swiper"
      >

        {comments.map((comment, index) => (

          <SwiperSlide key={index}>

            <motion.div

              initial={{
                opacity:0,
                scale:0.85,
                y:60
              }}

              whileInView={{
                opacity:1,
                scale:1,
                y:0
              }}

              transition={{
                duration:0.8
              }}

              viewport={{
                once:true
              }}

              className="testimonial-card"
            >

              <img
                src={comment}
                alt="Student Comment"
                className="testimonial-image"
              />

            </motion.div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>
  );
}