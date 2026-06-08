import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { About } from "@/components/sections/about";
import { WhoWeAre } from "@/components/sections/who-we-are";
import { Audiences } from "@/components/sections/audiences";
import { Industries } from "@/components/sections/industries";
import { Process } from "@/components/sections/process";
import { CTA } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <WhoWeAre />
      <Audiences />
      <Industries />
      <Process />
      <CTA />
    </>
  );
}
