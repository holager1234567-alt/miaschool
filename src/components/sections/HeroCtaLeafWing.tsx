type HeroCtaLeafWingProps = {
  side: "left" | "right";
  className?: string;
};

export function HeroCtaLeafWing({ side, className = "" }: HeroCtaLeafWingProps) {
  const src =
    side === "left" ? "/images/cta-leaf-left.png" : "/images/cta-leaf-right.png";

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={`h-10 w-auto shrink-0 object-contain sm:h-12 ${className}`}
      draggable={false}
    />
  );
}
