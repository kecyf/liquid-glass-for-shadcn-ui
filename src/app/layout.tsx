import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Liquid Glass Theme for shadcn/ui | Premium React Components",
  description: "Apple's Liquid Glass design language, beautifully crafted for shadcn/ui. Translucent, premium, and ready to ship.",
  keywords: ["shadcn", "ui", "theme", "liquid glass", "apple", "react", "nextjs", "tailwind"],
  authors: [{ name: "kvncyf", url: "https://kvncyf.me" }],
  openGraph: {
    title: "Liquid Glass Theme for shadcn/ui",
    description: "Apple's Liquid Glass design language, beautifully crafted for React.",
    type: "website",
    url: "https://liquidglass.dev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Liquid Glass Theme Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Liquid Glass Theme for shadcn/ui",
    description: "Apple's Liquid Glass design language, beautifully crafted for React.",
    images: ["/og-image.png"],
    creator: "@kvncyf"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
