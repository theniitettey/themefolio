import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header, Footer } from "@/components";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "The Nii Tettey",
  description: "Portfolio of Michael Perry Nii Tettey",
  keywords: [
    "Portfolio",
    "Michael Perry Nii Tettey",
    "Software Engineer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "BBF Labs",
  ],
  icons: {
    icon: "/favicon.ico",
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
        className={`${poppins.className} antialiased p-4 sm:container sm:mx-auto sm:w-[50%]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
