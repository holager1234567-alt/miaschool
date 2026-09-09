import { useLayoutEffect, useRef } from "react";

import { methodParagraphs } from "@/lib/content";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export function TheMethod() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-method-fade]", {
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
    <section ref={ref} className="bg-transparent px-4 pt-0 pb-5 text-[#1c2d2b] sm:px-6 sm:pb-6 md:pb-7">
      <div className="container-page mx-auto max-w-3xl text-center">
        <h2
          data-method-fade
          className="method-title heading-section font-ploni font-extrabold mx-auto mb-6 max-w-none sm:mb-8"
        >
          <span className="method-title-accent block whitespace-nowrap text-[clamp(26px,6vw,44px)]">
            השיטה המוצלחת שלנו
          </span>
          <span className="block text-[clamp(34px,7.5vw,54px)] leading-tight">
            ללימודי אנגלית
          </span>
        </h2>

        <div className="mx-auto max-w-[42rem] space-y-4 sm:space-y-5">
          {methodParagraphs.map((paragraph) => (
            <p
              key={paragraph}
              data-method-fade
              className="text-base leading-relaxed text-[#3d5552] sm:text-lg sm:leading-[1.75]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
