import { useLayoutEffect, useRef, type RefObject } from "react";

import { FadeIn } from "@/components/motion/FadeIn";
import { HeroCtaButton } from "@/components/sections/HeroCtaButton";
import { CtaMicrocopy } from "@/components/sales/WhatsAppCta";
import { salesCopy } from "@/lib/content";
import { gsap, prefersReducedMotion, ScrollTrigger } from "@/lib/gsap";

const STEPS_START = 0.14;
const STEPS_END = 0.86;
const SLIDE_OFFSET_PX = 72;
const CTA_SLIDE_OFFSET_PX = 40;

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function stepLocalProgress(progress: number, index: number, total: number) {
  const span = (STEPS_END - STEPS_START) / total;
  const start = STEPS_START + index * span;
  const end = start + span;

  if (progress <= start) return 0;
  if (progress >= end) return 1;
  return (progress - start) / span;
}

function setWillChange(els: HTMLElement[], active: boolean) {
  const value = active ? "opacity, transform" : "auto";
  els.forEach((el) => {
    el.style.willChange = value;
  });
}

function isDocumentRtl() {
  return (
    document.documentElement.dir === "rtl" ||
    getComputedStyle(document.documentElement).direction === "rtl"
  );
}

function slideOffsetPx() {
  return isDocumentRtl() ? -SLIDE_OFFSET_PX : SLIDE_OFFSET_PX;
}

function ctaSlideOffsetPx() {
  return isDocumentRtl() ? -CTA_SLIDE_OFFSET_PX : CTA_SLIDE_OFFSET_PX;
}

type ValueItem = (typeof salesCopy.value.items)[number];

function ValueTitle({ lines }: { lines: readonly [string, string] }) {
  return (
    <h2 className="value-section-title z-10 mx-auto w-full max-w-3xl shrink-0 text-center font-hero text-pine">
      <span className="block">{lines[0]}</span>
      <span className="mt-1 block sm:mt-1.5">{lines[1]}</span>
    </h2>
  );
}

function ValueStep({
  item,
  scrollStep = false,
}: {
  item: ValueItem;
  scrollStep?: boolean;
}) {
  const offset = slideOffsetPx();

  return (
    <article
      data-scroll-step={scrollStep ? "" : undefined}
      className="mx-auto flex w-full max-w-xl items-start justify-center gap-3 sm:max-w-2xl sm:gap-4"
      style={
        scrollStep
          ? { opacity: 0, transform: `translate3d(${offset}px, 0, 0)` }
          : undefined
      }
    >
      <span
        aria-hidden="true"
        className="process-step-number font-amatica shrink-0 text-[clamp(38px,10vw,60px)] leading-none"
      >
        {item.number}
      </span>
      <div className="min-w-0 flex-1 pt-0.5 text-center">
        <h3 className="process-step-title">{item.title}</h3>
        <p className="process-step-description mt-1 text-black">{item.description}</p>
      </div>
    </article>
  );
}

function ValueVisual({
  visualRef,
  scrollAnimated = false,
}: {
  visualRef?: RefObject<HTMLImageElement | null>;
  scrollAnimated?: boolean;
}) {
  return (
    <div className="flex shrink-0 items-center justify-center">
      <img
        ref={visualRef}
        src="/images/puzzle-pieces.png?v=1"
        alt=""
        aria-hidden="true"
        draggable={false}
        className="pointer-events-none h-auto max-h-[11vh] w-full max-w-[min(100%,220px)] object-contain sm:max-h-[18vh] md:max-h-[min(40vh,320px)]"
        style={scrollAnimated ? { opacity: 0.15, transform: "scale(0.9)" } : undefined}
      />
    </div>
  );
}

function ValueCta({
  label,
  ctaRef,
  scrollAnimated = false,
}: {
  label: string;
  ctaRef?: RefObject<HTMLDivElement | null>;
  scrollAnimated?: boolean;
}) {
  const offset = ctaSlideOffsetPx();

  return (
    <div
      ref={ctaRef}
      className="mt-auto flex w-full shrink-0 flex-col items-center pt-3 pb-1 sm:pt-4 md:mt-auto"
      style={
        scrollAnimated
          ? { opacity: 0, transform: `translate3d(${offset}px, 0, 0)` }
          : undefined
      }
    >
      <HeroCtaButton variant="hero-white" label={label} className="mx-auto" />
      <CtaMicrocopy className="text-sage" />
    </div>
  );
}

function ValueBreakdownMobile() {
  const { value } = salesCopy;

  return (
    <div className="px-3 pt-4 pb-6 sm:px-6 sm:pt-8 sm:pb-8 md:hidden">
      <FadeIn>
        <ValueTitle lines={value.h2Lines} />
      </FadeIn>

      <FadeIn delay={0.08} className="mt-4 flex justify-center sm:mt-6">
        <ValueVisual />
      </FadeIn>

      <div className="mx-auto mt-4 flex w-full max-w-3xl flex-col items-center gap-2 sm:mt-6 sm:gap-3">
        {value.items.map((item, index) => (
          <FadeIn
            key={item.number}
            delay={0.14 + index * 0.08}
            className="w-full max-w-2xl lg:max-w-3xl"
          >
            <ValueStep item={item} />
          </FadeIn>
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
  const outerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLImageElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const outer = outerRef.current;
    const pin = pinRef.current;
    const visual = visualRef.current;
    const cta = ctaRef.current;
    if (!outer || !pin || !visual || !cta) return;

    const resetVisible = () => {
      outer.style.height = "auto";
      visual.style.opacity = "1";
      visual.style.transform = "none";
      pin.querySelectorAll<HTMLElement>("[data-scroll-step]").forEach((step) => {
        step.style.opacity = "1";
        step.style.transform = "none";
      });
      cta.style.opacity = "1";
      cta.style.transform = "none";
    };

    if (prefersReducedMotion()) {
      resetVisible();
      return;
    }

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const steps = Array.from(
        pin.querySelectorAll<HTMLElement>("[data-scroll-step]"),
      );
      const animatedEls = [visual, ...steps, cta];
      const stepOffset = slideOffsetPx();
      const ctaOffset = ctaSlideOffsetPx();

      const setVisualOpacity = gsap.quickSetter(visual, "opacity");
      const setVisualTransform = gsap.quickSetter(visual, "transform");
      const stepSetters = steps.map((step) => ({
        opacity: gsap.quickSetter(step, "opacity"),
        transform: gsap.quickSetter(step, "transform"),
      }));
      const setCtaOpacity = gsap.quickSetter(cta, "opacity");
      const setCtaTransform = gsap.quickSetter(cta, "transform");

      const updateScene = (progress: number) => {
        const visualT = clamp(progress / 0.28);
        setVisualOpacity(0.15 + visualT * 0.85);
        setVisualTransform(`scale(${0.9 + visualT * 0.1})`);

        stepSetters.forEach((setters, index) => {
          const t = clamp(stepLocalProgress(progress, index, steps.length));
          setters.opacity(t);
          setters.transform(`translate3d(${(1 - t) * stepOffset}px, 0, 0)`);
        });

        const ctaT = clamp((progress - 0.84) / 0.16);
        setCtaOpacity(ctaT);
        setCtaTransform(`translate3d(${(1 - ctaT) * ctaOffset}px, 0, 0)`);
      };

      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: outer,
          start: "top top",
          end: "bottom bottom",
          pin,
          scrub: 0.45,
          anticipatePin: 0,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => updateScene(self.progress),
          onEnter: () => setWillChange(animatedEls, true),
          onLeave: () => setWillChange(animatedEls, false),
          onEnterBack: () => setWillChange(animatedEls, true),
          onLeaveBack: () => setWillChange(animatedEls, false),
        });

        updateScene(0);
      }, outer);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={outerRef}
      data-scroll-outer
      className="hidden h-[240vh] overflow-hidden md:block"
    >
      <div
        ref={pinRef}
        className="relative box-border flex h-svh max-h-svh w-full max-w-full min-h-0 flex-col overflow-hidden overscroll-none bg-white px-6 pt-10 pb-12 lg:px-8"
      >
        <ValueTitle lines={value.h2Lines} />

        <div className="mt-4 grid min-h-0 w-full flex-1 grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-center gap-8 lg:gap-10">
          <ValueVisual visualRef={visualRef} scrollAnimated />

          <div className="mx-auto flex min-h-0 w-full max-w-3xl min-w-0 flex-col items-center gap-3 px-1 lg:max-w-4xl">
            <div className="flex w-full max-w-2xl flex-col gap-3 lg:max-w-3xl">
              {value.items.map((item) => (
                <ValueStep key={item.number} item={item} scrollStep />
              ))}
            </div>
          </div>
        </div>

        <ValueCta label={value.cta} ctaRef={ctaRef} scrollAnimated />
      </div>
    </div>
  );
}

export function ValueBreakdownSection() {
  return (
    <section id="value" className="relative scroll-mt-20 overflow-x-clip bg-white">
      <ValueBreakdownMobile />
      <ValueBreakdownDesktop />
    </section>
  );
}
