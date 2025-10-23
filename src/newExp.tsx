import React from "react";

const NewExp = () => {
  return (
    <div className="bg-black min-h-screen flex-1 w-full flex relative">
      <div className="sticky h-fit p-4 top-0 left-0 font-koulen text-[20vh] leading-none text-white w-1/2">
        Some Large Heading
      </div>
      <div className="font-koulen relative pt-5 pr-8 text-white w-1/2">
        <div className="h-[60vh] sticky top-10 w-full mb-24 bg-blue-400 rounded-2xl my-4 "></div>
        <div className="h-[60vh] sticky top-10 w-full mb-24 bg-red-400 rounded-2xl my-4 "></div>
        <div className="h-[60vh] sticky top-10 w-full mb-24 bg-green-400 rounded-2xl my-4 "></div>
        <div className="h-[60vh] sticky top-10 w-full mb-24 bg-amber-400 rounded-2xl my-4 "></div>
        <div className="h-[60vh] sticky top-10 w-full mb-24 bg-neutral-400 rounded-2xl my-4 "></div>
        <div className="h-[60vh] sticky top-10 w-full mb-24 bg-violet-400 rounded-2xl my-4 "></div>
      </div>
    </div>
  );
};

export default NewExp;
