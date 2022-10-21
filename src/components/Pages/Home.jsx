import React from 'react';
import About from '../About';
import Blog from '../Blog';
import Gallery from '../Gallery';
import HeroSection from '../HeroSection';
import Services from '../Services';
import Testimonials from '../Testimonials';

const Home = () => {
    return (
        <>
            <HeroSection />
            <Services />
            <Gallery />
            <About />
            <Blog />
            <Testimonials />
        </>
    )
}

export default Home;