import React, { useContext } from 'react';
import logo from '../../../public/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { contextProvider } from '../../AuthProvider';

const NabVar = () => {
    const {user, logoutUser} = useContext(contextProvider);

    const handleLogout = ()=>{
        logoutUser()
        .then().catch()
    }

    return (
        <div className='navbar bg-white w-full fixed shadow-xl ps-20 py-4 border-t-8 border-purple-950'>
            <div className='md:flex'>
                <div className='md:flex md:ps-14 hidden'>
                    <img src={logo} alt="" className='w-8 h-8'/>
                     <Link to='/'><p className='font-bold text-2xl font-serif ms-1 text-purple-900'>Global Talk</p></Link>
                </div>
                <div className='md:flex md:space-x-10 mx-20 md:ms-64 '>
                      <p><NavLink to='/' className={({isActive})=> isActive ? 'text-blue-800' : 'text-black'}>Home</NavLink></p>
                      <p><NavLink to='/instructors' className={({isActive})=> isActive ? 'text-blue-800' : 'text-black'}>Instructors</NavLink></p>
                      <p><NavLink to='classes' className={({isActive})=> isActive ? 'text-blue-800' : 'text-black'}>Classes</NavLink></p>
                </div>
                <div className='md:ms-52 flex'>
                    {
                        user ? <>
                        <Link className='mt-3'>Dashboard</Link>
                        {
                            user.photourl ? <img src={user.photourl} alt="" /> : <div className='w-8 h-8 rounded-full border-black'>.</div>
                        }
                        <button className='btn bg-purple-900 text-blue-100'>Logout</button>
                        </> 
                        :
                        <button className='btn bg-purple-900 text-blue-100'> <Link to='/login'>Login</Link></button>
                    }
                </div>
            </div>
        </div>
    );
};

export default NabVar;