import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { contextProvider } from '../../AuthProvider';
const AddClass = () => {
    const { user } = useContext(contextProvider);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
         console.log(user)
    const onSubmit = data => {
        console.log(data)

    };
    return (
        <div className='w-full'>
            <div className="w-2/3 mx-auto shadow-2xl bg-base-100 pt-10 px-10">
                <h1 className="text-3xl font-bold text-center mt-4">Add a class now!</h1>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Name</span>
                            </label>
                            <input type="text" placeholder="Class name" {...register("className", { required: true })} className="input input-bordered" />
                            {errors.className && <span className='text-red-500'>Class Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Image</span>
                            </label>
                            <input type="file" className='file-input file-input-bordered file-input-primary w-full ' {...register("className", { required: true })}   />
                            {errors.className && <span className='text-red-500'>Class image is required</span>}
                        </div>

                        <div className='flex'>
                            <div className="form-control me-4 w-1/2">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" value={user?.email} readOnly placeholder="email" {...register("email", { required: true })} className="input input-bordered" />

                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" value={user?.displayName} readOnly placeholder="name" {...register("name", { required: true })} className="input input-bordered" />

                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class seat available</span>
                            </label>
                            <input type="text" placeholder="seat available" {...register("seat", { required: true })} className="input input-bordered" />
                            {errors.seat && <span className='text-red-500'>Seat number is required</span>}
                        </div> 
                         <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enroll fee</span>
                            </label>
                            <input type="text" placeholder="fee" {...register("fee", { required: true })} className="input input-bordered" />
                            {errors.fee && <span className='text-red-500'>Amount is required</span>}
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