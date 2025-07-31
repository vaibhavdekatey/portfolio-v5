import logo from "./assets/logo.png";

const Landing = () => {
  return (
    <div className="font-lexend relative min-h-[96vh] w-full flex flex-col px-[2vw]">
      <span className="bg-gradient-to-r from-neutral-300 to-neutral-400 text-transparent bg-clip-text w-full flex items-center justify-center antialiased select-none whitespace-nowrap text-[10vw]  ">
        VAIBHAV DEKATEY
      </span>

      <div className="flex flex-col md:w-[50vw] lg:w-[25vw] mt-10">
        <p className="bg-gradient-to-l from-neutral-300 to-neutral-400 text-2xl text-transparent bg-clip-text select-none mb-5 ">
          Driven by a passion for building intuitive, polished, and memorable
          digital experiences, I'm eager to explore global opportunities where
          my work can make a significant impact.
        </p>
        <a
          href="#"
          className="rounded-full w-fit h-12 px-6 flex items-center justify-center bg-neutral-200">
          Contact
          <svg
            className="rotate-45"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="#0a0a0a"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m5 12l7-7l7 7m-7 7V5"></path>
          </svg>
        </a>
      </div>
      <div className="absolute bottom-0 right-0 opacity-10 ">
        <img src={logo} alt="logo" className="h-[56vh] w-auto object-contain" />
      </div>
    </div>
  );
};

export default Landing;
