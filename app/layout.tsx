import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google"; // Import Montserrat font
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

// Local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Google font Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // You can customize the weights as per your needs
});

export const metadata: Metadata = {
  title: "AJ-AI",
  description: "Immersive AutoTrains bot With AI-ML intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${montserrat.className} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
