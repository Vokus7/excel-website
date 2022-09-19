import React from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa"

const Footer = () => {
    return (
        <div className='h-11 border-t border-gray-600 w-11/12 mx-auto'>
            <div className='flex justify-center py-2 md:py-4 items-center h-full'>
                <span className='px-2 '><FaFacebook size={30} className="fill-regal-blue cursor-pointer hover:scale-110 duration-200" /></span>
                <span className='px-2'><FaTwitter size={30} className="fill-regal-blue cursor-pointer hover:scale-110 duration-200" /></span>
                <span className='px-2'><FaInstagram size={30} className="fill-regal-blue cursor-pointer hover:scale-110 duration-200" /></span>
                <span className='px-2'><FaWhatsapp size={30} className="fill-regal-blue cursor-pointer hover:scale-110 duration-200" /></span>
            </div>
        </div>
    )
}

export default Footer;