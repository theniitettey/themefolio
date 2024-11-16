"use client";
import { allPosts } from "@/.contentlayer/generated";
import { Post } from "@/.contentlayer/generated/types";
import Link from "next/link";
import { Metadata } from "next";
import React, { useState, useEffect } from "react";

export async function generateMetadata(): Promise<Metadata> {
  const archivedPosts = allPosts.filter((post) => post.archived);
  const postCount = archivedPosts.length;

  let dateRange = "";
  if (postCount > 0) {
    const dates = archivedPosts.map((post) => new Date(post.date));
    const oldestPost = new Date(
      Math.min(...dates.map((date) => date.getTime()))
    );
    const newestPost = new Date(
      Math.max(...dates.map((date) => date.getTime()))
    );
    dateRange = `from ${oldestPost.getFullYear()} to ${newestPost.getFullYear()}`;
  }

  const title = "Archive | The Nii Tettey";
  const description =
    postCount > 0
      ? `Browse ${postCount} archived blog posts ${dateRange}. A collection of past writings and thoughts by Nii Tettey.`
      : "Archive of past blog posts by Nii Tettey.";

  return {
    title,
    description,

    openGraph: {
      type: "website",
      title,
      description,
      url: "https://www.theniitettey.live/archive/posts",
      images: [
        {
          url: "/api/og/post-archive",
          width: 1200,
          height: 630,
          alt: "Blog Archive",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@theniitettey",
      images: ["/api/og/post-archive"],
    },

    alternates: {
      canonical: "https://www.theniitettey.live/archive/posts",
    },
  };
}

export default function ArchivePage() {
  const sortedArchives = allPosts
    .filter((post) => post.archived)
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  const [archivedPosts, setArchivedPosts] = useState<Post[]>(sortedArchives);

  useEffect(() => {
    setArchivedPosts(sortedArchives);
  }, []);

  return (
    <div>
      <h1 className="text-xl sm:text-3xl font-bold flex gap-2 items-center mt-6 mb-4 cursor-pointer">
        Archived Posts
      </h1>
      {archivedPosts.length > 0 ? (
        archivedPosts.map((post) => (
          <article key={post._id} className="mb-8">
            <Link href={post.slug} className="flex justify-between items-start">
              <h2
                className="

                text-sm
                sm:text-lg
                text-grey-100
                dark:text-white
                font-medium
              "
              >
                {post.title}
              </h2>
            </Link>
            {post.description && (
              <p className="text-[0.7rem] sm:text-sm font-light text-ground-600">
                {post.description}
              </p>
            )}
          </article>
        ))
      ) : (
        <p className="text-[0.7rem] sm:text-sm font-light text-ground-600">
          No archived posts found.
        </p>
      )}
    </div>
  );
}
