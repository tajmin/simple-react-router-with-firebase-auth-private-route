import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="menu">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/login">Login</NavLink>
            <span> {user.displayName} </span>
            {user.email && <button onClick={logOut}>Log Out</button>}
        </div>
    );
};

export default Header;