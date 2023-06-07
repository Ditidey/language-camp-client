import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useTitle from '../components/hooks/useTitle';

const DashLayout = () => {
    useTitle('Dashboard')
    const isAdmin = true;
    const isInstructors = false;
    return (
        <div className='px-10'>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">                   
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-purple-900">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full text-white font-serif text-lg pt-24">
                         
                       {
                        isAdmin && <>
                         <li><NavLink to='/dash/class-manage' className={({isActive})=> isActive ? 'text-blue-400' : ''}>Manage Classes</NavLink></li>
                         <li><NavLink to='/dash/manage-user' className={({isActive})=> isActive ? 'text-blue-400' : ''}>Manage Users</NavLink></li>
                        </>
                       }
                       {
                        isInstructors && <>
                         <li><NavLink to='/dash/profile' className={({isActive})=> isActive ? 'text-blue-400' : ''}>Profile</NavLink></li>
                         <li><NavLink to='/dash/class-add' className={({isActive})=> isActive ? 'text-blue-400' : ''}>Add a Class</NavLink></li>
                         <li><NavLink to='/dash/my-classes' className={({isActive})=> isActive ? 'text-blue-400' : ''}>My Classes</NavLink></li>
                        </>
                       }

                        <div className='divider bg-white'></div>
                        <li><NavLink to='/' className={({isActive})=> isActive ? 'text-blue-400' : ''}>Home</NavLink></li>
                        <li><NavLink to='/classes' className={({isActive})=> isActive ? 'text-blue-400' : ''}>Classes</NavLink></li>
                        <li><NavLink to='/instructors' className={({isActive})=> isActive ? 'text-blue-400' : ''}>Instructors</NavLink></li>
                        <button className='bg-purple-50 p-5 text-blue-900 uppercase mt-10'>Log out</button>
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashLayout;