import React from "react";
import type { Project } from "../types";

const ProjectCard = ({
  id,
  title,
  desc,
  st1,
  st2,
  st3,
  imgUrl,
  imgUrlHover,
  ico,
}: Project) => {
  return (
    <div
      key={id}
      className="relative grid grid-cols-1 md:grid-cols-2 items-center font-lexend bg-neutral-300 rounded-xl text-neutral-800 p-4 my-4 w-full h-full mb-8 "
    >
      <div className="relative group h-full w-full aspect-video object-cover">
        <img
          className="absolute z-20 group-hover:opacity-0 opacity-100 w-full h-full object-cover rounded-lg transition-opacity duration-300 ease-in-out"
          src={imgUrl}
          alt={title}
        />
        <img
          className="absolute z-10 w-full h-full object-cover rounded-lg transition-opacity duration-300 ease-in-out  "
          src={imgUrlHover || imgUrl}
          alt={`${title} (hover state)`}
        />
      </div>
      <div className="flex flex-col h-full   md:ml-6 pb-2">
        <div className=" flex flex-col justify-between h-full">
          <div className="flex flex-col leading-none text-transparent bg-clip-text bg-gradient-to-l from-neutral-800 to-neutral-950">
            <p className="md:text-[4em] text-[10vw] leading-none md:w-[38vw] my-2 md:my-0 md:mb-2 font-medium">
              {title.toUpperCase()}
            </p>
            <p className="text-sm md:text-base w-full md:w-4/5 text-pretty font-lexend font-extralight text-neutral-700">
              {desc}
            </p>
          </div>

          <div className="flex flex-col md:gap-y-3 gap-y-2 md:text-base text-sm ">
            <div className="flex md:my-0 my-2 mt-4 md:mt-0 ">
              {ico?.map((icon, idx) => (
                <div
                  key={idx}
                  className="md:w-12 w-10 bg-neutral-900 p-2 rounded mr-4"
                >
                  <img src={icon} alt="" className="w-full h-full" />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-y-2 md:text-base text-sm ">
              <div className="flex flex-row items-center font-lexend leading-none">
                <p className="mr-4 text-neutral-800">01</p>
                {st1.map((st, idx) => (
                  <p className="mr-3 font-light text-neutral-600" key={idx}>
                    {st}
                  </p>
                ))}
              </div>
              <div className="flex flex-row items-center font-lexend leading-none">
                <p className="mr-4 text-neutral-800">02</p>
                {st2.map((st, idx) => (
                  <p className="mr-3 font-light text-neutral-600" key={idx}>
                    {st}
                  </p>
                ))}
              </div>
              {st3 && (
                <div className="flex flex-row items-center font-lexend leading-none">
                  <p className="mr-4 text-neutral-800">03</p>
                  {st3?.map((st, idx) => (
                    <p className="mr-3 font-light text-neutral-600" key={idx}>
                      {st}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
