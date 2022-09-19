import React from 'react'

const Gallery = () => {
    return (
        <div name="gallery" className='h-fit w-full mb-20'>
            <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-start w-full h-full'>
                <div className='mt-2'>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-400 text-blue-400 mb-9'>
                        Gallery
                    </p>
                </div>
                <div className='grid sm:grid-cols-2 sm:p-0 md:grid-cols-3 gap-8 pt-16 md:pt-16 px-10'>
                    <div className="w-full rounded">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="watch" />
                    </div>
                    <div className="w-full rounded">
                        <img src="httpwatchs.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="watch" />
                    </div>
                    <div className="w-full rounded">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="watch" />
                    </div>
                    <div className="w-full rounded">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="watch" />
                    </div>
                    <div className="w-full rounded">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="watch" />
                    </div>
                    <div className="w-full rounded">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="watch" />
                    </div>
                </div>
                <button className='text-white bg-gradient-to-r from-cyan-500 to to-blue-500 px-5 py-2 mt-11 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>See more</button>
            </div>
        </div >
    )
}

export default Gallery;