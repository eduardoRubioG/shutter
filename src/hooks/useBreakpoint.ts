import { useEffect, useState } from "react";
const breakpoints = {
  0: "xs",
  400: "sm",
  600: "md",
  900: "lg",
  1200: "xl",
  1800: "xxl",
};

interface WindowDimensions {
  width: number;
  height: number;
}

const useBreakpoint = () => {
  const [breakpoint, setBreakPoint] = useState("");
  const [windowSize, setWindowSize] = useState<WindowDimensions>({
    width: 0,
    height: 0,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    if (0 < windowSize.width && windowSize.width < 400) {
      setBreakPoint(breakpoints[0]);
    }
    if (400 < windowSize.width && windowSize.width < 600) {
      setBreakPoint(breakpoints[400]);
    }
    if (600 < windowSize.width && windowSize.width < 900) {
      setBreakPoint(breakpoints[600]);
    }
    if (900 < windowSize.width && windowSize.width < 1200) {
      setBreakPoint(breakpoints[900]);
    }
    if (1200 < windowSize.width && windowSize.width < 1800) {
      setBreakPoint(breakpoints[1200]);
    }
    if (windowSize.width >= 1800) {
      setBreakPoint(breakpoints[1800]);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize.width]);
  return breakpoint;
};

export default useBreakpoint;
