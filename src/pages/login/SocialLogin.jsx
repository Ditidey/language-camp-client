import React, { useContext, useState } from 'react';
import { contextProvider } from '../../AuthProvider';
import { FaGoogle } from 'react-icons/fa'
const SocialLogin = () => {
    const { googleLogin } = useContext(contextProvider);
    const [err, setErr] = useState('')
    const handleGoogle = () => {
            googleLogin()
            .then()
            .catch(error => setErr(error.message))
    }
    return (
        <div className='text-center ms-10'>
            <button onClick={handleGoogle} className='ms-10 p-4 flex text-lg shadow-md bg-purple-50'>
                 
                Continue with Google
                <FaGoogle className='text-yellow-400 mt-1 ms-1'></FaGoogle>
            </button>
            <p className='ms-10 text-red-600'>{err}</p>
        </div>
    );
};

export default SocialLogin;