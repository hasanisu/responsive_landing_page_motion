import useScrollGrowHook from "@/hooks/useScrollGrowHook";
import { motion } from "framer-motion";

const ChipsetReplacement = () => {
  const { style, componentsRef } = useScrollGrowHook();
  return (
    <motion.div
      className="bg-red-500 h-[415px] rounded-2xl col-span-6 lg:col-span-5"
      style={style}
      ref={componentsRef}
    ></motion.div>
  );
};

export default ChipsetReplacement;
