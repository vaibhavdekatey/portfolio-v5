import React, { useEffect, useState } from "react";

const Footer = () => {
  const [time, setTime] = useState("");

  function timePadding(i: number): string {
    return i < 10 ? "0" + i : i.toString();
  }

  const timeFunc = (): void => {
    const today = new Date();
    let h = today.getHours();
    const m = timePadding(today.getMinutes());
    const s = timePadding(today.getSeconds());

    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12;
    h = h ? h : 12;
    const hourStr = timePadding(h);

    setTime(`${hourStr}:${m}:${s} ${ampm}`);
  };

  useEffect(() => {
    timeFunc();
    const interval = setInterval(timeFunc, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-lexend text-neutral-200 flex flex-col w-full justify-center items-center px-[2vw] py-[1vh]">
      <div className="w-full">
        <p className="text-neutral-300">What's Next?</p>
        <p className="text-xl">
          My inbox is always open. Whether you have a question or just want to
          say hello, I'll try my best to get back to you! Feel free to mail me.
        </p>
        <div>
          <form action=""></form>
        </div>
        <div className="w-full bg-neutral-400 p-3 rounded-2xl my-2">
          <p className="text-2xl text-transparent bg-gradient-to-r from-neutral-700 to-neutral-800 bg-clip-text ">
            Local Time
          </p>
          <p className="text-[12vw] leading-none text-transparent bg-gradient-to-r from-neutral-700 to-neutral-800 bg-clip-text font-mono">
            {time}
          </p>
        </div>
      </div>
      <p className="font-extralight text-transparent bg-gradient-to-r from-neutral-300 to-neutral-200 bg-clip-text ">
        Designed & Built by Vaibhav Dekatey | PixCode.
      </p>
    </div>
  );
};

export default Footer;
