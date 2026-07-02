import CustomButton from "../components/CustomButton";
import { motion } from "motion/react";

const Landing = () => {
  return (
    <div className="font-lexend relative min-h-[94vh] w-full flex flex-col items-start justify-center gap-8 px-[6vw] md:px-[12vw] lg:px-[16vw] ">
      <motion.p
        initial={{
          opacity: 0,
          transform: "translateY(30px)",
        }}
        animate={{
          opacity: 1,
          transform: "translateY(0px)",
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className=" font-normal text-[3.6em] md:text-[7.6em] leading-none bg-gradient-to-r from-white to-white/60 text-transparent bg-clip-text"
      >
        Crafting Experiences <br /> Pixel by pixel.
      </motion.p>
      <motion.span
        initial={{
          opacity: 0,
          transform: "translateY(30px)",
        }}
        animate={{
          opacity: 1,
          transform: "translateY(0px)",
        }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.1 }}

        className=" text-[1em] md:text-base text-neutral-400 text-pretty md:font-light font-normal md:max-w-2/3 "
      >
        I'm <span className="text-neutral-50 ">Vaibhav Dekatey,</span>
        <br />
        Front-end Developer & Visual Designer.
        <br />
        <br />
        Passionate about creating intuitive, polished, and memorable digital
        experiences. Eager to explore global opportunities where my work can
        make a meaningful impact.
      </motion.span>
      <motion.div
        initial={{
          opacity: 0,
          transform: "translateY(30px)",
        }}
        animate={{
          opacity: 1,
          transform: "translateY(0px)",
        }}
        transition={{ duration: 0.8 }}
        className="flex flex-row gap-x-4"
      >
        <CustomButton
          href="#Projects"
          title="View Projects"
          className="border-transparent bg-neutral-300 text-neutral-800 hover:bg-transparent hover:border-neutral-200 hover:text-neutral-400"
        />
        <CustomButton
          href="#Contact"
          title="Get In Touch"
          className="border border-white text-white bg-transparent hover:bg-white hover:text-black"
        />
      </motion.div>
    </div>
  );
};

export default Landing;
