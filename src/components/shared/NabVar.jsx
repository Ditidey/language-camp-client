import React, { useContext } from 'react';
import logo from '../../../public/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { contextProvider } from '../../AuthProvider';
import unphoto from '../../../public/unphoto.png'
import { FiSearch } from 'react-icons/fi';

const NabVar = () => {
    const {user, logoutUser} = useContext(contextProvider);

    const handleLogout = ()=>{
        logoutUser()
        .then().catch()
    }

    return (
        <div className='navbar bg-white w-full fixed z-10  shadow-xl md:ps-20 uppercase '>
            <div className='md:flex '>
                <div className='md:flex md:ps-14 hidden md:p-4'>
                    <img src={logo} alt="" className='w-8 h-8'/>
                     <Link to='/'><p className='font-bold text-2xl font-serif ms-1 text-purple-900 flex'>Global Talk</p></Link>
                </div>
                <div className='flex space-x-2 mx-2 md:space-x-10 md:mx-20  md:ms-44'>
                      <p><NavLink to='/' className={({isActive})=> isActive ? 'text-blue-800' : 'text-black'}>Home</NavLink></p>
                      <p><NavLink to='/instructors' className={({isActive})=> isActive ? 'text-blue-800' : 'text-black'}>Instructors</NavLink></p>
                      <p><NavLink to='classes' className={({isActive})=> isActive ? 'text-blue-800' : 'text-black'}>Classes</NavLink></p>
                       
                </div>
                <div className='md:ms-32 flex'>
                    {
                        user ? <>
                        <Link to='/dash' className='mt-3'>Dashboard</Link>
                        {
                            user.photoURL ? <img src={user?.photoURL} alt="" className='w-10 h-10 rounded-full mx-4 mt-2'/> :  <img className=' mx-4 w-10 h-10 rounded-full' src={unphoto} alt="" />
                        }
                        <button onClick={handleLogout} className='btn bg-purple-900 text-blue-100'>Logout</button>
                        </> 
                        :
                        <button className='btn bg-purple-900 text-blue-100'> <Link to='/login'>Login</Link></button>
                    }
                </div>
                {/* <div className='bg-black w-full h-full p-5 ms-10'>
                        <FiSearch className='text-blue-200 w-6 h-6'></FiSearch>
                </div> */}
            </div>
        </div>
    );
};

export default NabVar;