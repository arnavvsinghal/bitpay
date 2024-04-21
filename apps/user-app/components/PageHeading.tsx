"use client";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
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
        className="text-3xl pt-4 pb-1 font-normal text-texttertiary z-10"
      >
        Revolutionizing digital transactions, one bit at a time.
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="text-lg text-texttertiary z-10"
      >
        Already have an account?
        <button
          className="text-textsecondary"
          onClick={async () =>
            await signIn("google", { callbackUrl: "/dashboard" })
          }
        >
          &nbsp;Signin!
        </button>
      </motion.div>
    </>
  );
};

export default PageHeading;
