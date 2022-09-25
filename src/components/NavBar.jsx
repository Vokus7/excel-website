import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";



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
        <div className="flex justify-between items-center bg-white w-full h-20 px-4 text-blue-400 fixed z-40">
            <div>
                <h1 className="text-5xl font-signature ml-2">
                    <Link to="home" smooth duration={600} className="cursor-pointer">Excel</Link>
                </h1>
            </div>
            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li key={id} className="px-4 cursor-pointer capitalize font-medium text-blue-400 hover:scale-105 duration-200">
                        <Link to={link} smooth duration={600}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>

            <div onClick={() => setNav(!nav)} className="pr-4 z-10 cursor-pointer text-gray-500 md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-20 translate-x-0 left-0 w-52 h-70 bg-gradient-to-b from-black to-gray-800 text-gray-500">
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