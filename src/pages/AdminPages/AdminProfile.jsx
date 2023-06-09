import React, { useEffect, useRef } from 'react';
import { getStudents } from '../../components/api-calls/apiCalls';
import anime from 'animejs';

const AdminProfile = () => {
    const [students] = getStudents();
    const admin = students.filter(student => student.status == 'admin')
    const cardRef = useRef(null)
    useEffect(() => {
        anime({
            targets: cardRef.current,
            // scale: [0.5, 1],
            translateX: '2vw',
            duration: 6000,
            easing: 'easeInOutQuad',
            loop: true,
        })
    }
    )
     
    return (
        <div   className='w-full p-10 h-full flex bg-purple-100'>
            {
                admin.map(each => <div ref={cardRef} key={each._id} className='p-10'>
                    <img src={each.photo} alt="" className='w-[100px] h-[100px] rounded-full mb-3' />
                    <p>{each.name}</p>
                    <p className='uppercase text-purple-800'>{each.status}</p>
                </div>)
            }

        </div>
    );
};

export default AdminProfile;