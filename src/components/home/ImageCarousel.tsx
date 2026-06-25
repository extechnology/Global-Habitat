import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Img1 from "../../assets/gallery-1.jpeg";
import Img2 from "../../assets/gallery-2.jpeg";
import Img3 from "../../assets/gallery-3.jpeg";

const images = [Img1, Img2, Img3];

import "swiper/css";

const ImageCarousel = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, EffectCreative]}
        effect="creative"
        loop
        speed={1200}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        creativeEffect={{
          prev: {
            translate: ["-100%", 0, 0],
            opacity: 0,
          },
          next: {
            translate: ["100%", 0, 0],
            opacity: 1,
          },
        }}
      >
        {images.map((img) => (
          <SwiperSlide key={img}>
            <img src={img} className="h-screen w-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
