import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth
  });
  useEffect(() => {
    const updateSize = () => {
      setSize({
        width: window.innerWidth
      });

    };
          window.addEventListener("resize", updateSize);
      return () => {
        window.removeEventListener("resize", updateSize);
      };
  }, []);
  return size;
};

export default useWindowSize;
