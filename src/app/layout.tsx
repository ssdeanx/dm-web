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
  title: {
    default: "DeanMachines",
    template: "%s | DeanMachines"
  },
  description: "DeanMachines - Portfolio and Projects",
  keywords: ["developer", "portfolio", "projects"],
  authors: [{ name: "DeanMachines" }],
  creator: "DeanMachines",
  metadataBase: new URL('https://deanmachines.com'), // Replace with your actual domain
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "DeanMachines",
    description: "DeanMachines - Portfolio and Projects",
    siteName: "DeanMachines"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
