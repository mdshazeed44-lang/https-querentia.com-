import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Audiences } from "@/components/sections/audiences";
import { Industries } from "@/components/sections/industries";
import { Process } from "@/components/sections/process";
import { CTA } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Audiences />
      <Industries />
      <Process />
      <CTA />
    </>
  );
}
