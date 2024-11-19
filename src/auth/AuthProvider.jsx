import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext=createContext()
const AuthProvider = ({children}) => {

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    const signinUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }


    const authInfo={
        createUser,
        signinUser 

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;