
import g1 from "../../assets/gallery-1.jpeg";
import g2 from "../../assets/gallery-2.jpeg";
import g3 from "../../assets/gallery-3.jpeg";
import g4 from "../../assets/gallery-4.jpeg";
import g5 from "../../assets/gallery-5.jpeg";
import aboutImg from "../../assets/about.jpeg";
import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "../shared/Reveal";


function Gallery() {
  const imgs = [
    { src: g1, h: "tall" },
    { src: g4, h: "short" },
    { src: g3, h: "tall" },
    { src: g2, h: "short" },
    { src: g5, h: "tall" },
    { src: aboutImg, h: "short" },
  ];
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="relative bg-accent py-28 md:py-36"
    >
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <Reveal>
            <p className="eyebrow">Gallery</p>
            <h2 className="text-display mt-5 text-[clamp(2rem,4.2vw,3.4rem)] text-ink max-w-xl">
              A study in{" "}
              <span className="italic">light, line and material</span>.
            </h2>
          </Reveal>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:balance]">
          {imgs.map((g, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08}>
              <button
                onClick={() => setOpen(g.src)}
                className={`mb-5 block w-full overflow-hidden rounded-sm group ${
                  g.h === "tall" ? "aspect-3/4" : "aspect-4/3"
                }`}
              >
                <img
                  src={g.src}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-2000 ease-[cubic-bezier(.65,0,.35,1)] group-hover:scale-110"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-70 bg-(--ink)/95 backdrop-blur-md grid place-items-center p-6 cursor-zoom-out"
        >
          <button
            onClick={() => setOpen(null)}
            aria-label="Close"
            className="absolute top-6 right-6 grid place-items-center h-11 w-11 rounded-full border border-white/20 text-white"
          >
            <X className="h-5 w-5" />
          </button>
          <motion.img
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={open}
            alt=""
            className="max-h-[88vh] max-w-[88vw] object-contain rounded-sm shadow-(--shadow-elevate)"
          />
        </motion.div>
      )}
    </section>
  );
}


export default Gallery;