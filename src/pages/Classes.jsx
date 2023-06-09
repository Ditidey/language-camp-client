import React, { useContext, useEffect, useState } from 'react';
import useStatus from '../components/hooks/useStatus';
import { addSelectedClass } from '../components/api-calls/studentApi';
import { contextProvider } from '../AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const Classes = () => {
    const [classes, setClasses] = useState([]);
    const [status] = useStatus();
    const {user} = useContext(contextProvider); 
     const location = useLocation()

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                const classes = data.filter(each => each.status == 'approve')
                setClasses(classes)
            })
    }, [])

    const handleSelect = eachClass => {
        if(!user){
            Swal.fire({
                title: 'Login',
                text: 'Login First',
                timer: '1500',
                icon: 'warning',
                showConfirmButton: false,
            })
           return <Navigate to='/login' state={{from:location}} replace></Navigate>
        }
       addSelectedClass(eachClass, user)
    }
    return (
        <div className='pt-28 w-full'>
            <hr className='w-2/3 ms-96 border-purple-600' />
            <p className='text-center text-3xl font-serif my-2'> Total {classes.length} classes</p>
            <hr className='w-2/3 ms-96 border-purple-600 mb-10' />

            <div className='px-10 pb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    classes.map(each =>
                        <div key={each._id} className={each.seat == 0 ? 'bg-red-300 card card-side' : 'card card-side bg-base-100 shadow-xl pe-2 w-[470px]'}>
                            <figure><img src={each.class_image} alt="class" className='w-[180px] h-full' /></figure>
                            <div className="card-body w-[200px]">
                                <h2 className="card-title">{each.class_name}</h2>
                                <p>Teacher: {each.teacher_name}</p>
                                <p>Email: {each.teacher_email}</p>
                                <div className='flex'>
                                    <p className='me-4'>Seat: {each.seat}</p>
                                    <p>Price: ${each.fee}</p>
                                </div>
                                <div className="card-actions justify-end">
                                    <button onClick={() => handleSelect(each)} disabled={each.seat == 0 || status} className="btn btn-primary bg-purple-800">Select</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>


        </div>
    );
};

export default Classes;