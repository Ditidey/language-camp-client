import React, { useContext, useState } from 'react';
import { contextProvider } from '../../AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { saveStudents } from '../../components/api-calls/apiCalls';
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const { googleLogin } = useContext(contextProvider);
    const [err, setErr] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogle = () => {
            googleLogin()
            .then(result =>{
                console.log('result',result.user)
                
                const googleuser = {
                    email: result.user.email,
                    name: result.user.displayName,
                    photo: result.user.photoURL
                }
                console.log(googleuser)
                saveStudents(googleuser);
                navigate(from, {replace: true})
            })
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