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
  title: "Eugia -Dev Maheshreddy",
  description: "Eugia is a global pharmaceutical company that develops, manufactures, and markets a wide range of generic and branded pharmaceuticals.",
  keywords: "Pharmaceutical, Healthcare, Generic Medicines, Branded Pharmaceuticals, Global Healthcare, Medical Innovation",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://eugia.com',
    title: 'Eugia - Global Pharmaceutical Company',
    description: 'Eugia is a global pharmaceutical company that develops, manufactures, and markets a wide range of generic and branded pharmaceuticals.',
    siteName: 'Eugia Pharmaceuticals',
    images: [
      {
        url: 'https://eugia.mahs.me/image.png',
        width: 1200,
        height: 630,
        alt: 'Eugia Pharmaceuticals',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eugia - Global Pharmaceutical Company',
    description: 'Eugia is a global pharmaceutical company that develops, manufactures, and markets a wide range of generic and branded pharmaceuticals.',
    images: ['https://eugia.mahs.me/image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/Logo.png',
    apple: '/Logo.png',
  },
  
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
