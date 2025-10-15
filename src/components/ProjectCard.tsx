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
    <div className="relative flex md:flex-row flex-col items-center font-koulen bg-neutral-300 rounded-xl text-neutral-800 p-4 my-4 w-full h-fit md:h-[52vh] mb-8 ">
      <div className="relative group h-full md:h-full w-full md:mt-0 mb-4 md:mb-0 aspect-video">
        <img
          className="absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-300 ease-in-out"
          src={imgUrl}
          alt={title}
        />
        {imgUrlHover && (
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
            src={imgUrlHover}
            alt={`${title} (hover state)`}
          />
        )}
      </div>
      <div className="flex flex-col h-full md:max-w-[40vw] md:ml-6 pb-2">
        <div className=" flex flex-col justify-between h-full">
          <div className="flex flex-col text-[8vw] leading-none text-transparent bg-clip-text bg-gradient-to-l from-neutral-800 to-neutral-950">
            <p className="md:text-[6vw] text-[10vw] leading-none md:w-[38vw] mb-2 font-medium">
              {title.toUpperCase()}
            </p>
            <p className="text-xl md:text-2xl w-full md:w-3/4 font-lexend font-extralight text-neutral-700">
              {desc}
            </p>
          </div>

          <div className="flex md:my-0 my-4">
            {ico?.map((icon, idx) => (
              <div key={idx} className="w-14 bg-neutral-900 p-2 rounded mr-4">
                <img src={icon} alt="" className="w-full h-full" />
              </div>
            ))}
          </div>
          <div className="flex flex-col space-y-2 md:text-2xl text-lg  ">
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
  );
};

export default ProjectCard;
