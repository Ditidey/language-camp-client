import React, { createContext, useState } from 'react';
import app from './firebase.config';
import {getAuth} from 'firebase/auth';

export const contextProvider = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
     
    
    const infoProvider = {
        user,
        loading,
    }
    return (
       <contextProvider.Provider value={infoProvider}>
           {children}
       </contextProvider.Provider>
    );
};

export default AuthProvider;