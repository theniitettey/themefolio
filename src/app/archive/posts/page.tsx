"use client";
import { allPosts } from "@/.contentlayer/generated";
import { Post } from "@/.contentlayer/generated/types";
import Link from "next/link";
import React, { useState, useEffect } from "react";

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
