"use client";
import React from "react";
import { 
  Video,
  FileText,
  Headphones,
  Award,
  TrendingUp,
  Shield,
  Anchor,
  Package,
  Wrench,
  Users,
  CheckCircle,
  BarChart,
  Target,
  Clock,
  DollarSign,
  BookOpen,
  Activity,
  Eye
} from "lucide-react";
import { useI18n } from "@/lib/i18n/LanguageProvider";

const ContentPage = () => {
  const { t } = useI18n();
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pb-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-blue-100 shadow-sm">
              <BookOpen className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-900">
                Our Content Library
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Our Content: <br />
              <span style={{ color: "#1E3A76" }}>Designed for Real-World Impact</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              SEAVERSE offers a comprehensive, expertly curated content library, developed by seafarers, validated by maritime specialists, and tailored for on-board learning.
            </p>
          </div>
        </div>
      </section>

      {/* Specialized Learning Categories */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Specialized <span style={{ color: "#1E3A76" }}>Learning Categories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We cover 25+ specialized areas across maritime operations, ensuring relevant and role-specific learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <CategoryCard
              icon={<Shield className="w-7 h-7" />}
              title="Safety & Emergency Excellence"
              items={[
                "Fire Fighting & Prevention",
                "Lifeboats & Rescue Boats",
                "First Aid & Medical Emergency",
                "Environmental Protection",
                "Maritime Security"
              ]}
              color="bg-red-50"
              iconColor="text-red-600"
              hoverColor="group-hover:bg-red-600"
            />
            
            <CategoryCard
              icon={<Anchor className="w-7 h-7" />}
              title="Vessel & Technical Operations"
              items={[
                "Navigation & Bridge Operations",
                "Engine Machinery & Systems",
                "ECDIS Operations",
                "Mooring & Tugs",
                "Permit to Work Systems"
              ]}
              color="bg-blue-50"
              iconColor="text-blue-600"
              hoverColor="group-hover:bg-blue-600"
            />
            
            <CategoryCard
              icon={<Package className="w-7 h-7" />}
              title="Cargo Handling Expertise"
              items={[
                "Oil/Chemical Cargo Operations",
                "Bulk Cargo Handling",
                "Gas Carrier Operations",
                "Container Cargo Operations",
                "IMSBC Code Compliance"
              ]}
              color="bg-amber-50"
              iconColor="text-amber-600"
              hoverColor="group-hover:bg-amber-600"
            />
            
            <CategoryCard
              icon={<Wrench className="w-7 h-7" />}
              title="Engineering & Technical Systems"
              items={[
                "Electrical Knowledge & Safety",
                "Welding Safety & Procedures",
                "Machinery Maintenance",
                "Technical Systems Management",
                "Equipment Operations"
              ]}
              color="bg-purple-50"
              iconColor="text-purple-600"
              hoverColor="group-hover:bg-purple-600"
            />
            
            <CategoryCard
              icon={<Users className="w-7 h-7" />}
              title="Management & Compliance"
              items={[
                "Leadership & Management Culture",
                "Maritime Rules & Policy",
                "Crew Wellness & Mental Health",
                "Real-Life Case Studies",
                "Best Practice Standards"
              ]}
              color="bg-green-50"
              iconColor="text-green-600"
              hoverColor="group-hover:bg-green-600"
            />
          </div>
        </div>
      </section>

      {/* Content Formats Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Content <span style={{ color: "#1E3A76" }}>Formats</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diverse learning materials designed to engage and educate
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FormatCard
              icon={<Video className="w-6 h-6" />}
              title="100+ Premium Videos"
              description="High-quality video content covering all aspects of maritime operations"
            />
            <FormatCard
              icon={<FileText className="w-6 h-6" />}
              title="Interactive Case Studies"
              description="Real-world scenarios to apply knowledge and build decision-making skills"
            />
            <FormatCard
              icon={<Activity className="w-6 h-6" />}
              title="2D Animations & AI Explainers"
              description="Visual learning aids that simplify complex technical concepts"
            />
            <FormatCard
              icon={<Headphones className="w-6 h-6" />}
              title="Expert Podcasts"
              description="Industry insights and discussions from experienced maritime professionals"
            />
            <FormatCard
              icon={<BookOpen className="w-6 h-6" />}
              title="Whiteboard Sessions"
              description="Step-by-step explanations of procedures and regulations"
            />
            <FormatCard
              icon={<Award className="w-6 h-6" />}
              title="Assessments & Certifications"
              description="Validate knowledge and earn recognized maritime certifications"
            />
          </div>
        </div>
      </section>

      {/* Unique Selling Points */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Why Our Content <span style={{ color: "#1E3A76" }}>Stands Out</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <USPCard
              icon={<Users className="w-6 h-6" />}
              title="Built by Experts, for Experts"
              description="Every module validated by industry veterans"
            />
            <USPCard
              icon={<Target className="w-6 h-6" />}
              title="Competency-Based & Personalized"
              description="Training mapped to roles and career progression"
            />
            <USPCard
              icon={<Anchor className="w-6 h-6" />}
              title="Shipboard-Optimized"
              description="Works offline, all devices, low bandwidth"
            />
            <USPCard
              icon={<CheckCircle className="w-6 h-6" />}
              title="Integrated Compliance"
              description="Aligned with STCW, SIRE 2.0, PSC, CDI, DryBMS"
            />
          </div>
        </div>
      </section>

      {/* Expected Outcomes & Impact */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Expected Outcomes & <span style={{ color: "#1E3A76" }}>Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable results that transform maritime training
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ImpactCard
              icon={<Shield className="w-8 h-8" />}
              percentage="35%"
              title="Reduction in Safety Incidents"
              description="Among trained crews"
            />
            <ImpactCard
              icon={<Clock className="w-8 h-8" />}
              percentage="40%"
              title="Faster Skill Acquisition"
              description="vs traditional training"
            />
            <ImpactCard
              icon={<TrendingUp className="w-8 h-8" />}
              percentage="25%"
              title="Improvement in KPIs"
              description="Operational excellence"
            />
            <ImpactCard
              icon={<DollarSign className="w-8 h-8" />}
              percentage="60%"
              title="Cost Savings"
              description="vs conventional methods"
            />
          </div>

          {/* Additional Outcomes */}
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <OutcomeCard
              icon={<Award className="w-6 h-6" />}
              title="Recognized Certifications"
              description="Accepted by leading shipping companies"
            />
            <OutcomeCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Career Path Clarity"
              description="From cadet to senior officer"
            />
            <OutcomeCard
              icon={<CheckCircle className="w-6 h-6" />}
              title="Regulatory Compliance"
              description="100% adherence to international standards"
            />
            <OutcomeCard
              icon={<BarChart className="w-6 h-6" />}
              title="Performance Excellence"
              description="Measurable job performance improvements"
            />
          </div>
        </div>
      </section>

      {/* Monitoring, Mentoring & Measurement */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Monitoring, Mentoring & <span style={{ color: "#1E3A76" }}>Measurement</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Track progress, identify gaps, and ensure continuous improvement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <MonitoringCard
              icon={<Eye className="w-7 h-7" />}
              title="Individual Progress Tracking"
              description="Every crew member's advancement is monitored in real-time, providing visibility into learning achievements and milestones reached."
              features={[
                "Real-time progress dashboards",
                "Completion rates and timelines",
                "Achievement tracking",
                "Competency milestones"
              ]}
            />
            <MonitoringCard
              icon={<BarChart className="w-7 h-7" />}
              title="Skill Gap Analysis"
              description="Identify specific learning needs and knowledge gaps to address them with targeted training programs and personalized learning paths."
              features={[
                "Competency assessments",
                "Performance analytics",
                "Customized learning recommendations",
                "Role-specific skill mapping"
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

type CategoryCardProps = {
  icon: React.ReactNode;
  title: string;
  items: string[];
  color: string;
  iconColor: string;
  hoverColor: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  icon, 
  title, 
  items, 
  color, 
  iconColor,
  hoverColor 
}) => (
  <div className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
    <div className={`w-16 h-16 ${color} rounded-xl flex items-center justify-center ${iconColor} mb-6 ${hoverColor} group-hover:text-white transition-all duration-300`}>
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-[#1E3A76] flex-shrink-0 mt-0.5" />
          <span className="text-gray-600">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

type FormatCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FormatCard: React.FC<FormatCardProps> = ({ icon, title, description }) => (
  <div className="group bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100">
    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-[#1E3A76] mb-5 group-hover:bg-[#1E3A76] group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

type USPCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const USPCard: React.FC<USPCardProps> = ({ icon, title, description }) => (
  <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300">
    <div className="w-12 h-12 bg-[#1E3A76] rounded-lg flex items-center justify-center text-white mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
  </div>
);

type ImpactCardProps = {
  icon: React.ReactNode;
  percentage: string;
  title: string;
  description: string;
};

const ImpactCard: React.FC<ImpactCardProps> = ({ icon, percentage, title, description }) => (
  <div className="bg-white rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300">
    <div className="flex items-center justify-center mb-4 text-[#1E3A76]">
      {icon}
    </div>
    <div className="text-center">
      <div className="text-5xl font-bold text-[#1E3A76] mb-2">{percentage}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

type OutcomeCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const OutcomeCard: React.FC<OutcomeCardProps> = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300">
    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-[#1E3A76] mb-4">
      {icon}
    </div>
    <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

type MonitoringCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
};

const MonitoringCard: React.FC<MonitoringCardProps> = ({ icon, title, description, features }) => (
  <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300">
    <div className="flex items-center space-x-4 mb-6">
      <div className="w-14 h-14 bg-[#1E3A76] rounded-xl flex items-center justify-center text-white">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-700 leading-relaxed mb-6">{description}</p>
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-[#1E3A76] flex-shrink-0 mt-0.5" />
          <span className="text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ContentPage;