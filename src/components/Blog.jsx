import React from 'react';
import BadBreath from '../assets/Blog/bad-breath.jpg';
import Brushing from '../assets/Blog/toothpaste.jpg';
import Toothache from '../assets/Blog/toothache.jpg';



const Blog = () => {
    return (
        <div name="blog" className="bg-white h-fit md:h-fit w-full text-black pt-11 md:pt-16 pb-8">
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col items-center justify-center w-full h-full'>
                <p className='text-3xl font-bold inline w-fit leading-relaxed text-gray-900 mb-8 mx-10 border-b-4 border-blue-400'>
                    Blog
                </p>
                <div className='flex flex-col md:flex-row p-4 items-center w-full mx-auto pt-11 overflow-y-hidden'>
                    <div className='w-full md:w-1/2 px-2'>
                        <img src={Toothache} alt="black man experiencing toothache" />
                    </div>
                    <div className='flex flex-col px-2 w-full md:w-1/2 md:pl-6'>
                        <p className='font-bold text-1xl py-1'>WORMS IN THE TEETH</p>
                        <p className='text-gray-400 pt-2 pb-4'>date it was written</p>
                        <p className='leading-8 md:h-full h-28 w-full text-clip'>I lost one of my teeth when I was around 13yrs old. I had developed a huge black hole in my teeth
                            (dental caries). An elderly family friend convinced my mom that there were worms in my
                            teeth eating it up from the inside and my excessive consumption of sugar had made this possible.
                            Now, in a way he was right because indeed sugar is a culprit in causing tooth decay and I did consumed
                            too much sugar, both processed sugar (found in snacks, sweets & gums) and naturally existing ones in
                            our natural staples...
                        </p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row p-4 mt-4 items-center mx-auto w-full overflow-y-hidden'>
                    <div className='w-full md:w-1/2 px-2'>
                        <img src={Brushing} alt="toothbrush and teeth" />
                    </div>
                    <div className='flex flex-col px-2 w-full md:w-1/2 md:pl-6 h-full'>
                        <p className='font-bold text-1xl py-1'>PROPER TOOTHBRUSHING TECHNIQUE</p>
                        <p className='text-gray-400 pt-2 pb-4 '>date it was written</p>
                        <p className='leading-8 md:h-fit h-28 w-full text-clip'>Proper tooth brushing is not about how hard you brush your teeth or how hard your toothbrush is.
                            Some people think that if you brush hard enough with a strong toothbrush your teeth would become pure white
                            like in that Close up commercial. I once had a neighbor that when he brushed the entire street could hear him.
                            It was a loud, long and strenuous routine. Now, while it's recommended that...
                        </p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row p-4 mt-4 items-center mx-auto w-full overflow-y-hidden h-full'>
                    <div className='w-full md:w-1/2 px-2'>
                        <img src={BadBreath} alt="bad breath" />
                    </div>
                    <div className='flex flex-col px-2 w-full md:w-1/2 md:pl-6 h-full'>
                        <p className='font-bold text-1xl pb-1'>MOUTH ODOUR (BAD BREATH, HALITOSIS) </p>
                        <p className='text-gray-400 pt-2 pb-4 '>date it was written</p>
                        <p className='leading-8 md:h-full h-28 w-full text-clip'>Mouth odour (bad breath, halitosis) is not only caused by not brushing your teeth well.
                            The first time I learnt that there was such a thing as "psychological halitosis" I was stunned. Let me explain
                            - psychological halitosis is when a person thinks and believes that they have mouth odour but in reality they
                            don't. It can be tricky fixing such a condition but dental professionals have their way. There are other causes
                            of mouth odour outside not brushing properly....
                        </p>
                    </div>
                </div>
                <button className='w-fit h-fit px-6 py-2 mt-20 border-2 border-[#0F1D39] text-[#0F1D39] font-semibold
                 hover:bg-[#0F1D39] hover:text-white hover:scale-105 duration-300 ease-in-out'>See more</button>
            </div>
        </div>
    )
}

export default Blog;