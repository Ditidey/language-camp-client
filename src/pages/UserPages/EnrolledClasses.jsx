import React, { useContext } from 'react';
import { getSelectedClasses } from '../../components/api-calls/studentApi';
import { contextProvider } from '../../AuthProvider';

const EnrolledClasses = () => {
    const { user } = useContext(contextProvider);
    const selectedClasses = getSelectedClasses(user?.email);
    const enrolledClasses = selectedClasses.filter(select => select.enroll == 'yes');
    return (
        <div className='w-full h-full p-10'>
            <hr className='w-2/3 ms-44 border-purple-600' />
            <p className='text-center text-3xl font-serif my-2'> Total {enrolledClasses.length} classes</p>
            <hr className='w-2/3 ms-44 border-purple-600 mb-10' />

            <div className='px-10 pb-20 grid md:grid-cols-2 gap-5'>
                    {
                         enrolledClasses.map(each =>
                            <div key={each._id} className={each.seat == 0 ? 'bg-red-300 card card-side' : 'card   bg-base-100 shadow-xl w-[350px] h-[400px]'}>
                                <figure><img src={each.class_image} alt="class" className='w-full h-[250px]' /></figure>
                                <div className="card-body w-full">
                                    <h2 className="card-title">{each.class_name}</h2>
                                    <p>Teacher: {each.teacher_name}</p>
                                    <p className='mt-0 pt-0'>Email: {each.teacher_email}</p>
                                    <div className='flex'>
                                        <p className='me-4'>Seat: {each.seat}</p>
                                        <p>Price: ${each.fee}</p>
                                    </div>
                                     
                                </div>
                                <button className='rounded-b-xl w-full bg-purple-600 py-2'>Paid</button>
                            </div>
                        )
                    }
                </div>
        </div>
    );
};

export default EnrolledClasses;