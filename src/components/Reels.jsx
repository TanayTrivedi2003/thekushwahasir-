import "../styles/reels.css";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay
} from "swiper/modules";

import "swiper/css";

export default function Reels() {

  const reels = [

    {
      video: "/reel1.mp4",
      link: "https://www.instagram.com/thekushwahasir/reel/DWx3w6IgGug/"
    },

    {
      video: "/reel2.mp4",
      link: "https://www.instagram.com/thekushwahasir/reel/DWvCGlsEs2u/"
    },

    {
      video: "/reel3.mp4",
      link: "https://www.instagram.com/thekushwahasir/reel/DWk9D6gEiiU/"
    },

    {
      video: "/reel4.mp4",
      link: "https://www.instagram.com/thekushwahasir/reel/DX_FMyEB2yY/"
    },

    {
      video: "/reel5.mp4",
      link: "https://www.instagram.com/reel/DXjgpwGktzZ/"
    },

    {
      video: "/reel6.mp4",
      link: "https://www.instagram.com/reel/DXEyiGJktmM/"
    },

    {
      video: "/reel7.mp4",
      link: "https://www.instagram.com/thekushwahasir/reel/DW-uWr_ALGY/"
    },

    {
      video: "/reel8.mp4",
      link: "https://www.instagram.com/thekushwahasir/reel/DW5lClHz1wo/"
    },

    {
      video: "/reel9.mp4",
      link: "https://www.instagram.com/thekushwahasir/reel/DW8KCYzAMpe/"
    }

  ];

  return (

    <section className="reels-section">

      <div className="reels-top">

        <span className="section-label">
          Instagram Reels
        </span>

        <h2 className="section-title">
          REELS THAT EDUCATE
        </h2>

      </div>

      <Swiper

        slidesPerView={"auto"}

        centeredSlides={true}

        loop={true}

        speed={1000}

        spaceBetween={30}

        grabCursor={true}

        autoplay={{
          delay:2200,
          disableOnInteraction:false
        }}

        modules={[
          Autoplay
        ]}

        className="reels-swiper"
      >

        {reels.map((reel, index) => (

          <SwiperSlide
            className="reel-slide"
            key={index}
          >

            <a
              href={reel.link}
              target="_blank"
              rel="noreferrer"
              className="modern-reel-card"
            >

              <video
                src={reel.video}
                className="modern-reel-video"
                autoPlay
                muted
                loop
                playsInline
              />

              <div className="modern-reel-overlay">

                <span>
                  Watch Reel
                </span>

              </div>

            </a>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>
  );
}