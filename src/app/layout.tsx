import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/NavHori";
import Hero from "./components/Hero";
import NavVerti from "./components/NavHori";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "isuru Dilshan",
  description: "developer programmer software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Hero />
        <div className="flex">
          <div className="overflow-y-auto max-h-screen custom-scrollbar">
            <NavVerti />
          </div>
          <div className="w-full overflow-y-auto max-h-screen custom-scrollbar">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
