import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SalesSectionProps = {
  id?: string;
  tone: "linen" | "forest" | "sage";
  className?: string;
  innerClassName?: string;
  children: ReactNode;
};

const toneClasses = {
  linen: "bg-transparent text-pine",
  forest: "bg-transparent text-pine",
  sage: "bg-transparent text-pine",
} as const;

export function SalesSection({
  id,
  tone,
  className,
  innerClassName,
  children,
}: SalesSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 overflow-x-clip px-6 py-14 md:py-20",
        toneClasses[tone],
        className,
      )}
    >
      <div
        className={cn("container-page mx-auto max-w-3xl", innerClassName)}
      >
        {children}
      </div>
    </section>
  );
}
