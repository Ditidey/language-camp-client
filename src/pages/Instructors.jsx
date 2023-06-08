import React, { useEffect, useState } from 'react';

const Instructors = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/students')
            .then(res => res.json())
            .then(data => {
                const teachers = data.filter(each => each.status == 'instructor')
                setTeachers(teachers);
            })
    }, [])
    return (
        <div className='pt-24'>
            <hr className='w-2/3 ms-96 border-purple-600' />
            <p className='text-center text-3xl font-serif my-2'> Total {teachers.length} instructors</p>
            <hr className='w-2/3 ms-96 border-purple-600 mb-10' />

            <div className='p-20 grid md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    teachers.map(tech => <div key={tech._id} className="card w-96 glass">
                        <figure><img src={tech.photo} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{tech.name}</h2>
                            <p>{tech.email}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">See classes!</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Instructors;