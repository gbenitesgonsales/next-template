import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import {
  Barlow,
  Inter,
  JetBrains_Mono as JetBrainsMono,
} from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const jetbrainsMono = JetBrainsMono({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});
const barlow = Barlow({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "title",
  description: "description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {

  return (
    <html lang={"pt"}>
      <body
        className={cn(
          "font-inter bg-background",
          inter.variable,
          jetbrainsMono.variable,
          barlow.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
