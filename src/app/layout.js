import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"

import Navbar from "@/components/navbar";
import { AudioProvider } from "@/components/Audio";
import { paragraphFont } from "@/utils/fonts";
import "./globals.css";

export const metadata = {
  title: "Voyage de la Lune Hackathon",
  description: `Voyage de la Lune Hackathon is Houston’s biggest in-person high school hackathon. Join 150+ high schoolers in a 44-hour mission. Win prizes, learn from experts, and save the botched moon trip. Save this botched moon trip!`,
  openGraph: {
    siteName: "Voyage de la Lune Hackathon",
    url: "https://voyagehacks.com",
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: "Voyage de la Lune: Houston's lunar hackathon"
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
