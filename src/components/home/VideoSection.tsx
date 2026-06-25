import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/real_estate.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/45" /> */}

      {/* Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content */}

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3 text-white/70">
          <span className="text-xs uppercase tracking-[0.35em]">Scroll</span>

          <ArrowDown size={18} />
        </div>
      </motion.div>
    </section>
  );
};

export default VideoSection;
