 import { useState } from "react";
import Swal from "sweetalert2";
 
export const enrolledClasses = (id)=>{
    const enroll = {enroll: 'yes'}
    fetch(`http://localhost:5000/selected-classes/${id}`,{
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(enroll)
    })
    .then(res => res.json())
    .then(data =>{
       console.log(data)
    })
}
export const addSelectedClass = (eachClass, user)=>{
    const selectedClass = {
        class_id: eachClass._id,
        class_image:  eachClass.class_image,
        class_name:  eachClass.class_name,
        teacher_name: eachClass.teacher_name,
        teacher_email:  eachClass.teacher_email,
        seat: eachClass.seat,
        fee: eachClass.fee,
        status: eachClass.status,
        select: 'yes',
        student_email: user?.email,
    }
    fetch(`http://localhost:5000/selected-classes`,{
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(selectedClass)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                icon: 'success',
                title: 'Selected',
                timer: '1500',
                showConfirmButton: false,
            })
        }
    })
}

export const getSelectedClasses = email =>{
    const [selected, setSelected] = useState([])
    fetch(`http://localhost:5000/selected-classes?email=${email}`)
    .then(res => res.json())
    .then(data =>{
        // console.log(data)
         setSelected(data)
    })
    return selected;
}

export const deleteClass = id =>{
    fetch(`http://localhost:5000/selected-classes/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            Swal.fire({
                icon: 'error',
                title: 'Deleted',
                timer: '1500',
                showConfirmButton: false,
            })
        }
    })
}