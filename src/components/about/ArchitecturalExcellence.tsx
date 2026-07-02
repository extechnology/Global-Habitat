import { motion } from "framer-motion";
import { Reveal, Stagger, staggerItem } from "../shared/Reveal";
import g5 from "../../assets/gallery-5.jpeg";

const categories = [
  {
    img: "/1200 X 900-02.jpg.webp",
    title: "Luxury Residential",
    subtitle: "Premium towers with world-class amenities",
  },
  {
    img: "/1200 X 900-03.jpg.webp",
    title: "Sustainable Design",
    subtitle: "Eco-conscious development practices",
  },
  {
    img: g5,
    title: "Urban Planning",
    subtitle: "Comprehensive city development solutions",
  },
];

function ArchitecturalExcellence() {
  return (
    <section className="bg-white py-8 md:py-18">
      <div className="container-luxe">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto md:mb-14 mb-5">
          <Reveal>
            <p className="eyebrow">Our Portfolio</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-display mt-4 text-[clamp(1.8rem,3.5vw,2.7rem)] text-ink">
              Architectural Excellence
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-muted-foreground text-sm md:text-base leading-[1.85]">
              Our portfolio showcases elegant architecture, innovative design,
              and superior craftsmanship, creating luxurious, sustainable homes
              that combine timeless aesthetics, modern functionality, and
              exceptional quality for lasting value.
            </p>
          </Reveal>
        </div>

        {/* 3-Column Grid */}
        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={staggerItem}
              className="group overflow-hidden rounded-sm shadow-soft"
            >
              {/* Image */}
              <div className="relative aspect-4/3 overflow-hidden">
                <motion.img
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
                  src={cat.img}
                  alt={cat.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Label */}
              <div className="bg-white px-5 py-5 border border-border border-t-0">
                <h3 className="text-display text-base text-ink">{cat.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {cat.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export default ArchitecturalExcellence;
