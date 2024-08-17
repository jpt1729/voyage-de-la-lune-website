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
    <>
      
      <motion.div
        id='card'
        onClick={() => setIsOpen(true)}
        className="xl:aspect-[1.8] lg:aspect-[1.3] aspect-[0.4] w-full max-w-screen-lg bg-transparent scroll-mt-16"
        style={{ perspective: 1000, cursor: isOpen ? 'default' : 'pointer' }} // Add perspective here
        title={!isOpen ? 'Open Letter' : null}
        disabled={isOpen}
      >
      <div className="absolute lg:-left-48 top-1/2 lg:w-64 -left-12 w-24 aspect-square">
        <Image 
          src='/stickers/computer.png' 
          alt='' 
          fill 
          style={{ objectFit: "contain" }} 
          sizes="(min-width: 1024px) 256px, 96px"
          priority
          />
      </div>
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
            className="absolute w-full h-full shadow-lg"
            style={{ backfaceVisibility: "hidden" }}
          >
            <Image
              src="/test-card.png"
              alt="Welcome to Houston Post Card"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <Letter/>
        </motion.div>
      </motion.div>
    </>
  );
}
