import { BotanicalBackdrop } from "@/components/BotanicalBackdrop";
import { FadeIn } from "@/components/motion/FadeIn";
import { successSteps } from "@/lib/content";

export function SuccessCircle() {
  return (
    <section
      id="success"
      className="relative scroll-mt-24 overflow-hidden bg-white px-4 py-14 sm:px-6 md:py-20"
    >
      <BotanicalBackdrop />
      <div className="container-page relative z-10 mx-auto max-w-5xl">
        <FadeIn className="mx-auto mb-12 max-w-[40ch] text-center md:mb-16">
          <h2 className="heading-section font-hero text-pine">
            תוך שמונה מפגשים היחס לשפה משתנה לחלוטין
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-lg">
            אנחנו מחברים בין מרחב מעצים לבין למידה איכותית שמביאה תוצאות
          </p>
        </FadeIn>

        <div className="relative mx-auto max-w-3xl md:max-w-none">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-8 bottom-8 right-[1.15rem] w-px bg-gradient-to-b from-wood/10 via-wood/50 to-wood/10 md:top-[4.75rem] md:right-auto md:bottom-auto md:left-12 md:h-px md:w-[calc(100%-6rem)] md:bg-gradient-to-l"
          />

          <ol className="grid gap-8 md:grid-cols-3 md:gap-8">
            {successSteps.map((step, index) => (
              <li key={step.number}>
                <FadeIn delay={index * 0.1}>
                  <article className="relative flex gap-4 md:flex-col md:items-center md:text-center">
                    <img
                      src="/images/potted-plant.png?v=2"
                      alt=""
                      aria-hidden="true"
                      draggable={false}
                      className="relative z-10 h-9 w-auto shrink-0 object-contain md:mx-auto md:h-11"
                    />
                    <div className="min-w-0 pt-0.5 md:pt-5">
                      <h3 className="heading-card text-pine">{step.title}</h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-muted sm:text-[15px]">
                        {step.text}
                      </p>
                    </div>
                  </article>
                </FadeIn>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
