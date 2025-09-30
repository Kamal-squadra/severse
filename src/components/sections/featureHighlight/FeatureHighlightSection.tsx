import { LineChart, ShieldCheck } from "lucide-react";

const FeatureHighlightSection = () => (
  <section className="my-32 max-w-7xl mx-auto flex flex-col md:flex-row">
    {/* Visual/graph stacked cards */}
    <div className="relative flex-shrink-0 py-10 w-full md:w-1/2 flex justify-center mb-12 md:mb-0">
      <div className="absolute left-20 top-24 w-64 h-44 bg-white rounded-xl shadow-xl flex flex-col justify-center items-center p-4">
        <div className="w-full flex gap-3 items-end mb-2">
          <div className="h-16 w-4 bg-[#1E3A76] rounded"></div>
          <div className="h-10 w-4 bg-green-500 rounded"></div>
          <div className="h-20 w-4 bg-[#1E3A76] rounded"></div>
        </div>
        <div className="text-xs text-gray-600 mt-2 text-center w-full">
          <span className="text-[#1E3A76]">Completed</span> •{" "}
          <span className="text-green-500">In Progress</span>
        </div>
      </div>
      <div className="absolute left-10 top-10 w-36 h-16 bg-white rounded-xl shadow-xl flex flex-col justify-center items-center">
        <span className="text-sm text-[#1E3A76] font-bold">
          Course Completion
        </span>
        <span className="text-[#1E3A76] font-bold text-2xl">56</span>
      </div>
      <div className="relative ml-10 w-64 h-32 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-4">
        <LineChart className="w-20 h-20 text-[#1E3A76] mb-2" />
        <span className="text-sm text-gray-700">Fleet Metrics</span>
      </div>
    </div>
    {/* Text/Content */}
    <div className="md:w-1/2 space-y-7 px-8">
      <h2 className="heading text-4xl md:text-5xl font-bold text-gray-900 mb-3">
        The Power of{" "}
        <span className="text-[#1E3A76]">The Seaverse Platform</span>
      </h2>
      <p className="text-gray-600 text-lg">
        Where maritime learning meets analytics, compliance, and crew
        empowerment—designed for real-world fleets.
      </p>
      <div className="text-gray-800 ">
        <div className="flex items-center gap-4 mb-3">
          <ShieldCheck className="text-[#1E3A76] w-7 h-7" />
          <div>
            <div className="text-base font-semibold">Compliance Assured</div>
            <div className="text-gray-500 text-sm">
              Audit-ready certifications and regulation tracking.
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <LineChart className="text-green-500 w-7 h-7" />
          <div>
            <div className="text-base font-semibold">Fleet Performance</div>
            <div className="text-gray-500 text-sm">
              Track operational KPIs, safety, and upskilling with zero
              guesswork.
            </div>
          </div>
        </div>
      </div>
      <button className="mt-8 px-8 py-3 bg-[#1E3A76] text-white rounded-full font-semibold transition hover:bg-[#162d5a]">
        Get Started
      </button>
    </div>
  </section>
);

export default FeatureHighlightSection;
