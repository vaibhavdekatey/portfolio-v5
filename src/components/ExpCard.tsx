import logo from "../assets/logo.png";
import type { Service } from "../types";

const ExpCard = ({
  id,
  title,
  description,
  st1,
  st2,
  st3,
  bgc,
  bgl,
}: Service) => {
  return (
    <div className="relative">
      <div
        className="font-koulen text-neutral-200 flex flex-col md:flex-row w-full rounded-2xl md:p-10 p-5 my-4 h-[42vh]"
        style={{
          // background: `linear-gradient(90deg, ${bgc} 0%, ${bgl} 100%)`,
          background: `${bgc}`,
        }}>
        {/* <div className="min-w-[50vw] pr-40 leading-none">
          <h1 className="lg:text-[8.4vw] md:text-[6vw] font-regular text-transparent bg-gradient-to-r from-neutral-300 to-neutral-500 bg-clip-text">
            {title}
          </h1>
        </div> */}
        <div className="flex-1 flex justify-items-start min-w-[45vw] pr-6 md:pr-12 leading-none">
          <h1 className="font-regular text-transparent bg-gradient-to-r mb-2 from-neutral-300 to-neutral-500 bg-clip-text leading-none text-[12vw] md:text-[8vw] lg:text-[7vw]  ">
            {title}
          </h1>
        </div>

        <div className="flex flex-col h-full justify-between">
          <h2 className="font-extralight text-neutral-300 font-lexend md:text-[2.1vw] lg:text-[1.2vw] text-[3.4vw]">
            {description}
          </h2>
          <div className=" text-[4vw] md:text-[2vw] lg:text-[1.4vw]">
            <div className="flex flex-row items-center mt-2">
              <p className="font-lexend text-[3vw] md:text-[1.8vw] lg:text-[1.2vw] font-extralight text-neutral-400 mr-6">
                01
              </p>
              {st1.map((tech, idx) => (
                <p className="font-lexend font-thin mr-2" key={`st1-${idx}`}>
                  {tech}
                </p>
              ))}
            </div>
            <div className="flex flex-row items-center mt-2">
              <p className="font-lexend text-[3vw] md:text-[1.8vw] lg:text-[1.2vw] font-extralight text-neutral-400 mr-6">
                02
              </p>
              {st2.map((tech, idx) => (
                <p className="font-lexend font-thin mr-2" key={`st2-${idx}`}>
                  {tech}
                </p>
              ))}
            </div>
            <div className="flex flex-row items-center mt-2">
              {st3 && (
                <>
                  <p className="font-lexend text-[3vw] md:text-[1.8vw] lg:text-[1.2vw] font-extralight text-neutral-400 mr-6">
                    03
                  </p>
                  {st3?.map((tech, idx) => (
                    <p
                      className="font-lexend font-thin mr-2"
                      key={`st3-${idx}`}>
                      {tech}
                    </p>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 opacity-5 ">
        <img src={logo} alt="logo" className="h-[24vh] w-auto object-contain" />
      </div>
    </div>
  );
};

export default ExpCard;
