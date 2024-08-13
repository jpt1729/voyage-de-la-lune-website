import Image from "next/image";
import CassettePlayer from "@/components/cassette-player/index";
import Card from "@/components/card";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CassettePlayer/>
      <div className="h-64 w-full flex justify-between">
        <div className="relative max-h-60 h-full aspect-square -mt-20">
          <Image src='/stickers/boba.png' alt="" fill style={{ objectFit: "cover" }}/>
        </div>
        <div className="relative max-h-60 h-full aspect-square">
          <Image src='/stickers/nasa.png' alt="" fill/>
        </div>
      </div>
      <Card/>
    </main>
  );
}
