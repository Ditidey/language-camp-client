import React from 'react';
import { getClasses  } from '../../components/api-calls/apiCalls';
import { FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import { contextProvider } from '../../AuthProvider';
import { Link } from 'react-router-dom';

const InstructorClasses = () => {
    const {user} = useContext(contextProvider);
    const [classes] = getClasses();
     const classesFilter = classes.filter(each => each.teacher_email == user?.email)

    return (
        <div className='w-full px-20 py-10'>
            <hr className='w-1/2 ms-56 border-purple-600'/>
            <p className='text-center text-3xl font-serif my-2 '> Your added {classesFilter.length} classes</p>
             <hr className='w-1/2 ms-56 border-purple-600 mb-10'/>

            {
                classes && Array.isArray(classes) && classes.length > 0 &&  <div className="overflow-x-auto">
                <table className="table table-pin-rows table-pin-cols">
                    <thead>
                        <tr className='text-xl text-purple-950 font-mono bg-purple-50'>
                            <td>#</td>
                            <td>Class name</td>
                            <td>Fee</td>
                            <td>Seat</td>
                            <td>Students</td>
                            <td>Status</td>
                            <td>Feedback</td>
                            <td>Edit</td>
                        </tr>
                    </thead>
                    <tbody>
                          {
                            classesFilter?.map((each, i) => <tr key={each._id}>
                            <th>{i + 1}</th>
                            <td>{each.class_name}</td>
                            <td className='text-left'>${each.fee}</td>
                            <td className='text-center'>{each.seat}</td>
                            <td className='text-center'>{each.students || 0}</td>
                            <td>{each.status}</td>
                            <td>{each.feedback || 'No feedback'}</td>
                            <th> <button className='btn bg-purple-800 text-blue-100'><FaEdit className='text-purple-100'></FaEdit><Link to={`/dash/update-class/${each._id}`}>Edit</Link></button></th>
                        </tr>)
                          }
                    </tbody>
                </table>
            </div>
            }
        </div>
    );
};

export default InstructorClasses;