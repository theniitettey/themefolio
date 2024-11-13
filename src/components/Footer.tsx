"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentDay, setCurrentDay] = useState(new Date().getDate());

  const systemStatus = [
    "Operational",
    "Down",
    "Degraded",
    "Checking...",
    "Maintenance",
  ] as const; // 'as const' makes this a readonly tuple of literal types

  type SystemStatus = (typeof systemStatus)[number]; // Union type of the possible statuses

  const statusColors: Record<SystemStatus, string> = {
    Operational: "bg-green-500",
    Down: "bg-red-500",
    Degraded: "bg-yellow-500",
    "Checking...": "bg-cyan-600",
    Maintenance: "bg-yellow-500",
  };

  const [systemStatusMessage, setSystemStatusMessage] =
    useState<SystemStatus>("Checking...");
  const [systemStatusColor, setSystemStatusColor] = useState(
    statusColors["Checking..."]
  );

  useEffect(() => {
    const randomizeInterval = setInterval(() => {
      const randomStatus = systemStatus[
        Math.floor(Math.random() * (systemStatus.length - 1))
      ] as SystemStatus;
      setSystemStatusColor(statusColors[randomStatus]);
    }, 500);

    const timeout = setTimeout(() => {
      clearInterval(randomizeInterval);
      const finalStatusIndex = Math.floor(
        Math.random() * (systemStatus.length - 1)
      );
      const finalStatus = systemStatus[finalStatusIndex] as SystemStatus;
      setSystemStatusMessage(finalStatus);
      setSystemStatusColor(statusColors[finalStatus]);
    }, 2000);

    return () => {
      clearInterval(randomizeInterval);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-background text-grey py-4 fixed bottom-0 left-0 right-0 z-50 text-xs sm:text-lg mt-2 border-t-[1.4px] border-solid border-t-slate-800">
      <div className="px-4 flex justify-between items-center">
        <Link href="/" className="dark:text-glow-100 text-glow-200">
          © Nii Tettey
        </Link>
        <div className="flex flex-row items-center justify-center gap-2">
          <div className={`${systemStatusColor} w-2 h-2 rounded-full`}></div>
          <div className={`text-grey-500 ${robotoMono.className}`}>
            {systemStatusMessage}
          </div>
        </div>
        <div className="text-grey-500">
          {currentYear}.{currentMonth}.{currentDay}
        </div>
        <Link
          href="https://github.com/your-github-username/your-repo"
          target="_blank"
          className="border-solid dark:bg-ground-400 dark:border-ground-500 border-ground-700 bg-ground-700 border-opacity-20 rounded-xl p-2 dark:bg-opacity-40 bg-opacity-20 sm:p-3 sm:rounded-2xl"
        >
          <FiGithub size={15} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
