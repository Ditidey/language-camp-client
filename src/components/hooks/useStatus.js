import React, { useContext } from 'react';
import { contextProvider } from '../../AuthProvider';
import useAxios from './useAxios';
import { useQuery } from 'react-query';

const useStatus = () => {
  const {user} = useContext(contextProvider);
  const [axiosFetch] = useAxios();

  const {data: status} = useQuery({
    queryKey: ['status', user?.email],
    queryFn: async ()=>{
        const res = await axiosFetch.get(`/students/${user?.email}`)
        console.log(res.data.status)
        return res.data;
    }
  });

  return [status]
};

export default useStatus;