import React from 'react';
import { useContext } from 'react';
import { contextProvider } from '../../AuthProvider';

const useAuth = () => {
    const auth = useContext(contextProvider);
    return auth;
};


export default useAuth;