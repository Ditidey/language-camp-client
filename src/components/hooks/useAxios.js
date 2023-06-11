import axios from 'axios';
// import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { contextProvider } from '../../AuthProvider';

const useAxios = () => {
    // const navigate = useNavigate();
    // const { logoutUser } = useContext(contextProvider);

    const axiosFetch = axios.create({
        baseURL: 'https://language-camp-server.vercel.app'
    })
    //    todo: interceptor add

    // useEffect(() => {
    //     axiosFetch.interceptors.request.use((config) => {
    //         const token = localStorage.getItem('camp-access-token');
    //         if (token) {
    //             config.headers.Authorization = `Bearer ${token}`;
    //         }
    //         return config;
    //     });

    //     axiosFetch.interceptors.response.use((response) =>
    //         response,
    //         async (error) => {
    //             if (error.response && (error.response.status === 401 || error.response.status === 403)) {
    //                 await logoutUser();
    //                 navigate('/login')
    //             }
    //             return Promise.reject(error);
    //         }

    //     )
    // }, [logoutUser, navigate, axiosSecure]);
    return [axiosFetch];
}

export default useAxios;