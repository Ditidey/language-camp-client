import React from 'react';
import { useContext } from 'react';
import { contextProvider } from '../../AuthProvider';
import { deleteClass, enrolledClasses, enrolledSelectedClasses, getSelectedClasses } from '../../components/api-calls/studentApi';
import { Link } from 'react-router-dom';

const SelectedClasses = () => {
    const { user } = useContext(contextProvider);
    const classes = getSelectedClasses(user?.email)
    const selectedClasses = classes.filter(each => each.enroll != 'yes')

    const handleDelete = id => {
        deleteClass(id);
    }

    // const handlePay = oneClass => {
    //     enrolledClasses(oneClass);
    //     enrolledSelectedClasses(oneClass);
    // }
    return (
        <div className='pt-10 w-full h-full'>
            <hr className='w-2/3 ms-44 border-purple-600' />
            <p className='text-center text-3xl font-serif my-2 uppercase'> Total {selectedClasses.length} classes</p>
            <hr className='w-2/3 ms-44 border-purple-600 mb-10' />
            {
                selectedClasses && Array.isArray(selectedClasses) && selectedClasses.length > 0 &&
                    <div>
                        <div className='px-10 pb-20 grid md:grid-cols-2 gap-5'>
                            {
                                selectedClasses.map(each =>
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
                                            <div className="card-actions flex justify-end mt-4">
                                                <button onClick={() => handleDelete(each._id)} className="btn bg-yellow-500">Delete</button>
                                                <button disabled={each.enroll == 'yes'} className="btn btn-primary bg-purple-800 px-7"><Link to={`/dash/payment/${each._id}`}>Pay</Link></button>
                                                {/* <button disabled={each.enroll == 'yes'} onClick={() => handlePay(each)} className="btn btn-primary bg-purple-800 px-7">Pay</button> */}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>


                    </div>
            }
        </div>
    );
};

export default SelectedClasses;