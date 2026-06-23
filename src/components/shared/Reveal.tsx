import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

type Direction = "up" | "left" | "right" | "zoom" | "mask";

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  amount?: number;
}

const variantsFor = (direction: Direction): Variants => {
  switch (direction) {
    case "left":
      return {
        hidden: { opacity: 0, x: -40 },
        show: { opacity: 1, x: 0 },
      };
    case "right":
      return {
        hidden: { opacity: 0, x: 40 },
        show: { opacity: 1, x: 0 },
      };
    case "zoom":
      return {
        hidden: { opacity: 0, scale: 1.06 },
        show: { opacity: 1, scale: 1 },
      };
    case "mask":
      return {
        hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
        show: { opacity: 1, clipPath: "inset(0 0 0% 0)" },
      };
    case "up":
    default:
      return {
        hidden: { opacity: 0, y: 32 },
        show: { opacity: 1, y: 0 },
      };
  }
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
  amount = 0.25,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={variantsFor(direction)}
      transition={{ duration: 1.05, delay, ease: [0.65, 0, 0.35, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  delayChildren = 0.05,
  staggerChildren = 0.12,
}: {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { delayChildren, staggerChildren } },
      }}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.65, 0, 0.35, 1] },
  },
};
