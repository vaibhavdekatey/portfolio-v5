import { useState } from "react";
import type { navLink } from "../types";

const navLinks: navLink[] = [
  { key: 1, title: "About", url: "#About" },
  { key: 2, title: "Experience", url: "#Experience" },
  { key: 3, title: "Projects", url: "#Projects" },
  { key: 4, title: "Contact", url: "#Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-w-full min-h-full">
      <nav className=" relative min-w-full px-[6vw] md:px-[2vw]">
        <div className="min-w-full">
          <div className="h-16 flex items-center justify-between">
            <div>
              <p className="font-koulen text-xl text-neutral-300 select-none">
                Web Designer & Developer
              </p>
            </div>
            <div className=" flex-row font-koulen hidden lg:flex text-neutral-200 lg:items-center">
              {navLinks.map((navlink) => (
                <div
                  key={navlink.key}
                  className="sm:mx-1 md:mx-2 mx-3 md:text-xl hover:text-neutral-400 transition-all ease-in-out"
                >
                  <a href={navlink.url} className="flex flex-row">
                    <p className="">{navlink.title}</p>
                  </a>
                </div>
              ))}
              {/* <button
              className=" ml-3 sm:mx-1 md:mx-2 mx-3 md:text-sm transition-all ease-in-out border-2 border-transparent bg-neutral-300 text-neutral-800 hover:bg-transparent hover:border-neutral-200 hover:text-neutral-400 rounded-full p-2 px-3"
              onClick={() => console.log("Resume")}>
              Resume
              </button> */}
            </div>
            {/* mobile menu */}
            <div className="lg:hidden hidden md:visible  text-neutral-200">
              <button
                className="font-koulen lg:hidden hidden md:visible  mx-3"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Menu
              </button>
              {isMenuOpen && (
                <div className=" bg-neutral-800 font-koulen p-1 absolute top-16 right-0 z-50">
                  {navLinks.map((navlink) => (
                    <div
                      key={navlink.key}
                      className="m-3 hover:text-neutral-400 transition-all ease-in-out"
                    >
                      <a href={navlink.url}>{navlink.title}</a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <div className="fixed bottom-6.5 right-6.5 z-50">
        <div className="md:hidden text-neutral-200">
          <button
            className="font-koulen md:hidden bg-neutral-400 border-[1px] border-neutral-300 flex justify-center items-center rounded-full h-16 w-16 shadow-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className={` transition-all ${
                isMenuOpen ? "rotate-45" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000"
                d="M12.75 11.25V5a.75.75 0 0 0-1.5 0v6.25H5a.75.75 0 0 0 0 1.5h6.25V19a.76.76 0 0 0 .75.75a.75.75 0 0 0 .75-.75v-6.25H19a.75.75 0 0 0 .75-.75a.76.76 0 0 0-.75-.75Z"
              />
            </svg>
          </button>

          <div
            className={`absolute bottom-20 right-0 w-48 origin-bottom-right rounded-md bg-neutral-800 p-2 font-koulen shadow-lg ring-1 ring-neutral-700 ring-opacity-5 transition-all duration-300 ease-in-out
              ${
                isMenuOpen
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }
      `}
          >
            {navLinks.map((navlink) => (
              <div
                key={navlink.key}
                className="m-3 hover:text-neutral-400 transition-all ease-in-out"
              >
                <a href={navlink.url}>{navlink.title}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
