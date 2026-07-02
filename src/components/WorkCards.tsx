import type { expWorkProp } from "../Experience";
import { motion } from "motion/react";
type WorkCardsProps = {
  xp: expWorkProp;
  className: string;
};

const WorkCards = ({ xp, className }: WorkCardsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateY(30px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      className={`flex flex-col font-lexend md:text-xl text-sm md:gap-y-8 gap-y-4 font-light w-full p-3 md:p-6 pb-6 md:pb-12  drop-shadow-xl drop-shadow-neutral-800/20 ${className}`}
    >
      <div className="flex flex-col md:flex-row justify-between ">
        <span className="md:text-3xl text-2xl leading-none">
          {xp.title}
          <br />
          <span className={`${"text-amber-300 text-sm md:text-xl "}`}>
            @{xp.where}
          </span>
        </span>
        <span className="text-left md:text-right">
          {xp.yr}
          <br />
          {xp.location}
        </span>
      </div>
      <div className="flex flex-col">
        <ul className="list-disc list-inside space-y-2 text-neutral-400">
          {xp.resp.map((res, idx) => (
            <li key={idx}>{res}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default WorkCards;
