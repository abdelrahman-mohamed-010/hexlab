import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/providers/lenis";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next SaaS",
  description: "Privacy-friendly analytics, made simple.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} font-[family-name:var(--font-dm-sans)] antialiased w-full min-h-screen overflow-x-hidden`}>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
