const Projects = () => {
  return (
    <div className="text-neutral-300 font-lexend mt-4 min-h-screen px-[2vw] py-[1vh] w-full ">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col text-[6vw] leading-none ">
          <p className="font-lexend text-transparent bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text">
            SOME THINGS
          </p>
          <div className="flex flex-row items-end">
            <p className=" text-transparent bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text">
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
                  d="m19 12l-7-7l-7 7m7-7v14"></path>
              </svg>
            </div>
          </div>
        </div>
        <p className="font-lexend text-xl mt-3 text-neutral-300">
          {"<Projects>"}
        </p>
      </div>
    </div>
  );
};

export default Projects;
