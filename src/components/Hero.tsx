import ExpCard from "./ExpCard";

export type Service = {
  id: number;
  title: string;
  description: string;
  st1: string[];
  st2: string[];
  st3?: string[];
  bgc: string;
};

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
  },
];

const Hero = () => {
  return (
    <div className="bg-[#a7a7a7] rounded-t-2xl mt-4 w-full min-h-screen">
      <div className="flex flex-col px-[2vw] py-[1vh] w-full">
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between ">
            <p className="font-lexend text-[10vw] leading-none">WHAT I DO</p>
            <p className="font-lexend text-xl mt-3 ">{"<Services>"}</p>
          </div>
          <div>
            <svg
              className="rotate-135"
              xmlns="http://www.w3.org/2000/svg"
              width={72}
              height={72}
              viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="m19 12l-7-7l-7 7m7-7v14"></path>
            </svg>
          </div>
        </div>
        <div>
          {services.map((service) => (
            <div key={service.id}>
              <ExpCard
                id={service.id}
                title={service.title}
                description={service.description}
                st1={service.st1}
                st2={service.st2}
                st3={service.st3}
                bgc={service.bgc}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
