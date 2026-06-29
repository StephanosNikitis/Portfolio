import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CursorFollower from "@/components/CursorFollower";
import "./globals.css";

import TransitionProvider from "@/providers/TransitionProvider";
import FirstVisitRedirectProvider from "@/providers/FirstVisitRedirectProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shaurya Singh",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">
        <TransitionProvider>
          <FirstVisitRedirectProvider>
            <CursorFollower />
            {children}
          </FirstVisitRedirectProvider>
        </TransitionProvider>
      </body>
    </html>
  );
}
