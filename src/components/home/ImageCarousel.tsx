import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Img1 from "../../assets/gallery-1.jpeg";
import Img2 from "../../assets/gallery-2.jpeg";
import Img3 from "../../assets/gallery-3.jpeg";

import { Autoplay } from "swiper/modules";
const images = [Img1, Img2, Img3];

import "swiper/css";

const ImageCarousel = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        allowTouchMove={false} // optional: disables manual swipe
        className="h-screen"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`slide ${i + 1}`}
              className="h-screen w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
