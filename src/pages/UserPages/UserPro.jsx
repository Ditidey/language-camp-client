import React, { useContext } from 'react';
import { contextProvider } from '../../AuthProvider';

const UserPro = () => {
    const { user } = useContext(contextProvider);
    return (
        <div className='w-full h-full p-20 mx-auto bg-purple-50'>
            <img src={user.photoURL} alt="" className='w-[150px] h-[150px] rounded-full mb-3 mx-auto' />
            <p className='text-center text-2xl font-serif font-bold my-3'>{user.displayName}</p>
            <p className='text-center text-xl font-serif  '>Student id: </p>
            <p className='text-center text-xl font-serif  '>Class id: </p>
            <p className='text-center text-xl font-serif  '>Course name: </p>
            
        </div>
    );
};

export default UserPro;