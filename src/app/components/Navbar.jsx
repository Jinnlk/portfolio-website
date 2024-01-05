"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import Navlink from '@/app/components/Navlink'

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    }
]

const Navbar = () => {

    const [navbarOpen, setnavbarOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-90">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4">
            <Link
                href={"/"}
                className="text-2xl md:text-3xl text-white font-semibold"
            >
                LOGO
            </Link>
                <div className="menu block md:1-auto" id="navbar">
                    <ul className="flex p-4 md:p-8 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Navlink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;