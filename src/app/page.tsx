import { FuturisticHero } from "@/components/futuristic/hero";
import {
  Marquee,
  WhatWeDo,
  StatsCounters,
  HowItWorks,
  OpenRoles,
  TrustedBy,
  BigCTA,
} from "@/components/futuristic/sections";

export default function HomePage() {
  return (
    <main className="theme-futuristic">
      <FuturisticHero />
      <Marquee />
      <WhatWeDo />
      <StatsCounters />
      <HowItWorks />
      <OpenRoles />
      <TrustedBy />
      <BigCTA />
    </main>
  );
}
