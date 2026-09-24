import { heroTestimonials } from "@/lib/content";

import { TestimonialsMarquee } from "./TestimonialsMarquee";

export function HeroTestimonials() {
  return (
    <TestimonialsMarquee items={heroTestimonials} fillViewport tall />
  );
}
