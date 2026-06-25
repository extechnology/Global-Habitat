import { Reveal } from "../shared/Reveal";
import { Counter } from "../shared/Counter";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";


function Updates() {
  const progress = [
    { label: "Foundation", value: 100 },
    { label: "Structure", value: 82 },
    { label: "Electrical", value: 58 },
    { label: "Interior", value: 34 },
    { label: "Landscaping", value: 12 },
  ];
  return (
    <section
      id="updates"
      className="relative bg-[var(--accent)] py-8 md:py-36"
    >
      <div className="container-luxe px-4 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">Construction Updates</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-display mt-5 text-[clamp(2rem,4.2vw,3.4rem)] text-[var(--ink)]">
              Watch your home <span className="italic">take shape</span>,
              weekly.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-[var(--muted-foreground)] text-xs md:text-sm leading-relaxed max-w-md">
              Every owner receives photo updates, site videos and engineering
              reports — directly on their dashboard. No follow-ups, no guessing.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <a href="#contact" className="btn-luxe mt-5">
              Track Your Project <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <Reveal direction="right" className="lg:col-span-7">
          <div className="bg-white rounded-md border border-[var(--border)] shadow-[var(--shadow-soft)] overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)]">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ED6A5E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#F4BF4F]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#61C554]" />
              </div>
              <p className="text-xs hidden md:block uppercase tracking-[0.25em] text-[var(--muted-foreground)]">
                Misty Hills · Villa 14
              </p>
              <span className="text-xs text-[var(--gold)]">Live</span>
            </div>
            <div className="p-5 md:p-10">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                    Overall Progress
                  </p>
                  <p className="text-display text-5xl mt-3 text-[var(--ink)]">
                    <Counter value={57} suffix="%" />
                  </p>
                </div>
                <p className="text-sm text-[var(--muted-foreground)]">
                  Updated · today
                </p>
              </div>
              <div className="mt-6 space-y-6">
                {progress.map((p, i) => (
                  <div key={p.label}>
                    <div className="flex justify-between text-sm text-[var(--ink)]/80 mb-2">
                      <span>{p.label}</span>
                      <span className="tabular-nums">{p.value}%</span>
                    </div>
                    <div className="h-[3px] bg-[var(--border)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${p.value}%` }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                          duration: 1.4,
                          delay: i * 0.12,
                          ease: [0.65, 0, 0.35, 1],
                        }}
                        className="h-full bg-[var(--gold)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


export default Updates;