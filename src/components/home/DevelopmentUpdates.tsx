import "swiper/css";
import "swiper/css/navigation";
import img1 from "../../assets/construction.jpeg";
import img2 from "../../assets/construction.jpeg";
import img3 from "../../assets/construction.jpeg";
import useEmblaCarousel from "embla-carousel-react";
import { Download, ArrowRight } from "lucide-react";

interface Project {
  title: string;
  image: string;
  tower: string;
  description: string;
  status: string;
  progress: number;
}

const projects = [
  {
    title: "Piramal Aranya",
    tower: "Tower 1 - Ayaan",
    description: "2, 3 & 4 Bed Residences",
    image: img1,
    status: "Delivered",
    progress: 100,
  },
  {
    title: "Piramal Aranya",
    tower: "Tower 2 - Arav",
    description: "Luxury Apartments",
    image: img2,
    status: "Construction",
    progress: 82,
  },
  {
    title: "Piramal Aranya",
    tower: "Tower 3 - Ahan",
    description: "Luxury Apartments",
    image: img3,
    status: "Construction",
    progress: 82,
  },
];

export default function DevelopmentUpdates() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
  });
  return (
    <section className="bg-zinc-50 py-20">
      <div className="mx-auto max-w-7xl ">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[6px] text-zinc-400">
              Project Status
            </p>

            <h2 className="mt-3 text-4xl font-medium text-zinc-900">
              Development Updates
            </h2>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {projects.map((project) => (
              <div className="min-w-[33.333%] px-4">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-white border border-zinc-100 shadow-sm">
      <div className="relative h-96 rounded-t-sm overflow-hidden">
        <img
          src={project.image}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute left-6 top-6 bg-white/90 px-3 py-1">
          {project.status}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        {/* Header */}
        <div>
          <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.3em] text-zinc-400">
            {project.title}
          </span>

          <h3 className="text-2xl font-light tracking-wide text-zinc-900">
            {project.tower}
          </h3>

          <p className="mt-2 text-sm leading-7 text-zinc-500">
            {project.description}
          </p>
        </div>

        {/* Divider */}
        <div className="my-2 h-px w-full bg-zinc-100" />

        {/* Project Details */}
        <div className="grid grid-cols-2 gap-5">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-400">
              Status
            </p>
            <p className="mt-2 text-sm font-medium text-zinc-900">
              {project.status}
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-400">
              Possession
            </p>
            <p className="mt-2 text-sm font-medium text-zinc-900">Dec 2026</p>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-400">
              Construction Progress
            </span>

            <span className="text-sm font-medium text-zinc-800">
              {project.progress}%
            </span>
          </div>

          <div className="h-[3px] overflow-hidden rounded-full bg-zinc-200">
            <div
              style={{ width: `${project.progress}%` }}
              className="h-full rounded-full bg-zinc-900 transition-all duration-700"
            />
          </div>
        </div>

        {/* Footer */}
        <div className=" flex items-center justify-between border-t border-zinc-100 pt-6">
          <button className="group flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-900">
            Explore Project
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          <button className="rounded-full border border-zinc-200 p-3 transition hover:bg-zinc-900 hover:text-white">
            <Download size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
