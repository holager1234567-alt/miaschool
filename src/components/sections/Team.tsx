import { useLayoutEffect, useRef } from "react";

import { teachers } from "@/lib/content";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export function Team() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-teacher]", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 78%" },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="team" ref={ref} className="section-space bg-white scroll-mt-24">
      <div className="container-page">
        <div className="mx-auto mb-12 max-w-[760px] text-center">
          <p className="caption-tag mb-3 text-coral">הצוות של מיה</p>
          <h2 className="heading-section">הכירו את צוות המורות</h2>
          <p className="mt-4 text-muted">
            שש מורות מקומיות ואיכותיות. לא מוקד אנונימי, פנים, קול, ומשפט אחד
            על מה שהן הכי אוהבות כאן.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher) => (
            <article
              key={teacher.name}
              data-teacher
              className="soft-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="mx-auto size-28 rounded-full object-cover ring-4 ring-cream"
              />
              <h3 className="heading-card mt-4">{teacher.name}</h3>
              <p className="mt-2 text-[15px] leading-[1.6] text-muted">
                ״{teacher.quote}״
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
