import { Hero } from "@/components/sections/hero";
import { Trio } from "@/components/sections/trio";
import { SpecsMarquee } from "@/components/sections/specs-marquee";
import { WhyBento } from "@/components/sections/why-bento";
import { Billboards } from "@/components/sections/billboards";
import { Closing } from "@/components/sections/closing";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trio />
      <SpecsMarquee />
      <WhyBento />
      <Billboards />
      <Closing />
    </>
  );
}
