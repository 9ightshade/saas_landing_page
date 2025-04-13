import Image from "next/image";
import Link from "next/link";

export default function TransparentOpenSource() {
  return (
    <div
      className="bg-[#09102D] border border-[#282D45] max-w-[1222px] mx-auto w-[90%] rounded-xl py-16 px-4 lg:px-10"
      style={{
        backgroundImage: "url('/opensourcebg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <h2 className="font-bold text-transparent bg-clip-text text-4xl sm:text-5xl bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] mb-4 leading-snug">
              Transparent, audited,
              <br />
              <span className="text-[#9A9EA8]">&open source</span>
            </h2>
            <p className="text-[#9A9EA8] mb-8 max-w-md text-base">
              Lorem ipsum dolor sit amet consectetur. Nulla quisque scelerisque
              eget quis. Eu amet amet eu interdum.
            </p>
            <Link
              href="/pricing"
              className="inline-block max-w-[40%] text-center bg-[#15193485] text-white rounded-full py-4 px-6 border border-[#282D45] hover:bg-[#1d2339] transition-all duration-300 shadow hover:shadow-lg"
            >
              Browse all features
            </Link>
          </div>

          {/* Right Column */}
          <div className="relative w-full h-[400px]">
            <Image
              src="/code.png"
              alt="Code preview"
              layout="fill"
              objectFit="contain"
              className="rounded-md"
            />
          </div>
        </div>

        {/* Bottom Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Mail Card */}
          <div className="bg-[#060B27] rounded-lg p-6 border border-[#282D45] transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
            <h3 className="text-white text-lg font-semibold mb-2">
              Product Mail
            </h3>
            <p className="text-[#8F9BB7] text-sm mb-4">
              Consectetur eque nec nunc facilisis tellus tincidunt. Malesuada
              maecenas ac bibendum consectetur.
            </p>
            <div className="bg-[#0C0A1D] rounded-md p-3">
              <Image
                src="/productmail.png"
                alt="Product Mail UI"
                width={487}
                height={211}
                className="rounded"
              />
            </div>
          </div>

          {/* Product UI Card */}
          <div className="bg-[#060B27] rounded-lg p-6 border border-[#282D45] transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
            <h3 className="text-white text-lg font-semibold mb-2">
              Product UI
            </h3>
            <p className="text-[#8F9BB7] text-sm mb-4">
              Consectetur eque nec nunc facilisis tellus tincidunt. Malesuada
              maecenas ac bibendum consectetur.
            </p>
            <div className="bg-[#0C0A1D] rounded-md p-3">
              <Image
                src="/productui.png"
                alt="Product UI"
                width={417}
                height={211}
                className="rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
