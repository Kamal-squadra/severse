"use client";
import React from "react";
import { useI18n } from "@/lib/i18n/LanguageProvider";

const AboutSection = () => {
  const { t } = useI18n();
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl heading font-bold text-[#1E3A76] mb-4">
          {t("about.title")}
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {t("about.subtitle")}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="w-16 h-16 bg-[#1E3A76] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-[#1E3A76] mb-3">
            {t("about.card.fast.title")}
          </h3>
          <p className="text-gray-600">{t("about.card.fast.desc")}</p>
        </div>

        <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="w-16 h-16 bg-[#1E3A76] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-[#1E3A76] mb-3">
            {t("about.card.secure.title")}
          </h3>
          <p className="text-gray-600">{t("about.card.secure.desc")}</p>
        </div>

        <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="w-16 h-16 bg-[#1E3A76] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-[#1E3A76] mb-3">
            {t("about.card.scalable.title")}
          </h3>
          <p className="text-gray-600">{t("about.card.scalable.desc")}</p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-[#1E3A76] to-[#2D4A8A] rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">{t("about.cta.title")}</h3>
          <p className="text-lg mb-6 opacity-90">{t("about.cta.subtitle")}</p>
          <button className="bg-white text-[#1E3A76] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            {t("about.cta.button")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
