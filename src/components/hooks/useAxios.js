import axios from 'axios';

const useAxios =()=>{
        const axiosFetch = axios.create({
            baseURL: 'http://localhost:5000'
        })
        //    todo: interceptor add
        return [axiosFetch];
}

export default useAxios;