"use client";
import { SetStateAction, useState } from "react";
import { Plus, Minus, MessageCircle, Mail, Phone } from "lucide-react";

const faqs = [
  {
    question: "Benefits of Seaverse dashboards?",
    answer:
      "Real-time crew tracking, compliance monitoring, skill gap analysis, and instant reporting for vessel audits.",
  },
  {
    question: "Is it only for big fleets?",
    answer:
      "Seaverse scales for a single vessel or an entire global fleet, with dedicated support at any size.",
  },
  {
    question: "Can I analyse all learning data?",
    answer:
      "Yes — advanced analytics and exporting let managers get actionable insights on seafarer progress.",
  },
  {
    question: "Is Seaverse user-friendly?",
    answer:
      "Designed for shipboard use—minimal onboarding, intuitive navigation, and works offline.",
  },
  {
    question: "How does it help business?",
    answer:
      "Drives compliance, reduces risk, improves fleet KPIs, and ensures career growth for crew.",
  },
  {
    question: "Can I try a custom demo?",
    answer:
      "Absolutely! Request a tailored proposal and pilot for your maritime organization.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl heading font-bold text-center mb-16 max-w-3xl mx-auto">
          Get Insight into{" "}
          <span className="text-[#1E3A76]">Frequently Asked Questions</span>
        </h2>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* FAQ Section - Left (2/3) */}
          <div className="lg:col-span-2 space-y-4">
            {faqs.map(({ question, answer }, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden transition-shadow"
              >
                <button
                  onClick={() => toggleIndex(i)}
                  className="w-full cursor-pointer flex justify-between items-center p-5 text-left"
                  aria-expanded={activeIndex === i}
                  aria-controls={`faq-desc-${i}`}
                  id={`faq-header-${i}`}
                >
                  <span className="title text-lg pr-4">{question}</span>
                  <span className="flex-shrink-0">
                    {activeIndex === i ? (
                      <Minus className="w-6 h-6 text-[#1E3A76]" />
                    ) : (
                      <Plus className="w-6 h-6 text-[#1E3A76]" />
                    )}
                  </span>
                </button>

                {activeIndex === i && (
                  <div
                    id={`faq-desc-${i}`}
                    role="region"
                    aria-labelledby={`faq-header-${i}`}
                    className="px-5 pb-5 pt-0 text-gray-700 leading-relaxed"
                  >
                    {answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Card - Right (1/3) */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-[#1E3A76] to-[#2a4d8f] rounded-3xl py-12 p-8 text-white sticky top-24 shadow-xl">


              <h3 className="text-3xl heading mb-3">Have a Query?</h3>
              <p className="text-blue-100 text-md mb-10 leading-relaxed">
                Our maritime experts are ready to help you navigate your LMS
                journey.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-100">Email us</p>
                    <p className="font-semibold">support@seaverse.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-100">Call us</p>
                    <p className="font-semibold">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              <button className="w-full bg-white text-[#1E3A76] font-semibold py-3.5 rounded-lg hover:bg-gray-50 transition-all duration-200 active:scale-95 shadow-lg">
                Contact Now
              </button>

              <p className="text-xs text-blue-100 mt-4 text-center">
                Response time: Within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
