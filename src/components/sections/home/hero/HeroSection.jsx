"use client";
import React from "react";
import { Star, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n/LanguageProvider";

const HeroPage = () => {
  const { t } = useI18n();
  return (
    <section className="pt-24 overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        src="https://squadra-media.s3.ap-south-1.amazonaws.com/hero-bg+(4).mp4"
      />

      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Shadow Element behind left side */}
      {/* Shadow Element behind left side */}
      <div
        className="absolute top-0 left-0 w-1/2 h-full z-1 pointer-events-none
                bg-gradient-to-r from-black/80 to-transparent"
      />

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-start px-4 md:px-6 gap-10 min-h-[600px]">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h1 className="heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-gray-50">
            {t("hero.title.1")} <br />
            <span className="text-[#e2eafc]">{t("hero.title.2")}</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-lg">
            {t("hero.subtitle")}
          </p>

          <form className="mt-8 flex flex-col sm:flex-row items-center gap-4 max-w-md">
            <input
              type="email"
              required
              placeholder={t("hero.form.emailPlaceholder")}
              className="w-full sm:flex-1 border border-gray-300 rounded-lg px-4 py-3 text-white text-base"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#1E3A76] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#162d5a] transition flex items-center justify-center space-x-2 text-base"
            >
              <span>{t("hero.form.cta")}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-8 flex items-center gap-3">
            <Star className="w-6 h-6 text-[#e2eafc] fill-current" />
            <span className="text-lg font-semibold text-gray-50">
              {t("hero.rating.value")}
            </span>
            <span className="text-base text-gray-300">
              {t("hero.rating.reviews")}
            </span>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2" />
      </div>
    </section>
  );
};

export default HeroPage;
