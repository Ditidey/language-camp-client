import React from 'react';
import { getClasses } from '../../components/api-calls/apiCalls';
import { FaEdit } from 'react-icons/fa';

const ClassManage = () => {
    const [classes] = getClasses();
    return (
        <div className='w-full px-5 py-10 overflow-x-auto'>
            <hr className='w-1/3 ms-96 border-purple-600' />
            <p className='text-center text-3xl font-serif my-2 '> {classes.length} classes total</p>
            <hr className='w-1/3 ms-96 border-purple-600 mb-10' />
            <div className="overflow-x-auto">
                <table className="table table-pin-rows table-pin-cols  ">
                    <thead className='bg-purple-50 overflow-x-auto'>
                        <tr className='text-xl text-purple-950 font-mono bg-purple-50'>
                            <td>Image</td>
                            <td>Class name</td>
                            <td>Teacher Name</td>
                            <td>Teacher Email</td>
                            <td>Seat</td>
                            <td>Fee</td>
                            <td>Status</td>
                            <td>Approved</td>
                            <td>Denied</td>
                            <td>FeedBack</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes?.map((each, i) => <tr key={each._id}>
                                <th><div className="mask mask-squircle w-12 h-12">
                                    <img src={each.class_image} />
                                </div>  </th>
                                <td>{each.class_name}</td>
                                <td>{each.teacher_name}na</td>
                                <td>{each.teacher_email}em</td>
                                <td className='text-center'>{each.seat}</td>
                                <td className='text-left'>${each.fee}</td> 
                                <td>{each.status}</td>                              
                                <td className='text-center'>0</td>                                 
                                <th><button className='btn bg-purple-800 text-blue-100'> Approved</button></th>
                                <th><button className='btn bg-purple-800 text-blue-100'> Deny</button></th>
                                <th><button className='btn bg-purple-800 text-blue-100'><FaEdit className='text-purple-100'></FaEdit>Feedback</button></th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ClassManage;