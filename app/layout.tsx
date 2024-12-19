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
  description: "Gamer, Streamer, Content Creator | Join my community for gaming, anime, and positive vibes ✨",
  metadataBase: new URL('https://ashuushii.com'),
  appleWebApp: {
    capable: true,
    title: "Ashuushii",
    statusBarStyle: "default",
  },
  icons: {
    apple: [
      {
        url: "/180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Ashuushii",
    description: "Gamer, Streamer, Content Creator | Join my community for gaming, anime, and positive vibes ✨",
    images: [{
      url: 'https://ashuushii.com/metadata.png',
      width: 1200,
      height: 630,
      alt: 'Ashuushii - Gamer, Streamer, Content Creator'
    }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ashuushii",
    description: "Gamer, Streamer, Content Creator | Join my community for gaming, anime, and positive vibes ✨",
    images: [{
      url: 'https://ashuushii.com/metadata.png',
      width: 1200,
      height: 630,
      alt: 'Ashuushii - Gamer, Streamer, Content Creator'
    }],
    creator: '@ashuushii'
  }
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
