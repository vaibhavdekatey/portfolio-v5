import React, { useLayoutEffect, useRef, useState } from "react";

const cards = [
  {
    title: "Functional Testing",
    description: "Ensure gameplay mechanics and UI work as designed.",
    color: "bg-blue-500",
  },
  {
    title: "Regression Testing",
    description: "Make sure updates don't break existing features.",
    color: "bg-green-500",
  },
  {
    title: "Smoke Testing",
    description: "Verify core game functions before deep testing.",
    color: "bg-yellow-500",
  },
  {
    title: "Steam Compliance",
    description: "Check your game meets Steam’s launch requirements.",
    color: "bg-red-500",
  },
];

export default function StackedCards() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);

  // 2. Measure the header's height after it renders
  useLayoutEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  return (
    <></>
    // <div className=" ">
    //   <div className="relative w-full max-w-3xl mx-auto">
    //     <div
    //       ref={headerRef}
    //       className="bg-white py-6 border-b border-gray-200 sticky top-0">
    //       <h1 className="text-4xl font-bold text-center">What We Offer</h1>
    //     </div>

    //     {/* Cards container */}
    //     <div className="relative mb-[20vh]">
    //       {cards.map((card, index) => (
    //         <div
    //           key={index}
    //           className={`h-[40vh] flex items-center justify-center ${card.color} sticky top-[20vh] mt-[20vh] `}
    //           style={{
    //             zIndex: index,
    //           }}>
    //           <div className="max-w-md text-center text-white p-8 rounded-xl shadow-xl">
    //             <h2 className="text-3xl font-bold mb-4">{card.title}</h2>
    //             <p className="text-lg">{card.description}</p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
}
