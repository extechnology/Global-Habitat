import { motion } from "framer-motion";
import { Counter } from "../shared/Counter";
import { Reveal,staggerItem,Stagger } from "../shared/Reveal";

function About() {
  const stats = [
    { value: 10, suffix: "+", label: "Years of Experience" },
    { value: 500, suffix: "+", label: "Happy Families" },
    { value: 2, suffix: "", label: "Premium Projects" },
    { value: 100, suffix: "%", label: "Transparent Updates" },
  ];

  return (
    <section id="about" className="relative bg-white py-6 md:py-40 px-0">
      <div className="container-luxe grid lg:grid-cols-12 gap-9 lg:gap-20 px-3 items-center">
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-square overflow-hidden">
            <motion.img
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: .8, ease: [0.65, 0, 0.35, 1] }}
              src="/about.jpeg"
              alt="Modern luxury villa exterior with infinity pool"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 md:-right-8 hidden md:block glass rounded-sm px-7 py-3 max-w-[260px] shadow-[var(--shadow-soft)]">
            <p className="eyebrow">Est. 2014</p>
            <p className="text-display text-xl mt-2 leading-snug text-[var(--ink)]">
              A decade of building quietly remarkable homes.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow">About Global Habitat</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-display mt-3 text-[clamp(2rem,4.4vw,3.6rem)] text-[var(--ink)]">
              Architecture as a <span className="italic">quiet</span> language
              of home.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-[var(--muted-foreground)] text-justify text-xs md:text-sm leading-[1.85] max-w-xl">
              Global Habitat Pvt. Ltd. develops premium villas and modern
              residential communities that combine sophisticated architecture
              with sustainable living. Every project is designed to offer
              affordable luxury while maintaining exceptional quality and
              attention to detail.
            </p>
          </Reveal>

          <Stagger className="mt-3 grid grid-cols-2 gap-y-8 gap-x-6 border-t border-[var(--border)] pt-5">
            {stats.map((s) => (
              <motion.div variants={staggerItem} key={s.label}>
                <div className="text-display text-xs text-[clamp(2.4rem,4vw,3.4rem)] text-[var(--ink)] leading-none">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

export default About;