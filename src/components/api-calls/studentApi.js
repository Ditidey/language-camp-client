 import { useState } from "react";
import Swal from "sweetalert2";
 
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
    fetch(`http://localhost:5000/selected-classes/${user?.email}`,{
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(selectedClass)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.upsertedCount > 0){
            Swal.fire({
                
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
        console.log(data)
         setSelected(data)
    })
    return selected;
}