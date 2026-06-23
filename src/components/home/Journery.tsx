import { Reveal, Stagger, staggerItem } from "../shared/Reveal";
import { motion } from "framer-motion";


function Journey() {
  const steps = [
    "Choose Property",
    "Site Visit",
    "Booking",
    "Construction Updates",
    "Payment Plan",
    "Handover",
  ];
  return (
    <section className="relative bg-white py-28 md:py-36">
      <div className="container-luxe">
        <Reveal>
          <p className="eyebrow">Customer Journey</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-display mt-5 text-[clamp(2rem,4.2vw,3.4rem)] text-[var(--ink)] max-w-2xl">
            From first <span className="italic">visit</span> to first morning at
            home.
          </h2>
        </Reveal>

        <div className="mt-20 relative">
          <div className="absolute left-0 right-0 top-[58px] h-px bg-[var(--border)] hidden md:block" />
          <Stagger className="grid md:grid-cols-6 gap-10 md:gap-4">
            {steps.map((s, i) => (
              <motion.div
                variants={staggerItem}
                key={s}
                className="relative md:text-center"
              >
                <div className="md:flex md:flex-col md:items-center">
                  <div className="relative grid place-items-center h-[60px] w-[60px] rounded-full border border-[var(--border)] bg-white text-[var(--ink)] text-display text-lg">
                    {String(i + 1).padStart(2, "0")}
                    <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-[var(--gold)]" />
                  </div>
                  <h3 className="text-display text-xl text-[var(--ink)] mt-6">
                    {s}
                  </h3>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}


export default Journey;
