"use client";
// src/components/Navigation.tsx
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Navigation links based on the design
  const navLinks = [
    { name: "Platform", path: "/platform" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed w-full z-50 transition-all duration-300  'bg-transparent">
      <div className="max-w-[1520px] mx-auto px-4 lg:px-[3.81rem]">
        <div className="flex">
          {/* Logo */}
          <Link href="/" className=" z-10 mt-[2.69rem]">
            <div className="h-12 w-32 relative flex items-center">
              {/* ICS Logo SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="27"
                viewBox="0 0 90 27"
                fill="none"
                aria-label="ICS Logo"
              >
                <g clipPath="url(#clip0_78_4373)">
                  <path
                    d="M6.30681 4.94104L0.000244141 0.00168228V26.2791H6.30681V4.94104Z"
                    fill="white"
                  />
                  <path
                    d="M46.1458 21.2739L52.073 26.2791H27.5738C27.5738 26.2791 14.2046 25.9497 13.1509 14.0295C13.1509 14.0295 12.2289 1.91157 27.1787 0.00168228C46.8044 0.00168228 46.8044 0.00168228 46.8044 0.00168228V5.33619H28.6275C28.6275 5.33619 20.2636 6.38992 20.2636 13.766C21.1856 21.0104 29.0227 21.208 31.7887 21.2739C32.3156 21.2739 46.1458 21.2739 46.1458 21.2739Z"
                    fill="white"
                  />
                  <path
                    d="M87.8325 0.00168228V5.40204H65.3653C65.3653 5.40204 62.4748 5.33619 62.4748 8.23392C62.4748 10.539 64.9055 10.6707 65.2996 10.6707C65.6938 10.6707 82.6427 10.6707 82.6427 10.6707C82.6427 10.6707 90.0004 11.1976 90.0004 18.3761C90.0004 25.5546 83.1026 26.2791 82.5113 26.2791C81.9201 26.2791 56.4967 26.2791 56.4967 26.2791L62.4091 21.2739H80.2777C80.2777 21.2739 83.5624 21.3397 83.5624 18.442C83.5624 15.5442 80.0807 15.61 80.0807 15.61H63.723C63.723 15.61 56.2339 14.9515 56.2339 8.10221C56.2339 1.25298 62.6719 0.00168228 65.1026 0.00168228C67.5332 0.00168228 87.8325 0.00168228 87.8325 0.00168228Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_78_4373">
                    <rect width="90" height="26.2774" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-11 mt-[3.2rem] ml-[25rem]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`font-bold text-white transition-colors text-sm ${
                  pathname === link.path
                    ? "border-b-2 border-white"
                    : "hover:text-white/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden z-10 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
        fixed inset-0 bg-[#1A2E6E] z-0 transform transition-transform duration-300 lg:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 pt-16">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-xl font-medium text-white ${
                pathname === link.path ? "border-b-2 border-white" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
