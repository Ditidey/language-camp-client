import { useQuery } from "react-query"
import useAxios from "../hooks/useAxios"

export const saveStudents = students =>{
    fetch(`http://localhost:5000/students/${students.email}`,{
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(students)
    })
    .then(res => res.json())
    .then(data => console.log(data))
}
// export const updateUser = updateRole =>{
//     const [axiosFetch] = useAxios();
//       const {data} = useQuery({
//         queryKey: ['students'],
//         queryFn: async ()=>{
//             const res = await axiosFetch.put(`/students/${updateRole.email}`, updateRole)
//             return res.data;
//         }
//       })
//       return {data}
// }
export const getStudents = ()=>{
    const [axiosFetch] = useAxios();
    const {data: students =[], refetch} = useQuery({
        queryKey: ['students'],
        queryFn: async ()=>{
            const res = await axiosFetch('/students')
            return res.data;
        }
    })
    return [students, refetch];
}

export const getClasses = ()=>{
    const [axiosFetch] = useAxios()
    const {data: classes =[], refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async ()=>{
            const res = await axiosFetch('/classes')
            return res.data;
        }
    })
    return [classes, refetch];
}