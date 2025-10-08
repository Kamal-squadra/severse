// LearningAppMockup.jsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  BellIcon,
  PlayIcon,
  PauseIcon,
  ClockIcon,
  BookOpenIcon,
  HomeIcon,
  UserIcon,
  PlusIcon,
  SquaresExcludeIcon,
  GraduationCap,
  DownloadIcon,
} from "lucide-react";

const LearningAppMockup = ({ width = 320, height = 640, className = "" }) => {
  const [activeTab, setActiveTab] = useState("offline");
  const [playingCourse, setPlayingCourse] = useState(null);
  const [autoHoveredCard, setAutoHoveredCard] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const courses = [
    {
      id: 1,
      title: "Methods of Wet Heat Cooking",
      duration: "00:15:28",
      lessons: "1 Lesson",
      progress: 14,
      category: "Culinary Arts",
      difficulty: "Beginner",
      gradient: "from-[#1E3A76] to-[#1E3A76]",
    },
    {
      id: 2,
      title: "Safety First Training",
      duration: "00:27:10",
      lessons: "2 Lessons",
      progress: 30,
      category: "Safety",
      difficulty: "Essential",
      gradient: "from-[#1E3A76] to-[#1E3A76]",
    },
  ];

  const assignedCourses = [
    {
      id: 3,
      title: "Advanced Maritime Safety",
      duration: "01:45:30",
      lessons: "8 Lessons",
      progress: 65,
      category: "Maritime",
      difficulty: "Advanced",
      gradient: "from-[#1E3A76] to-[#1E3A76]",
    },
  ];

  // Auto-cycle through cards
  useEffect(() => {
    if (!isPaused) {
      const allCourses = [...courses, ...assignedCourses];
      let currentIndex = 0;

      intervalRef.current = setInterval(() => {
        setAutoHoveredCard(allCourses[currentIndex].id);
        currentIndex = (currentIndex + 1) % allCourses.length;
      }, 2000); // Change card every 2 seconds

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [isPaused, courses, assignedCourses]);

  // Handle manual play toggle
  const handlePlayToggle = (courseId) => {
    setPlayingCourse(playingCourse === courseId ? null : courseId);
  };

  // Handle mouse enter - pause auto cycling
  const handleMouseEnter = () => {
    setIsPaused(true);
    setAutoHoveredCard(null);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Handle mouse leave - resume auto cycling
  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className={`scale-75 inline-block ${className}`}>
      {/* Device Frame */}
      <div
        className="relative bg-black rounded-[3rem] p-2 shadow-2xl shadow-black/50"
        style={{ width, height }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Screen */}
        <div className="w-full h-full bg-gray-50 rounded-[2.75rem] overflow-hidden relative flex flex-col">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-6 pt-4 pb-2 text-black font-semibold text-sm z-10">
            <div>9:41</div>
            <div className="flex items-center space-x-1">
              <div className="flex space-x-0.5">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-0.5 bg-gray-300 rounded-full ${
                      i === 0
                        ? "h-1"
                        : i === 1
                        ? "h-1.5"
                        : i === 2
                        ? "h-2"
                        : "h-2.5"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-1 text-xs">100%</span>
            </div>
          </div>

          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-2xl z-20 flex items-center justify-center space-x-2">
            <div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
            <div className="w-4 h-1.5 bg-gray-800 rounded-full"></div>
          </div>

          {/* App Header with Glassmorphism */}
          <div className=" px-4 pt-2 border-b border-gray-300 relative overflow-hidden">
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

            <div className="relative z-10 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <h1 className=" text font-medium">seaverse</h1>
              </div>

              <div className="flex items-center space-x-3">
                <button className="relative p-2.5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <BellIcon className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                    3
                  </span>
                </button>

                <button className="p-2.5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <SquaresExcludeIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-y-hidden">
            {/* Continue Learning Section */}
            <div className="px-4 my-1">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-900">Downloaded</h3>
              
              </div>

              <div className="space-y-4">
                {courses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    isPlaying={playingCourse === course.id}
                    isAutoHovered={autoHoveredCard === course.id}
                    onPlayToggle={() => handlePlayToggle(course.id)}
                  />
                ))}
              </div>
            </div>

            {/* Assigned Courses Section */}
            <div className="px-4 my-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-900">Assigned Courses</h3>
              </div>

              <div className="space-y-4">
                {assignedCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    isPlaying={playingCourse === course.id}
                    isAutoHovered={autoHoveredCard === course.id}
                    onPlayToggle={() => handlePlayToggle(course.id)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Navigation with Glassmorphism */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-gray-200/50 px-6 py-2 safe-area-pb">
            <div className="flex justify-around items-center">
              <NavItem
                icon={HomeIcon}
                label="Home"
                active={activeTab === "home"}
                onClick={() => setActiveTab("home")}
              />
              <NavItem
                icon={GraduationCap}
                label="Courses"
                active={activeTab === "courses"}
                onClick={() => setActiveTab("courses")}
              />
              <NavItem
                icon={DownloadIcon}
                label="Offline"
                active={activeTab === "offline"}
                onClick={() => setActiveTab("offline")}
              />
              <NavItem
                icon={UserIcon}
                label="Profile"
                active={activeTab === "profile"}
                onClick={() => setActiveTab("profile")}
              />
            </div>
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Course Card Component with Auto Hover Effect
const CourseCard = ({ course, isPlaying, isAutoHovered, onPlayToggle }) => {
  return (
    <div 
      className={`group bg-white rounded-2xl transition-all duration-500 overflow-hidden border border-gray-100 ${
        isAutoHovered 
          ? 'shadow-2xl -translate-y-2 scale-[1.02] ring-2 ring-purple-500/20' 
          : 'hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]'
      }`}
    >
      {/* Course Image with Gradient */}
      <div
        className={`relative h-28 bg-gradient-to-br ${course.gradient} overflow-hidden transition-all duration-500 ${
          isAutoHovered ? 'scale-105' : 'group-hover:scale-105'
        }`}
      >
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>

        {/* Animated border effect for auto-hovered card */}
        {isAutoHovered && (
          <div className="absolute inset-0 border-2 border-purple-400 rounded-lg animate-pulse"></div>
        )}

        {/* Play Button with Enhanced 3D Effect */}
        <button
          onClick={onPlayToggle}
          className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
            isAutoHovered ? 'scale-110' : 'group-hover:scale-105'
          }`}
        >
          <div className={`w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
            isAutoHovered 
              ? 'bg-white shadow-purple-500/30 ring-4 ring-purple-400/30' 
              : 'hover:bg-white hover:shadow-purple-500/20'
          }`}>
            {isPlaying ? (
              <PauseIcon className="w-5 h-5 text-purple-600" />
            ) : (
              <PlayIcon className="w-5 h-5 text-purple-600 ml-1" />
            )}
          </div>
        </button>

        {/* Shimmer effect for auto-hovered card */}
        {isAutoHovered && (
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        )}
      </div>

      {/* Course Content */}
      <div className="p-2">
        <h4 className={`font-semibold text-sm mb-2 line-clamp-2 transition-colors duration-300 ${
          isAutoHovered 
            ? 'text-purple-600' 
            : 'text-gray-900 group-hover:text-purple-600'
        }`}>
          {course.title}
        </h4>

        {/* Meta Information */}
        <div className="flex items-center space-x-4 mb-2 text-gray-500">
          <div className="flex items-center space-x-2">
            <ClockIcon className="w-4 h-4" />
            <span className="text-xs font-medium">{course.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <BookOpenIcon className="w-4 h-4" />
            <span className="text-xs font-medium">{course.lessons}</span>
          </div>
        </div>

        {/* Enhanced Progress Section */}
        <div className="flex items-center space-x-3">
          <div className="flex-1 bg-gray-200 rounded-full h-1 relative overflow-hidden">
            <div
              className={`h-1 rounded-full transition-all duration-700 ease-out relative ${
                isAutoHovered 
                  ? 'bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600 animate-pulse' 
                  : 'bg-gradient-to-r from-blue-500 to-purple-600'
              }`}
              style={{ width: `${course.progress}%` }}
            >
              {/* Enhanced glowing dot */}
              <div className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full -mr-1.5 transition-all duration-300 ${
                isAutoHovered 
                  ? 'bg-purple-600 shadow-lg shadow-purple-500/60 animate-ping' 
                  : 'bg-purple-600 shadow-lg shadow-purple-500/50'
              }`}></div>
            </div>
          </div>
          <span className={`text-xs font-bold min-w-[3rem] text-right transition-colors duration-300 ${
            isAutoHovered ? 'text-purple-700' : 'text-purple-600'
          }`}>
            {course.progress}%
          </span>
        </div>
      </div>
    </div>
  );
};

// Navigation Item Component
const NavItem = ({ icon: Icon, label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center space-y-1 py-2 px-2 transition-all duration-200 ${
        active
          ? "text-purple-600 scale-110"
          : "text-gray-400 hover:text-gray-600 hover:scale-105"
      }`}
    >
      <Icon className={`w-4 h-4 ${active ? "drop-shadow-sm" : ""}`} />
    </button>
  );
};

export default LearningAppMockup;
