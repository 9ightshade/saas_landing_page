import Link from "next/link";
import Image from "next/image";
export default function CrmDashboard() {
  return (
    <div
      style={{
        backgroundImage: "url('/herobgcolor.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[933px] w-full">
      <div className=" flex flex-col gap-7 justify-center text-center max-w-[70%] mx-auto h-[793px] ">
        <h1 className="font-bold text-transparent bg-clip-text text-center text-5xl bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] ">
          A CRM dashboard for engineering teams
        </h1>
        <p className="max-w-[800px] font-normal text-[18px] text-[#8F9BB7] ">
          Rorem ipsum dolor sit amet consectetur. Gravida convallis orci
          ultrices non. Ultricies tempor at ut cursus mi. Aliquam sed amet vitae
          orci ac penatibus consectetur.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-80 mx-auto ">
          <Link
            href="/demo"
            className="bg-[#7214FF] hover:bg-[#7214FF] text-white py-3 px-6 rounded-full transition duration-300 ">
            Get a demo
          </Link>
          <Link
            href="/pricing"
            className="bg-[#15193485] hover:bg-[#15193485] text-white py-3 px-6 rounded-full border border-[#282D45] transition duration-300">
            View pricing
          </Link>
        </div>

        <div>
          <Image
            src="/heroimage.png"
            alt="hero image"
            height={500}
            width={700}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};