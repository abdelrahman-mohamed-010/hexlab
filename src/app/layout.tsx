import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/providers/lenis";

const dmSans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Pirsch — Privacy-First Web Analytics",
  description: "Privacy-friendly web analytics made and hosted in Europe — powerful, cookie-free, and fully compliant with GDPR, CCPA, and PECR.",
  keywords: ["web analytics", "privacy", "GDPR", "cookie-free", "Google Analytics alternative"],
  openGraph: {
    title: "Pirsch — Privacy-First Web Analytics",
    description: "Privacy-friendly web analytics made and hosted in Europe — powerful, cookie-free, and fully compliant with GDPR, CCPA, and PECR.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pirsch — Privacy-First Web Analytics",
    description: "Privacy-friendly web analytics made and hosted in Europe — powerful, cookie-free, and fully compliant with GDPR, CCPA, and PECR.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.className} antialiased w-full min-h-screen overflow-x-hidden`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
