"use client";
import { motion } from "framer-motion";
export const PageHeading = () => {
  return (
    <>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.1, 1], opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-9xl py-4 font-medium text-textprimary z-10"
      >
        BitPay
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="text-3xl py-4 font-normal text-texttertiary z-10"
      >
        Revolutionizing digital transactions, one bit at a time.
      </motion.div>
    </>
  );
};

export default PageHeading;
