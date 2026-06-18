import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import logo3 from "../assets/images/logo3.png";
import logo4 from "../assets/images/logo4.png";
import logo5 from "../assets/images/logo5.png";

function Slider() {

  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
  ];

  return (
    <section className="trusted">

      <div className="container">

        {/* Section Title */}
        <div className="sec-title">
          <h3 className="title">
            Trusted by <span>Industry Leaders</span>
          </h3>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={5}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },

            768: {
              slidesPerView: 3,
            },

            1024: {
              slidesPerView: 5,
            },
          }}
          className="mySwiper"
        >

          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <img src={logo} alt={`logo-${index}`} />
            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  );
}

export default Slider;