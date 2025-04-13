import Image from "next/image";
import Link from "next/link";

export default function DiscordCard() {
  return (
    <div
      className="text-center shadow-lg rounded-2xl w-[90%] sm:w-[80%] md:w-[70%] h-auto min-h-[450px] flex flex-col justify-center my-8 mx-auto py-12 px-4 relative overflow-hidden transition-all duration-500 hover:shadow-xl"
      style={{
        backgroundImage:
          "url('/discordBgshape.png'), url('/discordBgshapecolor.png')",
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
        backgroundRepeat: "no-repeat, no-repeat",
      }}>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#5865F2]/20 rounded-full filter blur-3xl transform transition-transform duration-700 animate-pulse"></div>

      <div className="relative mb-6 transition-transform duration-300 hover:scale-110 hover:-rotate-6">
        <Image
          src="/discordLogo.png"
          alt="Discord logo"
          width={70}
          height={70}
          className="mx-auto drop-shadow-lg"
        />
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-4 transition-all duration-300 text-white hover:text-[#5865F2] bg-clip-text hover:bg-gradient-to-r from-[#5865F2] to-[#879eff]">
        Join the community
      </h2>

      <p className="text-gray-300 mb-6 max-w-[485px] font-normal text-[16px] mx-auto transition-all duration-300 hover:text-white">
        Join our 400,000+ person community and contribute to a more private and
        decentralized internet. Start for free.
      </p>

      <div className="mx-auto">
        <Link
          href="https://discord.gg/your-discord-link"
          className="inline-block bg-[#5865F2] text-white px-8 py-4 rounded-full font-medium 
                    transition-all duration-300 transform 
                    hover:bg-[#4752c4] hover:shadow-lg hover:shadow-[#5865F2]/30 
                    active:scale-95 
                    focus:outline-none focus:ring-2 focus:ring-[#5865F2]/50
                    border border-transparent hover:border-[#879eff]">
          <span className="flex items-center justify-center">
            Join Now
            <svg
              className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        </Link>
      </div>

      <div className="mt-8 text-gray-400 text-sm animate-pulse">
        <span className="font-medium text-[#5865F2]">400,000+</span> members and
        growing
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-12 opacity-20 bg-gradient-to-r from-[#5865F2]/0 via-[#5865F2]/30 to-[#5865F2]/0"></div>
    </div>
  );
}
