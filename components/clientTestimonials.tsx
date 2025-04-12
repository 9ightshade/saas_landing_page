"use client";
import Image from "next/image";
import { useState } from "react";

export default function ClientTestimonials() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Cameron Williamson",
      role: "Web Designer",
      image: "/dev1.png",
      text: "Lorem ipsum dolor sit amet consectetur. At quam sem mi nibh vulputati enim pellentesque. Proin auctor volutpat sed fermentum neque velit lectus.",
    },
    {
      id: 2,
      name: "Esther Howard",
      role: "Web Developer",
      image: "/dev.png",
      text: "At viverra enim enim sed turpis orci cursus. Imperdiet eros mauris sed sodales nisi interdum at. Et congue sit egestas donec lectus.",
    },
    {
      id: 3,
      name: "Jenny Wilson",
      role: "SEO Designer",
      image: "/designer.png",
      text: "Sed id diam amet accumsan in. Elementum lorem imperdiet venenatis amet sit posuere sed sit. Aliquet suspendisse vitae placerat davar.",
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className=" py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-bold text-transparent bg-clip-text text-center text-5xl bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] mb-3">
          What our clients say
        </h2>
        <p className="text-[#8F9BB7] text-center max-w-lg mx-auto mb-12">
          Rimet facilisi arcu olio urna semean erat. Pellentesque in vitae
          lobortis orci tincidunt facilisis. Pulvinar lacus ultricies turpis
          urna sapien.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#0E1330] rounded-lg p-6 border border-[#282D45]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center ">
                  <div className="mr-3">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-[10px]"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#8F9BB7] text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div>
                  <Image src="/quotes.png" alt="#" width={57} height={41} />
                </div>
              </div>
              <p className="text-[#FFFFFF] text-sm">{testimonial.text}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-2">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-[#131A35] border border-[#34385E] flex items-center justify-center text-white"
            aria-label="Previous testimonial">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15 19L8 12L15 5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-[#131A35] border border-[#34385E] flex items-center justify-center text-white"
            aria-label="Next testimonial">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 5L16 12L9 19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
