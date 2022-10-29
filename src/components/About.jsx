import React from 'react';
import AboutImage from '../assets/about-image.jpg';

const About = () => {
    return (
        <div name="about us" className='md:h-full h-fit md:mt-8 md:mb-48 w-full pt-16 pb-9'>
            <div className='max-w-screen-lg px-4 mx-auto md:pt-0 flex flex-col justify-start items-center md:justify-center w-full h-full'>
                <div className='mt-2'>
                    <p className='font-lora text-3xl font-bold inline w-fit border-b-4 border-[#719FFB] leading-relaxed text-gray-900 mb-5 mx-10 py-2'>
                        About Us
                    </p>
                </div>
                <div className='flex flex-col'>
                    <div className='w-full'>
                        <p className='text-xl mt-11 leading-9 mx-auto'>
                            We are a dental clinic based in Benin 
                        </p>
                    </div>
                    <div className='w-full mx-auto md:mt-16'>
                        <img src={AboutImage} alt="team of medical staff" />
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default About;