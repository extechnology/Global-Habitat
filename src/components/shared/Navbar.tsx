import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    if (y > 240 && y > prev) setHidden(true);
    else setHidden(false);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);


  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-luxe flex  items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src="/global-logo.png" className="w-26" alt="global-logo" />
        </Link>

        <nav className="hidden text-display lg:flex items-center gap-9">
          {NAV.map((n) => (
            <Link
              key={n.href}
              to={n.href}
              className={`text-[12px] tracking-[0.18em] uppercase link-underline transition-colors ${
                scrolled ? "text-ink" : "text-white/90 hover:text-white"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex text-display items-center gap-3">
          <Link to="/contact" className="hidden md:inline-flex btn-luxe">
            Book Site Visit
          </Link>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className={`lg:hidden grid place-items-center h-11 w-11 rounded-full border ${
              scrolled ? "border-border text-ink" : "border-white/30 text-white"
            }`}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white/70 backdrop-blur-sm text-var-ink"
          >
            <div className="container-luxe flex h-20 items-center justify-between">
              <img src="/global-logo.png" className="w-20" alt="global-logo" />
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid place-items-center h-11 w-11 rounded-full border border-white/20"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="container-luxe mt-10 flex flex-col text-center gap-6">
              {NAV.map((n, i) => (
                <motion.a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.6 }}
                  className="text-display text-3xl tracking-tight border-b border-black/10 pb-5"
                >
                  {n.label}
                </motion.a>
              ))}
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-luxe mt-6 bg-gold border-gold text-ink"
              >
                Book Site Visit
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
