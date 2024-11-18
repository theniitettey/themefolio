import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header, Footer, ThemeProvider } from "@/components";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
  adjustFontFallback: true,
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Michael Perry Nii Tettey | Software Engineer & Founder at BBF Labs",
  description:
    "Expert software engineer specializing in full-stack web development, React, Node.js, and cloud solutions. Browse my portfolio showcasing innovative projects, technical blog posts, and professional software development services. Founder of BBF Labs, delivering cutting-edge web applications and digital solutions.",
  keywords: [
    "Michael Perry Nii Tettey",
    "Software Engineer",
    "BBF Labs Founder",
    "Tech Entrepreneur",
    "Full-stack Developer",
    "Frontend Development",
    "Backend Development",
    "React Developer",
    "Node.js Expert",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Application Architecture",
    "Web Development Services",
    "Software Consulting",
    "Custom Software Solutions",
    "Technical Blog",
    "Software Portfolio",
    "Code Examples",
    "React.js",
    "Next.js",
    "Node.js",
    "JavaScript",
    "Nest.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "AWS",
    "Google Cloud Platform",
    "Azure",
    "TypeScript",
    "REST API",
    "Cloud Computing",
    "Database Design",
    "Software Engineering",
    "Web Development",
    "Digital Solutions",
    "Tech Innovation",
    "Software Architecture",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
    shortcut: "/shortcut-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.theniitettey.live",
    siteName: "Michael Perry Nii Tettey",
    title: "Michael Perry Nii Tettey | Software Engineer & Founder",
    description:
      "Expert software engineer and founder of BBF Labs. Explore my portfolio of web development projects, technical insights, and professional services.",
    images: [
      {
        url: "/api/og/profile",
        width: 1200,
        height: 630,
        alt: "Michael Perry Nii Tettey - Software Engineer & Founder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Perry Nii Tettey | Software Engineer & Founder",
    description:
      "Expert software engineer and founder of BBF Labs. Explore my portfolio of web development projects and technical insights.",
    images: ["/api/og/profile"],
    creator: "@thneniitettey",
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
  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-verification-code",
  // },
  alternates: {
    canonical: "https://www.theniitettey.live",
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
        className={`${poppins.className} antialiased p-4 lg:container lg:mx-auto sm:w-full lg:w-[50%]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics mode="production" />
        <SpeedInsights />
      </body>
      {process.env.NODE_ENV === "production" && (
        <>
          <Script async src="https://api.theniitettey.live/script.js" />
        </>
      )}
    </html>
  );
}
