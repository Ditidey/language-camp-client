import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    const errRef = useRef(null)
    useEffect(() => {
        anime({
            targets: errRef.current,
            translateX: '60vw',
            duration: 6000,
            easing: 'easeInOutQuad',
            loop: true,
        })
    },
        [])
    return (
        <div className='bg-black px-10'>
            <div style={{ display: 'inline-block' }} ref={errRef}>
                <h2 className='text-red-700 text-7xl'>{error.message || error.status}</h2>
            </div>

        </div>
    );
};

export default ErrorPage;