import React from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa";





const SocialLinks = () => {
    return (
        <div className='flex w-full md:h-14 h-10 bg-[#0F1D39] text-white items-center justify-center'>
            <div className='flex justify-end items-center h-full w-full ml-4'>
                <span className='pr-4'><FaFacebook size={25} className="fill-white  cursor-pointer hover:scale-110 hover:fill-blue-500 duration-300" /></span>
                <span className='pr-4'><FaTwitter size={25} className="fill-white cursor-pointer hover:scale-110 hover:fill-blue-400 duration-300" /></span>
                <span className='pr-4'><FaInstagram size={25} className="fill-white cursor-pointer hover:scale-110 hover:fill-pink-500 duration-300" /></span>
                <span className='pr-4'><FaWhatsapp size={25} className="fill-white cursor-pointer hover:scale-110 hover:fill-green-500 duration-300" /></span>
            </div>
        </div>
    )
}

export default SocialLinks;