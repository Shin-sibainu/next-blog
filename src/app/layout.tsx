import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

//https://bookworm-light-astro.vercel.app/

const NotoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextBlog",
  description: "NextBlog was created ShinCode with Next.js and MicroCMS",
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
