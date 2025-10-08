import React from "react";
import {
  Users,
  Video,
  Monitor,
  TrendingUp,
  Settings,
  ArrowRight,
  CheckCircle,
  Clock,
  Timer,
} from "lucide-react";

const KeyFeaturesSnapshot = () => {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6 text-black">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl heading font-bold mb-3">Key <span className="text-[#1E3A76]">Features</span></h2>
          <p className="text-gray-600 text-lg max-w-2xl text-center mx-auto">
            Structured for Reliability and Growth
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Role-Based Learning */}
          <div className="rounded-4xl p-8 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-7 h-7 text-[#1E3A76]" />
              <h3 className="text-xl font-semibold md:text-2xl">Role-Based Learning</h3>
            </div>
            <p className="text-gray-600 text-md mb-8">
              Tailored learning paths designed specifically for different maritime roles and experience levels.
            </p>

            <div className="space-y-3">
              {[
                "Cadet → 3 courses",
                "Third Officer → 3 courses",
                "Chief Officer → 3 courses",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between text-md text-gray-600"
                >
                  <span>{item}</span>
                  <span className="text-sm text-blue-600 font-medium">
                    AUTO
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Case Studies */}
          <div className="rounded-4xl p-8 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <Video className="w-7 h-7 text-[#1E3A76]" />
              <h3 className="text-xl font-semibold md:text-2xl">Real-Life Case Studies</h3>
            </div>
            <p className="text-gray-600 text-md mb-8">
              Interactive video scenarios based on actual maritime incidents and emergency situations.
            </p>

            <div className="space-y-4">
              {[
                { title: "Emergency Port Entry", progress: 65, time: "45 min" },
                {
                  title: "Cargo Loading Incident",
                  progress: 80,
                  time: "30 min",
                },
                { title: "Engine Room Fire", progress: 45, time: "60 min" },
              ].map((course, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-md text-gray-900">{course.title}</h4>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {course.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-gray-200 rounded-full h-1">
                      <div
                        className="bg-green-500 h-1 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500 w-8 text-right">
                      {course.progress}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Content */}
          <div className="rounded-4xl p-8 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <Monitor className="w-7 h-7 text-[#1E3A76]" />
              <h3 className="text-xl font-semibold md:text-2xl">Interactive Content</h3>
            </div>
            <p className="text-gray-600 text-md mb-8">
              Engage with dynamic quizzes, simulations, and hands-on assessments for better retention.
            </p>

            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-gray-500">Question 1 of 10</span>
                <div className="flex items-center gap-1 text-xs text-orange-600">
                  <Timer className="w-3 h-3" />
                  45s
                </div>
              </div>

              <p className="text-sm text-gray-900 mb-4">
                What is the minimum safe distance when anchoring?
              </p>

              <div className="space-y-2">
                {[
                  "3 times ship's length",
                  "5 times ship's length",
                  "7 times ship's length",
                ].map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-gray-900 cursor-pointer transition-colors"
                  >
                    <div className="w-3 h-3 border border-gray-300 rounded-full"></div>
                    <span>{option}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Progress Tracking */}
          <div className="rounded-4xl p-8 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-7 h-7 text-[#1E3A76]" />
              <h3 className="text-xl font-semibold md:text-2xl">Progress Tracking</h3>
            </div>
            <p className="text-gray-600 text-md mb-8">
              Monitor learning progress with detailed analytics and personalized performance insights.
            </p>

            <div className="space-y-5">
              {[
                { skill: "Navigation", progress: 85, time: "24h" },
                { skill: "Safety Protocols", progress: 72, time: "18h" },
                { skill: "Emergency Response", progress: 58, time: "12h" },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-md text-gray-900">{item.skill}</h4>
                    <span className="text-xs text-gray-400">{item.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-gray-200 rounded-full h-1">
                      <div
                        className={`h-1 rounded-full ${
                          item.progress >= 80
                            ? "bg-green-500"
                            : item.progress >= 60
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500 w-8 text-right">
                      {item.progress}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 bg-[#1E3A76] text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
            Discover All Features
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSnapshot;
