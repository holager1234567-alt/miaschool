import { FadeIn } from "@/components/motion/FadeIn";
import { SalesSection } from "@/components/sales/SalesSection";
import { TeamTree } from "@/components/sales/TeamTree";
import { salesCopy } from "@/lib/content";

export function StoryTeamSection() {
  const { story } = salesCopy;

  return (
    <SalesSection id="story" tone="sage" className="pt-4 pb-6 md:pt-6 md:pb-8" innerClassName="max-w-4xl">
      <FadeIn>
        <h2 className="mx-auto max-w-full text-center font-hero text-pine">
          <span className="story-title-lead block">{story.h2Lines[0]}</span>
        </h2>
      </FadeIn>

      <FadeIn delay={0.08} className="mt-2 flex flex-col items-center sm:mt-3">
        <img
          src="/images/maya-about.png?v=1"
          alt="מיה, מייסדת מיה סקול"
          className="h-auto w-full max-w-[280px] object-contain sm:max-w-[320px]"
          loading="lazy"
        />
        <p className="story-intro-tagline mt-1 text-center whitespace-nowrap sm:mt-1.5">
          {story.h2Lines[1]}
        </p>
      </FadeIn>

      <FadeIn delay={0.16}>
        <div className="mx-auto mt-3 max-w-2xl space-y-4 text-center sm:mt-4">
          {story.paragraphs.map((paragraph) => {
            if (typeof paragraph === "object") {
              if ("lines" in paragraph) {
                return (
                  <p key={paragraph.lines[0]} className="sales-body text-pine">
                    {paragraph.lines[0]}
                    <br />
                    {paragraph.lines[1]}
                  </p>
                );
              }

              return (
                <p key={paragraph.lead}>
                  <span className="story-paragraph-highlight block">{paragraph.lead}</span>
                  <span className="sales-body mt-2 block text-pine">{paragraph.rest}</span>
                </p>
              );
            }

            const isDesktopNowrapParagraph = [
              "לאורך השנים ראיתי",
              "ראיתי תלמידות ותלמידים",
            ].some((prefix) => paragraph.startsWith(prefix));

            return (
              <p key={paragraph.slice(0, 24)} className="sales-body text-pine">
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

      <FadeIn delay={0.24} className="mt-14 md:mt-16">
        <TeamTree />
      </FadeIn>
    </SalesSection>
  );
}
