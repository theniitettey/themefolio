"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Icons } from "@/assets";
import Link from "next/link";
import { FiGithub, FiTwitter, FiMail, FiHome } from "react-icons/fi";
import { TfiPencil } from "react-icons/tfi";
import { BsJournalText } from "react-icons/bs";
import { FaSignature } from "react-icons/fa";

interface NavLinkProps {
  name: string;
  icon: React.ReactNode;
  href: string;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
  icon,
  href,
  isActive = false,
  name,
}) => {
  return (
    <Link
      href={href}
      className={`flex flex-row items-center justify-center gap-1 text-xs font-medium ${
        isActive
          ? "text-white border-[1.3px] bg-slate-400 border-slate-400 border-opacity-25  bg-opacity-25 py-1 px-2 rounded-xl"
          : "text-slate-300"
      }`}
    >
      {isActive && icon}
      {name}
    </Link>
  );
};

const Links: Array<NavLinkProps> = [
  {
    name: "Home",
    icon: <FiHome />,
    href: "/",
  },
  {
    name: "Blog",
    icon: <BsJournalText />,
    href: "/blog",
  },
  {
    name: "Thoughts",
    icon: <TfiPencil />,
    href: "/thoughts",
  },
  {
    name: "Guestbook",
    icon: <FaSignature />,
    href: "/guestbook",
  },
];

const Header = () => {
  const pathname = usePathname();
  const [active, setActive] = useState<string>("/");
  useEffect(() => {
    setActive(pathname);
  }, [pathname]);
  return (
    <header className="flex flex-col gap-6">
      <div className="flex flex-row items-center justify-between">
        <Image
          src={Icons.coloredLogo}
          alt="Colored logo"
          width={20}
          height={20}
        />
        <div className="flex flex-row items-center justify-center gap-3 border-[1.6px] border-solid bg-[#424242] border-[#afafaf] border-opacity-20 rounded-xl p-1 bg-opacity-40">
          <Link href="mailto:michaelperryt97@gmail.com" target="blank">
            <FiMail size={15} className="text-white" />
          </Link>
          <Link href="https://x.com/theniitettey" target="blank">
            <FiTwitter size={15} className="text-white" />
          </Link>
          <Link href="https://github.com/michaelperryjnr" target="blank">
            <FiGithub size={15} className="text-white" />
          </Link>
        </div>
      </div>
      <div>
        <nav className="flex flex-row items-center justify-start gap-2">
          {Links.map((link) => (
            <NavLink
              key={link.href}
              name={link.name}
              icon={link.icon}
              href={link.href}
              isActive={active.includes(link.href)}
            />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
