"use client";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import React, { Dispatch, SetStateAction, useState } from "react";

export const SidebarItem = ({
  href,
  title,
  icon,
  selected,
  setSelected,
}: {
  href: string;
  title: string;
  icon: React.ReactNode;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<string | undefined>>;
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        setSelected(title);
        router.push(href);
      }}
      className={`flex ${selected ? "text-textprimary  rounded-lg" : "text-texttertiary"} cursor-pointer py-6 justify-center items-center mx-4 relative`}
    >
      <div className={`pr-4 ${selected ? "z-10" : "z-0"}`}>{icon}</div>
      <div
        className={`text-2xl font-bold ${selected ? "text-textprimary z-10" : "text-texttertiary"}`}
      >
        {title}
      </div>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-accentquaternary rounded-md"
        ></motion.span>
      )}
    </div>
  );
};
