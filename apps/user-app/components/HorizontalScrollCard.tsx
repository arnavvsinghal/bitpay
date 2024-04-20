"use client";
// @refresh reset
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import HorizontalScrollImage from "./HorizontalScrollImage";
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
  const isInView = useInView(ref, { once: true });
  const colours = [
    "hsla(0, 0%, 100%, 0.9)",
    "hsl(0, 0%, 10%)",
    "hsla(0, 0%, 100%, 0.9)",
  ];
  return (
    <div
      style={{ background: `${colours[id]}` }}
      className="h-screen w-screen p-1"
    >
      <div
        className={`flex text-9xl px-4 py-4 ${id % 2 ? "text-textsecondary" : "text-bgprimary"}`}
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
      <div className="flex justify-center h-1/4 w-auto mt-4 mb-8">
        <HorizontalScrollImage src={id} />
      </div>
      <div
        className={`text-2xl ${id % 2 ? "text-texttertiary" : "text-bgprimary"}`}
      >
        {content}
      </div>
    </div>
  );
};
