import { Reveal } from "../components/shared/Reveal";
import { Sparkles } from "lucide-react";
import ctaImg from "../assets/cta.jpeg";


function ContactPage() {
  return (
    <section
      id="contact"
      className="relative min-h-[80vh] flex items-center text-white overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={ctaImg}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink/65" />
      </div>
      <div className="relative container-luxe py-28 md:py-36 grid lg:grid-cols-12 gap-12 items-end">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow text-gold">Let's begin</p>
          <h2 className="text-display mt-6 text-[clamp(2.4rem,6vw,5.4rem)]">
            Let's build your <br />
            <span className="italic">dream home.</span>
          </h2>
          <p className="mt-7 text-white/70 max-w-lg leading-relaxed">
            Visit our show villa, meet the architects, walk the land. We'll take
            it from there.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#"
              className="btn-luxe bg-gold border-gold text-ink hover:bg-white hover:border-white"
            >
              Book Site Visit <Sparkles className="h-4 w-4" />
            </a>
            <a href="#" className="btn-ghost text-white">
              Talk to Expert
            </a>
          </div>
        </Reveal>
        <Reveal direction="right" className="lg:col-span-5">
          <div className="glass rounded-sm p-8 md:p-10 text-ink bg-white/85">
            <p className="eyebrow">Get in touch</p>
            <h3 className="text-display text-2xl mt-4">
              Request a private viewing
            </h3>
            <form className="mt-6 space-y-4">
              <input
                placeholder="Full name"
                className="w-full bg-transparent border-b border-border py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-gold transition-colors"
              />
              <input
                placeholder="Email"
                type="email"
                className="w-full bg-transparent border-b border-border py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-gold transition-colors"
              />
              <input
                placeholder="Phone"
                className="w-full bg-transparent border-b border-border py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-gold transition-colors"
              />
              <textarea
                placeholder="Tell us a little about what you're looking for"
                rows={3}
                className="w-full bg-transparent border-b border-border py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-gold transition-colors resize-none"
              />
              <button type="button" className="btn-luxe w-full mt-3">
                Schedule a Call
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


export default ContactPage;