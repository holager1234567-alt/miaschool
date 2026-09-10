import { FadeIn } from "@/components/motion/FadeIn";
import { whyChooseItems } from "@/lib/content";

export function WhyChoose() {
  return (
    <section
      id="why"
      className="relative scroll-mt-24 overflow-hidden bg-white px-6 py-14 text-pine md:py-20"
    >
      <div className="container-page relative z-10 mx-auto max-w-3xl">
        <FadeIn className="mb-12 text-center md:mb-16">
          <h2 className="heading-section font-ploni font-extrabold text-pine">
            למה לבחור במיה&apos;סקול?
          </h2>
        </FadeIn>

        <div className="space-y-12 md:space-y-14">
          {whyChooseItems.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.06}>
              <article className="flex items-start gap-4 sm:gap-6">
                <span
                  aria-hidden="true"
                  className="font-ploni font-extrabold shrink-0 text-[clamp(56px,14vw,88px)] leading-none text-pine/75"
                >
                  {item.number}
                </span>
                <div className="min-w-0 pt-1">
                  <h3 className="text-[18px] font-bold leading-snug text-pine sm:text-[22px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.8] text-muted sm:text-[16px]">
                    {item.description}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
