import { LineChart, ShieldCheck } from "lucide-react";

const FeatureHighlightSection = () => (
  <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-0 lg:gap-16">
      {/* Visual/graph stacked cards */}
      <div className="relative w-full lg:w-1/2 h-80 md:h-96 lg:h-[500px] flex justify-center items-center order-2 lg:order-1">
        {/* Main container for mobile centering */}
        <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
          {/* Course Completion Card - Top Left */}
          <div className="absolute -top-8 left-0 md:left-4 lg:left-10 w-32 md:w-36 lg:w-40 h-14 md:h-16 lg:h-20 bg-white rounded-lg md:rounded-xl shadow-lg md:shadow-xl flex flex-col justify-center items-center p-2 md:p-3 z-20">
            <span className="text-xs md:text-sm text-[#1E3A76] font-bold">
              Course Completion
            </span>
            <span className="text-[#1E3A76] font-bold text-lg md:text-xl lg:text-2xl">56</span>
          </div>

          {/* Bar Chart Card - Center */}
          <div className="absolute top-8 md:top-12 lg:top-16 left-8 md:left-12 lg:left-16 w-48 md:w-56 lg:w-64 h-32 md:h-36 lg:h-44 bg-white rounded-xl shadow-lg md:shadow-xl flex flex-col justify-center items-center p-3 md:p-4 z-10">
            <div className="w-full flex gap-2 md:gap-3 items-end mb-2">
              <div className="h-10 md:h-12 lg:h-16 w-3 md:w-4 bg-[#1E3A76] rounded"></div>
              <div className="h-6 md:h-8 lg:h-10 w-3 md:w-4 bg-green-500 rounded"></div>
              <div className="h-12 md:h-14 lg:h-20 w-3 md:w-4 bg-[#1E3A76] rounded"></div>
            </div>
            <div className="text-xs text-gray-600 text-center w-full">
              <span className="text-[#1E3A76]">Completed</span> •{" "}
              <span className="text-green-500">In Progress</span>
            </div>
          </div>

          {/* Fleet Metrics Card - Bottom Right */}
          <div className="absolute top-20 md:top-24 lg:top-32 right-0 md:right-4 lg:right-8 w-44 md:w-52 lg:w-64 h-24 md:h-28 lg:h-32 bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl flex flex-col items-center justify-center p-3 md:p-4 z-30">
            <LineChart className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-[#1E3A76] mb-1 md:mb-2" />
            <span className="text-xs md:text-sm text-gray-700">Fleet Metrics</span>
          </div>
        </div>
      </div>

      {/* Text/Content */}
      <div className="w-full lg:w-1/2 space-y-6 md:space-y-7 text-center lg:text-left order-1 lg:order-2">
        <h2 className="heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          The Power of{" "}
          <span className="text-[#1E3A76]">The Seaverse Platform</span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto lg:mx-0">
          Where maritime learning meets analytics, compliance, and crew
          empowerment—designed for real-world fleets.
        </p>
        
        {/* Feature List */}
        <div className="text-gray-800 space-y-4 md:space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 max-w-lg mx-auto lg:mx-0">
            <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <ShieldCheck className="text-[#1E3A76] w-6 h-6 md:w-7 md:h-7 flex-shrink-0" />
              <div className="text-left">
                <div className="text-sm md:text-base font-semibold">Compliance Assured</div>
                <div className="text-gray-500 text-xs md:text-sm">
                  Audit-ready certifications and regulation tracking.
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 max-w-lg mx-auto lg:mx-0">
            <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <LineChart className="text-green-500 w-6 h-6 md:w-7 md:h-7 flex-shrink-0" />
              <div className="text-left">
                <div className="text-sm md:text-base font-semibold">Fleet Performance</div>
                <div className="text-gray-500 text-xs md:text-sm">
                  Track operational KPIs, safety, and upskilling with zero guesswork.
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="mt-6 md:mt-8 px-6 md:px-8 py-2.5 md:py-3 bg-[#1E3A76] text-white rounded-full font-semibold text-sm md:text-base transition hover:bg-[#162d5a] active:scale-95">
          Get Started
        </button>
      </div>
    </div>
  </section>
);

export default FeatureHighlightSection;
