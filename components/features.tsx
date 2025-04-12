// components/FeaturesSection.jsx
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
    },
    {
      id: 2,
      title: "Deal tracking",
      description:
        "Viverra ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
      icon: "/dealicon.svg",
    },
    {
      id: 3,
      title: "Pipeline management",
      description:
        "Oprem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
      icon: "/pipelineicon.svg",
      iconColor: "bg-blue-500",
    },
    {
      id: 4,
      title: "Reporting dashboard",
      description:
        "Viverra ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
      icon: "/reportingicon.png",
    },
    {
      id: 5,
      title: "Meeting scheduling",
      description:
        "Rem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
      icon: "/meetingicon.png",
    },
    {
      id: 6,
      title: "Email tracking",
      description:
        "Korem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
      icon: "/emailicon.png",
    },
  ];

  return (
    <section className="h-[854px]">
      <div className="h-[714px] w-[70%] mx-auto max-w-7xl ">
        <div className="features-title h-32 max-w-7xl flex items-center gap-32">
          <h2 className="font-bold text-transparent bg-clip-text text-[40px] basis-6xl h-32 bg-gradient-to-b from-[#F6F6F7] to-[#7E808F]">
            Powerful features to help you manage all your leads
          </h2>
          <p className="text-[#8F9BB7] text-xs basis-sm font-normal ">
            Alisum dolor sit amet consectetur. Aliquam elementum elementum in
            ultrices. Dui maecenas ut eros turpis ultricies metus morbi aliquet
            vel.
          </p>
        </div>

        <div className="features-card-display w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="cursor-pointer h-64 rounded-xs p-7 bg-[#0E1330] border border-[#282D45] flex flex-col justify-between">
              <div>
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={35}
                  height={35}
                  className=""
                />
              </div>

              <div className="features-card-info flex flex-col gap-3">
                <h2 className="font-bold text-2xl text-[#F6F6F7 whitespace-nowrap">
                  {feature.title}
                </h2>
                <p className="font-normal text-[#8F9BB7] text-xs">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
