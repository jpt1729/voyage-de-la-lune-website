import { SpeedInsights } from "@vercel/speed-insights/next";

import Navbar from "@/components/navbar";
import { AudioProvider } from "@/components/Audio";
import { paragraphFont } from "@/utils/fonts";
import "./globals.css";

export const metadata = {
  title: "Voyage de la Lune Hackathon",
  description: `Save the Moon! Join 150+ high schoolers in a 44-hour mission at Houston’s Voyage de la Lune Hackathon. Win prizes, learn from experts, and become a space hero. Let's conquer space together!`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={paragraphFont.className}>
        <AudioProvider>
          <Navbar />
          {children}
        </AudioProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
