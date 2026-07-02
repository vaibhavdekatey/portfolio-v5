import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const Footer = () => {
  const [time, setTime] = useState("");

  const [visible, setVisible] = useState(false);
  const emailAddress = "pixcode.dev@gmail.com";

  const handleCopy = () => {
    // 1. Try the modern Clipboard API first
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(emailAddress)
        .then(() => {
          triggerVisibility();
        })
        .catch((err) => console.error("Failed to copy!", err));
    } else {
      // 2. Fallback for older browsers or insecure HTTP contexts
      try {
        const textArea = document.createElement("textarea");
        textArea.value = emailAddress;

        // Hide the text area off-screen
        textArea.style.position = "absolute";
        textArea.style.left = "-999999px";

        document.body.prepend(textArea);
        textArea.select();

        // Execute the old copy command
        document.execCommand("copy");
        textArea.remove(); // Clean up

        triggerVisibility();
      } catch (error) {
        console.error("Fallback copy failed", error);
      }
    }
  };

  // Helper function to handle the timeout logic
  const triggerVisibility = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 1500);
  };

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
    <div
      id="Contact"
      className="font-lexend text-neutral-200 flex flex-col w-full justify-center items-center px-[6vw] md:px-[12vw] lg:px-[16vw] py-[1vh]"
    >
      <div className="w-full">
        <div className="w-full flex flex-col justify-center items-center h-[50vh] gap-y-8">
          <motion.p
            initial={{ opacity: 0, transform: "translateY(30px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-neutral-300"
          >
            What's Next?
          </motion.p>
          <motion.p
            initial={{ opacity: 0, transform: "translateY(30px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className=" font-normal text-[3.2em] md:text-[7.6em] leading-none bg-gradient-to-r from-white to-white/60 text-transparent bg-clip-text"
          >
            Get In Touch
          </motion.p>
          <motion.p
            initial={{ opacity: 0, transform: "translateY(30px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-base text-neutral-500 font-light text-pretty md:max-w-1/2 text-center"
          >
            My inbox is always open. Whether you have a question or just want to
            say hello, I'll try my best to get back to you! Feel free to mail
            me.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, transform: "translateY(30px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="transition-all cursor-pointer px-4 ease-in-out border font-light border-transparent bg-neutral-300 text-neutral-800 hover:bg-transparent hover:border-neutral-200 hover:text-neutral-400 rounded-full p-2"
            onClick={handleCopy}
          >
            Get in Touch
          </motion.div>
          <p
            className={`text-red-300 w-fit text-base border border-neutral-700 rounded-lg p-0.5 px-3 bg-neutral-950 ${visible ? "opacity-100" : "opacity-0"} transition-opacity duration-300 ease-in-out `}
          >
            Email Copied
          </p>
        </div>
        <div>
          {/* <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="bg-neutral-800 p-2 rounded text-white"
            />
            <textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="bg-neutral-800 p-2 rounded text-white"
              rows={5}
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-neutral-800 p-2 rounded text-white"
            />
            <button
              type="submit"
              className="bg-neutral-700 hover:bg-neutral-600 text-white font-semibold py-2 px-4 rounded">
              Send via Email
            </button>
          </form> */}
        </div>
        <div className="w-full bg-neutral-400 p-8 rounded-2xl my-2">
          <p className="text-2xl text-transparent bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text ">
            Local Time
          </p>
          <p className="md:text-[10vw] text-[2.4em] leading-none text-transparent bg-gradient-to-r from-neutral-900 to-neutral-800 bg-clip-text font-mono">
            {time}
          </p>
        </div>
      </div>
      <p className="font-extralight text-xs text-transparent bg-gradient-to-r from-neutral-300 to-neutral-200 bg-clip-text ">
        Designed & Built by Vaibhav Dekatey | Pixcode.
      </p>
    </div>
  );
};

export default Footer;
