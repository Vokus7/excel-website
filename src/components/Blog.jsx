
import React from 'react';
import { Link } from 'react-router-dom';
import BadBreath from '../assets/Blog/bad-breath.jpg';
import Brushing from '../assets/Blog/toothpaste.jpg';
import Toothache from '../assets/Blog/toothache.jpg';
import { BsArrowRight } from 'react-icons/bs';



const Blog1 = () => {
    return (
        <section name="blog" className="bg-gradient-to-bl from-gray-900 to-[#0F1D39] text-gray-100">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 pt-8 md:pt-16 pb-8">
                <div className='flex justify-center items-center w-full'>
                    <p className='text-3xl font-bold inline w-fit leading-relaxed text-white mb-8 py-2 mx-10 border-b-4 border-blue-400'>
                        Blog
                    </p>
                </div>
                <Link rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full lg:grid lg:grid-cols-12 bg-gray-900">
                    <img src={Toothache} alt="toothache" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl">WORMS IN THE TEETH</h3>
                        <span className="text-xs text-gray-400">February 19, 2021</span>
                        <p>I lost one of my teeth when I was around 13yrs old. I had developed a huge black hole in my teeth
                            (dental caries). An elderly family friend convinced my mom that there were worms in my
                            teeth eating it up from the inside and my excessive consumption of sugar...
                        </p>
                        <Link to="/" smooth duration={600} className="group hover:scale-105 duration-300 text-black w-fit px-4 py-2 my-2 flex items-center rounded-md justify-center bg-white">
                            Read more
                            <span>
                                <BsArrowRight className="ml-2" />
                            </span>
                        </Link>
                    </div>
                </Link>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <Link rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900">
                        <img className="object-cover w-full rounded h-52 bg-gray-500" src={BadBreath} alt='bad breath' />
                        <div className="p-6 space-y-2">
                            <h3 className="text-1xl font-semibold">MOUTH ODOUR (BAD BREATH, HALITOSIS)</h3>
                            <span className="text-xs text-gray-400">January 21, 2021</span>
                            <p>Mouth odour (bad breath, halitosis) is not only caused by not brushing your teeth well.
                                The first time I learnt that there was such a thing as "psychological halitosis" I was stunned...
                            </p>
                            <Link to="/" smooth duration={600} className="group hover:scale-105 duration-300 text-black w-32 text-sm mt-2 px-4 
                            py-2 my-2 flex items-center rounded-md justify-center bg-white">
                                Read more
                                <span>
                                    <BsArrowRight className="ml-2" />
                                </span>
                            </Link>
                        </div>
                    </Link>
                    <Link rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900">
                        <img className="object-cover w-full rounded h-52 bg-gray-500" src={Brushing} alt='toothpaste and toothbrush' />
                        <div className="p-6 space-y-2">
                            <h3 className="text-1xl font-semibold">PROPER TOOTHBRUSHING TECHNIQUE</h3>
                            <span className="text-xs text-gray-400">January 22, 2021</span>
                            <p>Proper tooth brushing is not about how hard you brush your teeth or how hard your toothbrush is.
                                Some people think that if you brush hard enough with a strong toothbrush your teeth would become pure white...
                            </p>
                            <Link to="/" smooth duration={600} className="group hover:scale-105 duration-300 text-black w-32 text-sm mt-2 px-4 
                            py-2 my-2 flex items-center rounded-md justify-center bg-white">
                                Read more
                                <span>
                                    <BsArrowRight className="ml-2" />
                                </span>
                            </Link>
                        </div>
                    </Link>
                </div>
                <div className="flex justify-center">
                    <Link to="/blogspot"><button type="button" className="px-6 py-3 text-sm rounded-3xl hover:scale-105 ease-in-out duration-300 bg-white font-semibold text-gray-900">See all posts...</button></Link>
                </div>
            </div>
        </section>
    )
}

export default Blog1;