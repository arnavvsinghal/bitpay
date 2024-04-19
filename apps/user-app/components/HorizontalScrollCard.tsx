"use client";
// @refresh reset
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
// @refresh reset
export const HorizontalScrollCard = ({
  id,
  backgroundColor,
}: {
  id: number;
  backgroundColor: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const colours = [
    "hsla(0, 0%, 100%, 0.9)",
    "hsl(0, 0%, 10%)",
    "hsla(0, 0%, 100%, 0.9)",
  ];
  return (
    <motion.div
      ref={ref}
      initial={{ background: `${colours[id]}`, padding: "10px" }}
      // animate={
      //   isInView
      //     ? { background: "pink" }
      //     : { background: "green" }
      // }
      transition={{ duration: 4 }}
      className="h-screen w-screen bg-black p-1"
    />
  );
};
