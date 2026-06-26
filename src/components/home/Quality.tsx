
import { Reveal } from "../shared/Reveal";
import constructionImg from "../../assets/construction.jpeg";

function Quality() {
  const steps = [
    {
      year: "01",
      title: "Premium Materials",
      text: "Imported tiles, German fittings, and audited steel & cement.",
    },
    {
      year: "02",
      title: "Green Building Practices",
      text: "Rainwater harvesting, solar-ready electrical, native landscaping.",
    },
    {
      year: "03",
      title: "Modern Engineering",
      text: "Earthquake-resilient design, RCC framed structures, smart MEP.",
    },
    {
      year: "04",
      title: "Skilled Craftsmanship",
      text: "On-site quality teams and an independent third-party audit.",
    },
  ];
  return (
    <section className="relative bg-ink text-white py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 opacity-25">
        <img
          src={constructionImg}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink/75" />
      </div>
      <div className="relative container-luxe">
        <Reveal>
          <p className="eyebrow text-gold">Construction Quality</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-display mt-5 text-[clamp(2rem,4.4vw,3.6rem)] max-w-3xl">
            Built like an heirloom. <span className="italic">Audited</span> like
            a hospital.
          </h2>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-sm overflow-hidden">
          {steps.map((s, i) => (
            <Reveal key={s.year} delay={i * 0.08} className="bg-ink">
              <div className="p-8 md:p-10 h-full border-t border-gold/60">
                <p className="text-display italic text-gold text-xl">
                  {s.year}
                </p>
                <h3 className="text-display text-2xl mt-6">{s.title}</h3>
                <p className="text-sm text-white/65 leading-relaxed mt-4">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Quality