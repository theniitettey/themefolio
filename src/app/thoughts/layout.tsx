import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Thoughts & Insights | Michael Perry Nii Tettey",
    description:
      "A personal blog sharing both technical expertise and life reflections. From software development insights and coding experiences to personal perspectives on life, creativity, and general musings. Join me in exploring technology, personal growth, and everything in between",
    keywords: [
      "Technical Blog",
      "Software Development Blog",
      "Web Development Articles",
      "Engineering Insights",
      "Tech Thoughts",
      "Developer Blog",
      "Personal Blog",
      "Life Reflections",
      "Personal Growth",
      "General Thoughts",
      "Life Experiences",
      "Creative Writing",
      "Software Engineering",
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "Full-stack Development",
      "React Development",
      "Node.js Development",
      "TypeScript Development",
      "Technical Tutorials",
      "Code Examples",
      "Best Practices",
      "Development Tips",
      "Programming Insights",
      "Tech Industry Trends",
      "Personal Stories",
      "Life Lessons",
      "Michael Perry Nii Tettey",
      "BBF Labs Blog",
      "Software Engineer Writing",
      "Developer Lifestyle",
      "Personal Insights",
      "Lifestyle Blog",
      "Tech Life Balance",
    ],
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://www.theniitettey.live/thoughts",
      siteName: "Michael Perry Nii Tettey's Thoughts",
      title: "Technical & Personal Insights | The Nii Tettey",
      description:
        "Join Michael Perry Nii Tettey's journey through software development, personal growth, and life's adventures. A mix of technical expertise and personal reflections.",
      images: [
        {
          url: "/api/og/thought",
          width: 1200,
          height: 630,
          alt: "Michael Perry Nii Tettey's Thoughts - Technical & Personal Insights",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Technical & Personal Insights | The Nii Tettey",
      description:
        "Join my journey through software development, personal growth, and life's adventures. A mix of technical expertise and personal reflections.",
      images: ["/api/og/thought"],
      creator: "@theniitettey",
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    alternates: {
      canonical: "https://www.theniitettey.live/thoughts",
    },
    authors: [
      {
        name: "Michael Perry Nii Tettey",
        url: "https://www.theniitettey.live",
      },
    ],
    category: "Thoughts",
    archives: ["Thoughts x Archive"],
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
