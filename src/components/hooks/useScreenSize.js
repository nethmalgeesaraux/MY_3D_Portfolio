"use client";
import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth);
    }

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
