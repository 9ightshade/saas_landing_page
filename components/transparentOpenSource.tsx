import Image from "next/image";
import Link from "next/link";

export default function TransparentOpenSource() {
  return (
    <div
      className="bg-[#09102D] border border-[#282D45] max-w-[1222px] h-[903px] mx-auto w-[80%] rounded  py-16 px-4"
      style={{
        backgroundImage: "url('/opensourcebg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="max-w-7xl px-4 mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-6  ">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="font-bold text-transparent bg-clip-text text-5xl bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] mb-4">
              Transparent, audited,
              <br />
              <span className="text-[#9A9EA8]">&open source</span>
            </h2>
            <p className="text-[#9A9EA8] mb-8 max-w-md">
              Lorem ipsum dolor sit amet consectetur. Nulla quisque scelerisque
              eget quis. Eu amet amet eu interdum.
            </p>
            <div>
              <Link
                href="/pricing"
                className="bg-[#15193485] hover:bg-[#15193485] text-white rounded-[36px] py-4 px-6 border border-[#282D45] transition duration-300">
                Browse all features
              </Link>
            </div>
          </div>

          {/* Right Column - Code Preview */}
          <div>
            <Image src="/code.png" alt="#" width={527} height={400} />
          </div>
        </div>
        {/* bottom content */}
        <div className="bottom-content">
          {/* Product Showcase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Mail Card */}
            <div className="bg-[#060B27] rounded-lg p-6 border border-[#282D45]">
              <h3 className="text-white text-lg font-medium mb-2">
                Product Mail
              </h3>
              <p className="text-[#8F9BB7] text-sm mb-6">
                Consectetur eque nec nunc facilisis tellus tincidunt. Malesuada
                maecenas ac bibendum consectetur.
              </p>

              {/* Email UI Example */}
              <div className="bg-[#0C0A1D] rounded-md p-3 text-xs text-[#9A9EA8]">
                <Image
                  src="/productmail.png"
                  alt="#"
                  width={487}
                  height={211}
                />
              </div>
            </div>

            {/* Product UI Card */}
            <div className="bg-[#060B27] rounded-lg p-6 border border-[#282D45]">
              <h3 className="text-white text-lg font-medium mb-2">
                Product UI
              </h3>
              <p className="text-[#8F9BB7] text-sm mb-6">
                Consectetur eque nec nunc facilisis tellus tincidunt. Malesuada
                maecenas ac bibendum consectetur.
              </p>

              {/* UI Interface Example */}
              <div className="bg-[#282D45]">
                <Image
                  src="/productui.png"
                  alt="#"
                  width={417}
                  height={211}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
