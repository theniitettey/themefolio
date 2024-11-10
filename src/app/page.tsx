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
    <div className="flex flex-col gap-8">
      <div>
        <div className="flex flex-row items-center justify-center gap-1 border-[2px] border-solid bg-[#1EC3F7] rounded-xl p-1 bg-opacity-50 text-[#1EC3F7] border-[#1EC3F7] font-semibold text-xs w-fit mt-8">
          <FaRegHandPeace size={15} className="text-[#1EC3F7]" />
          Akwaaba
        </div>
        <h2 className="mt-1 font-bold text-sm">いらっしゃいませ</h2>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-end overflow-hidden">
          <Image
            src={Icons.homeBg}
            alt="Home Background"
            width={100}
            height={100}
            className="opacity-60 z-0"
          />
        </div>
        <h1 className="text-xl font-bold">Michael Perry Nii Tettey</h1>
        <h2 className="text-sm font-normal text-[#BAABAB]">
          Junior Software Engineer at QuiverTech Solutions
        </h2>
        <p className="mt-2 text-xs font-medium">
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
          className="mt-4"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-1 font-semibold text-white text-md items-center justify-left">
          <MdOutlineFeaturedPlayList size={20} />
          Featured
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col px-2 pt-3 border-[1.5px] border-solid rounded-lg bg-[#262626] border-[#BAABAB] bg-opacity-35 border-opacity-25">
            <div>
              <h2 className="text-sm font-bold">EventFlick</h2>
              <h3 className=" text-xs mt-1 mb-3 flex-1">
                Event Ticketing and Management SaaS platform for event
                organizers
              </h3>
              <Link
                href="https://eventflick.vercel.app"
                target="blank"
                className="text-xs font-semibold underline"
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
          <div className="flex flex-col px-2 pt-3 border-[1.5px] border-solid rounded-lg bg-[#262626] border-[#BAABAB] bg-opacity-35 border-opacity-25">
            <div>
              <h2 className="text-sm font-bold">EventFlick</h2>
              <h3 className=" text-xs mt-1 mb-3 flex-1">
                Event Ticketing and Management SaaS platform for event
                organizers
              </h3>
              <Link
                href="https://eventflick.vercel.app"
                target="blank"
                className="text-xs font-semibold underline"
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
          <div className="flex flex-col px-2 pt-3 border-[1.5px] border-solid rounded-lg bg-[#262626] border-[#BAABAB] bg-opacity-35 border-opacity-25">
            <div>
              <h2 className="text-sm font-bold">
                <FiYoutube
                  size={20}
                  className="text-red-600 inline-flex mr-1"
                />
                Devlog
              </h2>
              <h3 className=" text-xs mt-1 mb-3 flex-1">
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
        <div className="flex flex-row gap-1 font-semibold text-white text-md items-center justify-left">
          <BsJournalText size={20} />
          Recent Posts
        </div>
        <div className="flex flex-col gap-2">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
