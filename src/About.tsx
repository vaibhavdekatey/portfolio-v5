import React from "react";
import texture from "./assets/texture3 (Large).png";

type Tools = {
  title: string;
  list: string[];
};

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
    <div className="font-lexend text-neutral-300 w-full min-h-screen flex flex-col  bg-black pb-8">
      <div className="flex px-[2vw] py-[1vh] w-full h-14 justify-end items-center p-3">
        <p>{"<About Me>"}</p>
      </div>
      <div className="w-full ">
        <img
          src={texture}
          className="w-full object-cover rotate-180 h-80"
          alt=""
        />
      </div>
      <div className="px-[4vw] py-[3vw] flex flex-col w-full">
        <div className="flex flex-row py-4">
          <div className="w-3/7">
            <p className="text-[5vw] leading-none text-transparent bg-gradient-to-r from-neutral-400 to-neutral-200 bg-clip-text">
              DESIGNER
            </p>
            <p className="text-[5vw] leading-none text-transparent bg-gradient-to-r from-neutral-400 to-neutral-200 bg-clip-text">
              DEVELOPER
            </p>
            <p className="text-[5vw] leading-none text-transparent bg-gradient-to-r from-neutral-400 to-neutral-200 bg-clip-text">
              CREATOR
            </p>
            <div>
              <svg
                className="rotate-135 -translate-x-3"
                xmlns="http://www.w3.org/2000/svg"
                width={88}
                height={88}
                viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="m19 12l-7-7l-7 7m7-7v14"></path>
              </svg>
            </div>
          </div>

          <div className="w-2/3">
            <div className="mb-8">
              <div className="text-3xl select-none mb-2">
                {languageTools.title}
              </div>
              <div className="flex flex-row">
                {languageTools.list.map((tool) => (
                  <p className="font-light text-xl text-neutral-400 mr-2 select-none">
                    {tool}
                  </p>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <div className="text-3xl select-none mb-2">
                {frameworks.title}
              </div>
              <div className="flex flex-row">
                {frameworks.list.map((tool) => (
                  <p className="font-light text-xl text-neutral-400 mr-2 select-none">
                    {tool}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-row">
              {iconArr.map((ico) => (
                <a>
                  <img src={ico.iconSrc} alt="" className="w-14 h-14 mr-2" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="px-[4vw]">
        <p className="text-5xl text-neutral-400">
          Hello, I am Vaibhav Dekatey, a Software Engineer who merges the art of
          design with the skill of programming to build compelling digital
          solutions.
        </p>
        <p className="text-2xl font-extralight text-neutral-400 my-8">
          I’ve built apps end-to-end, both web and mobile and i have created
          systems that are clean, and ready to scale. I’ve worked across both
          the frontend and backend, and I’m comfortable handling everything from
          designing the UI to building secure APIs and connecting databases,
          with that said I keep the stack simple, the architecture clean, and I
          deliver what’s needed.
        </p>
        <a
          href="#"
          className="rounded-full w-fit h-12 px-6 flex items-center justify-center text-neutral-800 bg-neutral-200">
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
