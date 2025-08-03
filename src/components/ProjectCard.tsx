import React from "react";
import type { Project } from "../types";

const ProjectCard = ({
  id,
  title,
  st1,
  st2,
  st3,
  imgUrl,
  imgUrlHover,
}: Project) => {
  return (
    <div className="relative flex flex-row items-center justify-between font-lexend bg-neutral-300 text-neutral-800 p-4 my-4 rounded-[3vw] w-full">
      <div className="flex flex-col h-full max-w-[40vw] justify-between px-3">
        <div className="absolute h-full top-0 flex flex-col text-[12vw] leading-none text-transparent bg-clip-text bg-gradient-to-l from-neutral-800 to-neutral-600">
          0{id}
        </div>
        <div className="absolute top-3/7 flex flex-col ">
          <p className="text-[4vw] leading-none w-[38vw] mb-12 font-medium">
            {title}
          </p>
          <div className="flex flex-row items-center mb-4 leading-none">
            <p className="mr-4 text-2xl text-neutral-600">01</p>
            {st1.map((st, idx) => (
              <p
                className="text-[2vw] mr-3 font-light text-neutral-600"
                key={idx}>
                {st}
              </p>
            ))}
          </div>
          <div className="flex flex-row items-center mb-4 leading-none">
            <p className="mr-4 text-2xl text-neutral-600">02</p>
            {st2.map((st, idx) => (
              <p
                className="text-[2vw] mr-3 font-light text-neutral-600"
                key={idx}>
                {st}
              </p>
            ))}
          </div>
          {st3 && (
            <div className="flex flex-row items-center mb-4 leading-none">
              <p className="mr-4 text-2xl text-neutral-600">03</p>
              {st3?.map((st, idx) => (
                <p
                  className="text-[2vw] mr-3 font-light text-neutral-600"
                  key={idx}>
                  {st}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="relative group w-full md:w-3/5 mt-8 md:mt-0 aspect-video">
        <img
          className="absolute inset-0 w-full h-full object-cover rounded-[2.5vw] transition-opacity duration-300 ease-in-out"
          src={imgUrl}
          alt={title}
        />
        {imgUrlHover && (
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-[2.5vw] transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
            src={imgUrlHover}
            alt={`${title} (hover state)`}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
