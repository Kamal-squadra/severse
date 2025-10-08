"use client";
import React from "react";
import { Shield, Globe, Target, Users, Clock, Award } from "lucide-react";
import { useI18n } from "@/lib/i18n/LanguageProvider";

const FeaturesSection = () => {
  const { t } = useI18n();
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl heading font-bold text-gray-900 mb-4">
            {t("features.heading")} <span className="text-[#1E3A76]">{t("features.heading.brand")}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t("features.sub")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Shield className="w-6 h-6" />}
            title={t("features.card.compliance.title")}
            description={t("features.card.compliance.desc")}
          />
          <FeatureCard
            icon={<Globe className="w-6 h-6" />}
            title={t("features.card.multilingual.title")}
            description={t("features.card.multilingual.desc")}
          />
          <FeatureCard
            icon={<Target className="w-6 h-6" />}
            title={t("features.card.offline.title")}
            description={t("features.card.offline.desc")}
          />
          <FeatureCard
            icon={<Users className="w-6 h-6" />}
            title={t("features.card.mentorship.title")}
            description={t("features.card.mentorship.desc")}
          />
          <FeatureCard
            icon={<Clock className="w-6 h-6" />}
            title={t("features.card.anytime.title")}
            description={t("features.card.anytime.desc")}
          />
          <FeatureCard
            icon={<Award className="w-6 h-6" />}
            title={t("features.card.certifications.title")}
            description={t("features.card.certifications.desc")}
          />
        </div>
      </div>
    </section>
  );
};

type FeatureCardProps = { icon: React.ReactNode; title: string; description: string };

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#1E3A76] mb-4 group-hover:bg-[#1E3A76] group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2 title">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default FeaturesSection;
