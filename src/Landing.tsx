import gsap from "gsap";
import logo from "./assets/logo.png";
import { useEffect, useLayoutEffect, useRef } from "react";

const Landing = () => {
  // const textRef = useRef([]);
  const textRef = useRef<(HTMLSpanElement | null)[]>([]);
  const name = "VAIBHAV DEKATEY";
  const desRef = useRef(null);
  const btnRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(textRef.current, {
        y: 0,
        stagger: 0.05,
        delay: 0.1,
        duration: 0.5,
        opacity: 1,
        ease: "power2.out",
      });

      gsap.to(desRef.current, {
        y: 0,
        delay: 0.2,
        duration: 0.5,
        opacity: 1,
      });

      gsap.set(btnRef.current, {
        y: "-100%",
        opacity: 0,
      });

      gsap.to(btnRef.current, {
        y: 0,
        delay: 0.2,
        duration: 0.8,
        opacity: 1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="font-lexend relative min-h-[96vh] w-full flex flex-col px-[2vw]">
      <div className=" overflow-hidden leading-none my-8">
        {/* <span
          ref={textRef}
          className="name leading-none transform translate-y-full bg-gradient-to-r overflow-y-hidden from-neutral-300 to-neutral-400 text-transparent bg-clip-text w-full flex items-center justify-center antialiased select-none whitespace-nowrap text-[10vw]  ">
          VAIBHAV DEKATEY
        </span> */}
        <div className="flex leading-none text-[9.7vw] z-20">
          {name.split("").map((char, index) => (
            <span
              key={index}
              ref={(el) => {
                textRef.current[index] = el;
              }}
              className="inline-block translate-y-full bg-gradient-to-r opacity-0 from-neutral-300 to-neutral-400 text-transparent bg-clip-text select-none">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:w-[50vw] lg:w-[25vw] mt-10 ">
        <p
          ref={desRef}
          className="bg-gradient-to-l from-neutral-300 to-neutral-400 text-2xl text-transparent bg-clip-text select-none mb-8 transform translate-y-full opacity-0 overflow-hidden">
          Driven by a passion for building intuitive, polished, and memorable
          digital experiences, I'm eager to explore global opportunities where
          my work can make a significant impact.
        </p>
        <a
          ref={btnRef}
          href="#"
          className=" group rounded-full leading-none border-[1px] text-2xl border-neutral-200 hover:text-neutral-200 w-fit h-16 px-6 flex items-center justify-center bg-neutral-200 hover:bg-transparent transition-all ease-in-out">
          Contact
          <svg
            className="rotate-45 translate-y-0.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            width={29}
            height={29}
            viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
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
