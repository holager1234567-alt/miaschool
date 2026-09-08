import { useLayoutEffect, useRef } from "react";

import { stats } from "@/lib/content";
import { gsap, prefersReducedMotion, ScrollTrigger } from "@/lib/gsap";

export function StatsBar() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const nodes = Array.from(el.querySelectorAll<HTMLElement>("[data-count]"));

    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        nodes.forEach((node) => {
          node.textContent = node.dataset.count ?? "0";
        });
        return;
      }

      nodes.forEach((node) => {
        const target = Number(node.dataset.count ?? 0);
        const obj = { val: 0 };
        const tween = gsap.to(obj, {
          val: target,
          duration: 1.6,
          ease: "power2.out",
          paused: true,
          onUpdate: () => {
            node.textContent = String(Math.round(obj.val));
          },
          onComplete: () => {
            node.textContent = String(target);
          },
        });

        ScrollTrigger.create({
          trigger: el,
          start: "top 92%",
          once: true,
          onEnter: () => tween.play(),
          onRefresh: (self) => {
            if (self.isActive || self.progress > 0) tween.play();
          },
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="pb-4 md:pb-6">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-4 rounded-[20px] border border-line bg-white px-4 py-6 shadow-soft md:grid-cols-4 md:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="display-number">
                <span data-count={stat.value}>0</span>
                {stat.suffix}
              </p>
              <p className="mt-2 text-[13px] font-semibold text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
