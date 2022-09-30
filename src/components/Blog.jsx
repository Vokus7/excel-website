import React from 'react';
import { Link } from 'react-scroll';
import BadBreath from '../assets/Blog/bad-breath.jpg';
import Brushing from '../assets/Blog/toothpaste.jpg';
import Toothache from '../assets/Blog/toothache.jpg';


const Blog1 = () => {
    return (
        <section name="blog" className="bg-gradient-to-bl from-gray-900 to-[#0F1D39] text-gray-100">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 pt-8 md:pt-16 pb-8">
                <div className='flex justify-center items-center w-full'>
                    <p className='text-3xl font-bold inline w-fit leading-relaxed text-white mb-8 py-2 mx-10 border-b-4 border-blue-400'>
                        Blog
                    </p>
                </div>
                <Link rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900">
                    <img src={Toothache} alt="toothache" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline cursor-pointer group-focus:underline">WORMS IN THE TEETH</h3>
                        <span className="text-xs text-gray-400">February 19, 2021</span>
                        <p>I lost one of my teeth when I was around 13yrs old. I had developed a huge black hole in my teeth
                            (dental caries). An elderly family friend convinced my mom that there were worms in my
                            teeth eating it up from the inside and my excessive consumption of sugar...</p>
                    </div>
                </Link>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <Link rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900">
                        <img className="object-cover w-full rounded h-44 bg-gray-500" src={BadBreath} alt='bad breath' />
                        <div className="p-6 space-y-2">
                            <h3 className="text-1xl font-semibold group-hover:underline group-focus:underline">MOUTH ODOUR (BAD BREATH, HALITOSIS)</h3>
                            <span className="text-xs text-gray-400">January 21, 2021</span>
                            <p>Mouth odour (bad breath, halitosis) is not only caused by not brushing your teeth well.
                                The first time I learnt that there was such a thing as "psychological halitosis" I was stunned. Let me explain
                                - psychological halitosis is when a person...</p>
                        </div>
                    </Link>
                    <Link rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900">
                        <img className="object-cover w-full rounded h-44 bg-gray-500" src={Brushing} alt='toothpaste and toothbrush' />
                        <div className="p-6 space-y-2">
                            <h3 className="text-1xl font-semibold group-hover:underline group-focus:underline">PROPER TOOTHBRUSHING TECHNIQUE</h3>
                            <span className="text-xs text-gray-400">January 22, 2021</span>
                            <p>Proper tooth brushing is not about how hard you brush your teeth or how hard your toothbrush is.
                                Some people think that if you brush hard enough with a strong toothbrush your teeth would become pure white
                                like in that Close up commercial. I once had a neighbor that...</p>
                        </div>
                    </Link>
                    <Link rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900">
                        <img className="object-cover w-full rounded h-44 bg-gray-500" src="https://source.unsplash.com/random/480x360?3" alt='' />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                            <span className="text-xs text-gray-400">January 23, 2021</span>
                            <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                        </div>
                    </Link>
                    <Link rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 hidden sm:block">
                        <img className="object-cover w-full rounded h-44 bg-gray-500" src="https://source.unsplash.com/random/480x360?4" alt='' />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                            <span className="text-xs text-gray-400">January 24, 2021</span>
                            <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                        </div>
                    </Link>
                    <Link rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 hidden sm:block">
                        <img className="object-cover w-full rounded h-44 bg-gray-500" src="https://source.unsplash.com/random/480x360?5" alt='' />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                            <span className="text-xs text-gray-400">January 25, 2021</span>
                            <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                        </div>
                    </Link>
                    <Link rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 hidden sm:block">
                        <img className="object-cover w-full rounded h-44 bg-gray-500" src="https://source.unsplash.com/random/480x360?6" alt='' />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                            <span className="text-xs text-gray-400">January 26, 2021</span>
                            <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                        </div>
                    </Link>
                </div>
                <div className="flex justify-center">
                    <button type="button" className="px-6 py-3 text-sm rounded-md hover:scale-105 ease-in-out duration-300 bg-white font-semibold text-gray-900">Load more posts...</button>
                </div>
            </div>
        </section>
    )
}

export default Blog1;