import { useRef, useState, useEffect, useCallback } from "react";
import { Download, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

/* ─── Types ──────────────────────────────────────────────────────────────── */

interface Project {
  id: string;
  title: string;
  tower: string;
  description: string;
  image: string;
  status: "Delivered" | "Construction" | "Planning";
  possession: string;
  progress: number;
}

/* ─── Data ───────────────────────────────────────────────────────────────── */

const projects: Project[] = [
  {
    id: "aranya-t1",
    title: "Piramal Aranya",
    tower: "Tower 1 – Ayaan",
    description: "2, 3 & 4 Bed Residences",
    image: "/1600 x 1100-01.jpg.webp",
    status: "Delivered",
    possession: "Delivered",
    progress: 100,
  },
  {
    id: "aranya-t2",
    title: "Piramal Aranya",
    tower: "Tower 2 – Arav",
    description: "Luxury Apartments",
    image: "/1600 x 1100-02.jpg.webp",
    status: "Construction",
    possession: "Dec 2026",
    progress: 82,
  },
  {
    id: "aranya-t3",
    title: "Piramal Aranya",
    tower: "Tower 3 – Ahan",
    description: "Luxury Apartments",
    image: "/1600 x 1100-03.jpg.webp",
    status: "Construction",
    possession: "Mar 2027",
    progress: 65,
  },
];

/* ─── Status badge colour map ────────────────────────────────────────────── */

const statusStyles: Record<Project["status"], string> = {
  Delivered: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  Construction: "bg-amber-50 text-amber-700 border border-amber-200",
  Planning: "bg-sky-50 text-sky-700 border border-sky-200",
};

/* ─── ProjectCard ─────────────────────────────────────────────────────────── */

function ProjectCard({ project }: { project: Project }) {
  const barRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  // Animate progress bar when card enters the viewport
  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="group flex h-full flex-col bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-56 overflow-hidden sm:h-64 md:h-60 lg:h-64">
        <img
          src={project.image}
          alt={project.tower}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Status badge */}
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] ${
            statusStyles[project.status]
          }`}
        >
          {project.status}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Header */}
        <div>
          <span className="block text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-400">
            {project.title}
          </span>
          <h3 className="mt-1 text-xl font-light tracking-wide text-zinc-900 sm:text-2xl">
            {project.tower}
          </h3>
          <p className="mt-1 text-xs md:text-sm leading-6 text-zinc-500">
            {project.description}
          </p>
        </div>

        {/* Divider */}
        <div className="my-4 h-px w-full bg-zinc-100" />

        {/* Details grid */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-400">
              Status
            </p>
            <p className="mt-1.5 text-sm font-medium text-zinc-900">
              {project.status}
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-400">
              Possession
            </p>
            <p className="mt-1.5 text-sm font-medium text-zinc-900">
              {project.possession}
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-5" ref={barRef}>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-400">
              Construction Progress
            </span>
            <span className="text-sm font-medium text-zinc-800">
              {project.progress}%
            </span>
          </div>
          <div className="h-[3px] overflow-hidden rounded-full bg-zinc-200">
            <div
              style={{ width: animated ? `${project.progress}%` : "0%" }}
              className="h-full rounded-full bg-zinc-900 transition-[width] duration-1000 ease-out"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between border-t border-zinc-100 pt-5">
          <button className="group/btn flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-900">
            Explore Project
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </button>

          <button
            aria-label="Download brochure"
            className="rounded-full border border-zinc-200 p-2.5 transition-colors duration-300 hover:bg-zinc-900 hover:text-white"
          >
            <Download size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── DevelopmentUpdates ─────────────────────────────────────────────────── */

export default function DevelopmentUpdates() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = projects.length;

  /* Update active dot on scroll */
  const onScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    setActiveIndex(index);
  }, []);

  const scrollTo = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  }, []);

  const prev = () => scrollTo(Math.max(activeIndex - 1, 0));
  const next = () => scrollTo(Math.min(activeIndex + 1, total - 1));

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <section className="bg-zinc-50 py-8 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-5 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[6px] text-zinc-400">
              Project Status
            </p>
            <h2 className="mt-3 text-3xl font-medium text-zinc-900 sm:text-4xl">
              Development Updates
            </h2>
          </div>

          {/* Prev / Next arrows — visible on mobile only */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={prev}
              disabled={activeIndex === 0}
              aria-label="Previous project"
              className="rounded-full border border-zinc-300 p-2.5 transition-colors duration-200 hover:bg-zinc-900 hover:text-white disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              disabled={activeIndex === total - 1}
              aria-label="Next project"
              className="rounded-full border border-zinc-300 p-2.5 transition-colors duration-200 hover:bg-zinc-900 hover:text-white disabled:opacity-30"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* ── Mobile / Tablet carousel (hidden on lg+) ── */}
        <div className="lg:hidden">
          <div
            ref={scrollRef}
            className="
              flex
              overflow-x-auto
              scroll-smooth
              snap-x
              snap-mandatory
              scrollbar-hide
              gap-4
              pb-2
              md:gap-6
            "
          >
            {projects.map((project) => (
              <div
                key={project.id}
                /* Mobile: full viewport width; Tablet: ~half */
                className="
                  w-full
                  shrink-0
                  snap-center
                  md:w-[calc(50%-12px)]
                "
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Dot indicators — mobile only */}
          <div className="mt-5 flex justify-center gap-2 md:hidden">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-6 bg-zinc-900" : "w-1.5 bg-zinc-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── Desktop 3-column grid (hidden below lg) ── */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6 xl:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
