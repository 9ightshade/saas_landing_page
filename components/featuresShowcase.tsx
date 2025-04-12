import Image from "next/image";
import Link from "next/link";
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

        <div className="showcase-card-list h-[1130px] w-full flex flex-col gap-10 border border-amber-100">
          <div
            className="showcase-card-top h-[513px] max-w-[1224px] w-full flex items-center px-8 "
            style={{
              backgroundImage:
                "url('/fsbgShape.png'), url('/fsbgShapecolor.png')",
              backgroundSize: "cover, cover",
              backgroundPosition: "center, center",
              backgroundRepeat: "no-repeat, no-repeat",
            }}>
            <div className="showcase-content w-[465px] h-[248px] flex flex-col gap-9 ">
              <h1 className="font-bold text-3xl text-[#F6F6F7]">
                End-to-end encrypted inbox and messages
              </h1>
              <p className="font-normal text-xs text-[#8F9BB7]">
                Rorem ipsum dolor sit amet consectetur. Proin dignissim tortor
                mauris viverra sed volutpat mauris. Amet nisi amet commodo
                adipiscing ut imperdiet nunc.
              </p>
              <Link
                href="/learn more"
                className="bg-[#15193485] text-center border text-xs font-medium text-white border-[#282D45] max-w-[133px] rounded-[46px] py-4 px-6">
                Learn More
              </Link>
            </div>

            <div>
              <Image
                src="/fsimagewrapper.png"
                alt="#"
                width={515}
                height={373}
              />
            </div>
          </div>
          <div className="showcase-card-bottom h-[513px] flex gap-4 ">
            <div
              className="w-[496px] h-[571px] rounded-xl border border-[#282D45] py-12 px-14 flex flex-col justify-between bg-[#0E1330] gap-9"
              style={{
                backgroundImage:
                  "url('/mobilebgshape.png'), url('/mobilebgshape1.png')",
                backgroundSize: "cover, cover",
                backgroundPosition: "center, center",
                backgroundRepeat: "no-repeat, no-repeat",
              }}>
              <div className="relative " >
                <Image
                  src="/mobileimage.png"
                  alt="#"
                  width={271}
                  height={306}
                  className="mx-auto"
                />
              
              </div>
              <div className="showcase-content w-[465px] h-[248px] flex flex-col gap-9 ">
                <h1 className="font-bold text-3xl text-[#F6F6F7]">
                  Mobile applications
                </h1>
                <p className="font-normal text-xs text-[#8F9BB7]">
                  Prem ipsum dolor sit amet consectetur. Viverra sed dignissim
                  risus aliquet condimentum. Vulputate varius feugiat egestas
                  congue
                </p>
              </div>
            </div>

            <div
              className="h-[576px] w-[690px] rounded-xl border flex flex-col justify-center items-center px-10 pt-10 gap-5 border-[#282D45] "
              style={{
                backgroundImage: "url('/uploadbg.png'), url('/uploadbg2.png')",
                backgroundSize: "cover, cover",
                backgroundPosition: "center, center",
                backgroundRepeat: "no-repeat, no-repeat",
              }}>
              <div className="showcase-content w-[465px] h-[248px] flex flex-col gap-9 ">
               <div className="flex flex-col gap-4" >
               <h1 className="font-bold text-3xl text-[#F6F6F7]">
                  Upload, share, and preview any file
                </h1>
                <p className="font-normal text-xs text-[#8F9BB7]">
                  Tellus et adipiscing sit sit mauris pharetra bibendum. Ligula
                  massa netus nulla ultricies purus.
                </p>
               </div>
              </div>

              <div>
                <Image
                  src="/uploadimagewrapper.png"
                  alt="#"
                  height={393}
                  width={580}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
          <div className="showcase-cta"></div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="showcase-card-info h-[512px] w-[577px] bg-[#0E1330] "  } ></div> */
}
