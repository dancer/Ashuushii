import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollProvider from '@/components/ScrollProvider'
import { MusicProvider } from '@/components/MusicContext'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashuushii",
  description: "Gamer, Streamer, Creator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MusicProvider>
          <ScrollProvider>{children}</ScrollProvider>
        </MusicProvider>
      </body>
    </html>
  );
}
