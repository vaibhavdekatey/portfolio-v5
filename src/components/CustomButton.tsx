import React from "react";

interface CustomButtonProps {
  className?: string;
  href: string;
  title: string;
}

const CustomButton = ({ className, href, title }: CustomButtonProps) => {
  return (
    <a
      className={`${className} transition-all cursor-pointer px-4 ease-in-out border font-light rounded-full p-2`}
      onClick={() => console.log("Resume")}
      href={href}
    >
      {title}
    </a>
  );
};

export default CustomButton;
