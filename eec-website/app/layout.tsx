import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar, { NavItem } from "./cmp/navigation/navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EEC",
  description: "ecam engineering consult",
};

const navItems: NavItem[] = [
<<<<<<< HEAD
  { text: "Home", link: "/" },
  { text: "About", link: "/about" },
  { text: "Projects", link: "/projects" },
  { text: "Contact", link: "/contact" },
=======
  {text: "Home", link: "#"},
  {text: "About", link: "#"},
  {text: "Projects", link: "#"},
  {text: "test", link: "/testpage"},
>>>>>>> d8a12c028737eb21b47d4d90373f24cdf34e9d94
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar navItems={navItems} />
        {children}
      </body>
    </html>
  );
}
