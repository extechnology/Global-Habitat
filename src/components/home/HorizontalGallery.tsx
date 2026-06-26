import { ArrowUpRight } from "lucide-react";

interface GalleryItem {
  title: string;
  subtitle: string;
  image: string;
}

const gallery: GalleryItem[] = [
  {
    title: "Luxury\nRedefined",
    subtitle: "The pinnacle of ultra-luxury living.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200",
  },
  {
    title: "Unparalleled\nLiving Experience",
    subtitle: "Offering a level of comfort and luxury.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
  },
  {
    title: "Inspired\nInteriors",
    subtitle: "Every detail crafted for elegance.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200",
  },
  {
    title: "Timeless\nArchitecture",
    subtitle: "Designed to inspire generations.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
  },
];

const HorizontalGallery = () => {
  return (
    <div
      className="
        flex
        gap-4
        overflow-x-auto
        scroll-smooth
        snap-x
        snap-mandatory
        pb-4
        scrollbar-hide
        sm:gap-6
        sm:pb-6
        lg:pr-10
      "
    >
      {gallery.map((item) => (
        <div
          key={item.title}
          className="
group
relative

basis-[85%]
sm:basis-[70%]
md:basis-1/2
xl:basis-[48%]

shrink-0

h-[320px]
sm:h-[420px]
md:h-[500px]
lg:h-[600px]

overflow-hidden
rounded-md
snap-start
cursor-pointer
transition-all
duration-700
"
        >
          {/* Image */}
          <img
            src={item.image}
            alt={item.title}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          {/* Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-linear-to-t
              from-black/80
              via-black/20
              to-transparent
            "
          />

          {/* Text */}
          <div
            className="
              absolute
              bottom-6
              left-6
              right-6
              text-white
              sm:bottom-8
              sm:left-8
              sm:right-8
              lg:bottom-10
              lg:left-10
              lg:right-10
            "
          >
            <h3
              className="
                whitespace-pre-line
                text-2xl
                font-light
                leading-tight
                sm:text-3xl
                lg:text-4xl
              "
            >
              {item.title}
            </h3>

            <p
              className="
                mt-3
                max-w-xs
                text-white/75
                sm:mt-5
                text-xs
                sm:text-lg
              "
            >
              {item.subtitle}
            </p>

            <div
              className="
                mt-5
                flex
                items-center
                gap-3
                translate-y-8
                opacity-0
                transition-all
                duration-500
                group-hover:translate-y-0
                group-hover:opacity-100
                sm:mt-8
              "
            >
              <span className="text-sm uppercase tracking-[0.25em]">
                Explore
              </span>

              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalGallery;
