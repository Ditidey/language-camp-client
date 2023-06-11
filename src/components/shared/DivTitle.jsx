import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const DivTitle = ({ title }) => {
    return (
        <div>
            <hr className='w-1/3 mx-auto border-purple-600 border-2' />
            <p className='text-center text-3xl uppercase font-serif my-3'><Typewriter
                words={[title]}
                loop={15}
                delaySpeed={3000}
                typeSpeed={90}
                cursor
                cursorStyle='_'
            ></Typewriter> </p>
            <hr className='w-1/3 mx-auto border-purple-600 mb-10 border-2' />
        </div>
    );
};

export default DivTitle;