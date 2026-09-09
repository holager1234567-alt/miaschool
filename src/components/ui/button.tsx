import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "font-ploni inline-flex items-center justify-center gap-2 rounded-full text-[15px] font-bold transition-transform duration-200 ease-out will-change-transform disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        whatsapp:
          "bg-whatsapp text-white shadow-[0_10px_25px_-5px_rgba(37,211,102,0.35)] hover:bg-whatsapp-deep",
        coral:
          "bg-pine text-linen shadow-[0_10px_25px_-5px_rgba(27,56,43,0.28)] hover:bg-navy-soft",
        outline:
          "border border-wood/25 bg-white text-pine hover:border-wood/40 hover:bg-linen",
        ghost: "text-pine hover:bg-sage-soft/60",
      },
      size: {
        default: "h-12 px-6",
        lg: "h-14 px-7 text-[16px]",
        sm: "h-10 px-4 text-[13px]",
        icon: "size-14",
      },
    },
    defaultVariants: {
      variant: "whatsapp",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        buttonVariants({ variant, size }),
        "hover:scale-[1.02] active:scale-[0.98]",
        className,
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
