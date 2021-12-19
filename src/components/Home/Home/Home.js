import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import HalfPrice from '../HalfPrice/HalfPrice';
import HomeServices from '../HomeServices/HomeServices';
import Testimonial from '../Testimonial/Testimonial';


// home all component added
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <HalfPrice></HalfPrice>
            <HomeServices></HomeServices>
            <Gallery></Gallery>
            <Testimonial></Testimonial>
        </div>
    );
};




export default Home;