"use client";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ModernHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTop, setIsTop] = useState(true); // track if page is at top
  const pathname = usePathname();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsTop(window.scrollY === 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Header background
  const headerBgClass =
    isTop && pathname === "/" ? "bg-transparent" : "bg-gray-50 shadow-md";

  // Text color
  const linkTextClass =
    isTop && pathname === "/" ? "text-white" : "text-[#1E3A76]";
  const buttonBgClass =
    isTop && pathname === "/"
      ? "bg-white text-[#1E3A76]"
      : "bg-[#1E3A76] text-white";
  const buttonHoverClass =
    isTop && pathname === "/" ? "hover:bg-gray-100" : "hover:bg-[#162d5a]";

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${headerBgClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link
              href="/"
              className={`text-xl md:text-2xl heading font-semibold tracking-tight transition-colors duration-300 ${
                isTop && pathname === "/" ? "text-white" : "text-[#1E3A76]"
              }`}
            >
              Seaverse
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <Link
              href="/"
              className={`px-3 lg:px-4 py-2 font-medium rounded-xl transition-all duration-200 text-sm lg:text-base ${linkTextClass} hover:bg-[#1E3A76] hover:text-white`}
            >
              Home
            </Link>
            <Link
              href="/product"
              className={`px-3 lg:px-4 py-2 font-medium rounded-xl transition-all duration-200 text-sm lg:text-base ${linkTextClass} hover:bg-[#1E3A76] hover:text-white`}
            >
              Product
            </Link>
            <Link
              href="/content"
              className={`px-3 lg:px-4 py-2 font-medium rounded-xl transition-all duration-200 text-sm lg:text-base ${linkTextClass} hover:bg-[#1E3A76] hover:text-white`}
            >
              Content
            </Link>
            <Link
              href="/platform"
              className={`px-3 lg:px-4 py-2 font-medium rounded-xl transition-all duration-200 text-sm lg:text-base ${linkTextClass} hover:bg-[#1E3A76] hover:text-white`}
            >
              Platform
            </Link>
            <Link
              href="/contact"
              className={`px-3 lg:px-4 py-2 font-medium rounded-xl transition-all duration-200 text-sm lg:text-base ${linkTextClass} hover:bg-[#1E3A76] hover:text-white`}
            >
              Contact Us
            </Link>

            <button
              className={`ml-4 px-4 lg:px-6 py-2 lg:py-2.5 font-medium rounded-lg transition-all duration-200 cursor-pointer active:scale-95 ${buttonBgClass} ${buttonHoverClass}`}
            >
              Book a Demo
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              isTop && pathname === "/"
                ? "text-white hover:bg-white/20"
                : "text-[#1E3A76] hover:bg-gray-200"
            }`}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
          } bg-white z-50 relative`}
        >
          <nav className="flex flex-col space-y-2 p-4 border-t border-gray-200">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`px-4 py-3 font-medium rounded-lg transition-all text-[#1E3A76] duration-200 text-left hover:bg-[#1E3A76] hover:text-white`}
            >
              Home
            </Link>
            <Link
              href="/product"
              onClick={closeMobileMenu}
              className={`px-4 py-3 font-medium rounded-lg transition-all text-[#1E3A76] duration-200 text-left hover:bg-[#1E3A76] hover:text-white`}
            >
              Product
            </Link>
            <Link
              href="/content"
              onClick={closeMobileMenu}
              className={`px-4 py-3 font-medium rounded-lg transition-all text-[#1E3A76] duration-200 text-left hover:bg-[#1E3A76] hover:text-white`}
            >
              Content
            </Link>
            <Link
              href="/platform"
              onClick={closeMobileMenu}
              className={`px-4 py-3 font-medium rounded-lg transition-all text-[#1E3A76] duration-200 text-left  hover:bg-[#1E3A76] hover:text-white`}
            >
              Platform
            </Link>
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className={`px-4 py-3 font-medium rounded-lg transition-all text-[#1E3A76] duration-200 text-left hover:bg-[#1E3A76] hover:text-white`}
            >
              Contact Us
            </Link>
            <button
              onClick={closeMobileMenu}
              className={`mt-4 mx-4 px-6 py-3 font-medium rounded-lg transition-all duration-200 cursor-pointer active:scale-95 ${buttonBgClass} ${buttonHoverClass}`}
            >
              Book a Demo
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/25 z-40 md:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}
    </header>
  );
};

export default ModernHeader;
