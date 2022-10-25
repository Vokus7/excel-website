import React from 'react';
import Complete_denture from "../assets/services/complete_denture2.jpg";
import Dental_crown from "../assets/services/dental crown1.jpg";
import Flexible_denture from "../assets/services/flexible-denture2.jpg";
import Removable_denture from "../assets/services/Rpd.jpg";
import Scaling from "../assets/services/scaling & polishing.webp";
import Tooth_extraction from "../assets/services/tooth-extraction.jpg";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';





const Services = () => {

    const { ref, inView } = useInView({
        threshold: 0.1
    });
    const animation = useAnimation()

    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                initial: { opacity: 0, translateX: -50, translateY: -50 },
                animate: { opacity: 1, translateX: 0, translateY: 0 },
                transition: { type: 'spring', bounce: 0.4, duration: 3 }
            });
        }
        if (!inView) {
            animation.start({
                x: '-100vw'
            })
        }
    });

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
        <div name="services" className='h-fit w-full mb-10 pb-16 md:pt-4 pt-16 bg-slate-200'>
            <div className='max-w-screen-lg px-4 md:pt-12 mx-auto flex flex-col justify-start items-center w-full h-full'>
                <div className='mt-2'>
                    <p className='font-lora text-3xl font-bold inline py-2 border-b-4 border-blue-400 text-gray-900 w-fit leading-relaxed mb-5'>
                        Our Services
                    </p>
                </div>
                <div ref={ref} className='grid sm:grid-cols-2 sm:p-0 md:grid-cols-3 gap-8 px-10 md:pt-11 pt-9'>
                    {
                        services.map(({ id, src, title }) => (
                            <motion.div key={id}
                                animate={animation}
                                className='shadow-md shadow-blue-400 rounded-lg bg-white'>
                                <img src={src} alt={title} className="rounded-md hover:scale-105 duration-200 md:max-h-52 w-full" />
                                <div className='flex first-letter:items-center justify-center'>
                                    <button className='font-paragraph w-full px-4 py-1 duration-200 hover:scale-105 h-12 max-h-8 md:max-h-7'>{title}</button>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Services;