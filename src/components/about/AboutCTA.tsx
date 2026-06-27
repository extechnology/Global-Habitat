import { Reveal } from "../shared/Reveal";
import { Link } from "react-router-dom";

function AboutCTA() {
  return (
    <section className="bg-[#f9f7f4] py-8 md:py-16">
      <div className="container-luxe text-center max-w-2xl mx-auto">
        <Reveal>
          <p className="eyebrow">Get Started</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-display mt-4 text-[clamp(1.8rem,3.5vw,2.8rem)] text-ink">
            Begin Your Homeownership Journey
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-4 text-muted-foreground text-sm md:text-base leading-[1.85]">
            Discover a lifestyle of luxury with a home designed for your
            aspirations. Join our growing family of happy homeowners and let us
            help you find the perfect residence that blends elegance, comfort,
            and lasting value.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="btn-luxe"
            >
              View our Projects
            </Link>
            <Link
              to="/contact"
              className="btn-ghost"
            >
              Connect With Sales
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default AboutCTA;
