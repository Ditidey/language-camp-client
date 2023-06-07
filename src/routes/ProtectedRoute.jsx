import React, { useContext } from 'react';
import { contextProvider } from '../AuthProvider';
import { ScaleLoader } from 'react-spinners';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(contextProvider);
    
    if(loading){
        <ScaleLoader 
        loading={loading} 
        size={150}
         style={{display:"block", 
         borderColor:"red"}}>
        </ScaleLoader>
    }
    if(user){
        return children;
    }
    return (
        <Navigate to='/login' state={{from:location}} replace></Navigate>
    );
};

export default ProtectedRoute;