import Image from "next/image";
import Link from "next/link";

export default function NewsSection() {
  const newsItems = [
    {
      id: 1,
      title: "Product Mail is taking on Gmail by betting on privacy",
      description:
        "Ramet consectetur. Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.",
      date: "February 8, 2023",
      image: "/dashboard-stats.png",
    },
    {
      id: 2,
      title: "Wants You To Sign Out Of Google Workspace Forever",
      description:
        "Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.",
      date: "February 8, 2023",
      image: "/dashboard-chart.png",
    },
    {
      id: 3,
      title: "The Best Email Encryption Services for 2023",
      description:
        "Dorttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.",
      date: "February 8, 2023",
      image: "/dashboard-metrics.png",
    },
  ];

  return (
    <section className="bg-navy-900 py-8 sm:py-12 md:py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header with responsive adjustments */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 sm:mb-12">
          <h2 className="font-bold text-transparent bg-clip-text text-3xl sm:text-4xl md:text-5xl bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] text-center sm:text-left">
            Product in the news
          </h2>
          <Link
            href="/news"
            className="bg-[#7214FF] hover:bg-[#6010e0] text-white py-2 sm:py-3 px-5 sm:px-6 rounded-full transition duration-300 whitespace-nowrap shadow-md hover:shadow-lg">
            Browse all news
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {newsItems.map((item) => (
            <div
              key={item.id}
              data-id={item.id}
              className={`news-card bg-[#0E1330] rounded-lg overflow-hidden border border-[#282D45] transition-all duration-500 hover:shadow-xl opacity-100 translate-y-0'
              }`}>
              <div className="relative p-4 sm:p-6 h-40 sm:h-48 md:h-56 flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain"
                  loading={item.id === 1 ? "eager" : "lazy"}
                />
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-[#F6F6F7] text-lg sm:text-xl font-bold mb-2 sm:mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-[#8F9BB7] text-sm sm:text-base mb-4 sm:mb-6 line-clamp-3">
                  {item.description}
                </p>
                <div className="border-t border-[#282D45] pt-3 sm:pt-4 flex justify-between items-center">
                  <span className="text-[#8F9BB7] text-xs sm:text-sm">
                    {item.date}
                  </span>
                  <Link
                    href={`/news/${item.id}`}
                    className="text-[#FFFFFF] flex items-center gap-1 sm:gap-2 group text-sm sm:text-base hover:text-[#7214FF] transition-colors duration-300">
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-5 sm:w-5 ml-1 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
