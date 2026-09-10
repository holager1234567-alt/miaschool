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

function TeamAvatar({
  member,
  className,
}: {
  member: Pick<TeamMember, "name" | "image">;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto flex size-20 items-center justify-center overflow-hidden rounded-full border-2 border-[#d6c58d] bg-sage-tint font-bold text-pine",
        className,
      )}
    >
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          className="size-full object-cover object-[center_20%]"
          loading="lazy"
        />
      ) : (
        <span className="text-lg">{getInitials(member.name)}</span>
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
  const isBeatriceQuote =
    showQuote && member.name.includes("ביאטריס");

  return (
    <article
      className={cn(
        "relative z-10 mx-auto flex flex-col items-center text-center",
        featured
          ? "max-w-[18rem] sm:max-w-[22rem]"
          : compact
            ? "w-full min-w-0 max-w-[9.5rem]"
            : showQuote
              ? isBeatriceQuote
                ? "max-w-[17rem] sm:max-w-[19rem] lg:max-w-[17rem]"
                : "max-w-[17rem] sm:max-w-[19rem] lg:max-w-[15rem]"
              : "max-w-[13rem]",
      )}
    >
      <TeamAvatar
        member={member}
        className={cn(
          featured
            ? "size-28 border-[2.5px] sm:size-32 md:size-36"
            : compact
              ? "size-[4.25rem] md:size-20"
              : "size-24 border-[2.5px] sm:size-28 md:size-[7.5rem]",
        )}
      />
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

function WoodStem({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("mx-auto w-[3px] shrink-0 bg-[#d6c58d]", className)}
    />
  );
}

function TreeThreeForkConnector({ className }: { className?: string }) {
  const stemHeight = 22;
  const totalHeight = stemHeight + 22;
  const forkPositions = [16.67, 50, 83.33];

  return (
    <svg
      viewBox={`0 0 100 ${totalHeight}`}
      fill="none"
      preserveAspectRatio="none"
      className={cn("relative z-0 block w-full shrink-0", className)}
      aria-hidden="true"
    >
      <line
        x1={50}
        y1={0}
        x2={50}
        y2={stemHeight}
        stroke="#d6c58d"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1={forkPositions[0]}
        y1={stemHeight}
        x2={forkPositions[2]}
        y2={stemHeight}
        stroke="#d6c58d"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {forkPositions.map((x) => (
        <line
          key={x}
          x1={x}
          y1={stemHeight}
          x2={x}
          y2={totalHeight}
          stroke="#d6c58d"
          strokeWidth="4"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

function TreeForkConnector({
  className,
  barWidth = 50,
}: {
  className?: string;
  barWidth?: number;
}) {
  const halfBar = barWidth / 2;
  const stemHeight = 22;
  const totalHeight = stemHeight + 22;
  const centerX = 50;

  return (
    <svg
      viewBox={`0 0 100 ${totalHeight}`}
      fill="none"
      preserveAspectRatio="none"
      className={cn("relative z-0 block w-full shrink-0", className)}
      aria-hidden="true"
    >
      <line
        x1={centerX}
        y1={0}
        x2={centerX}
        y2={stemHeight}
        stroke="#d6c58d"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1={centerX - halfBar}
        y1={stemHeight}
        x2={centerX + halfBar}
        y2={stemHeight}
        stroke="#d6c58d"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1={centerX - halfBar}
        y1={stemHeight}
        x2={centerX - halfBar}
        y2={totalHeight}
        stroke="#d6c58d"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1={centerX + halfBar}
        y1={stemHeight}
        x2={centerX + halfBar}
        y2={totalHeight}
        stroke="#d6c58d"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function findTeacherByName(teachers: TeamMember[], fragment: string) {
  return teachers.find((teacher) => teacher.name.includes(fragment));
}

function teacherGridClass(teacherCount: number) {
  if (teacherCount > 3) return "max-w-5xl grid-cols-2 lg:grid-cols-3";
  if (teacherCount === 3) return "grid-cols-3";
  return "grid-cols-2";
}

function DesktopTwoTierBranch({
  lead,
  teachers,
}: {
  lead: TeamMember;
  teachers: TeamMember[];
}) {
  const mikey = findTeacherByName(teachers, "מייקי");
  const hadar = findTeacherByName(teachers, "הדר");
  const ayelet = findTeacherByName(teachers, "איילת");
  const beatrice = findTeacherByName(teachers, "ביאטריס");
  const tali = findTeacherByName(teachers, "טלי");

  if (!mikey || !hadar || !ayelet || !beatrice || !tali) {
    return null;
  }

  const columns = [
    { member: mikey, child: beatrice },
    { member: hadar, child: null },
    { member: ayelet, child: tali },
  ] as const;

  return (
    <div className="flex min-w-0 flex-col items-center">
      <TeamMemberProfile member={lead} featured />
      <TreeThreeForkConnector className="mx-auto h-12 w-full max-w-[32rem]" />
      <div className="grid w-full max-w-5xl grid-cols-3 gap-x-5">
        {columns.map(({ member, child }) => (
          <div key={member.id} className="flex flex-col items-center">
            <TeamMemberProfile
              member={member}
              compact={Boolean(member.specialty)}
            />
            {child ? (
              <>
                <WoodStem className="h-8" />
                <TeamMemberProfile
                  member={child}
                  compact={Boolean(child.specialty)}
                />
              </>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function DesktopTeamTree() {
  const hasMultipleBranches = schoolTeamBranches.length > 1;

  return (
    <div className="hidden w-full flex-col items-center md:flex">
      {hasMultipleBranches ? (
        <TreeForkConnector className="mx-auto h-14 max-w-[28rem]" barWidth={72} />
      ) : null}
      <div
        className={cn(
          "grid w-full gap-x-14",
          hasMultipleBranches ? "max-w-3xl grid-cols-2" : "max-w-6xl grid-cols-1",
        )}
      >
        {schoolTeamBranches.map(({ lead, teachers }) => {
          const twoTierBranch =
            teachers.length === 5 ? (
              <DesktopTwoTierBranch lead={lead} teachers={[...teachers]} />
            ) : null;

          if (twoTierBranch) {
            return <div key={lead.id}>{twoTierBranch}</div>;
          }

          return (
            <div key={lead.id} className="flex min-w-0 flex-col items-center">
              <TeamMemberProfile member={lead} featured />
              {teachers.length > 1 ? (
                <TreeForkConnector
                  className={cn(
                    "mx-auto h-12 w-full",
                    teachers.length > 3 ? "max-w-[24rem]" : "max-w-[14rem]",
                  )}
                  barWidth={teachers.length > 3 ? 88 : 58}
                />
              ) : (
                <WoodStem className="h-8" />
              )}
              <div
                className={cn(
                  "grid w-full gap-x-5 gap-y-8",
                  teacherGridClass([...teachers].length),
                )}
              >
                {teachers.map((teacher) => (
                  <TeamMemberProfile
                    key={teacher.id}
                    member={teacher}
                    compact={Boolean(teacher.specialty)}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MobileTeamTree() {
  return (
    <div className="flex w-full flex-col items-center md:hidden">
      {schoolTeamBranches.map(({ lead, teachers }) => (
        <div key={lead.id} className="flex w-full flex-col items-center">
          <WoodStem className="h-8" />
          <TeamMemberProfile member={lead} featured />
          {teachers.map((teacher) => (
            <div key={teacher.id} className="flex w-full flex-col items-center">
              <WoodStem className="h-7" />
              <TeamMemberProfile
                member={teacher}
                compact={Boolean(teacher.specialty)}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export function TeamTree() {
  return (
    <div className="relative mx-auto flex max-w-5xl flex-col items-center">
      <div className="flex flex-col items-center">
        <div className="h-[148px] w-[208px] sm:h-[184px] sm:w-[256px] md:h-[212px] md:w-[292px]">
          <img
            src="/images/logo.png?v=4"
            alt=""
            aria-hidden="true"
            className="mx-auto h-full w-full object-contain object-bottom"
          />
        </div>
        <WoodStem className="-mt-px h-5 sm:h-6 md:h-7" />
      </div>
      <DesktopTeamTree />
      <MobileTeamTree />
    </div>
  );
}
