type HeroLogoProps = {
  variant?: "logo" | "brand" | "hero";
};

export function HeroLogo({ variant = "logo" }: HeroLogoProps) {
  const isHero = variant === "hero";
  const isBrand = variant === "brand";

  return (
    <div
      className={
        isHero
          ? "mb-10 flex flex-col items-center sm:mb-9 md:mb-10"
          : "mb-4 flex flex-col items-center sm:mb-5"
      }
      aria-label="מיה'סקול"
    >
      <div
        className={
          isHero
            ? "h-[128px] w-[172px] sm:h-[144px] sm:w-[196px] md:h-[160px] md:w-[220px]"
            : isBrand
              ? "h-[118px] w-[172px] overflow-hidden sm:h-[138px] sm:w-[202px] md:h-[158px] md:w-[232px]"
              : "flex w-full justify-center"
        }
      >
        <img
          src={
            isHero
              ? "/images/logo.png?v=5"
              : isBrand
                ? "/images/logo.png?v=5"
                : "/images/hero-kids-abc.png?v=1"
          }
          alt={isHero || isBrand ? "מיה'סקול" : "ילדים מחזיקים את האותיות ABC"}
          className={
            isHero || isBrand
              ? "mx-auto h-auto w-full object-contain object-top"
              : "mx-auto h-auto w-[min(100%,250px)] object-contain sm:w-[min(100%,310px)] md:w-[min(100%,300px)] lg:w-[min(100%,280px)]"
          }
        />
      </div>
      {isBrand ? (
        <p className="mt-1 font-ploni font-bold text-[clamp(28px,5.8vw,48px)] leading-none tracking-[0.03em] text-turquoise sm:mt-2">
          Mia&apos;s School
        </p>
      ) : null}
    </div>
  );
}
