import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, MapPin, ZoomIn } from "lucide-react";
import { Reveal } from "../components/shared/Reveal";

import mistyImg from "../assets/project-misty.jpeg";
import bellaImg from "../assets/project-bella.jpeg";
import constructionImg from "../assets/construction.jpeg";
import aboutImg from "../assets/about.jpeg";
import ctaImg from "../assets/cta.jpeg";
import heroImg from "../assets/hero.jpeg";
import g1 from "../assets/gallery-1.jpeg";
import g2 from "../assets/gallery-2.jpeg";
import g3 from "../assets/gallery-3.jpeg";
import g4 from "../assets/gallery-4.jpeg";
import g5 from "../assets/gallery-5.jpeg";

/* ─── Types ──────────────────────────────────────────────────────────────── */

type Tab = "upcoming" | "completed";
type Category = "All" | "Exterior" | "Interior" | "Aerial" | "Construction";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  project: string;
  location: string;
  category: Exclude<Category, "All">;
  /** Controls masonry height: "tall" = 4/3 aspect, "wide" = 3/4 aspect */
  size: "tall" | "wide";
}

/* ─── Data ───────────────────────────────────────────────────────────────── */

const upcomingImages: GalleryImage[] = [
  {
    id: "u1",
    src: mistyImg,
    alt: "Misty Hills – Aerial View",
    project: "Misty Hills",
    location: "Kozhikode, Kerala",
    category: "Aerial",
    size: "tall",
  },
  {
    id: "u2",
    src: g1,
    alt: "Misty Hills – Exterior facade",
    project: "Misty Hills",
    location: "Kozhikode, Kerala",
    category: "Exterior",
    size: "wide",
  },
  {
    id: "u3",
    src: g3,
    alt: "Bella Casa – Living space",
    project: "Bella Casa",
    location: "Coimbatore, Tamil Nadu",
    category: "Interior",
    size: "tall",
  },
  {
    id: "u4",
    src: bellaImg,
    alt: "Bella Casa – Garden elevation",
    project: "Bella Casa",
    location: "Coimbatore, Tamil Nadu",
    category: "Exterior",
    size: "wide",
  },
  {
    id: "u5",
    src: g4,
    alt: "Misty Hills – Master bedroom",
    project: "Misty Hills",
    location: "Kozhikode, Kerala",
    category: "Interior",
    size: "wide",
  },
  {
    id: "u6",
    src: g2,
    alt: "Bella Casa – Pool deck",
    project: "Bella Casa",
    location: "Coimbatore, Tamil Nadu",
    category: "Exterior",
    size: "tall",
  },
  {
    id: "u7",
    src: g5,
    alt: "Misty Hills – Foundation work",
    project: "Misty Hills",
    location: "Kozhikode, Kerala",
    category: "Construction",
    size: "wide",
  },
  {
    id: "u8",
    src: heroImg,
    alt: "Bella Casa – Entrance lobby",
    project: "Bella Casa",
    location: "Coimbatore, Tamil Nadu",
    category: "Interior",
    size: "tall",
  },
];

const completedImages: GalleryImage[] = [
  {
    id: "c1",
    src: aboutImg,
    alt: "Piramal Aranya – Tower 1 aerial",
    project: "Piramal Aranya",
    location: "Mumbai, Maharashtra",
    category: "Aerial",
    size: "tall",
  },
  {
    id: "c2",
    src: constructionImg,
    alt: "Piramal Aranya – Construction complete",
    project: "Piramal Aranya",
    location: "Mumbai, Maharashtra",
    category: "Construction",
    size: "wide",
  },
  {
    id: "c3",
    src: ctaImg,
    alt: "Piramal Aranya – Grand lobby",
    project: "Piramal Aranya",
    location: "Mumbai, Maharashtra",
    category: "Interior",
    size: "tall",
  },
  {
    id: "c4",
    src: g2,
    alt: "Piramal Aranya – Exterior elevation",
    project: "Piramal Aranya",
    location: "Mumbai, Maharashtra",
    category: "Exterior",
    size: "wide",
  },
  {
    id: "c5",
    src: g1,
    alt: "Piramal Aranya – Rooftop amenities",
    project: "Piramal Aranya",
    location: "Mumbai, Maharashtra",
    category: "Exterior",
    size: "tall",
  },
  {
    id: "c6",
    src: g5,
    alt: "Piramal Aranya – Master suite",
    project: "Piramal Aranya",
    location: "Mumbai, Maharashtra",
    category: "Interior",
    size: "wide",
  },
  {
    id: "c7",
    src: mistyImg,
    alt: "Piramal Aranya – Landscape garden",
    project: "Piramal Aranya",
    location: "Mumbai, Maharashtra",
    category: "Exterior",
    size: "wide",
  },
  {
    id: "c8",
    src: g4,
    alt: "Piramal Aranya – Structural milestone",
    project: "Piramal Aranya",
    location: "Mumbai, Maharashtra",
    category: "Construction",
    size: "tall",
  },
];

const CATEGORIES: Category[] = ["All", "Exterior", "Interior", "Aerial", "Construction"];

/* ─── Animation variants ─────────────────────────────────────────────────── */

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055 } },
};

// const itemVariants = {
//   hidden: { opacity: 0, y: 24, scale: 0.97 },
//   show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
//   exit: { opacity: 0, scale: 0.96, transition: { duration: 0.25 } },
// };

/* ─── Lightbox ────────────────────────────────────────────────────────────── */

function Lightbox({ image, onClose }: { image: GalleryImage; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        key="lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-200 flex items-center justify-center bg-ink/95 backdrop-blur-md p-4 cursor-zoom-out"
        onClick={onClose}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-white/40 hover:text-white"
        >
          <X size={18} />
        </button>

        {/* Image card */}
        <motion.div
          key="lightbox-card"
          initial={{ opacity: 0, scale: 0.93, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex max-h-[90vh] max-w-5xl flex-col overflow-hidden rounded-sm"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-[75vh] w-full object-cover"
          />
          {/* Caption bar */}
          <div className="flex items-center justify-between bg-[#111c1f] px-6 py-4 text-white">
            <div>
              <p className="eyebrow text-gold">{image.project}</p>
              <p className="mt-1 text-display text-lg leading-snug">{image.alt}</p>
              <div className="mt-1 flex items-center gap-1.5 text-[11px] tracking-[0.2em] uppercase text-white/45">
                <MapPin size={11} /> {image.location}
              </div>
            </div>
            <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/50">
              {image.category}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── GalleryPage ─────────────────────────────────────────────────────────── */

export default function GalleryPage() {
  const [tab, setTab] = useState<Tab>("upcoming");
  const [category, setCategory] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const images = tab === "upcoming" ? upcomingImages : completedImages;

  const filtered = category === "All" ? images : images.filter((img) => img.category === category);

  const openLightbox = useCallback((img: GalleryImage) => setLightbox(img), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <>
      {/* Lightbox */}
      {lightbox && <Lightbox image={lightbox} onClose={closeLightbox} />}

      <main className="min-h-screen bg-white">

        {/* ── Hero header ──────────────────────────────────────────────── */}
        <div className="relative overflow-hidden bg-ink pt-32 pb-20 md:pt-40 md:pb-24">
          {/* Subtle background image */}
          <img
            src={tab === "upcoming" ? mistyImg : aboutImg}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10 transition-[src] duration-700"
          />
          <div className="absolute inset-0 bg-linear-to-b from-ink/60 to-ink" />

          <div className="container-luxe relative px-4">
            <Reveal>
              <p className="eyebrow text-gold">Our Portfolio</p>
              <h1 className="text-display mt-4 text-[clamp(2.2rem,5vw,4rem)] text-white leading-[1.05]">
                Gallery of{" "}
                <span className="italic text-gold">Spaces</span>
              </h1>
              <p className="mt-5 max-w-lg text-sm leading-7 text-white/55">
                A curated visual record of every home we have built and every vision currently taking shape.
              </p>
            </Reveal>

            {/* ── Tab switcher ── */}
            <Reveal delay={0.15}>
              <div className="mt-10 inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-sm">
                {(["upcoming", "completed"] as Tab[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => { setTab(t); setCategory("All"); }}
                    className={`relative rounded-full px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.25em] transition-all duration-400 ${
                      tab === t
                        ? "bg-gold text-ink shadow-sm"
                        : "text-white/55 hover:text-white"
                    }`}
                  >
                    {t === "upcoming" ? "Upcoming" : "Completed"}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── Category filter chips ──────────────────────────────────── */}
        <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-zinc-100 shadow-[0_1px_0_rgba(14,27,31,0.04)]">
          <div className="container-luxe px-4">
            <div className="flex items-center gap-2 overflow-x-auto py-3.5 scrollbar-hide no-scrollbar">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`shrink-0 rounded-full border px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] transition-all duration-300 ${
                    category === cat
                      ? "border-ink bg-ink text-white"
                      : "border-zinc-200 text-zinc-500 hover:border-zinc-400 hover:text-zinc-800"
                  }`}
                >
                  {cat}
                </button>
              ))}

              {/* Count pill */}
              <span className="ml-auto shrink-0 rounded-full bg-zinc-100 px-3 py-1 text-[11px] tabular-nums text-zinc-500">
                {filtered.length} photo{filtered.length !== 1 ? "s" : ""}
              </span>
            </div>
          </div>
        </div>

        {/* ── Masonry grid ──────────────────────────────────────────── */}
        <div className="container-luxe px-4 py-14 md:py-20">
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-32 text-center"
              >
                <p className="text-display text-3xl text-zinc-300">No images yet</p>
                <p className="mt-3 text-sm text-zinc-400">Try a different filter</p>
              </motion.div>
            ) : (
              <motion.div
                key={`${tab}-${category}`}
                variants={gridVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 [column-fill:balance]"
              >
                {filtered.map((img) => (
                  <motion.div
                    key={img.id}
                    // variants={itemVariants}
                    className={`group mb-4 md:mb-5 block w-full overflow-hidden rounded-sm cursor-zoom-in ${
                      img.size === "tall" ? "aspect-3/4" : "aspect-4/3"
                    }`}
                    onClick={() => openLightbox(img)}
                  >
                    <div className="relative h-full w-full">
                      {/* Image */}
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-1800 ease-[cubic-bezier(.65,0,.35,1)] group-hover:scale-105"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-ink/75 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* Category chip */}
                      <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {img.category}
                      </div>

                      {/* Zoom icon */}
                      <div className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm opacity-0 transition-all duration-300 group-hover:opacity-100">
                        <ZoomIn size={14} />
                      </div>

                      {/* Bottom caption */}
                      <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 text-white opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="eyebrow text-gold text-[9px]">{img.project}</p>
                        <h3 className="text-display mt-1 text-lg leading-snug">{img.alt.split("–")[1]?.trim() ?? img.alt}</h3>
                        <div className="mt-1.5 flex items-center gap-1 text-[10px] tracking-[0.2em] uppercase text-white/50">
                          <MapPin size={10} /> {img.location}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── CTA strip ─────────────────────────────────────────────── */}
        <div className="border-t border-zinc-100 bg-accent py-16 md:py-20">
          <div className="container-luxe px-4 flex flex-col items-center text-center gap-6">
            <p className="eyebrow">Ready to find your home?</p>
            <h2 className="text-display text-[clamp(1.8rem,4vw,3rem)] text-ink max-w-xl">
              Every image tells a story of <span className="italic">craft and care</span>.
            </h2>
            <p className="max-w-md text-sm leading-7 text-muted-foreground">
              Schedule a site visit or request a detailed brochure for any of our developments.
            </p>
            <a
              href="/contact"
              className="btn-luxe mt-2 inline-flex items-center gap-2"
            >
              Get in Touch <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

      </main>
    </>
  );
}
