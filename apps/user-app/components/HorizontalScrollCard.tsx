// @refresh reset
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
            transition={{ delay: 1, duration: 1 }}
          />
        </div>
      </div>
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={
          isInView ? { y: [25, -5, 0], opacity: 1 } : { y: 50, opacity: 0 }
        }
        transition={{ delay: 1, duration: 2 }}
        className="flex justify-center h-1/4 w-auto mt-4 mb-8"
      >
        <HorizontalScrollImage isInView={isInView} src={id} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 2, duration: 2 }}
        className={`text-6xl px-4 pt-4 w-full origin-bottom ${id % 2 ? "text-texttertiary" : "text-bgsecondary"}`}
      >
        {content}
      </motion.div>
    </div>
  );
};
