import { Reveal } from "../shared/Reveal";
import { Building2, Waves, Trees, Dumbbell, Leaf, Footprints, ShieldCheck, KeyRound } from "lucide-react";


function Amenities() {
  const items = [
    { icon: Building2, title: "Clubhouse" },
    { icon: Waves, title: "Swimming Pool" },
    { icon: Trees, title: "Children's Park" },
    { icon: Dumbbell, title: "Fitness Center" },
    { icon: Leaf, title: "Landscaped Gardens" },
    { icon: Footprints, title: "Walking Trails" },
    { icon: ShieldCheck, title: "24×7 Security" },
    { icon: KeyRound, title: "Smart Access" },
  ];

  return (
    <section
      id="amenities"
      className="relative bg-accent py-28 md:py-36 overflow-hidden"
    >
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <Reveal>
            <p className="eyebrow">Amenities</p>
            <h2 className="text-display mt-5 text-[clamp(2rem,4.2vw,3.4rem)] text-ink max-w-2xl">
              A quiet kind of <span className="italic">indulgence</span>, woven
              into everyday life.
            </h2>
          </Reveal>
          <Reveal direction="right">
            <p className="text-muted-foreground text-sm uppercase tracking-[0.25em]">
              Drag to explore →
            </p>
          </Reveal>
        </div>
      </div>

      <div className="container-luxe">
        <div className="no-scrollbar flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.05}>
              <div className="snap-start shrink-0 w-[260px] md:w-[300px] aspect-3/4 rounded-sm bg-white border border-border p-8 flex flex-col justify-between hover:bg-ink hover:text-white transition-colors duration-700 group">
                <span className="text-display italic text-gold text-lg">
                  0{(i + 1).toString().padStart(2, "0")}
                </span>
                <div>
                  <it.icon className="h-9 w-9 stroke-[1.25] text-ink group-hover:text-gold transition-colors" />
                  <h3 className="text-display text-2xl mt-6">{it.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Amenities;