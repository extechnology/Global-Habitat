import { motion } from "framer-motion";
import { Reveal, Stagger, staggerItem } from "../shared/Reveal";
import g5 from "../../assets/gallery-5.jpeg";

const values = [
  {
    title: "Loyalty",
    text: "We build lifelong relationships with our customers and honor the trust you place in us.",
  },
  {
    title: "Integrity",
    text: "We act with honesty and unity, letting our values guide every decision.",
  },
  {
    title: "Functionality",
    text: "Our homes maximize space and comfort, blending beauty with practical design.",
  },
  {
    title: "Excellence",
    text: "We strive for excellence in every detail and every project.",
  },
];

function WhyUs() {
  return (
    <section className="bg-white py-8 md:py-24">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-2 md:gap-12 gap-6 lg:gap-16 items-start">
          {/* Left — Text content */}
          <Reveal direction="left">
            <p className="eyebrow text-gold">What Drives Us</p>
            <h2 className="text-display mt-3 text-[clamp(1.8rem,3.5vw,2.7rem)] text-ink">
              Our Guiding Principles
            </h2>
            <p className="mt-3 text-muted-foreground text-justify text-sm md:text-base leading-[1.9]">
              At the heart of every project, we are guided by integrity,
              quality, innovation, and customer satisfaction. We believe in
              creating exceptional living spaces that combine modern design,
              superior craftsmanship, and lasting value. Transparency, trust,
              and timely delivery define every relationship we build. Our
              commitment to sustainable development and attention to every
              detail ensure that each villa reflects excellence, comfort, and
              elegance, providing homeowners with a lifestyle that exceeds
              expectations for generations to come.
            </p>

            <div className="hairline my-5" />

            {/* Values list */}
            <Stagger
              className="space-y-4"
              delayChildren={0.05}
              staggerChildren={0.1}
            >
              {values.map((v) => (
                <motion.div key={v.title} variants={staggerItem}>
                  <p className="text-display text-sm font-semibold text-ink">
                    {v.title}
                  </p>
                  <p className="mt-1 text-muted-foreground text-sm leading-relaxed">
                    {v.text}
                  </p>
                </motion.div>
              ))}
            </Stagger>
          </Reveal>

          {/* Right — Image */}
          <Reveal direction="right" className="lg:sticky lg:top-28">
            <div className="relative aspect-square overflow-hidden rounded-sm shadow-soft">
              <motion.img
                initial={{ scale: 1.12 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
                src={g5}
                alt="Our Guiding Principles — Global Habitat"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;