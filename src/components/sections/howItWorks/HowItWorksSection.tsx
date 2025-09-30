import React from "react";
import { UserPlus, Target, Users, BarChart3, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      title: "Easy Onboarding",
      description:
        "Quickly set up your fleet with dedicated tablets and admin dashboards.",
      icon: <UserPlus className="w-7 h-7" />,
    },
    {
      title: "Personalized Training",
      description:
        "Assign role-specific learning paths with real-time progress tracking.",
      icon: <Target className="w-7 h-7" />,
    },
    {
      title: "Continuous Mentorship",
      description:
        "Maritime experts guide and mentor seafarers along their career pathways.",
      icon: <Users className="w-7 h-7" />,
    },
    {
      title: "Insightful Analytics",
      description:
        "Fleet managers monitor compliance, skill gaps, and safety KPIs in real-time.",
      icon: <BarChart3 className="w-7 h-7" />,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl heading font-bold text-gray-900 mb-4">
            How <span className="text-[#1E3A76]">Seaverse</span> Works
          </h2>
          <p className="text-gray-600 max-w-2xl text-lg mx-auto">
            From onboarding to compliance reporting, Seaverse supports every
            step of your maritime training journey.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <svg
            className="absolute top-0 left-0 w-5xl h-full pointer-events-none hidden lg:block"
            viewBox="0 0 1000 400"
          >
            <path
              d="M 100 300 Q 250 100, 500 80 T 900 300"
              stroke="#1E3A76"
              strokeWidth="3"
              fill="none"
              strokeDasharray="8 8"
              opacity="0.3"
            />
          </svg>
          <svg
            className="absolute rotate-180 top-0 left-0 w-7xl h-full pointer-events-none hidden lg:block"
            viewBox="0 0 2000 400"
          >
            <path
              d="M 100 300 Q 250 100, 500 80 T 900 300"
              stroke="#1E3A76"
              strokeWidth="3"
              fill="none"
              strokeDasharray="8 8"
              opacity="0.3"
            />
          </svg>
          {/* Cards positioned along arc */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {steps.map(({ title, description, icon }, idx) => (
              <div key={idx} className="relative flex flex-col items-center">
                {/* Arrow between cards (hidden on last card and mobile) */}
                {/* {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-8 top-16 z-0">
                    <ArrowRight className="w-6 h-6 text-[#1E3A76] opacity-40" />
                  </div>
                )} */}

                {/* Card */}
                <div
                  className="relative z-10 bg-white rounded-4xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 w-full max-w-xs group"
                  style={{
                    transform: `translateY(${
                      idx % 2 === 0 ? "0px" : idx === 1 ? "-40px" : "40px"
                    })`,
                  }}
                >
                  {/* Step number badge */}
                  {/* <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-[#1E3A76] to-[#2a4d8f] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {idx + 1}
                  </div> */}

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto bg-gray-50 rounded-2xl flex items-center justify-center text-[#1E3A76] mb-4 group-hover:bg-[#1E3A76] group-hover:text-white transition-all duration-300">
                    {icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg title font-semibold text-[#1E3A76]/80 mb-3 text-center">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-center">
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
