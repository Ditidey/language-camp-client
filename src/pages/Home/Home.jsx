import React from 'react';
import SliderFirst from './SliderFirst';
import PopularClasses from './PopularClasses';
import PopularInstruc from './PopularInstruc';
import About from './About';
import { useState } from 'react';

const Home = () => {
    const [dark, setDark] = useState(false);
    console.log(dark)
    return (
        <div className={dark ? 'bg-black text-white pt-20 pb-10 relative' : ' pt-20 pb-10 relative'}>
           <div className='ms-5 shadow-2xl w-20 absolute md:end-44 md:top-4 z-20'>
              <label htmlFor="" className='text-black'>Dark Mood</label>
              <button onClick={()=>setDark(!dark)} className='toggle ms-3'></button>
           </div>
            <SliderFirst></SliderFirst>
            <PopularClasses></PopularClasses>
            <PopularInstruc></PopularInstruc>
            <About></About>
        </div>
    );
};

export default Home;