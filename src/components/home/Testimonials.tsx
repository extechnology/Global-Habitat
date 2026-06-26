import { Reveal } from "../shared/Reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import constructionImg from "../../assets/construction.jpeg"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const testimonials = [
  {
    quote:
      "From the first site visit to the day we received our keys, every step felt deliberate, transparent and exceptionally well crafted.",
    name: "Anjali & Rohan Menon",
    role: "Misty Hills • Villa 12",
  },
  {
    quote:
      "Global Habitat's attention to material, light and proportion is rare. Our home feels custom—at a price that didn't ask us to compromise.",
    name: "Karthik Subramanian",
    role: "Bella Casa • Owner",
  },
  {
    quote:
      "The weekly updates, the cleanliness on site, the calm of the team made the entire experience stress free. We couldn't have chosen a better builder.",
    name: "Meera Iyer",
    role: "Misty Hills • Villa 07",
  },
  {
    quote:
      "Their design language is elegant yet practical. Every room has purpose, and every detail feels carefully considered.",
    name: "Arjun Nair",
    role: "Bella Casa • Homeowner",
  },
];

function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-ink py-8 md:py-36">
      <div className="absolute inset-0 opacity-25">
        <img
          src={constructionImg}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink/75" />
      </div>
      <div className="container-luxe px-4">
        <Reveal>
          <p className="eyebrow text-center">Testimonials</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-display mx-auto mt-3 max-w-3xl text-center text-[clamp(2rem,4vw,3.6rem)] text-white">
            Crafted Homes,
            <span className="italic"> Genuine Experiences</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-3 max-w-2xl text-center text-xs md:text-[15px] leading-5 text-muted-foreground">
            Every project is built with attention to detail, transparency, and
            timeless design. Here's what homeowners have to say.
          </p>
        </Reveal>

        <div className="relative mt-5">
          <button className="testimonial-prev absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-black/10 bg-white p-2 shadow-lg transition hover:scale-110 lg:flex">
            <ChevronLeft size={20} />
          </button>

          <button className="testimonial-next absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-black/10 bg-white p-3 shadow-lg transition hover:scale-110 lg:flex">
            <ChevronRight size={20} />
          </button>

          <Swiper
            modules={[Pagination, Navigation, EffectCoverflow, Autoplay]}
            centeredSlides
            loop
            grabCursor
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 1.4,
              },
              1024: {
                slidesPerView: 2.2,
              },
              1280: {
                slidesPerView: 2.6,
              },
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 40,
              depth: 120,
              modifier: 2,
              scale: 0.9,
              slideShadows: false,
            }}
            className="pb-5!"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.name}>
                <div className="group h-full rounded-md border border-black/5 bg-ink p-5 shadow-[0_15px_60px_rgba(0,0,0,.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_80px_rgba(0,0,0,.12)]">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill="#C8A96A"
                          color="#C8A96A"
                        />
                      ))}
                    </div>

                    <Quote
                      className="text-gold opacity-20 transition group-hover:rotate-12 group-hover:opacity-40"
                      size={42}
                    />
                  </div>

                  <p className="mt-4 text-sm md:text-lg leading-9 text-white italic">
                    "{item.quote}"
                  </p>

                  <div className="mt-5 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-lg font-semibold text-white">
                      {item.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>

                    <div>
                      <h4 className="font-medium text-xs md:text-sm text-white">
                        {item.name}
                      </h4>

                      <p className="mt-1 text-xs md:text-sm tracking-[0.15em] uppercase text-muted-foreground">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>{`
        .swiper-pagination{
          bottom:0 !important;
        }

        .swiper-pagination-bullet{
          width:8px;
          height:8px;
          opacity:.25;
          background:#111;
          transition:.4s;
        }

        .swiper-pagination-bullet-active{
          width:34px;
          border-radius:999px;
          background:#C8A96A;
          opacity:1;
        }

        .swiper-slide{
          transition:all .45s ease;
          opacity:.45;
          transform:scale(.88);
        }

        .swiper-slide-active{
          opacity:1;
          transform:scale(1);
        }
      `}</style>
    </section>
  );
}

export default Testimonials;
