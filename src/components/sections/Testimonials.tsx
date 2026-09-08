import { FadeIn } from "@/components/motion/FadeIn";
import { stackTestimonials, testimonials } from "@/lib/content";

function ScreenshotGallery() {
  return (
    <div
      className="flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-3 touch-pan-x scrollbar-hide md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0 lg:grid-cols-5"
      dir="ltr"
      aria-label="צילומי המלצות מוואטסאפ"
    >
      {stackTestimonials.map((item) => (
        <figure key={item.src} className="w-[min(78vw,280px)] shrink-0 snap-center md:w-auto">
          <img
            src={item.src}
            alt={item.alt}
            className="h-[240px] w-full object-contain sm:h-[260px] md:h-[210px]"
            loading="lazy"
            draggable={false}
          />
        </figure>
      ))}
    </div>
  );
}

function EditorialQuotes() {
  return (
    <div className="mt-12 flex snap-x snap-mandatory gap-8 overflow-x-auto overscroll-x-contain pb-2 touch-pan-x scrollbar-hide md:mt-14 md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-12 md:overflow-visible md:pb-0">
      {testimonials.map((item) => (
        <blockquote
          key={item.name}
          className="relative w-[min(86vw,360px)] shrink-0 snap-center border-r-2 border-wood/30 pr-5 md:w-auto"
        >
          <span
            aria-hidden="true"
            className="font-amatica pointer-events-none absolute -top-4 right-0 text-[56px] leading-none text-pine/15"
          >
            ״
          </span>
          <p className="text-[15px] leading-[1.85] text-pine sm:text-[16px]">
            {item.text}
          </p>
          <footer className="mt-4 flex items-center justify-between gap-3 text-[13px] text-muted">
            <cite className="not-italic font-semibold text-wood">{item.name}</cite>
            <span className="text-sage">{item.time}</span>
          </footer>
        </blockquote>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="stories"
      className="section-space relative scroll-mt-24 overflow-hidden bg-white px-6"
    >
      <div className="container-page">
        <FadeIn className="mx-auto mb-10 max-w-[760px] text-center md:mb-12">
          <h2 className="heading-section font-hero text-pine">
            כל שיעור הוא חוויה ומדרגה נוספת בפיתוח הביטחון וההצלחה
          </h2>
        </FadeIn>

        <FadeIn>
          <ScreenshotGallery />
        </FadeIn>
        <FadeIn delay={0.1}>
          <EditorialQuotes />
        </FadeIn>
      </div>
    </section>
  );
}
