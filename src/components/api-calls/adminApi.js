import Swal from "sweetalert2";
import useAxios from '../../components/hooks/useAxios';
 

const [axiosFetch] = useAxios()


export const makeAdmin = student => {
    const adminUsers = {
        email: student.email,
        name: student.displayName,
        photo: student.photoURL,
        status: 'admin'
    }
    Swal.fire({
        title: 'Are you sure to make admin?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Make admin!'
    }).then((result) => {
        if (result.isConfirmed) {
            axiosFetch.put(`/students/${student.email}`, adminUsers)
                .then(res => {
                    console.log(res);
                    if (res.data.modifiedCount > 0) {

                        Swal.fire(
                            'Admin!',
                            'success'
                        )
                    }
                })
        }
    })
}
export const makeInstructor = student => {
    const adminUsers = {
        email: student.email,
        name: student.displayName,
        photo: student.photoURL,
        status: 'instructor'
    }
    Swal.fire({
        title: 'Are you sure to make instructor?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Make instructor!'
    }).then((result) => {
        if (result.isConfirmed) {
            axiosFetch.put(`/students/${student.email}`, adminUsers)
                .then(res => {
                    console.log(res);
                    if (res.data.modifiedCount > 0) {

                        Swal.fire(
                            'Instructor!',
                            'success'
                        )
                    }
                })
        }
    })
}

export const statusApprove = each => {
    const adminUpdate = {
        status: 'approve'
    }
    Swal.fire({
        title: 'Are you sure to approve the class?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Approve!'
    }).then((result) => {
        if (result.isConfirmed) {
            axiosFetch.patch(`/classes/${each._id}`, adminUpdate)
                .then(res => {
                    console.log(res);
                    if (res.data.modifiedCount > 0) {

                        Swal.fire(
                            'Approved!',
                            'success'
                        )
                    }
                })
        }
    })
}
export const statusDeny = each => {
    const adminUpdate = {
        status: 'deny'
    }
    Swal.fire({
        title: 'Are you sure to deny the class?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Deny!'
    }).then((result) => {
        if (result.isConfirmed) {
            axiosFetch.patch(`/classes/${each._id}`, adminUpdate)
                .then(res => {
                    console.log(res);
                    if (res.data.modifiedCount > 0) {

                        Swal.fire(
                            'Denied!',
                            'success'
                        )
                    }
                })
        }
    })
}

export const sendFeedback = (id, feedback) => {
    const addFeedback = { feedback: feedback };
     fetch(`http://localhost:5000/classes/${id}`,
     {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(addFeedback)
     }  )
        .then(res => res.json())
        .then(data =>{
            if (data.modifiedCount > 0) {

                Swal.fire(
                    'Sended Feedback!',
                    'success'
                )
            }
        })
}