"use client";
import { useState } from "react";
import Link from "next/link";
import { headingFont } from "@/utils/fonts";
import { motion, useScroll } from "framer-motion";

import MenuButton from "./menu-button";
import localFont from "next/font/local";

const workbench = localFont({ src: "../../utils/custom-fonts/workbench.ttf" });

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
};

export default function Navbar({}) {
  const { scrollY, scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fixed top-0 left-0 flex justify-center w-screen z-50 py-4 bg-bg border-b-accent border-b-2">
        <nav
          className={`w-full max-w-screen-xl items-center ${headingFont.className} flex justify-between md:text-4xl text-xl md:px-2 px-6 `}
        >
          <h1 className={`${workbench.className} text-accent font-normal`}>
            VOYAGE DE LA LUNE
          </h1>
          <li className="list-none md:flex gap-4 hidden">
            <ol>HOME</ol>
            <ol>ABOUT</ol>
            <ol>APPLY</ol>
            <ol>FAQ</ol>
          </li>
          <MenuButton
            title="Open navbar menu"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="block md:hidden"
            isOpen={isOpen}
          />
        </nav>
      </div>
      <motion.div
        animate={
          isOpen
            ? {
                y: 0,
              }
            : {
                y: "-100%",
              }
        }
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        className={`fixed top-[60px] w-screen bg-bg z-40 p-6 shadow `}
      >
        <li
          className={`list-none text-4xl flex flex-col gap-4 ${headingFont.className} font-normal`}
        >
          <ol>HOME</ol>
          <ol>ABOUT</ol>
          <ol>APPLY</ol>
          <ol>FAQ</ol>
        </li>
        Stay frosty ❄️
      </motion.div>
    </>
  );
}
