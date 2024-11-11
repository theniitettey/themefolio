"use client";
import { Icons } from "@/assets";
import Image from "next/image";
import { Fredoka } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const spicyRice = Fredoka({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  adjustFontFallback: true,
});

export default function NotFound() {
  const router = useRouter();
  const [hasHistory, setHasHistory] = useState(false);

  useEffect(() => {
    setHasHistory(window.history.length > 1);
  }, []);

  const handleNavigation = () => {
    if (hasHistory) {
      router.back();
    } else {
      router.push("/");
    }
  };
  return (
    <div
      className={`${spicyRice.className} flex flex-col lg:flex-row items-center justify-center p-8 text-center md:text-left`}
    >
      <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
        <Image
          src={Icons.coloredLogo}
          alt="Colored logo"
          height={120}
          width={120}
          className="md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px]"
        />
      </div>
      <div className="flex flex-col items-center md:items-center lg:items-start">
        <h1 className="text-4xl md:text-5xl lg:text-7xl text-gray-800 dark:text-gray-200 font-semibold mb-2 md:mt-4">
          Oops, you&apos;re lost...
        </h1>
        <p className="text-xl md:text-2xl lg:text-4xl text-gray-600 dark:text-gray-400 mb-6">
          But don&apos;t worry, it happens to the best of us.
        </p>
        <p className="text-2xl md:text-3xl lg:text-5xl text-gray-700 dark:text-gray-300 mb-8">
          Life&apos;s just one big maze, isn&apos;t it?
        </p>
        <button
          onClick={handleNavigation}
          className="bg-glow-200 text-glow-200 border-glow-200 dark:text-white border-[1.3px] dark:bg-slate-400 dark:border-slate-400 border-opacity-25 bg-opacity-25 py-1 px-4 rounded-full dark:bg-opacity-[0.55] transition-all hover:bg-opacity-40 dark:hover:bg-opacity-60 font-semibold text-lg"
        >
          Let&apos;s guide you back home
        </button>
      </div>
    </div>
  );
}
