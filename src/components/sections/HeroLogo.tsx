type HeroLogoProps = {
  variant?: "logo" | "brand";
};

export function HeroLogo({ variant = "logo" }: HeroLogoProps) {
  const isBrand = variant === "brand";

  return (
    <div
      className={
        isBrand
          ? "mb-4 flex flex-col items-center sm:mb-5"
          : "mb-4 flex flex-col items-center sm:mb-5"
      }
      aria-label="מיה סקול"
    >
      <div
        className={
          isBrand
            ? "h-[118px] w-[172px] overflow-hidden sm:h-[138px] sm:w-[202px] md:h-[158px] md:w-[232px]"
            : "flex w-full justify-center"
        }
      >
        <img
          src={isBrand ? "/images/logo.png?v=4" : "/images/hero-kids-abc.png?v=1"}
          alt={isBrand ? "מיה סקול" : "ילדים מחזיקים את האותיות ABC"}
          className={
            isBrand
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
