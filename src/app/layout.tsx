import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#F7F3EE",
};

export const metadata: Metadata = {
  title: "Tarun S | Full Stack Developer — Modern Web Solutions",
  description:
    "Full Stack Developer with 3+ years of experience building production systems, scalable APIs, and modern web applications. Available for freelance projects and full-time opportunities.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Vue.js",
    ".NET",
    "Python",
    "C#",
    "Freelance Developer",
    "Mumbai",
    "Web Developer India",
    "Business Website Developer",
  ],
  authors: [{ name: "Tarun S" }],
  creator: "Tarun S",
  openGraph: {
    title: "Tarun S | Full Stack Developer",
    description:
      "I engineer systems that scale and ship products that convert. 3+ years building production systems, modern web apps, and AI-powered features.",
    type: "website",
    locale: "en_IN",
    siteName: "Tarun S — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarun S | Full Stack Developer",
    description:
      "I engineer systems that scale and ship products that convert. Available for freelance and full-time roles.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" suppressHydrationWarning>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${inter.variable} font-sans antialiased overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]`}>
        {children}
      </body>
    </html>
  );
}
