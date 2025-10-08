import React from "react";
import {
  Play,
  Globe,
  WifiOff,
  Award,
  BookOpen,
  Anchor,
  Ship,
  Users,
} from "lucide-react";
import Image from "next/image";
import LearningAppMockup from "./LearningAppMockup";

const TrustImpactBar = () => {
  // Sample course data for the grid
  const courses = [
    { title: "Fire Safety", progress: 85, icon: "🔥" },
    { title: "Navigation", progress: 92, icon: "🧭" },
    { title: "Emergency", progress: 78, icon: "🚨" },
    { title: "Cargo Ops", progress: 65, icon: "📦" },
    { title: "Engine Room", progress: 88, icon: "⚙️" },
    { title: "Bridge Ops", progress: 94, icon: "🌉" },
    { title: "Safety Drill", progress: 72, icon: "🦺" },
    { title: "First Aid", progress: 89, icon: "🏥" },
    { title: "MARPOL", progress: 76, icon: "🌊" },
  ];

  const categories = [
    {
      name: "Safety & Emergency",
      icon: <Ship className="w-6 h-6" />,
      count: 45,
    },
    { name: "Navigation", icon: <Anchor className="w-6 h-6" />, count: 32 },
    {
      name: "Cargo Operations",
      icon: <BookOpen className="w-6 h-6" />,
      count: 28,
    },
    { name: "Engineering", icon: <Users className="w-6 h-6" />, count: 25 },
    { name: "Compliance", icon: <Award className="w-6 h-6" />, count: 20 },
  ];

  const languages = [
    { name: "English", code: "EN", flag: "🇬🇧" },
    { name: "Mandarin", code: "中文", flag: "🇨🇳" },
    { name: "Tagalog", code: "TL", flag: "🇵🇭" },
    { name: "Bahasa", code: "ID", flag: "🇮🇩" },
  ];

  // Calculate radial opacity for course grid
  const getRadialOpacity = (index) => {
    const center = 4; // Middle card (index 4 in 3x3 grid)
    const row = Math.floor(index / 3);
    const col = index % 3;
    const centerRow = Math.floor(center / 3);
    const centerCol = center % 3;
    const distance = Math.sqrt(
      Math.pow(row - centerRow, 2) + Math.pow(col - centerCol, 2)
    );
    const maxDistance = Math.sqrt(8); // Max possible distance in 3x3 grid
    return 1 - (distance / maxDistance) * 0.7; // Fade from 1 to 0.3
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Premium Training Modules */}
        <div className="mb-24 flex flex-col lg:flex-row items-center gap-12">
          {/* Course Grid - Left Side */}
          {/* Course Grid - Left Side */}
          <div className="flex-1 relative">
              <Image
                src="/images/trust-impact/pc.png"
                alt="Phone Mockup"
                width={500}
                height={1000}
                className=""
              />
          </div>

          {/* Text - Right Side */}
          <div className="flex-1 space-y-5">
            <h2 className="text-5xl heading font-bold text-gray-900 leading-tight">
              150+ Premium
              <span className="block text-[#1E3A76]">Training Modules</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Comprehensive maritime training content created by industry
              experts. Each module is designed for real-world application and
              measurable outcomes.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-1.5" />
                Certified
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1.5" />
                Expert Created
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Specialized Categories */}
        <div className="mb-24 flex flex-col lg:flex-row-reverse items-center gap-12">
          {/* Categories UI - Right Side */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className=" rounded-xl p-4 border border-gray-200 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-700 rounded-lg">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 text-sm">
                        {category.name}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {category.count} modules
                      </p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div
                      className="bg-[#1E3A76] h-1 rounded-full transition-all duration-1000"
                      style={{ width: `${60 + index * 8}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text - Left Side */}
          <div className="flex-1 space-y-5">
            <h2 className="text-5xl heading font-bold text-gray-900 leading-tight">
              25+ Specialized
              <span className="block text-[#1E3A76]">Maritime Categories</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              From deck operations to engine room procedures, our comprehensive
              categories cover every aspect of maritime operations and safety.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div>
                <div className="text-2xl font-bold text-gray-900">25+</div>
                <div className="text-sm text-gray-500">Categories</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">150+</div>
                <div className="text-sm text-gray-500">Total Modules</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Multi-Language Access */}
        <div className="mb-24 flex flex-col lg:flex-row items-center gap-12">
          {/* Language Cards - Left Side */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
              {languages.map((language, index) => (
                <div
                  key={index}
                  className=" rounded-xl p-5 border border-gray-200 transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">{language.flag}</div>
                    <h3 className="font-medium text-gray-900 text-base mb-0.5">
                      {language.name}
                    </h3>
                    <p className="text-sm text-gray-500">{language.code}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Globe className="w-4 h-4" />
                <span>Global Accessibility</span>
              </div>
            </div>
          </div>

          {/* Text - Right Side */}
          <div className="flex-1 space-y-5">
            <h2 className="text-5xl heading font-bold text-gray-900 leading-tight">
              Multi-Language
              <span className="block text-[#1E3A76]">Access</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Breaking language barriers in maritime education. Access training
              content in your preferred language for better understanding and
              retention.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Real-time Translation
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                Cultural Context
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Offline Mode with Realistic Phone */}
        <div className="mb-24 flex flex-col lg:flex-row-reverse items-center gap-12">
          {/* Realistic Mobile UI - Right Side */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <LearningAppMockup />
            </div>
          </div>

          {/* Text - Left Side */}
          <div className="flex-1 space-y-5">
            <h2 className="text-5xl heading font-bold text-gray-900 leading-tight">
              Fully Offline
              <span className="block text-[#1E3A76]">Mode</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Never let connectivity issues interrupt learning. Download courses
              and continue training even in the middle of the ocean.
            </p>
            <div className="space-y-2.5">
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                50+ hours of offline content
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Auto-sync when connected
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                Works on any device
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustImpactBar;
