"use client";
import Link from "next/link";
import { headingFont } from "@/utils/fonts";
import { motion, useScroll } from "framer-motion"

export default function Navbar({}){
    const { scrollY } = useScroll()
    console.log(scrollY)
    return (
        <div className="fixed top-0 left-0 flex justify-center w-screen z-50 py-4 bg-bg">
            <nav className={`w-full max-w-screen-xl items-center ${headingFont.className} flex justify-between text-4xl mr-10`}>
                <h1 className="text-accent">VOYAGE DE LA LUNE HACKATHON</h1>
                <li className="list-none flex gap-4">
                    <ol>
                        HOME
                    </ol>
                    <ol>
                        ABOUT
                    </ol>
                    <ol>
                        APPLY
                    </ol>
                    <ol>
                        FAQ
                    </ol>
                </li>
            </nav>
        </div>
    )
}