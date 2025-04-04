import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Logo } from './Logo';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luxury Escorts London",
  description: "Premium escort services in London",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white min-h-screen`}>
        <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <Logo />
          </div>
        </header>
        <main className="container mx-auto px-4 pt-24 pb-12">
          {children}
        </main>
      </body>
    </html>
  );
}
