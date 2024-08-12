import Image from "next/image";
import CassettePlayer from "@/components/cassette-player/index";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CassettePlayer/>
    </main>
  );
}
