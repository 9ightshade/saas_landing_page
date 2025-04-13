import Image from "next/image";
import React from "react";

export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: "User information",
      description:
        "Lorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
      icon: "/usericon.svg",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      id: 2,
      title: "Deal tracking",
      description:
        "Viverra ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
      icon: "/dealicon.svg",
      gradient: "from-blue-500 to-teal-500",
    },
    {
      id: 3,
      title: "Pipeline management",
      description:
        "Oprem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
      icon: "/pipelineicon.svg",
      gradient: "from-teal-500 to-emerald-500",
    },
    {
      id: 4,
      title: "Reporting dashboard",
      description:
        "Viverra ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
      icon: "/reportingicon.png",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      id: 5,
      title: "Meeting scheduling",
      description:
        "Rem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
      icon: "/meetingicon.png",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      id: 6,
      title: "Email tracking",
      description:
        "Korem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
      icon: "/emailicon.png",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section className="py-16 md:py-24 min-h-screen">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto max-w-7xl">
        <div className="features-title flex flex-col lg:flex-row lg:items-center lg:gap-16 mb-12">
          <h2 className="font-bold text-transparent bg-clip-text text-3xl md:text-4xl lg:text-[40px] bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] mb-6 lg:mb-0 lg:max-w-2xl transition-all duration-300 hover:scale-[1.02]">
            Powerful features to help you manage all your leads
          </h2>
          <p className="text-[#8F9BB7] text-sm md:text-base font-normal lg:max-w-md transition-all duration-300 hover:text-white">
            Alisum dolor sit amet consectetur. Aliquam elementum elementum in
            ultrices. Dui maecenas ut eros turpis ultricies metus morbi aliquet
            vel.
          </p>
        </div>

        <div className="features-card-display w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group cursor-pointer h-auto min-h-64 rounded-xl p-6 md:p-7 bg-[#0E1330] border border-[#282D45] flex flex-col justify-between
                         transition-all duration-300 hover:border-[#3D4266] hover:bg-[#121838] 
                         hover:-translate-y-1 hover:shadow-lg transform">
              <div className="relative mb-6">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-70 blur-2xl transition-opacity duration-500 -z-10`}></div>
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#151b3c] group-hover:bg-[#1d2550] transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={28}
                    height={28}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="features-card-info flex flex-col gap-3">
                <h2 className="font-bold text-xl md:text-2xl text-[#F6F6F7] whitespace-normal transition-all duration-300 group-hover:text-white">
                  {feature.title}
                </h2>
                <p className="font-normal text-[#8F9BB7] text-sm transition-all duration-300 group-hover:text-[#A6B2D0]">
                  {feature.description}
                </p>
                <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 mt-1">
                  <button className="text-sm text-[#F6F6F7] flex items-center gap-2 font-medium transition-all duration-300 hover:translate-x-1">
                    Learn more
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
