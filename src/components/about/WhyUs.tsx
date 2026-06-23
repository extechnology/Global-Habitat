import { motion } from "framer-motion";
import { Reveal } from "../shared/Reveal";
import g1 from "../../assets/gallery-1.jpeg";
import g5 from "../../assets/gallery-5.jpeg";
import g3 from "../../assets/gallery-3.jpeg";

function WhyUs() {
  const rows = [
    {
      title: "Luxury Design",
      text: "Every layout is studied for light, proportion, and the way a family actually lives.",
      img: g1,
    },
    {
      title: "Eco-conscious Construction",
      text: "We build for the next generation — solar-ready roofs, native landscaping, low-VOC interiors.",
      img: g5,
    },
    {
      title: "Smart Homes & Transparent Pricing",
      text: "Integrated automation comes standard. Pricing is itemised, with no surprises at handover.",
      img: g3,
    },
  ];

  return (
    <section className="relative bg-white py-28 md:py-36">
      <div className="container-luxe">
        <Reveal>
          <p className="eyebrow">Why Choose Us</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-display mt-5 text-[clamp(2rem,4.4vw,3.6rem)] text-[var(--ink)] max-w-3xl">
            Six reasons to trust us with the{" "}
            <span className="italic">most important</span> address of your life.
          </h2>
        </Reveal>

        <div className="mt-20 flex flex-col gap-28 md:gap-40">
          {rows.map((r, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={r.title}
                className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center`}
              >
                <Reveal
                  direction={reverse ? "right" : "left"}
                  className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                    <motion.img
                      initial={{ scale: 1.15 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 1.8, ease: [0.65, 0, 0.35, 1] }}
                      src={r.img}
                      alt={r.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </Reveal>
                <Reveal
                  direction={reverse ? "left" : "right"}
                  className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}
                >
                  <p className="text-[var(--gold)] text-display italic text-xl">
                    0{i + 1} / 03
                  </p>
                  <h3 className="text-display mt-5 text-3xl md:text-4xl text-[var(--ink)]">
                    {r.title}
                  </h3>
                  <p className="mt-6 text-[var(--muted-foreground)] leading-relaxed">
                    {r.text}
                  </p>
                  <div className="hairline my-8" />
                  <ul className="space-y-3 text-sm">
                    {[
                      "Premium materials",
                      "Prime locations",
                      "Affordable pricing",
                    ].map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-3 text-[var(--ink)]/80"
                      >
                        <span className="h-1 w-6 bg-[var(--gold)]" /> {b}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


export default WhyUs