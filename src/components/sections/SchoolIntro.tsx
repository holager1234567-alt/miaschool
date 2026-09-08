import { useLayoutEffect, useRef } from "react";

import { HeroLogo } from "@/components/sections/HeroLogo";
import { SchoolIntroLeadParagraph } from "@/components/sections/SchoolIntroLeadParagraph";
import { schoolIntroParagraphs } from "@/lib/content";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export function SchoolIntro() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-school-intro-fade]", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 82%",
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="-mt-1 bg-white px-4 pt-0 pb-8 text-black sm:px-6 sm:pb-10 md:pb-12">
      <div className="container-page mx-auto max-w-3xl text-center">
        <div data-school-intro-fade>
          <HeroLogo />
        </div>

        <div className="mx-auto mt-2 max-w-[42rem] space-y-4 sm:space-y-5">
          <SchoolIntroLeadParagraph
            data-school-intro-fade
            className="text-base leading-relaxed text-black sm:text-lg sm:leading-[1.75]"
            enlargeLeadIntro
          />
          {schoolIntroParagraphs.map((paragraph) => (
            <p
              key={paragraph}
              data-school-intro-fade
              className="text-base leading-relaxed text-black sm:text-lg sm:leading-[1.75]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
