import React from 'react';
import { getStudents } from '../../components/api-calls/apiCalls';

const AdminProfile = () => {
    const [students] = getStudents();
    const admin = students.filter(student => student.status == 'admin')
    console.log(admin)
    return (
        <div className='w-full p-10 h-full'>
            {
                admin.map(each => <div key={each._id} className='p-10'>
                    <img src={each.photo} alt="" className='w-15 h-15 rounded-full mb-3' />
                    <p>{each.name}</p>
                    <p className='uppercase text-purple-800'>{each.status}</p>
                </div>)
            }

        </div>
    );
};

export default AdminProfile;