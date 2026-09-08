import type { ReactNode } from "react";

import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
