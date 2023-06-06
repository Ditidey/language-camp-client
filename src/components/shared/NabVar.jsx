import React from 'react';
import logo from '../../../public/logo.png';
import { Link, NavLink } from 'react-router-dom';

const NabVar = () => {
    return (
        <div className='navbar bg-white w-full fixed shadow-xl'>
            <div className='md:flex'>
                <div className='md:flex md:ps-14 hidden'>
                    <img src={logo} alt="" className='w-8 h-8'/>
                     <Link to='/'><p className='font-bold text-2xl font-serif ms-1 text-purple-900'>Global Talk</p></Link>
                </div>
                <div className='md:flex md:space-x-10 mx-20 md:ms-64 '>
                      <p><NavLink to='/' className={({isActive})=> isActive ? 'text-blue-800' : 'text-black'}>Home</NavLink></p>
                      <p><NavLink className={({isActive})=> isActive ? 'text-blue-800' : 'text-black'}>Instructors</NavLink></p>
                      <p><NavLink className={({isActive})=> isActive ? 'text-blue-800' : 'text-black'}>Classes</NavLink></p>
                </div>
                <div className='md:ms-52'>
                    <button className='btn'> <Link>Login</Link></button>
                </div>
            </div>
        </div>
    );
};

export default NabVar;