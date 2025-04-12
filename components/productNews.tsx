// components/NewsSection.jsx
// import Image from 'next/image';
import Link from "next/link";
export default function NewsSection() {
  const newsItems = [
    {
      id: 1,
      title: "Product Mail is taking on Gmail by betting on privacy",
      description:
        "Ramet consectetur. Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.",
      date: "February 8, 2023",
      icon: "green",
      image: "/dashboard-stats.png",
    },
    {
      id: 2,
      title: "Wants You To Sign Out Of Google Workspace Forever",
      description:
        "Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.",
      date: "February 8, 2023",
      icon: "yellow",
      image: "/dashboard-chart.png",
    },
    {
      id: 3,
      title: "The Best Email Encryption Services for 2023",
      description:
        "Dorttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.",
      date: "February 8, 2023",
      icon: "blue",
      image: "/dashboard-metrics.png",
    },
  ];

  return (
    <section className="bg-navy-900 py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-white text-4xl md:text-5xl font-bold">
            Product in the news
          </h2>
          <Link
            href="/news"
            className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-full transition duration-300">
            Browse all news
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="bg-navy-800 rounded-lg overflow-hidden border border-navy-700">
              {/* News Card Image Section */}
              <div className="relative bg-navy-900 p-6 h-56 flex items-center justify-center">
                {/* Placeholder for dashboard images */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Star icon in colored circle */}
                  <div
                    className={`absolute top-0 right-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      item.icon === "green"
                        ? "bg-emerald-400"
                        : item.icon === "yellow"
                        ? "bg-yellow-400"
                        : "bg-blue-500"
                    }`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-navy-900"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>

                  {/* Dashboard mockup elements - simplified for this implementation */}
                  {item.id === 1 && (
                    <div className="flex space-x-4">
                      <div className="bg-navy-800 rounded-lg p-3 flex flex-col items-center">
                        <div className="text-gray-400 text-xs mb-1">2,100</div>
                        <div className="flex items-end gap-1 h-20">
                          <div className="w-4 bg-purple-600 h-8 rounded-sm"></div>
                          <div className="w-4 bg-purple-600 h-12 rounded-sm"></div>
                          <div className="w-4 bg-purple-600 h-16 rounded-sm"></div>
                          <div className="w-4 bg-purple-600 h-20 rounded-sm"></div>
                        </div>
                      </div>
                      <div className="bg-navy-800 rounded-lg p-3 flex flex-col items-center">
                        <div className="bg-cyan-400 p-2 rounded-full mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-navy-900"
                            viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                              fillRule="evenodd"
                              d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="text-2xl font-bold text-white">85</div>
                        <div className="text-gray-400 text-xs">Complete</div>
                      </div>
                    </div>
                  )}

                  {item.id === 2 && (
                    <div className="flex space-x-4">
                      <div className="bg-navy-800 rounded-lg p-3 flex flex-col items-center">
                        <div className="bg-purple-600 p-2 rounded-full mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor">
                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                          </svg>
                        </div>
                        <div className="text-2xl font-bold text-white">134</div>
                        <div className="text-gray-400 text-xs">Project</div>
                      </div>
                      <div className="bg-navy-800 rounded-lg p-3 flex flex-col items-center">
                        <div className="text-gray-400 text-xs mb-1">
                          Dashboard Report
                        </div>
                        <div className="relative h-28 w-32">
                          <div className="absolute bottom-0 left-0 right-0 h-20">
                            <div className="h-full flex items-end">
                              <div className="relative w-full h-16 flex items-end">
                                <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-700"></div>
                                <div className="absolute bottom-4 left-0 right-0 h-px bg-gray-700"></div>
                                <div className="absolute bottom-8 left-0 right-0 h-px bg-gray-700"></div>
                                <div className="absolute bottom-12 left-0 right-0 h-px bg-gray-700"></div>
                                <div className="relative w-full">
                                  <svg viewBox="0 0 100 20" className="w-full">
                                    <path
                                      d="M0,10 Q10,5 20,15 T40,10 T60,15 T80,5 T100,10"
                                      fill="none"
                                      stroke="#22d3ee"
                                      strokeWidth="2"
                                    />
                                    <path
                                      d="M0,15 Q20,20 40,10 T70,5 T100,10"
                                      fill="none"
                                      stroke="#a855f7"
                                      strokeWidth="2"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {item.id === 3 && (
                    <div className="flex space-x-4">
                      <div className="bg-navy-800 rounded-lg p-3 flex flex-col items-center">
                        <div className="relative w-24 h-24 mb-2">
                          <div className="absolute inset-0 rounded-full bg-navy-700"></div>
                          <div className="absolute inset-1 rounded-full bg-navy-800 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-xl font-bold text-white">
                                264K
                              </div>
                              <div className="text-gray-400 text-xs">Sales</div>
                            </div>
                          </div>
                          <div
                            className="absolute inset-0 rounded-full border-8 border-transparent"
                            style={{
                              borderTopColor: "#22d3ee",
                              borderRightColor: "#22d3ee",
                              borderBottomColor: "#22d3ee",
                              transform: "rotate(45deg)",
                            }}></div>
                        </div>
                        <div className="w-full space-y-2">
                          <div className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></div>
                            <div className="h-2 bg-gray-700 rounded-full w-full"></div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-purple-600 mr-2"></div>
                            <div className="h-2 bg-gray-700 rounded-full w-full"></div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-navy-800 rounded-lg p-3 flex flex-col items-center">
                        <div className="bg-pink-500 p-2 rounded-full mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="text-2xl font-bold text-white">45</div>
                        <div className="text-gray-400 text-xs">Assigned</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* News Card Content */}
              <div className="p-6">
                <h3 className="text-white text-xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 mb-6">{item.description}</p>
                <div className="border-t border-navy-700 pt-4 flex justify-between items-center">
                  <span className="text-gray-500">{item.date}</span>
                  <Link
                    href={`/news/${item.id}`}
                    className="text-white flex items-center group">
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
