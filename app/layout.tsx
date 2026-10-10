import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ankit Meena — Full Stack Developer",
  description:
    "Portfolio of Ankit Meena, a Full Stack Developer specializing in MERN stack, Next.js, and TypeScript.",
  keywords: [
    "Ankit Meena",
    "Full Stack Developer",
    "Next.js",
    "MERN",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Ankit Meena" }],
  openGraph: {
    title: "Ankit Meena — Full Stack Developer",
    description: "Building modern, responsive web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}