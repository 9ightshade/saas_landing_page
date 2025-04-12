// components/FeaturesSection.jsx
import React from "react";

export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: "User information",
      description:
        "Lorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      iconColor: "bg-purple-600",
    },
    {
      id: 2,
      title: "Deal tracking",
      description:
        "Viverra ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <path d="M9 14l2 2 4-4" />
        </svg>
      ),
      iconColor: "bg-amber-500",
    },
    {
      id: 3,
      title: "Pipeline management",
      description:
        "Oprem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
          <path d="M12 13v8" />
          <path d="M5 13v6a2 2 0 0 0 2 2h8" />
        </svg>
      ),
      iconColor: "bg-blue-500",
    },
    {
      id: 4,
      title: "Reporting dashboard",
      description:
        "Viverra ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      iconColor: "bg-green-500",
    },
    {
      id: 5,
      title: "Meeting scheduling",
      description:
        "Rem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      iconColor: "bg-yellow-400",
    },
    {
      id: 6,
      title: "Email tracking",
      description:
        "Korem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      iconColor: "bg-blue-600",
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



        
      </div>
    </section>
  );
}

{
  /* <div className="container mx-auto max-w-[90%] h-[714px]">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
  <div>
    
  </div>
  <div>
    
  </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
  {features.map((feature) => (
    <div key={feature.id} className="bg-navy-800 p-6 rounded-lg border border-navy-700">
      <div className={`${feature.iconColor} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-5`}>
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
      <p className="text-gray-400">{feature.description}</p>
    </div>
  ))}
</div>
</div> */
}
