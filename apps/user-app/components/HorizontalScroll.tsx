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
  const cards = [
    [
      "A new type of Wallet.",
      "BitPay is the new way to conduct transactions! No need to rely on foreign platforms.",
    ],
    [
      "#1 in data privacy.",
      "No user information selling. No tracking cookies. No Profiling. No Worries!",
    ],
    [
      "Users love us <3.",
      "We continuously engage with our customers, seeking their feedback to enhance our platform's accessibility and functionality.",
    ],
  ];
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200vw"]);
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
      </div>
    </div>
  );
};
