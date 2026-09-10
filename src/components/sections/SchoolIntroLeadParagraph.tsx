import { useInView } from "framer-motion";
import { useRef, type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SchoolIntroLeadParagraphProps = HTMLAttributes<HTMLParagraphElement> & {
  enlargeLeadIntro?: boolean;
};

const emphasisClass =
  "font-bold text-turquoise text-[1.35em] sm:text-[1.5em]";

const schoolIntroLeadOpeningClass =
  "school-intro-lead-opening block font-ploni font-extrabold text-black";

const schoolIntroLeadRestClass =
  "school-intro-lead-rest mt-2 block font-semibold text-black sm:mt-2.5";

const schoolIntroLeadFirstLineDefaultClass =
  "inline-block whitespace-nowrap text-black font-semibold max-sm:text-[clamp(13px,3.65vw,15px)] max-sm:tracking-[-0.025em]";

export function SchoolIntroLeadParagraph({
  className = "",
  enlargeLeadIntro = false,
  ...props
}: SchoolIntroLeadParagraphProps) {
  const leadRef = useRef<HTMLSpanElement>(null);
  const isLeadVisible = useInView(leadRef, { once: true, amount: 0.65 });

  const introLead = enlargeLeadIntro ? (
    <span
      ref={leadRef}
      className={cn(
        "school-intro-lead-emphasis",
        isLeadVisible && "school-intro-lead-emphasis--visible",
      )}
    >
      <span className={schoolIntroLeadOpeningClass}>
        מיה&apos;סקול נולד מתוך שליחות עמוקה
      </span>
      <span className={schoolIntroLeadRestClass}>
        לאפשר לכל תלמידה ותלמיד לרכוש{" "}
        <br className="sm:hidden" />
        ביטחון אמיתי בשפה האנגלית.
      </span>
    </span>
  ) : (
    <>
      <span className={schoolIntroLeadFirstLineDefaultClass}>
        מיה&apos;סקול נולד מתוך שליחות עמוקה
      </span>{" "}
      לאפשר לכל תלמידה ותלמיד לרכוש{" "}
      <br className="sm:hidden" />
      ביטחון אמיתי בשפה האנגלית.
    </>
  );

  return (
    <p className={className} {...props}>
      {introLead}
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
