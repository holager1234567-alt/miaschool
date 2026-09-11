import {
  schoolTeamBranches,
} from "@/lib/content";
import { cn } from "@/lib/utils";

type TeamMember = {
  id?: number;
  name: string;
  specialty: string;
  quote: string;
  image?: string;
};

function getInitials(name: string) {
  if (name.includes("מאיה") || name.includes("מיה")) return "מ";
  if (name.includes("איילת")) return "א";
  if (name.includes("הדר")) return "ה";
  if (name.includes("מייקי")) return "מ";
  if (name.includes("ביאטריס")) return "ב";
  if (name.includes("טלי")) return "ט";
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("");
}

const TEACHER_LEAF_CIRCLE_SRC = "/images/teacher-leaf-circle.png?v=2";

function TeamAvatar({
  member,
  featured = false,
  compact = false,
}: {
  member: Pick<TeamMember, "name" | "image">;
  featured?: boolean;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto flex items-center justify-center",
        featured
          ? "h-44 w-44 sm:h-48 sm:w-48 lg:h-36 lg:w-36"
          : compact
            ? "h-28 w-28 lg:h-20 lg:w-20"
            : "h-36 w-36 sm:h-40 sm:w-40 lg:h-36 lg:w-36",
      )}
    >
      <img
        src={TEACHER_LEAF_CIRCLE_SRC}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 h-full w-full object-contain"
      />
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          className={cn(
            "z-0 rounded-full object-cover object-[center_20%]",
            featured
              ? "h-[8.5rem] w-[8.5rem] sm:h-[9.25rem] sm:w-[9.25rem] lg:h-[7.25rem] lg:w-[7.25rem]"
              : compact
                ? "h-[5.5rem] w-[5.5rem] lg:h-[3.85rem] lg:w-[3.85rem]"
                : "h-[7.25rem] w-[7.25rem] sm:h-[7.75rem] sm:w-[7.75rem] lg:h-[7.25rem] lg:w-[7.25rem]",
          )}
          loading="lazy"
        />
      ) : (
        <div
          className={cn(
            "z-0 flex items-center justify-center rounded-full bg-sage-tint font-bold text-pine",
            featured
              ? "h-[8.5rem] w-[8.5rem] text-lg sm:h-[9.25rem] sm:w-[9.25rem] lg:h-[7.25rem] lg:w-[7.25rem]"
              : compact
                ? "h-[5.5rem] w-[5.5rem] text-sm lg:h-[3.85rem] lg:w-[3.85rem]"
                : "h-[7.25rem] w-[7.25rem] text-lg sm:h-[7.75rem] sm:w-[7.75rem] lg:h-[7.25rem] lg:w-[7.25rem]",
          )}
        >
          <span>{getInitials(member.name)}</span>
        </div>
      )}
    </div>
  );
}

function TeamMemberProfile({
  member,
  featured = false,
  compact = false,
}: {
  member: TeamMember;
  featured?: boolean;
  compact?: boolean;
}) {
  const showQuote = Boolean(member.quote) && !member.specialty;

  return (
    <article
      className={cn(
        "relative z-10 mx-auto flex flex-col items-center text-center",
        featured
          ? "max-w-[18rem] sm:max-w-[22rem]"
          : compact
            ? "w-full min-w-0 max-w-[9.5rem]"
            : showQuote
              ? "max-w-[17rem] sm:max-w-[19rem] lg:min-w-0 lg:max-w-[18rem]"
              : "max-w-[13rem] lg:min-w-0",
      )}
    >
      <TeamAvatar member={member} featured={featured} compact={compact} />
      <h3
        className={cn(
          "font-ploni mt-3 font-bold text-pine",
          featured
            ? "text-xl sm:text-2xl md:text-[1.75rem]"
            : compact
              ? "text-base md:text-lg"
              : "text-lg sm:text-xl md:text-2xl",
        )}
      >
        {member.name}
      </h3>
      {member.specialty ? (
        <p
          className={cn(
            "mt-1 font-semibold text-wood",
            featured
              ? "text-sm"
              : compact
                ? "text-[11px] md:text-xs"
                : "text-xs sm:text-sm",
          )}
        >
          {member.specialty}
        </p>
      ) : null}
      {showQuote ? (
        <p className="font-tachles mt-3 whitespace-pre-line text-sm leading-relaxed text-black sm:text-base md:text-[17px]">
          ״{member.quote}״
        </p>
      ) : null}
    </article>
  );
}

function DesktopTeamTree() {
  const members = schoolTeamBranches.flatMap(({ lead, teachers }) => [
    lead,
    ...teachers,
  ]);

  return (
    <div className="hidden w-full grid-cols-3 items-start justify-center gap-x-8 gap-y-10 lg:grid">
      {members.map((member) => (
        <TeamMemberProfile
          key={member.id}
          member={member}
        />
      ))}
    </div>
  );
}

function MobileTeamTree() {
  return (
    <div className="flex w-full flex-col items-center gap-6 lg:hidden">
      {schoolTeamBranches.map(({ lead, teachers }) => (
        <div key={lead.id} className="flex w-full flex-col items-center gap-6">
          <TeamMemberProfile member={lead} featured />
          {teachers.map((teacher) => (
            <TeamMemberProfile
              key={teacher.id}
              member={teacher}
              compact={Boolean(teacher.specialty)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export function TeamTree() {
  return (
    <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center lg:max-w-6xl">
      <div className="mb-4 flex flex-col items-center md:mb-6">
        <div className="h-[148px] w-[208px] sm:h-[184px] sm:w-[256px] md:h-[212px] md:w-[292px]">
          <img
            src="/images/logo.png?v=4"
            alt=""
            aria-hidden="true"
            className="mx-auto h-full w-full object-contain object-bottom"
          />
        </div>
      </div>
      <DesktopTeamTree />
      <MobileTeamTree />
    </div>
  );
}
