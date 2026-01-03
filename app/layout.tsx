import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Portfolio | Frontend Engineer",
  description: "Frontend-focused engineer with expertise in React, TypeScript, and cloud-based systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-zinc-950 text-zinc-100`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="border-t border-zinc-800 bg-zinc-950 py-8 mt-16">
          <div className="mx-auto max-w-6xl px-4 text-center text-sm text-zinc-500">
            <p>&copy; {new Date().getFullYear()} Portfolio. Built with Next.js and Tailwind CSS.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
