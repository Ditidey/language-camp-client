import React from 'react';
import SliderFirst from './SliderFirst';
import PopularClasses from './PopularClasses';
import PopularInstruc from './PopularInstruc';
import About from './About';
import { useState } from 'react';
import useTitle from '../../components/hooks/useTitle';
import Faq from './Faq';
import { FiMessageSquare } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Home = () => {
    useTitle('Home')
    const [dark, setDark] = useState(false);
    // console.log(dark)
    return (
        <div className={dark ? 'bg-black text-white pt-20 pb-10 relative' : ' pt-20 pb-10 relative'}>
           <div className='ms-5 shadow-2xl w-20 absolute md:end-20 uppercase text-sm md:top-4 z-20'>
              <label htmlFor="" className='text-black'>Dark Mode</label>
              <button onClick={()=>setDark(!dark)} className='toggle ms-3'></button>
           </div>
            <SliderFirst></SliderFirst>
            <PopularClasses></PopularClasses>
            <PopularInstruc></PopularInstruc>
            <About></About>
            <Faq></Faq>

            <div className='bg-transparent bottom-0 fixed ms-10 ps-2 mt-5'>
                <p className='text-xl font-serif font-bold flex text-purple-700 mb-2'>
                     <FiMessageSquare className='bg-purple-800 text-blue-50 w-16 h-16 rounded-full p-4'></FiMessageSquare> <span className='mt-4 ms-2 bg-purple-50 px-2 pt-2 rounded-2xl'> 
                      <Link to='/chat'>Message us</Link></span></p>
                
            </div>
        </div>
    );
};

export default Home;