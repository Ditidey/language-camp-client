import React from 'react';
import { useContext } from 'react';
import { contextProvider } from '../AuthProvider';
import useStatus from '../components/hooks/useStatus';
import { Navigate, useLocation } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';

const InstructorRoute = ({children}) => {
    const {user, loading} = useContext(contextProvider);
    const [isStatus, isStatusLoading] = useStatus();
    const location = useLocation();
    if(loading || isStatusLoading)
    {
        return  <ScaleLoader 
        loading={loading} 
        size={250}
         style={{display:"block", 
         borderColor: 'red',
         color: 'red'}}>
        </ScaleLoader>
    }
    if(user && isStatus == 'instructor'){
        return children;
    }

    return <Navigate to='/' state={{from:location}}></Navigate>
};

export default InstructorRoute;