"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Posts } from "@/components";
import { Icons, Images } from "@/assets";
import { FaRegHandPeace } from "react-icons/fa6";
import { BsJournalText } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { TfiPencil } from "react-icons/tfi";
import { TbLanguageHiragana } from "react-icons/tb";

interface IPost {
  title: string;
  date: string;
  id: string;
}
const recentBlogs: Array<IPost> = [
  {
    title: "Nobody reads",
    date: "9 Apr",
    id: "1",
  },
  {
    title: "Node Js: A Gist",
    date: "4 Apr",
    id: "2",
  },
  {
    title: "Express Js: A Gist",
    date: "15 Mar",
    id: "3",
  },
];

const Home = () => {
  const [posts, setPosts] = useState<Array<IPost>>(recentBlogs);

  useEffect(() => {
    setPosts(recentBlogs);
  }, []);

  return (
    <div className="flex flex-col gap-20">
      <div>
        <div
          className="flex flex-row items-center justify-center gap-1 border-[2px] border-solid dark:bg-glow-100 rounded-xl p-1 bg-opacity-50 dark:bg-opacity-50 dark:text-glow-100 dark:border-glow-100
        bg-glow-200 text-glow-200 border-glow-200 font-semibold text-xs w-fit mt-20 sm:text-base sm:mt-20 sm:rounded-2xl"
        >
          <FaRegHandPeace
            size={15}
            className="dark:text-glow-100 text-glow-200"
          />
          Akwaaba
        </div>
        <h2 className="mt-1 sm:mt-2 font-bold text-sm sm:text-lg text-grey-100 dark:text-white">
          いらっしゃいませ
        </h2>
      </div>

      <div className="relative sm:w-[60%] -mt-10">
        <div className="absolute inset-0 flex items-center justify-end overflow-hidden">
          <Image
            src={Icons.homeBg}
            alt="Home Background"
            width={100}
            height={100}
            className="opacity-60 z-0 sm:hidden"
          />
        </div>
        <h1 className="text-xl sm:text-3xl font-bold text-grey-100 dark:text-white">
          Michael Perry Nii Tettey
        </h1>
        <h2 className="text-sm sm:text-xl font-normal dark:text-ground-200 text-grey-200">
          Junior Software Engineer at QuiverTech Solutions
        </h2>
        <p className="mt-2 text-sm sm:text-lg sm:mt-8 font-medium text-grey-100 dark:text-white">
          Building polished software experiences with magical, unique and
          delightful details, for the web. I aim to create beautiful and
          functional software that is both intuitive and enjoyable for users.
          <br />I have a passion for learning, and I am constantly seeking to
          improve my skills mostly through reading, writing and drawing.
          I&apos;m interested in TypeScript and Rust, and at the same time,
          I&apos;m also experimenting with native apps with Swift. <br />
        </p>
        <Image
          src={Icons.doodle}
          alt="Doodle"
          width={100}
          height={100}
          className="mt-4 sm:mt-8 "
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-1 font-semibold text-md items-center justify-left sm:text-lg text-grey-100 dark:text-white">
          <MdOutlineFeaturedPlayList size={20} />
          Featured
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <div className="flex flex-col px-2 pt-3 border-[1.8px] border-solid rounded-lg dark:bg-ground-100 dark:border-ground-200 border-ground-700 bg-ground-700 dark:bg-opacity-35 dark:border-opacity-25 bg-opacity-10 border-opacity-60  text-grey-100 dark:text-white flex-1">
            <div>
              <h2 className="text-sm sm:text-base font-bold">EventFlick</h2>
              <h3 className=" text-xs sm:text-sm mt-1 mb-3">
                Event Ticketing and Management SaaS platform for event
                organizers
              </h3>
              <Link
                href="https://eventflick.vercel.app"
                target="blank"
                className="text-xs sm:text-sm font-semibold underline"
              >
                eventflick.vercel.app
              </Link>
            </div>
            <Image
              src={Images.projectImage}
              alt="Project Image"
              height={100}
              className="w-full"
            />
          </div>
          <div className="flex flex-col px-2 pt-3 border-[1.8px] border-solid rounded-lg dark:bg-ground-100 dark:border-ground-200 border-ground-700 bg-ground-700 dark:bg-opacity-35 dark:border-opacity-25 bg-opacity-10 border-opacity-60  text-grey-100 dark:text-white flex-1">
            <div>
              <h2 className="text-sm font-bold sm:text-base">EventFlick</h2>
              <h3 className=" text-xs sm:text-sm mt-1 mb-3">
                Event Ticketing and Management SaaS platform for event
                organizers
              </h3>
              <Link
                href="https://eventflick.vercel.app"
                target="blank"
                className="text-xs sm:text-sm font-semibold underline"
              >
                eventflick.vercel.app
              </Link>
            </div>
            <Image
              src={Images.projectImage}
              alt="Project Image"
              height={100}
              className="w-full"
            />
          </div>
          <div className="flex flex-col px-2 pt-3 border-[1.8px] border-solid rounded-lg dark:bg-ground-100 dark:border-ground-200 border-ground-700 bg-ground-700 dark:bg-opacity-35 dark:border-opacity-25 bg-opacity-10 border-opacity-60  text-grey-100 dark:text-white flex-auto">
            <div>
              <h2 className="text-sm sm:text-base font-bold">
                <FiYoutube
                  size={20}
                  className="text-red-600 inline-flex mr-1"
                />
                Devlog
              </h2>
              <h3 className=" text-xs sm:text-sm mt-1 mb-3">
                This is a Youtube channel I share progress on stuff I&apos;m
                working on. You&apos;ll also find some tutorials on code, 3d,
                etc. It&apos;s fun, check it out!
              </h3>
              <Link
                href="https://youtube.com/@michaelperryjnr"
                target="blank"
                className="text-xs font-semibold underline"
              >
                @michaelperryjnr
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-1 font-semibold text-grey-100 dark:text-white text-md sm:text-lg items-center justify-left">
          <BsJournalText size={20} />
          Recent Posts
        </div>
        <div className="flex flex-col gap-2 sm:gap-4">
          {posts.map((post) => {
            return (
              <Posts
                key={post.id}
                title={post.title}
                date={post.date}
                id={post.id}
              />
            );
          })}
          <Link
            href="/blogs"
            className="text-ground-600 text-xs sm:text-lg font-medium"
          >
            see all posts
          </Link>
        </div>
        <div className="flex flex-row gap-2 sm:gap-4">
          <Link
            href="/thoughts"
            className="dark:text-ground-300 border-[1.3px] dark:bg-ground-300 dark:border-ground-300 bg-glow-200 border-glow-200 text-grey-100 border-opacity-25 dark:bg-opacity-25 dark:border-opacity-25 border-dashed bg-opacity-25 py-1 px-2 rounded-xl text-xs sm:text-lg font-medium flex flex-row gap-1 w-fit items-center justify-center"
          >
            <TfiPencil />
            Thoughts
          </Link>
          <Link
            href="/hiragana"
            className="dark:text-ground-300 border-[1.3px] dark:bg-ground-300 dark:border-ground-300 bg-glow-200 border-glow-200 text-grey-100 border-opacity-25 dark:bg-opacity-25 dark:border-opacity-25 border-dashed bg-opacity-25 py-1 px-2 rounded-xl text-xs sm:text-lg font-medium flex flex-row gap-1 w-fit items-center justify-center"
          >
            <TbLanguageHiragana />
            Hiragana
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
