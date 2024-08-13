"use client";
import React, { useState } from "react";
import Image from "next/image";

import Letter from "./letter";

import { motion } from "framer-motion";

const cardVariants = {
  opened: {
    rotateX: -180,
  },
  closed: {
    rotateX: 0,
  },
};

export default function Card({}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      onClick={() => setIsOpen(true)}
      className="aspect-[1.8] w-full max-w-screen-lg bg-transparent"
      style={{ perspective: 1000 }} // Add perspective here
    >
      <motion.div
        className="relative w-full h-full"
        whileHover={!isOpen && {
            rotateX: -12
        }}
        animate={isOpen ? "opened" : "closed"}
        variants={cardVariants}
        transition={{
            duration: 1.5,
            ease: 'easeOut'
        }}
        style={{ transformStyle: "preserve-3d" }} // Ensure preserve-3d is on the inner div
      >
        <div
          className="absolute w-full h-full"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src="/test-card.jpg"
            alt="Welcome to Houston Post Card"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <Letter/>
      </motion.div>
    </motion.div>
  );
}
