"use client";
import React from "react";
import { Star, ArrowRight, CheckCircle, BookOpen } from "lucide-react";
import Image from "next/image";

const HeroPage = () => {
  return (
    <section className="py-12 md:py-24 min-h-screen flex items-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center px-4 md:px-6 gap-8 lg:gap-12">
        {/* Left: Headline & Form */}
        <div className="space-y-6 md:space-y-8 w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-gray-900">
            Elevate Maritime <br />
            <span className="text-[#1E3A76]">Learning</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
            Seaverse is built for modern fleets—track training, ensure
            compliance, and empower every seafarer with personalized lessons,
            analytics, and support.
          </p>
          
          {/* Form */}
          <form className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto lg:mx-0">
            <input
              type="email"
              required
              placeholder="Work email"
              className="w-full sm:flex-1 border border-gray-300 rounded-lg px-4 md:px-5 py-3 text-gray-900 outline-[#1E3A76] text-sm md:text-base"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#1E3A76] text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-[#162d5a] transition flex items-center justify-center space-x-1 text-sm md:text-base"
            >
              <span>Start for free</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </form>
          
          {/* Ratings */}
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <Star className="w-5 h-5 md:w-6 md:h-6 text-[#1E3A76] fill-current" />
            <span className="text-base md:text-lg font-semibold text-gray-900">4.9</span>
            <span className="text-sm md:text-base text-gray-500">(390+ reviews)</span>
          </div>
        </div>

        {/* Right: Image and Dashboard Cards */}
        <div className="relative flex justify-center w-full lg:w-1/2 mt-8 lg:mt-0">
          {/* Main Image Container */}
          <div className="relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[500px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
            <div className="w-full h-full">
              <Image
                src="/images/heroPage/lms-hero.png"
                alt="Maritime training dashboard"
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, 500px"
                className="rounded-2xl md:rounded-3xl border object-cover"
                priority
              />
            </div>

            {/* Course Completed Card - Top Left */}
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 md:-left-8 w-36 sm:w-40 md:w-48 bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl p-3 md:p-4 border border-gray-100">
              <div className="flex items-center justify-between mb-2 md:mb-3">
                <span className="font-semibold text-gray-800 text-sm md:text-base">Courses</span>
                <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-50 rounded-full flex items-center justify-center">
                  <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-[#1E3A76]" />
                </div>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl md:text-4xl font-bold text-gray-900">156</span>
                <span className="text-xs md:text-sm text-gray-500">completed</span>
              </div>
              <div className="mt-1 md:mt-2 flex items-center gap-1 text-xs text-green-600">
                <span className="font-medium">↑ 23%</span>
                <span className="text-gray-400">this month</span>
              </div>
            </div>

            {/* Latest Activity Card - Bottom Right */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 md:-right-8 w-52 sm:w-56 md:w-64 bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl p-3 md:p-4 border border-gray-100">
              <div className="flex items-center justify-between mb-2 md:mb-3">
                <span className="font-semibold text-gray-800 text-sm md:text-base">
                  Live Activity
                </span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-[#1E3A76]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs md:text-sm font-medium text-gray-900">
                      Certificate Issued
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      Bosun Smith - Safety Training
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-3 h-3 md:w-4 md:h-4 text-purple-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs md:text-sm font-medium text-gray-900">
                      New Course
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      Hydraulics Safety Released
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs md:text-sm font-medium text-gray-900">
                      Progress Update
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      Asia Fleet - 87% Complete
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mentor Support Badge - Bottom Left */}
            <div className="absolute bottom-4 -left-3 sm:bottom-6 sm:-left-4 md:bottom-8 md:-left-6 bg-gradient-to-r from-[#1E3A76] to-[#2a4d8f] text-white rounded-lg md:rounded-xl shadow-lg px-3 md:px-4 py-2 md:py-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-xs md:text-sm font-semibold">24/7 Support</span>
              </div>
              <p className="text-xs text-blue-100 mt-0.5 md:mt-1">99.9% Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
