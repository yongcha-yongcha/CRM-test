import Navigation from "@/components/layout/Navigation";
import FloatingCTA from "@/components/layout/FloatingCTA";
import Hero from "@/components/sections/Hero";
import CoreValue from "@/components/sections/CoreValue";
import IntroOptions from "@/components/sections/IntroOptions";
import HowItWorks from "@/components/sections/HowItWorks";
import DataCollection from "@/components/sections/DataCollection";
import FeatureNaverReview from "@/components/sections/FeatureNaverReview";
import FeatureVisitTracking from "@/components/sections/FeatureVisitTracking";
import FeatureFeedback from "@/components/sections/FeatureFeedback";
import FeatureAnalytics from "@/components/sections/FeatureAnalytics";
import MarketingOwn from "@/components/sections/MarketingOwn";
import MarketingNational from "@/components/sections/MarketingNational";
import SuccessStory from "@/components/sections/SuccessStory";
import CompetitorComparison from "@/components/sections/CompetitorComparison";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <>
      <Navigation />
      <FloatingCTA />
      <Hero />
      <IntroOptions />
      <CoreValue />
      <HowItWorks />
      <DataCollection />
      <FeatureNaverReview />
      <FeatureVisitTracking />
      <FeatureFeedback />
      <FeatureAnalytics />
      <MarketingOwn />
      <MarketingNational />
      <SuccessStory />
      <CompetitorComparison />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
