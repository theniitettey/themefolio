"use client";
import { allAsores } from "@/.contentlayer/generated";
import { Asore } from "@/.contentlayer/generated/types";
import { MotionDiv } from "@/components";
import { formatDistance } from "date-fns";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const variant = {
  hidden: { opacity: 0, y: -5 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function DevotionalsPage() {
  const sortedPosts = allAsores
    .filter((post) => !post.archived)
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  const [posts, setPosts] = useState<Asore[]>(sortedPosts);

  useEffect(() => {
    setPosts(sortedPosts);
  }, []);

  return (
    <MotionDiv
      initial="hidden"
      animate="visible"
      variants={variant}
      className="space-y-4"
    >
      <div>
        <h1 className="text-xl sm:text-3xl font-bold flex gap-2 items-center mt-6 mb-4 cursor-pointer">
          Devotionals
        </h1>

        {posts.map((post) => (
          <article key={post._id} className="mb-8">
            <Link href={post.slug} className="flex justify-between items-start">
              <h2 className="text-xs sm:text-lg text-grey-100 dark:text-white font-medium">
                {post.title}
              </h2>
              <span className=" text-[0.4rem] sm:text-sm dark:text-ground-200 text-grey-200">
                {formatDistance(new Date(post.date), new Date(), {
                  addSuffix: true,
                })}
              </span>
            </Link>
            {post.description && (
              <p className="text-[0.6rem] sm:text-sm font-light text-ground-600">
                {post.description}
              </p>
            )}
          </article>
        ))}

        <Link
          href="archive/devotionals"
          className="text-sm sm:text-xl font-normal mt-9 hover:underline decoration-grey-100 hover:decoration-1 cursor-pointer italic"
        >
          Archived Devotionals
        </Link>
      </div>
    </MotionDiv>
  );
}
