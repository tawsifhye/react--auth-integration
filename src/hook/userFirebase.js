import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init'


initializeAuthentication()

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvide = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvide)
        .then(result =>{
            console.log(result.user);
            setUser(result.user)
        })
        .catch(error =>{
            setError(error.messgae)
        })
    }

    return{
        user,
        error,
        signInUsingGoogle
    }
}

export default useFirebase;