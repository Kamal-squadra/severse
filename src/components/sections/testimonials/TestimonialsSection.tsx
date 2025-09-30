"use client";
import { Quote } from "lucide-react";
import React, { useRef, useEffect, useState } from "react";

const testimonials = [
  {
    name: "Captain Arun Das",
    role: "Fleet Manager, Oceanic Shipping",
    photo: "/images/heroPage/user.png",
    text: "Seaverse transformed our crew training. Real-time tracking and offline mode made compliance easy, even at sea.",
  },
  {
    name: "Chief Engineer Maria Lopez",
    role: "Chief Engineer, Pacific Mariners",
    photo: "/images/heroPage/user.png",
    text: "The mentorship and tailored learning paths really accelerate skills growth. Our safety metrics have improved significantly.",
  },
  {
    name: "HR Manager Liam Chen",
    role: "HR Manager, Atlantic Carriers",
    photo: "/images/heroPage/user.png",
    text: "Implementing Seaverse was effortless. Our global multilingual crew appreciates the intuitive platform and certificate recognition.",
  },
  {
    name: "Captain Jack Harris",
    role: "Fleet Captain, Gulf Tankers",
    photo: "/images/heroPage/user.png",
    text: "Seaverse is the most user-friendly LMS I've ever seen. The analytics and reporting features are top-notch.",
  },
  {
    name: "Chief Engineer Sophia Patel",
    role: "Chief Engineer, Pacific Ocean Liners",
    photo: "/images/heroPage/user.png",
    text: "Seaverse has been a game-changer for our training programs. The ability to track offline and auto-sync when connected has been a huge time-saver.",
  },
];

const TestimonialCard = ({ photo, text, name, role }) => (
  <div className="flex-shrink-0 w-96 mr-8">
    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100">
      <div className="mb-6">
        <Quote className="w-6 h-6 text-[#1E3A76]" />
      </div>

      <div className="flex-1 mb-6">
        <p className="text-gray-700 leading-relaxed text-base">"{text}"</p>
      </div>

      <div className="flex items-center pt-6 border-t border-gray-100">
        <div className="relative">
          <img
            src={photo}
            alt={name}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
        <div className="ml-4">
          <p className="text-gray-900 font-semibold text-lg">{name}</p>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const container = scrollContainerRef.current;
    
    if (!section || !container) return;

    let isLocked = false;

    const handleScroll = (e) => {
      const rect = section.getBoundingClientRect();
      const inView = rect.top <= 0 && rect.bottom >= window.innerHeight;
      
      if (!inView) {
        isLocked = false;
        return;
      }

      const maxIndex = testimonials.length - 1;
      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      if (scrollingDown && currentIndex < maxIndex) {
        e.preventDefault();
        isLocked = true;
        setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
      } else if (scrollingUp && currentIndex > 0) {
        e.preventDefault();
        isLocked = true;
        setCurrentIndex(prev => Math.max(prev - 1, 0));
      } else if (scrollingDown && currentIndex === maxIndex) {
        isLocked = false;
      } else if (scrollingUp && currentIndex === 0) {
        isLocked = false;
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentIndex]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTo({
        left: currentIndex * 416,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <section ref={sectionRef} className="min-h-screen py-20 bg-gray-50 flex items-center">
      <div className="w-full mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 text-gray-900">
            What Our <span className="text-[#1E3A76]">Clients</span> Say
          </h2>
          <p className="text-gray-600">Scroll to explore testimonials</p>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-hidden py-10 px-4"
        >
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} {...t} />
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex 
                  ? 'w-8 bg-[#1E3A76]' 
                  : 'w-2 bg-gray-300'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;