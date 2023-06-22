import React, { useContext, useState } from 'react';
import logo from '../../../public/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { contextProvider } from '../../AuthProvider';
import unphoto from '../../../public/unphoto.png' 
import {CgMenuHotdog, CgCloseO} from 'react-icons/cg';
const NabVar = () => {
    const {user, logoutUser} = useContext(contextProvider);
     const [open, setOpen] = useState(false);
    const handleLogout = ()=>{
        logoutUser()
        .then().catch()
    }
    
    return (
        <div className='navbar md:w-full fixed z-10  shadow-xl md:ps-20 uppercase '>
            <div className='md:flex relative'>
                <div className='flex md:ps-14   md:p-4'>
                    <img src={logo} alt="" className='w-10 h-9 bg-purple-400 rounded-full'/>
                     <Link to='/'><p className='font-bold md:text-2xl text-lg font-serif ms-2 text-purple-700 flex'>Global Talk</p></Link>
                </div>
                 <p className='md:hidden m-4 md:ms-20 '>
                   {open ? <CgCloseO onClick={() => setOpen(!open)} className='w-10 h-10 text-purple-700'></CgCloseO> : 
                   <CgMenuHotdog onClick={() => setOpen(!open)} className='w-10 h-10 text-purple-700'></CgMenuHotdog>
                   }
                 </p>
                  
                <div className= {`md:flex space-x-2 mx-2 md:space-x-10 md:mx-20  md:ms-44 md:static absolute duration-500 md:bg-transparent bg-purple-100 ${open === true ? 'top-16 p-5 ms-32' : '-top-52'}`}>
                      <p><NavLink to='/' className={({isActive})=> isActive ? 'text-blue-600' : 'text-purple-500'}>Home</NavLink></p>
                      <p><NavLink to='/instructors' className={({isActive})=> isActive ? 'text-blue-600' : 'text-purple-500'}>Instructors</NavLink></p>
                      <p><NavLink to='classes' className={({isActive})=> isActive ? 'text-blue-600' : 'text-purple-500'}>Classes</NavLink></p>       
                      <p>
                      {
                        user &&
                        <Link to='/dash' className='mt-3 text-purple-500'>Dashboard</Link>
                        }</p>              
                </div>
                <div className='md:ms-32 flex'>
                    {
                        user ? <>
                       
                        {
                            user.photoURL ? <img src={user?.photoURL} alt="" className='w-10 h-10 rounded-full mx-4 mt-2'/> :  <img className=' mx-4 w-10 h-10 rounded-full' src={unphoto} alt="" />
                        }
                        <button onClick={handleLogout} className='btn bg-purple-900 text-blue-100'>Logout</button>
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