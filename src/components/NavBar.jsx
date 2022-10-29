import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { Link as NavLink } from "react-router-dom";
import Logo from '../assets/logo/White logo.svg';
import Dropdown from "./Dropdown";


const NavBar = () => {
    const [nav, setNav] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'services'
        },
        {
            id: 3,
            link: 'gallery'
        },
        {
            id: 4,
            link: 'contact us'
        },
        {
            id: 5,
            link: 'blog'
        },
        {
            id: 5,
            link: 'testimonials'
        }
    ]


    return (
        <div className="flex w-full h-16 bg-[#0F1D39] text-white items-center md:px-0 justify-between sticky top-0 z-40">
            <div className='flex w-40 md:h-14 justify-start md:ml-6 pb-2 items-start md:mt-4 mt-4 mr-4'>
                <h1 className="px-2">
                    <NavLink to="/" smooth duration={600} className="cursor-pointer"><img src={Logo} alt="excel logo" /></NavLink>
                </h1>
            </div>
            <ul className="hidden md:flex h-full items-center">
                {links.map(({ id, link }) => {
                    if (link === "contact us") {
                        return (
                            <li key={id}
                                onMouseEnter={() => setDropdown(true)}
                                onMouseLeave={() => setDropdown(false)} className="h-full flex items-center justify-center">
                                <Link to={link}
                                    smooth duration={600}>
                                    <span className="h-full font-lora px-6 cursor-pointer capitalize font-medium
                             text-white hover:text-[#719FFB]">{link}</span>
                                </Link>
                                {dropdown && <Dropdown />}
                            </li>
                        );
                    }
                    return (
                        <li key={id} className="h-full flex items-center justify-center">
                            <Link to={link} smooth duration={600}>
                                <span className="font-lora px-4 cursor-pointer capitalize font-medium
                         text-white hover:text-[#719FFB] hover:scale-105 duration-200">{link}</span>
                            </Link>
                        </li>)
                })}
            </ul>

            <div onClick={() => setNav(!nav)} className="pr-4 z-10 cursor-pointer text-white md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-16 translate-x-0 left-0 w-52 h-70
                 bg-[#0F1D39] text-white">
                    {links.map(({ id, link }) => (
                        <li key={id} className="font-lora font-medium px-4 cursor-pointer capitalize text-2xl py-6">
                            <Link onClick={() => setNav(!nav)} to={link} smooth duration={600}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
export default NavBar;