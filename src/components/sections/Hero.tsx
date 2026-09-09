import { FadeIn } from "@/components/motion/FadeIn";
import { HeroCtaButton } from "@/components/sections/HeroCtaButton";
import { HeroLogo } from "@/components/sections/HeroLogo";
import { HeroStats } from "@/components/sections/HeroStats";
import { HeroTestimonials } from "@/components/sections/HeroTestimonials";

export function Hero() {
  return (
    <section
      id="hook"
      className="relative scroll-mt-20 overflow-x-clip bg-white pt-10 pb-4 text-pine md:pt-14 md:pb-5"
    >
      <div className="container-page relative z-10 mx-auto flex w-full min-w-0 max-w-3xl flex-col items-center px-4 text-center sm:px-6">
        <HeroLogo variant="brand" />

        <FadeIn>
          <h1 className="font-ploni font-extrabold hero-title-heavy mb-0 text-[clamp(26px,6.4vw,40px)] leading-[1.26] text-pine md:text-[clamp(21px,5.2vw,40px)] md:leading-[1.28]">
            <span className="hero-h1-line">שמונה מפגשים והילדים שלכם</span>
            <span className="block">יתחילו לדבר אנגלית</span>
            <span className="hero-h1-line">בביטחון מלא ובלי שום פחד</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-6 w-full min-w-0 px-1 sm:mt-8 sm:px-0">
          <HeroCtaButton variant="hero-white" className="mx-auto" />
          <p className="mx-auto mt-3 text-[clamp(11px,3.1vw,14px)] leading-relaxed whitespace-nowrap text-sage">
            שיחה אישית, כדי להבין בדיוק מה הילדים שלכם צריכים
          </p>
        </FadeIn>

        <FadeIn delay={0.16} className="mt-8 w-full sm:mt-10">
          <HeroStats />
        </FadeIn>
      </div>

      <FadeIn delay={0.24} className="relative z-20 mt-6 w-full sm:mt-8">
        <HeroTestimonials />
      </FadeIn>
    </section>
  );
}
