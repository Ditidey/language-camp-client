import React from 'react';
import SliderFirst from './SliderFirst';
import PopularClasses from './PopularClasses';
import PopularInstruc from './PopularInstruc';
import About from './About';

const Home = () => {
    return (
        <div className='pt-20 pb-10'>
         
            <SliderFirst></SliderFirst>
            <PopularClasses></PopularClasses>
            <PopularInstruc></PopularInstruc>
            <About></About>
        </div>
    );
};

export default Home;