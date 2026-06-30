import { Reveal, Stagger, staggerItem } from "../shared/Reveal";
import { Building2, Leaf, Gem, Eye, Award, Cpu, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";





function Philosophy() {
  const items = [
    {
      icon: Building2,
      title: "Modern Architecture",
      text: "Clean lines, considered proportions, and timeless silhouettes.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Construction",
      text: "Low-impact materials, rainwater systems, and passive cooling.",
    },
    {
      icon: Gem,
      title: "Affordable Luxury",
      text: "Premium specifications without the inflated price tag.",
    },
    {
      icon: Eye,
      title: "Customer Transparency",
      text: "Live construction updates and honest, milestone-based billing.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      text: "Hand-picked finishes, audited at every stage of build.",
    },
    {
      icon: Cpu,
      title: "Smart Living",
      text: "Integrated automation, security and energy controls, standard.",
    },
  ];

  return (
    <section className="relative bg-accent py-5 md:py-20">
      <div className="container-luxe px-4">
        <div className="grid md:grid-cols-12 gap-5 items-end mb-5">
          <Reveal className="md:col-span-7">
            <p className="eyebrow">Our Philosophy</p>
            <h2 className="text-display mt-4 text-[clamp(2rem,4.2vw,3.4rem)] text-ink">
              Six principles that shape every{" "}
              <span className="italic">square foot</span>.
            </h2>
          </Reveal>
          <Reveal direction="right" className="md:col-span-5 md:text-right">
            <p className="text-muted-foreground text-xs md:text-sm leading-6 text-justify max-w-md md:ml-auto">
              We don't chase trends. We build homes that feel right ten, twenty,
              fifty years from now.
            </p>
          </Reveal>
        </div>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
          {items.map((it) => (
            <motion.div
              variants={staggerItem}
              key={it.title}
              className="group bg-white p-5 md:p-12 transition-colors duration-500 hover:bg-ink hover:text-white"
            >
              <it.icon className="h-7 w-7 stroke-[1.25] text-gold transition-transform duration-700 group-hover:rotate-[8deg]" />
              <h3 className="text-display text-xl mt-3">{it.title}</h3>
              <p className="mt-2 text-xs md:text-sm leading-relaxed text-muted-foreground group-hover:text-white/65 transition-colors">
                {it.text}
              </p>
              <span className="mt-3 inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase opacity-50 group-hover:opacity-100 group-hover:text-gold transition-all">
                Learn more <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export default Philosophy;