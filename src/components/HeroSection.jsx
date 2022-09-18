import React from 'react';
import HeroImage from "../assets/heroimage.jpg";

const HeroSection = () => {
    return (
        <div name="herosection" className='h-screen w-full'>
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-8 pt-40 md:flex-row">
                <div className="flex flex-col justify-center py-0 my-0 h-full">
                    <h2 className="text-5xl sm:text-7xl font-bold text-blue-400">
                        EXCEL
                    </h2>
                    <h4 className="text-3xl sm:text-4xl font-bold text-gray-500 py-2">
                        PROSTHETICS AND DENTAL CARE
                    </h4>
                    <p className="py-4 max-w-md">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum reprehenderit aliquam minima ratione nesciunt! Ipsa dicta dolores commodi nihil consectetur.
                    </p>
                </div>
                <div className="flex flex-col justify-center h-full md:h-full">
                    <img src={HeroImage} alt="vector dental clinic" className="mx-10 my-2 md:my-2 w-full self-center h-full md:h-full md:w-full" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection;