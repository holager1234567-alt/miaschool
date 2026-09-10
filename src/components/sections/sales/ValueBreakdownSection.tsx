import { motion, useReducedMotion } from "framer-motion";
import type { RefObject } from "react";

import { FadeIn } from "@/components/motion/FadeIn";
import { HeroCtaButton } from "@/components/sections/HeroCtaButton";
import { salesCopy } from "@/lib/content";

const SLIDE_OFFSET_PX = 72;
const STEP_SLIDE_OFFSET_PX = 52;
const stepEase = [0.22, 1, 0.36, 1] as const;
const CTA_SLIDE_OFFSET_PX = 40;

function isDocumentRtl() {
  return (
    document.documentElement.dir === "rtl" ||
    getComputedStyle(document.documentElement).direction === "rtl"
  );
}

function slideOffsetPx() {
  return isDocumentRtl() ? SLIDE_OFFSET_PX : -SLIDE_OFFSET_PX;
}

function ctaSlideOffsetPx() {
  return isDocumentRtl() ? -CTA_SLIDE_OFFSET_PX : CTA_SLIDE_OFFSET_PX;
}

type ValueItem = (typeof salesCopy.value.items)[number];

function ValueCurveArrow({ placement }: { placement: "start" | "end" }) {
  return (
    <div
      className={
        placement === "start"
          ? "value-curve-arrow-wrap value-curve-arrow-wrap--start"
          : "value-curve-arrow-wrap value-curve-arrow-wrap--end"
      }
      aria-hidden="true"
    >
      <img
        src="/images/value-curve-arrow.png?v=1"
        alt=""
        draggable={false}
        className="value-curve-arrow pointer-events-none h-auto object-contain"
      />
    </div>
  );
}

function ValueTitle({ lines }: { lines: readonly [string, string] }) {
  return (
    <h2 className="value-section-title z-10 mx-auto w-full max-w-3xl shrink-0 text-center font-ploni font-extrabold md:max-w-none">
      <span>{lines[0]}</span>{" "}
      <span>{lines[1]}</span>
    </h2>
  );
}

function StepTreeLogo({
  className = "",
  size = "inline",
}: {
  className?: string;
  size?: "inline" | "hero" | "stacked" | "desktop";
}) {
  const sizeClass =
    size === "hero"
      ? "h-[68px] w-[96px] sm:h-[72px] sm:w-[104px]"
      : size === "desktop"
        ? "h-[4.25rem] w-[6rem] lg:h-[4.75rem] lg:w-[6.5rem]"
      : size === "stacked"
        ? "h-8 w-8 sm:h-9 sm:w-9"
        : "h-6 w-6 shrink-0 md:h-7 md:w-7";

  return (
    <img
      src="/images/logo.png?v=5"
      alt=""
      aria-hidden="true"
      draggable={false}
      className={`pointer-events-none object-contain object-top ${sizeClass} ${className}`}
    />
  );
}

function ValueStep({
  item,
  scrollStep = false,
  compact = false,
  desktop = false,
}: {
  item: ValueItem;
  scrollStep?: boolean;
  compact?: boolean;
  desktop?: boolean;
}) {
  const offset = slideOffsetPx();

  if (desktop) {
    return (
      <article className="value-step-desktop mx-auto flex w-full flex-col items-center text-center">
        <StepTreeLogo size="desktop" className="mb-3 lg:mb-3.5" />
        <h3 className="value-step-title-desktop text-balance">{item.title}</h3>
        <p className="value-step-desc-desktop mt-1.5 text-black">{item.description}</p>
      </article>
    );
  }

  if (compact) {
    return (
      <article
        data-scroll-step={scrollStep ? "" : undefined}
        className="mx-auto flex w-full max-w-[24rem] flex-col items-center text-center sm:max-w-[28rem]"
        style={
          scrollStep
            ? { opacity: 0, transform: `translate3d(${offset}px, 0, 0)` }
            : undefined
        }
      >
        <StepTreeLogo size="hero" className="mb-2.5 sm:mb-3" />
        <h3 className="value-step-title-compact">{item.title}</h3>
        <p className="value-step-desc-compact mt-1.5 text-black">{item.description}</p>
      </article>
    );
  }

  return (
    <article
      data-scroll-step={scrollStep ? "" : undefined}
      className="mx-auto flex w-full max-w-xl flex-col items-center text-center sm:max-w-2xl"
      style={
        scrollStep
          ? { opacity: 0, transform: `translate3d(${offset}px, 0, 0)` }
          : undefined
      }
    >
      <div className="flex items-center justify-center gap-2">
        <StepTreeLogo />
        <h3 className="process-step-title">{item.title}</h3>
      </div>
      <p className="process-step-description mt-1.5 text-black">{item.description}</p>
    </article>
  );
}

function ValueFlowArrowHorizontal() {
  return (
    <svg
      viewBox="0 0 48 16"
      className="value-flow-arrow-h h-[1.125rem] w-12 shrink-0 md:h-5 md:w-[3.25rem]"
      aria-hidden="true"
    >
      <path
        d="M46 8H6M10 4L4 8L10 12"
        fill="none"
        stroke="#2a9d8f"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ValueCta({
  label,
  ctaRef,
  scrollAnimated = false,
  underCenterStep = false,
}: {
  label: string;
  ctaRef?: RefObject<HTMLDivElement | null>;
  scrollAnimated?: boolean;
  underCenterStep?: boolean;
}) {
  const offset = ctaSlideOffsetPx();

  const button = <HeroCtaButton variant="hero-white" label={label} className="mx-auto" />;

  if (underCenterStep) {
    return (
      <div
        ref={ctaRef}
        className="value-cta-cell relative z-10"
        style={
          scrollAnimated
            ? { opacity: 0, transform: `translate3d(${offset}px, 0, 0)` }
            : undefined
        }
      >
        {button}
      </div>
    );
  }

  return (
    <div
      ref={ctaRef}
      className="relative z-10 mt-auto flex w-full shrink-0 flex-col items-center pt-3 pb-1 sm:pt-4"
      style={
        scrollAnimated
          ? { opacity: 0, transform: `translate3d(${offset}px, 0, 0)` }
          : undefined
      }
    >
      {button}
    </div>
  );
}

function ValueStepMotionItem({
  item,
  index,
}: {
  item: ValueItem;
  index: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="mx-auto w-full max-w-[24rem]"
      initial={reduce ? false : { opacity: 0, x: STEP_SLIDE_OFFSET_PX }}
      whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.7, delay: 0.12 + index * 0.12, ease: stepEase }}
    >
      <ValueStep item={item} compact />
    </motion.div>
  );
}

function ValueDesktopStep({
  item,
  index,
}: {
  item: ValueItem;
  index: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, x: STEP_SLIDE_OFFSET_PX }}
      whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.6, delay: 0.08 + index * 0.1, ease: stepEase }}
    >
      <ValueStep item={item} desktop />
    </motion.div>
  );
}

function ValueDesktopArrow({ index }: { index: number }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0 }}
      whileInView={reduce ? undefined : { opacity: 1 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.4, delay: 0.14 + index * 0.1, ease: stepEase }}
    >
      <ValueFlowArrowHorizontal />
    </motion.div>
  );
}

function ValueBreakdownMobile() {
  const { value } = salesCopy;

  return (
    <div className="px-3 pt-4 pb-6 sm:px-6 sm:pt-8 sm:pb-8 md:hidden">
      <FadeIn>
        <ValueTitle lines={value.h2Lines} />
      </FadeIn>

      <div className="mx-auto mt-4 flex w-full max-w-3xl flex-col items-center gap-3 sm:mt-6 sm:gap-4">
        {value.items.map((item, index) => (
          <ValueStepMotionItem key={item.id} item={item} index={index} />
        ))}
      </div>

      <FadeIn delay={0.14 + value.items.length * 0.08} className="mt-6 sm:mt-8">
        <ValueCta label={value.cta} />
      </FadeIn>
    </div>
  );
}

function ValueBreakdownDesktop() {
  const { value } = salesCopy;

  return (
    <div className="hidden px-6 py-5 md:block lg:px-8 lg:py-6">
      <ValueCurveArrow placement="start" />

      <FadeIn>
        <ValueTitle lines={value.h2Lines} />
      </FadeIn>

      <div className="value-desktop-stack mx-auto mt-3 flex w-full flex-col items-center gap-3 md:mt-9 md:gap-4 lg:mt-10">
        <div className="value-steps-horizontal relative w-full shrink-0 px-2 lg:px-4">
          <div className="value-step-slot value-step-slot-1">
            <ValueDesktopStep item={value.items[0]} index={0} />
          </div>

          <div className="value-flow-arrow-cell value-flow-arrow-cell-1">
            <ValueDesktopArrow index={0} />
          </div>

          <div className="value-step-slot value-step-slot-2">
            <ValueDesktopStep item={value.items[1]} index={1} />
          </div>

          <div className="value-flow-arrow-cell value-flow-arrow-cell-2">
            <ValueDesktopArrow index={1} />
          </div>

          <div className="value-step-slot value-step-slot-3">
            <ValueDesktopStep item={value.items[2]} index={2} />
          </div>
        </div>
      </div>

      <ValueCurveArrow placement="end" />
    </div>
  );
}

export function ValueBreakdownSection() {
  return (
    <section id="value" className="relative scroll-mt-20 overflow-x-clip bg-transparent md:overflow-x-visible">
      <ValueBreakdownMobile />
      <ValueBreakdownDesktop />
    </section>
  );
}
