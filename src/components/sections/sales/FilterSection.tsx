import { FadeIn } from "@/components/motion/FadeIn";
import { SalesSection } from "@/components/sales/SalesSection";
import { salesCopy } from "@/lib/content";

export function FilterSection() {
  const { filter } = salesCopy;

  return (
    <SalesSection
      id="filter"
      tone="linen"
      className="overflow-x-clip px-3 pt-8 pb-14 sm:px-6 md:pt-10 md:pb-20"
      innerClassName="max-sm:px-1"
    >
      <FadeIn>
        <img
          src="/images/plants-banner.png?v=1"
          alt=""
          aria-hidden="true"
          draggable={false}
          className="mx-auto mb-6 h-auto w-full max-w-[min(100%,22rem)] object-contain sm:mb-8 sm:max-w-[26rem]"
        />
      </FadeIn>

      <FadeIn delay={0.08}>
        <h2 className="authority-title filter-title mx-auto max-w-full text-center font-hero text-pine">
          {filter.h2}
        </h2>
      </FadeIn>

      <ul className="mx-auto mt-10 w-full max-w-2xl space-y-6 sm:max-w-3xl">
        {filter.bullets.map((bullet, index) => (
          <li key={bullet.slice(0, 24)} className="flex w-full items-start gap-3 sm:gap-4">
            <FadeIn delay={0.16 + index * 0.06} className="flex w-full items-start gap-3 sm:gap-4">
              <span
                aria-hidden="true"
                className="mt-2.5 size-2 shrink-0 rounded-full bg-turquoise"
              />
              <p className="sales-body min-w-0 flex-1 text-start text-pine">
                {bullet}
              </p>
            </FadeIn>
          </li>
        ))}
      </ul>
    </SalesSection>
  );
}
