import { useRef } from "react";
import ProjectCard from "./components/ProjectCard";
import type { Project } from "./types";
import { useScroll, useTransform, motion } from "motion/react";

const projects: Project[] = [
  {
    id: 1,
    title: "BrewTime",
    st1: ["React Native", "Node.js"],
    st2: ["Supabase", "Express.js"],
    st3: ["TailwindCSS"],
    imgUrl: "/projects/brewtime.jpg",
  },
  {
    id: 2,
    title: "LabelGen",
    st1: ["React.js", "Node.js"],
    st2: ["Express.js", "AWS EC2"],
    st3: ["TailwindCSS"],
    imgUrl: "/projects/labelgen_main.jpg",
    imgUrlHover: "/projects/labelgen.jpg",
  },
  {
    id: 3,
    title: "Otaku Compass",
    st1: ["HTML", "CSS", "Javascript"],
    st2: ["React.js", "REST API"],
    imgUrl: "/projects/otaku-compass_main.png",
    imgUrlHover: "/projects/otaku-compass.png",
  },
];

const Projects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <div className="relative bg-neutral-700 text-neutral-300 font-lexend w-full">
      <div className="sticky top-0 z-50  px-[2vw] pt-5 pb-4">
        <div className="flex flex-row justify-between mb-14">
          <div className="flex flex-col text-[6vw] leading-none">
            <p className="font-lexend text-transparent bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text">
              SOME THINGS
            </p>
            <div className="flex flex-row items-end">
              <p className="text-transparent bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text">
                I'VE BUILT
              </p>
              <div>
                <svg
                  className="rotate-135 translate-y-1.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={88}
                  height={88}
                  viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="#a7a7a7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="m19 12l-7-7l-7 7m7-7v14"
                  />
                </svg>
              </div>
            </div>
          </div>
          <p className="font-lexend text-xl mt-3 text-neutral-300">
            {"<Projects>"}
          </p>
        </div>
      </div>

      {/* Scroll Container */}
      <div
        ref={targetRef}
        className="relative h-[300vh]" // This creates the scroll distance
      >
        <div className="sticky top-1/2 -translate-y-2/5 overflow-hidden h-screen px-[2vw]">
          <motion.div
            className="flex gap-8 h-full items-center"
            style={{
              x,
              width: `${projects.length * 100}vw`, // Give it a specific width based on number of projects
            }}>
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-shrink-0 w-[90vw] h-full flex items-center">
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  st1={project.st1}
                  st2={project.st2}
                  st3={project?.st3}
                  imgUrl={project.imgUrl}
                  imgUrlHover={project?.imgUrlHover}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="relative h-[120vh] mt-10">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`absolute w-full transition-transform duration-500`}
            style={{
              top: `${index * 40}px`, // adjust this value to control overlap depth
              zIndex: projects.length - index, // top-most card has higher z-index
            }}>
            <ProjectCard
              id={project.id}
              title={project.title}
              st1={project.st1}
              st2={project.st2}
              st3={project?.st3}
              imgUrl={project.imgUrl}
              imgUrlHover={project?.imgUrlHover}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
// import { useRef } from "react";
// import ProjectCard from "./components/ProjectCard";
// import type { Project } from "./types";
// import { useScroll, useTransform, motion } from "motion/react";

// const projects: Project[] = [
//   {
//     id: 1,
//     title: "BrewTime",
//     st1: ["React Native", "Node.js"],
//     st2: ["Supabase", "Express.js"],
//     st3: ["TailwindCSS"],
//     imgUrl: "/projects/brewtime.jpg",
//   },
//   {
//     id: 2,
//     title: "LabelGen",
//     st1: ["React.js", "Node.js"],
//     st2: ["Express.js", "AWS EC2"],
//     st3: ["TailwindCSS"],
//     imgUrl: "/projects/labelgen_main.jpg",
//     imgUrlHover: "/projects/labelgen.jpg",
//   },
//   {
//     id: 3,
//     title: "Otaku Compass",
//     st1: ["HTML", "CSS", "Javascript"],
//     st2: ["React.js", "REST API"],
//     imgUrl: "/projects/otaku-compass_main.png",
//     imgUrlHover: "/projects/otaku-compass.png",
//   },
// ];

// const Projects = () => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

//   return (
//     <div
//       ref={targetRef}
//       className=" relative bg-neutral-700 text-neutral-300 font-lexend pt-4 min-h-screen px-[2vw] py-[1vh] w-full ">
//       <div className="flex flex-row justify-between mb-14 sticky top-0 pt-5">
//         <div className="flex flex-col text-[6vw] leading-none ">
//           <p className="font-lexend text-transparent bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text">
//             SOME THINGS
//           </p>
//           <div className="flex flex-row items-end">
//             <p className=" text-transparent bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text">
//               I'VE BUILT
//             </p>
//             <div>
//               <svg
//                 className="rotate-135 translate-y-1.5"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width={88}
//                 height={88}
//                 viewBox="0 0 24 24">
//                 <path
//                   fill="none"
//                   stroke="#a7a7a7"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={1.5}
//                   d="m19 12l-7-7l-7 7m7-7v14"></path>
//               </svg>
//             </div>
//           </div>
//         </div>
//         <p className="font-lexend text-xl mt-3 text-neutral-300">
//           {"<Projects>"}
//         </p>
//       </div>
//       <div className="sticky top-1/2 overflow-hidden h-screen flex w-full">
//         <motion.div style={{ x }} className="flex h-[120vh] mt-10 w-full ">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className={`w-full transition-transform duration-500`}
//               style={{}}>
//               <ProjectCard
//                 id={project.id}
//                 title={project.title}
//                 st1={project.st1}
//                 st2={project.st2}
//                 st3={project?.st3}
//                 imgUrl={project.imgUrl}
//                 imgUrlHover={project?.imgUrlHover}
//               />
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Projects;
