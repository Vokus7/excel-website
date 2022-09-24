import React from 'react';
import HeroBackground from "../assets/herobackground.jpg";


const HeroSection = () => {
    return (
        <div name="home" style={{backgroundSize: "cover", 
        backgroundImage: `url(${HeroBackground})`}} className='h-screen w-full'>
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-8 pt-32 md:flex-row">
                <div className="flex flex-col justify-center py-0 my-0 h-96 px-8 backdrop-blur-md">
                    <h2 className="text-5xl sm:text-7xl font-bold text-green-400 font-serif">
                        EXCEL
                    </h2>
                    <h4 className="text-3xl sm:text-4xl font-bold text-white py-2">
                        PROSTHETICS AND DENTAL CARE
                    </h4>
                    <p className="py-4 max-w-md">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum reprehenderit aliquam minima ratione nesciunt! Ipsa dicta dolores commodi nihil consectetur.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;