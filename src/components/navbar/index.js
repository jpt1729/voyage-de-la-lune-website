import Link from "next/link";
import { headingFont } from "@/utils/fonts";

export default function Navbar({}){
    return (
        <nav className={`fixed top-0 py-4 left-1/2 -translate-x-1/2 w-full max-w-screen-xl items-center ${headingFont.className} flex justify-between text-4xl mr-10 z-50 bg-bg`}>
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
    )
}