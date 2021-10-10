import React, {createContext} from 'react';
import useFirebase from '../hooks/useFirebase';

const AuthContext = createContext() 

const AuthProvider = ({children}) => {
    const allContext = useFirebase();
    return (
        <AuthContext value={allContext}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;