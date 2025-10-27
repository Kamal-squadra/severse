"use client";
import { ArrowRight } from "lucide-react";
import React from "react";
import { useI18n } from "@/lib/i18n/LanguageProvider";

const WhatIsSeaVerse = () => {
  const { t } = useI18n();
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Side - 7 columns */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-3">
              <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-blue-100">
                {/* <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div> */}
                <span className="text-sm font-medium text-blue-900">
                  About Sealearning
                </span>
              </div>

              {/* <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                What is <br />
                <span style={{ color: "#1E3A76" }}>Sealearning?</span>
              </h2> */}
            </div>

            <div className="space-y-8">
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
                At Sealearning, we believe education deserves more than outdated systems and one-size-fits-all tools.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We’re building the next generation of Learning Management Systems (LMS) and AI-powered educational platforms that empower both institutions and learners.
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our flagship product, Seaverse, is designed to deliver a seamless, data-driven, and deeply engaging learning journey — where intelligence meets inspiration.
                  </p>
                </div>
              </div>
            </div>

            <form className="mt-8 flex flex-col sm:flex-row items-center gap-4 max-w-md">
            {/* <input
              type="email"
              required
              placeholder={t("hero.form.emailPlaceholder")}
              className="w-full sm:flex-1 border border-gray-300 rounded-lg px-4 py-3 text-white text-base"
            /> */}
            <button
              type="submit"
              className="w-full sm:w-auto bg-white text-black border border-black px-8 py-3 rounded-lg font-semibold transition flex items-center justify-center space-x-2 text-base cursor-pointer"
            >
              <span>{t("hero.form.emailPlaceholder")}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#1E3A76] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#162d5a] transition flex items-center justify-center space-x-2 text-base cursor-pointer"
            >
              <span>{t("hero.form.cta")}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
          </div>

          {/* Right Side - 5 columns */}
          <div className="lg:col-span-5 h-full">
            <div className="bg-white h-full rounded-3xl p-8 lg:p-10 border border-gray-100">
              <div className="space-y-8">
                <div className="text-center">
                  
                  <h3
                    className="text-4xl heading font-semibold"
                    style={{ color: "#1E3A76" }}
                  >
                    Our Mission
                  </h3>
                </div>

                <p className="text-lg font-medium text-gray-800 leading-relaxed text-center">
                  To build competency, compliance, and confidence at sea through
                  training that delivers measurable results — safer operations,
                  stronger crews, and reliable performance improvements.
                </p>

                <div className="pt-6 border-t border-gray-100">
                  <p className="text-base text-gray-600 leading-relaxed">
                    We are not just another library of videos. Seaverse is a
                    complete learning system designed to ensure that crews
                    learn, apply, and grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSeaVerse;
