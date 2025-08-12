import React from "react";
import texture from "/texture.png";
import type { Tools } from "./types";

const iconArr = [
  {
    title: "Github Icon",
    iconSrc: "/ico/github.png",
    url: "",
  },
  {
    title: "Linkedin Icon",
    iconSrc: "/ico/linkedin.png",
    url: "",
  },
  {
    title: "Behance Icon",
    iconSrc: "/ico/behance.png",
    url: "",
  },
  {
    title: "Youtube Icon",
    iconSrc: "/ico/youtube-sq.png",
    url: "",
  },
];

const languageTools: Tools = {
  title: "Language & Tools",
  list: [
    "Javascript",
    "Typescript",
    "Git",
    "Github",
    "Docker",
    "Postman",
    "Supababase",
  ],
};

const frameworks: Tools = {
  title: "Frameworks & Libraries",
  list: [
    "React",
    "Node.js",
    "Express.js",
    "JQuery",
    "TailwindCSS",
    "Framer-motion",
    "GSAP",
  ],
};

const About = () => {
  return (
    <div className="font-koulen text-neutral-300 w-full min-h-screen flex flex-col pb-8">
      {/* <div className="flex px-[2vw] py-[1vh] w-full h-14 justify-end items-center p-3">
        <p>{"<About Me>"}</p>
      </div> */}
      {/* <div className="w-full ">
        <img
          src={texture}
          className="w-full object-cover rotate-180 h-80"
          alt=""
        />
      </div> */}
      <div
        style={{ backgroundImage: `url(${texture})` }}
        className=" flex flex-col w-full bg-cover bg-center items-end md:min-h-[92vh] min-h-[80vh]">
        <div className="w-full lg:min-w-[50vw] lg:max-w-[50vw] px-[7vw] md:py-[7vw] py-[16vw] flex flex-col bg-black/78 md:min-h-[92vh] min-h-[80vh]">
          <div className="">
            <div className="w-full flex">
              <div>
                <p className="text-[17vw] lg:md:text-[5vw] md:text-[14vw] leading-none text-transparent bg-gradient-to-r from-neutral-300 to-neutral-50 bg-clip-text">
                  DESIGNER
                </p>
                <p className="text-[17vw] lg:md:text-[5vw] md:text-[14vw] leading-none text-transparent bg-gradient-to-r from-neutral-300 to-neutral-50 bg-clip-text">
                  DEVELOPER
                </p>
                <p className="text-[17vw] lg:md:text-[5vw] md:text-[14vw] leading-none text-transparent bg-gradient-to-r from-neutral-300 to-neutral-50 bg-clip-text">
                  CREATOR
                </p>
                <div>
                  <svg
                    className="rotate-135 w-16 h-16 md:w-20 md:h-20 md:-translate-x-5 -translate-x-4"
                    xmlns="http://www.w3.org/2000/svg"
                    // width={88}
                    // height={88}
                    viewBox="0 0 24 24">
                    <path
                      fill="none"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="m19 12l-7-7l-7 7m7-7v14"></path>
                  </svg>
                </div>
              </div>
              <div className="flex w-full font-normal h-14 justify-end items-start ">
                <p>{"<About Me>"}</p>
              </div>
            </div>

            <div className="w-full font-lexend mt-4">
              <div className="mb-8">
                <div className="md:text-3xl text-base select-none mb-2">
                  {languageTools.title}
                </div>
                <div className="flex flex-row flex-wrap">
                  {languageTools.list.map((tool, idx) => (
                    <p
                      key={idx}
                      className="font-light text-sm md:text-xl text-neutral-400 mr-2 select-none">
                      {tool}
                    </p>
                  ))}
                </div>
              </div>
              <div className="mb-8">
                <div className="md:text-3xl text-base select-none mb-2">
                  {frameworks.title}
                </div>
                <div className="flex flex-row flex-wrap">
                  {frameworks.list.map((tool, idx) => (
                    <p
                      key={idx}
                      className="font-light text-sm md:text-xl text-neutral-400 mr-2 select-none">
                      {tool}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex flex-row">
                {iconArr.map((ico) => (
                  <a key={ico.title}>
                    <img
                      src={ico.iconSrc}
                      alt=""
                      className="w-12 h-12 md:w-14 md:h-14 mr-2 hover:drop-shadow-red-100/30 drop-shadow-red-100/0 duration-300 drop-shadow-md transition-all "
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[7vw] py-[8vw] bg-black min-h-[55vh] flex flex-col font-lexend justify-center items-center transition-all">
        <p className="md:text-4xl text-xl text-neutral-200">
          Hello, I am Vaibhav Dekatey, a Software Engineer who merges the art of
          design with the skill of programming to build compelling digital
          solutions.
        </p>
        <p className="md:text-xl text-base font-extralight text-neutral-400 my-8">
          I’ve built apps end-to-end, both web and mobile and i have created
          systems that are clean, and ready to scale. I’ve worked across both
          the frontend and backend, and I’m comfortable handling everything from
          designing the UI to building secure APIs and connecting databases,
          with that said I keep the stack simple, the architecture clean, and I
          deliver what’s needed.
        </p>
        <a
          href="#"
          className="rounded-full w-fit h-12 px-6 flex items-center justify-center text-neutral-800 bg-neutral-200 self-start">
          Get in Touch
          <svg
            className="rotate-45"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="#0a0a0a"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m5 12l7-7l7 7m-7 7V5"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default About;
