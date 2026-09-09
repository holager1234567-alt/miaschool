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
};

export function TestimonialsMarquee({
  items,
  ariaLabel = "גלריית המלצות",
  className = "",
  tall = false,
}: TestimonialsMarqueeProps) {
  const reducedMotion = prefersReducedMotion();
  const slides = [...items, ...items];

  return (
    <div
      className={`relative z-20 w-full pb-2 ${reducedMotion ? "overflow-x-auto" : "overflow-hidden"} ${className}`}
      dir="ltr"
      aria-label={ariaLabel}
    >
      <div
        className={`flex w-max gap-3 sm:gap-4 ${reducedMotion ? "" : "animate-hero-testimonials"}`}
      >
        {(reducedMotion ? items : slides).map((item, slideIndex) => (
          <figure
            key={`${item.src}-${slideIndex}`}
            className="w-[160px] shrink-0 overflow-hidden rounded-xl border border-black bg-white sm:w-[185px] md:w-[210px]"
          >
            <img
              src={item.src}
              alt={item.alt}
              className={
                tall
                  ? "h-[210px] w-full object-contain sm:h-[250px] md:h-[290px]"
                  : "h-[140px] w-full object-contain sm:h-[165px] md:h-[185px]"
              }
              loading="lazy"
              draggable={false}
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
