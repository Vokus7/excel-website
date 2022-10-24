import React from 'react';
import Complete_denture from "../assets/services/complete_denture2.jpg";
import Dental_crown from "../assets/services/dental crown1.jpg";
import Flexible_denture from "../assets/services/flexible-denture2.jpg";
import Removable_denture from "../assets/services/Rpd.jpg";
import Scaling from "../assets/services/scaling & polishing.webp";
import Tooth_extraction from "../assets/services/tooth-extraction.jpg";





const Services = () => {

    const services = [
        {
            id: 1,
            src: Complete_denture,
            title: "Complete Denture",
        },
        {
            id: 2,
            src: Dental_crown,
            title: "Dental Crowns",
        },
        {
            id: 3,
            src: Flexible_denture,
            title: "Flexible Denture",
        },
        {
            id: 4,
            src: Removable_denture,
            title: "Removable Partial Denture",
        },
        {
            id: 5,
            src: Scaling,
            title: "Scaling & Polishing",
        },
        {
            id: 6,
            src: Tooth_extraction,
            title: "Extraction",
        },
    ]


    return (
        <div name="services" className='h-fit w-full mb-10 pb-6 md:pt-4 pt-16'>
            <div className='max-w-screen-lg px-4 md:pt-12 mx-auto flex flex-col justify-start items-center w-full h-full'>
                <div className='mt-2'>
                    <p className='text-3xl font-bold inline py-2 border-b-4 border-blue-400 text-gray-900 w-fit leading-relaxed mb-5'>
                        Our Services
                    </p>
                </div>
                <div className='grid sm:grid-cols-2 sm:p-0 md:grid-cols-3 gap-8 px-10 md:pt-11 pt-9'>
                    {
                        services.map(({ id, src, title }) => (
                            <div key={id} className='shadow-md shadow-blue-400 rounded-lg'>
                                <img src={src} alt={title} className="rounded-md hover:scale-105 duration-200 md:max-h-52 w-full" />
                                <div className='flex first-letter:items-center justify-center'>
                                    <button className='w-full px-4 py-1 font-semibold duration-200 hover:scale-105 h-12 max-h-8 md:max-h-7'>{title}</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Services;