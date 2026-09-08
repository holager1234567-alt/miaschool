import { AuthoritySection } from "@/components/sections/sales/AuthoritySection";
import { FilterSection } from "@/components/sections/sales/FilterSection";
import { FinalOfferSection } from "@/components/sections/sales/FinalOfferSection";
import { Hero } from "@/components/sections/Hero";
import { SchoolIntro } from "@/components/sections/SchoolIntro";
import { StoryTeamSection } from "@/components/sections/sales/StoryTeamSection";
import { TheMethod } from "@/components/sections/TheMethod";
import { ValueBreakdownSection } from "@/components/sections/sales/ValueBreakdownSection";

export function HomePage() {
  return (
    <main id="main">
      <Hero />
      <SchoolIntro />
      <TheMethod />
      <AuthoritySection />
      <FilterSection />
      <ValueBreakdownSection />
      <StoryTeamSection />
      <FinalOfferSection />
    </main>
  );
}
