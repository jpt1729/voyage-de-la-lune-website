import { paragraphFont, specialFont } from "@/utils/fonts";
import Image from "next/image";
import styles from "./card.module.css";

export default function Letter({}) {
  return (
    <div
      id={styles.paper}
      className={`absolute w-full h-full flex lg:flex-row flex-col lg:p-12 p-6 shadow-lg lg:gap-6 gap-3`}
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
      <div className="flex lg:flex-col items-center gap-2">
        <div className="lg:w-[2px] lg:h-auto w-auto h-[2px] bg-black/25 flex-grow" />
        <div className="flex flex-col items-center">
          <div className="relative aspect-square md:w-6 w-3 gap-1">
            <Image
              src="/american-flag.png"
              alt="American Flag"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <p className="md:text-[10px] text-[8px] leading-3 text-center lg:block hidden">
            Printed in <br />
            the USA
          </p>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:justify-around justify-center">
        <div>
          <div className="lg:flex justify-end hidden">
            <Image src="/stamp.png" alt="stamp" width={128} height={128} unoptimized/>
          </div>
          <h3
            className={`${specialFont.className} text-5xl rotate-[15deg] text-[#5755FE] font-bold lg:block hidden`}
          >
            YOU HAVE UNTIL 10/31/24 TO SIGN UP
          </h3>
        </div>
        <div
          className={`${paragraphFont.className} lg:text-4xl text-xl font-normal flex flex-col relative mt-10`}
        >
          <div className="flex flex-col lg:gap-3 gap-1">
            <p>Houstonian Hackers</p>
            <p>401 Franklin St,</p>
            <p>Houston, Texas</p>
            <p>77201</p>
          </div>
          <div className="absolute w-full h-full top-0 left-0 flex flex-col lg:gap-12 gap-6 pt-5">
            <hr className="border-t-[2px] border-black/25" />
            <hr className="border-t-[2px] border-black/25" />
            <hr className="border-t-[2px] border-black/25" />
            <hr className="border-t-[2px] border-black/25" />
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 aspect-[4/3] lg:w-48 md:w-32 w-16">
        <Image
          src="/stickers/enjoy.png"
          fill
          sizes="(min-width: 1024px) 192px, (min-width: 1024px) 128px, 64px"
          alt="Hack Club`s enjoy sticker"
          unoptimized
        />
      </div>
    </div>
  );
}
