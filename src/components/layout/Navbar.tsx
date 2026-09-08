import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { HeroCtaButton } from "@/components/sections/HeroCtaButton";
import { navLinks } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:right-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
      >
        דלג לתוכן
      </a>

      <button
        type="button"
        className="fixed top-5 right-5 z-[60] inline-flex size-12 items-center justify-center rounded-full border border-wood/20 bg-linen text-pine shadow-soft"
        aria-expanded={open}
        aria-controls="side-nav"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
        <span className="sr-only">{open ? "סגירת תפריט" : "פתיחת תפריט"}</span>
      </button>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-pine/25 transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <aside
        id="side-nav"
        className={cn(
          "fixed top-[4.75rem] right-4 z-50 flex w-[min(300px,calc(100vw-2rem))] flex-col overflow-y-auto rounded-3xl bg-linen px-5 py-6 shadow-lift transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        )}
        aria-hidden={!open}
      >
        <nav
          className="flex flex-col items-center text-center"
          aria-label="תפריט צד"
        >
          <img
            src="/images/logo.png?v=4"
            alt=""
            aria-hidden="true"
            className="mb-5 h-[118px] w-[168px] object-contain object-top sm:h-[132px] sm:w-[188px]"
          />

          <div className="flex w-full flex-col items-center gap-3.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-hero text-[clamp(18px,4.6vw,22px)] leading-none font-bold text-pine transition-colors hover:text-turquoise"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="my-5 h-px w-12 bg-[#d6c58d]" />

          <HeroCtaButton
            variant="hero-white"
            className="w-full max-w-[16.5rem]"
          />
        </nav>
      </aside>
    </>
  );
}
