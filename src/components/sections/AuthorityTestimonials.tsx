import { authorityTestimonials } from "@/lib/content";

import { TestimonialsMarquee } from "@/components/sections/TestimonialsMarquee";

const row1 = authorityTestimonials.slice(0, 5);
const row2 = authorityTestimonials.slice(5);

export function AuthorityTestimonials() {
  return (
    <div
      className="flex w-full flex-col gap-4 sm:gap-5"
      dir="ltr"
      aria-label="גלריית המלצות"
    >
      <TestimonialsMarquee
        items={row1}
        fillViewport
        stack
        labeled={false}
        className="pb-0"
      />
      <TestimonialsMarquee
        items={row2}
        fillViewport
        stack
        reverse
        labeled={false}
        className="pb-0"
      />
    </div>
  );
}
