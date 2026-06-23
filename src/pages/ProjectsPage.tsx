import { motion } from "framer-motion";
import { Reveal } from "../components/shared/Reveal";
import mistyImg from "../assets/project-misty.jpeg";
import bellaImg from "../assets/project-bella.jpeg";
import { ArrowUpRight,MapPin } from "lucide-react";


function Projects() {
  const projects = [
    {
      name: "Misty Hills",
      location: "Kozhikode, Kerala",
      desc: "Premium 3 & 4 BHK villas nestled in serene hills with panoramic views and world-class amenities.",
      status: "Ongoing",
      img: mistyImg,
      id: "01",
    },
    {
      name: "Bella Casa",
      location: "Coimbatore, Tamil Nadu",
      desc: "Mediterranean-inspired gated villa community with private gardens, smart homes, and elegant landscapes.",
      status: "Coming Soon",
      img: bellaImg,
      id: "02",
    },
  ];

  return (
    <section id="projects" className="relative bg-white py-28 md:py-36">
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <Reveal>
            <p className="eyebrow">Featured Projects</p>
            <h2 className="text-display mt-5 text-[clamp(2rem,4.2vw,3.4rem)] text-[var(--ink)] max-w-xl">
              Two addresses. <span className="italic">Distinctly</span> ours.
            </h2>
          </Reveal>
          <Reveal direction="right">
            <a
              href="#contact"
              className="link-underline text-[12px] uppercase tracking-[0.25em]"
            >
              Request the full brochure
            </a>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <article className="group">
                <div className="relative aspect-[5/6] overflow-hidden rounded-sm bg-[var(--muted)]">
                  <motion.img
                    src={p.img}
                    alt={`${p.name} — ${p.location}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(.65,0,.35,1)] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/65 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-6 left-6">
                    <span
                      className={`inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 rounded-full backdrop-blur-md ${
                        p.status === "Ongoing"
                          ? "bg-[var(--gold)]/90 text-[var(--ink)]"
                          : "bg-white/85 text-[var(--ink)]"
                      }`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      {p.status}
                    </span>
                  </div>
                  <div className="absolute top-6 right-6 text-white/70 text-[11px] tracking-[0.3em]">
                    {p.id}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-7 md:p-9 text-white">
                    <div className="flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-white/75">
                      <MapPin className="h-3.5 w-3.5" /> {p.location}
                    </div>
                    <h3 className="text-display mt-3 text-4xl md:text-5xl">
                      {p.name}
                    </h3>
                  </div>
                </div>
                <div className="grid md:grid-cols-12 gap-6 mt-7 items-start">
                  <p className="md:col-span-8 text-[var(--muted-foreground)] leading-relaxed">
                    {p.desc}
                  </p>
                  <a
                    href="#contact"
                    className="md:col-span-4 md:justify-self-end link-underline text-[12px] uppercase tracking-[0.25em] inline-flex items-center gap-2"
                  >
                    View Project <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;