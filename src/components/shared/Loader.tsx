import { useEffect, useState } from "react";

/* ─── Types ──────────────────────────────────────────────────────────────── */
interface LoaderProps {
  onComplete: () => void;
  /** How long the loader stays visible in ms. Default: 2600 */
  duration?: number;
}

/* ─── Loader ─────────────────────────────────────────────────────────────── */
export default function Loader({ onComplete, duration = 2600 }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  /* Drive the progress bar from 0 → 100 over `duration` ms */
  useEffect(() => {
    const step = 100 / (duration / 16); // ~60 fps
    let current = 0;

    const id = setInterval(() => {
      current = Math.min(current + step, 100);
      setProgress(Math.round(current));

      if (current >= 100) {
        clearInterval(id);
        // Brief pause at 100%, then exit
        setTimeout(() => {
          setExiting(true);
          setTimeout(onComplete, 700); // wait for exit anim
        }, 300);
      }
    }, 16);

    return () => clearInterval(id);
  }, [duration, onComplete]);

  return (
    <div
      aria-label="Loading Global Habitat"
      role="status"
      style={{
        transform: exiting ? "translateY(-100%)" : "translateY(0)",
        transition: exiting ? "transform 0.7s cubic-bezier(0.76,0,0.24,1)" : "none",
      }}
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#233c44] overflow-hidden"
    >
      {/* Subtle grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#c8a96a 1px, transparent 1px), linear-gradient(90deg, #c8a96a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gold vertical accent line — animates in */}
      <div
        className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-[#c8a96a]/30"
        style={{
          height: `${progress}%`,
          transition: "height 0.05s linear",
        }}
      />

      {/* Centre content */}
      <div className="relative flex flex-col items-center gap-8 px-6 text-center">

        {/* Logo wordmark */}
        <div
          style={{
            opacity: progress > 15 ? 1 : 0,
            transform: progress > 15 ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          {/* Gold thin horizontal rule */}
          <div className="mx-auto mb-5 h-px w-10 bg-[#c8a96a]" />

          <p
            className="text-[0.6rem] font-medium uppercase tracking-[0.45em] text-[#c8a96a]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Est. 2014
          </p>

          <img src="/global-logo.png" className="w-30 h-auto" alt="logo" />

          <div className="mx-auto mt-5 h-px w-10 bg-[#c8a96a]" />
        </div>

        {/* Tagline */}
        <p
          className="max-w-[220px] text-[0.65rem] uppercase tracking-[0.35em] text-white/35"
          style={{
            fontFamily: "'Inter', sans-serif",
            opacity: progress > 40 ? 1 : 0,
            transition: "opacity 0.9s ease 0.2s",
          }}
        >
          Architecture · Luxury · Living
        </p>

        {/* Progress bar track */}
        <div className="w-48 sm:w-64">
          <div className="relative h-px w-full bg-white/10">
            {/* Animated fill */}
            <div
              className="absolute left-0 top-0 h-full bg-[#c8a96a]"
              style={{
                width: `${progress}%`,
                transition: "width 0.05s linear",
              }}
            />
            {/* Glowing tip */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-[#c8a96a] shadow-[0_0_8px_2px_rgba(200,169,106,0.6)]"
              style={{
                left: `calc(${progress}% - 3px)`,
                transition: "left 0.05s linear",
                opacity: progress < 100 ? 1 : 0,
              }}
            />
          </div>

          {/* Percentage counter */}
          <div className="mt-4 flex items-center justify-between">
            <span
              className="text-[0.6rem] uppercase tracking-[0.3em] text-white/30"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Loading
            </span>
            <span
              className="tabular-nums text-[0.6rem] text-[#c8a96a]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {progress}%
            </span>
          </div>
        </div>
      </div>

      {/* Corner marks */}
      {(["top-6 left-6", "top-6 right-6", "bottom-6 left-6", "bottom-6 right-6"] as const).map(
        (pos) => (
          <div
            key={pos}
            className={`absolute ${pos} h-5 w-5 border-[#c8a96a]/20`}
            style={{
              borderTopWidth: pos.includes("top") ? "1px" : 0,
              borderBottomWidth: pos.includes("bottom") ? "1px" : 0,
              borderLeftWidth: pos.includes("left") ? "1px" : 0,
              borderRightWidth: pos.includes("right") ? "1px" : 0,
              opacity: progress > 20 ? 1 : 0,
              transition: "opacity 0.6s ease",
            }}
          />
        )
      )}
    </div>
  );
}
