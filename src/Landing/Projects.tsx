import type { Project } from "../types";
import reactIco from "../assets/icons/react.png";
import supabaseIco from "../assets/icons/supabase.png";
import tailwindIco from "../assets/icons/tailwind.png";
import apiIco from "../assets/icons/api.png";
import ProjectCard from "../components/ProjectCard";
import { motion } from "motion/react";
import { div } from "motion/react-m";

const projects: Project[] = [
  {
    id: 1,
    title: "Brewtime",
    desc: "A React Native app with Supabase, featuring user-generated coffee recipes, real-time updates, and a dynamic, intuitive interface.",
    st1: ["React-Native", "Node.js"],
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
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      id="Projects"
      className=" flex flex-col px-[6vw] md:px-[12vw] lg:px-[16vw] py-[4vh] pt-[8vh] w-full relative font-lexend"
    >
      <div className="flex flex-row w-full justify-between ">
        <div className="flex justify-center md:justify-start">
          <p className=" text-transparent bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text font-normal  text-[3.2em] md:text-[7.6em] leading-none">
            Some things
            <br /> I've Built
          </p>
        </div>

        <p className="hidden md:flex md:text-xl text-base mt-3 text-neutral-200">
          {"<Projects>"}
        </p>
      </div>
      <div>
        {projects.map((project) => (
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
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
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
