import Image from "next/image";
import CassettePlayer from "@/components/cassette-player/index";
import Card from "@/components/card";
import Link from "next/link";

import { specialFont, headingFont } from "@/utils/fonts";

import { questions, RenderQuestion } from "@/utils/faq";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex w-full">
        <div className="flex-1 h-full">
          <div className="relative max-h-60 h-full aspect-square">
            <Image
              src="/stickers/anime.png"
              alt=""
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <CassettePlayer />
        <div className="flex-1 h-full">
          <div className="relative max-h-60 h-full aspect-square top-1/2 translate-y-1/2">
            <Image
              src="/stickers/yay.png"
              alt=""
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>

      <div className="h-64 w-full flex justify-between">
        <div className="relative max-h-60 h-full aspect-square -mt-20">
          <Image
            src="/stickers/boba.png"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative max-h-60 h-full aspect-square">
          <Image src="/stickers/nasa.png" alt="" fill />
        </div>
      </div>
      <Card />
      <div className="h-64 w-full flex justify-between">{/*SPACER BOX*/}</div>
      <div className="w-full">
        <div className="flex flex-start w-full h-auto pb-16">
          <h2
            className={`${specialFont.className} text-9xl text-purple font-bold rotate-[-12deg]`}
          >
            SIGN UP TODAY!
          </h2>
        </div>
        <p className="max-w-screen-sm m-auto text-xl">
          If you are still in high school, sign up today <Link href='https://link.com/id?10293102321' className="underline text-accent font-bold">here</Link> by October 31st, 2024. <br/>
          <br/>
          If you have any questions email us at <Link href='mailto://team@voyagehacks.com' className="underline text-purple font-bold">team@voyagehacks.com</Link>
        </p>
      </div>
      <div className="h-64 w-full flex justify-between">{/*SPACER BOX*/}</div>
      <div>
        <h2 className={`${headingFont.className} text-7xl text-purple`}>FUTURE PARTICIPANTS ARE ASKING</h2>
        <div>
          <RenderQuestion question={questions[1]}/>
        </div>
      </div>
    </main>
  );
}
