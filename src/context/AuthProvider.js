import React, {createContext} from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext() 

const AuthProvider = (props) => {
    console.log('props:', props);
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;