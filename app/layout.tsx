import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tehila Friedland | Frontend & Full-Stack Developer",
  description: "Frontend & Full-Stack Developer skilled in building scalable, user-focused web applications. Experienced with React, Angular, Node.js, and cloud technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-zinc-950 text-zinc-100`}>
        <ScrollToTop />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="border-t border-[var(--border-subtle)] bg-gradient-to-t from-[#09090b] to-[#0f0f12] py-12 mt-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-8 md:grid-cols-3 mb-8">
              <div>
                <h3 className="text-white font-bold mb-2">Portfolio</h3>
                <p className="text-zinc-400 text-sm">Frontend & Full-Stack Developer crafting beautiful, performant web experiences.</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">Quick Links</h3>
                <ul className="text-zinc-400 text-sm space-y-1">
                  <li><a href="#hero" className="hover:text-[var(--accent-primary)] transition-colors">Home</a></li>
                  <li><a href="#experience" className="hover:text-[var(--accent-primary)] transition-colors">Experience</a></li>
                  <li><a href="#projects" className="hover:text-[var(--accent-primary)] transition-colors">Projects</a></li>
                  <li><a href="#skills" className="hover:text-[var(--accent-primary)] transition-colors">Skills</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">Connect</h3>
                <p className="text-zinc-400 text-sm">Let's build something amazing together.</p>
              </div>
            </div>
            <div className="border-t border-[var(--border-subtle)] pt-6 text-center text-xs text-zinc-500">
              <p>&copy; {new Date().getFullYear()} Tehila Friedland. Built with Next.js and Tailwind CSS. <span className="text-[var(--accent-primary)]">Created with care.</span></p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
