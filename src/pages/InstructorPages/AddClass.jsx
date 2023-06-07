import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { contextProvider } from '../../AuthProvider';
const AddClass = () => {
    const {user} = useContext(contextProvider);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
         
    };
    return (
        <div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-3xl font-bold text-center mt-4">Add a class now!</h1>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="card-body">

                            <div className='flex'>
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
                            </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary bg-purple-900">Add</button>
                                </div>
                            </div>
                        </form>
                    </div>

        </div>
    );
};

export default AddClass;