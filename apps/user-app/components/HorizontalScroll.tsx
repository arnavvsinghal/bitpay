"use client";
// @refresh reset
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { HorizontalScrollCard } from "./HorizontalScrollCard";
// @refresh reset
export const HorizontalScroll = () => {
  const targetref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetref,
  });
  const cards = [1, 2, 3];
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200vw"]);
  const bgColor = ["white", "red", "blue"];
  return (
    <div ref={targetref} className="h-[300vh] w-screen bg-slate-950">
      <div className="top-0 sticky flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          {cards.map((card, id: number) => {
            return <HorizontalScrollCard key={id} id={id} backgroundColor={`${bgColor[id]}`} />;
          })}
        </motion.div>
      </div>
    </div>
  );
};
