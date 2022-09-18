import React from 'react'

const About = () => {
    return (
        <div name="about" className='h-screen w-full'>
            <div className='max-w-screen-lg px-4 pt-20 mx-auto flex flex-col justify-start w-full h-full'>
                <div className='mt-2'>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-400 text-blue-400'>
                        About Us
                    </p>
                </div>
                <p className='text-xl mt-11 leading-9'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium quae numquam incidunt dicta reprehenderit sequi deserunt excepturi delectus, asperiores expedita sint error ut, voluptate illum atque eveniet dolores doloribus natus rerum veniam voluptates fugiat perferendis? Recusandae deserunt sequi aspernatur doloremque, quibusdam dolore officia optio iure pariatur, quas, temporibus perferendis asperiores!                </p>
            </div>
        </div>
    )
}

export default About;