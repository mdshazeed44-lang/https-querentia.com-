import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ClientWall } from "@/components/sections/client-wall";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Industries } from "@/components/sections/industries";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: {
    absolute: "Querentia | Delivering Talent That Helps Your Business Thrive",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientWall />
      <WhyChooseUs />
      <Industries />
      <Testimonials />
      <CTA />
    </>
  );
}
