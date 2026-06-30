import { Reveal } from "../shared/Reveal";

function AboutHero() {
  return (
    <section className="relative bg-white pt-32 pb-8 md:pt-44 md:pb-10 px-4">
      <div className="container-luxe">
        <Reveal>
          <p className="eyebrow">About Us</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="text-display mt-3 text-[clamp(2.2rem,5vw,2.7rem)] text-ink leading-tight max-w-3xl">
            Your Signature Address Awaits,{" "}
            <span className="italic">Experience the Art of Luxury Living.</span>
          </h1>
        </Reveal>
      </div>
    </section>
  );
}

export default AboutHero;
