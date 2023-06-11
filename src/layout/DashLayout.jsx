import React, { useContext  } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useTitle from '../components/hooks/useTitle';
import {SiGoogleclassroom} from 'react-icons/si'
import {  FaHistory, FaHome, FaSchool, FaUserAlt, FaUserCheck, FaUsers } from 'react-icons/fa';
import {MdPlaylistAdd, MdCollectionsBookmark, MdSupervisedUserCircle, MdVerifiedUser, MdClass} from 'react-icons/md';
import { contextProvider } from '../AuthProvider';
import useStatus from '../components/hooks/useStatus';
import logo from '../../public/logo.png'
import { useState } from 'react';

const DashLayout = () => {
    useTitle('dashboard')
    const [dark, setDark] = useState(false);
    const {user, logoutUser} = useContext(contextProvider);
    useTitle('Dashboard');
    const [status] = useStatus();
    //  console.log(status)
    const handleLogout = ()=>{
        logoutUser()
        .then(()=>{})
        .catch(()=>{})
    }
    return (
        <div className={dark ? 'bg-black text-white  ' : ''}>
             <div className=' mt-5  shadow-2xl w-20 absolute md:end-20 md:top-4 z-20'>
                <label htmlFor="" className='text-black'>Dark Mode</label>
                <button onClick={() => setDark(!dark)} className='toggle ms-3'></button>
            </div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">    
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>               
                    <Outlet></Outlet>
                    

                </div>
                <div className="drawer-side bg-purple-900">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <div className='px-6 pt-5'>
                        <img src={logo} alt="" className='w-20 h-16 mt-5'/>
                        <p className='text-4xl text-sky-200 font-serif mt-3'>Global Talk</p>
                        
                    </div>
                    <ul className="menu p-4 w-80 h-full text-white font-serif text-lg pt-24">
                          
                       {
                         status == 'admin' && <>
                         <li><NavLink to='/dash/admin-profile' className={({isActive})=> isActive ? 'text-blue-400' : ''}><MdVerifiedUser></MdVerifiedUser>Admin Dashboard</NavLink></li>
                         <li><NavLink to='/dash/class-manage' className={({isActive})=> isActive ? 'text-blue-400' : ''}><FaSchool></FaSchool> Manage Classes</NavLink></li>
                         <li><NavLink to='/dash/manage-user' className={({isActive})=> isActive ? 'text-blue-400' : ''}><FaUsers></FaUsers>Manage Users</NavLink></li>
                        </>
                       }

                       {
                        status == 'instructor' && <>
                         <li><NavLink to='/dash/teacher-profile' className={({isActive})=> isActive ? 'text-blue-400' : ''}> <MdSupervisedUserCircle></MdSupervisedUserCircle> Profile</NavLink></li>
                         <li><NavLink to='/dash/class-add' className={({isActive})=> isActive ? 'text-blue-400' : ''}><MdPlaylistAdd></MdPlaylistAdd> Add a Class</NavLink></li>
                         <li><NavLink to='/dash/my-classes' className={({isActive})=> isActive ? 'text-blue-400' : ''}><MdCollectionsBookmark></MdCollectionsBookmark>My Classes</NavLink></li>
                        </>
                       } 
                        {
                            !status && <>
                             <li><NavLink to='/dash/user-profile' className={({isActive})=> isActive ? 'text-blue-400' : ''}><FaUserAlt></FaUserAlt> Profile</NavLink></li>
                             <li><NavLink to='/dash/select-classes' className={({isActive})=> isActive ? 'text-blue-400' : ''}><SiGoogleclassroom></SiGoogleclassroom>Selected Classes</NavLink></li>
                             <li><NavLink to='/dash/enroll-classes' className={({isActive})=> isActive ? 'text-blue-400' : ''}> <MdClass></MdClass> Enrolled Classes</NavLink></li>
                             <li><NavLink to='/dash/payment-history' className={({isActive})=> isActive ? 'text-blue-400' : ''}> <FaHistory></FaHistory> Payment History</NavLink></li>
                            </>
                        }
                       
                        <hr className='border-purple-50 my-6'/>
                        <li><NavLink to='/' className={({isActive})=> isActive ? 'text-blue-400' : ''}><FaHome></FaHome>Home</NavLink></li>
                        <li><NavLink to='/classes' className={({isActive})=> isActive ? 'text-blue-400' : ''}><FaSchool></FaSchool>  Classes</NavLink></li>
                        <li><NavLink to='/instructors' className={({isActive})=> isActive ? 'text-blue-400' : ''}><FaUserCheck></FaUserCheck>Instructors</NavLink></li>
                        <button onClick={handleLogout} className='bg-purple-50 p-5 text-blue-900 uppercase mt-40'>Log out</button>
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashLayout;