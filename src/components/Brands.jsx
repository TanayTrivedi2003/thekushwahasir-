import "../styles/brands.css";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  FreeMode
} from "swiper/modules";

import "swiper/css";

export default function Brands() {

  const brands = [

    "10th",
    "11th",
    "12th",
    "Academics",
    "Maths",
    "JEE Mains",
    "JEE Advanced",
    "CBSE",
    "UP Board"

  ];

  return (

    <section
      className="brands-section"
      id="brands"
    >

      <div className="brands-top">

        <span className="section-label">
          Social Presence
        </span>

        <h2 className="section-title">
          TRUSTED BY MILLIONS
        </h2>

      </div>

      <Swiper

        slidesPerView={"auto"}

        spaceBetween={34}

        loop={true}

        speed={4000}

        freeMode={true}

        centeredSlides={false}

        grabCursor={true}

        allowTouchMove={true}

        autoplay={{
          delay:0,
          disableOnInteraction:false,
          pauseOnMouseEnter:true
        }}

        modules={[
          Autoplay,
          FreeMode
        ]}

        className="brands-swiper"
      >

        {[...brands, ...brands].map((brand, index) => (

          <SwiperSlide
            className="brand-slide"
            key={index}
          >

            <div className="brand-item">

              <span>
                {brand}
              </span>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>
  );
}