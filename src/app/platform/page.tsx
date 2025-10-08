import React from "react";
import AboutSection from "@/components/sections/about/AboutSection";
import HowItWorksSection from "@/components/sections/howItWorks/HowItWorksSection";
import FeatureHighlightSection from "@/components/sections/featureHighlight/FeatureHighlightSection";
import KeyFeaturesSnapshot from "@/components/sections/keyFeaturesSnapshot/KeyFeaturesSnapshot";
import TrustImpactBar from "@/components/sections/trustAndImpact/TrustImpact";


const PlatformPage = () => {
  return (
    <div>
      <FeatureHighlightSection />
      <HowItWorksSection />
      <TrustImpactBar />
      <KeyFeaturesSnapshot />
      <AboutSection />
    </div>
  );
};

export default PlatformPage;
