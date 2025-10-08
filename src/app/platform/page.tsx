import React from "react";
import AboutSection from "@/components/sections/about/AboutSection";
import FeaturesSection from "@/components/sections/feature/FeaturesSection";
import HowItWorksSection from "@/components/sections/howItWorks/HowItWorksSection";
import FeatureHighlightSection from "@/components/sections/featureHighlight/FeatureHighlightSection";
import KeyFeaturesSnapshot from "@/components/sections/keyFeaturesSnapshot/KeyFeaturesSnapshot";
import TrustImpactBar from "@/components/sections/trustAndImpact/TrustImpact";

const PlatformPage = () => {
  return (
    <div>
      <TrustImpactBar />
      <KeyFeaturesSnapshot />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <FeatureHighlightSection />
    </div>
  );
};

export default PlatformPage;
