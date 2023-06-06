import React from 'react';
import logo from '../../../public/logo.png';
import { Link, NavLink } from 'react-router-dom';

const NabVar = () => {
    return (
        <div>
            <div className='md:flex'>
                <div className='flex'>
                    <img src={logo} alt="" className='w-8 h-8'/>
                    <p>Global Talk</p>
                </div>
                <div>
                      <li><NavLink to='/' className={({isActive})=> isActive ? 'text-blue-800' : 'text-black'}>Home</NavLink></li>
                      <li><NavLink className={({isActive})=> isActive ? 'text-blue-800' : 'text-black'}>Instructors</NavLink></li>
                      <li><NavLink className={({isActive})=> isActive ? 'text-blue-800' : 'text-black'}>Classes</NavLink></li>
                </div>
            </div>
        </div>
    );
};

export default NabVar;