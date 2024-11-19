import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext=createContext()
const provider= new GoogleAuthProvider()

const AuthProvider = ({children}) => {


    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    const signinUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const loginGoogle=()=>{
        return signInWithPopup(auth,provider)
      }


    const authInfo={
        createUser,
        signinUser,
        loginGoogle 

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;