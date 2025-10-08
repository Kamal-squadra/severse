import React from "react";
import { UserPlus, Target, Users, BarChart3 } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      title: "Easy Onboarding",
      description:
        "Quickly set up your fleet with dedicated tablets and admin dashboards.",
      icon: <UserPlus className="w-6 h-6 md:w-7 md:h-7" />,
    },
    {
      title: "Personalized Training",
      description:
        "Assign role-specific learning paths with real-time progress tracking.",
      icon: <Target className="w-6 h-6 md:w-7 md:h-7" />,
    },
    {
      title: "Continuous Mentorship",
      description:
        "Maritime experts guide and mentor seafarers along their career pathways.",
      icon: <Users className="w-6 h-6 md:w-7 md:h-7" />,
    },
    {
      title: "Insightful Analytics",
      description:
        "Fleet managers monitor compliance, skill gaps, and safety KPIs in real-time.",
      icon: <BarChart3 className="w-6 h-6 md:w-7 md:h-7" />,
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl heading font-bold text-gray-900 mb-3 md:mb-4">
            How <span className="text-[#1E3A76]">Seaverse</span> Works
          </h2>
          <p className="text-gray-600 max-w-2xl text-base md:text-lg mx-auto px-4 md:px-0">
            From onboarding to compliance reporting, Seaverse supports every
            step of your maritime training journey.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Desktop SVG Path - Hidden on mobile */}
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none hidden xl:block"
            viewBox="0 0 1200 400"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M 150 200 Q 400 50, 600 100 T 1050 200"
              stroke="#1E3A76"
              strokeWidth="2"
              fill="none"
              strokeDasharray="6 6"
              opacity="0.3"
            />
          </svg>

          {/* Mobile Connection Lines - Visible only on mobile */}
          <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-[#1E3A76]/20 to-transparent transform -translate-x-1/2 xl:hidden"></div>

          {/* Cards Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {steps.map(({ title, description, icon }, idx) => (
              <div key={idx} className="relative flex flex-col items-center">
                {/* Step Number for Mobile */}
                <div className="flex xl:hidden items-center justify-center w-8 h-8 bg-[#1E3A76] text-white rounded-full text-sm font-bold mb-4 relative z-20">
                  {idx + 1}
                </div>

                {/* Card */}
                <div
                  className={`relative z-10 bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 w-full max-w-sm mx-auto group ${
                    // Desktop staggered positioning - only on xl screens
                    idx % 2 === 0 
                      ? "xl:translate-y-0" 
                      : idx === 1 
                      ? "xl:-translate-y-8" 
                      : "xl:translate-y-8"
                  }`}
                >
                  {/* Step number badge for desktop - Hidden on mobile */}
                  {/* <div className="hidden xl:block absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-[#1E3A76] to-[#2a4d8f] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {idx + 1}
                  </div> */}

                  {/* Icon Container */}
                  <div className="w-14 h-14 md:w-16 md:h-16 mx-auto bg-gray-50 rounded-xl md:rounded-2xl flex items-center justify-center text-[#1E3A76] mb-3 md:mb-4 group-hover:bg-[#1E3A76] group-hover:text-white transition-all duration-300">
                    {icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg md:text-xl title font-semibold text-[#1E3A76]/90 mb-2 md:mb-3 text-center">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base text-center leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
