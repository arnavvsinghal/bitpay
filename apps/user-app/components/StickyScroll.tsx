"use client";
// @refresh reset
import { motion, useInView } from "framer-motion";
import StickyScrollHeading from "./StickyScrollHeading";
import { AnimatedNumber } from "./AnimatedNumber";
import { useRef } from "react";
import { signIn } from "next-auth/react";
// @refresh reset
const StickyScroll = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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
        <StickyScrollHeading>
          <div className="text-9xl">AND MUCH MORE!</div>
        </StickyScrollHeading>
      </motion.div>

      <motion.div
        className={`h-screen sticky text-center top-[512px] ${colours[4]}`}
      >
        <StickyScrollHeading>
          <div className="py-8">Building Trust Since '24</div>
          <div className="grid grid-cols-3 justify-center	justify-items-center py-8 px-8 text-texttertiary">
            <div className="">
              <AnimatedNumber value={50} />
              <div className="text-4xl">Users</div>
            </div>
            <div className="">
              <AnimatedNumber value={1000} />
              <div className="text-4xl">Transactions Completed</div>
            </div>
            <div className="">
              <AnimatedNumber value={10} />
              <div className="text-4xl">Merchants</div>
            </div>
          </div>
        </StickyScrollHeading>

        <div className="flex justify-center font-medium text-textprimary text-9xl mt-16 transition ease-in-out duration-500 hover:scale-105">
          <button
            onClick={async () =>
              await signIn("google", { callbackUrl: "/dashboard" })
            }
          >
            SIGNUP NOW!
            <motion.div
              className="h-3 w-full bg-accentquaternary origin-left"
              ref={ref}
              initial={{ scaleX: 0 }}
              transition={{ delay: 0.5, duration: 2 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default StickyScroll;
