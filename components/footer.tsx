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
      className="text-white py-12 px-4 md:px-12 bg-[#060B27]"
      style={{
        backgroundImage: "url('/footerBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}>
      <div className="container mx-auto w-full max-w-[1224px]">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-16 xl:gap-36 justify-between mb-12">
          {/* Newsletter */}
          <div className="mb-8 md:mb-0 w-full max-w-sm">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo2.png"
                alt="Premium SaaS Logo"
                width={100}
                height={40}
                className="object-contain"
              />
            </Link>
            <div className="bg-[#0E1330] border border-[#282D45] p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-purple-800/30">
              <h3 className="text-xl font-bold mb-6 text-[#F6F6F7]">
                Subscribe to our newsletter
              </h3>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-navy-700 border border-[#282D45] rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-[#7214FF] hover:bg-purple-700 text-white py-3 px-4 rounded-full transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full">
            {/* Pages */}
            <div>
              <h3 className="text-gray-400 text-lg mb-4">Pages</h3>
              <ul className="space-y-3">
                {[
                  ["Home", "/home"],
                  ["About", "/about"],
                  ["Contact", "/contact"],
                  ["Blog", "/blog"],
                  ["Blog post", "/blog/post"],
                  ["Pricing", "/pricing"],
                  ["Pricing single", "/pricing/single"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="hover:text-purple-400 transition-colors duration-300">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-gray-400 text-lg mb-4">Features</h3>
              <ul className="space-y-3">
                {[
                  ["Careers", "/careers"],
                  ["Careers single", "/careers/single"],
                  ["Request a demo", "/request-demo"],
                  ["Login", "/login"],
                  ["Sign Up", "/signup"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="hover:text-purple-400 transition-colors duration-300">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Utility Pages */}
            <div>
              <h3 className="text-gray-400 text-lg mb-4">Utility Pages</h3>
              <ul className="space-y-3">
                {[
                  ["Style guide", "/style-guide"],
                  ["Password protected", "/password-protected"],
                  ["404 Not found", "/404"],
                  ["Licenses", "/licenses"],
                  ["Changelog", "/changelog"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="hover:text-purple-400 transition-colors duration-300">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-navy-700 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-sm text-center md:text-left">
            © Product | Designed by{" "}
            <a
              href="#"
              className="text-white hover:text-purple-400 transition-colors duration-300">
              Webocean LTD
            </a>{" "}
            - Powered by{" "}
            <a
              href="#"
              className="text-white hover:text-purple-400 transition-colors duration-300">
              Webflow
            </a>
          </div>
          <div className="flex space-x-4">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-[#060B27] p-2 rounded-lg border border-[#282D45] hover:bg-[#7214FF] transition-all duration-300 transform hover:scale-110 shadow-md">
                  <Icon className="h-5 w-5 text-white" />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
