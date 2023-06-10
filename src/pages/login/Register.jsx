import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import loginAnimation from '../../../public/VJMz4ldy4k.json';
import { useForm } from "react-hook-form";
import { contextProvider } from '../../AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from './SocialLogin';
import { saveStudents } from '../../components/api-calls/apiCalls';

const Register = () => {
    const { registerUser, updateUser } = useContext(contextProvider);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [error, setError] = useState('');

    const onSubmit = data => {
        
        registerUser(data.email, data.password)
            .then(result => {
                console.log(result)
                console.log(result.user.UserImpl)
                const students = {
                    email: result.user.email,
                    name: data.name,
                    photo: data.photo

                }
                console.log(students)
                updateUser(data.name, data.photo)
                    .then(() => { })
                    .catch(err => {
                        setError(err.message)
                        console.log(err)
                    })

                Swal.fire({
                    title: 'Registered!',
                    text: 'Successfully created account',
                    icon: 'success',
                    timer: '1500',
                    showConfirmButton: false
                })
                saveStudents(students)
                navigate(from, {replace: true})
            }
            )
            .catch(error => {
                setError(error.message)
                console.log(error.message)
            })
    };

    const watchPassword = watch('password', '');
    return (
        <div className='pt-24 p-8'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/2">
                        <Lottie animationData={loginAnimation}></Lottie>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-10">
                        <h1 className="text-3xl font-bold text-center mt-4">Create Account!</h1>
                        <p className='text-xl text-center'>{error}</p>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="your name" {...register("name", { required: true })} className="input input-bordered" />
                                    {errors.name && <span className='text-red-500'>Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="your photo" {...register("photo", { required: true })} className="input input-bordered" />
                                    {errors.photo && <span className='text-red-500'>Photo is required</span>}
                                </div>
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
                                    <input type="password" placeholder="password" {...register("password", { required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()])[a-zA-Z!@#$%^&*()]{6,}$/ })} className="input input-bordered" />
                                    {errors.password && <span className='text-red-500'>{errors.password?.message}</span>}
                                    {errors.password?.type == 'minLength' && <p className='text-red-500'>Password should be at least 6 characters long.</p>}
                                    {errors.password?.type === 'pattern' && (
                                        <p className='text-red-500'>
                                            Password should contain at least one uppercase letter, <br /> one lowercase letter, <br /> and one special character.
                                        </p>
                                    )}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm password</span>
                                    </label>
                                    <input type="password" placeholder="confirm password" {...register("confirm", { required: true, validate: (value)=> value === watchPassword || 'The passwords do not match',})} className="input input-bordered" />
                                    {errors.confirm && <span className='text-red-500'>{errors.confirm?.message}</span>}
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary bg-purple-900">Register</button>
                                </div>
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                        <p className='text-blue-800 mb-10 ms-10 mt-2'> Already have an account? <Link to='/login'>Login</Link></p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Register;