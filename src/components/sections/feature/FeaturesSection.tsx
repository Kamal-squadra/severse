import React from "react";
import { Shield, Globe, Target, Users, Clock, Award } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl heading font-bold text-gray-900 mb-4">
            Why Choose <span className="text-[#1E3A76]">Seaverse?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A learning platform designed exclusively for maritime professionals
            to enhance skills, ensure compliance, and accelerate career growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Shield className="w-6 h-6" />}
            title="100% Compliance"
            description="Aligned with STCW, IMO, and ISM Codes to keep your fleet audit-ready."
          />
          <FeatureCard
            icon={<Globe className="w-6 h-6" />}
            title="Multilingual Access"
            description="Content available in English, Mandarin, Tagalog, Bahasa, and more."
          />
          <FeatureCard
            icon={<Target className="w-6 h-6" />}
            title="Offline Learning"
            description="Seamless training access optimized for limited or no connectivity aboard."
          />
          <FeatureCard
            icon={<Users className="w-6 h-6" />}
            title="Expert Mentorship"
            description="Personalized guidance from master mariners and chief engineers."
          />
          <FeatureCard
            icon={<Clock className="w-6 h-6" />}
            title="Anytime, Anywhere"
            description="Access lessons via web, tablet, or mobile—onsite or at sea."
          />
          <FeatureCard
            icon={<Award className="w-6 h-6" />}
            title="Certifications"
            description="Recognized industry certificates on course completion."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#1E3A76] mb-4 group-hover:bg-[#1E3A76] group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2 title">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default FeaturesSection;
