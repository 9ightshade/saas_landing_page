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
    <nav className="bg-[#151934] text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Premium SaaS Logo"
              width={100}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-gray-300 text-lg font-normal">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="relative group hover:text-white transition-colors duration-300">
                  {link.label}
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden lg:block">
          <Link
            href="/demo"
            className="bg-[#7214FF] text-white px-6 py-3 rounded-full font-medium hover:bg-[#5a0fd6] hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7214FF]">
            Get a Demo
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}>
        <ul className="container mx-auto px-4 sm:px-6 py-6 flex flex-col gap-4 text-gray-300 text-lg font-normal">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="block py-2 hover:text-white transition-colors duration-300"
                onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/demo"
              className="block bg-[#7214FF] text-white px-6 py-3 rounded-full font-medium text-center hover:bg-[#5a0fd6] transition-all duration-300"
              onClick={() => setIsOpen(false)}>
              Get a Demo
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
