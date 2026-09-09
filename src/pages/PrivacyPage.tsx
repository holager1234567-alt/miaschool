import { Link } from "react-router-dom";

import { FadeIn } from "@/components/motion/FadeIn";

export function PrivacyPage() {
  return (
    <main id="main" className="section-space">
      <FadeIn>
        <article className="container-narrow">
        <p className="caption-tag text-wood">מיה סקול</p>
        <h1 className="heading-section mt-2">מדיניות פרטיות</h1>
        <div className="mt-8 space-y-4 text-muted">
          <p>
            אנחנו אוספות רק את המידע שאתם בוחרים לשתף בשיחת ההיכרות בוואטסאפ: שם,
            פרטי קשר, וסיפור קצר על הילדים. המידע משמש להתאמת מורה ומסלול בלבד.
          </p>
          <p>
            אין באתר צילומי וידאו של תלמידות ותלמידים. איננו מצלמים ילדים לצורכי שיווק,
            והמלצות מוצגות כמסרי הורים בלבד.
          </p>
          <p>
            איננו מוכרות רשימות תפוצה. אפשר לבקש מחיקת פנייה בכל עת דרך אותו
            ערוץ וואטסאפ.
          </p>
        </div>
        <Link
          to="/"
          className="mt-10 inline-flex font-ploni font-bold text-pine"
        >
          חזרה לדף הבית
        </Link>
        </article>
      </FadeIn>
    </main>
  );
}
