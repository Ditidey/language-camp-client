import anime from 'animejs';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DivTitle from '../../components/shared/DivTitle';
import { Typewriter } from 'react-simple-typewriter';
const About = () => {
    const cardRef = useRef(null)
    useEffect(() => {
        anime({
            targets: cardRef.current,
            scale: [0.5, 1],
            // translateX: '2vw',
            duration: 40000,
            // easing: 'easeInOutQuad',
            loop: true,
        })
    }
    )
    return (
        <div className='mt-20'> 
        <DivTitle title={'Explore us'}></DivTitle>
        <div className='md:relative md:px-20 px-3 py-10 bg-purple-50 h-[650px] mb-60 md:mb-2'>

             <img ref={cardRef} className='h-[600px] ' src="https://media.istockphoto.com/id/1297624591/photo/smiling-female-teacher-writing-at-whiteboard-explaining-rules.webp?b=1&s=170667a&w=0&k=20&c=1DgovZC5nWYpfF6wRTyZWQmf6uMtPWa891KZ7Nw8lwk=" alt="" />

             <div className='bg-purple-800 text-white text-left md:ps-20 ps-3 md:absolute  p-10 top-[15%] left-[50%] md:h-[500px] h-[700px] md:w-[700px] mb-40 md:mb-2'>
                <p className='text-blue-300 my-4'>Explore Global Talk</p>
                <h2 className='text-5xl font-extralight mb-10'>
                Enroll <br /> interactive facilitators <br />
                <Typewriter
                words={[ ' in just a few clicks']}
                loop={15}
                delaySpeed={3000}
                typeSpeed={90}
                
            ></Typewriter>
                      </h2>
                <p className='my-4'>Global Talk is a interactive, student-friendly company which offers international language expertise services. We have experienced team, flexible prices, and international quality certification.</p>
                <button className='uppercase bg-purple-950 text-blue-100 p-5 mt-8'><Link to='/instructors'>Learn More</Link> </button>
             </div>
        </div>
        </div>
    );
};

export default About;