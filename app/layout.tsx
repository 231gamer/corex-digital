import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "CoreX Digital Solutions - World-Class Technology Solutions",
  description: "We design, build, and deploy high-performance technology solutions for Liberia and global clients. Website Development, Mobile Apps, Software Solutions, and more.",
  keywords: "web development, mobile apps, software solutions, digital marketing, Liberia tech agency",
  openGraph: {
    title: "CoreX Digital Solutions",
    description: "Transforming Businesses with World-Class Digital Solutions",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics/>
      </body>
    </html>
  );
}
