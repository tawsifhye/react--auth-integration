import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut} from "firebase/auth";
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

    const logOut = () =>  {
        signOut(auth)
        .then(() => {
           setUser({});
        })
        .catch((error) => {
            // An error happened.
        });
    }

useEffect( () =>{
    onAuthStateChanged(auth, user =>{
        if(user){
            setUser(user);
        }
    })
},[])

    return{
        user,
        error,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;