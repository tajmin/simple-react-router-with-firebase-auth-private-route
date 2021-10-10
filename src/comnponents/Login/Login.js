import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hook/useAuth';


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h1>Please Login Using Google Account</h1>
            <button onClick={signInUsingGoogle}>Google Sign In</button>
            <br />
            <NavLink to="/signup">New User? Sign Up</NavLink>
        </div>
    );
};

export default Login;