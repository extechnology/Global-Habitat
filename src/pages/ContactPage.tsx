import { useState } from "react";
import { Reveal } from "../components/shared/Reveal";
import { Sparkles, Phone, X } from "lucide-react";

function ContactPage() {
  const [showContactPopup, setShowContactPopup] = useState(false);
  const message = encodeURIComponent("Book a Site Visit");

  return (
    <section
      id="contact"
      className="relative min-h-[80vh] flex items-center text-white overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/1080  1920 contact-02.jpg.webp"
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink/65" />
      </div>
      <div className="relative container-luxe py-28 md:py-36 grid lg:grid-cols-12 gap-12 items-end">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow text-gold">Let's begin</p>
          <h2 className="text-display mt-6 text-[clamp(2.4rem,6vw,4rem)]">
            Let's build your <br />
            <span className="italic">dream home.</span>
          </h2>
          <p className="mt-7 text-white/70 max-w-lg leading-relaxed">
            Visit our show villa, meet the architects, walk the land. We'll take
            it from there.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`https://wa.me/918589830300?text=${message}`}
              target="_blank"
              rel="noreferrer"
              title="Chat on Whatsapp"
              aria-label="Chat on WhatsApp"
              className="btn-luxe bg-gold border-gold text-ink hover:bg-white hover:border-white"
            >
              Book Site Visit <Sparkles className="h-4 w-4" />
            </a>
            <button
              onClick={() => setShowContactPopup(true)}
              className="btn-ghost text-white hover:text-gold hover:bg-white/10 transition-colors"
            >
              Talk with Sales Team
            </button>
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
                Submit
              </button>
            </form>
          </div>
        </Reveal>
      </div>

      {showContactPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setShowContactPopup(false)}
        >
          <div
            className="bg-white text-ink p-6 md:p-8 rounded-xl shadow-2xl max-w-sm w-full relative transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowContactPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-ink transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-medium mb-6 text-center">
              Talk with Sales Team
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+918589830300"
                className="flex items-center gap-4 bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors border border-gray-100 group"
              >
                <div className="bg-ink text-white p-3 rounded-full group-hover:scale-105 transition-transform flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-ink">Call Us</p>
                  <p className="text-sm text-gray-500">+91 8589830300</p>
                </div>
              </a>
              <a
                href={`https://wa.me/918589830300?text=${message}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-green-50 hover:bg-green-100 p-4 rounded-lg transition-colors border border-green-100 group"
              >
                <div className="bg-[#25D366] text-white p-3 rounded-full group-hover:scale-105 transition-transform flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-green-900">WhatsApp</p>
                  <p className="text-sm text-green-700">Chat with our team</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ContactPage;
