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
      className="min-h-[933px] w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#070B27] opacity-30"></div>
      
      <div className="relative flex flex-col gap-5 md:gap-7 justify-center text-center max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto py-16 md:py-24 h-full">
        <h1 className="font-bold text-transparent bg-clip-text text-center text-3xl sm:text-4xl md:text-5xl bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] transition-all duration-700 transform hover:scale-105">
          A CRM dashboard for engineering teams
        </h1>
        
        <p className="max-w-[800px] mx-auto font-normal text-base sm:text-lg text-[#8F9BB7] transition-all duration-500 hover:text-[#A6B2D0]">
          Rorem ipsum dolor sit amet consectetur. Gravida convallis orci
          ultrices non. Ultricies tempor at ut cursus mi. Aliquam sed amet vitae
          orci ac penatibus consectetur.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xs sm:max-w-md mx-auto mt-2 md:mt-4">
          <Link
            href="/demo"
            className="bg-[#7214FF] text-white py-3 px-6 rounded-full transition-all duration-300 
                       hover:bg-[#8942FF] hover:shadow-lg hover:shadow-[#7214FF]/20 
                       active:scale-95 transform 
                       border border-transparent hover:border-[#9B65FF]
                       focus:outline-none focus:ring-2 focus:ring-[#7214FF]/50">
            Get a demo
          </Link>
          
          <Link
            href="/pricing"
            className="bg-[#15193485] text-white py-3 px-6 rounded-full 
                       border border-[#282D45] transition-all duration-300
                       hover:bg-[#1D2342] hover:border-[#3D4266] hover:shadow-lg
                       active:scale-95 transform
                       focus:outline-none focus:ring-2 focus:ring-[#282D45]/50">
            View pricing
          </Link>
        </div>
        
        <div className="relative mt-6 md:mt-10 transition-all duration-700 transform hover:scale-[1.02] group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#7214FF]/30 to-[#34385E]/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
          
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="/heroimage.png"
              alt="CRM dashboard for engineering teams"
              height={500}
              width={700}
              className="mx-auto rounded-xl shadow-xl transition-all duration-700 
                        group-hover:brightness-110 w-full h-auto object-cover"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#070B27]/40 to-transparent 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-20 w-40 h-40 bg-[#7214FF]/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-40 h-40 bg-[#7214FF]/10 rounded-full filter blur-3xl"></div>
    </div>
  );
}