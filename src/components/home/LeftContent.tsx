import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const LeftContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8 }}
      /* Mobile: full width, not sticky. Desktop: fixed 340px, sticky. */
      className="flex w-full flex-col lg:sticky lg:top-28 lg:h-fit lg:w-[340px] lg:shrink-0"
    >
      {/* Heading */}
      <h2 className="text-3xl font-light leading-[1.1] tracking-tight text-neutral-900 sm:text-4xl">
        Representing
        <br />
        the Epitome
        <br />
        of Luxury
      </h2>

      {/* Divider */}
      <div className="my-5 h-px w-20 bg-neutral-300" />

      {/* Description */}
      <p className="text-[15px] leading-6 text-neutral-600 sm:text-[16px]">
        Global Habitat creates thoughtfully crafted homes where timeless
        architecture, modern luxury and nature come together to deliver an
        extraordinary living experience.
      </p>

      <p className="mt-3 text-[15px] leading-8 text-neutral-600 sm:text-[16px]">
        Every residence is designed with exceptional attention to detail,
        premium finishes and sustainable living principles that enrich everyday
        life.
      </p>

      {/* CTA */}
      <button className="group mt-6 flex w-fit items-center gap-3 rounded-full border border-neutral-900 px-6 py-3 text-sm font-medium uppercase tracking-[0.15em] transition-all duration-300 hover:bg-neutral-900 hover:text-white sm:px-7 sm:py-4">
        Explore Homes
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
    </motion.div>
  );
};

export default LeftContent;
