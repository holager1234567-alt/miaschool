import { motion, useReducedMotion } from "framer-motion";

import { FadeIn } from "@/components/motion/FadeIn";
import { SalesSection } from "@/components/sales/SalesSection";
import { salesCopy } from "@/lib/content";

const SLIDE_OFFSET_PX = 52;
const ease = [0.22, 1, 0.36, 1] as const;

function FilterBulletItem({ bullet, index }: { bullet: string; index: number }) {
  const reduce = useReducedMotion();

  return (
    <motion.li
      className="filter-bullet-item flex w-full max-w-xl items-start justify-center gap-2.5 sm:max-w-2xl md:max-w-none md:w-auto md:items-center md:gap-3"
      initial={reduce ? false : { opacity: 0, x: SLIDE_OFFSET_PX }}
      whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, delay: 0.14 + index * 0.11, ease }}
    >
      <img
        src="/images/pushpin.png?v=3"
        alt=""
        aria-hidden="true"
        draggable={false}
        className="filter-pushpin pointer-events-none shrink-0"
      />
      <p className="filter-bullet-text flex-1 text-start text-black md:flex-none">{bullet}</p>
    </motion.li>
  );
}

export function FilterSection() {
  const { filter } = salesCopy;

  return (
    <SalesSection
      id="filter"
      tone="linen"
      className="filter-section overflow-x-clip px-3 pt-8 pb-14 sm:px-6 md:overflow-x-visible md:pt-8 md:pb-6 lg:pb-7"
      innerClassName="max-sm:px-1 md:max-w-[min(96vw,82rem)]"
    >
      <FadeIn>
        <img
          src="/images/plants-banner.png?v=1"
          alt=""
          aria-hidden="true"
          draggable={false}
          className="mx-auto mb-6 h-auto w-full max-w-[min(100%,22rem)] object-contain sm:mb-8 sm:max-w-[26rem] md:mb-5"
        />
      </FadeIn>

      <FadeIn delay={0.08}>
        <h2 className="authority-title filter-title mx-auto max-w-full text-center font-ploni font-extrabold text-turquoise">
          {filter.h2}
        </h2>
      </FadeIn>

      <ul className="filter-bullets-list mx-auto mt-10 flex w-full max-w-2xl flex-col items-center gap-8 sm:max-w-3xl sm:gap-9 md:mt-8 md:max-w-none md:gap-5 lg:gap-6">
        {filter.bullets.map((bullet, index) => (
          <FilterBulletItem key={bullet.slice(0, 24)} bullet={bullet} index={index} />
        ))}
      </ul>
    </SalesSection>
  );
}
