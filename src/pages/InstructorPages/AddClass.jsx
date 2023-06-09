import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { contextProvider } from '../../AuthProvider';
import useAxios from '../../components/hooks/useAxios';
import Swal from 'sweetalert2';
const AddClass = () => {
    const { user } = useContext(contextProvider);
    const [axiosFetch] = useAxios()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
         const img_url = `https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_IMG_TOKEN}`

    const onSubmit = data => {
        console.log(data)
        const formData = new FormData();
        formData.append('image', data.photo[0])
         fetch(img_url, {
            method: 'POST',
            body: formData
         }).then(res => res.json()).then(file => {
            console.log(file)
            if(file.success){
                const imgURL = file.data.display_url;
                const newClass = {
                    class_image: imgURL,
                    class_name: data.className,
                    teacher_name: data.name,
                    teacher_email: data.email,
                    seat: data.seat,
                    fee: data.fee,
                    status: 'pending'
                }
                console.log(newClass)
                axiosFetch.post('/add-classes', newClass)
                .then(res => {
                    console.log(res)
                    if(res.data.insertedId){
                        Swal.fire({
                            icon: 'success',
                            timer: '1500',
                            text: 'Class added successfully',
                            showConfirmButton: false,
                        })
                      
                    }
                })
            }
         })


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
                            <input type="file" className='file-input file-input-bordered file-input-primary w-full ' {...register("photo", { required: true })}   />
                            {errors.className && <span className='text-red-500'>Class image is required</span>}
                        </div>

                        <div className='flex'>
                            <div className="form-control me-4 w-1/2">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  value={user?.email} readOnly placeholder="email" {...register("email", { required: true })} className="input input-bordered" />

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