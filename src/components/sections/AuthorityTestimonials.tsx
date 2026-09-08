import { authorityTestimonials } from "@/lib/content";
import { prefersReducedMotion } from "@/lib/gsap";

const row1 = authorityTestimonials.slice(0, 5);
const row2 = authorityTestimonials.slice(5);

function TestimonialMarqueeRow({
  items,
  reverse = false,
}: {
  items: ReadonlyArray<(typeof authorityTestimonials)[number]>;
  reverse?: boolean;
}) {
  const reducedMotion = prefersReducedMotion();
  const slides = [...items, ...items];

  return (
    <div
      className={`w-full ${reducedMotion ? "overflow-x-auto scrollbar-hide" : "overflow-hidden"}`}
      dir="ltr"
    >
      <div
        className={`flex w-max gap-3 sm:gap-4 ${
          reducedMotion
            ? ""
            : reverse
              ? "animate-stack-testimonials-reverse"
              : "animate-stack-testimonials"
        }`}
      >
        {(reducedMotion ? items : slides).map((item, slideIndex) => (
          <figure
            key={`${item.src}-${slideIndex}`}
            className="w-[160px] shrink-0 overflow-hidden rounded-xl border border-turquoise bg-white sm:w-[185px] md:w-[210px]"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="h-[140px] w-full object-contain sm:h-[165px] md:h-[185px]"
              loading="lazy"
              draggable={false}
            />
          </figure>
        ))}
      </div>
    </div>
  );
}

export function AuthorityTestimonials() {
  return (
    <div
      className="flex w-full flex-col gap-4 sm:gap-5"
      dir="ltr"
      aria-label="גלריית המלצות"
    >
      <TestimonialMarqueeRow items={row1} />
      <TestimonialMarqueeRow items={row2} reverse />
    </div>
  );
}
