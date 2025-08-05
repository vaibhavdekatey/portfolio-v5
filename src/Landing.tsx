import gsap from "gsap";
import logo from "./assets/logo.png";
import { useEffect, useLayoutEffect, useRef } from "react";

const Landing = () => {
  // const textRef = useRef([]);
  const textRef = useRef<(HTMLSpanElement | null)[]>([]);
  const lastTextRef = useRef<(HTMLSpanElement | null)[]>([]);
  const firstName = "CRAFTING EXPERIENCES";
  const lastName = "PIXEL BY PIXEL";
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
      gsap.to(lastTextRef.current, {
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
    <div className="font-lexend relative min-h-[96vh] w-full flex flex-col px-[6vw] md:px-[2vw]">
      <div className=" overflow-hidden leading-none my-8">
        {/* <span
          ref={textRef}
          className="name leading-none transform translate-y-full bg-gradient-to-r overflow-y-hidden from-neutral-300 to-neutral-400 text-transparent bg-clip-text w-full flex items-center justify-center antialiased select-none whitespace-nowrap text-[10vw]  ">
          VAIBHAV DEKATEY
        </span> */}
        <div className="flex flex-col font-koulen leading-none justify-between text-[18vw] md:text-[11vw] z-20">
          <div className="flex justify-between">
            {firstName.split("").map((char, index) => (
              <span
                key={index}
                ref={(el) => {
                  textRef.current[index] = el;
                }}
                className="  translate-y-full bg-gradient-to-b opacity-0 from-neutral-300 to-neutral-400 text-transparent bg-clip-text select-none">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
          <div className="flex">
            {lastName.split("").map((char, index) => (
              <span
                key={index}
                ref={(el) => {
                  lastTextRef.current[index] = el;
                }}
                className="  translate-y-full bg-gradient-to-b opacity-0 from-neutral-300 to-neutral-400 text-transparent bg-clip-text select-none">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:w-[50vw] lg:w-[35vw]  ">
        <p
          ref={desRef}
          className="bg-gradient-to-l from-neutral-300 to-neutral-400 md:text-xl lg:text-2xl text-transparent bg-clip-text select-none mb-8 transform translate-y-full opacity-0 overflow-hidden">
          I’m <span className="text-neutral-200">Vaibhav Dekatey</span>,
          passionate about creating intuitive, polished, and memorable digital
          experiences. Eager to explore global opportunities where my work can
          make a meaningful impact.
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
