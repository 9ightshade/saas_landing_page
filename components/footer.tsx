import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";
export default function Footer() {
  return (
    <footer
      className=" text-white py-12 px-4 md:px-12 bg-[#060B27] "
      style={{
        backgroundImage: "url('/footerBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}>
      <div className="container mx-auto w-[80%] max-w-[1224px]">
        {/* Top section with newsletter and links */}
        <div className="flex flex-col md:flex-row gap-36 justify-between mb-12">
          {/* Newsletter subscription */}
          <div className="mb-8 md:mb-0">
            <div className="mb-4">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo2.png"
                  alt="Premium SaaS Logo"
                  width={100}
                  height={40}
                  className=" object-contain"
                />
              </Link>
            </div>
            <div className="bg-[#0E1330] border border-[#282D45] p-6 rounded-lg max-w-sm">
              <h3 className="text-xl font-bold mb-6 text-[#F6F6F7] ">
                Subscribe to our newsletter
              </h3>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-navy-700 border border-[#282D45] rounded-[50px] focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-[#7214FF] hover:bg-purple-700 text-white py-3 px-4 rounded-[36px] transition duration-300">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Pages Column */}
            <div>
              <h3 className="text-gray-400 text-lg mb-4">Pages</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/home"
                    className="hover:text-purple-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-purple-400 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-purple-400 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-purple-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/post"
                    className="hover:text-purple-400 transition-colors">
                    Blog post
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="hover:text-purple-400 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing/single"
                    className="hover:text-purple-400 transition-colors">
                    Pricing single
                  </Link>
                </li>
              </ul>
            </div>

            {/* Features Column */}
            <div>
              <h3 className="text-gray-400 text-lg mb-4">Features</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-purple-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers/single"
                    className="hover:text-purple-400 transition-colors">
                    Careers single
                  </Link>
                </li>
                <li>
                  <Link
                    href="/request-demo"
                    className="hover:text-purple-400 transition-colors">
                    Request a demo
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className="hover:text-purple-400 transition-colors">
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/signup"
                    className="hover:text-purple-400 transition-colors">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>

            {/* Utility Pages Column */}
            <div>
              <h3 className="text-gray-400 text-lg mb-4">Utility Pages</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/style-guide"
                    className="hover:text-purple-400 transition-colors">
                    Style guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/password-protected"
                    className="hover:text-purple-400 transition-colors">
                    Password protected
                  </Link>
                </li>
                <li>
                  <Link
                    href="/404"
                    className="hover:text-purple-400 transition-colors">
                    404 Not found
                  </Link>
                </li>
                <li>
                  <Link
                    href="/licenses"
                    className="hover:text-purple-400 transition-colors">
                    Licenses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/changelog"
                    className="hover:text-purple-400 transition-colors">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright and social links */}
        <div className="pt-8 border-t border-navy-700 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-gray-400 text-sm">
            Copyright © Product | Designed by{" "}
            <a href="#" className="text-white hover:text-purple-400">
              Webocean LTD
            </a>{" "}
            - Powered by{" "}
            <a href="#" className="text-white hover:text-purple-400">
              Webflow
            </a>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-[#060B27] p-2 rounded-[8px] border border-[#282D45] hover:bg-[#7214FF] transition-colors">
              <FaFacebookF className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="bg-[#060B27] p-2 rounded-[8px] border border-[#282D45] hover:bg-[#7214FF] transition-colors">
              <FaTwitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="bg-[#060B27] p-2 rounded-[8px] border border-[#282D45] hover:bg-[#7214FF] transition-colors">
              <FaLinkedinIn className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="bg-[#060B27] p-2 border border-[#282D45] rounded-[8px] hover:bg-[#7214FF] transition-colors">
              <FaInstagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
