"use client";
// @refresh reset
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useRef } from "react";
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
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const isInView = useInView(ref);
  const colours = [
    "hsla(0, 0%, 100%, 0.9)",
    "hsl(0, 0%, 10%)",
    "hsla(0, 0%, 100%, 0.9)",
  ];
  return (
    <motion.div
      ref={ref}
      initial={{ background: `${colours[id]}` }}
      transition={{ duration: 4 }}
      className="h-screen w-screen bg-black p-1"
    >
      <div
        className={`text-9xl ${id % 2 ? "text-textsecondary" : "text-bgprimary"}`}
      >
        {heading}
      </div>
      <div
        className={`text-2xl ${id % 2 ? "text-texttertiary" : "text-bgprimary"}`}
      >
        {content}
      </div>
    </motion.div>
  );
};
