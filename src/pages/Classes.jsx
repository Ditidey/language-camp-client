import React, { useEffect, useState } from 'react';
import useStatus from '../components/hooks/useStatus';

const Classes = () => {
    const [classes, setClasses] = useState([]);
    const [status] = useStatus();

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                const classes = data.filter(each => each.status == 'approve')
                setClasses(classes)
            })
    }, [])
    return (
        <div className='pt-28 w-full'>
            <hr className='w-2/3 ms-96 border-purple-600' />
            <p className='text-center text-3xl font-serif my-2'> Total {classes.length} classes</p>
            <hr className='w-2/3 ms-96 border-purple-600 mb-10' />

            <div className='ps-20 pb-20 grid md:grid-cols-3 lg:grid-cols-4 gap-2'>
                {
                    classes.map(each =>
                        <div key={each._id} className={each.seat == 0 ? 'bg-red-500' : 'card card-side bg-base-100 shadow-xl pe-2 w-[400px]'}>
                            <figure><img src={each.class_image} alt="class" /></figure>
                            <div className="card-body w-[200px]">
                                <h2 className="card-title">{each.class_name}</h2>
                                <p>{each.teacher_name}</p>
                                <p>{each.teacher_email}</p>
                                <div className='flex'>
                                <p className='me-4'>Seat: {each.seat}</p>
                                <p>Price: ${each.fee}</p>
                                </div>
                                <div className="card-actions justify-end">
                                    <button disabled={each.seat == 0 || status} className="btn btn-primary bg-purple-800">Select</button>
                                </div>
                            </div>
                        </div>)
                }
            </div>


        </div>
    );
};

export default Classes;