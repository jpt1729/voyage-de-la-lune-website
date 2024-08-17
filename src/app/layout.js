import Navbar from "@/components/navbar";

import { paragraphFont } from "@/utils/fonts";
import "./globals.css";

export const metadata = {
  title: "Voyage de la Lune Hackathon",
  description: "Voyage de la Lune Hacks. Houston, Texas. 2024. Coming soon.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={paragraphFont.className}>
        <Navbar />
        {children}
        
      </body>
    </html>
  );
}
