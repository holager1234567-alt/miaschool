import { useSyncExternalStore } from "react";

import { prefersReducedMotion } from "@/lib/gsap";

type TestimonialImage = {
  src: string;
  alt: string;
};

type TestimonialsMarqueeProps = {
  items: readonly TestimonialImage[];
  ariaLabel?: string;
  className?: string;
  tall?: boolean;
  /** Desktop: repeat slides so the row fills the viewport with no gaps */
  fillViewport?: boolean;
  /** Stack rows in authority section — turquoise border, alternate scroll direction */
  stack?: boolean;
  reverse?: boolean;
  /** Set false when nested inside a labeled gallery wrapper */
  labeled?: boolean;
};

function subscribeDesktopMq(onStoreChange: () => void) {
  const mq = window.matchMedia("(min-width: 768px)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getDesktopMqSnapshot() {
  return window.matchMedia("(min-width: 768px)").matches;
}

function getDesktopMqServerSnapshot() {
  return true;
}

function repeatItems<T>(items: readonly T[], times: number): T[] {
  return Array.from({ length: times }, () => items).flat();
}

export function TestimonialsMarquee({
  items,
  ariaLabel = "גלריית המלצות",
  className = "",
  tall = false,
  fillViewport = false,
  stack = false,
  reverse = false,
  labeled = true,
}: TestimonialsMarqueeProps) {
  const reducedMotion = prefersReducedMotion();
  const isDesktop = useSyncExternalStore(
    subscribeDesktopMq,
    getDesktopMqSnapshot,
    getDesktopMqServerSnapshot,
  );

  const loopRepeat = fillViewport && isDesktop ? 3 : 1;
  const loop = repeatItems(items, loopRepeat);
  const slides = reducedMotion ? items : [...loop, ...loop];

  const motionClass = reducedMotion
    ? ""
    : stack
      ? reverse
        ? "animate-stack-testimonials-reverse"
        : "animate-stack-testimonials"
      : "animate-hero-testimonials";

  const overflowClass = reducedMotion
    ? stack
      ? "overflow-x-auto scrollbar-hide"
      : "overflow-x-auto"
    : "overflow-hidden";

  return (
    <div
      className={`relative z-20 w-full pb-2 ${overflowClass} ${className}`}
      dir="ltr"
      {...(labeled ? { "aria-label": ariaLabel } : {})}
    >
      <div className={`flex w-max gap-3 sm:gap-4 ${motionClass}`}>
        {slides.map((item, slideIndex) => (
          <figure
            key={`${item.src}-${slideIndex}`}
            className={`w-[160px] shrink-0 overflow-hidden rounded-xl border bg-white sm:w-[185px] md:w-[210px] ${stack ? "border-turquoise" : "border-black"}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className={
                tall
                  ? "h-[210px] w-full object-contain sm:h-[250px] md:h-[290px]"
                  : "h-[140px] w-full object-contain sm:h-[165px] md:h-[185px]"
              }
              loading={fillViewport && isDesktop ? "eager" : "lazy"}
              fetchPriority={fillViewport && isDesktop ? "high" : undefined}
              draggable={false}
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
