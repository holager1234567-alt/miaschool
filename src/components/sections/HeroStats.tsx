import { heroStats } from "@/lib/content";

export function HeroStats() {
  return (
    <div className="flex w-full flex-row items-stretch justify-between gap-2 sm:gap-4">
      {heroStats.map((stat, index) => (
        <article
          key={stat.label}
          className="relative min-w-0 flex-1 px-1 text-center sm:px-3"
        >
          {index > 0 ? (
            <span
              aria-hidden="true"
              className="absolute top-1 bottom-1 right-0 w-px bg-gradient-to-b from-transparent via-wood/45 to-transparent"
            />
          ) : null}
          <p className="font-display text-[clamp(18px,4.2vw,32px)] font-bold leading-none text-pine">
            {stat.value}
          </p>
          <p className="mt-2 text-[11px] leading-snug font-medium text-muted sm:text-[13px]">
            {stat.label}
          </p>
        </article>
      ))}
    </div>
  );
}
