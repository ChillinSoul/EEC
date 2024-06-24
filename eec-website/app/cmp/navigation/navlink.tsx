"use client";

import { use } from "react";
import { NavItem } from "./navbar";
import { usePathname } from "next/navigation";

export default function Navlink(props: NavItem) {
  const pathname = usePathname();

  // Determine if the current location matches the link prop
  const isActive = pathname === props.link;

  return (
    <li className="nav-item">
      <a
        className={`hover:underline text-xl ${isActive ? 'text-[var(--color)]' : ''}`}
        href={props.link}
      >
        {props.text}
      </a>
    </li>
  );
}
