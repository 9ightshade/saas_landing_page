import Image from "next/image";
import Link from "next/link";
export default function DiscordCard() {
  return (
    <div className=" text-center shadow-lg rounded-lg w-[70%] h-[450px] flex flex-col justify-center my-5 mx-auto "
    style={{
        backgroundImage: "url('/discordBgshape.png'), url('/discordBgshapecolor.png')",
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      <Image src="/discordLogo.png" alt="discord logo" width={70} height={70} className="mx-auto"/>
      <h2 className="text-[40px] font-bold mb-4">Join the community</h2>
      <p className="text-gray-300 mb-4 max-w-[485px] font-normal text-[16px] mx-auto ">
      Join our 400,000+ person community and contribute to a more private and decentralized internet. Start for free.
      </p>
      <Link
        href="https://discord.gg/your-discord-link"
        className="inline-block bg-[#5865F2] text-white px-6 max-w-1/2 mx-auto  hover:bg-[#5865F2]  text-[16px] font-medium py-4  rounded-4xl  transition duration-300">
        Join Now
      </Link>
    </div>
  );
}
