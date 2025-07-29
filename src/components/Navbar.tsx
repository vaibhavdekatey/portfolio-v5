import { useState } from "react";

type navLink = {
  key: number;
  title: string;
  url: string;
};

const navLinks: navLink[] = [
  { key: 1, title: "About", url: "#About" },
  { key: 2, title: "Experience", url: "#Experience" },
  { key: 3, title: "Projects", url: "#Projects" },
  { key: 4, title: "Contact", url: "#Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className=" relative min-w-full px-[2vw]">
      <div className="min-w-full">
        <div className="h-16 flex items-center justify-between">
          <div>
            <p className="font-lexend text-neutral-300 select-none">
              Web Designer & Developer
            </p>
          </div>
          <div className=" flex-row font-lexend hidden lg:flex text-neutral-200 lg:items-center">
            {navLinks.map((navlink) => (
              <div
                key={navlink.key}
                className="sm:mx-1 md:mx-2 mx-3 md:text-sm hover:text-neutral-400 transition-all ease-in-out">
                <a href={navlink.url} className="flex flex-row">
                  <p className="">{navlink.title}</p>
                </a>
              </div>
            ))}
            <button
              className=" ml-3 sm:mx-1 md:mx-2 mx-3 md:text-sm transition-all ease-in-out border-2 border-transparent bg-neutral-300 text-neutral-800 hover:bg-transparent hover:border-neutral-200 hover:text-neutral-400 rounded-full p-2 px-3"
              onClick={() => console.log("Resume")}>
              Resume
            </button>
          </div>
          {/* mobile menu */}
          <div className="lg:hidden text-neutral-200">
            <button
              className="font-lexend lg:hidden mx-3"
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              Menu
            </button>
            {isMenuOpen && (
              <div className=" bg-neutral-800 font-lexend p-1 absolute top-16 right-0">
                {navLinks.map((navlink) => (
                  <div
                    key={navlink.key}
                    className="m-3 hover:text-neutral-400 transition-all ease-in-out">
                    <a href={navlink.url}>{navlink.title}</a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
