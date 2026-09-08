import { Link } from "react-router-dom";

import { FadeIn } from "@/components/motion/FadeIn";
import { HeroLogo } from "@/components/sections/HeroLogo";

const linkClassName =
  "font-medium text-pine underline underline-offset-4 hover:text-wood";

export function AccessibilityPage() {
  return (
    <main id="main" className="section-space">
      <FadeIn>
        <article className="container-narrow">
        <div className="flex justify-center">
          <HeroLogo variant="brand" />
        </div>

        <h1 className="heading-section mt-6 text-center">מדיניות נגישות</h1>

        <div className="mt-8 space-y-6 text-muted">
          <p>
            Mia&apos;s School נוקטת את מירב המאמצים ומשקיעה משאבים רבים על מנת
            לספק לכל לקוחותיה שירות שוויוני, מכובד, נגיש ומקצועי. בהתאם לחוק
            שוויון זכויות לאנשים עם מוגבלויות תשנ&quot;ח-1998 ולתקנות שהותקנו
            מכוחו, מושקעים מאמצים ומשאבים רבים בביצוע התאמות הנגישות הנדרשות
            שיביאו לכך שאדם בעל מוגבלות יוכל לקבל את השירותים הניתנים לכלל
            הלקוחות, באופן עצמאי ושוויוני.
          </p>

          <section className="space-y-4">
            <h2 className="font-heading text-[clamp(20px,3.5vw,26px)] font-bold text-pine">
              שירות לקוחות נגיש
            </h2>
            <ul className="list-disc space-y-2 pr-5">
              <li>
                <strong>הדרכות עובדים לשירות נגיש:</strong> צוות בית הספר מקבל
                הדרכה שוטפת בנושא נגישות.
              </li>
              <li>
                <strong>מוקד טלפוני נגיש:</strong> המענה הקולי הונגש כך שהמידע
                מועבר בשפה ברורה וללא מוסיקת רקע.
              </li>
              <li>
                <strong>אמצעים נוספים ליצירת קשר:</strong> דואר אלקטרוני{" "}
                <a href="mailto:mia.kimelit@gmail.com" className={linkClassName}>
                  mia.kimelit@gmail.com
                </a>
              </li>
            </ul>
          </section>

          <p>
            אתר אינטרנט נגיש הוא אתר המאפשר לאנשים עם מוגבלות ולאנשים מבוגרים
            לגלוש באותה רמה של יעילות והנאה ככל הגולשים, כ- 20 עד 25 אחוזים
            מהאוכלוסייה נתקלים בקשיי שימוש באינטרנט ועשויים להיטיב מתכני אינטרנט
            נגישים יותר, כך על פי מחקר שנערך בשנת 2003 ע&quot;י חברת מייקרוסופט.
          </p>

          <p>
            אתר זה עומד בדרישות תקנות שיוויון זכויות לאנשים עם מוגבלות (התאמות
            נגישות לשירות), התשע&quot;ג 2013.
            <br />
            מותאם לתצוגה בדפדפנים הנפוצים ולשימוש בטלפון הסלולרי.
          </p>

          <p>
            אנו ממשיכים במאמצים לשפר את נגישות החברה כחלק ממחויבותנו לאפשר
            לכלל האוכלוסייה כולל אנשים עם מוגבלויות לקבל את השרות הנגיש ביותר.
            במידה ונתקלת בבעיה או בתקלה כלשהי בנושא הנגישות, נשמח שתעדכן אותנו
            בכך ואנו נעשה כל מאמץ למצוא עבורך פתרון מתאים ולטפל בתקלה בהקדם ככל
            שניתן.
          </p>

          <section className="space-y-3">
            <h3 className="font-heading text-[clamp(18px,3vw,22px)] font-bold text-pine">
              לפניות בנושא נגישות:
            </h3>
            <p>
              מייל:{" "}
              <a href="mailto:mia.kimelit@gmail.com" className={linkClassName}>
                mia.kimelit@gmail.com
              </a>
              <br />
              טלפון:{" "}
              <a href="tel:0542294626" className={linkClassName}>
                0542294626
              </a>
            </p>
            <p>
              <small className="text-sage">עודכן ב: 22.1.26</small>
            </p>
          </section>
        </div>

        <Link
          to="/"
          className="mt-10 inline-flex font-heading font-bold text-pine"
        >
          חזרה לדף הבית
        </Link>
        </article>
      </FadeIn>
    </main>
  );
}
