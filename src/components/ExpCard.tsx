import logo from "../assets/logo.png";
import type { Service } from "../types";

const ExpCard = ({ title, description, st1, st2, st3, bgc }: Service) => {
  return (
    <div className="relative">
      <div
        className=" text-neutral-200 grid grid-cols-1 md:grid-cols-2 w-full rounded-2xl md:p-10 p-5 h-[42vh] "
        style={{
          background: `${bgc}`,
        }}
      >
        <h1 className="font-semibold text-[2.4em] md:text-[4em] text-transparent bg-gradient-to-r mb-2 from-neutral-300 to-neutral-500 bg-clip-text leading-none   ">
          {title}
        </h1>

        <div className="flex flex-col h-full justify-end md:justify-between gap-y-4">
          <h2 className="font-extralight text-neutral-300 text-pretty font-lexend md:text-[2.1em] lg:text-[1.2em] text-sm">
            {description}
          </h2>
          <div className=" flex flex-col md:text-[2.1em] lg:text-[1.2em] text-sm">
            <div className="flex flex-row items-center ">
              <p className="font-lexend font-extralight text-neutral-400 mr-4">
                01
              </p>
              {st1.map((tech, idx) => (
                <p className="font-lexend font-thin mr-2" key={`st1-${idx}`}>
                  {tech}
                </p>
              ))}
            </div>
            <div className="flex flex-row items-center ">
              <p className="font-lexend font-extralight text-neutral-400 mr-4">
                02
              </p>
              {st2.map((tech, idx) => (
                <p className="font-lexend font-thin mr-2" key={`st2-${idx}`}>
                  {tech}
                </p>
              ))}
            </div>
            <div className="flex flex-row items-center ">
              {st3 && (
                <>
                  <p className="font-lexend font-extralight text-neutral-400 mr-4">
                    03
                  </p>
                  {st3?.map((tech, idx) => (
                    <p
                      className="font-lexend font-thin mr-2"
                      key={`st3-${idx}`}
                    >
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
