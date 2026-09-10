import { useInView } from "framer-motion";
import { useRef, type CSSProperties } from "react";

import { cn } from "@/lib/utils";

export type HighlightLinesContent = {
  brandTitle?: string;
  lead: string;
  afterLead?: string;
  rest?: string;
  middle?: string;
  tail?: string;
};

export function HighlightLines({ content }: { content: HighlightLinesContent }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isVisible = useInView(ref, { once: true, amount: 0.55 });

  const lines = [
    content.lead,
    content.afterLead,
    content.rest,
    content.middle,
    content.tail,
  ].filter(Boolean) as string[];

  return (
    <p
      ref={ref}
      className={cn(
        "authority-families-highlight",
        isVisible && "authority-families-highlight--visible",
      )}
    >
      {content.brandTitle ? (
        <span className="highlight-brand-title mb-3 block sm:mb-4">
          {content.brandTitle}
        </span>
      ) : null}
      {lines.map((line, index) => (
        <span
          key={line}
          className="authority-families-highlight-line block"
          style={
            {
              "--accent-delay": `${0.12 + index * 0.22}s`,
            } as CSSProperties
          }
        >
          {line}
        </span>
      ))}
    </p>
  );
}
