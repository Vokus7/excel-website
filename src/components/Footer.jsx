import React from 'react';
import { Link as NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='flex flex-col w-full h-fit py-4 bg-[#0F1D39] text-white pt-8 sm:pt-8'>
            <div className='flex flex-col md:flex-row w-full px-8'>
                <div className='flex flex-col px-2'>
                    <div className='pb-6 mr-8 md:w-[500px]'>
                        <p className='text-2xl text-[#719FFB] font-semibold py-1 font-["Open_Sans"]'>
                            Don't Miss Out
                        </p>
                        <p className='py-1 font-lora text-lg'>
                            Sign up to our newsletter and also get updates on treatment discounts
                        </p>
                    </div>
                    <div>
                        <form>
                            <div className='flex flex-col sm:flex-col md:flex-row w-full'>
                                <input type="text" name="name" placeholder="Enter your name" className="mr-3 mb-3 md:mb-0 w-full md:w-60 p-2 bg-white border text-black border-gray-400 focus:outline-none" />
                                <input type="email" name="email" placeholder="Enter your email" className="w-full md:w-56 p-2 bg-white border text-black border-gray-400 focus:outline-none" />
                            </div>
                            <button className='text-white bg-[#0F1D39] w-full sm:w-fit md:w-[475px] justify-center border border-white px-5 py-2 my-5 md:my-8 flex items-center hover:scale-110 duration-300'>SIGN UP</button>
                        </form>
                    </div>
                </div>
                <div className='flex md:flex-row flex-col'>
                    <div className='flex flex-col py-4 px-2'>
                        <span className='text-2xl font-semibold text-[#719FFB] font-["Open_Sans"]'>WORKING HOURS</span>
                        <span className='py-1 font-lora md:text-lg text-md'>Monday-Friday: 8:00am - 6:00pm</span>
                        <span className='py-1 font-lora md:text-lg text-md'>Saturdays: 9:00am - 6:00pm</span>
                    </div>
                    <div className='flex flex-col py-4 pl-2 md:pl-8'>
                        <span className='text-2xl font-semibold text-[#719FFB] font-["Open_Sans"]'>Links</span>
                        <NavLink to="services" smooth duration={600}><span className='py-1 font-lora md:text-lg text-md cursor-pointer hover:text-[#719FFB]'>Services</span></NavLink>
                        <NavLink to="gallery" smooth duration={600}><span className='py-1 font-lora md:text-lg text-md cursor-pointer hover:text-[#719FFB]'>Gallery</span></NavLink>
                        <NavLink to="blog" smooth duration={600}><span className='py-1 font-lora md:text-lg text-md cursor-pointer hover:text-[#719FFB]'>Blog</span></NavLink>
                        <NavLink to="about us" smooth duration={600}><span className='py-1 font-lora md:text-lg text-md cursor-pointer hover:text-[#719FFB]'>About Us</span></NavLink>
                        <NavLink to="/" smooth duration={600}><span className='py-1 font-lora md:text-lg text-md cursor-pointer hover:text-[#719FFB]'>Home</span></NavLink>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center h-full md:h-11 border-t border-gray-400 md:py-3 w-11/12 mx-auto mt-4'>
                <div className='font-lora justify-center items-center pt-2 md:pt-0 md:text-md'>
                    <p>Copyright &#169; 2022 by Excel</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;