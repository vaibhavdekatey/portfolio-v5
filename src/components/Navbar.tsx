import { useEffect, useState } from "react";
import type { navLink } from "../types";
import Logo from "../assets/logo.svg?react";
import { motion } from "motion/react";
import CustomButton from "./CustomButton";
import resume from "../assets/vaibhav_dekatey_resume_2026.pdf";

const navLinks: navLink[] = [
  { key: 1, title: "About", url: "#About" },
  { key: 2, title: "Experience", url: "#Experience" },
  { key: 3, title: "Projects", url: "#Projects" },
  { key: 4, title: "Contact", url: "#Contact" },
];

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: "-110%" }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.1,
        ease: [0, 1, 0, 1],
      }}
      className={`fixed left-0 top-0 z-50 px-[6vw] md:px-[12vw] lg:px-[16vw] bg-linear-to-b from-[#0f0f0f] to-black/0 min-w-full h-22 font-lexend font-extralight transition-all ease-in-out duration-500 ${isVisible ? "translate-y-0" : "-translate-y-full"} `}
    >
      <div className=" relative min-w-full ">
        <div className="min-w-full">
          <div className="h-18 flex flex-row items-center justify-between">
            <div>
              <Logo className="md:w-14 w-12 h-fit text-white" />
            </div>
            <div className="flex-row tracking-wider hidden text-base lg:flex lg:gap-x-4 text-neutral-200 lg:items-center">
              {navLinks.map((navlink) => (
                <a
                  key={navlink.key}
                  href={navlink.url}
                  className="flex flex-row sm:mx-1 md:mx-2 mx-3 hover:text-neutral-400 transition-all ease-in-out"
                >
                  <p className="">{navlink.title}</p>
                </a>
              ))}
            </div>
            <a
              className=" transition-all md:flex hidden cursor-pointer px-4 ease-in-out border font-light border-transparent bg-neutral-300 text-neutral-800 hover:bg-transparent hover:border-neutral-200 hover:text-neutral-400 rounded-full p-2"
              href={resume}
              target="_blank"
            >
              Resume
            </a>
            {/* mobile menu */}
            <div className="lg:hidden md:hidden text-neutral-200 w-fit text-base">
              <button
                className="font-lexend lg:hidden md:hidden flex items-center w-fit  text-white bg-secondary rounded-full p-1 drop-shadow-2xl drop-shadow-[#000000]/70"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {!!isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="42"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path d="M5.47 5.47a.75.75 0 0 1 1.06 0l12 12a.75.75 0 1 1-1.06 1.06l-12-12a.75.75 0 0 1 0-1.06" />
                      <path d="M18.53 5.47a.75.75 0 0 1 0 1.06l-12 12a.75.75 0 0 1-1.06-1.06l12-12a.75.75 0 0 1 1.06 0" />
                    </g>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="42"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M4.5 17.27q-.213 0-.356-.145T4 16.768t.144-.356t.356-.143h15q.213 0 .356.144q.144.144.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.144T4 11.999t.144-.356t.356-.143h15q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.143Q4 7.443 4 7.23t.144-.356t.356-.143h15q.213 0 .356.144T20 7.23t-.144.356t-.356.144z"
                    />
                  </svg>
                )}
              </button>
              {/* {isMenuOpen && ( */}
              <div
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={` tracking-wider absolute p-3 top-18 left-0 w-full h-screen z-40 transition-all ease-in duration-150 ${isMenuOpen ? "visible opacity-100 " : "invisible opacity-0 pointer-events-none"}`}
              >
                <div
                  className={`bg-neutral-800/10 backdrop-blur-2xl drop-shadow-2xl drop-shadow-[#000000]/70 flex flex-col justify-between items-end text-right px-1 pt-3 w-full h-fit rounded-3xl border border-neutral-700/40 z-40 transition-all ease-in duration-150 ${isMenuOpen ? "visible opacity-100 " : "invisible opacity-0 pointer-events-none"}`}
                >
                  <div className="mt-4">
                    {navLinks.map((nav, i) => (
                      <div
                        key={i}
                        className={`mb-5 mx-3 pr-2 hover:text-neutral-400 text-neutral-100 transition-all ease-in-out ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"}`}
                        style={{
                          transitionDelay: "100ms",
                        }}
                      >
                        <a href={`${nav.url}`}>{nav.title}</a>
                      </div>
                    ))}

                    <div
                      style={{
                        transitionDelay: "100ms",
                      }}
                      className="mb-5 mx-3 pr-2 pt-2"
                    >
                      <CustomButton
                        href={resume}
                        className={`bg-white text-black mr-[-12px] py-3 ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"}`}
                        title="Resume"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
