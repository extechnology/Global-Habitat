import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.55, 0.8]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const headline = ["Building Tomorrow's", "Luxury Living."];

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-svh min-h-[640px] w-full overflow-hidden bg-ink"
    >
      <motion.div style={{ y, scale: 1.08 }} className="absolute inset-0">
        <img
          src="/1080  1920 Home banner-01.jpg.webp"
          alt="Modern luxury villa at golden hour"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlay }}
        className="absolute inset-0 bg-linear-to-b from-ink/30 via-ink/40 to-ink/80"
      />

      <div className="relative h-full container-luxe flex flex-col justify-end pb-28 md:pb-32">
        <motion.div style={{ y: textY }} className="max-w-4xl text-white">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="eyebrow hidden md:block"
          >
            Global Habitat Pvt. Ltd.
          </motion.p>

          <h1 className="text-display mt-2 md:mt-6 text-3xl md:text-[clamp(1rem,5vw,3.7rem)] text-white">
            {headline.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 1.1,
                    delay: 0.4 + i * 0.18,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                  className="block  font-light"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="md:mt-8 mt-3 max-w-xl text-base md:text-lg text-white/75 leading-relaxed"
          >
            Affordable luxury villas crafted with modern architecture,
            sustainable living, and timeless elegance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.35 }}
            className="md:mt-10 mt-4 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/projects"
              className="btn-luxe text-xs py-1.5 px-4 md:py-3 md:px-5 md:text-sm bg-gold border-gold text-ink hover:bg-white hover:border-white"
            >
              Explore Projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="btn-ghost py-1.5 px-4 md:py-3 md:px-5 text-xs md:text-sm text-white"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-[10px] tracking-[0.3em] uppercase flex flex-col items-center gap-3"
      >
        <span>Scroll</span>
        <motion.div className="animate-float">
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>

      {/* Quiet marquee bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-ink/60 backdrop-blur-md py-3 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-marquee text-white/50 text-[11px] tracking-[0.3em] uppercase">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            [
              "RERA Approved",
              "Sustainable Construction",
              "Smart Homes",
              "Premium Materials",
              "Trusted Since 2014",
              "Affordable Luxury",
            ].map((t, i) => (
              <span key={`${k}-${i}`} className="flex items-center gap-12">
                {t}
                <span className="h-1 w-1 rounded-full bg-gold" />
              </span>
            )),
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
