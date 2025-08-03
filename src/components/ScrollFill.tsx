import React, { useEffect, useState } from "react";
interface ScrollFillProps {
  targetRef: React.RefObject<HTMLDivElement>;
}
const ScrollFill: React.FC<ScrollFillProps> = ({ targetRef }) => {
  const [scrollYProgress, setScrollYProgress] = useState(0);

  const handleScroll = () => {
    if (!targetRef.current) {
      return;
    }

    const rect = targetRef.current.getBoundingClientRect();
    const viewPortHeight = window.innerHeight;

    const progress =
      (viewPortHeight - rect.top) / (viewPortHeight + rect.height);
    const clampedProgress = Math.max(0, Math.min(1, progress));
    setScrollYProgress(clampedProgress * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [targetRef]);

  return (
    <div className="fixed top-0 left-0 h-screen w-1.5 bg-neutral-700 dark:bg-neutral-700">
      {/* The "Fill" or "Progress" Div */}
      {/* - `bg-blue-500`: The color of the progress indicator */}
      {/* - The height is set dynamically using an inline style based on our state */}
      <div
        className="w-full bg-neutral-300"
        style={{ height: `${scrollYProgress}%` }}
      />
    </div>
  );
};

export default ScrollFill;
