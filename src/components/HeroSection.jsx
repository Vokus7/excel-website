import React from 'react';


const HeroSection = () => {
    return (
        <div name="home" className='h-fit md:h-screen w-full bg-slate-400 relative md:pb-0 pb-56'>
            <img src="https://cdn.pixabay.com/photo/2017/08/05/14/59/chair-2584260_960_720.jpg" alt="dental chair"
                className='w-full h-full absolute mix-blend-overlay object-fill' />
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-8 pt-28 md:pt-32 md:flex-row">
                <div className="flex flex-col justify-center py-0 my-0 h-96 md:mt-0 mt-16 px-8 backdrop-blur-md relative">
                    <h2 className="text-5xl sm:text-7xl font-bold text-green-500 font-serif">
                        EXCEL
                    </h2>
                    <h4 className="text-3xl sm:text-4xl font-bold text-gray-800 py-2">
                        PROSTHETICS AND DENTAL CARE
                    </h4>
                    <p className="py-4 max-w-md font-semibold">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum reprehenderit aliquam minima ratione nesciunt! Ipsa dicta dolores commodi nihil consectetur.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;