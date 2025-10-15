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
    <div className="bg-[#323232] flex flex-col md:px-[2vw] px-[6vw] py-[4vh] lg:px-[8vw] w-full relative">
      <div className="flex flex-row w-full justify-between ">
        <div className="flex flex-col md:flex-row justify-between ">
          <p className="font-koulen inline-block text-transparent bg-gradient-to-r from-neutral-100 to-neutral-300 bg-clip-text text-[16vw] md:text-[8vw] leading-none">
            SOME THINGS I'VE BUILT
          </p>
          <div className=" md:self-end">
            <svg
              className=" lg:h-[5.5vw] lg:w-[5.5vw] mt-4 mb-2 sm:mb-0 w-[8vw] h-[8vw] md:w-[8vw] md:h-[8vw]"
              xmlns="http://www.w3.org/2000/svg"
              width={21}
              height={21}
              viewBox="6 6 10 10"
            >
              <path
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.5 7.5v7h-7m-1-8l8 8"
                strokeWidth={1}
              ></path>
            </svg>
          </div>
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
