import { BotanicalBackdrop } from "@/components/BotanicalBackdrop";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  schoolTeamBranches,
  schoolTeamDirector,
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
  if (name.includes("מיה")) return "מ";
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
        "mx-auto flex size-20 items-center justify-center overflow-hidden rounded-full border-2 border-wood bg-sage-soft font-bold text-pine",
        className,
      )}
    >
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          className="size-full object-cover"
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
  return (
    <article
      className={cn(
        "relative z-10 mx-auto flex flex-col items-center text-center",
        featured
          ? "max-w-[16rem] sm:max-w-[18rem]"
          : compact
            ? "w-full min-w-0 max-w-[9.5rem]"
            : "max-w-[13rem]",
      )}
    >
      <TeamAvatar
        member={member}
        className={cn(
          featured
            ? "size-24 border-[2.5px] sm:size-28"
            : compact
              ? "size-[4.25rem] md:size-20"
              : "size-20 sm:size-[5.25rem]",
        )}
      />
      <h3
        className={cn(
          "mt-3 font-bold text-pine",
          featured
            ? "text-base sm:text-lg"
            : compact
              ? "text-xs md:text-sm"
              : "text-sm sm:text-base",
        )}
      >
        {member.name}
      </h3>
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
      <p
        className={cn(
          "mt-2 leading-relaxed text-muted italic",
          featured
            ? "text-[12px] sm:text-[13px]"
            : compact
              ? "text-[10px] leading-snug md:text-[11px]"
              : "text-[11px] sm:text-xs",
        )}
      >
        ״{member.quote}״
      </p>
    </article>
  );
}

function WoodStem({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("mx-auto w-px shrink-0 bg-wood", className)}
    />
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
        stroke="#8C6239"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <line
        x1={centerX - halfBar}
        y1={stemHeight}
        x2={centerX + halfBar}
        y2={stemHeight}
        stroke="#8C6239"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <line
        x1={centerX - halfBar}
        y1={stemHeight}
        x2={centerX - halfBar}
        y2={totalHeight}
        stroke="#8C6239"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <line
        x1={centerX + halfBar}
        y1={stemHeight}
        x2={centerX + halfBar}
        y2={totalHeight}
        stroke="#8C6239"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DesktopTeamTree() {
  return (
    <div className="hidden w-full flex-col items-center md:flex">
      <TeamMemberProfile member={schoolTeamDirector} featured />
      <TreeForkConnector
        className="mx-auto h-14 max-w-[28rem]"
        barWidth={72}
      />
      <div className="grid w-full max-w-3xl grid-cols-2 gap-x-14">
        {schoolTeamBranches.map(({ lead, teachers }) => (
          <div key={lead.id} className="flex min-w-0 flex-col items-center">
            <TeamMemberProfile member={lead} />
            <TreeForkConnector
              className="mx-auto h-12 w-full max-w-[14rem]"
              barWidth={58}
            />
            <div className="grid w-full grid-cols-2 gap-x-4">
              {teachers.map((teacher) => (
                <TeamMemberProfile key={teacher.id} member={teacher} compact />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileTeamTree() {
  return (
    <div className="flex w-full flex-col items-center md:hidden">
      <TeamMemberProfile member={schoolTeamDirector} featured />
      {schoolTeamBranches.map(({ lead, teachers }) => (
        <div key={lead.id} className="flex w-full flex-col items-center">
          <WoodStem className="h-8" />
          <TeamMemberProfile member={lead} />
          {teachers.map((teacher) => (
            <div key={teacher.id} className="flex w-full flex-col items-center">
              <WoodStem className="h-7" />
              <TeamMemberProfile member={teacher} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export function SchoolTeamTree() {
  return (
    <section
      id="team"
      className="relative scroll-mt-24 overflow-hidden bg-white px-4 py-16 sm:px-6 md:py-20"
    >
      <BotanicalBackdrop className="opacity-80" />
      <div className="container-page relative z-10 mx-auto max-w-6xl">
        <FadeIn className="mx-auto mb-10 max-w-[760px] text-center md:mb-12">
          <h2 className="heading-section font-hero text-pine">
            עץ השורשים של בית הספר
          </h2>
          <p className="mt-4 text-muted">
            מיה בראש העץ, ומתחתיה שש מורות מובילות שפותחות את הלב לשפה.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="relative mx-auto flex max-w-5xl flex-col items-center">
          <div className="mb-4 h-[88px] w-[120px] overflow-hidden sm:mb-5 sm:h-[104px] sm:w-[140px]">
            <img
              src="/images/logo.png?v=4"
              alt=""
              aria-hidden="true"
              className="mx-auto h-auto w-full object-contain object-top"
            />
          </div>
          <DesktopTeamTree />
          <MobileTeamTree />
        </FadeIn>
      </div>
    </section>
  );
}
