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
                        <motion.div
                            initial={{ opacity: 0, translateX: '1000px' }}
                            animate={{ opacity: 1, translateX: 0 }}
                            transition={{ type: 'spring', bounce: 0.3, duration: 3 }}
                            className="absolute z-10 mt-24 md:mt-40 md:px-10 w-full">
                            <div className="flex flex-col justify-center w-fit py-0 my-0 h-96 md:mt-0 mt-16 px-8 backdrop-blur-sm relative">
                                <h2 className="font-paragraph text-5xl sm:text-7xl font-bold text-[#719FFB] font-serif">
                                    EXCEL
                                </h2>
                                <h4 className="text-3xl sm:text-4xl font-bold text-white py-2">
                                    PROSTHETICS AND DENTAL CARE
                                </h4>
                                <p className="font-semibold py-4 max-w-lg md:text-2xl text-white">
                                    Welcome to Excel Prosthetics and Dental Care, your one stop for everything dental related. We encourage you
                                    to browse through our gallery to see equisite and world-class restorative dental prosthetics and
                                    treatment procedures.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;