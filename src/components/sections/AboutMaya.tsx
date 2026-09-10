import { Languages, Sparkles, Heart } from "lucide-react";

export function AboutMaya() {
  return (
    <section className="section-space">
      <div className="container-page grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-[380px]">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-coral/20 to-sand/20" />
            <img
              src="/images/maya-portrait.png"
              alt="מיה"
              className="relative aspect-square w-full rounded-full object-cover object-top shadow-lift"
            />
          </div>
        </div>
        <div className="container-narrow mx-0 px-0 lg:col-span-7 lg:max-w-none">
          <p className="caption-tag mb-3 text-coral">אודות מיה</p>
          <h2 className="heading-section">
            מי אני, ולמה יש לי את המנדט להוביל את הילד שלך
          </h2>
          <p className="mt-5 text-muted">
            אני מיה. דוברת שבע שפות, ומביאה שנים של הוראה שמעמידה ביטחון לפני
            דקדוק. הקמתי את מיה&apos;סקול כי ראיתי ילדים מבינים הכל, ונאלמים דום ברגע
            האמת. ראיתי אימהות שמחפשות לא עוד מורה, אלא מישהי שתחזיק את הדרך.
          </p>
          <p className="mt-4 text-muted">
            החזון פשוט: ילד שמרגיש אהוב ומוגן, נכנס למעגל הצלחה. לא מרכז המוני,
            לא פלטפורמה זולה. בוטיק חינוכי חם, עם צוות מקומי ועם הבטחה שאפשר
            למדוד תוך שמונה מפגשים.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Languages, label: "7 שפות", text: "אוזן למוזיקה של שפה" },
              { icon: Heart, label: "הוראה מעצימה", text: "קודם הקול, אחר כך הכללים" },
              { icon: Sparkles, label: "חזון חינוכי", text: "שקט נפשי להורים" },
            ].map((item) => (
              <li key={item.label} className="rounded-[20px] bg-white p-4 shadow-soft">
                <item.icon className="size-6 text-coral" strokeWidth={1.75} />
                <p className="mt-3 font-ploni font-bold text-[16px] font-bold text-navy">
                  {item.label}
                </p>
                <p className="mt-1 text-[13px] text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
