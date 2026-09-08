import { Sparkles, Users, User } from "lucide-react";
import { useLayoutEffect, useRef } from "react";

import { tracks } from "@/lib/content";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

const trackIcons = [User, Users, Sparkles];

export function Tracks() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-track]", {
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
    <section id="tracks" ref={ref} className="section-space scroll-mt-24">
      <div className="container-page">
        <div className="mx-auto mb-12 max-w-[760px] text-center">
          <p className="caption-tag mb-3 text-coral">אפשרויות השיעורים</p>
          <h2 className="heading-section">זום מכל מקום, בלי לוותר על אינטימיות</h2>
          <p className="mt-4 text-muted">
            הילד בבית, במרחב הבטוח שלו. בלי נסיעות, בלי פקקים, עם חומרים חיים
            שמחזיקים את הקשב.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {tracks.map((track, i) => {
            const Icon = trackIcons[i];
            return (
              <article
                key={track.title}
                data-track
                className={cn(
                  "relative rounded-[20px] border bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift",
                  track.popular ? "border-coral/35" : "border-line",
                )}
              >
                {track.badge && (
                  <span className="absolute -top-3 right-5 rounded-full bg-sand px-3 py-1 text-[12px] font-bold text-navy">
                    {track.badge}
                  </span>
                )}
                <span className="mb-5 inline-flex size-12 items-center justify-center rounded-full bg-coral/10">
                  <Icon className="size-6 text-coral" strokeWidth={1.75} />
                </span>
                <p className="caption-tag text-muted">{track.subtitle}</p>
                <h3 className="heading-card mt-1">{track.title}</h3>
                <p className="mt-3 text-muted">{track.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
