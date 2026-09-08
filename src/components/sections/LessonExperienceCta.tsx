import { useLayoutEffect, useRef } from "react";

import { HeroCtaButton } from "@/components/sections/HeroCtaButton";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export function LessonExperienceCta() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-lesson-experience-block]", {
        y: 28,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-lesson-experience-block]",
          start: "top 85%",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white px-4 py-12 sm:px-6 sm:py-14 md:py-16">
      <div
        data-lesson-experience-block
        className="container-page mx-auto max-w-3xl text-center"
      >
        <h2 className="heading-section font-hero text-[#163532]">
          <span className="block">כל שיעור הוא חוויה מעצימה</span>
          <span className="mt-2 block text-[clamp(20px,4.5vw,32px)] font-bold leading-snug text-[#3d5552] sm:mt-3">
            למידת שפה לצד פיתוח ביטחון עצמי ותחושת הצלחה.
          </span>
        </h2>

        <div className="mt-8 flex justify-center sm:mt-10">
          <HeroCtaButton />
        </div>
      </div>
    </section>
  );
}
