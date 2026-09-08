import { AuthorityTestimonials } from "@/components/sections/AuthorityTestimonials";
import { FadeIn } from "@/components/motion/FadeIn";
import { salesCopy } from "@/lib/content";

export function AuthoritySection() {
  const { authority } = salesCopy;

  return (
    <section
      id="proof"
      className="relative scroll-mt-20 overflow-x-clip bg-white pt-8 pb-8 text-pine sm:pt-10 sm:pb-10 md:pt-12 md:pb-12"
    >
      <div className="container-page mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <img
            src="/images/kids-reading.png?v=1"
            alt=""
            aria-hidden="true"
            draggable={false}
            className="mx-auto mb-6 h-auto w-full max-w-[min(100%,20rem)] object-contain sm:mb-8 sm:max-w-[24rem]"
          />
        </FadeIn>

        <FadeIn delay={0.08}>
          <h2 className="authority-title mx-auto mb-8 text-center font-hero text-pine sm:mb-10">
            <span className="block">
              <span className="text-[#d6c58d] sm:hidden">זה לא קסם</span>
              <span className="hidden sm:block">
                <span className="text-[#d6c58d]">זה לא קסם</span>,
              </span>
            </span>
            <span className="block text-turquoise">{authority.h2Lines[1]}</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.16}>
          <div className="mx-auto max-w-2xl space-y-4 text-center md:max-w-3xl">
            {authority.paragraphs.map((paragraph) => {
              if (typeof paragraph === "object") {
                return (
                  <p key={paragraph.lead} className="sales-body text-black">
                    <span className="authority-body-nowrap block">{paragraph.lead}</span>
                    <span className="authority-body-nowrap mt-1 block sm:mt-1.5">
                      {paragraph.rest}
                    </span>
                  </p>
                );
              }

              const isDesktopNowrapParagraph = paragraph.startsWith(
                "בשנים האחרונות בנינו",
              );

              return (
                <p key={paragraph.slice(0, 28)} className="sales-body text-black">
                  {isDesktopNowrapParagraph ? (
                    <span className="md:whitespace-nowrap">{paragraph}</span>
                  ) : (
                    paragraph
                  )}
                </p>
              );
            })}
          </div>
        </FadeIn>

      </div>

      <FadeIn delay={0.24} className="mt-10 w-full overflow-x-clip sm:mt-12">
        <AuthorityTestimonials />
      </FadeIn>
    </section>
  );
}
