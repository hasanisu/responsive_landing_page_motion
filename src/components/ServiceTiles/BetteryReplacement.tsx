import useScrollGrowHook from "@/hooks/useScrollGrowHook";
import { motion } from "framer-motion";

const BetteryReplacement = () => {
  const { style, componentsRef } = useScrollGrowHook();
  return (
    <motion.div
      style={style}
      ref={componentsRef}
      className="bg-red-500 h-[415px] rounded-2xl col-span-12"
    ></motion.div>
  );
};

export default BetteryReplacement;
