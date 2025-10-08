// app/platform/page.tsx
import { BookOpen, Globe, Users } from "lucide-react";

export default function PlatformHero() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Overview of <span style={{ color: '#1E3A76' }}>Seaverse LMS</span>
        </h1>
        <p className="text-xl md:text-2xl font-semibold mb-4" style={{ color: '#1E3A76' }}>
          Fully Integrated Learning Platform
        </p>
        <p className="text-base md:text-lg mb-12 max-w-3xl mx-auto text-gray-700">
          Built by seafarers for seafarers, Seaverse empowers maritime professionals with flexible, offline-ready learning anytime, anywhere.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Feature
            icon={<BookOpen className="w-12 h-12" style={{ color: '#1E3A76' }} />}
            title="Comprehensive Content"
            description="150+ premium modules across 25+ specialized maritime categories designed by experts."
          />
          <Feature
            icon={<Globe className="w-12 h-12" style={{ color: '#1E3A76' }} />}
            title="Global Accessibility"
            description="Access learning anytime on web, mobile or tablet with multi-language support and offline mode."
          />
          <Feature
            icon={<Users className="w-12 h-12" style={{ color: '#1E3A76' }} />}
            title="Personalized Learning"
            description="Competency-based progress tracking with captain-led onboard control and mentoring."
          />
        </div>
      </div>
    </div>
  );
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center max-w-sm text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm md:text-base text-gray-600">{description}</p>
    </div>
  );
}