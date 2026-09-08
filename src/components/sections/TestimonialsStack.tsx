import { stackTestimonials } from "@/lib/content";
import { prefersReducedMotion } from "@/lib/gsap";

const row1 = stackTestimonials.slice(0, 5);
const row2 = stackTestimonials.slice(5);

function TestimonialMarqueeRow({
  items,
  reverse = false,
}: {
  items: ReadonlyArray<(typeof stackTestimonials)[number]>;
  reverse?: boolean;
}) {
  const reducedMotion = prefersReducedMotion();
  const slides = [...items, ...items];

  return (
    <div
      className={`w-full ${reducedMotion ? "overflow-x-auto" : "overflow-hidden"}`}
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
            className="w-[160px] shrink-0 overflow-hidden rounded-xl border border-teal bg-white sm:w-[190px] md:w-[220px]"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="h-[150px] w-full object-contain sm:h-[175px] md:h-[200px]"
              loading="lazy"
              draggable={false}
            />
          </figure>
        ))}
      </div>
    </div>
  );
}

export function TestimonialsStack() {
  return (
    <section className="section-space bg-white">
      <div className="container-page">
        <div
          className="flex flex-col gap-4 sm:gap-5"
          dir="ltr"
          aria-label="גלריית המלצות"
        >
          <TestimonialMarqueeRow items={row1} />
          <TestimonialMarqueeRow items={row2} reverse />
        </div>
      </div>
    </section>
  );
}
