import Image from "next/image";
import CassettePlayer from "@/components/cassette-player/index";
import Card from "@/components/card";
import Link from "next/link";

import { specialFont, headingFont } from "@/utils/fonts";

import { questions, RenderQuestion } from "@/utils/faq";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 md:py-24 p-6 py-16">
      <div id='home' className="flex w-full scroll-mt-16">
        <div className="flex-1 h-full">
          <div className="relative max-h-60 h-full aspect-square md:block hidden">
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
          <div className="relative max-h-60 h-full aspect-square top-1/2 translate-y-1/2 md:block hidden -z-10">
            <Image
              src="/stickers/yay.png"
              alt=""
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
      <div className="lg:h-64 h-32 w-full flex justify-between">
        <div className="relative lg:max-h-60 max-h-24 h-full aspect-square md:-mt-20 -mt-10 -z-10">
          <Image
            src="/stickers/boba.png"
            alt=""
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="relative lg:max-h-60 max-h-24 h-full aspect-square -z-10">
          <Image src="/stickers/nasa.png" alt="" fill style={{ objectFit: "contain" }}/>
        </div>
      </div>
      <Card />
      <div id='apply' className="w-full">
        <div className="lg:h-64 h-32 w-full flex justify-between">{/*SPACER BOX*/}</div>
        <div className="flex flex-start w-full h-auto pb-16">
          <h2
            className={`${specialFont.className} lg:text-9xl text-4xl text-purple font-bold rotate-[-12deg]`}
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
      <div className="lg:h-64 h-32 w-full flex justify-between">
        <div className="relative lg:max-h-60 max-h-32 h-full aspect-square ml-auto lg:translate-y-20 -z-10">
          <Image src="/stickers/mac.png" alt="" fill style={{ objectFit: "contain" }}/>
        </div>
      </div>
      <div id='faq' className="scroll-mt-16 pt-6">
        <h2 className={`${headingFont.className} lg:text-7xl text-4xl text-purple`}>FUTURE PARTICIPANTS <br className="lg:hidden"/> ARE ASKING</h2>
        <div className="py-6">
          {questions && questions.map(
            question => {
              return (
                <RenderQuestion key={question.id} question={question}/>
              )
            }
          )}
          
        </div>
      </div>
      <div className="flex justify-between w-full text-purple md:text-2xl text-lg items-end">
        <div className="relative md:max-w-32 max-w-16 w-full aspect-square">
          <Image src="/stickers/sticker.png" alt="" fill style={{ objectFit: "contain" }}/>
        </div>
        <span className={specialFont.className}>Made with {"<3"} by the Voyage de la Lune Team</span>
      </div>
    </main>
  );
}
