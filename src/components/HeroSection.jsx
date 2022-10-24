import React from 'react';
import { motion } from 'framer-motion';


const HeroSection = () => {
    return (
        <div name="home" className='h-screen md:h-screen w-full relative'>
            <div className='w-full h-full flex flex-col overflow-hidden'>
                <div className="md:h-96 h-72 w-full relative">
                    <motion.div
                        animate={{ scale: 1.2 }}
                        transition={{ duration: 3 }}
                        className="absolute w-full">
                        <img src="https://cdn.pixabay.com/photo/2017/08/05/14/59/chair-2584260_960_720.jpg"
                            alt="clinic" className="object-fill md:object-fill absolute w-full h-screen" />
                    </motion.div>
                    <div className="relative h-screen w-full flex px-auto">
                        <div className="flex-shrink-0 backdrop-filter backdrop-brightness-50 w-full">
                        </div>
                        <div className="absolute z-10 mt-24 md:mt-40 md:px-10 w-full">
                            <div className="flex flex-col justify-center w-full py-0 my-0 h-96 md:mt-0 mt-16 px-8 backdrop-blur-sm relative">
                                <h2 className="text-5xl sm:text-7xl font-bold text-green-400 font-serif">
                                    EXCEL
                                </h2>
                                <h4 className="text-3xl sm:text-4xl font-bold text-white py-2">
                                    PROSTHETICS AND DENTAL CARE
                                </h4>
                                <p className="py-4 max-w-md font-semibold md:text-2xl text-white">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum reprehenderit aliquam minima ratione nesciunt! Ipsa dicta dolores commodi nihil consectetur.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;