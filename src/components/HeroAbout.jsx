import { Link } from "react-router-dom";
import { navLinks } from "../store/constants";
import React, { useState, useEffect } from 'react';
export default function HeroAbout() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className=" bg-[#b0acad]">
            <div className=" bg-no-repeat bg-right-bottom bg-contain "
                style={{ backgroundImage: 'url("/static/images/shashb4.png")' }}>
                <nav className="w-full md:pr-[20px]">
                    <div className="flex items-left justify-between px-2">
                        <div class="absolute inset-0 bg-[#000000] h-[115px] opacity-50"></div>
                        <div className="relative">
                            <img className="pl-2 py-2" src="https://static.wixstatic.com/media/87bf9e_0eb12d92e4c744239f9a587e899b226a~mv2.png/v1/fill/w_97,h_97,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Transparent%20Background%20SBMB%20Logo.png" alt="Logo" />
                        </div>
                        <div>
                            <div className="md:hidden relative flex justify-end pt-5 ">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="text-white  font-Helvet p-2 focus:outline-none"
                                >
                                    {isOpen ? (
                                        <svg
                                            className="w-8 h-8"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 26 26"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="3"
                                                d="M6 18L18 6M6 6l12 12"
                                            ></path>
                                        </svg>
                                    ) : (
                                        <svg
                                            className="w-12 h-12"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="3"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            ></path>
                                        </svg>
                                    )}
                                </button>
                            </div>
                            <div className="hidden md:flex items-center justify-around gap-2 relative pt-12">
                                {navLinks.map((link) => (

                                    <Link
                                        to={`/${link.name.replace(/\s/g, '')}`}
                                        key={link.id}
                                        className="text-white font-Helvet px-3 font-light hover:underline"
                                    >
                                        {link.name}
                                    </Link>

                                ))}
                            </div>
                            <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-transparent pt-12`}>
                                {navLinks.map((link) => (
                                   
                                        <Link
                                            to={`/${link.name.replace(/\s/g, '')}`}
                                            key={link.id}
                                            className="block text-[#284B69] font-semibold font-sans px-3 py-2 bg-[#b0acad]  border-b border-gray-700 hover:bg-[white] relative"
                                        >
                                            {link.name}
                                        </Link>
                               
                                ))}
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="px-[10px] md:px-[200px] pt-[80px] md:pt-[300px] pb-[180px] md:pb-[300px]">
                    <div className="flex  flex-col md:flex-row justify-between">
                        <div className="">
                            <p className="font-sans text-[#284B69] text-md md:text-lg font-bold w-auto md:w-2/3 pb-[180px] md:pb-[0px]" >
                                "Learning any language, especially English, opens doors to opportunities. With
                                the right mindset and guidance, fluency is achievable. Dedication leads to mastery."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}