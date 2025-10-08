"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const ModernHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="text-[#1E3A76] bg-gray-50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="text-xl md:text-2xl heading font-semibold tracking-tight">
              Seaverse
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <Link
              href="/"
              className="px-3 lg:px-4 py-2 font-medium rounded-xl hover:bg-[#1E3A76] hover:text-white transition-all duration-200 text-sm lg:text-base"
            >
              Home
            </Link>
            <Link
              href="/platform"
              className="px-3 lg:px-4 py-2 font-medium rounded-xl hover:bg-[#1E3A76] hover:text-white transition-all duration-200 text-sm lg:text-base"
            >
              Platform
            </Link>
            <Link
              href="/contact"
              className="px-3 lg:px-4 py-2 font-medium rounded-xl hover:bg-[#1E3A76] hover:text-white transition-all duration-200 text-sm lg:text-base"
            >
              Contact Us
            </Link>

            <button className="ml-4 px-4 lg:px-6 py-2 lg:py-2.5 text-white bg-[#1E3A76] text-sm font-medium hover:shadow-xl hover:bg-[#162d5a] transition-all cursor-pointer rounded-lg duration-200 active:scale-95">
              Book a Demo
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#1E3A76]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1E3A76]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 pb-4"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="px-4 py-3 font-medium rounded-lg hover:bg-[#1E3A76] hover:text-white transition-all duration-200 text-left"
            >
              Home
            </Link>
            <Link
              href="/platform"
              onClick={closeMobileMenu}
              className="px-4 py-3 font-medium rounded-lg hover:bg-[#1E3A76] hover:text-white transition-all duration-200 text-left"
            >
              Platform
            </Link>
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="px-4 py-3 font-medium rounded-lg hover:bg-[#1E3A76] hover:text-white transition-all duration-200 text-left"
            >
              Contact Us
            </Link>
            <button
              onClick={closeMobileMenu}
              className="mt-4 mx-4 px-6 py-3 text-white bg-[#1E3A76] text-sm font-medium hover:shadow-lg hover:bg-[#162d5a] transition-all cursor-pointer rounded-lg duration-200 active:scale-95"
            >
              Book a Demo
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}
    </header>
  );
};

export default ModernHeader;
