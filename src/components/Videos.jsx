import { Swiper, SwiperSlide } from "swiper/react";

import {
  EffectCoverflow,
  Pagination,
  Autoplay
} from "swiper/modules";

import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function Videos() {

  const videos = [

    {
      title: "134 Hours Roadmap 2026-27",

      embed: "https://www.youtube.com/embed/TnMbJqs0m7U",

      youtube: "https://youtu.be/TnMbJqs0m7U"
    },

    {
      title: "35 Marks Calculus Strategy",

      embed: "https://www.youtube.com/embed/7JFMIMp25-8",

      youtube: "https://youtu.be/7JFMIMp25-8"
    },

    {
      title: "AOD Increasing & Decreasing Functions",

      embed: "https://www.youtube.com/embed/6QCprqoXGcc",

      youtube: "https://youtu.be/6QCprqoXGcc"
    },

    {
      title: "NDA 1 2026 PYQ Revision",

      embed: "https://www.youtube.com/embed/qDZbr6iMqqs",

      youtube: "https://youtu.be/qDZbr6iMqqs"
    }

  ];

  return (

    <section id="media" className="videos-section">

      <div className="videos-top">

        <span className="section-label">
          Viral Content
        </span>

        <h2 className="section-title">
          VIRAL MATHS CONTENT
        </h2>

      </div>

      <Swiper

        effect={"coverflow"}

        grabCursor={true}

        centeredSlides={true}

        loop={true}

        slidesPerView={"auto"}

        autoplay={{
          delay:3000,
          disableOnInteraction:false
        }}

        coverflowEffect={{
          rotate:0,
          stretch:0,
          depth:220,
          modifier:2.2,
          slideShadows:false,
          scale:0.88
        }}

        pagination={{
          clickable:true
        }}

        modules={[
          EffectCoverflow,
          Pagination,
          Autoplay
        ]}

        className="videos-swiper"
      >

        {videos.map((video, index) => (

          <SwiperSlide
            className="video-slide"
            key={index}
          >

            <motion.div

              initial={{
                opacity:0,
                scale:0.8,
                y:80
              }}

              whileInView={{
                opacity:1,
                scale:1,
                y:0
              }}

              transition={{
                duration:0.8,
                ease:"easeOut"
              }}

              viewport={{
                once:true
              }}

            >

              <a
                href={video.youtube}
                target="_blank"
                rel="noreferrer"
                className="video-card"
              >

                <iframe

                  src={video.embed}

                  title={video.title}

                  className="youtube-video"

                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

                  referrerPolicy="strict-origin-when-cross-origin"

                  allowFullScreen

                ></iframe>

                <div className="video-info">

                  <h3>{video.title}</h3>

                </div>

              </a>

            </motion.div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>
  );
}