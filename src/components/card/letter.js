import { paragraphFont, specialFont } from "@/utils/fonts";
import Image from "next/image";
import styles from "./card.module.css";

export default function Letter({}) {
  return (
    <div
      id={styles.paper}
      className={`absolute w-full h-full flex p-12 shadow-lg gap-6`}
      style={{ backfaceVisibility: "hidden", transform: "rotateX(180deg)" }} // Rotate back side
    >
      <div className={`${paragraphFont.className} flex-1`}>
        <p className="text-sm">
          Dear hacker, <br />
          <br />
          Just a few months ago, the world fell into a zombie apocalypse. It’s
          absurd how fast civilization has fallen to the virus.
          <br />
          <br />
          Cities have turned to battlefields. Subways and schools have grown
          infected with the fallen. <br />
          <br />
          {"It's"} the beginning of the end. <br />
          <br />
          But one thing still stands: technology. WiFi is up, electricity runs,
          and hardware operates. <br />
          <br />
          Join 150 hackers like you for 44 hours at our safehouse. Build
          something, anything, to help us survive this apocalypse. <br />
          <br />
          So, what will you make? Humanity is counting on you. From the
          Apocalypse team...
        </p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="w-[2px] bg-black/25 flex-grow" />
        <div className="flex flex-col items-center">
          <div className="relative aspect-square w-6 gap-1">
            <Image
              src="/american-flag.png"
              alt="American Flag"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <p className="text-[10px] leading-3 text-center">
            Printed in <br />
            the USA
          </p>
        </div>
      </div>
      <div className="flex-1">
        <div>
          <div className="flex justify-end">
            <div className="relative w-32 h-[80px]">
              <Image src="/stamp.png" alt="stamp" fill />
            </div>
          </div>
          <h3 className={`${specialFont.className} text-5xl rotate-[15deg] text-[#5755FE] font-bold`}>
                YOU HAVE UNTIL 10/31/24 TO SIGN UP
            </h3>
        </div>
        <div></div>
      </div>
    </div>
  );
}
