import { motion } from "framer-motion";
import { Reveal } from "../shared/Reveal";

function OurStory() {
  return (
    <section className="bg-white py-0 md:py-10">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-2 md:gap-12 gap-6 lg:gap-16 items-center">
          {/* Image */}
          <Reveal direction="left">
            <div className="relative aspect-4/3 overflow-hidden rounded-sm shadow-soft">
              <motion.img
                initial={{ scale: 1.12 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
                src="/1200 x 1500-01.jpg.webp"
                alt="Global Habitat — Our Story"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </Reveal>

          {/* Text */}
          <Reveal direction="right">
            <p className="eyebrow text-gold">Our Story</p>
            <p className="mt-3 text-muted-foreground text-justify text-sm md:text-base leading-[1.9]">
              We are a new age real estate company with a vision to change the
              landscape of emerging Metropolises. Having considerable experience
              in the construction and real estate industry, we have acquired the
              best from every project we worked on. With over 2,00,000+ sq. Ft.
              of construction and 100+ happy customers. This has helped us
              evolve our own work philosophy: one that creates a harmony of
              quality and affordability. Our approach to the industry is honed
              by an innate understanding of individual customer markets. We
              model our projects on these needs; we believe that every home
              ambiance must be in complete harmony with its social, physical and
              psychological environment.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
