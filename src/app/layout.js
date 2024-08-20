import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"

import Navbar from "@/components/navbar";
import { AudioProvider } from "@/components/Audio";
import { paragraphFont } from "@/utils/fonts";
import "./globals.css";

export const metadata = {
  title: "Voyage de la Lune Hackathon",
  description: `Save the Moon! Join 150+ high schoolers in a 44-hour mission at Houston’s Voyage de la Lune Hackathon. Win prizes, learn from experts, and become a space hero. Let's conquer space together!`,
  openGraph: {
    siteName: "Voyage de la Lune Hackathon",
    url: "https://voyagehacks.com",
    locale: 'en_US',
    type: 'website',
  }
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
        <Analytics />
      </body>
    </html>
  );
}
