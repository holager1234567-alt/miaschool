import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SchoolIntroLeadParagraphProps = HTMLAttributes<HTMLParagraphElement> & {
  enlargeLeadIntro?: boolean;
};

const emphasisClass =
  "font-bold text-turquoise text-[1.35em] sm:text-[1.5em]";

const schoolIntroLeadClass =
  "block font-semibold text-black text-[clamp(18px,4.6vw,22px)] sm:text-[1.375rem] md:text-2xl";

const schoolIntroLeadFirstLineClass =
  "inline-block whitespace-nowrap text-black font-semibold max-sm:text-[clamp(15px,4.05vw,17px)] max-sm:tracking-[-0.028em] sm:text-inherit";

const schoolIntroLeadFirstLineDefaultClass =
  "inline-block whitespace-nowrap text-black font-semibold max-sm:text-[clamp(13px,3.65vw,15px)] max-sm:tracking-[-0.025em]";

const schoolIntroLeadFirstLineWrapClass =
  "max-sm:flex max-sm:w-full max-sm:justify-center max-sm:overflow-x-hidden sm:contents";

export function SchoolIntroLeadParagraph({
  className = "",
  enlargeLeadIntro = false,
  ...props
}: SchoolIntroLeadParagraphProps) {
  const introLead = (
    <>
      <div className={schoolIntroLeadFirstLineWrapClass}>
        <span
          className={
            enlargeLeadIntro
              ? schoolIntroLeadFirstLineClass
              : schoolIntroLeadFirstLineDefaultClass
          }
        >
          בית הספר מיה סקול נולד מתוך שליחות עמוקה
        </span>
      </div>{" "}
      לאפשר לכל תלמידה ותלמיד לרכוש{" "}
      <br className="sm:hidden" />
      ביטחון אמיתי בשפה האנגלית.
    </>
  );

  return (
    <p className={className} {...props}>
      {enlargeLeadIntro ? (
        <span className={schoolIntroLeadClass}>{introLead}</span>
      ) : (
        introLead
      )}
      <span className="mt-4 block sm:mt-5">
        השיעורים מועברים
        <br />
        <span className={cn(emphasisClass)}>אונליין</span>{" "}
        <span className={cn(emphasisClass)}>בזום</span>
        <br />
        במתכונת
        <br />
        <span className={cn(emphasisClass)}>
          פרטית / זוגית / קבוצות קטנות
        </span>
        <br />
        תוך שילוב בין רמת הוראה גבוהה לבין רגישות והעצמה אישית.
      </span>
    </p>
  );
}
