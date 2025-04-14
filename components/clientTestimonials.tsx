import Image from "next/image";

export default function ClientTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Cameron Williamson",
      role: "Web Designer",
      image: "/dev1.png",
      bg: "/testimonialbg1.png",
      text: "Lorem ipsum dolor sit amet consectetur. At quam sem mi nibh vulputati enim pellentesque. Proin auctor volutpat sed fermentum neque velit lectus.",
    },
    {
      id: 2,
      name: "Esther Howard",
      role: "Web Developer",
      image: "/dev.png",
      bg: "/testimonialbg1.png",
      text: "At viverra enim enim sed turpis orci cursus. Imperdiet eros mauris sed sodales nisi interdum at. Et congue sit egestas donec lectus.",
    },
    {
      id: 3,
      name: "Jenny Wilson",
      role: "SEO Designer",
      image: "/designer.png",
      bg: "/testimonialbg1.png",
      text: "Sed id diam amet accumsan in. Elementum lorem imperdiet venenatis amet sit posuere sed sit. Aliquet suspendisse vitae placerat davar.",
    },
  ];

  return (
    <div className="py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-bold text-transparent bg-clip-text text-center text-4xl md:text-5xl bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] mb-3 animate-pulse">
          What our clients say
        </h2>
        <p className="text-[#8F9BB7] text-center max-w-lg mx-auto mb-8 md:mb-12">
          Rimet facilisi arcu olio urna semean erat. Pellentesque in vitae
          lobortis orci tincidunt facilisis. Pulvinar lacus ultricies turpis
          urna sapien.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="relative px-2 md:px-4">
              <div className="testimonial-bgImage absolute bottom-0 left-0 right-0 h-auto z-0">
                <Image
                  src={testimonial.bg}
                  alt="Background pattern"
                  height={110}
                  width={392}
                  className="w-full object-cover z-0"
                  loading="lazy"
                />
              </div>
              <div
                className="bg-[#0E1330] rounded-3xl relative z-10 p-4 md:p-6 mb-6 border border-[#282D45] 
        transition-all duration-300 ease-in-out
        hover:border-[#3D4266] hover:shadow-lg hover:-translate-y-1 hover:bg-[#121838] 
        group cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-[10px] w-10 h-10 sm:w-12 sm:h-12"
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-white font-medium text-sm sm:text-base truncate group-hover:text-[#F6F6F7]">
                        {testimonial.name}
                      </h3>
                      <p className="text-[#8F9BB7] text-xs sm:text-sm truncate group-hover:text-[#A2AECF]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-2">
                    <Image
                      src="/quotes.png"
                      alt="Quote icon"
                      width={40}
                      height={30}
                      className="w-8 h-6 sm:w-10 sm:h-8 md:w-12 md:h-10"
                    />
                  </div>
                </div>
                <p className="text-[#FFFFFF] text-xs sm:text-sm md:text-base group-hover:text-[#F6F6F7] line-clamp-4 sm:line-clamp-none">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 gap-3">
          <button
            className="w-10 h-10 rounded-xl bg-[#131A35] cursor-pointer border border-[#34385E] flex items-center justify-center text-white
              hover:bg-[#1B2447] hover:border-[#444B78] transition-all duration-300 
              active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#444B78]
              transform hover:translate-x-1"
            aria-label="Next testimonial">
            <Image
              src="/arrow-left.png"
              alt="Next"
              width={24}
              height={24}
              className="transform rotate-180 transition-transform duration-300 hover:scale-110"
            />
          </button>
          <button
            className="w-10 h-10 rounded-xl bg-[#131A35] cursor-pointer border border-[#34385E] flex items-center justify-center text-white
              hover:bg-[#1B2447] hover:border-[#444B78] transition-all duration-300 
              active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#444B78]
              transform hover:-translate-x-1"
            aria-label="Previous testimonial">
            <Image
              src="/arrow-left.png"
              alt="Previous"
              width={24}
              height={24}
              className="transition-transform duration-300 hover:scale-110"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
