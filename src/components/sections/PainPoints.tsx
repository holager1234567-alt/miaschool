import { FadeIn } from "@/components/motion/FadeIn";
import { painPoints } from "@/lib/content";
import { cn } from "@/lib/utils";

export function PainPoints() {
  return (
    <section
      id="pain"
      className="relative scroll-mt-24 overflow-hidden bg-white px-6 py-14 text-pine md:py-20"
    >
      <div className="container-page relative z-10 mx-auto max-w-5xl">
        <FadeIn className="text-center">
          <h2 className="heading-section font-ploni font-extrabold text-pine">
            אולי זה מוכר לכם מהבית?
          </h2>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-12 md:mt-16">
          <div className="grid md:grid-cols-3">
            {painPoints.map((item, index) => (
              <div
                key={item.id}
                className={cn(
                  "px-2 py-8 text-center md:px-6 md:py-0",
                  index > 0 &&
                    "border-t border-sage-soft/70 md:border-t-0 md:border-r md:border-sage-soft/70",
                )}
              >
                <p className="text-[15px] leading-[1.85] font-medium text-pine sm:text-[16px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
