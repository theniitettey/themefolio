"use client";
import { allThoughts } from "@/./.contentlayer/generated";
import { Thoughts } from "@/./.contentlayer/generated/types";
import { MotionDiv } from "@/components";
import { format } from "date-fns";
import { Metadata } from "next";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const variant = {
  hidden: { opacity: 0, y: -5 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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

const ThoughtsPage = () => {
  const sortedThoughts = allThoughts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const [thoughts, setThoughts] = useState<Thoughts[]>(sortedThoughts);

  useEffect(() => {
    setThoughts(sortedThoughts);
  }, []);

  return (
    <MotionDiv
      initial="hidden"
      animate="visible"
      variants={variant}
      className="space-y-4"
    >
      {thoughts.map((post) => (
        <article key={post._id} className="">
          <div className="flex flex-col gap-[0.1rem] items-start">
            <Link
              href={post.slug}
              className="flex gap-4 justify-center items-center mt-6 text-xs sm:text-lg sm:mt-12 font-medium"
            >
              <span>{format(new Date(post.date), "yyyy-MM-dd")}</span>

              <h2 className="t hover:underline decoration-grey-100 hover:decoration-1 mb-1">
                {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
              </h2>
            </Link>
            <div className="h-[1px] w-full bg-ground-100 dark:bg-ground-600"></div>
          </div>
        </article>
      ))}
    </MotionDiv>
  );
};

export default ThoughtsPage;
