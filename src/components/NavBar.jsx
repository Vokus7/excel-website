import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { Link as NavLink } from "react-router-dom";
import Logo from '../assets/logo/White logo.svg';
import { RiArrowDropDownLine } from "react-icons/ri";
import Dropdown from "./Dropdown";
import { AnimatePresence, motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa";



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
            link: 'contact us',
            icon: <RiArrowDropDownLine size={25} />
        },
        {
            id: 5,
            link: 'blog'
        }
    ];

    const DropdownList = [
        {
            id: 1,
            link: '/',
            title: 'Whatsapp',
            icon: <FaWhatsapp size={20} />
        },
        {
            id: 2,
            link: '/',
            title: 'Facebook',
            icon: <FaFacebook size={20} />
        },
        {
            id: 3,
            link: '/',
            title: 'Twitter',
            icon: <FaTwitter size={20} />
        },
        {
            id: 4,
            link: '/',
            title: 'Instagram',
            icon: <FaInstagram size={20} />
        },
    ];



    return (
        <div className="flex w-full h-16 bg-[#0F1D39] text-white items-center md:px-0 justify-between sticky top-0 z-40">
            <div className='flex w-40 md:h-14 justify-start md:ml-6 pb-2 items-start md:mt-4 mt-4 mr-4'>
                <h1 className="px-2">
                    <NavLink to="/" smooth duration={600} className="cursor-pointer"><img src={Logo} alt="excel logo" /></NavLink>
                </h1>
            </div>
            <ul className="hidden md:flex h-full items-center px-4">
                {links.map(({ id, link, icon }) => {
                    if (link === "contact us") {
                        return (
                            <li key={id}
                                onMouseEnter={() => setDropdown(true)}
                                onMouseLeave={() => setDropdown(false)} className="h-full flex items-center justify-center">
                                <Link to={link}
                                    smooth duration={600} className="group w-fit flex items-center justify-center px-3 py-1 
                                    hover:bg-[#719FFB] hover:rounded-sm">
                                    <span className="h-full font-lora cursor-pointer capitalize font-medium
                             text-white">{link}</span><span>{icon}</span>
                                </Link>
                                {dropdown && <Dropdown />}
                            </li>
                        );
                    }
                    return (
                        <li key={id} className="h-full flex items-center justify-center">
                            <Link to={link} smooth duration={600} className="group w-fit flex items-center justify-center 
                            px-3 py-1 hover:bg-[#719FFB] hover:rounded-sm">
                                <span className="font-lora cursor-pointer capitalize font-medium
                         text-white">{link}</span><span>{icon}</span>
                            </Link>
                        </li>)
                })}
            </ul>

            <div onClick={() => setNav(!nav)} className="pr-4 z-10 cursor-pointer text-white md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            <AnimatePresence>
            {nav && (
                <motion.ul
                    initial={{ opacity: 0, translateX: '-200px' }}
                    animate={{ opacity: 1, translateX: 0 }}
                        exit={{ translateX: '-200px' }}
                    transition={{ type: 'spring', bounce: 0.1, duration: 1 }}
                    className="flex flex-col justify-center items-center absolute top-16 left-0 w-44 h-fit
                    bg-[#0F1D39] text-white py-3 rounded-sm">
                    {links.map(({ id, link, icon }) => {
                        if (link === "contact us") {
                            return (
                                <AnimatePresence>
                                    <motion.li
                                        intial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        layout
                                        key={id} className="font-lora font-medium px-4 cursor-pointer capitalize text-[19px] py-3">
                                    <Link onClick={() => setDropdown(!dropdown)} to={link} className="group w-full flex 
                                    items-center justify-center">
                                        {link}<span>{icon}</span>
                                    </Link>
                                        <ul className={dropdown ? "flex flex-col mt-[20px] bg-[#719FFB]" : "hidden"}
                                            onClick={() => setDropdown(!dropdown)}>
                                            {dropdown && DropdownList.map((item) => {
                                                return (
                                                    <li key={item.id} className='flex justify-center w-full items-center 
                                                    hover:bg-[#2C487F] p-2 flex-column font-lora '>
                                                        <NavLink to={item.link} onClick={() => setDropdown(false)}>
                                                            <div className='flex mx-2 items-center justify-start w-36'>
                                                                <span className='fill-black cursor-pointer pr-4'>{item.icon}</span>
                                                                <span className='pr-3'>{item.title}</span>
                                                            </div>
                                                        </NavLink>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </motion.li>
                                </AnimatePresence>
                            )
                        }
                        return (
                            <li key={id} className="font-lora font-medium px-4 cursor-pointer capitalize text-[19px] py-3">
                                <Link onClick={() => setNav(!nav)} to={link} className="group w-fit flex items-center justify-center">
                                    {link}<span>{icon}</span>
                                </Link>
                            </li>
                        )

                    })}
                </motion.ul>

            )}
            </AnimatePresence>
        </div>
    );
}
export default NavBar;