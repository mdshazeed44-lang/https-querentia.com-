import { Hero } from "@/components/sections/hero";
import { ClientWall } from "@/components/sections/client-wall";
import { Services } from "@/components/sections/services";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Industries } from "@/components/sections/industries";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientWall />
      <Services />
      <WhyChooseUs />
      <Industries />
      <Testimonials />
      <CTA />
    </>
  );
}
