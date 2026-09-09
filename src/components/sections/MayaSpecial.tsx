import { Heart, Languages, Shield, Sparkles } from "lucide-react";
import { useLayoutEffect, useRef } from "react";

import { mayaSpecials } from "@/lib/content";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

const icons = {
  languages: Languages,
  heart: Heart,
  sparkles: Sparkles,
  shield: Shield,
};

export function MayaSpecial() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-maya-special]", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 78%" },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section-space bg-white">
      <div className="container-page">
        <div className="mx-auto mb-10 max-w-[760px] text-center md:mb-12">
          <p className="caption-tag mb-3 text-coral">מה מיוחד במיה</p>
          <h2 className="heading-section">לא עוד מורה, מישהי שמכירה את הדרך</h2>
          <p className="mt-4 text-muted">
            מיה הקימה בית ספר בוטיק כי ראתה ילדים מבינים הכל ונאלמים ברגע האמת.
            הנה מה שמבדיל אותה מכל שיעור פרטי רגיל.
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {mayaSpecials.map((item) => {
            const Icon = icons[item.icon];

            return (
              <li
                key={item.title}
                data-maya-special
                className="rounded-[20px] border border-line bg-cream/40 p-5 shadow-soft md:p-6"
              >
                <Icon className="size-7 text-teal" strokeWidth={1.75} />
                <h3 className="mt-4 font-ploni font-bold text-[18px] font-bold text-navy md:text-[20px]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted md:text-[16px]">
                  {item.text}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
