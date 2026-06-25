import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import {  Download, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

interface Tower {
  name: string;
  title: string;
  description: string;
  status: string;
  progress: number;
}

interface Project {
  title: string;
  image: string;
  towers: Tower[];
}

const projects: Project[] = [
  {
    title: "Piramal Mahalaxmi",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200",
    towers: [
      {
        name: "South",
        title: "South Tower",
        description: "2 & 3 Bed Residences",
        status: "Delivered",
        progress: 100,
      },
      {
        name: "Central",
        title: "Central Tower",
        description: "Luxury Apartments",
        status: "Construction",
        progress: 75,
      },
      {
        name: "North",
        title: "North Tower",
        description: "Sky Residences",
        status: "Launching",
        progress: 20,
      },
    ],
  },
  {
    title: "Piramal Aranya",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200",
    towers: [
      {
        name: "Ayaan",
        title: "Tower 1",
        description: "2,3 & 4 Bed Homes",
        status: "Delivered",
        progress: 100,
      },
      {
        name: "Arav",
        title: "Tower 2",
        description: "Premium Apartments",
        status: "Construction",
        progress: 82,
      },
      {
        name: "Ahan",
        title: "Tower 3",
        description: "Luxury Living",
        status: "Construction",
        progress: 60,
      },
    ],
  },
  {
    title: "Piramal Revanta",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200",
    towers: [
      {
        name: "Ravik",
        title: "Tower 1",
        description: "1–5 Bed Residences",
        status: "Construction",
        progress: 70,
      },
      {
        name: "Rohin",
        title: "Tower 2",
        description: "Luxury Homes",
        status: "Construction",
        progress: 58,
      },
    ],
  },
];


export default function DevelopmentUpdates() {
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

          {/* <div className="flex gap-3">
            <button className="swiper-prev flex h-12 w-12 items-center justify-center rounded-full border bg-white shadow hover:bg-black hover:text-white">
              <ChevronLeft size={20} />
            </button>

            <button className="swiper-next flex h-12 w-12 items-center justify-center rounded-full border bg-white shadow hover:bg-black hover:text-white">
              <ChevronRight size={20} />
            </button>
          </div> */}
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
          spaceBetween={28}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}


function ProjectCard({ project }: { project: Project }) {
  const [selected, setSelected] = useState(0);
  const tower = project.towers[selected];

  return (
    <div className="group bg-white border border-zinc-100 shadow-sm transition-all duration-700 ease-out">
      {/* Image Container with Subtle Zoom */}
      <div className="relative h-96 overflow-hidden bg-zinc-50">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />

        {/* Elegant Top-Left Status Indicator */}
        <div className="absolute left-6 top-6 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 text-[10px] tracking-widest uppercase font-medium text-zinc-800">
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-600 animate-pulse" />
          {tower.status}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 space-y-8">
        <div>
          {/* Main Project Title acting as a subtle eyebrow or primary anchor */}
          <span className="text-[11px] font-medium tracking-[0.2em] text-zinc-400 uppercase block mb-1">
            {project.title}
          </span>
          <h3 className="text-2xl font-light tracking-wide text-zinc-900 font-serif">
            {tower.title}
          </h3>
          <p className="mt-3 text-sm text-zinc-500 leading-relaxed font-light">
            {tower.description}
          </p>
        </div>

        {/* Minimal Tower Selector (Border-bottom indicator instead of pill buttons) */}
        {project.towers.length > 1 && (
          <div className="flex gap-6 border-b border-zinc-100 pb-2">
            {project.towers.map((item, index) => (
              <button
                key={item.name}
                onClick={() => setSelected(index)}
                className={`pb-2 text-xs tracking-wider uppercase transition-all relative ${
                  selected === index
                    ? "font-medium text-zinc-900"
                    : "text-zinc-400 hover:text-zinc-600"
                }`}
              >
                {item.name}
                {selected === index && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-zinc-900" />
                )}
              </button>
            ))}
          </div>
        )}

        {/* Sophisticated Construction Progress Indicator */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs tracking-wider uppercase text-zinc-500">
            <span>Development Progress</span>
            <span className="font-light">{tower.progress}%</span>
          </div>
          <div className="h-[2px] bg-zinc-100 w-full">
            <div
              style={{ width: `${tower.progress}%` }}
              className="h-full bg-zinc-800 transition-all duration-1000 ease-out"
            />
          </div>
        </div>

        {/* Clean, Editorial Action Buttons */}
        <div className="flex items-center justify-between pt-2">
          <button className="group/btn flex items-center gap-3 text-xs font-medium tracking-widest uppercase text-zinc-900 transition-colors">
            <span>Explore Residence</span>
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </button>

          <button
            title="Download Brochure"
            className="flex items-center justify-center p-2 text-zinc-400 hover:text-zinc-900 transition-colors"
          >
            <Download size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
