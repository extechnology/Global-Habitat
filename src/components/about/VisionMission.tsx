import { motion } from "framer-motion";
import { Reveal } from "../shared/Reveal";
import g3 from "../../assets/gallery-3.jpeg";

function VisionMission() {
  return (
    <section className="bg-[#f9f7f4] py-10 md:py-24">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <Reveal direction="left">
            <div className="relative aspect-4/3 overflow-hidden rounded-sm shadow-soft">
              <motion.img
                initial={{ scale: 1.12 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
                src={g3}
                alt="Global Habitat — Vision & Mission"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </Reveal>

          {/* Text */}
          <Reveal direction="right">
            <p className="eyebrow text-gold">Our Vision &amp; Mission Statement</p>

            <p className="mt-5 text-muted-foreground text-justify text-sm md:text-base leading-[1.9]">
              To redefine luxury living by creating exceptional residential
              communities that blend timeless architecture, modern innovation,
              and sustainable development. We strive to exceed customer
              expectations through thoughtfully designed spaces that deliver
              comfort, elegance, and lasting value while building trust through
              quality, integrity, and excellence.
            </p>

            <div className="hairline my-4" />

            <p className="text-muted-foreground text-justify text-sm md:text-base leading-[1.9]">
              Our mission is to develop premium homes with uncompromising
              quality, superior craftsmanship, and meticulous attention to every
              detail. We are committed to maintaining transparency throughout
              every stage of the journey, delivering projects on time, and
              creating living spaces that enrich lifestyles. By combining
              innovation, reliability, and a deep respect for our customers, we
              aim to be the most trusted name in luxury real estate.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
