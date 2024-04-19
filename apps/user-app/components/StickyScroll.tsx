"use client"
// @refresh reset
import { motion } from "framer-motion";
// @refresh reset
const StickyScroll = () => {
  const colours = ["bg-accentprimary", "bg-accentsecondary", "bg-accenttertiary", "bg-accentquaternary","bg-bgprimary"];
  return (
    <div>
      <motion.div className={`h-screen sticky top-0 ${colours[0]}`}/>
      <motion.div className={`h-screen sticky top-32 ${colours[1]}`}/>
      <motion.div className={`h-screen sticky top-64 ${colours[2]}`}/>
      <motion.div className={`h-screen sticky top-96 ${colours[3]}`}/>
      <motion.div className={`h-screen sticky ${colours[4]}`}/>
    </div>
  );
};

export default StickyScroll;
