"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navlink from "./navlink";
import "./styles.css";
export interface NavItem {
  text: string;
  link: string;
}

interface NavbarProps {
  navItems: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
  const pathname = usePathname();
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    if (pathname !== "/") {
      setIsTop(false);
      return;
    }

    const handleScroll = () => {
      setIsTop(window.scrollY < window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <nav
      className={`fixed w-full transition-colors duration-300 ${
        isTop ? "text-white" : "text-black"
      }`}
    >
      <div className="flex flex-row border-line w-full justify-between p-5">
        <img src="/eec-logo.png" alt="eec logo" className="w-10 h-11" />
        <ul className="flex flex-row gap-10 m-auto">
          {navItems.map((item, index) => (
            <Navlink key={index} text={item.text} link={item.link} />
          ))}
        </ul>
        <a className={`button ${isTop ? "button-white" : ""}`} href="/contact">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
