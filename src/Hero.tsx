import ExpCard from "./components/ExpCard";
import type { Service } from "./types";
import { motion } from "motion/react";

const services: Service[] = [
  {
    id: 1,
    title: "FullStack Development",
    description:
      "I build complete web solutions, seamlessly integrating frontend experiences with robust backend APIs. Leveraging modern stacks, I deliver applications that are scalable, maintainable, and optimized for real-world users",
    st1: ["React", "Node.js", "Express.js"],
    st2: ["REST API", "Supabase", "Docker"],
    st3: ["Git", "Github"],
    bgc: "#001528",
    bgl: "#005566",
  },
  {
    id: 2,
    title: "Front-End & UI/UX",
    description:
      "I translate complex concepts into seamless, visually compelling frontend experiences. My goal is to perfect the user journey, ensuring every interaction is intuitive, impactful, and optimized for real-world adoption.",
    st1: ["Tailwind CSS", "Framer Motion"],
    st2: ["Figma"],
    st3: ["HTML", "CSS", "Javascript"],
    bgc: "#1b0505",
    bgl: "#5C0303",
  },
];

const Hero = () => {
  return (
    <div className="bg-[#a7a7a7] rounded-t-2xl mt-4 w-full min-h-screen">
      <div className="flex flex-col md:px-[2vw] px-[6vw] py-[2vh] w-full">
        <div className="flex flex-row w-full justify-between">
          <motion.div
            initial={{
              y: 20,
            }}
            whileInView={{
              y: 0,
            }}
            transition={{
              duration: 0.4,
              ease: "easeIn",
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-row justify-between ">
            <p className="font-koulen text-transparent bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-[16vw] md:text-[10vw] leading-none">
              WHAT I DO
            </p>
            <div className="self-end lg:-translate-y-2.5 md:-translate-y-1.5 -translate-y-2">
              <svg
                className="rotate-135 h-[5.5vw] w-[5.5vw] "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="#404040"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="m19 12l-7-7l-7 7m7-7v14"></path>
              </svg>
            </div>
          </motion.div>

          <p className="font-koulen md:text-xl text-base mt-3 text-neutral-800">
            {"<Services>"}
          </p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } },
          }}
          viewport={{ once: true, amount: 0.4 }}>
          {services.map((service) => (
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 1 },
                show: { y: 0, opacity: 1 },
              }}
              transition={{
                duration: service.id - 1 + 0.7,
                ease: "easeInOut",
              }}
              key={service.id}>
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
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
