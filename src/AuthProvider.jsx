import React, { createContext, useEffect, useState } from 'react';
import app from './firebase.config';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';

export const contextProvider = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
     
    const registerUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = ()=>{
          setLoading(true);
          return signInWithPopup(auth, googleProvider)
    }
    const logoutUser = ()=>{
        setLoading(true);
        return signOut(auth);
    }
    const updateUser = (name, photo) =>{
        setLoading(true);
       return updateProfile(auth.currentUser, {
            displayName:  name, photoURL: photo
          })
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        });
        return() =>{
               return unsubscribe();
        }
    },[])
    const infoProvider = {
        user,
        loading,
        registerUser,
        loginUser,
        googleLogin,
        logoutUser,
        updateUser,
    }
    return (
       <contextProvider.Provider value={infoProvider}>
           {children}
       </contextProvider.Provider>
    );
};

export default AuthProvider;