import FeatureCards from "../components/FeatureCards";
import Tag from "../components/Tag";
import Image from "next/image";
import Key from "../components/Key";

const features = [
  "Asset Library",
  "Code preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];

const avatar1 = "/avatar-ashwin-santiago.jpg";
const avatar2 = "/avatar-florence-shaw.jpg";
const avatar3 = "/avatar-lula-meyers.jpg";

const Features = () => {
  return (
    <section id="features" className="py-10">
      <div className="container">
        <div className="flex justify-center">
          <Tag headline="Features" />
        </div>
        <h2 className="text-6xl text-center font-medium mt-6 max-w-2xl mx-auto ">
          Where power meets <span className="text-lime-400">simplicity</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8 p-4 ">
          <FeatureCards
            title="Real Time Collaboration"
            description="Work together seamlessly with conflict time free editing"
            className="md:col-span-2 lg:col-span-1 group "
            children={
              <div className="aspect-video flex items-center justify-center ">
                <div className="z-40">
                  <Image
                    src={avatar1}
                    width={300}
                    height={300}
                    alt="avatar"
                    className="size-20 rounded-full overflow-hidden border-4 border-blue-400 p-1 bg-neutral-900"
                  />
                </div>

                <div className="-ml-6 z-30">
                  <Image
                    src={avatar2}
                    width={300}
                    height={300}
                    alt="avatar"
                    className="size-20 rounded-full overflow-hidden border-4 border-indigo-500 p-1 bg-neutral-900"
                  />
                </div>

                <div className="-ml-6 z-20">
                  <Image
                    src={avatar3}
                    width={300}
                    height={300}
                    alt="avatar"
                    className="size-20 rounded-full overflow-hidden border-4 border-amber-500 p-1 bg-neutral-900"
                  />
                </div>

                <div className="-ml-6 ">
                  <div className="size-20 rounded-full overflow-hidden border-4 border-transparent p-1 bg-neutral-900 group-hover:border-green-500 transition ">
                    <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
                      <Image
                        src={"/avatar-owen-garcia.jpg"}
                        width={300}
                        height={300}
                        alt="avatar"
                        className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition"
                      />

                      {[...Array(3)].map((_, index) => (
                        <span
                          key={index}
                          className="bg-white size-1.5 rounded-full inline-flex"
                        ></span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            }
          />

          <FeatureCards
            title="Intractive Prtotyping"
            description="Engage your clinets with prototype that react to user actions"
            className="md:col-span-2 lg:col-span-1 group"
            children={
              <div className="aspect-video flex items-center justify-center">
                <p className="text-4xl font-extrabold text-white/20 group-hover:text-white/10 transition duration-500 text-center">
                  We've achived {""}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                    <span>incredible</span>
                    <video
                      src="/gif-incredible.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition duration-500"
                    />
                  </span>{" "}
                  {""}
                  growth this year
                </p>
              </div>
            }
          />

          <FeatureCards
            title="Keyboards Quick Actions"
            description="Powerful commands help you create design more quickly"
            className="md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto"
            children={
              <div className="aspect-video flex items-center justify-center gap-4">
                <Key children={<div>shift</div>} />

                <Key children={<div>alt</div>} />
                <Key children={<div>C</div>} />
              </div>
            }
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-3 justify-center  ">
          {features.map((item) => {
            return (
              <div
                key={item}
                className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group"
              >
                <span
                  className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center 
                 text-xl group-hover:rotate-45 transition duration-500"
                >
                  {" "}
                  &#10038;
                </span>
                <span className="font-medium md:text-xl">{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
