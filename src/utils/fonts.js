import { Courier_Prime, Passion_One, Caveat, Bayon } from "next/font/google";
import localFont from 'next/font/local'



export const paragraphFont = Courier_Prime({ subsets: ["latin"], weight: ['400', '700'] });
export const specialFont = Caveat({ subsets: ["latin"] });
export const headingFont = Bayon({ subsets: ["latin"], weight:['400'] }) //localFont({ src: './custom-fonts/Ortland.ttf'})