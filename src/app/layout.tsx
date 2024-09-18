import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteData } from "@/config/site";

//https://bookworm-light-astro.vercel.app/

const NotoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteData.siteName}`,
    default: siteData.siteName,
  },
  description: siteData.siteDescription,
  keywords: ["Next.js", "Three.js", "FrontEnd"],
  authors: [{ name: "ShinCode", url: siteData.siteUrl }],
  creator: "ShinCode | Three InSights",
  publisher: "Three InSights",
  openGraph: {
    title: siteData.siteName,
    description: siteData.siteDescription,
    url: siteData.siteUrl,
    siteName: siteData.siteName,
    images: [
      { url: `${siteData.siteUrl}/og-image.jpg`, width: 1200, height: 630 },
    ],
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${NotoSansJP.className} bg-neutral-50`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow w-full">
            <div className="max-w-6xl mx-auto px-4">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
