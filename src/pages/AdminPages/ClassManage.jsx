import React, { useState } from 'react';
import { getClasses } from '../../components/api-calls/apiCalls';
import { FaEdit } from 'react-icons/fa';
import useAxios from '../../components/hooks/useAxios';
import { statusApprove, statusDeny } from '../../components/api-calls/adminApi';

const ClassManage = () => {
    const [classes] = getClasses();

    const handleApprove = (each) => {
        statusApprove(each);
    }
    const handleDeny = each => {
        statusDeny(each);
    }
    const handleFeedback = event =>{
        //  event.preventDefault();
          const feedback = event.target.feedback.value;
         console.log(event.target.feedback.value)
        //  console.log(event.target.value)
    }
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
                                <td className='uppercase'>{each.status}</td>
                                 
                                <th><button disabled={each.status == 'approve' || each.status == 'deny'} onClick={() => handleApprove(each)} className='btn bg-purple-800 text-blue-100'> Approved</button></th>
                                <th><button disabled={each.status == 'approve' || each.status == 'deny'} onClick={() => handleDeny(each)} className='btn bg-purple-800 text-blue-100'> Denied</button></th>
                                <th><button value={each._id} onClick={() => window.my_modal_1.showModal()} className='btn bg-purple-800 text-blue-100'><FaEdit className='text-purple-100'></FaEdit>Feedback</button></th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

            <dialog id="my_modal_1" className="modal">
                <form onSubmit={handleFeedback} method="dialog" className="modal-box">
                    <p className='text-2xl font-serif text-center'>Feedback for instructor</p>
                    <div>
                        <input type="textarea" name='feedback' placeholder='Feedback please' className='border border-purple-300  mt-10 w-full h-20 p-4' />
                        <input type="submit" value="Send" className='btn btn-outline w-1/2 bg-purple-800 text-blue-100 ms-28 mt-3' />
                    </div>
                    <div className="modal-action">
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>
        </div>
    );
};

export default ClassManage;