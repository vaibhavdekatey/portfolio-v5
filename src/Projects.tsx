import React from "react";
import type { Project } from "./types";
import reactIco from "./assets/icons/react.png";
import supabaseIco from "./assets/icons/supabase.png";
import tailwindIco from "./assets/icons/tailwind.png";
import apiIco from "./assets/icons/api.png";
import ProjectCard from "./components/ProjectCard";

const projects: Project[] = [
  {
    id: 1,
    title: "Brewtime",
    desc: "A React Native app with Supabase, featuring user-generated coffee recipes, real-time updates, and a dynamic, intuitive interface.",
    st1: ["React Native", "Node.js"],
    st2: ["Supabase", "Express.js"],
    st3: ["Tailwind CSS"],
    imgUrl: "/projects/brewtime.jpg",
    ico: [reactIco, supabaseIco, tailwindIco],
    imgUrlHover: "",
  },
  {
    id: 2,
    title: "Labelgen",
    desc: "An AI Powered Label Generator for Coffee Enthusiasts to keep track of your precious coffee beans. Download your labels as Image or PDF",
    st1: ["React.js", "Node.js"],
    st2: ["Express.js", "AWS EC2"],
    st3: ["Tailwind CSS"],
    imgUrl: "/projects/labelgen_main.jpg",
    ico: [reactIco, tailwindIco, apiIco],
    imgUrlHover: "/projects/labelgen.jpg",
  },
  {
    id: 3,
    title: "Otaku Compass",
    desc: "Otaku Compass is an app where you can search for anime and explore a wide database of titles. It also gives you random recommendations to help you find something new to watch.",
    st1: ["HTML", "CSS", "Javascript"],
    st2: ["React.js", "Rest API"],
    imgUrl: "/projects/otaku-compass_main.png",
    ico: [reactIco, tailwindIco, apiIco],
    imgUrlHover: "/projects/otaku-compass.png",
  },
];

const Projects = () => {
  return (
    <div className="bg-[#323232] flex flex-col md:px-[2vw] px-[6vw] py-[4vh] w-full relative">
      <div className="flex flex-row w-full justify-between ">
        {/* <div className="flex flex-col md:flex-row justify-between ">
          <p className="font-koulen inline-block text-transparent bg-gradient-to-r from-neutral-100 to-neutral-300 bg-clip-text text-[16vw] md:text-[10vw] leading-none">
            SOME THINGS I'VE BUILT
          </p>
          <div className="self-end lg:-translate-y-2.5 md:-translate-y-1.5 -translate-y-2">
            <svg
              className="rotate-135 h-[5.5vw] w-[5.5vw] "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="m19 12l-7-7l-7 7m7-7v14"
              ></path>
            </svg>
          </div>
        </div> */}
        <div className="flex justify-center md:justify-start">
          <p className="font-koulen flex-col text-transparent items-start bg-gradient-to-r from-neutral-100 to-neutral-300 bg-clip-text text-[16vw] md:text-[10vw] leading-none flex flex-wrap">
            SOME THINGS I'VE <br />
            <span className="whitespace-nowrap flex items-center">
              BUILT
              <svg
                className="rotate-135 h-[1em] w-[1em] inline-block translate-y-[0.05em] ml-[0.05em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="m19 12l-7-7l-7 7m7-7v14"
                />
              </svg>
            </span>
          </p>
        </div>

        <p className="font-koulen md:text-xl text-base mt-3 text-neutral-200">
          {"<Projects>"}
        </p>
      </div>
      <div>
        {projects.map((project) => (
          <ProjectCard
            id={project.id}
            title={project.title}
            desc={project.desc}
            st1={project.st1}
            st2={project.st2}
            st3={project?.st3}
            ico={project.ico}
            imgUrl={project.imgUrl}
            imgUrlHover={project.imgUrlHover}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
