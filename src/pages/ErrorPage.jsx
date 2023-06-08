import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { Link, useRouteError } from 'react-router-dom';
import {BiErrorCircle} from 'react-icons/bi';
import Lottie from "lottie-react";
import err from '../../public/error.json';
const ErrorPage = () => {
    const error = useRouteError();
    const errRef = useRef(null)
    useEffect(() => {
        anime({
            targets: errRef.current,
            translateX: '0vw',
            duration: 6000,
            // easing: 'easeInOutQuad',
            loop: true,
        })
    },
        [])
    return (
        <div className='bg-black px-10 max-h-screen w-full '>
            <Link to='/' className='text-blue-200  btn btn-outline mt-10'>Back to home</Link> <br />
            <Lottie animationData={err} className='text-blue-100 h-32 w-32'></Lottie>
            <div style={{ display: 'inline-block' }} ref={errRef} className='mt-20 pb-20 text-center ms-44'>
                <h2 className='text-red-700 text-7xl'>{error.message  }</h2>
                <h2 className='text-red-700 text-7xl'>{  error.status}</h2>
                <BiErrorCircle className='w-32 h-32 text-red-800 mb-20 pb-2'></BiErrorCircle>
                
            </div>

        </div>
    );
};

export default ErrorPage;