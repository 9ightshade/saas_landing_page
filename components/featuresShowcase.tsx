import Image from "next/image";
export default function FeaturesShowcase() {
  const collections = [
    {
      id: 1,
      title: "Email,",
      src: "/email.png",
    },
    {
      id: 2,
      title: "Events,",
      src: "/events.png",
    },
    {
      id: 3,
      title: "Files,",
      src: "/file.png",
    },
    {
      id: 4,
      title: "Documents",
      src: "/document.png",
    },
  ];

  return (
    <div className="h-[1575px] max-w-[1920px] py-16 ">
      <div className="h-[1435px] max-w-[1224px] w-[60%] mx-auto flex flex-col gap-14">
        <div className="showcase-title flex flex-col gap-5 h-[140px] w-4xl mx-auto ">
          <h2 className="font-bold text-transparent bg-clip-text text-center text-5xl bg-gradient-to-b from-[#F6F6F7] to-[#7E808F]">
            Essential apps that protect your
          </h2>
          <div className="collection flex items-center justify-evenly gap-2 ">
            {collections.map((collection) => (
              <div key={collection.id} className="flex items-center gap-1">
                <Image
                  src={collection.src}
                  alt={collection.title}
                  width={40}
                  height={40}
                />
                <p className="font-bold text-transparent bg-clip-text text-center text-5xl bg-gradient-to-b from-[#F6F6F7] to-[#7E808F]">
                  {collection.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
