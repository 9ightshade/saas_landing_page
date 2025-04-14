"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function TransparentOpenSource() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle component mounting effects
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`bg-[#09102D] border border-[#282D45] max-w-[1222px] mx-auto w-full sm:w-[90%] rounded-xl py-8 sm:py-12 md:py-16 px-4 lg:px-10 transition-opacity duration-500 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: "url('/opensourcebg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 mb-8 md:mb-12">
          {/* Left Column */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] mb-3 md:mb-4 leading-tight">
              Transparent, audited,
              <br className="hidden sm:block" />
              <span className="text-[#9A9EA8]">&open source</span>
            </h2>
            <p className="text-[#9A9EA8] mb-6 md:mb-8 max-w-md text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur. Nulla quisque scelerisque
              eget quis. Eu amet amet eu interdum.
            </p>
            <Link
              href="/pricing"
              className="inline-block md:max-w-[50%]  w-full sm:w-auto text-center bg-[#15193485] text-white rounded-full py-3 px-6 border border-[#282D45] hover:bg-[#1d2339] transition-all duration-300 shadow hover:shadow-lg">
              Browse all features
            </Link>
          </div>
          {/* Right Column */}
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] order-1 lg:order-2 mb-6 lg:mb-0">
            <Image
              src="/code.png"
              alt="Code preview"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-md object-contain"
              loading="eager"
              onLoad={() => setIsLoaded(true)}
            />
          </div>
        </div>
        {/* Bottom Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Product Mail Card */}
          <div className="bg-[#060B27] rounded-lg p-4 sm:p-6 border border-[#282D45] transition-all duration-300 hover:scale-[1.01] hover:shadow-lg">
            <h3 className="text-white text-base sm:text-lg font-semibold mb-1 sm:mb-2">
              Product Mail
            </h3>
            <p className="text-[#8F9BB7] text-xs sm:text-sm mb-3 sm:mb-4">
              Consectetur eque nec nunc facilisis tellus tincidunt. Malesuada
              maecenas ac bibendum consectetur.
            </p>
            <div className="bg-[#0C0A1D] rounded-md p-2 sm:p-3">
              <div className="relative w-full h-[150px] sm:h-[180px] md:h-[211px]">
                <Image
                  src="/productmail.png"
                  alt="Product Mail UI"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          {/* Product UI Card */}
          <div className="bg-[#060B27] rounded-lg p-4 sm:p-6 border border-[#282D45] transition-all duration-300 hover:scale-[1.01] hover:shadow-lg">
            <h3 className="text-white text-base sm:text-lg font-semibold mb-1 sm:mb-2">
              Product UI
            </h3>
            <p className="text-[#8F9BB7] text-xs sm:text-sm mb-3 sm:mb-4">
              Consectetur eque nec nunc facilisis tellus tincidunt. Malesuada
              maecenas ac bibendum consectetur.
            </p>
            <div className="bg-[#0C0A1D] rounded-md p-2 sm:p-3">
              <div className="relative w-full h-[150px] sm:h-[180px] md:h-[211px]">
                <Image
                  src="/productui.png"
                  alt="Product UI"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
