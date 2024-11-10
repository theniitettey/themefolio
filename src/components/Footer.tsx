"use client";
import React, { useEffect, useState } from "react";
import { Icons } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  display: "swap",
  subsets: ["latin"],
  adjustFontFallback: true,
});

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );

  const systemStatus = [
    "All systems are operational",
    "System is under maintenance",
    "System is down",
    "Checking system status...",
  ];

  const [systemStatusMessage, setSystemStatusMessage] = useState<string>(
    systemStatus[3]
  );

  useEffect(() => {
    setTimeout(() => {
      setSystemStatusMessage(systemStatus[0]);
    }, 5000);
  });

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="mt-4 sm:mt-8">
      <div className="h-[1px] w-full bg-slate-400 mb-4 sm:mb-8"></div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col items-start justify-start gap-1 sm:gap-3 text-xs sm:text-xl font-medium text-slate-400">
          <div>
            &copy;{" " + currentYear} Michael Perry Tettey. All rights reserved.{" "}
          </div>
          <div className={`${roboto.className}`}>
            version:{" "}
            <span className="text-green-600 bg-slate-600">{currentYear}</span>
            .11.10/16{" "}
          </div>

          <div className="flex flex-row items-center justify-center gap-1">
            <div className={`h-2 w-2 rounded-full bg-green-600`}></div>
            <h3 className="text-slate-200">{systemStatusMessage}</h3>
          </div>
          <Link
            href="https://github.com/michaelperryjnr/themefolio"
            target="blank"
            className="flex flex-row items-center justify-center gap-3 border-[1.6px] border-solid bg-[#424242] border-[#afafaf] border-opacity-20 rounded-xl py-1 px-2 bg-opacity-40 sm:rounded-2xl"
          >
            <FiGithub size={15} className="text-white" />
            Source Code
          </Link>
        </div>
        <div className="flex flex-col gap-[0.1rem]">
          <Image
            src={Icons.outlinedLogo}
            alt="Logo"
            className="w-10 h-10 sm:w-20 sm:h-20"
          />
          <Image
            src={Icons.outlinedLogo}
            alt="Logo"
            className="w-10 h-10 sm:w-20 sm:h-20"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
