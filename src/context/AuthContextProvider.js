import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../fairbase.auth';
console.log(auth);
const authContext = createContext()

 export const AuthContextProvider = ({children}) => {

    const [username , setUsername] = useState('')



    const sinUp = async(email , password , userdisplayname)=>{
       await  createUserWithEmailAndPassword(auth , email , password )

        await updateProfile(auth.currentUser , {
            displayName : userdisplayname
        })
        const user = auth.currentUser
        setUsername({
            ...user
        })
    }

    const login = async(email , password)=>{
        await signInWithEmailAndPassword(auth , email , password)
    }

    const logOut = async()=>{
        await signOut(auth)
    }
    const googleLogin = async ()=>{
        const loginFacebook = new GoogleAuthProvider()
        await signInWithPopup(auth ,loginFacebook)
    }


    const ForGotPassWord = async (email)=>{
        await sendPasswordResetEmail(auth ,email)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , (user)=> {
            setUsername(user)
        })
        return unSubscribe
    },[])




    return (
        <authContext.Provider value={{sinUp , login , logOut , username , googleLogin ,ForGotPassWord}}>
            {children}
        </authContext.Provider>
    );
};


export const useAuthContext = ()=>{
    return useContext(authContext)
}

// export default AuthContextProvider;