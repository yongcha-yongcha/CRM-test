import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import IntroOptions from "@/components/sections/IntroOptions";
import PainPoints from "@/components/sections/PainPoints";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <>
      <Navigation />
      <Hero />
      <TrustedBy />
      <IntroOptions />
      <PainPoints />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
