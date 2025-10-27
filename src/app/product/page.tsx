"use client";
import React from "react";
import { 
  BookOpen, 
  Award, 
  Globe, 
  TrendingUp, 
  Users, 
  CheckCircle,
  ArrowRight,
  Ship
} from "lucide-react";
import { useI18n } from "@/lib/i18n/LanguageProvider";

const ProductPage = () => {
  const { t } = useI18n();
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pb-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-blue-100 shadow-sm">
              <Ship className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-900">
                Our Product
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Meet <span style={{ color: "#1E3A76" }}>SEAVERSE</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Sea Learning&apos;s comprehensive Learning Management System, exclusively designed by experienced seafarers for the global maritime community.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Who We Are
                </h2>
                <div className="w-20 h-1 bg-[#1E3A76]"></div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-gray-900">SEAVERSE</strong> is Sea Learning&apos;s comprehensive Learning Management System, exclusively designed and curated by experienced seafarers for the global maritime community.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Our platform empowers seafarers with knowledge that matters — when it counts, helping them develop skills, advance their careers, and maintain compliance in an evolving maritime landscape.
              </p>
            </div>

            {/* Right Side - Mission Card */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 lg:p-10 border border-blue-100 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#1E3A76] rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: "#1E3A76" }}>
                    Our Mission
                  </h3>
                </div>
                
                <p className="text-xl font-semibold text-gray-800 leading-relaxed">
                  Empower seafarers with knowledge that matters, when it counts.
                </p>
                
                <div className="pt-6 border-t border-blue-100">
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-[#1E3A76] flex-shrink-0 mt-1" />
                    <p className="text-base text-gray-600 leading-relaxed">
                      Trusted by leading maritime companies like <strong className="text-gray-900">Synergy Marine Group</strong>, who have partnered with SEAVERSE to deliver world-class training solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SEAVERSE Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Why <span style={{ color: "#1E3A76" }}>SEAVERSE?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              SEAVERSE combines industry expertise with innovative technology to deliver structured, personalized, and competency-based learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BookOpen className="w-6 h-6" />}
              title="Expert-Led Content"
              description="Curated by experienced maritime professionals who understand the real challenges at sea."
            />
            <FeatureCard
              icon={<Globe className="w-6 h-6" />}
              title="Aligned with Global Standards"
              description="Training programs compliant with international maritime regulations and best practices."
            />
            <FeatureCard
              icon={<CheckCircle className="w-6 h-6" />}
              title="Real-Life Case Studies"
              description="Learn from actual maritime scenarios and incidents to build practical knowledge."
            />
            <FeatureCard
              icon={<Users className="w-6 h-6" />}
              title="Personalized Learning Journeys"
              description="Tailored learning paths that adapt to your role, rank, and career goals."
            />
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Flexible Learning Formats"
              description="Access content anytime, anywhere through videos, interactive modules, and assessments."
            />
            <FeatureCard
              icon={<Ship className="w-6 h-6" />}
              title="SMS Integration"
              description="Seamlessly integrate with your Safety Management System for streamlined operations."
            />
          </div>
        </div>
      </section>

      {/* Core Value Proposition Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Core Value <span style={{ color: "#1E3A76" }}>Proposition</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What makes SEAVERSE the preferred choice for maritime learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ValueCard
              number="01"
              title="Developed by Maritime Professionals"
              description="Created by those who understand real-world maritime challenges and have lived the seafarer experience."
            />
            <ValueCard
              number="02"
              title="Competency-Based Progression"
              description="Structured learning pathways from cadet to captain, ensuring continuous professional development."
            />
            <ValueCard
              number="03"
              title="Rank and Role-Specific Paths"
              description="Customized learning journeys designed for each maritime rank and specialized role onboard."
            />
            <ValueCard
              number="04"
              title="Engaging & Interactive Content"
              description="Technology-driven, interactive modules that make learning engaging and knowledge retention effective."
            />
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black border border-black px-8 py-4 rounded-lg font-semibold transition flex items-center justify-center space-x-2 text-base hover:bg-gray-50">
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-[#1E3A76] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#162d5a] transition flex items-center justify-center space-x-2 text-base">
                <span>Request a Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-[#1E3A76] mb-5 group-hover:bg-[#1E3A76] group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

type ValueCardProps = {
  number: string;
  title: string;
  description: string;
};

const ValueCard: React.FC<ValueCardProps> = ({ number, title, description }) => (
  <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-all duration-300">
    <div className="absolute top-6 right-6 text-6xl font-bold text-blue-100">
      {number}
    </div>
    <div className="relative space-y-3">
      <div className="w-12 h-12 bg-[#1E3A76] rounded-lg flex items-center justify-center mb-4">
        <CheckCircle className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

// Missing Target import fix
const Target = TrendingUp;

export default ProductPage;