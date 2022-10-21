import React from 'react';
import { Link } from 'react-router-dom';
import BadBreath from '../../assets/Blog/bad-breath.jpg';
import Brushing from '../../assets/Blog/toothpaste.jpg';
import Toothache from '../../assets/Blog/toothache.jpg';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Blogspot = () => {
    return (
        <div className='w-full h-fit bg-slate-50'>
            <div className='w-full h-full flex flex-col'>
                <div className="md:h-96 w-full relative pb-4">
                    <div className="absolute w-full">
                        <img src="https://cdn.pixabay.com/photo/2017/08/05/14/59/chair-2584260_960_720.jpg"
                            alt="clinic" className="object-contain md:object-fill absolute sm:object-fill w-full sm:h-72 md:h-96" />
                    </div>
                    <div className="relative h-60 w-full flex">
                        <div className="flex-shrink-0 backdrop-filter backdrop-brightness-50 w-full md:h-96 sm:h-72">
                        </div>
                        <div className="absolute z-10 mt-24 md:mt-56 sm:mt-48 px-4">
                            <h2 className='text-blue-400 text-3xl md:text-6xl font-bold'>Welcome to our blog</h2>
                            <p className='text-white md:text-3xl md:pr-80 font-semibold font-["Open_Sans"]'>Explore exciting, educative and informative dental articles here.
                                We are dedicated to improving both your oral health and your oral health knowledge</p>
                        </div>
                    </div>
                </div>
                <section name="blog" className="text-gray-900 sm:pt-10">
                    <div className="container max-w-6xl p-4 mx-auto space-y-6 sm:space-y-12 pt-2 md:pt-4 pb-8">
                        <div rel="noopener noreferrer" className="block max-w-sm gap-3 md:w-1/2 sm:max-w-full group focus:no-underline lg:grid lg:grid-cols-1">
                            <img src={Toothache} alt="toothache" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
                            <div className="p-4 space-y-2 lg:col-span-3">
                                <h3 className="text-2xl font-semibold sm:text-4xl cursor-pointer group-focus:underline">WORMS IN THE TEETH</h3>
                                <span className="text-xs text-black">February 19, 2021</span>
                                <p>I lost one of my teeth when I was around 13yrs old. I had developed a huge black hole in my teeth
                                    (dental caries). An elderly family friend convinced my mom that there were worms in my
                                    teeth eating it up from the inside and my excessive consumption of sugar...</p>
                                <Link to="/" smooth duration={600} className="group hover:scale-105 duration-300 text-white w-fit px-4 py-2 my-2 flex items-center rounded-md justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
                                    Read more
                                    <span>
                                        <BsFillArrowRightCircleFill className="ml-2" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <div rel="noopener noreferrer" className="max-w-sm mx-auto group focus:no-underline">
                                <img className="object-cover w-full rounded h-44 bg-gray-500" src={BadBreath} alt='bad breath' />
                                <div className="p-6 space-y-2">
                                    <h3 className="text-1xl font-semibold group-hover:underline group-focus:underline">MOUTH ODOUR (BAD BREATH, HALITOSIS)</h3>
                                    <span className="text-xs text-black">January 21, 2021</span>
                                    <p>Mouth odour (bad breath, halitosis) is not only caused by not brushing your teeth well.
                                        The first time I learnt that there was such a thing as...
                                    </p>
                                    <Link to="portfolio" smooth duration={600} className="group hover:scale-105 duration-300 text-white w-fit px-4 py-2 my-2 flex items-center rounded-md justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
                                        Read more
                                        <span>
                                            <BsFillArrowRightCircleFill className="ml-2" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline">
                                <img className="object-cover w-full rounded h-44 bg-gray-500" src={Brushing} alt='toothpaste and toothbrush' />
                                <div className="p-6 space-y-2">
                                    <h3 className="text-1xl font-semibold group-hover:underline group-focus:underline">PROPER TOOTHBRUSHING TECHNIQUE</h3>
                                    <span className="text-xs text-black">January 22, 2021</span>
                                    <p>Proper tooth brushing is not about how hard you brush your teeth or how hard your toothbrush is.
                                        Some people think that if you brush hard enough with a strong toothbrush...
                                    </p>
                                    <Link to="portfolio" smooth duration={600} className="group hover:scale-105 duration-300 text-white w-fit px-4 py-2 my-2 flex items-center rounded-md justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
                                        Read more
                                        <span>
                                            <BsFillArrowRightCircleFill className="ml-2" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Blogspot;