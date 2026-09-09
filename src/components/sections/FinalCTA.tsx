import { FadeIn } from "@/components/motion/FadeIn";
import { HeroCtaButton } from "@/components/sections/HeroCtaButton";

export function FinalCTA() {
  return (
    <section className="border-t border-sage-soft/60 bg-white px-6 pb-[50px] pt-14 md:pb-[90px] md:pt-20">
      <div className="container-page">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="heading-section font-ploni font-extrabold text-pine">
            בואו נעניק לילדים שלכם את הביטחון לדבר אנגלית
          </h2>
          <p className="mx-auto mt-4 max-w-[36ch] text-muted">
            לחצו לשיחה בוואטסאפ ונתאם שיחת התאמה אישית ללא עלות
          </p>
          <div className="mt-8">
            <HeroCtaButton
              variant="hero-white"
              label="מעבר לשיחה אישית בוואטסאפ"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
