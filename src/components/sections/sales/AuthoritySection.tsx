import { useInView } from "framer-motion";
import { useRef, type CSSProperties } from "react";

import { AuthorityTestimonials } from "@/components/sections/AuthorityTestimonials";
import { FadeIn } from "@/components/motion/FadeIn";
import { HeroCtaButton } from "@/components/sections/HeroCtaButton";
import { salesCopy } from "@/lib/content";
import { cn } from "@/lib/utils";

type AuthorityHighlightParagraph = Extract<
  (typeof salesCopy.authority.paragraphs)[number],
  { lead: string }
>;

function AuthorityFamiliesHighlight({
  paragraph,
}: {
  paragraph: AuthorityHighlightParagraph;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isVisible = useInView(ref, { once: true, amount: 0.55 });

  const lines = [
    paragraph.lead,
    "afterLead" in paragraph ? paragraph.afterLead : null,
    paragraph.rest,
    "middle" in paragraph ? paragraph.middle : null,
    "tail" in paragraph ? paragraph.tail : null,
  ].filter(Boolean) as string[];

  return (
    <p
      ref={ref}
      className={cn(
        "authority-families-highlight",
        isVisible && "authority-families-highlight--visible",
      )}
    >
      {lines.map((line, index) => (
        <span
          key={line}
          className="authority-families-highlight-line block"
          style={
            {
              "--accent-delay": `${0.12 + index * 0.22}s`,
            } as CSSProperties
          }
        >
          {line}
        </span>
      ))}
    </p>
  );
}

export function AuthoritySection() {
  const { authority } = salesCopy;

  return (
    <section
      id="proof"
      className="relative scroll-mt-20 overflow-x-clip bg-transparent pt-3 pb-8 text-pine sm:pt-4 sm:pb-10 md:pt-5 md:pb-12"
    >
      <div className="container-page mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <img
            src="/images/kids-reading.png?v=1"
            alt=""
            aria-hidden="true"
            draggable={false}
            className="mx-auto mb-6 h-auto w-full max-w-[min(100%,20rem)] object-contain sm:mb-8 sm:max-w-[24rem]"
          />
        </FadeIn>

        <FadeIn delay={0.08}>
          <h2 className="authority-title mx-auto mb-8 text-center font-ploni font-extrabold text-pine sm:mb-10">
            <span className="block">
              <span className="text-[#d6c58d] sm:hidden">זה לא קסם</span>
              <span className="hidden sm:block">
                <span className="text-[#d6c58d]">זה לא קסם</span>
              </span>
            </span>
            <span className="block text-turquoise">{authority.h2Lines[1]}</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.16}>
          <div className="mx-auto max-w-2xl space-y-4 text-center md:max-w-3xl">
            {authority.paragraphs.map((paragraph) => {
              if (typeof paragraph === "object") {
                return (
                  <AuthorityFamiliesHighlight
                    key={paragraph.lead}
                    paragraph={paragraph}
                  />
                );
              }

              const isDesktopNowrapParagraph = paragraph.startsWith(
                "בשנים האחרונות בנינו",
              );

              return (
                <p key={paragraph.slice(0, 28)} className="sales-body text-black">
                  {isDesktopNowrapParagraph ? (
                    <span className="md:whitespace-nowrap">{paragraph}</span>
                  ) : (
                    paragraph
                  )}
                </p>
              );
            })}
          </div>
        </FadeIn>

      </div>

      <FadeIn delay={0.24} className="mt-10 w-full sm:mt-12">
        <AuthorityTestimonials />
      </FadeIn>

      <FadeIn delay={0.32} className="container-page mx-auto mt-10 flex justify-center px-4 sm:mt-14 sm:px-6">
        <HeroCtaButton variant="gold-glow" label={salesCopy.hook.cta} className="mx-auto" />
      </FadeIn>
    </section>
  );
}
