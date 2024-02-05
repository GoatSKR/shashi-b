import { navLinks } from "../store/constants";
import React, { useState, useEffect } from 'react';
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className="w-full bg-[#535252]">
                <div className="flex items-left justify-between px-2">
                    <div className="">
                        <img className="pl-2 py-2" src="https://static.wixstatic.com/media/87bf9e_0eb12d92e4c744239f9a587e899b226a~mv2.png/v1/fill/w_97,h_97,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Transparent%20Background%20SBMB%20Logo.png" alt="Logo" />
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-black font-Helvet p-2 focus:outline-none"
                        >
                            {isOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="hidden md:flex items-center justify-around gap-2">
                        {navLinks.map((link) => (
                            <React.Fragment key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    key={link.id}
                                    className="text-white font-Helvet px-3 font-light hover:underline"
                                >
                                    {link.name}
                                </a>
                            </React.Fragment>
                        ))}
                    </div>
                    <div className={`md:hidden ${isOpen ? "block" : "hidden"}`} >
                        {navLinks.map((link) => (
                            <React.Fragment key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    key={link.id}
                                    className="block text-black font-Helvet px-3 py-2 font-light w-full border-b border-gray-300 hover:underline"
                                >
                                    {link.name}
                                </a>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    )
}