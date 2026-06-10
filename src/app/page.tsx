import { Hero } from "@/components/sections/hero";
import { ClientWall } from "@/components/sections/client-wall";
import { Services } from "@/components/sections/services";
import { FeatureSpeed } from "@/components/sections/feature-speed";
import { Industries } from "@/components/sections/industries";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientWall />
      <Services />
      <FeatureSpeed />
      <Industries />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
