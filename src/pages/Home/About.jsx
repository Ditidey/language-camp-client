import anime from 'animejs';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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
        <div className='md:relative px-20 py-10 bg-purple-50 h-[650px] '>
             <img ref={cardRef} className='h-[600px] ' src="https://media.istockphoto.com/id/1297624591/photo/smiling-female-teacher-writing-at-whiteboard-explaining-rules.webp?b=1&s=170667a&w=0&k=20&c=1DgovZC5nWYpfF6wRTyZWQmf6uMtPWa891KZ7Nw8lwk=" alt="" />

             <div className=' text-left ps-20 md:absolute bg-white p-10 top-[15%] left-[50%] h-[500px] w-[700px]'>
                <p className='text-purple-500 my-4'>Explore Global Talk</p>
                <h2 className='text-5xl font-extralight mb-10'>Enroll interactive <br /> facilitators in just a <br /> few clicks </h2>
                <p className='my-4'>Global Talk is a interactive, student-friendly company which offers international language expertise services. We have experienced team, flexible prices, and international quality certification.</p>
                <button className='uppercase bg-purple-900 text-blue-100 p-5 mt-8'><Link to='/instructors'>Learn More</Link> </button>
             </div>
        </div>
    );
};

export default About;