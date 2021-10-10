import React from 'react';
import useAuth from '../../hooks/useAuth'
const Home = () => {
    const {user} = useAuth();
    return (
        <div>
           <h2>Hello Mango People</h2>
           <h5>User: {user.displayName}</h5> 
        </div>
    );
};

export default Home;