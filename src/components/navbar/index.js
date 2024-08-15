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
      <div className="fixed top-0 left-0 flex justify-center w-screen z-50 py-4 bg-bg border-b-accent border-b-2 shadow">
        <nav
          className={`w-full max-w-screen-xl items-center ${headingFont.className} flex justify-between md:text-4xl text-xl md:px-2 px-6 `}
        >
          <h1 className={`${workbench.className} text-accent font-normal`}>
            VOYAGE DE LA LUNE
          </h1>
          <li className="list-none md:flex gap-4 hidden">
            <Link
              href="#home"
              className="hover:text-accent transition-colors hover:underline"
            >
              HOME
            </Link>
            <Link
              href="#card"
              className="hover:text-accent transition-colors hover:underline"
            >
              ABOUT
            </Link>
            <Link
              href="#apply"
              className="hover:text-accent transition-colors hover:underline"
            >
              APPLY
            </Link>
            <Link
              href="#faq"
              className="hover:text-accent transition-colors hover:underline"
            >
              FAQ
            </Link>
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
        initial={{
          y: "-100%",
        }}
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
          duration: 0.65,
          ease: "easeOut",
        }}
        className={`fixed top-[60px] w-screen bg-bg z-40 p-6 shadow `}
      >
        <li
          className={`list-none text-4xl flex flex-col gap-4 ${headingFont.className} font-normal`}
        >
          <Link
            href="#home"
            onClick={() => {
              setIsOpen(false)
            }}
            className="hover:text-accent transition-colors hover:underline"
          >
            HOME
          </Link>
          <Link
            href="#card"
            onClick={() => {
              setIsOpen(false)
            }}
            className="hover:text-accent transition-colors hover:underline"
          >
            ABOUT
          </Link>
          <Link
            href="#apply"
            onClick={() => {
              setIsOpen(false)
            }}
            className="hover:text-accent transition-colors hover:underline"
          >
            APPLY
          </Link>
          <Link
            href="#faq"
            onClick={() => {
              setIsOpen(false)
            }}
            className="hover:text-accent transition-colors hover:underline"
          >
            FAQ
          </Link>
        </li>
        Stay frosty ❄️
      </motion.div>
    </>
  );
}
