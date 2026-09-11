import { FadeIn } from "@/components/motion/FadeIn";
import { HighlightLines } from "@/components/sales/HighlightLines";
import { SalesSection } from "@/components/sales/SalesSection";
import { TeamTree } from "@/components/sales/TeamTree";
import { salesCopy } from "@/lib/content";

export function StoryTeamSection() {
  const { story } = salesCopy;

  return (
    <SalesSection id="story" tone="sage" className="pt-4 pb-6 md:pt-5 md:pb-8" innerClassName="max-w-4xl lg:max-w-6xl">
      <FadeIn>
        <h2 className="mx-auto max-w-full text-center font-ploni font-extrabold text-pine">
          <span className="story-title-lead block">{story.h2Lines[0]}</span>
        </h2>
      </FadeIn>

      <FadeIn delay={0.08} className="mt-2 flex flex-col items-center sm:mt-3">
        <img
          src="/images/maya-about.png?v=1"
          alt="מיה, מייסדת מיה'סקול"
          className="h-auto w-full max-w-[280px] object-contain sm:max-w-[320px]"
          loading="lazy"
        />
        <p className="story-intro-tagline mt-1 text-center text-balance sm:mt-1.5">
          {story.h2Lines[1]}
        </p>
      </FadeIn>

      <FadeIn delay={0.16}>
        <div className="mx-auto mt-3 max-w-2xl space-y-4 text-center sm:mt-4 md:max-w-3xl">
          {story.paragraphs.map((paragraph) => {
            if (typeof paragraph === "object") {
              return (
                <p key={paragraph.lead}>
                  <span className="story-paragraph-highlight block">{paragraph.lead}</span>
                  <span className="sales-body mt-2 block text-pine">{paragraph.rest}</span>
                  {"closing" in paragraph && paragraph.closing ? (
                    <span className="story-paragraph-closing mt-3 block sm:mt-4">
                      {paragraph.closing}
                    </span>
                  ) : null}
                </p>
              );
            }

            return (
              <p key={paragraph.slice(0, 24)} className="sales-body text-pine text-pretty">
                {paragraph}
              </p>
            );
          })}
        </div>
      </FadeIn>

      <FadeIn delay={0.24} className="mt-14 md:mt-16">
        <TeamTree />
        <div className="mx-auto mt-10 w-full max-w-4xl md:mt-12">
          <HighlightLines content={story.treeHighlights} />
        </div>
      </FadeIn>
    </SalesSection>
  );
}
