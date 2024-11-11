"use client";
import React from "react";
import Link from "next/link";

interface IPost {
  title: string;
  date: string;
  id: string;
}

const Posts: React.FC<IPost> = ({ title, date, id }) => {
  return (
    <Link
      href={`/blog/${id}`}
      className="flex flex-col gap-[0.1rem] sm:gap-[0.4rem]"
    >
      <div className="flex flex-row justify-between items-center text-xs sm:text-lg text-grey-100 dark:text-white">
        <h3>{title}</h3>
        <p className="dark:text-slate-300 text-grey-200">{date}</p>
      </div>
      <div className="h-[1px] w-full bg-ground-100"></div>
    </Link>
  );
};

export default Posts;
