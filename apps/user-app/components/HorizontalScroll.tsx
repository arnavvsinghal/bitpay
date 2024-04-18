"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { HorizontalScrollCard } from "./HorizontalScrollCard";


export const HorizontalScroll = () => {
  const targetref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetref,
  });
  const cards = [1, 2, 3, 4, 5];
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-90%"]);
  return (
    <div className="bg-neutral-800">
      <div ref={targetref} className="h-[300vh] w-screen bg-blue-500">
        <div className="top-0 sticky flex h-screen items-center overflow-hidden">
          <motion.div 
          style={{ x }} className="flex gap-4">
            {cards.map((card, id:number) => {
              return <HorizontalScrollCard key={id} id={id}/>;
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
