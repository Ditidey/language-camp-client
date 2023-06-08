import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import loginAnimation from '../../../public/VJMz4ldy4k.json';
import { useForm } from "react-hook-form";
import { contextProvider } from '../../AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from './SocialLogin';

const Login = () => {
    const {loginUser} = useContext(contextProvider);
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        // console.log(data)
        loginUser(data.email, data.password)
        .then(result => {
            // console.log(result)
            Swal.fire({                
                text: 'Successfully login',
                icon: 'success',
                timer: '1500',
                showConfirmButton: false
              })
            navigate('/')
        }
        )
        .catch(error => console.log(error.message))
    };
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/2">
                        <Lottie animationData={loginAnimation}></Lottie>
                         
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-3xl font-bold text-center mt-4">Login now!</h1>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered" />
                                    {errors.email && <span className='text-red-500'>Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" {...register("password", { required: true })} className="input input-bordered" />
                                    {errors.password && <span className='text-red-500'>Password is required</span>}
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary bg-purple-900">Login</button>
                                </div>
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                        <p className='text-blue-800 mb-10 ms-14 mt-2'>Create account? <Link to='/register'>Register</Link></p>
                    </div>

                </div>
                 
            </div>
        </div>
    );
};

export default Login;