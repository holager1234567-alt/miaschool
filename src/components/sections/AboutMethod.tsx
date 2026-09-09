import { FadeIn } from "@/components/motion/FadeIn";
import { SchoolIntroLeadParagraph } from "@/components/sections/SchoolIntroLeadParagraph";
import { methodParagraphs, schoolIntroParagraphs } from "@/lib/content";

export function AboutMethod() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden bg-white px-6 py-14 text-pine md:py-20"
    >
      <div className="container-page relative z-10 mx-auto max-w-3xl">
        <FadeIn className="text-center">
          <p className="font-ploni font-bold text-[clamp(28px,6vw,42px)] leading-none text-wood">
            Mia&apos;s School
          </p>
        </FadeIn>

        <FadeIn delay={0.06} className="mt-10 space-y-6 text-center">
          <SchoolIntroLeadParagraph className="text-[15px] leading-[1.85] text-pine sm:text-[17px]" />
          {schoolIntroParagraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="text-[15px] leading-[1.85] text-pine sm:text-[17px]"
            >
              {paragraph}
            </p>
          ))}
        </FadeIn>

        <FadeIn delay={0.12} className="mt-14 md:mt-16">
          <div
            aria-hidden="true"
            className="mx-auto mb-10 h-px max-w-xs bg-gradient-to-l from-transparent via-wood/35 to-transparent"
          />
          <h2 className="heading-section text-center font-ploni font-extrabold text-pine">
            השיטה המוצלחת שלנו ללימודי אנגלית
          </h2>
          <div className="mt-8 space-y-6 text-center">
            {methodParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="text-[15px] leading-[1.85] text-muted sm:text-[17px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
