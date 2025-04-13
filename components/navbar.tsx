"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav className="bg-[#151934]/80 backdrop-blur-lg text-white sticky top-0 z-50 shadow-md transition-all">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo2.png"
            alt="Premium SaaS Logo"
            width={100}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8 text-gray-300 text-base font-medium">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="relative group hover:text-white transition-colors duration-300">
                  {link.label}
                  <span className="absolute left-0 bottom-[-4px] h-[2px] bg-purple-500 w-0 group-hover:w-full transition-all duration-300 ease-in-out" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/demo"
            className="bg-[#7214FF] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5a0fd6] hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7214FF]">
            Get a Demo
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none transition-all duration-300"
            aria-label={isOpen ? "Close menu" : "Open menu"}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden bg-[#151934] ${
          isOpen ? "max-h-[400px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}>
        <ul className="container mx-auto px-4 sm:px-6 flex flex-col gap-4 text-gray-300 text-base font-medium animate-fade-in-down">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="block py-2 px-2 hover:text-white hover:translate-x-1 transition-all duration-300"
                onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/demo"
              className="mt-2 block bg-[#7214FF] text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-[#5a0fd6] transition-all duration-300"
              onClick={() => setIsOpen(false)}>
              Get a Demo
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
