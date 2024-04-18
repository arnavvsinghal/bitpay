"use client";

import React from "react";
import { motion } from "framer-motion";
export const Boxes = React.memo(
  () => {
    const rows = new Array(150).fill(1);
    const cols = new Array(100).fill(1);

    return (
      <div
        className="absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-screen"
      >
        {rows.map((_, i) => (
          <motion.div key={`row${i}`} className="w-16 h-16 border-1 relative">
            {cols.map((_, j) => (
              <motion.div
                key={`col${j}`}
                whileHover={{
                  backgroundColor: "hsl(196, 100%, 50%)",
                  transition: { duration: 0 },
                }}
                animate={
                  {
                      transition: { duration: 2 },
                  }
                }
                className="w-16 h-16 border-1 relative"
              ></motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    );
  }
);
