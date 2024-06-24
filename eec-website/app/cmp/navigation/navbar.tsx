import React from "react";
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
    return (
        <nav className="fixed  w-full ">
            <div className="flex flex-row  border-line w-full justify-between p-5">
                <ul className="flex flex-row gap-10 m-auto">
                    {navItems.map((item, index) => (
                        <Navlink key={index} text={item.text} link={item.link} />
                    ))}
                </ul> 
            </div>
            
        </nav>
    );
}

export default Navbar;


