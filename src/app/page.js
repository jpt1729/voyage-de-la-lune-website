import Image from "next/image";
import CassettePlayer from "@/components/cassette-player/index";
import Card from "@/components/card";
import Link from "next/link";

import { specialFont, headingFont } from "@/utils/fonts";
import DownArrowIcon from "@/components/icons/down-arrow";

import { questions, RenderQuestion } from "@/utils/faq";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 md:py-24 p-6 py-16">
      <div id="home" className="flex w-full scroll-mt-16">
        <div className="flex-1 h-full">
          <Image
            src="/stickers/anime.png"
            alt=""
            width={240}
            height={196}
            className="md:block hidden"
            unoptimized
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <Image
              src="/logo.png"
              alt="Voyage de la Lune Logo"
              width={(256 * 2) / 3}
              height={(185 * 2) / 3}
              quality={100}
              priority
            />
            <p>Houston{"'"}s premiere high school hackathon.</p>
            <div className="flex flex-col text-3xl text-purple font-bold items-center">
              <span className={`${specialFont.className}`}>
                {" "}
                We have received some audio with more information.
              </span>
              <span className={`${specialFont.className} text-lg`}>
                {"(click the cassette to listen)"}
              </span>
            </div>
          </div>
          <CassettePlayer />
        </div>
        <div className="flex-1 h-full">
          <div className="relative max-h-60 h-full aspect-square top-1/2 translate-y-1/2 md:block hidden -z-10">
            <Image
              src="/stickers/yay.png"
              alt=""
              width={256}
              height={291}
              style={{ objectFit: "contain" }}
              unoptimized
            />
          </div>
        </div>
      </div>
      <div className="lg:h-64 h-32 w-full flex justify-between">
        <div className="relative lg:max-h-60 max-h-24 h-full aspect-square md:-mt-20 -mt-10 -z-10">
          <Image
            src="/stickers/boba.png"
            alt=""
            sizes="(min-width: 1024px) 240px, 96px"
            fill
            style={{ objectFit: "contain" }}
            unoptimized
          />
        </div>
        <div className="flex items-end">
          <div className="flex flex-col text-3xl text-purple font-bold items-center mt-auto mb-4">
            <span className={`${specialFont.className}`}>You got mail</span>
            <span className={`${specialFont.className} text-lg`}>
              {"(click the open)"}
            </span>
          </div>
        </div>
        <div className="relative lg:max-h-60 max-h-24 h-full aspect-square -z-10">
          <Image
            src="/stickers/nasa.png"
            alt=""
            sizes="(min-width: 1024px) 240px, 96px"
            fill
            style={{ objectFit: "contain" }}
            unoptimized
          />
        </div>
      </div>
      <Card />
      <div id="apply" className="w-full">
        <div className="lg:h-64 h-32 w-full flex justify-between">
          {/*SPACER BOX*/}
        </div>
        <div className="flex flex-start w-full h-auto pb-16">
          <h2
            className={`${specialFont.className} lg:text-9xl text-4xl text-purple font-bold rotate-[-12deg]`}
          >
            SIGN UP TODAY!
          </h2>
        </div>
        <p className="max-w-screen-sm m-auto text-xl">
          If you are still in high school,
          <Link
            href="/apply"
            title="Apply to Voyage de la Lune"
            className="underline text-accent font-bold"
          >
            sign up today
          </Link>{" "}
          by October 31st, 2024. <br />
          <br />
          If you have any questions email us at{" "}
          <Link
            href="mailto://team@voyagehacks.com"
            className="underline text-purple font-bold"
          >
            team@voyagehacks.com
          </Link>
        </p>
      </div>
      <div className="lg:h-64 h-32 w-full flex justify-between">
        <div className="relative lg:max-h-60 max-h-32 h-full aspect-square ml-auto lg:translate-y-20 -z-10">
          <Image
            src="/stickers/mac.png"
            alt=""
            fill
            style={{ objectFit: "contain" }}
            sizes="(min-width: 1024px) 240px, 128px"
            unoptimized
          />
        </div>
      </div>
      <div id="faq" className="scroll-mt-16 pt-6 w-full">
        <h2
          className={`${headingFont.className} lg:text-7xl text-4xl text-purple text-center`}
        >
          FUTURE PARTICIPANTS <br className="lg:hidden" /> ARE ASKING
        </h2>
        <div className="py-6 max-w-screen-md m-auto">
          {questions &&
            questions.map((question) => {
              return <RenderQuestion key={question.id} question={question} />;
            })}
          <p className="text-center">
            <span className="font-bold italic">Any other questions?</span> Email us at{" "}
            <Link
              href="mailto://team@voyagehacks.com"
              className="underline text-purple font-bold"
            >
              team@voyagehacks.com
            </Link>
          </p>
        </div>
      </div>
      <div className="flex justify-between w-full text-purple md:text-2xl text-lg items-end">
        <div className="relative md:max-w-32 max-w-16 w-full aspect-square">
          <Image
            src="/stickers/sticker.png"
            alt=""
            sizes="(min-width: 1024px) 128px, 64px"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <span className={`${specialFont.className} font-bold`}>
          Made with {"<3"} by the Voyage de la Lune Team
        </span>
      </div>
    </main>
  );
}
