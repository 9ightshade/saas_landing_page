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
    <section className="bg-navy-900 py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-bold text-transparent bg-clip-text text-center text-5xl bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] ">
            Product in the news
          </h2>
          <Link
            href="/news"
            className="bg-[#7214FF] hover:bg-[#7214FF] text-white py-3 px-6 rounded-full transition duration-300">
            Browse all news
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#0E1330] rounded overflow-hidden border border-[#282D45]">
              {/* News Card Image Section */}
              <div className="relative mt-6 p-6 h-56 flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={342}
                  height={230}
                />
              </div>

              {/* News Card Content */}
              <div className="p-6">
                <h3 className="text-[#F6F6F7] text-xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-[#8F9BB7] mb-6">{item.description}</p>
                <div className="border-t border-[#282D45] pt-4 flex justify-between items-center">
                  <span className="text-[#8F9BB7">{item.date}</span>
                  <Link
                    href={`/news/${item.id}`}
                    className="text-[#FFFFFF] flex items-center group">
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1"
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
