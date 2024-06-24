import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar, { NavItem } from "./cmp/navigation/navbar";
import Footer from "./cmp/footer/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EEC",
  description: "ecam engineering consult",
};

const navItems: NavItem[] = [
  { text: "Home", link: "/" },
  { text: "About", link: "/about" },
  { text: "Projects", link: "/projects" },
  { text: "Contact", link: "/contact" },
  { text: "Test", link: "/testpage" },
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
        <Footer />
      </body>
    </html>
  );
}
