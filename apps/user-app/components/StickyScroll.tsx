"use client";
// @refresh reset
import { motion } from "framer-motion";
import StickyScrollHeading from "./StickyScrollHeading";
import { AnimatedNumber } from "./AnimatedNumber";
// @refresh reset
const StickyScroll = () => {
  const colours = [
    "bg-accentprimary",
    "bg-accentsecondary",
    "bg-accenttertiary",
    "bg-accentquaternary",
    "bg-bgprimary",
  ];
  return (
    <div>
      <motion.div className={`h-screen w-screen sticky top-0 ${colours[0]}`}>
        <StickyScrollHeading>WITH BITPAY YOU CAN</StickyScrollHeading>
      </motion.div>
      <motion.div className={`h-screen sticky top-32 ${colours[1]}`}>
        <StickyScrollHeading>MAKE PAYMENTS</StickyScrollHeading>
      </motion.div>
      <motion.div className={`h-screen sticky top-64 ${colours[2]}`}>
        <StickyScrollHeading>ANALYSE EXPENDITURE</StickyScrollHeading>
      </motion.div>
      <motion.div className={`h-screen sticky top-96 ${colours[3]}`}>
        <StickyScrollHeading>MAKE WITHDRAWALS</StickyScrollHeading>
      </motion.div>
      <motion.div className={`h-screen sticky top-[512px] ${colours[4]}`}>
        <StickyScrollHeading>AND MUCH MORE!</StickyScrollHeading>
      </motion.div>
      <motion.div className={`h-screen sticky top-[512px] ${colours[4]}`}>
        <StickyScrollHeading>
          <AnimatedNumber value={1000} />
        </StickyScrollHeading>
      </motion.div>
    </div>
  );
};

export default StickyScroll;
