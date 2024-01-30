import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const useScrollGrowHook = () => {
  const componentsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: componentsRef,
    offset: ["0 1 ", "1.2 1"],
  }); //0-1

  const scaleValues = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityValues = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  const style = {
    scale: scaleValues,
    opacity: opacityValues,
  };

  return { style, componentsRef };
};

export default useScrollGrowHook;
