import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useTitle from '../components/hooks/useTitle';
import { FaBook, FaHome, FaSchool, FaUserCheck, FaUsers } from 'react-icons/fa';
import { contextProvider } from '../AuthProvider';
import useStatus from '../components/hooks/useStatus';
// import { getStatus } from '../components/api-calls/adminApi';

const DashLayout = () => {
    const {user} = useContext(contextProvider);
    const [role, setRole] = useState(null);
    useTitle('Dashboard');
    const [status] = useStatus();
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/${user?.email}`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // },[user])
    
    // console.log(userStatus)
    const isAdmin = true;
    const isInstructors = false;
    return (
        <div className='px-10'>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">    
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>               
                    <Outlet></Outlet>
                    

                </div>
                <div className="drawer-side bg-purple-900">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full text-white font-serif text-lg pt-24">
                         
                       {
                        isAdmin && <>
                         <li><NavLink to='/dash/admin' className={({isActive})=> isActive ? 'text-blue-400' : ''}><FaHome></FaHome>Admin Dashboard</NavLink></li>
                         <li><NavLink to='/dash/class-manage' className={({isActive})=> isActive ? 'text-blue-400' : ''}><FaSchool></FaSchool> Manage Classes</NavLink></li>
                         <li><NavLink to='/dash/manage-user' className={({isActive})=> isActive ? 'text-blue-400' : ''}><FaUsers></FaUsers>Manage Users</NavLink></li>
                        </>
                       }
                       {
                        isInstructors && <>
                         <li><NavLink to='/dash/profile' className={({isActive})=> isActive ? 'text-blue-400' : ''}>Profile</NavLink></li>
                         <li><NavLink to='/dash/class-add' className={({isActive})=> isActive ? 'text-blue-400' : ''}>Add a Class</NavLink></li>
                         <li><NavLink to='/dash/my-classes' className={({isActive})=> isActive ? 'text-blue-400' : ''}>My Classes</NavLink></li>
                        </>
                       }

                       
                        <hr className='border-purple-50 my-6'/>
                        <li><NavLink to='/' className={({isActive})=> isActive ? 'text-blue-400' : ''}><FaHome></FaHome>Home</NavLink></li>
                        <li><NavLink to='/classes' className={({isActive})=> isActive ? 'text-blue-400' : ''}><FaBook></FaBook>Classes</NavLink></li>
                        <li><NavLink to='/instructors' className={({isActive})=> isActive ? 'text-blue-400' : ''}><FaUserCheck></FaUserCheck>Instructors</NavLink></li>
                        <button className='bg-purple-50 p-5 text-blue-900 uppercase mt-52'>Log out</button>
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashLayout;