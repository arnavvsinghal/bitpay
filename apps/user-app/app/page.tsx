"use client";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./lib/auth";
import { Center } from "@repo/ui/Center";
import { HorizontalScroll } from "../components/HorizontalScroll";
import { Boxes } from "../components/Box";
import { motion } from "framer-motion";
import StickyScroll from "../components/StickyScroll";
import { useSession } from "next-auth/react";

export default function Page() {
  const session = useSession();
  if (session.data?.user) {
    redirect("/dashboard");
  }
  return (
    <div>
      <div className="h-screen relative w-full overflow-hidden flex flex-col items-center justify-center bg-bgprimary">
        <Boxes />
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
      </div>
      <HorizontalScroll />
      <StickyScroll />
    </div>
  );
}
