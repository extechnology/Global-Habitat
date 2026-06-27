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
        Experience Living
        <br />
        Refined
        <br />
        Living
      </h2>

      {/* Divider */}
      <div className="my-3 h-px w-20 bg-neutral-300" />

      {/* Description */}
      <p className="text-xs md:text-[15px] leading-6 text-neutral-600 text-justify sm:text-[16px]">
        A Premier luxyry villa developer in Kerala, dedicated to creating
        elegant homes that combine contemporary architecture, exceptional
        craftsmanship, and premium amenities. With a commitment to quality,
        innovation, and customer satisfaction, we deliver thoughtfully designed
        residents that offer comfort, sophistication and lasting value in
        carefully selected locations.{" "}
      </p>

      {/* CTA */}
      <button className="group mt-4 flex w-fit items-center gap-3 rounded-full border border-neutral-900 px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-medium uppercase tracking-[0.15em] transition-all duration-300 hover:bg-neutral-900 hover:text-white sm:px-7 sm:py-4">
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
