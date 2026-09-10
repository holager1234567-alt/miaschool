import { FadeIn } from "@/components/motion/FadeIn";
import { HeroCtaButton } from "@/components/sections/HeroCtaButton";
import { HeroLogo } from "@/components/sections/HeroLogo";
import { HeroStats } from "@/components/sections/HeroStats";
import { HeroTestimonials } from "@/components/sections/HeroTestimonials";
import { salesCopy } from "@/lib/content";

export function Hero() {
  const { hook } = salesCopy;

  return (
    <section
      id="hook"
      className="relative scroll-mt-20 overflow-x-clip bg-white pt-10 pb-4 text-pine md:overflow-x-visible md:pt-14 md:pb-5"
    >
      <div className="container-page relative z-10 mx-auto flex w-full min-w-0 max-w-3xl flex-col items-center px-4 text-center sm:px-6">
        <HeroLogo variant="hero" />

        <FadeIn className="mt-1 w-full sm:mt-0">
          <h1 className="hero-title-heavy font-ploni mx-auto mb-0 w-full max-w-full font-extrabold md:max-w-4xl">
            <span className="block text-pretty text-[clamp(30px,7.2vw,48px)] leading-[1.2] text-turquoise md:text-[clamp(36px,4.2vw,52px)] md:leading-[1.26]">
              {hook.h1Lead}
            </span>
            <span className="brand-gradient-text mt-2 block text-[clamp(32px,8.2vw,54px)] leading-[1.12] md:mt-2.5">
              {hook.h1Accent}
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-6 w-full min-w-0 px-1 sm:mt-8 sm:px-0">
          <HeroCtaButton variant="hero-white" className="mx-auto" />
          <p className="mx-auto mt-3 max-w-xl text-[clamp(11px,3.1vw,14px)] leading-relaxed text-balance text-sage md:max-w-2xl">
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
