import { useLayoutEffect, useRef } from "react";

import { HeroCtaButton } from "@/components/sections/HeroCtaButton";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export function GuaranteeCta() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-guarantee-block]", {
        y: 28,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-guarantee-block]",
          start: "top 85%",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white px-4 pt-4 pb-12 sm:px-6 sm:pt-6 sm:pb-14 md:pb-16">
      <div
        data-guarantee-block
        className="container-page mx-auto max-w-none text-center"
      >
        <p className="font-ploni font-extrabold text-[clamp(28px,8vw,52px)] font-bold leading-[1.15] text-navy sm:text-[clamp(28px,7vw,52px)]">
          <span className="block sm:inline">
            <span className="text-logo-tan">8 מפגשים</span>
          </span>{" "}
          <span className="block sm:inline">והיחס לשפה משתנה</span>
        </p>

        <div className="mt-10 flex justify-center">
          <HeroCtaButton />
        </div>
      </div>
    </section>
  );
}
