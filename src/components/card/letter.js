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
      <Image
        src="/paper-texture.jpg"
        alt="Welcome to Houston Post Card"
        fill
        className="opacity-15 -z-10"
        style={{ objectFit: "cover" }}
        priority
      />
      <div className={`${paragraphFont.className} flex-1`}>
        <p className="text-sm">
          Dear hacker, <br/>
          <br/>
          As you know, we are planning our first human moon colony.
          Over the past few months, we have been developing the technology
          necessary to support such a feat. <br/>
          <br/>
          Our enemies have broken into all of our technology, rendering it worthless. Thousands of dollars of tech
          rendered to shiny paper weights. <br/>
          <br/>
          We need your help to build new technology to send to the moon. We have snacks, coffee, and wifi. <br/>
          <br/>
          Join 150 hackers like you for 44 hours at our safehouse. Build
          something, anything, to help us start our moon colony. <br/>
          <br/>
          Space City needs you. From the Voyage de la Lune Team…
        </p>
        <br/>
        <div>
          <p>Alex N, Alex P, Jeslyn, John, Kyra, Lena, Max, and Nick</p>
        </div>
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
            <Image
              src="/stamp.png"
              alt="stamp"
              width={128}
              height={128}
              unoptimized
            />
          </div>
          <h3
            className={`${specialFont.className} text-5xl rotate-[15deg] text-[#5755FE] font-bold lg:block hidden`}
          >
            {false && "YOU HAVE UNTIL 10/31/24 TO SIGN UP"}
            MORE INFORMATION ON SIGNING UP SOON
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
      <div className="absolute right-0 bottom-0 aspect-[1.43] lg:w-48 w-32">
        <Image
          src="/stickers/enjoy.png"
          fill
          sizes="(min-width: 1024px) 192px, 128px"
          alt="Hack Club`s enjoy sticker"
          unoptimized
        />
      </div>
    </div>
  );
}
