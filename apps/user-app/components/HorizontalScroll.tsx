"use client";
// @refresh reset
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState } from "react";
import { HorizontalScrollCard } from "./HorizontalScrollCard";
import HorizontalScrollImage from "./HorizontalScrollImage";
// @refresh reset
export const HorizontalScroll = () => {
  const [src, SetSrc] = useState(0);
  const targetref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetref,
  });
  const cards = [
    ["A new type of Wallet.", "Hello"],
    ["#1 in data privacy", "Hello"],
    ["Customers love us", "Hello"],
  ];
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200vw"]);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const rounded = Math.round(latest * 100) / 100;
    if (rounded >= 0 && rounded < 0.34) {
      SetSrc(0);
    } else if (rounded >= 0.34 && rounded < 0.67) {
      SetSrc(1);
    } else if (rounded <= 1) {
      SetSrc(2);
    }
  });
  return (
    <div ref={targetref} className="h-[300vh] w-screen bg-slate-950">
      <div className="top-0 sticky flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          {cards.map((card, id: number) => {
            return (
              <HorizontalScrollCard
                key={id}
                id={id}
                heading={card[0] || ""}
                content={card[1] || ""}
              />
            );
          })}
        </motion.div>
        <HorizontalScrollImage src={src} />
      </div>
    </div>
  );
};
