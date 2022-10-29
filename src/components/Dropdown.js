import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Dropdown = () => {

    const [dropdown, setDropdown] = useState(false);

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
        <>
            <ul className={dropdown ? "hidden" : "flex flex-col absolute mt-[223px] bg-[#719FFB] rounded-sm"} onClick={() => setDropdown(!dropdown)}>
                {DropdownList.map((item) => {
                    return (
                        <div>
                            <li key={item.id} className='flex justify-between w-full items-center hover:bg-[#2C487F] p-2 flex-column
                        font-lora '>
                                <Link to={item.link} onClick={() => setDropdown(false)}>
                                    <div className='flex mx-2 items-center justify-between w-full'>
                                        <span>{item.title}</span><span className='fill-black cursor-pointer pr-2'>{item.icon}</span>
                                    </div>
                                </Link>
                            </li>
                        </div>

                    )
                })}
            </ul>
        </>

    )
}

export default Dropdown