import { useQuery } from "react-query"
import useAxios from "../hooks/useAxios"

export const getClasses = ()=>{
    const [axiosFetch] = useAxios()
    const {data: classes =[]} = useQuery({
        queryKey: ['classes'],
        queryFn: async ()=>{
            const res = await axiosFetch('/classes')
            return res.data;
        }
    })
    return [classes];
}