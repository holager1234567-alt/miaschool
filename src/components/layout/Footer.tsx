import { useState } from "react";
import { Link } from "react-router-dom";

import { PrivacyPolicyModal } from "@/components/PrivacyPolicyModal";

export function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <footer className="relative z-[1] border-t border-sage-soft/70 bg-transparent px-6">
      <div className="container-page flex flex-col items-center gap-5 py-8 text-center">
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] font-medium text-muted">
          <Link to="/accessibility" className="hover:text-pine">
            הצהרת נגישות
          </Link>
          <span aria-hidden="true" className="text-sage">
            |
          </span>
          <button
            type="button"
            onClick={() => setPrivacyOpen(true)}
            className="hover:text-pine"
            aria-haspopup="dialog"
          >
            מדיניות פרטיות
          </button>
        </nav>
        <p className="text-[12px] text-sage">
          © {new Date().getFullYear()} מיה סקול
        </p>
        <p className="flex flex-wrap items-center justify-center gap-2 text-[13px] text-black sm:text-[14px]">
          <span>דף זה נבנה באהבה על ידי</span>
          <a
            href="https://hulu-web-designer.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center"
            aria-label="Hulu Web Designer"
          >
            <img
              src="/images/hulu-web-designer.png?v=2"
              alt="Hulu Web Designer"
              className="h-[20px] w-auto object-contain sm:h-[22px]"
              loading="lazy"
              draggable={false}
            />
          </a>
        </p>
      </div>

      <PrivacyPolicyModal open={privacyOpen} onOpenChange={setPrivacyOpen} />
    </footer>
  );
}
