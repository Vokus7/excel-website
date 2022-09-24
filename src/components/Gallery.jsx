import React from 'react';
import { MdChevronLeft, MdChevronRight } from "react-icons/md"

const Gallery = () => {

    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 300;
    };
    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 300;
    };

    return (
        <div name="gallery" className='h-fit w-full mb-10 md:pt-36'>
            <div className='flex flex-col items-center'>
                <p className='text-3xl font-bold inline w-[122px] text-gray-900 mb-5 mx-10'>
                    Gallery
                </p>
                <div className='h-full w-full flex items-center'>
                    <MdChevronLeft className='opacity-50 hover:opacity-100' onClick={slideLeft} size={40} />
                    <div id='slider' className='h-fit w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                        <div className="h-full w-full md:w-2/4 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="watch" />
                        </div>
                        <div className="w-full md:w-2/4 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="watch" />
                    </div>
                        <div className="w-full md:w-2/4 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="watch" />
                    </div>
                        <div className="w-full md:w-2/4 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="watch" />
                    </div>
                        <div className="w-full md:w-2/4 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="watch" />
                    </div>
                        <div className="w-full md:w-2/4 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="watch" />
                    </div>
                </div>
                    <MdChevronRight className='opacity-50 hover:opacity-100' onClick={slideRight} size={40} />
                </div>
            </div>
        </div >
    )
}

export default Gallery;