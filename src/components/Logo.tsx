import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/images/logo.png?v=4"
      alt="מיה'סקול"
      className={cn("h-14 w-auto object-contain md:h-16", className)}
    />
  );
}
