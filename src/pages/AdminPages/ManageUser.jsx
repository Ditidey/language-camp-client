import React, { useState } from 'react';
import { getStudents } from '../../components/api-calls/apiCalls';
import useAxios from '../../components/hooks/useAxios';
import Swal from 'sweetalert2';
import { makeAdmin, makeInstructor } from '../../components/api-calls/adminApi';

const ManageUser = () => {
    const [students, refetch] = getStudents();

    const handleAdmin =(student)=>{
         makeAdmin(student, refetch)
    }

    const handleInstructor = (student) =>{
        makeInstructor(student, refetch)
    }
    return (
        <div className='w-full p-10'>
            <hr className='w-1/3 ms-96 border-purple-600' />
            <p className='text-center text-3xl font-serif my-2 '>Total {students.length} users</p>
            <hr className='w-1/3 ms-96 border-purple-600 mb-10' />
              
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className='text-xl text-purple-950 font-mono bg-purple-50'>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Make admin</th>
                            <th>Make Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map(student => <tr key={student._id}>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={student.photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td className='uppercase shadow-sm'>{student.status || 'Student'}</td>
                                <th>
                                    <button disabled={student.status} onClick={()=>handleAdmin(student)} className="btn btn-ghost bg-purple-800 text-blue-100 btn-xs ms-5">Admin</button>
                                </th>
                                <th>
                                    <button disabled={student.status} onClick={()=>handleInstructor(student)} className="btn btn-ghost bg-purple-800 text-blue-100 btn-xs mx-10">Instructor</button>
                                </th>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;