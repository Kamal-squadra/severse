import React from "react";
import HeroSection from "@/components/sections/hero/HeroSection";
import FeaturesSection from "@/components/sections/feature/FeaturesSection";
import HowItWorksSection from "@/components/sections/howItWorks/HowItWorksSection";
import TestimonialsSection from "@/components/sections/testimonials/TestimonialsSection";
import CTAInitiateSection from "@/components/sections/ctaInitiate/CTAInitiateSection";
import FAQSection from "@/components/sections/FAQ/FAQSection";
import FeatureHighlightSection from "@/components/sections/featureHighlight/FeatureHighlightSection";
const page = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTAInitiateSection />
      <FAQSection />
      <FeatureHighlightSection /> 
    </div>
  );
};

export default page;
