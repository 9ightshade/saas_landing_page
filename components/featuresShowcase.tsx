"use client";
import Image from "next/image";
import Link from "next/link";

export default function FeaturesShowcase() {
  const collections = [
    {
      id: 1,
      title: "Email,",
      src: "/email.png",
    },
    {
      id: 2,
      title: "Events,",
      src: "/events.png",
    },
    {
      id: 3,
      title: "Files,",
      src: "/file.png",
    },
    {
      id: 4,
      title: "Documents",
      src: "/document.png",
    },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 max-w-full overflow-hidden">
      <div className="w-[90%] sm:w-[85%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto flex flex-col gap-6 sm:gap-10 lg:gap-14">
        {/* Showcase Title */}
        <div className="flex flex-col gap-3 sm:gap-5 mx-auto text-center">
          <h2 className="font-bold text-transparent bg-clip-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-b from-[#F6F6F7] to-[#7E808F]">
            Essential apps that protect your
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className="flex items-center gap-1 py-1 transition-transform hover:scale-105 duration-300">
                <Image
                  src={collection.src}
                  alt={collection.title}
                  width={40}
                  height={40}
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 object-contain"
                />
                <p className="font-bold text-transparent bg-clip-text text-xl sm:text-2xl md:text-3xl lg:text-5xl bg-gradient-to-b from-[#F6F6F7] to-[#7E808F]">
                  {collection.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Showcase Cards */}
        <div className="w-full flex flex-col gap-6 sm:gap-8 lg:gap-10">
          {/* Top Card */}
          <div
            className="w-full rounded-xl flex flex-col md:flex-row items-center p-6 sm:p-8 transition-transform duration-300 hover:scale-[1.01] focus-within:scale-[1.01]"
            style={{
              backgroundImage:
                "url('/fsbgShape.png'), url('/fsbgShapecolor.png')",
              backgroundSize: "cover, cover",
              backgroundPosition: "center, center",
              backgroundRepeat: "no-repeat, no-repeat",
            }}
            aria-label="End-to-end encrypted inbox and messages">
            <div className="w-full md:w-[45%] flex flex-col gap-4 sm:gap-6 lg:gap-9 mb-6 md:mb-0 order-2 md:order-1">
              <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl text-[#F6F6F7]">
                End-to-end encrypted inbox and messages
              </h2>
              <p className="font-normal text-xs sm:text-sm text-[#8F9BB7] max-w-md">
                Rorem ipsum dolor sit amet consectetur. Proin dignissim tortor
                mauris viverra sed volutpat mauris. Amet nisi amet commodo
                adipiscing ut imperdiet nunc.
              </p>
              <Link
                href="/learn-more"
                className="bg-[#15193485] text-center border text-xs font-medium text-white border-[#282D45] max-w-[133px] rounded-full py-3 px-4 sm:py-4 sm:px-6 hover:bg-[#1e2242] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#8F9BB7] focus:ring-opacity-50">
                Learn More
              </Link>
            </div>
            <div className="w-full md:w-[55%] flex justify-center items-center order-1 md:order-2">
              <div>
                <Image
                  src="/fsimagewrapper.png"
                  alt="End-to-end encrypted inbox"
                  width={515}
                  height={373}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
          {/* Bottom Cards */}
          <div className="w-full flex flex-col lg:flex-row gap-6">
            {/* Mobile App Card */}
            <div
              className="w-full lg:w-[40%] rounded-xl border border-[#282D45] p-6 sm:p-8 lg:py-12 lg:px-10 flex flex-col justify-between bg-[#0E1330] gap-6 transition-transform duration-300 hover:scale-[1.01] focus-within:scale-[1.01]"
              style={{
                backgroundImage:
                  "url('/mobilebgshape.png'), url('/mobilebgshape1.png')",
                backgroundSize: "cover, cover",
                backgroundPosition: "center, center",
                backgroundRepeat: "no-repeat, no-repeat",
              }}
              aria-label="Mobile applications">
              <div className="relative flex justify-center">
                <div>
                  <Image
                    src="/mobileimage.png"
                    alt="Mobile application"
                    width={271}
                    height={306}
                    className="w-full h-auto max-w-xs mx-auto object-contain"
                  />
                  <div className="absolute bottom-0 bg-gradient-to-t from-[#1E1C45] to-[#0B0B21] opacity-95 z-0 h-8"></div>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:gap-6">
                <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl text-[#F6F6F7]">
                  Mobile applications
                </h2>
                <p className="font-normal text-xs sm:text-sm text-[#8F9BB7]">
                  Prem ipsum dolor sit amet consectetur. Viverra sed dignissim
                  risus aliquet condimentum. Vulputate varius feugiat egestas
                  congue
                </p>
              </div>
            </div>

            {/* Upload Card */}
            <div
              className="w-full lg:w-[60%] rounded-xl border flex flex-col justify-between p-6 sm:p-8 lg:p-10 gap-4 border-[#282D45] transition-transform duration-300 hover:scale-[1.01] focus-within:scale-[1.01]"
              style={{
                backgroundImage: "url('/uploadbg.png'), url('/uploadbg2.png')",
                backgroundSize: "cover, cover",
                backgroundPosition: "center, center",
                backgroundRepeat: "no-repeat, no-repeat",
              }}
              aria-label="Upload, share, and preview any file">
              <div className="flex flex-col gap-3 sm:gap-4">
                <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl text-[#F6F6F7]">
                  Upload, share, and preview any file
                </h2>
                <p className="font-normal text-xs sm:text-sm text-[#8F9BB7] max-w-lg">
                  Tellus et adipiscing sit sit mauris pharetra bibendum. Ligula
                  massa netus nulla ultricies purus.
                </p>
              </div>
              <div className="mt-4 flex justify-center">
                <div>
                  <Image
                    src="/uploadimagewrapper.png"
                    alt="File upload interface"
                    height={393}
                    width={580}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* CTA section */}
          <div className="flex flex-col sm:flex-row justify-center w-full sm:w-auto md:w-[80%] lg:w-[60%] xl:w-[50%] gap-4 sm:gap-6 md:gap-10 mx-auto">
            <Link
              href="/demo"
              className="bg-[#7214FF] hover:bg-[#6010db] text-white text-center py-3 sm:py-4 px-6 rounded-full transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#7214FF] focus:ring-opacity-50">
              Get Started
            </Link>
            <Link
              href="/pricing"
              className="bg-[#15193485] hover:bg-[#1d2344] text-white text-center rounded-full py-3 sm:py-4 px-6 border border-[#282D45] transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#282D45] focus:ring-opacity-50">
              Browse all features
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
