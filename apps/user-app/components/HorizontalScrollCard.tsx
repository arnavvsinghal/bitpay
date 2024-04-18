"use client";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const HorizontalScrollCard = ({ id }: { id: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      initial={{ background: "red" }}
      animate={
        isInView
          ? { background: "blue" }
          : { background: "green" }
      }
      transition={{ duration: 4 }}
      className="h-80 w-80 bg-black"
    />
  );
};
