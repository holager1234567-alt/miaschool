function LeftBotanicalPaths() {
  return (
    <>
      <g opacity="0.14" stroke="#8C6239" strokeLinecap="round" strokeLinejoin="round">
        <path d="M86 720C148 602 172 500 154 392C138 292 92 228 48 168" strokeWidth="1.4" />
        <path d="M154 392C214 368 268 402 312 458" strokeWidth="1.15" />
        <path d="M132 470C176 448 214 472 246 518" strokeWidth="1" />
        <path d="M118 560C164 540 198 564 226 608" strokeWidth="1" />
        <path d="M154 340C186 312 214 318 238 348" strokeWidth="1" />
        <path d="M96 250C132 228 158 238 176 272" strokeWidth="0.9" />
      </g>
      <g opacity="0.11" stroke="#8FA396" strokeLinecap="round" fill="none">
        <path
          d="M210 120C176 94 180 62 216 48C246 36 270 60 258 88C246 116 210 120 210 120Z"
          strokeWidth="1"
        />
        <path
          d="M108 390C82 370 86 346 114 336C136 328 154 346 146 366C138 386 108 390 108 390Z"
          strokeWidth="0.9"
        />
      </g>
    </>
  );
}

function RightBotanicalPaths() {
  return (
    <>
      <g opacity="0.12" stroke="#6F4E37" strokeLinecap="round">
        <path d="M1120 80C1048 168 1018 262 1040 360C1060 452 1118 510 1164 572" strokeWidth="1.3" />
        <path d="M1040 360C986 338 938 372 900 424" strokeWidth="1.1" />
        <path d="M1062 280C1018 262 980 282 956 322" strokeWidth="1" />
        <path d="M1074 430C1030 412 996 432 972 474" strokeWidth="1" />
      </g>
      <g opacity="0.11" stroke="#8FA396" strokeLinecap="round" fill="none">
        <path
          d="M980 640C942 608 948 572 986 556C1018 542 1042 568 1030 598C1018 628 980 640 980 640Z"
          strokeWidth="1"
        />
      </g>
    </>
  );
}

export function BotanicalBackdrop({ className = "" }: { className?: string }) {
  const mobileSideClass =
    "pointer-events-none absolute top-1/2 h-[min(78%,560px)] w-[44vw] max-w-[220px] -translate-y-1/2 md:hidden";

  return (
    <>
      <svg
        className={`${mobileSideClass} left-0 ${className}`}
        viewBox="0 0 360 800"
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="xMinYMid meet"
      >
        <LeftBotanicalPaths />
      </svg>

      <svg
        className={`${mobileSideClass} right-0 ${className}`}
        viewBox="840 0 360 800"
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="xMaxYMid meet"
      >
        <RightBotanicalPaths />
      </svg>

      <svg
        className={`pointer-events-none absolute inset-0 hidden h-full w-full md:block ${className}`}
        viewBox="0 0 1200 800"
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <LeftBotanicalPaths />
        <RightBotanicalPaths />
      </svg>
    </>
  );
}
