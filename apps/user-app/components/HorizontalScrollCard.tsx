"use client";
// @refresh reset
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
// @refresh reset
export const HorizontalScrollCard = ({
  id,
  heading,
  content,
}: {
  id: number;
  heading: string;
  content: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true});
  const colours = [
    "hsla(0, 0%, 100%, 0.9)",
    "hsl(0, 0%, 10%)",
    "hsla(0, 0%, 100%, 0.9)",
  ];
  return (
    <motion.div
      initial={{ background: `${colours[id]}` }}
      transition={{ duration: 4 }}
      className="h-screen w-screen p-1"
    >
      <div
        className={`flex text-9xl px-4 ${id % 2 ? "text-textsecondary" : "text-bgprimary"}`}
      >
        <div>
          {heading}
          <motion.div
            ref={ref}
            className="grow-1 h-3 w-full bg-accentquaternary origin-left"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 1, duration: 2 }}
          />
        </div>
      </div>
      <div
        className={`text-2xl ${id % 2 ? "text-texttertiary" : "text-bgprimary"}`}
      >
        {content}
      </div>
    </motion.div>
  );
};
