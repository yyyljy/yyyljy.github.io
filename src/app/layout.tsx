import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jeff's Portfolio",
  description: "블록체인 백엔드 개발자 Jeff",
  keywords: ["블록체인", "백엔드 개발자", "Web3"],
  authors: [{ name: "Jeff" }],
  creator: "Jeff",
  publisher: "Jeff",
  robots: "index, follow",
  openGraph: {
    title: "Jeff's Portfolio",
    description: "블록체인 백엔드 개발자 Jeff",
    url: "http://block-chain.kr",
    siteName: "Jeff's Portfolio",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeff's Portfolio",
    description: "블록체인 백엔드 개발자 Jeff",
    images: "/meta.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
