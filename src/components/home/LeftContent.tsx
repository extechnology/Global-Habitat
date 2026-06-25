import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const LeftContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8 }}
      className="sticky top-28 flex h-fit w-[340px] shrink-0 flex-col"
    >
      {/* Label */}
      {/* <span className="mb-6 text-xs font-medium uppercase tracking-[0.45em] text-neutral-500">
        Homes
      </span> */}

      {/* Heading */}
      <h2 className="text-4xl font-light leading-[1.1] tracking-tight text-neutral-900">
        Representing
        <br />
        the Epitome
        <br />
        of Luxury
      </h2>

      {/* Divider */}
      <div className="my-5 h-px w-20 bg-neutral-300" />

      {/* Description */}
      <p className="text-[16px] leading-6 text-neutral-600">
        Global Habitat creates thoughtfully crafted homes where timeless
        architecture, modern luxury and nature come together to deliver an
        extraordinary living experience.
      </p>

      <p className="mt-3 text-[16px] leading-8 text-neutral-600">
        Every residence is designed with exceptional attention to detail,
        premium finishes and sustainable living principles that enrich everyday
        life.
      </p>

      {/* CTA */}
      <button className="group mt-5 flex w-fit items-center gap-3 rounded-full border border-neutral-900 px-7 py-4 text-sm font-medium uppercase tracking-[0.15em] transition-all duration-300 hover:bg-neutral-900 hover:text-white">
        Explore Homes
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>

      {/* Bottom Stats */}
      {/* <div className="mt-5 grid grid-cols-2 gap-8 border-t border-neutral-200 pt-5">
        <div>
          <h3 className="text-3xl font-light text-neutral-900">10+</h3>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-neutral-500">
            Years
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-light text-neutral-900">500+</h3>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-neutral-500">
            Families
          </p>
        </div>
      </div> */}
    </motion.div>
  );
};

export default LeftContent;
