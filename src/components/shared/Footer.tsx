import { ArrowUpRight } from "lucide-react";

import { BsInstagram, BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const COLS = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Projects",
    links: [
      {
        label: "Misty Hills, Kozhikode",
        href: "/projects/misty-hills",
      },
      {
        label: "Bella Casa, Coimbatore",
        href: "/projects/bella-casa",
      },
    ],
  },
  {
    title: "Address",
    links: [
      {
        label:
          "2nd Floor, Onyx, Golf Link Rd, Chevayoor, Calicut, Kerala 673017",
      },
      {
        label: "+91 99468 30300",
        href: "tel:+919946830300",
      },
      {
        label: "+91 98468 30300",
        href: "tel:+919846830300",
      },
      {
        label: "helpdesk.calicut@globalhabitat.co.in",
        href: "mailto:helpdesk.calicut@globalhabitat.co.in",
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-luxe pt-10 md:pt-24 pb-12">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-gold">Global Habitat</p>
            <h3 className="text-display text-2xl md:text-3xl mt-4 max-w-md">
              Your Signature Address Starts Here.
            </h3>
            <form className="mt-10 flex items-center gap-3 border-b border-white/15 pb-3 max-w-md">
              <input
                type="email"
                placeholder="Your email for occasional updates"
                className="flex-1 bg-transparent outline-none text-sm placeholder:text-white/40"
              />
              <button className="grid place-items-center h-10 w-10 rounded-full bg-gold text-ink hover:rotate-45 transition-transform">
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
            {COLS.map((column) => (
              <div key={column.title}>
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/40">
                  {column.title}
                </p>

                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.href ? (
                        <Link
                          to={link.href.startsWith("/") ? link.href : ""}
                          className="text-sm text-white/80 hover:text-gold transition-colors"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <span className="text-sm text-white/80">
                          {link.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="hairline bg-white/10 mt-20" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-8">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Global Habitat Pvt. Ltd. — All rights
            reserved.
          </p>
          <p className="text-xs text-white/40">
            powered by <a href="https://www.extechnology.in">extechnology</a>
          </p>
          <div className="flex items-center gap-5 text-white/60">
            {[BsInstagram, BsFacebook, BsLinkedin, BsYoutube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="hover:text-gold transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-5 text-xs text-white/40">
            <Link to="/privacy" className="hover:text-gold">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-gold">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
