import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Logo from '../assets/logo/White logo.svg';



const NavBar = () => {
    const [nav, setNav] = useState(false);

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
            link: 'about us'
        },
        {
            id: 5,
            link: 'blog'
        }
    ]


    return (
        <div className="flex w-full h-16 bg-[#0F1D39] text-white items-center justify-between sticky top-0 z-40">
            <div className='flex w-40 md:h-14 justify-start md:ml-6 pb-2 items-start md:mt-4 mt-4 mr-4'>
                <h1 className="px-2">
                    <Link to="home" smooth duration={600} className="cursor-pointer"><img src={Logo} alt="excel logo" /></Link>
                </h1>
            </div>
            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li key={id} className="px-4 cursor-pointer capitalize font-medium text-white hover:text-blue-400 hover:scale-105 duration-200">
                        <Link to={link} smooth duration={600}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>

            <div onClick={() => setNav(!nav)} className="pr-4 z-10 cursor-pointer text-white md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-16 translate-x-0 left-0 w-52 h-70 bg-[#0F1D39] text-white">
                    {links.map(({ id, link }) => (
                        <li key={id} className="px-4 cursor-pointer capitalize text-2xl py-6">
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