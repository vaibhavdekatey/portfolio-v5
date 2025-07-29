import logo from "../assets/logo.png";
import type { Service } from "./Hero";

const ExpCard = ({ id, title, description, st1, st2, st3, bgc }: Service) => {
  return (
    <div
      className="font-lexend text-neutral-200 flex flex-row w-full rounded-2xl p-6"
      style={{ backgroundColor: bgc }}>
      <div className="min-w-[50vw]">
        <h1 className="text-[3vw] font-bold text-[#a7a7a7]">{title}</h1>
      </div>
      <div className="flex flex-col ">
        <h2>{description}</h2>
        <div>
          <div className="flex flex-row">
            <p className="font-lexend font-light text-neutral-300 mr-1">01.</p>
            {st1.map((tech, idx) => (
              <p className="font-lexend font-light mr-2" key={`st1-${idx}`}>
                {tech}
              </p>
            ))}
          </div>
          <div className="flex flex-row">
            <p className="font-lexend font-light text-neutral-300 mr-1">02.</p>
            {st2.map((tech, idx) => (
              <p className="font-lexend font-light mr-2" key={`st2-${idx}`}>
                {tech}
              </p>
            ))}
          </div>
          <div className="flex flex-row">
            {st3 && (
              <>
                <p className="font-lexend font-light text-neutral-300 mr-1">
                  03.
                </p>
                {st3?.map((tech, idx) => (
                  <p className="font-lexend font-light mr-2" key={`st3-${idx}`}>
                    {tech}
                  </p>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpCard;
