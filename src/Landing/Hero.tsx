import ExpCard from "../components/ExpCard";
import type { Service } from "../types";
import { motion } from "motion/react";

const services: Service[] = [
  {
    id: 1,
    title: "FullStack Development",
    description:
      "I build complete web solutions, seamlessly integrating frontend experiences with robust backend APIs. Leveraging modern stacks, I deliver applications that are scalable, maintainable, and optimized for real-world users.",
    st1: ["Node.js", "Express.js", "React"],
    st2: ["REST-API", "Supabase", "Docker"],
    st3: ["Git", "Github"],
    bgc: "#001528",
    bgl: "#005566",
  },
  {
    id: 2,
    title: "Front-End & UI/UX",
    description:
      "I translate complex concepts into seamless, visually compelling frontend experiences. My goal is to perfect the user journey, ensuring every interaction is intuitive, impactful, and optimized for real-world adoption.",
    st1: ["Tailwind-CSS", "Framer-Motion"],
    st2: ["Figma"],
    st3: ["HTML", "CSS", "Javascript"],
    bgc: "#1b0505",
    bgl: "#5C0303",
  },
];

const Hero = () => {
  return (
    <div className=" mt-4 w-full font-lexend px-[6vw] md:px-[12vw] lg:px-[16vw]">
      <div className="flex flex-col md:px-[2vw] px-[6vw] py-[5vh] bg-[#a7a7a7] rounded-2xl w-full relative">
        <div className="flex flex-row w-full justify-between ">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-row justify-between "
          >
            <p className=" text-transparent bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text font-normal text-[3.2em] md:text-[7.6em] leading-none">
              WHAT I DO
            </p>
          </motion.div>

          <p className=" hidden md:flex md:text-xl text-base mt-3 text-neutral-800">
            {"<Services>"}
          </p>
        </div>
        <div className="flex flex-col gap-y-8 mt-4">
          {services.map((service) => (
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(2px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              className=""
              key={service.id}
            >
              <ExpCard
                id={service.id}
                title={service.title}
                description={service.description}
                st1={service.st1}
                st2={service.st2}
                st3={service.st3}
                bgc={service.bgc}
                bgl={service.bgl}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
