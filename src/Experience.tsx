import WorkCards from "./components/WorkCards";
import { motion } from "motion/react";

export type expWorkProp = {
  id: number;
  title: string;
  where: string;
  location: string;
  yr: string;
  resp: string[];
  className?: string;
};

const exp: expWorkProp[] = [
  {
    id: 1,
    title: "Outreach & Media Co-leader",
    where: "Codechef DYPIU",
    location: "Pune, Remote",
    yr: "June 2020 - March 2021",
    resp: [
      "Promottion of DSA 2020 with help of other notable codechef college chapters. ",
      "Learned how to work and co-ordinate with the team even in tight conditions.",
      "Responsible for creating new, unique and enagaging posts for promotions of the events. ",
      "Responsible for managing social media handles.",
    ],
  },
  // {
  //   id: 2,
  //   title: "Project Intern",
  //   where: "DYPIU, Pune",
  //   location: "Pune, Remote",
  //   yr: "April 2021 - June 2021",
  //   resp: [
  //     "A 6-week joint Project internship.",
  //     "Automated the lighting system and home appliances using IoT.",
  //     "Made an android app based on Blynk libraries to control the appliances.",
  //     "Worked with ESP32 Microprocessor along with other components to automate.",
  //   ],
  // },
  {
    id: 3,
    title: "Project Intern",
    where: "Wajooba LLC.",
    location: "Pune, Remote",
    yr: "Feb 2023 - August 2023",
    resp: [
      "Writing solidity smart contracts",
      "Carrying out testing for smart contracts",
      "Creating wireframes and prototype of website",
      "Creating front-end for the project",
    ],
  },
  {
    id: 4,
    title: "Co-founder & Front-End Developer",
    where: "Brewtime India",
    location: "India, Remote",
    yr: "August 2024 - October 2025",
    resp: [
      "Developed a React Native app integrated with Supabase, enabling real-time user-generated coffee recipes and seamless data management.",
      "Designed and launched an e-commerce website on Wix, featuring responsive design and optimized user experience for coffee accessories.",
      "Leveraged analytics to identify areas of improvement, enhancing app usability and performance.",
    ],
  },
  {
    id: 5,
    title: "Web Development & Robotics Integration Intern",
    where: "N K Engineering",
    location: "Ghaziabad, On-site",
    yr: "October 2025 - February 2026",
    resp: [
      "Shipped a responsive, SEO-Optimized Landing page, landing the company on the map, and entry into a digital presence.",
      "Built a real-time QC dashboard for on-site part inspection, replacing a fully manual review workflow.",
      "Integrated computer vision inference for automated defect flagging, reducing manual inspection over-head.",
    ],
  },
];

const Experience = () => {
  const revWork = exp.reverse();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      id="Experience"
      className="bg-black relative text-neutral-300 font-lexend min-h-screen px-[6vw] md:px-[12vw] lg:px-[16vw] py-8 md:py-12 w-full "
    >
      <div className="flex flex-row justify-between mb-14">
        <div className="flex flex-col leading-none ">
          <h1 className=" font-normal text-[3.6em] md:text-[7.6em] leading-none bg-gradient-to-r from-white to-white/60 text-transparent bg-clip-text">
            Where I've <br />
            Worked
          </h1>
        </div>
        <p className="font-lexend text-xl mt-3 text-neutral-300 md:flex hidden">
          {"<Work>"}
        </p>
      </div>

      <div className="space-y-8">
        {revWork.map((expWork, index) => (
          <WorkCards
            xp={expWork}
            className={
              index === revWork.length - 1 ? "" : "border-b border-neutral-700 "
            }
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
